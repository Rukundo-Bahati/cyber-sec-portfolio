
import { Book, ExternalLink, Github, Mail, Send,Twitter,X } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_TOKEN,
          ...formData
        })
      });

      const result = await response.json();
      
      if (result.success) {
        setResponseMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setResponseMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setResponseMessage('Failed to send message. Please try again later.');
    }

    setIsSubmitting(false);
  };;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 glow-text">
          <span className="text-primary">Get</span> In Touch
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-lg p-6 glow-border">
              <h3 className="text-xl font-cyber font-bold mb-4 text-primary">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in cybersecurity collaboration, penetration testing projects, 
                or just want to discuss the latest security trends? Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                <a
                  href="https://github.com/Rukundo-Bahati"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                >
                  <Github className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">GitHub Profile</span>
                </a>
                <a
                  href="mailto:rukundorca@gmail.com"
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                >
                  <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Email</span>
                </a>
                 <a
                  href="https://x.com/BahatiBaba"
                  target='_blank'
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                >
                  <Twitter className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">X Profile</span>
                </a>
                 <a
                 href="https://rukundo-bahati.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-secondary rounded-lg hover:bg-secondary/80 transition-colors group"
                >
                  <ExternalLink className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                  <span className="font-medium">Dev Portfolio</span>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 glow-border">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Name"
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-mono"
                  required
                />
              </div>
               <div>
                 <label className="block text-sm font-medium mb-2 text-primary">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('subject')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Subject"
                  required
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-mono"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-mono"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-primary">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 bg-secondary border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors font-mono resize-none"
                  required
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium glow-border"
              >
                <Send className="w-4 h-4" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {responseMessage && (
                <p className={`text-center font-medium ${
                  responseMessage.includes('success') 
                    ? 'text-green-500' 
                    : 'text-red-500'
                }`}>
                  {responseMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
