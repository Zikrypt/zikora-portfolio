import { useScrollReveal } from '@/hooks/useScrollReveal';

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3, triggerOnce: true });

  return (
    <section ref={ref} id="about" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Split reveal title */}
        <div className="text-center mb-16">
          <div className="relative">
            <h2 className="text-6xl md:text-8xl font-bold mb-4">
              {/* Split text animation */}
              <div className="flex justify-center items-center gap-4">
                <span 
                  className={`inline-block transition-all duration-1000 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                  }`}
                  style={{ transitionDelay: '200ms' }}
                >
                  ABOUT
                </span>
                <div 
                  className={`w-16 h-1 bg-primary transition-all duration-800 ${
                    isVisible ? 'scale-x-100' : 'scale-x-0'
                  }`}
                  style={{ transitionDelay: '800ms' }}
                />
                <span 
                  className={`inline-block transition-all duration-1000 ease-out ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}
                  style={{ transitionDelay: '600ms' }}
                >
                  ME
                </span>
              </div>
            </h2>
          </div>
        </div>

        {/* Content grid with staggered reveals */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div 
            className={`space-y-6 transition-all duration-1000 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
            }`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Security Professional & Developer
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Passionate about creating secure digital solutions with cutting-edge cybersecurity 
                implementations and innovative Web3 integrations for the future of the internet.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With expertise spanning penetration testing, secure coding practices, and blockchain 
                technology, I bridge the gap between security and innovation.
              </p>
            </div>

            {/* Skills tags */}
            <div className="flex flex-wrap gap-3">
              {['Cybersecurity', 'Web3', 'React', 'Blockchain', 'Penetration Testing', 'DevSecOps'].map((skill, index) => (
                <span 
                  key={skill}
                  className={`px-4 py-2 glass-card text-sm font-medium transition-all duration-500 hover:scale-105 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: `${800 + index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Right visual */}
          <div 
            className={`relative transition-all duration-1200 ease-out ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
            }`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="text-4xl font-bold text-center bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                  3+ Years
                </div>
                <div className="text-center text-muted-foreground">
                  Experience in cybersecurity and secure development
                </div>
                
                {/* Animated progress bars */}
                <div className="space-y-4">
                  {[
                    { skill: 'Cybersecurity', level: 95 },
                    { skill: 'Web Development', level: 90 },
                    { skill: 'Web3 & Blockchain', level: 85 }
                  ].map((item, index) => (
                    <div key={item.skill} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>{item.skill}</span>
                        <span>{item.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full transition-all duration-1500 ease-out ${
                            isVisible ? 'scale-x-100' : 'scale-x-0'
                          }`}
                          style={{ 
                            width: `${item.level}%`,
                            transformOrigin: 'left',
                            transitionDelay: `${1200 + index * 200}ms`
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
      </div>
    </section>
  );
};

export default AboutSection;