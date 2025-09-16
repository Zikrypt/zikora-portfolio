import { ArrowUpRight, Download } from 'lucide-react';
import { useEffect, useState } from 'react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '99%', label: 'Client Satisfaction' },
  ];

  const floatingCards = [
    { icon: '🔐', title: 'Cybersecurity', delay: 0 },
    { icon: '⚡', title: 'Web3', delay: 200 },
    { icon: '💻', title: 'Development', delay: 400 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-purple-900/10 to-cyan-900/10"
        style={{ background: 'var(--hero-gradient)' }}
      />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.1s' }}
          >
            <span>Available for opportunities</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Main Title */}
          <div
            className={`space-y-2 transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent animate-pulse-glow">
                HACK/WITH/ZIK
              </span>
              <br />
              <span className="text-foreground">Professional</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Web Developer
              </span>
              <br />
              <span className="text-foreground/90">& Cybersecurity Expert</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className={`text-lg text-foreground/70 max-w-lg leading-relaxed transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.5s' }}
          >
            Crafting secure digital solutions with cutting-edge Web3 integrations and robust
            cybersecurity implementations for the future of the internet.
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.7s' }}
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

          {/* Stats */}
          <div
            className={`grid grid-cols-3 gap-6 pt-8 transition-all duration-700 ${
              isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.9s' }}
          >
            {stats.map((stat, index) => (
              <div key={index} className="glass-card p-4 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-sm text-foreground/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Visual */}
        <div className="relative flex justify-center items-center min-h-[400px]">
          {floatingCards.map((card, index) => (
            <div
              key={index}
              className={`absolute glass-card p-6 rounded-xl text-center min-w-[140px] 
                transition-all duration-700 hover:scale-110 hover:shadow-2xl animate-float
                ${isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'}`}
              style={{
                animationDelay: `${card.delay + 1000}ms`,
                top: `${index * 80 + 20}px`,
                right: `${index * 40 - 20}px`,
                animationDuration: `${6 + index}s`,
              }}
            >
              <div className="text-3xl mb-2">{card.icon}</div>
              <div className="font-semibold text-sm">{card.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;