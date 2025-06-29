
import { Github, ExternalLink, Star } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      name: 'GitCoach',
      description: 'A GitHub repository analyzer CLI tool to find security and code issues.',
      tags: ['Python', 'Security', 'Automation', 'Open Source'],
      github: 'https://github.com/Rukundo-Bahati/Coach',
      demo: '#',
      stars: 42
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-cyber font-bold text-center mb-12 glow-text">
          <span className="text-primary">Featured</span> Projects
        </h2>
        
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover:bg-accent/50 transition-all duration-300 glow-border group"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-cyber font-bold text-primary group-hover:glow-text transition-all">
                  {project.name}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Star className="w-4 h-4" />
                  <span>{project.stars}</span>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-lg">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium border border-primary/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target='_blank'
                  className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-all duration-300 font-medium"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
                {/* <a
                  href={project.demo}
                  className="flex items-center gap-2 px-4 py-2 border border-border hover:bg-accent rounded-lg transition-all duration-300 font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
