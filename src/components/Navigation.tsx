import { useState, useEffect } from 'react';

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
      {/* Combined Navigation - Made More Compact */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-900 px-responsive ${
          scrolled ? 'glass-card py-1 sm:py-1.5' : 'py-1.5 sm:py-2 md:py-2.5'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 sm:-translate-y-10'}`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <nav className="container-responsive flex items-center justify-between max-w-7xl">
          {/* Logo with Scalvini style - Made More Compact */}
          <div
            className={`text-sm sm:text-base md:text-lg font-bold cursor-pointer transition-all duration-700 ease-out ${
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

          {/* Desktop Navigation with Scalvini minimal style - More Compact */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navItems.map((item, index) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={`relative font-medium text-sm transition-all duration-300 hover:text-primary ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
                } ${
                  activeSection === item.href 
                    ? 'text-primary' 
                    : 'text-muted-foreground'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${400 + index * 120}ms` : '0ms',
                  transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  minHeight: '36px',
                  minWidth: '36px'
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

          {/* Mobile Menu Button - Made Much More Compact */}
          <button
            className={`md:hidden p-1.5 sm:p-2 rounded-lg glass-card transition-all duration-700 ease-out relative overflow-hidden touch-manipulation ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'
            }`}
            style={{ 
              transitionDelay: isVisible ? '600ms' : '0ms',
              minHeight: '36px',
              minWidth: '36px'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
              {/* Hamburger to X morphing animation */}
              <div className="absolute">
                <span className={`block w-4 sm:w-5 h-0.5 bg-[hsl(var(--dark-navy))] transform transition-all duration-400 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1 sm:-translate-y-1.5'
                }`} />
                <span className={`block w-4 sm:w-5 h-0.5 bg-[hsl(var(--dark-navy))] transition-all duration-400 ease-in-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                <span className={`block w-4 sm:w-5 h-0.5 bg-[hsl(var(--dark-navy))] transform transition-all duration-400 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1 sm:translate-y-1.5'
                }`} />
              </div>
            </div>
          </button>

          {/* Scalvini Style Fullscreen Menu Overlay - Made More Compact for Mobile */}
          {isMenuOpen && (
            <div 
              className="fixed inset-0 z-40 flex items-center justify-center md:hidden"
              style={{
                background: 'hsl(var(--background))',
                animation: 'menuOverlayIn 0.5s cubic-bezier(0.77, 0, 0.175, 1) forwards'
              }}
            >
              {/* Menu Items - Made More Compact */}
              <div className="text-center space-y-6">
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
                      className={`block text-2xl md:text-4xl font-bold transition-all duration-300 hover:text-primary ${
                        activeSection === item.href 
                          ? 'text-primary' 
                          : 'text-foreground hover:scale-105'
                      }`}
                    >
                      {item.label}
                    </button>
                  </div>
                ))}
                
                {/* Contact Info - Made More Compact */}
                <div 
                  className="pt-8 space-y-3 overflow-hidden"
                  style={{
                    animation: `clipRevealUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.8s both`
                  }}
                >
                  <div className="text-muted-foreground text-sm">
                    <p>Callm3samuel@gmail.com</p>
                    <p>+234 901 117 2838</p>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4 pt-3">
                    <a 
                      href="https://github.com/Zikrypt" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/zikora-okelo-8818252a8" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
                    >
                      LinkedIn
                    </a>
                    <a 
                      href="https://x.com/HACKWITHZIK?t=9xLb6f-1sVy4CgdFp2sOWw&s=09" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm"
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

      {/* Enhanced responsive CSS - All Original Styling Preserved */}
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

        /* Custom translate utilities for responsive precise animations - Made More Compact */
        .-translate-y-8 {
          transform: translateY(-32px);
        }
        
        .-translate-y-10 {
          transform: translateY(-40px);
        }

        .translate-y-3 {
          transform: translateY(12px);
        }

        /* Smooth scrolling enhancement */
        html {
          scroll-behavior: smooth;
        }

        /* Logo blur animation with responsive support */
        @supports (filter: blur(5px)) {
          .text-sm, .text-base, .text-lg {
            transition: filter 0.7s ease-out;
          }
        }

        /* Responsive container improvements - Made More Compact */
        .container-responsive {
          width: 100%;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          padding-left: 0.75rem;
          padding-right: 0.75rem;
        }

        @media (min-width: 640px) {
          .container-responsive {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        @media (min-width: 768px) {
          .container-responsive {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
        }

        @media (min-width: 1024px) {
          .container-responsive {
            padding-left: 2rem;
            padding-right: 2rem;
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

        /* Additional compact spacing utilities */
        .py-1\.5 {
          padding-top: 0.375rem;
          padding-bottom: 0.375rem;
        }

        .space-x-4 > :not([hidden]) ~ :not([hidden]) {
          margin-left: 1rem;
        }
      `}</style>
    </>
  );
};

export default Navigation;