
import { Bug, Shield, Search, Zap } from 'lucide-react';

const BugBounty = () => {
  const tools = [
    'Burp Suite', 'Caido', 'Nmap', 'Wireshark', 'Metasploit', 
    'Gobuster', 'Autopsy', 'Binwalk', 'Netcat', 'Amass','Exploit-DB',
    ,'BlueDucky','Google-Dorking','OSINT','Hashcat','JohnTheRipper',
    'xxd','wpscan','whatweb',
    'Popular Tools from Github'
  ];

  const focusAreas = [
    { name: 'Web Applications', icon: Search },
    { name: 'API Security', icon: Zap },
    { name: 'Wireless Networks', icon: Shield }
  ];

  return (
    <section id="bugbounty" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 glow-text">
          Bug Bounty & <span className="text-primary">Vulnerability Research</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card border border-border rounded-lg p-6 glow-border">
            <h3 className="text-2xl font-cyber font-bold mb-4 text-primary">
              Research Focus
            </h3>
            <p className="text-muted-foreground mb-6">
              Found and reported multiple vulnerabilities in web applications and APIs, 
              focusing on comprehensive security assessments and responsible disclosure.
            </p>
            
            <div className="grid grid-cols-1 gap-4">
              {focusAreas.map((area, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <area.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium">{area.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6 glow-border">
            <h3 className="text-2xl font-cyber font-bold mb-4 text-primary">
              Tools & Arsenal
            </h3>
            <p className="text-muted-foreground mb-6">
              Proficient with industry-standard penetration testing and 
              vulnerability assessment tools.
            </p>
            
            <div className="flex flex-wrap gap-2">
              {tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-cyber-terminal-green/20 text-cyber-terminal-green rounded-full text-sm font-mono border border-cyber-terminal-green/30"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BugBounty;
