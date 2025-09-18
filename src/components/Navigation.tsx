import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  useEffect(() => {
    // Start navigation animation immediately
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
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
      {/* Navbar Container with responsive slide down animation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-900 px-responsive ${
          scrolled ? 'glass-card py-1 sm:py-2' : 'py-2 sm:py-3 md:py-4'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12 sm:-translate-y-15'}`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <nav className="container-responsive flex items-center justify-between max-w-7xl">
          {/* Logo with responsive sizing and blur-to-focus effect */}
          <div
            className={`text-lg sm:text-xl md:text-2xl font-bold cursor-pointer transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'
            }`}
            style={{ 
              transitionDelay: isVisible ? '200ms' : '0ms',
              background: 'linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: isVisible ? 'blur(0px)' : 'blur(5px)'
            }}
            onClick={() => scrollToSection('#home')}
          >
            Okelo Zikora
          </div>

          {/* Desktop Navigation with responsive spacing and staggered reveal */}
          <ul className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navItems.map((item, index) => (
              <li key={item.href} className="relative">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-2 py-2 md:px-3 lg:px-4 font-medium text-sm lg:text-base transition-all duration-500 ease-out group touch-manipulation ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 md:translate-y-6'
                  } ${
                    activeSection === item.href 
                      ? 'font-bold' 
                      : ''
                  }`}
                  style={{ 
                    transitionDelay: isVisible ? `${400 + index * 120}ms` : '0ms',
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    color: activeSection === item.href 
                      ? 'hsl(var(--bright-red))' 
                      : 'hsl(var(--dark-navy))',
                    minHeight: '44px',
                    minWidth: '44px'
                  }}
                >
                  {/* Text with smooth color transition */}
                  <span className={`relative z-10 transition-colors duration-300 ease-in-out ${
                    activeSection !== item.href ? 'group-hover:text-white' : ''
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Slide-in background effect - disabled on touch devices for performance */}
                  <div 
                    className="absolute inset-0 rounded-lg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out hidden hover:block"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)))',
                      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[hsl(var(--bright-red))] to-[hsl(var(--dusty-purple))] transition-all duration-400 ease-out ${
                      activeSection === item.href 
                        ? 'w-3/4' 
                        : 'w-0 group-hover:w-3/4'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button with responsive sizing and morphing animation */}
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

          {/* Mobile Navigation with responsive slide-in effect */}
          <div
            className={`md:hidden fixed inset-0 top-12 sm:top-16 md:top-20 transition-all duration-600 ease-out z-40 ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}
            style={{
              background: 'linear-gradient(135deg, hsl(var(--background) / 0.98), hsl(var(--slate-blue) / 0.08))',
              backdropFilter: 'blur(20px)'
            }}
          >
            {/* Background overlay */}
            <div 
              className={`absolute inset-0 transition-opacity duration-600 ${
                isMenuOpen ? 'opacity-60' : 'opacity-0'
              }`}
              style={{ background: 'hsl(var(--dark-navy) / 0.1)' }}
              onClick={() => setIsMenuOpen(false)}
            />
            
            <ul className="relative flex flex-col items-center pt-8 sm:pt-12 space-y-4 sm:space-y-6 md:space-y-8 px-4">
              {navItems.map((item, index) => (
                <li key={item.href} className="w-full max-w-xs">
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative w-full text-xl sm:text-2xl font-medium transition-all duration-450 ease-out group px-6 sm:px-8 py-3 sm:py-4 rounded-lg touch-manipulation ${
                      isMenuOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-5 sm:translate-y-7'
                    } ${
                      activeSection === item.href 
                        ? 'font-bold' 
                        : ''
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                      color: activeSection === item.href 
                        ? 'hsl(var(--bright-red))' 
                        : 'hsl(var(--dark-navy))',
                      minHeight: '44px'
                    }}
                  >
                    {/* Mobile text with hover effect */}
                    <span className={`relative z-10 transition-colors duration-300 ease-in-out block ${
                      activeSection !== item.href ? 'group-active:text-white' : ''
                    }`}>
                      {item.label}
                    </span>
                    
                    {/* Mobile slide background - only on active tap */}
                    <div 
                      className="absolute inset-0 rounded-lg scale-x-0 group-active:scale-x-100 origin-left transition-transform duration-300 ease-out"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)))'
                      }}
                    />
                    
                    {/* Mobile underline */}
                    <span 
                      className={`absolute bottom-1 sm:bottom-2 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-[hsl(var(--bright-red))] to-[hsl(var(--dusty-purple))] transition-all duration-400 ease-out ${
                        activeSection === item.href 
                          ? 'w-3/4' 
                          : 'w-0 group-active:w-3/4'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>

            {/* Close button for better UX on mobile */}
            <button
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full glass-card transition-all duration-300 touch-manipulation"
              style={{ minHeight: '44px', minWidth: '44px' }}
              aria-label="Close menu"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-[hsl(var(--dark-navy))]" />
            </button>
          </div>
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
          
          .group:hover .hidden.hover\\:block {
            display: block;
          }
        }

        /* Touch device specific styles */
        @media (hover: none) {
          .group:active .scale-x-0 {
            transform: scaleX(1);
          }
          
          .group:active span {
            color: white;
          }
        }

        /* Smooth focus states for accessibility */
        button:focus-visible {
          outline: 2px solid hsl(var(--bright-red));
          outline-offset: 2px;
          border-radius: 4px;
        }

        /* Enhanced mobile backdrop with responsive border */
        .md\\:hidden.fixed {
          border-left: 1px solid hsl(var(--bright-red) / 0.15);
        }

        @media (max-width: 480px) {
          .md\\:hidden.fixed {
            border-left: none;
            border-top: 1px solid hsl(var(--bright-red) / 0.15);
          }
        }

        /* Hamburger line styling with responsive sizing */
        .md\\:hidden span {
          transform-origin: center;
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

        .translate-y-5 {
          transform: translateY(20px);
        }

        .translate-y-6 {
          transform: translateY(25px);
        }

        .translate-y-7 {
          transform: translateY(30px);
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
      `}</style>
    </>
  );
};

export default Navigation;