
import { Calendar, Trophy, Code, Shield } from 'lucide-react';

const Timeline = () => {
  const timelineEvents = [
    {
      year: '2023',
      title: 'Started cybersecurity training with ThinkCyber',
      description: 'Began comprehensive penetration testing and cybersecurity training at Cyberium, Israel',
      icon: Calendar,
      color: 'text-cyber-neon-pink'
    },
    {
      year: '2024',
      title: 'Joined TryHackMe, completed 50+ rooms',
      description: 'Active participant in cybersecurity challenges and learning paths',
      icon: Shield,
      color: 'text-cyber-terminal-green'
    },
    {
      year: '2025',
      title: 'Participated in PicoCTF, created GitCoach',
      description: 'Competed in Africa-wide competition and developed security automation tool',
      icon: Trophy,
      color: 'text-cyber-neon-cyan'
    },
    {
      year: 'Now',
      title: 'Active bug bounty hunter and researcher',
      description: 'Focusing on web application security and vulnerability research',
      icon: Code,
      color: 'text-primary'
    }
  ];

  return (
    <section id="timeline" className="py-16 sm:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-cyber font-bold text-center mb-8 sm:mb-12 glow-text">
          My <span className="text-primary">Journey</span>
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 h-full bg-primary/30"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {timelineEvents.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-start ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'} flex-col sm:items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-2 sm:left-1/2 transform sm:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10"></div>
                
                {/* Content card */}
                <div className={`ml-12 sm:ml-0 sm:w-5/12 ${index % 2 === 0 ? 'sm:mr-8' : 'sm:ml-8'}`}>
                  <div className="bg-card border border-border rounded-lg p-4 sm:p-6 glow-border hover:bg-accent/50 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <event.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${event.color}`} />
                      <span className="text-lg sm:text-xl font-cyber font-bold text-primary">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">
                      {event.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
