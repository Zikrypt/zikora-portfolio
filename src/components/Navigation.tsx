import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['#home', '#about', '#projects', '#contact'];
      const currentSection = sections.find(section => {
        const element = document.querySelector(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
      setActiveSection(href);
    }
  };

  return (
    <>
      {/* Combined Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-900 px-responsive ${
          scrolled ? 'glass-card py-1 sm:py-2' : 'py-2 sm:py-3 md:py-4'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12 sm:-translate-y-15'}`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <nav className="container-responsive flex items-center justify-between max-w-7xl">
          {/* Logo with Scalvini style */}
          <div
            className={`text-lg sm:text-xl md:text-2xl font-bold cursor-pointer transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'
            }`}
            style={{ 
              transitionDelay: isVisible ? '200ms' : '0ms',
              filter: isVisible ? 'blur(0px)' : 'blur(5px)'
            }}
            onClick={() => scrollToSection('#home')}
          >
            <span className="gradient-text-hero">Okelo Zikora Samuel</span>
          </div>

          {/* Desktop Navigation with Scalvini minimal style */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium transition-all duration-300 hover:text-primary ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-6'
                } ${
                  activeSection === item.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${400 + index * 120}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  minHeight: '44px',
                  minWidth: '44px'
                }}
              >
                {item.label}
                {/* Minimal active indicator */}
                {activeSection === item.href && (
                  <div className="absolute -bottom-1 left-0 w-full h-px bg-primary" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button with morphing animation */}
          <button
            className={`md:hidden p-2 sm:p-3 rounded-lg glass-card transition-all duration-700 ease-out relative overflow-hidden touch-manipulation ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'
            }`}
            style={{ 
              transitionDelay: isVisible ? '600ms' : '0ms',
              minHeight: '44px',
              minWidth: '44px'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center">
              {/* Hamburger to X morphing animation */}
              <div className="absolute">
                <span className={`block w-5 sm:w-6 h-0.5 bg-[hsl(var(--dark-navy))] transform transition-all duration-400 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1.5 sm:-translate-y-2'
                }`} />
                <span className={`block w-5 sm:w-6 h-0.5 bg-[hsl(var(--dark-navy))] transition-all duration-400 ease-in-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                <span className={`block w-5 sm:w-6 h-0.5 bg-[hsl(var(--dark-navy))] transform transition-all duration-400 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1.5 sm:translate-y-2'
                }`} />
              </div>
            </div>
          </button>

          {/* Scalvini Style Fullscreen Menu Overlay */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
              style={{
                background: 'hsl(var(--background))',
                animation: 'menuOverlayIn 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards'
              }}
            >
              {/* Menu Items */}
              <div className="text-center space-y-8">
                {navItems.map((item, index) => (
                  <div
                    key={item.href}
                    className="overflow-hidden"
                    style={{
                      animation: `clipRevealUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${0.2 + index * 0.1}s both`
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`block text-4xl md:text-6xl font-bold transition-all duration-300 hover:text-primary ${
                        activeSection === item.href 
                          ? 'text-primary' 
                          : 'text-foreground hover:scale-105'
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                ))}
                
                {/* Contact Info */}
                <div 
                  className="pt-12 space-y-4 overflow-hidden"
                  style={{
                    animation: `clipRevealUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.8s both`
                  }}
                >
                  <div className="text-muted-foreground">
                    <p>Callm3samuel@gmail.com</p>
                    <p>+234 901 117 2838</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-6 pt-4">
                    <a 
                      href="https://github.com/Zikrypt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/zikora-okelo-8818252a8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://x.com/HACKWITHZIK?t=9xLb6f-1sVy4CgdFp2sOWw&s=09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Enhanced responsive CSS for premium animations */}
      <style>{`
        /* Enhanced glass card with responsive blur and brand colors */
        .glass-card {
          backdrop-filter: blur(15px);
          background: linear-gradient(135deg, 
            hsl(var(--background) / 0.9), 
            hsl(var(--slate-blue) / 0.05)
          );
          border: 1px solid hsl(var(--dusty-purple) / 0.2);
          box-shadow: 
            0 4px 16px hsl(var(--dark-navy) / 0.1),
            0 0 0 1px hsl(var(--bright-red) / 0.1);
        }

        @media (min-width: 768px) {
          .glass-card {
            backdrop-filter: blur(20px);
            box-shadow: 
              0 8px 32px hsl(var(--dark-navy) / 0.1),
              0 0 0 1px hsl(var(--bright-red) / 0.1);
          }
        }

        /* Mobile menu button enhancement with responsive sizing */
        .md\\:hidden.glass-card {
          border: 1px solid hsl(var(--bright-red) / 0.2);
          transition: all 0.3s ease;
        }

        /* Touch-friendly interactions */
        @media (hover: hover) {
          .md\\:hidden.glass-card:hover {
            border-color: hsl(var(--bright-red) / 0.4);
            box-shadow: 0 0 15px hsl(var(--bright-red) / 0.2);
          }
        }

        /* Smooth focus states for accessibility */
        button:focus-visible {
          outline: 2px solid hsl(var(--bright-red));
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Custom translate utilities for responsive precise animations */
        .-translate-y-12 {
          transform: translateY(-48px);
        }
        
        .-translate-y-15 {
          transform: translateY(-60px);
        }

        .translate-y-4 {
          transform: translateY(16px);
        }

        .translate-y-6 {
          transform: translateY(25px);
        }

        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Logo blur animation with responsive support */
        @supports (filter: blur(5px)) {
          .text-lg, .text-xl, .text-2xl {
            transition: filter 0.7s ease-out;
          }
        }

        /* Responsive container improvements */
        .container-responsive {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        @media (min-width: 640px) {
          .container-responsive {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .container-responsive {
            padding-left: 2rem;
            padding-right: 2rem;
          }
        }

        @media (min-width: 1024px) {
          .container-responsive {
            padding-left: 2.5rem;
            padding-right: 2.5rem;
          }
        }

        /* Performance optimizations for mobile */
        @media (max-width: 767px) {
          .transition-all {
            transition-property: transform, opacity;
          }
          
          /* Reduce motion for users who prefer it */
          @media (prefers-reduced-motion: reduce) {
            .transition-all,
            .duration-300,
            .duration-400,
            .duration-450,
            .duration-500,
            .duration-600,
            .duration-700,
            .duration-900 {
              transition-duration: 0.1s;
            }
            
            .animate-none {
              animation: none;
            }
          }
        }

        /* Enhanced accessibility for keyboard navigation */
        @media (prefers-reduced-motion: no-preference) {
          .focus\\:scale-105:focus {
            transform: scale(1.05);
          }
        }

        /* Dark mode responsive adjustments */
        @media (prefers-color-scheme: dark) {
          .glass-card {
            background: linear-gradient(135deg, 
              hsl(var(--dark-navy) / 0.9), 
              hsl(var(--slate-blue) / 0.1)
            );
            border: 1px solid hsl(var(--dusty-purple) / 0.3);
          }
        }

        /* High DPI display optimizations */
        @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
          .glass-card {
            box-shadow: 
              0 2px 8px hsl(var(--dark-navy) / 0.15),
              0 0 0 0.5px hsl(var(--bright-red) / 0.15);
          }
        }

        /* Safe area handling for mobile devices with notches */
        @supports (padding: max(0px)) {
          .fixed.top-0 {
            padding-top: max(env(safe-area-inset-top), 0.5rem);
          }
        }

        /* Scalvini menu animations */
        @keyframes menuOverlayIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes clipRevealUp {
          0% {
            opacity: 0;
            transform: translateY(100%);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gradient-text-hero {
          background: linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </>
  );
};

export default Navigation;