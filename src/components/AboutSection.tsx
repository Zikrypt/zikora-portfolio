import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArrowRight, Shield, Code, Zap } from 'lucide-react';

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3, triggerOnce: true });

  const skills = [
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Advanced threat detection, vulnerability assessment, and security architecture design.',
      color: 'from-red-400 to-pink-600',
      delay: 200
    },
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Modern web applications with React, Node.js, and cutting-edge technologies.',
      color: 'from-blue-400 to-cyan-600',
      delay: 400
    },
    {
      icon: Zap,
      title: 'Web3 & Blockchain',
      description: 'Smart contracts, DeFi protocols, and decentralized application development.',
      color: 'from-purple-400 to-indigo-600',
      delay: 600
    }
  ];

  const progressSkills = [
    { skill: 'Cybersecurity', level: 95 },
    { skill: 'Web Development', level: 90 },
    { skill: 'Web3 & Blockchain', level: 85 }
  ];

  const skillTags = ['Cybersecurity', 'Web3', 'React', 'Blockchain', 'Penetration Testing', 'DevSecOps'];

  return (
    <section ref={ref} id="about" className="py-24 relative overflow-hidden">
      <div className="container-responsive relative z-10">
        
        {/* The Line Studio Style Title Reveal */}
        <div className="text-center mb-20 overflow-hidden">
          <h2 className="text-responsive-4xl md:text-responsive-6xl font-bold mb-6">
            <div className="flex justify-center items-center gap-6">
              {/* ABOUT with left clip reveal */}
              <div className="overflow-hidden">
                <span 
                  className={`block gradient-text transition-all duration-1200 ease-out ${
                    isVisible ? '' : ''
                  }`}
                  style={{
                    animation: isVisible ? 'clipRevealLeft 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s both' : 'none'
                  }}
                >
                  ABOUT
                </span>
              </div>
              
              {/* Animated divider with up reveal */}
              <div className="overflow-hidden">
                <div 
                  className="h-1 w-12 sm:w-16 lg:w-20 bg-gradient-to-r from-primary to-accent"
                  style={{
                    animation: isVisible ? 'clipRevealUp 0.8s cubic-bezier(0.77, 0, 0.175, 1) 0.9s both' : 'none'
                  }}
                />
              </div>
              
              {/* ME with right clip reveal */}
              <div className="overflow-hidden">
                <span 
                  className={`block gradient-text transition-all duration-1200 ease-out ${
                    isVisible ? '' : ''
                  }`}
                  style={{
                    animation: isVisible ? 'clipRevealRight 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.7s both' : 'none'
                  }}
                >
                  ME
                </span>
              </div>
            </div>
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Content with Line Studio Style Reveals */}
          <div className="space-y-8">
            
            {/* Title with clip reveal */}
            <div className="overflow-hidden">
              <h3 
                className="text-responsive-2xl md:text-responsive-3xl font-bold gradient-text-hero"
                style={{
                  animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.5s both' : 'none'
                }}
              >
                Security Professional & Developer
              </h3>
            </div>
            
            {/* Description paragraphs with staggered reveals */}
            <div className="space-y-4 text-responsive-base lg:text-responsive-lg text-muted-foreground leading-relaxed">
              <div className="overflow-hidden">
                <p 
                  style={{
                    animation: isVisible ? 'clipRevealUp 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.7s both' : 'none'
                  }}
                >
                  Passionate about creating secure digital solutions with cutting-edge cybersecurity 
                  implementations and innovative Web3 integrations for the future of the internet.
                </p>
              </div>
              
              <div className="overflow-hidden">
                <p 
                  style={{
                    animation: isVisible ? 'clipRevealUp 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.9s both' : 'none'
                  }}
                >
                  With expertise spanning from penetration testing to smart contract development, 
                  I bridge the gap between security and innovation in the digital landscape.
                </p>
              </div>
            </div>

            {/* Skills tags with responsive wrapping */}
            <div className="overflow-hidden">
              <div 
                className="flex flex-wrap gap-2 sm:gap-3"
                style={{
                  animation: isVisible ? 'clipRevealUp 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.0s both' : 'none'
                }}
              >
                {skillTags.map((skill, index) => (
                  <span 
                    key={skill}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 glass-card text-xs sm:text-sm font-medium transition-all duration-500 hover:scale-105 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${1200 + index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button with clip reveal */}
            <div className="overflow-hidden pt-4">
              <button 
                className="group magnetic-btn glass-button px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold flex items-center gap-3 hover:shadow-2xl text-sm sm:text-base touch-manipulation"
                style={{
                  animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.3s both' : 'none',
                  minHeight: '44px'
                }}
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>

          {/* Right Content - Combined Skills Cards and Progress */}
          <div className="space-y-8">
            
            {/* Skills Cards with Line Studio Style Reveals */}
            <div className="space-y-4 sm:space-y-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={skill.title}
                    className="group glass-card p-4 sm:p-6 lg:p-8 rounded-2xl hover:scale-105 transition-all duration-500 magnetic-btn overflow-hidden"
                    style={{
                      animation: isVisible ? `clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) ${0.5 + index * 0.2}s both` : 'none'
                    }}
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:rotate-6 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h4 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300">
                          {skill.title}
                        </h4>
                        <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Experience Stats Card */}
            <div 
              className="glass-card p-6 sm:p-8 rounded-2xl overflow-hidden"
              style={{
                animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.1s both' : 'none'
              }}
            >
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                    3+ Years
                  </div>
                  <div className="text-sm sm:text-base text-muted-foreground mt-2">
                    Experience in cybersecurity and secure development
                  </div>
                </div>
                
                {/* Animated progress bars */}
                <div className="space-y-4">
                  {progressSkills.map((item, index) => (
                    <div key={item.skill} className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="font-medium">{item.skill}</span>
                        <span className="text-muted-foreground">{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-1500 ease-out ${
                            isVisible ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{ 
                            width: `${item.level}%`,
                            transformOrigin: 'left',
                            transitionDelay: `${1400 + index * 200}ms`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Philosophy Section with Line Studio Style Reveal */}
        <div className="max-w-4xl mx-auto text-center mt-16 sm:mt-20 overflow-hidden">
          <div 
            className="glass-card p-8 sm:p-10 lg:p-12 rounded-3xl"
            style={{
              animation: isVisible ? 'clipRevealUp 1.2s cubic-bezier(0.77, 0, 0.175, 1) 1.5s both' : 'none'
            }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              <span className="gradient-text-hero">"Security First, Innovation Always"</span>
            </h3>
            <p className="text-sm sm:text-base lg:text-lg text-muted-foreground leading-relaxed">
              I believe that true innovation happens when security is built into the foundation, 
              not added as an afterthought. Every line of code, every architectural decision, 
              and every user interaction is crafted with both security and user experience in mind.
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced responsive CSS for animations */}
      <style>{`
        /* Custom clip reveal animations */
        @keyframes clipRevealLeft {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }

        @keyframes clipRevealRight {
          0% {
            clip-path: inset(0 0 0 100%);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }

        @keyframes clipRevealUp {
          0% {
            clip-path: inset(100% 0 0 0);
            opacity: 0;
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
          }
        }

        /* Gradient text utilities */
        .gradient-text {
          background: linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .gradient-text-hero {
          background: linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--slate-blue)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Glass button styling */
        .glass-button {
          background: linear-gradient(135deg, 
            hsl(var(--background) / 0.9), 
            hsl(var(--slate-blue) / 0.1)
          );
          border: 1px solid hsl(var(--bright-red) / 0.3);
          backdrop-filter: blur(20px);
          color: hsl(var(--foreground));
          transition: all 0.3s ease;
        }

        .glass-button:hover {
          border-color: hsl(var(--bright-red) / 0.5);
          background: linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)));
          color: white;
          transform: translateY(-2px);
        }

        /* Magnetic button effect - disabled on mobile for performance */
        @media (hover: hover) and (pointer: fine) {
          .magnetic-btn {
            transition: transform 0.3s ease;
          }
          
          .magnetic-btn:hover {
            transform: translateY(-2px);
          }
        }

        /* Touch device optimizations */
        @media (hover: none) {
          .magnetic-btn:active {
            transform: scale(0.98);
          }
          
          .glass-button:active {
            background: linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)));
            color: white;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          .duration-300,
          .duration-500,
          .duration-1000,
          .duration-1200,
          .duration-1500 {
            transition-duration: 0.1s;
          }
          
          [style*="animation"] {
            animation-duration: 0.1s !important;
          }
        }

        /* Container responsive utility */
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
      `}</style>
    </section>
  );
};

export default AboutSection;