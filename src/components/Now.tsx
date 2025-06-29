
import { Target, Book, Wrench } from 'lucide-react';

const Now = () => {
  const currentFocus = [
    {
      title: 'Active Directory Exploitation',
      description: 'Diving deeper into Windows domain security and lateral movement techniques',
      icon: Target,
      color: 'text-cyber-neon-pink'
    },
    {
      title: 'Mobile App Security',
      description: 'Learning Android security testing and iOS penetration testing methodologies',
      icon: Book,
      color: 'text-cyber-terminal-green'
    },
    {
      title: 'Rust for Security Tools',
      description: 'Building safer and more efficient security automation tools with Rust',
      icon: Wrench,
      color: 'text-cyber-neon-cyan'
    }
  ];

  return (
    <section id="now" className="py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-cyber font-bold text-center mb-8 sm:mb-12 glow-text">
          What I'm <span className="text-primary">Doing Now</span>
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-6 sm:p-8 glow-border mb-8">
          <div className="text-center mb-6">
            <p className="text-lg sm:text-xl text-muted-foreground font-mono">
              <span className="text-cyber-terminal-green">$</span> Current focus areas and learning goals
            </p>
          </div>
          
          <div className="grid gap-6 sm:gap-8">
            {currentFocus.map((focus, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-start gap-4 p-4 bg-secondary rounded-lg hover:bg-accent/50 transition-all duration-300"
              >
                <focus.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${focus.color} flex-shrink-0 mt-1`} />
                <div className="flex-1">
                  <h3 className="text-lg sm:text-xl font-cyber font-bold mb-2 text-primary">
                    {focus.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground">
                    {focus.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-4 sm:p-6 glow-border">
            <p className="text-sm sm:text-base text-muted-foreground font-mono">
              <span className="text-primary">🎯 Goal:</span> Contributing to open-source security tools 
              and sharing knowledge with the cybersecurity community
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Now;
