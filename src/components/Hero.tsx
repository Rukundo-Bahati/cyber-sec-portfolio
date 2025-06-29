
import { Github, Shield, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4 pt-16 sm:pt-20">
      <div className="text-center space-y-6 sm:space-y-8 max-w-4xl mx-auto animate-fade-in-up">
        <div className="space-y-3 sm:space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-cyber font-bold glow-text">
            <span className="text-primary">RUKUNDO BAHATI Samuel</span>
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground px-4">
            Passionate Cybersecurity Researcher & Penetration Tester
          </h2>
          <div className="flex items-center justify-center gap-2 text-base sm:text-lg">
            <span>🇷🇼</span>
            <span className="text-cyber-matrix-green">Rwanda</span>
          </div>
        </div>
        
        <p className="text-lg sm:text-xl md:text-2xl font-mono text-primary glow-text px-4">
          $ echo "Breaking things to make them stronger."
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-8 sm:mt-12 px-4">
          <a
            href="https://github.com/Rukundo-Bahati"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-all duration-300 glow-border font-medium"
          >
            <Github className="w-4 h-4 sm:w-5 sm:h-5 group-hover:rotate-12 transition-transform" />
            GitHub
          </a>
          <a
            href="https://tryhackme.com/p/B4hati"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 bg-cyber-purple-glow text-white rounded-lg hover:bg-cyber-purple-glow/90 transition-all duration-300 glow-border font-medium"
          >
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            TryHackMe Profile
          </a>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex items-center justify-center gap-2 px-4 sm:px-6 py-3 border border-border hover:bg-accent rounded-lg transition-all duration-300 glow-border font-medium"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform" />
            Contact Me
          </button>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
