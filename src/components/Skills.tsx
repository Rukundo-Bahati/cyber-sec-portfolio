
import { Monitor, Terminal, Code, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Operating Systems',
      icon: Monitor,
      skills: ['Kali Linux', 'Ubuntu', 'Windows'],
      color: 'text-cyber-terminal-green'
    },
    {
      title: 'Terminals & Shells',
      icon: Terminal,
      skills: ['Bash', 'Zsh', 'PowerShell','cmd'],
      color: 'text-cyber-neon-cyan'
    },
    {
      title: 'Programming',
      icon: Code,
      skills: ['Python', 'Bash Scripting', 'JavaScript', 'SQL','Java','C/C++'],
      color: 'text-cyber-neon-pink'
    },
    {
      title: 'Security Tools',
      icon: Wrench,
      skills: ['Burp Suite', 'Metasploit', 'Nmap', 'Wireshark', 'Ghidra', 'Bettercap'],
      color: 'text-primary'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 glow-text">
          Skills & <span className="text-primary">Technologies</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:bg-accent/50 transition-all duration-300 glow-border group"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className={`w-6 h-6 ${category.color} group-hover:scale-110 transition-transform`} />
                <h3 className="font-cyber font-bold text-lg group-hover:glow-text transition-all">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="px-3 py-2 bg-secondary rounded-lg text-sm font-mono hover:bg-secondary/80 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-6 glow-border">
            <h3 className="text-xl font-cyber font-bold mb-3 text-primary">Development Environment</h3>
            <p className="text-muted-foreground font-mono">
              <span className="text-cyber-matrix-green">IDEs:</span> VSCode,Intellij with security extensions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
