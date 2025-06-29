
import MatrixRain from '@/components/MatrixRain';
import ThemeToggle from '@/components/ThemeToggle';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Stats from '@/components/Stats';
import Timeline from '@/components/Timeline';
import Projects from '@/components/Projects';
import Certifications from '@/components/Certifications';
import CTFExperience from '@/components/CTFExperience';
import BugBounty from '@/components/BugBounty';
import Skills from '@/components/Skills';
import Now from '@/components/Now';
import CVDownload from '@/components/CVDownload';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <MatrixRain />
      <Navigation />
      <ThemeToggle />
      
      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Timeline />
        <Projects />
        <Certifications />
        <CTFExperience />
        <BugBounty />
        <Skills />
        <Now />
        <CVDownload />
        <Contact />
      </main>
      
      <footer className="border-t border-border py-6 sm:py-8 text-center text-muted-foreground px-4">
        <p className="font-mono text-sm sm:text-base">
          <span className="text-primary">$</span> RUKUNDO Bahati 🇷🇼
        </p>
      </footer>
    </div>
  );
};

export default Index;
