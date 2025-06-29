import { Award, Shield, Brain, Wifi, Search, Terminal, Code, Network } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'TryHackMe Advent of Cyber 2024',
      subtitle: 'TryHackMe',
      icon: Shield,
      color: 'text-cyber-terminal-green',
      image: '/advent.png',
    },
    {
      title: 'Penetration Testing Certificate',
      subtitle: 'ThinkCyber - Cyberium, Israel',
      icon: Award,
      color: 'text-cyber-neon-cyan',
      image: '/pentest-thinkcyber.png',
    },
    {
      title: 'Linux Administration Certificate',
      subtitle: 'ThinkCyber',
      icon: Code,
      color: 'text-cyber-matrix-green',
      image: '/linux.png',
    },
    {
      title: 'Python Programming Certificate',
      subtitle: 'ThinkCyber',
      icon: Code,
      color: 'text-cyber-neon-pink',
      image: '/python.png',
    },
    {
      title: 'Network Research Certificate',
      subtitle: 'ThinkCyber',
      icon: Network,
      color: 'text-cyber-purple-glow',
      image: '/net-res-certificate.png',
    },
    {
      title: 'Penetration Testing',
      subtitle: 'CyberLandSec',
      icon: Search,
      color: 'text-cyber-neon-cyan',
      image: '/pen-test-cyberland.png',
    },
    {
      title: 'Google Dorking',
      subtitle: 'CyberLandSec',
      icon: Search,
      color: 'text-cyber-neon-cyan',
      image: '/google-dork.png',
    },
    {
      title: 'CAP Mock-Exam Completion',
      subtitle: 'TheSecOps Group',
      icon: Brain,
      color: 'text-cyber-purple-glow',
      image: '/SecOps-CAP.png',
    },
    {
      title: 'CNSP Mock-Exam Completion',
      subtitle: 'TheSecOps Group',
      icon: Brain,
      color: 'text-cyber-purple-glow',
      image: '/secops-cnsp.png',
    },
    {
      title: 'Wireless Network Hacking',
      subtitle: 'Cybrary',
      icon: Wifi,
      color: 'text-cyber-matrix-green',
      image: '/wireless.png',
    },
    {
      title: 'Certificate of Completion',
      subtitle: 'Great Learning',
      icon: Wifi,
      color: 'text-cyber-matrix-green',
      image: '/great-learning cyber.png',
    },
    {
      title: 'Network Fundamentals Certificate',
      subtitle: 'Simple Learn',
      icon: Wifi,
      color: 'text-cyber-matrix-green',
      image: '/netw-simplelearn.png',
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 glow-text">
          <span className="text-primary">Certifications</span> & Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:bg-accent/50 transition-all duration-300 glow-border group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {cert.image && (
               <div className="w-full h-64 bg-secondary rounded-lg mb-4 flex items-center justify-center border border-border overflow-hidden hover:border-primary transition-all">
  <a href={cert.image} target="_blank" rel="noopener noreferrer" className="w-full h-full flex items-center justify-center p-2">
    <img
      src={cert.image}
      alt={cert.title}
      className="object-contain max-h-full max-w-full"
    />
  </a>
</div>

              )}

              <div className="flex items-start gap-4">
                <cert.icon
                  className={`w-8 h-8 ${cert.color} group-hover:scale-110 transition-transform`}
                />
                <div className="flex-1">
                  <h3 className="font-cyber font-semibold text-lg mb-2 group-hover:glow-text transition-all">
                    {cert.title}
                  </h3>
                  {cert.subtitle && (
                    <p className="text-muted-foreground text-sm">
                      {cert.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
