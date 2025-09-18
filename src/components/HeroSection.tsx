import { ArrowUpRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, experience: 0, satisfaction: 0 });

  useEffect(() => {
    // Start animations immediately
    setIsVisible(true);
  }, []);

  // Counter animation function
  const animateCounter = (target: number, key: keyof typeof counts, duration: number = 2000) => {
    const start = 0;
    const increment = target / (duration / 50);
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      
      setCounts(prev => ({
        ...prev,
        [key]: Math.floor(current)
      }));
    }, 50);
  };

  // Start counters when component becomes visible
  useEffect(() => {
    if (isVisible) {
      // Delay the counter animation to match the stats section reveal
      setTimeout(() => {
        animateCounter(50, 'projects', 2500);
        animateCounter(3, 'experience', 1500);
        animateCounter(99, 'satisfaction', 2000);
      }, 2800); // Start after stats section animates in
    }
  }, [isVisible]);

  const stats = [
    { number: counts.projects, label: 'Projects Completed', suffix: '+' },
    { number: counts.experience, label: 'Years Experience', suffix: '+' },
    { number: counts.satisfaction, label: 'Client Satisfaction', suffix: '%' },
  ];

  const floatingCards = [
    { 
      icon: '🔐', 
      title: 'Cybersecurity', 
      delay: 0,
      gradient: 'from-red-400 via-pink-500 to-red-600',
      position: { top: '10%', right: '15%' }
    },
    { 
      icon: '⚡', 
      title: 'Web3', 
      delay: 200,
      gradient: 'from-blue-400 via-purple-500 to-cyan-400',
      position: { top: '40%', right: '5%' }
    },
    { 
      icon: '💻', 
      title: 'Development', 
      delay: 400,
      gradient: 'from-green-400 via-emerald-500 to-teal-400',
      position: { top: '70%', right: '20%' }
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background with fade-in animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10 transition-all duration-1200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        style={{ background: 'var(--hero-gradient)' }}
      />

      {/* Main container with staggered reveal */}
      <div className={`container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10 transition-all duration-1200 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge - First to appear */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm transition-all duration-800 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ 
              transitionDelay: isVisible ? '200ms' : '0ms'
            }}
          >
            <span>Available for opportunities</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Main Title - Staggered line by line */}
          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              {/* Line 1 */}
              <div className={`transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
              }`} 
              style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
                <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
                  HACK/WITH/ZIK
                </span>
              </div>
              
              {/* Line 2 */}
              <div className={`transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
              }`} 
              style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
                <span className="text-foreground">Professional</span>
              </div>
              
              {/* Line 3 */}
              <div className={`transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
              }`} 
              style={{ transitionDelay: isVisible ? '800ms' : '0ms' }}>
                <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  Web Developer
                </span>
              </div>
              
              {/* Line 4 */}
              <div className={`transition-all duration-800 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
              }`} 
              style={{ transitionDelay: isVisible ? '1000ms' : '0ms' }}>
                <span className="text-foreground/90">& Cybersecurity Expert</span>
              </div>
            </h1>
          </div>

          {/* Subtitle - Appears after headline */}
          <p
            className={`text-lg text-foreground/70 max-w-lg leading-relaxed transition-all duration-600 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: isVisible ? '1500ms' : '0ms' }}
          >
            Crafting secure digital solutions with cutting-edge Web3 integrations and robust
            cybersecurity implementations for the future of the internet.
          </p>

          {/* Action Buttons - Spring scale animation */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-500 ease-out ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-4'
            }`}
            style={{ 
              transitionDelay: isVisible ? '2000ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)' // Spring effect
            }}
          >
            <button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary group"
            >
              <span>Explore My Work</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary group"
            >
              <span>Get in Touch</span>
              <Download className="w-5 h-5 transition-transform group-hover:translate-y-1" />
            </button>
          </div>

          {/* Stats - Final element with bounce */}
          <div
            className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'
            }`}
            style={{ 
              transitionDelay: isVisible ? '2500ms' : '0ms',
              transitionTimingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.175)' // Subtle bounce
            }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-4 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual with Enhanced Floating Cards */}
        <div className={`relative flex justify-center items-center min-h-[500px] transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
        style={{ transitionDelay: isVisible ? '1200ms' : '0ms' }}>
          {floatingCards.map((card, index) => (
            <div
              key={index}
              className={`absolute glass-card p-8 rounded-2xl text-center min-w-[180px] min-h-[160px]
                transition-all duration-1000 hover:scale-125 hover:rotate-3 hover:shadow-2xl 
                cursor-pointer group
                ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-8'}`}
              style={{
                transitionDelay: `${1400 + card.delay}ms`,
                top: card.position.top,
                right: card.position.right,
                transform: `rotate(${index % 2 === 0 ? '-5deg' : '5deg'})`,
                animation: isVisible ? `float-enhanced ${8 + index * 2}s ease-in-out infinite, 
                           glow-pulse ${3 + index}s ease-in-out infinite alternate` : 'none',
              }}
            >
              {/* Glowing background effect */}
              <div 
                className={`absolute inset-0 rounded-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 bg-gradient-to-r ${card.gradient}`}
                style={{
                  filter: 'blur(8px)',
                  transform: 'scale(1.1)',
                }}
              />
              
              {/* Card content */}
              <div className="relative z-10">
                <div className="text-5xl mb-4 group-hover:animate-bounce">{card.icon}</div>
                <div className={`font-bold text-lg bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {card.title}
                </div>
              </div>
              
              {/* Floating particles around cards */}
              <div className="absolute -top-2 -right-2 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full animate-ping opacity-75" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse" />
            </div>
          ))}
          
          {/* Additional floating elements for more liveliness */}
          <div className={`absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full transition-all duration-500 ${
            isVisible ? 'opacity-100 animate-ping' : 'opacity-0'
          }`} style={{ transitionDelay: '2000ms' }} />
          <div className={`absolute bottom-1/3 left-1/2 w-1 h-1 bg-purple-400 rounded-full transition-all duration-500 ${
            isVisible ? 'opacity-100 animate-pulse' : 'opacity-0'
          }`} style={{ transitionDelay: '2200ms' }} />
          <div className={`absolute top-1/2 right-1/3 w-1 h-1 bg-cyan-400 rounded-full transition-all duration-500 ${
            isVisible ? 'opacity-100 animate-bounce' : 'opacity-0'
          }`} style={{ transitionDelay: '2400ms' }} />
        </div>
      </div>

      {/* Custom CSS for enhanced animations */}
      <style>{`
        @keyframes float-enhanced {
          0%, 100% { 
            transform: translateY(0px) rotate(-5deg) scale(1);
          }
          25% { 
            transform: translateY(-20px) rotate(-3deg) scale(1.05);
          }
          50% { 
            transform: translateY(-10px) rotate(-7deg) scale(1.02);
          }
          75% { 
            transform: translateY(-25px) rotate(-2deg) scale(1.08);
          }
        }

        @keyframes glow-pulse {
          0% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
          100% { 
            box-shadow: 0 0 40px rgba(168, 85, 247, 0.5), 0 0 60px rgba(59, 130, 246, 0.2);
          }
        }

        /* Enhanced hover effects */
        .glass-card:hover {
          backdrop-filter: blur(25px);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .glass-card {
            min-width: 140px !important;
            min-height: 120px !important;
            padding: 1.5rem !important;
          }
          
          .glass-card .text-5xl {
            font-size: 2.5rem !important;
          }
          
          .glass-card .text-lg {
            font-size: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;