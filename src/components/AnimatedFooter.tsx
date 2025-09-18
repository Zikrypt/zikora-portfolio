import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/Zikrypt' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/zikora-okelo-8818252a8' },
    { name: 'Twitter', href: 'https://x.com/HACKWITHZIK?t=9xLb6f-1sVy4CgdFp2sOWw&s=09' },
    { name: 'Instagram', href: 'https://www.instagram.com/_zikora.__?igsh=NmtidXp3OGE3b2Mw' },
  ];

  return (
    <>
      <style>{`
        @keyframes footerSlideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes clipRevealLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes clipRevealRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes clipRevealUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .gradient-text-hero {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b, #ef4444, #ec4899);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <footer 
        ref={ref}
        className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden"
      >
        {/* Animated background overlay */}
        <div 
          className={`absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/90 to-transparent transition-all duration-1000 ease-out ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
        />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-80" />
        
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/20 rounded-full transition-all duration-2000 ease-out ${
                isVisible ? 'animate-pulse' : 'opacity-0'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Main content that slides up */}
        <div 
          className="absolute inset-0 flex items-center justify-center text-white"
          style={{
            animation: isVisible ? 'footerSlideUp 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s both' : 'none'
          }}
        >
          <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
            
            {/* Main CTA with staggered letter reveals */}
            <div className="space-y-8">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
                <div className="overflow-hidden mb-4">
                  <span 
                    className="block gradient-text-hero"
                    style={{
                      animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.8s both' : 'none'
                    }}
                  >
                    Let's Create
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span 
                    className="block text-white"
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.0s both' : 'none'
                    }}
                  >
                    Something
                  </span>
                </div>
                <div className="overflow-hidden">
                  <span 
                    className="block gradient-text"
                    style={{
                      animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.2s both' : 'none'
                    }}
                  >
                    Extraordinary
                  </span>
                </div>
              </h2>
              
              {/* Subtitle */}
              <div className="overflow-hidden">
                <p 
                  className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
                  style={{
                    animation: isVisible ? 'clipRevealUp 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.4s both' : 'none'
                  }}
                >
                  Ready to transform your ideas into reality? Let's start the conversation.
                </p>
              </div>
            </div>
            
            {/* CTA Button */}
            <div className="overflow-hidden">
              <button 
                className="group relative overflow-hidden px-12 py-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  animation: isVisible ? 'clipRevealUp 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.6s both' : 'none'
                }}
              >
                <span className="relative z-10">
                  <a href="tel:+234 901 117 2838">Get In Touch</a>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>

            {/* Contact Details */}
            <div className="grid md:grid-cols-2 gap-8 pt-12">
              {/* Email */}
              <div className="overflow-hidden">
                <div 
                  className="space-y-2"
                  style={{
                    animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.8s both' : 'none'
                  }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">Email</h3>
                  <a 
                    href="mailto:Callm3samuel@gmail.com"
                    className="text-xl font-medium hover:text-blue-400 transition-colors duration-300 block"
                  >
                    Callm3samuel@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="overflow-hidden">
                <div 
                  className="space-y-2"
                  style={{
                    animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 2.0s both' : 'none'
                  }}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-400">Phone</h3>
                  <a 
                    href="tel:+234 901 117 2838"
                    className="text-xl font-medium hover:text-blue-400 transition-colors duration-300 block"
                  >
                    +234 901 117 2838
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-12 overflow-hidden">
              <div 
                className="flex justify-center space-x-8"
                style={{
                  animation: isVisible ? 'clipRevealUp 1.0s cubic-bezier(0.77, 0, 0.175, 1) 2.2s both' : 'none'
                }}
              >
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 font-medium"
                    style={{
                      animation: isVisible ? `clipRevealUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) ${2.4 + index * 0.1}s both` : 'none'
                    }}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="pt-12 border-t border-gray-700 overflow-hidden">
              <div 
                className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-400"
                style={{
                  animation: isVisible ? 'clipRevealUp 1.0s cubic-bezier(0.77, 0, 0.175, 1) 2.6s both' : 'none'
                }}
              >
                <p>&copy; 2024 Zikora Okelo. All rights reserved.</p>
                <p>Crafted with security and innovation in mind.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default AnimatedFooter;