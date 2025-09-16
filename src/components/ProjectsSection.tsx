import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Solana Whale Copy Bot',
      category: 'Web3',
      year: '2024',
      description: 'Advanced Telegram bot that mirrors whale wallet trades on Solana blockchain in real-time using webhooks and smart contract interactions.',
      tech: ['Solana', 'Telegram API', 'WebSockets', 'Smart Contracts'],
      image: '🐋',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DeFi Security Dashboard',
      category: 'Cybersecurity',
      year: '2024',
      description: 'Comprehensive security monitoring platform for DeFi protocols with real-time threat detection and vulnerability assessment.',
      tech: ['React', 'Web3.js', 'Python', 'Machine Learning'],
      image: '🛡️',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'NFT Marketplace Platform',
      category: 'Web3',
      year: '2023',
      description: 'Full-stack NFT marketplace with advanced trading features, royalty management, and cross-chain compatibility.',
      tech: ['Next.js', 'Ethereum', 'IPFS', 'Smart Contracts'],
      image: '🎨',
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Encrypted Chat Application',
      category: 'Security',
      year: '2023',
      description: 'End-to-end encrypted messaging platform with advanced security features and blockchain-based identity verification.',
      tech: ['React Native', 'Node.js', 'Cryptography', 'WebRTC'],
      image: '💬',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent work and innovations
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-500 cursor-pointer ${
                isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image/Icon */}
              <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-6xl overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
                <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </span>
                
                {/* Overlay Buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-200">
                    <ExternalLink className="w-5 h-5" />
                  </button>
                  <button className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-200">
                    <Github className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                {/* Meta Info */}
                <div className="flex items-center justify-between text-sm">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full text-blue-400">
                    {project.category}
                  </span>
                  <span className="text-foreground/60">{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs glass-card rounded text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div
          className={`text-center mt-12 transition-all duration-700 ${
            isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'
          }`}
          style={{ animationDelay: '0.8s' }}
        >
          <button className="btn-secondary group">
            <span>View All Projects</span>
            <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;