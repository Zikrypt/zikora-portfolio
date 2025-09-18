import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import FloatingParticles from '@/components/FloatingParticles';
import AnimatedFooter from '@/components/AnimatedFooter';

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
      
      {/* Animated Footer */}
      <AnimatedFooter />
    </div>
  );
};

export default Index;
