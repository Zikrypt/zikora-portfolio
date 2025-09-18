import { useEffect, useRef, useState } from 'react';
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

  return (
    <footer 
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-t from-primary to-primary/90 text-primary-foreground"
    >
      {/* Animated overlay that slides up */}
      <div 
        className={`absolute inset-0 bg-gradient-to-t from-primary via-primary/95 to-transparent transition-all duration-1000 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
        }`}
      />
      
      {/* Content container */}
      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4">
          
          {/* Main footer content */}
          <div 
            className={`text-center transition-all duration-1000 delay-300 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">
              Let's Create Something
              <br />
              <span className="bg-gradient-to-r from-primary-foreground to-accent-foreground bg-clip-text text-transparent">
                Extraordinary
              </span>
            </h2>
            
            <p 
              className={`mb-8 text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto transition-all duration-1000 delay-500 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              Ready to transform your ideas into reality? Let's start the conversation.
            </p>
            
            {/* CTA Button */}
            <div 
              className={`mb-12 transition-all duration-1000 delay-700 ease-out ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            >
              <button className="group relative overflow-hidden px-8 py-4 bg-primary-foreground text-primary rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10"><a href="tel:+234 901 117 2838">Get In Touch</a></span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </div>
          </div>
          
          {/* Footer links and info */}
          <div 
            className={`grid md:grid-cols-3 gap-8 text-center md:text-left border-t border-primary-foreground/20 pt-8 transition-all duration-1000 delay-900 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Contact Info */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Contact</h3>
              <div className="space-y-2 text-primary-foreground/80">
                <p>Callm3samuel@gmail.com</p>
                <p>+234 901 117 2838 </p>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h3 className="font-semibold mb-4 text-lg">Connect</h3>
              <div className="flex justify-center md:justify-start space-x-4">
                {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                  <a 
                    key={social}
                    href="#" 
                    className={`text-primary-foreground/80 hover:text-primary-foreground transition-all duration-300 hover:scale-110 ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${1100 + index * 100}ms` 
                    }}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Copyright */}
            <div className="md:text-right">
              <p 
                className={`text-primary-foreground/60 transition-all duration-1000 delay-1200 ease-out ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
              >
                © 2024 Okelo Zikora
                <br />
                <span className="text-sm">Crafted with passion and secured with expertise.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-secondary to-accent opacity-60" />
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 bg-primary-foreground/20 rounded-full transition-all duration-2000 ease-out ${
              isVisible ? 'animate-pulse' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default AnimatedFooter;