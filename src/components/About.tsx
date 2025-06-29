
const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 glow-text">
          <span className="text-primary">About</span> Me
        </h2>
        
        <div className="bg-card border border-border rounded-lg p-8 glow-border">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-muted-foreground">
              I'm a cybersecurity enthusiast studying at{' '}
              <span className="text-primary font-semibold">Rwanda Coding Academy</span>, 
              with over <span className="text-cyber-terminal-green font-semibold">2 years</span> of 
              practical experience in offensive security, penetration testing, CTFs, and security research.
            </p>
            
            <p className="text-muted-foreground">
              I've participated in competitions like{' '}
              <span className="text-cyber-neon-cyan font-semibold">PicoCTF 2025</span>, 
              <span className="text-cyber-neon-pink font-semibold"> Cyberlympics Africa</span>, and 
              <span className="text-primary font-semibold"> MetaCTF</span> (monthly). 
              I'm a certified penetration tester with a strong Linux and scripting background.
            </p>
            
            <div className="mt-8 p-4 bg-secondary rounded-lg border-l-4 border-primary">
              <p className="font-mono text-primary">
                <span className="text-cyber-terminal-green">user@rwanda:</span>
                <span className="text-white">~$ whoami</span>
              </p>
              <p className="font-mono text-cyber-matrix-green mt-2">
                Ethical Hacker | PenTester | CTF Player | BugBounty Hunter
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
