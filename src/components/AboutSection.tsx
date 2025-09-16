import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const skills = [
    { icon: '🌐', name: 'Web Development', level: 'Expert Level' },
    { icon: '⛓️', name: 'Blockchain/Web3', level: 'Advanced' },
    { icon: '🛡️', name: 'Cybersecurity', level: 'Expert Level' },
    { icon: '📱', name: 'Mobile Development', level: 'Advanced' },
  ];

  const techStack = [
    'JavaScript', 'Solana', 'Smart Contracts', 'React', 
    'Node.js', 'Python', 'Cybersecurity', 'Flutter'
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-blue-900/5" />
      
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Passionate about creating secure, innovative digital experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div
            className={`relative flex justify-center transition-all duration-700 ${
              isVisible ? 'animate-fade-in-left opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.2s' }}
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full blur-3xl opacity-30 animate-pulse-glow" />
              
              {/* Profile Image Container */}
              <div className="relative w-80 h-80 glass-card rounded-full p-2">
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full flex items-center justify-center text-6xl">
                  👨‍💻
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-700 ${
              isVisible ? 'animate-fade-in-right opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.4s' }}
          >
            {/* Description */}
            <p className="text-lg text-foreground/80 leading-relaxed">
              I'm a passionate full-stack developer with a deep focus on creating beautiful,
              functional web experiences while implementing robust security measures. My expertise
              spans across modern web technologies, blockchain development, and cybersecurity protocols.
            </p>

            {/* Skills Grid */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className={`glass-card p-4 rounded-lg flex items-center gap-4 group hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-2xl">{skill.icon}</div>
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">{skill.name}</div>
                    <div className="text-sm text-foreground/60">{skill.level}</div>
                  </div>
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: '1s' }}
            >
              <h3 className="text-lg font-semibold mb-4 text-foreground">Tech Stack</h3>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 glass-card rounded-full text-sm hover:scale-105 transition-transform duration-200 cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;