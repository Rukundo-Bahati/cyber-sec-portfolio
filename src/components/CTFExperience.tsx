
import { Trophy, Target, Flag, Cpu } from 'lucide-react';

const CTFExperience = () => {
  const ctfExperience = [
    {
      name: 'PicoCTF',
      description: 'Solved web & forensic challenges',
      icon: Flag,
      color: 'text-cyber-terminal-green'
    },
    {
      name: 'Monthly MetaCTF',
      description: 'Regular participant in monthly competitions',
      icon: Trophy,
      color: 'text-cyber-neon-cyan'
    },
    {
      name: 'Cyberlympics Africa',
      description: 'Competed in Africa-wide cybersecurity competition',
      icon: Target,
      color: 'text-cyber-neon-pink'
    },
    {
      name: 'HackTheBox',
      description: 'Completed Penetration Testing Process modules',
      icon: Cpu,
      color: 'text-primary'
    }
  ];

  return (
    <section id="ctf" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 glow-text">
          <span className="text-primary">CTF</span> Experience
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ctfExperience.map((ctf, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:bg-accent/50 transition-all duration-300 glow-border group"
            >
              <div className="flex items-center gap-4 mb-4">
                <ctf.icon className={`w-8 h-8 ${ctf.color} group-hover:scale-110 transition-transform`} />
                <h3 className="text-xl font-cyber font-bold group-hover:glow-text transition-all">
                  {ctf.name}
                </h3>
              </div>
              <p className="text-muted-foreground">
                {ctf.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTFExperience;
