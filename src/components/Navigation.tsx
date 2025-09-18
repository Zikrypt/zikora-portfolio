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
      {/* Navbar Container with slide down animation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-900 ${
          scrolled ? 'glass-card py-2' : 'py-4'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-15'}`}
        style={{
          transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)'
        }}
      >
        <nav className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo with blur-to-focus effect */}
          <div
            className={`text-2xl font-bold cursor-pointer transition-all duration-700 ease-out ${
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

          {/* Desktop Navigation with staggered reveal and slide hover */}
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <li key={item.href} className="relative">
                <button
                  onClick={() => scrollToSection(item.href)}
                  className={`relative px-4 py-2 font-medium transition-all duration-500 ease-out group ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
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
                      : 'hsl(var(--dark-navy))'
                  }}
                >
                  {/* Text with smooth color transition */}
                  <span className={`relative z-10 transition-colors duration-300 ease-in-out ${
                    activeSection !== item.href ? 'group-hover:text-white' : ''
                  }`}>
                    {item.label}
                  </span>
                  
                  {/* Slide-in background effect */}
                  <div 
                    className="absolute inset-0 rounded-lg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out"
                    style={{
                      background: 'linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)))',
                      transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                    }}
                  />
                  
                  {/* Animated underline */}
                  <span 
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[hsl(var(--bright-red))] to-[hsl(var(--dusty-purple))] transition-all duration-400 ease-out ${
                      activeSection === item.href 
                        ? 'w-full' 
                        : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button with morphing animation */}
          <button
            className={`md:hidden p-2 rounded-lg glass-card transition-all duration-700 ease-out relative overflow-hidden ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-85'
            }`}
            style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {/* Hamburger to X morphing animation */}
              <div className="absolute">
                <span className={`block w-6 h-0.5 bg-[hsl(var(--dark-navy))] transform transition-all duration-400 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                }`} />
                <span className={`block w-6 h-0.5 bg-[hsl(var(--dark-navy))] transition-all duration-400 ease-in-out ${
                  isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'
                }`} />
                <span className={`block w-6 h-0.5 bg-[hsl(var(--dark-navy))] transform transition-all duration-400 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-2'
                }`} />
              </div>
            </div>
          </button>

          {/* Mobile Navigation with slide-in effect */}
          <div
            className={`md:hidden fixed inset-0 top-16 transition-all duration-600 ease-out ${
              isMenuOpen 
                ? 'translate-x-0 opacity-100' 
                : 'translate-x-full opacity-0'
            }`}
            style={{
              background: 'linear-gradient(135deg, hsl(var(--background) / 0.98), hsl(var(--slate-blue) / 0.08))',
              backdropFilter: 'blur(25px)'
            }}
          >
            {/* Background overlay */}
            <div 
              className={`absolute inset-0 transition-opacity duration-600 ${
                isMenuOpen ? 'opacity-60' : 'opacity-0'
              }`}
              style={{ background: 'hsl(var(--dark-navy) / 0.1)' }}
            />
            
            <ul className="relative flex flex-col items-center pt-12 space-y-8">
              {navItems.map((item, index) => (
                <li key={item.href}>
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-2xl font-medium transition-all duration-450 ease-out group px-8 py-3 rounded-lg ${
                      isMenuOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-7'
                    } ${
                      activeSection === item.href 
                        ? 'font-bold' 
                        : ''
                    }`}
                    style={{ 
                      transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms',
                      color: activeSection === item.href 
                        ? 'hsl(var(--bright-red))' 
                        : 'hsl(var(--dark-navy))'
                    }}
                  >
                    {/* Mobile text with hover effect */}
                    <span className={`relative z-10 transition-colors duration-300 ease-in-out ${
                      activeSection !== item.href ? 'group-hover:text-white' : ''
                    }`}>
                      {item.label}
                    </span>
                    
                    {/* Mobile slide background */}
                    <div 
                      className="absolute inset-0 rounded-lg scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 ease-out"
                      style={{
                        background: 'linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)))'
                      }}
                    />
                    
                    {/* Mobile underline */}
                    <span 
                      className={`absolute bottom-1 left-0 right-0 h-0.5 mx-auto bg-gradient-to-r from-[hsl(var(--bright-red))] to-[hsl(var(--dusty-purple))] transition-all duration-400 ease-out ${
                        activeSection === item.href 
                          ? 'w-full' 
                          : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>

      {/* Custom CSS for premium animations */}
      <style>{`
        /* Enhanced glass card with brand colors */
        .glass-card {
          backdrop-filter: blur(20px);
          background: linear-gradient(135deg, 
            hsl(var(--background) / 0.9), 
            hsl(var(--slate-blue) / 0.05)
          );
          border: 1px solid hsl(var(--dusty-purple) / 0.2);
          box-shadow: 
            0 8px 32px hsl(var(--dark-navy) / 0.1),
            0 0 0 1px hsl(var(--bright-red) / 0.1);
        }

        /* Mobile menu button enhancement */
        .md\\:hidden.glass-card {
          border: 1px solid hsl(var(--bright-red) / 0.2);
          transition: all 0.3s ease;
        }

        .md\\:hidden.glass-card:hover {
          border-color: hsl(var(--bright-red) / 0.4);
          box-shadow: 0 0 15px hsl(var(--bright-red) / 0.2);
        }

        /* Smooth focus states for accessibility */
        button:focus-visible {
          outline: 2px solid hsl(var(--bright-red));
          outline-offset: 2px;
        }

        /* Enhanced mobile backdrop */
        .md\\:hidden.fixed {
          border-left: 1px solid hsl(var(--bright-red) / 0.15);
        }

        /* Hamburger line styling */
        .md\\:hidden span {
          transform-origin: center;
        }

        /* Custom translate utilities for precise animations */
        .-translate-y-15 {
          transform: translateY(-60px);
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

        /* Logo blur animation */
        @supports (filter: blur(5px)) {
          .text-2xl {
            transition: filter 0.7s ease-out;
          }
        }
      `}</style>
    </>
  );
};

export default Navigation;