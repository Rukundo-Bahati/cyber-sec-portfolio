import { useState } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Journey', href: '#timeline' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#ctf' },
  { name: 'Skills', href: '#skills' },
  { name: 'Now', href: '#now' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-lg sm:text-xl font-bold font-cyber text-primary">
              RUKUNDO BAHATI
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-2 xl:space-x-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-2 xl:px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
              >
                {item.name}
              </button>
            ))}
      
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
            >
              {isOpen ? (
                <X className="h-5 w-5 sm:h-6 sm:w-6" />
              ) : (
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-2 rounded-lg border border-border bg-card max-h-96 overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium rounded-md text-muted-foreground hover:text-primary hover:bg-accent transition-colors"
                >
                  {item.name}
                </button>
              ))}
             
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
