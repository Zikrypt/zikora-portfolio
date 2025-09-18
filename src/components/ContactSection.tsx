import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
    
    // Show success message (in real app, you'd use a toast library)
    alert('Message sent successfully! I\'ll get back to you soon.');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'Callm3samuel@gmail.com',
      href: 'mailto:Callm3samuel@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+234 901 117 2838',
      href: 'tel:+2349011172838'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Remote / Global',
      href: '#'
    }
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Zikrypt', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/zikora-okelo-8818252a8', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/HACKWITHZIK?t=9xLb6f-1sVy4CgdFp2sOWw&s=09', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/_zikora.__?igsh=NmtidXp3OGE3b2Mw', label: 'Instagram' },
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header with Line Studio Animation */}
        <div className="text-center mb-12 md:mb-16 overflow-hidden">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
            style={{
              animation: isVisible ? 'clipRevealUp 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.3s both' : 'none'
            }}
          >
            Get In Touch
          </h2>
          <div className="overflow-hidden">
            <p 
              className="text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto"
              style={{
                animation: isVisible ? 'clipRevealUp 1.2s cubic-bezier(0.77, 0, 0.175, 1) 0.5s both' : 'none'
              }}
            >
              Ready to bring your project to life? Let's discuss how we can work together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Contact Info */}
          <div className="space-y-6 md:space-y-8">
            <div className="overflow-hidden">
              <h3 
                className="text-xl sm:text-2xl font-bold mb-4 md:mb-6 text-foreground"
                style={{
                  animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.7s both' : 'none'
                }}
              >
                Let's Connect
              </h3>
            </div>
            
            <div className="overflow-hidden">
              <p 
                className="text-foreground/70 leading-relaxed mb-6 md:mb-8 text-sm sm:text-base"
                style={{
                  animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.9s both' : 'none'
                }}
              >
                I'm always interested in hearing about new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-3 md:space-y-4">
              {contactMethods.map((method, index) => (
                <div key={index} className="overflow-hidden">
                  <a
                    href={method.href}
                    className={`flex items-center gap-3 md:gap-4 p-3 md:p-4 glass-card rounded-lg hover:scale-105 transition-all duration-300 group ${
                      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                    }`}
                    style={{ 
                      animation: isVisible ? `clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) ${1.1 + index * 0.2}s both` : 'none'
                    }}
                  >
                    <div className="p-2 md:p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white flex-shrink-0">
                      <method.icon className="w-4 h-4 md:w-5 md:h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-medium text-foreground text-sm md:text-base">{method.title}</div>
                      <div className="text-foreground/70 group-hover:text-foreground transition-colors text-xs md:text-sm truncate">
                        {method.value}
                      </div>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-6 md:pt-8 overflow-hidden">
              <h4 
                className="text-lg font-semibold mb-3 md:mb-4 text-foreground"
                style={{
                  animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.7s both' : 'none'
                }}
              >
                Follow Me
              </h4>
              <div 
                className="flex gap-3 md:gap-4"
                style={{
                  animation: isVisible ? 'clipRevealLeft 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.9s both' : 'none'
                }}
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 md:p-3 glass-card rounded-lg hover:scale-110 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                    aria-label={social.label}
                    style={{ minWidth: '44px', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="overflow-hidden">
            <div 
              className="glass-card p-6 md:p-8 rounded-xl space-y-4 md:space-y-6"
              style={{
                animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.7s both' : 'none'
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div className="overflow-hidden">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 0.9s both' : 'none'
                    }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm md:text-base"
                    placeholder="Your full name"
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.0s both' : 'none'
                    }}
                  />
                </div>

                <div className="overflow-hidden">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.1s both' : 'none'
                    }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 text-sm md:text-base"
                    placeholder="your.email@example.com"
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.2s both' : 'none'
                    }}
                  />
                </div>

                <div className="overflow-hidden">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-medium text-foreground mb-2"
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.3s both' : 'none'
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 glass-card rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.4s both' : 'none'
                    }}
                  />
                </div>

                <div className="overflow-hidden pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary group disabled:opacity-50 disabled:cursor-not-allowed px-6 py-3 md:px-8 md:py-4 text-sm md:text-base"
                    style={{
                      animation: isVisible ? 'clipRevealRight 1.0s cubic-bezier(0.77, 0, 0.175, 1) 1.5s both' : 'none',
                      minHeight: '44px'
                    }}
                  >
                    {isSubmitting ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced responsive CSS */}
      <style>{`
        /* Custom clip reveal animations */
        @keyframes clipRevealLeft {
          0% {
            clip-path: inset(0 100% 0 0);
            opacity: 0;
            transform: translateX(-20px);
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes clipRevealRight {
          0% {
            clip-path: inset(0 0 0 100%);
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes clipRevealUp {
          0% {
            clip-path: inset(100% 0 0 0);
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            clip-path: inset(0 0 0 0);
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Glass card styling */
        .glass-card {
          backdrop-filter: blur(20px);
          background: linear-gradient(135deg, 
            hsl(var(--background) / 0.8), 
            hsl(var(--slate-blue) / 0.05)
          );
          border: 1px solid hsl(var(--dusty-purple) / 0.2);
          box-shadow: 
            0 8px 32px hsl(var(--dark-navy) / 0.1),
            0 0 0 1px hsl(var(--bright-red) / 0.05);
        }

        /* Button styles */
        .btn-primary {
          background: linear-gradient(135deg, hsl(var(--bright-red)), hsl(var(--dusty-purple)));
          color: white;
          border-radius: 8px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .transition-all,
          [style*="animation"] {
            transition-duration: 0.1s !important;
            animation-duration: 0.1s !important;
          }
        }

        /* Mobile optimizations */
        @media (max-width: 768px) {
          .glass-card {
            backdrop-filter: blur(10px);
            box-shadow: 
              0 4px 16px hsl(var(--dark-navy) / 0.1),
              0 0 0 1px hsl(var(--bright-red) / 0.05);
          }
        }

        /* Touch device optimizations */
        @media (hover: none) {
          .hover\\:scale-105:hover {
            transform: scale(1);
          }
          
          .hover\\:scale-110:hover {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;