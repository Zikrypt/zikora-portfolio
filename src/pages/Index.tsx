import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import FloatingParticles from '@/components/FloatingParticles';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="py-8 text-center glass-card">
        <div className="container mx-auto px-4">
          <p className="text-foreground/60">
            © 2024 Okelo Zikora. Crafted with passion and secured with expertise.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
