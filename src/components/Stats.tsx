
import { Github, Shield, Trophy, Code } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      platform: 'TryHackMe',
      metric: '50+ Rooms',
      description: 'Completed challenges',
      icon: Shield,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10 border-red-500/30'
    },
    {
      platform: 'GitHub',
      metric: '15+ Repos',
      description: 'Security projects',
      icon: Github,
      color: 'text-cyber-terminal-green',
      bgColor: 'bg-cyber-terminal-green/10 border-cyber-terminal-green/30'
    },
    {
      platform: 'CTF Events',
      metric: '10+ CTFs',
      description: 'Participated',
      icon: Trophy,
      color: 'text-cyber-neon-cyan',
      bgColor: 'bg-cyber-neon-cyan/10 border-cyber-neon-cyan/30'
    },
    {
      platform: 'Bug Bounty',
      metric: '5+ Vulns',
      description: 'Reported findings',
      icon: Code,
      color: 'text-primary',
      bgColor: 'bg-primary/10 border-primary/30'
    }
  ];

  return (
    <section className="py-12 sm:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-cyber font-bold text-center mb-8 sm:mb-12 text-primary">
          Statistics & Achievements
        </h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`${stat.bgColor} border rounded-lg p-4 sm:p-6 text-center hover:scale-105 transition-all duration-300 glow-border`}
            >
              <stat.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color} mx-auto mb-2 sm:mb-3`} />
              <div className={`text-lg sm:text-2xl font-cyber font-bold ${stat.color} mb-1`}>
                {stat.metric}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground mb-1">
                {stat.platform}
              </div>
              <div className="text-xs text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
        
        {/* TryHackMe Badge */}
        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-block bg-card border border-border rounded-lg p-4 sm:p-6 glow-border">
            <h3 className="text-lg sm:text-xl font-cyber font-bold mb-4 text-primary">TryHackMe Profile</h3>
            <a
              href="https://tryhackme.com/p/B4hati"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="/try.png"
                alt="TryHackMe Badge"
                className="mx-auto rounded-lg hover:scale-105 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
