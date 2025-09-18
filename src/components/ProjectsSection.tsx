import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Eye, Star, ArrowRight } from 'lucide-react';

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
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
      title: 'DeFi Security Dashboard',
      category: 'Cybersecurity',
      year: '2024',
      description: 'Comprehensive security monitoring platform for DeFi protocols with real-time threat detection, vulnerability assessment, and automated risk scoring.',
      tech: ['React', 'Web3.js', 'Python', 'Machine Learning', 'TensorFlow'],
      image: '/images/defi.jpg.jpg',
      gradient: 'from-red-500 via-pink-500 to-purple-600',
      featured: true,
      stats: { views: '15.2k', stars: '234', forks: '67' }
    },
    {
      title: 'Solana Whale Copy Bot',
      category: 'Web3',
      year: '2024',
      description: 'Advanced Telegram bot that mirrors whale wallet trades on Solana blockchain in real-time using webhooks and smart contract interactions with profit optimization.',
      tech: ['Solana', 'Telegram API', 'WebSockets', 'Smart Contracts', 'Rust'],
      image: '/images/solana.jpg.jpg',
      gradient: 'from-blue-500 via-cyan-400 to-teal-500',
      featured: true,
      stats: { views: '12.8k', stars: '189', forks: '45' }
    },
    {
      title: 'NFT Marketplace Platform',
      category: 'Web3',
      year: '2023',
      description: 'Full-stack NFT marketplace with advanced trading features, royalty management, cross-chain compatibility, and AI-powered rarity analysis.',
      tech: ['Next.js', 'Ethereum', 'IPFS', 'Smart Contracts', 'GraphQL'],
      image: '/images/nft.jpg.jpg',
      gradient: 'from-green-500 via-emerald-400 to-teal-500',
      featured: false,
      stats: { views: '8.9k', stars: '156', forks: '32' }
    },
    {
      title: 'Encrypted Chat Application',
      category: 'Security',
      year: '2023',
      description: 'End-to-end encrypted messaging platform with advanced security features, blockchain-based identity verification, and quantum-resistant cryptography.',
      tech: ['React Native', 'Node.js', 'Cryptography', 'WebRTC', 'Blockchain'],
      image: '/images/encryption.jpg.jpg',
      gradient: 'from-orange-500 via-red-500 to-pink-500',
      featured: false,
      stats: { views: '6.7k', stars: '98', forks: '28' }
    },
    { 
      title: 'Pekamy Fresh Minds', 
      category: 'Recruitment',
      year: '2025',
      description: 'AI-powered recruitment platform that connects interns, graduates, and skilled professionals with companies using smart matching algorithms and skill assessments.',
      tech: ['Next.js', 'React', 'Node.js', 'TailwindCSS', 'AI/ML', 'PostgreSQL'],
      image: '/images/recruit.jpg.jpg',
      gradient: 'from-yellow-500 via-orange-500 to-red-500',
      featured: true,
      stats: { views: '3.2k', stars: '78', forks: '12' }
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-pink-400/20 to-red-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Enhanced Animation */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full text-sm mb-6">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>Featured Work</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[hsl(var(--bright-red))] to-[hsl(var(--dusty-purple))] bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            Innovative solutions combining cutting-edge technology with real-world impact. 
            Each project represents a unique challenge conquered through creative engineering.
          </p>
        </div>

        {/* Projects Grid with Staggered Animation */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              } ${project.featured ? 'lg:col-span-1' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Card */}
              <div className={`glass-card rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 ${
                hoveredProject === index 
                  ? 'scale-105 shadow-2xl' 
                  : 'hover:scale-102'
              }`}>
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-20">
                    <div className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </div>
                  </div>
                )}

                {/* Project Visual */}
                <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
                  </div>
                  
                  {/* Image or Icon */}
                  <div className="relative h-full flex items-center justify-center">
                    {typeof project.image === 'string' && project.image.startsWith('/') ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className={`h-full w-full object-cover transition-transform duration-500 ${
                          hoveredProject === index ? 'scale-110 rotate-2' : 'scale-100'
                        }`}
                      />
                    ) : (
                      <span className={`text-8xl transition-transform duration-500 ${
                        hoveredProject === index ? 'scale-110 rotate-12' : 'scale-100'
                      }`}>
                        {project.image}
                      </span>
                    )}

                    {/* Overlay */}
                    <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                      hoveredProject === index ? 'opacity-60' : 'opacity-0'
                    }`} />
                  </div>

                  {/* Action Buttons */}
                  <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === index 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-4'
                  }`}>
                    <button className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-200 group/btn">
                      <Eye className="w-5 h-5 group-hover/btn:text-blue-400" />
                    </button>
                    <button className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-200 group/btn">
                      <Github className="w-5 h-5 group-hover/btn:text-purple-400" />
                    </button>
                    <button className="p-3 glass-card rounded-full hover:scale-110 transition-transform duration-200 group/btn">
                      <ExternalLink className="w-5 h-5 group-hover/btn:text-green-400" />
                    </button>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 space-y-6">
                  {/* Meta Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${project.gradient} text-white`}>
                        {project.category}
                      </span>
                      <span className="text-sm text-foreground/60">{project.year}</span>
                    </div>
                    
                    {/* Project Stats */}
                    <div className="flex items-center gap-4 text-xs text-foreground/60">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {project.stats.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        {project.stats.stars}
                      </span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold transition-all duration-300 ${
                    hoveredProject === index
                      ? 'bg-gradient-to-r from-[hsl(var(--bright-red))] to-[hsl(var(--dusty-purple))] bg-clip-text text-transparent'
                      : 'text-foreground'
                  }`}>
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs glass-card rounded-lg text-foreground/80 hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Read More Link */}
                  <div className="pt-2">
                    <button className="inline-flex items-center gap-2 text-sm font-semibold text-[hsl(var(--bright-red))] hover:gap-3 transition-all duration-300">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div
          className={`text-center transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '1000ms' }}
        >
          <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[hsl(var(--bright-red))] to-[hsl(var(--dusty-purple))] bg-clip-text text-transparent">
              Interested in My Work?
            </h3>
            <p className="text-foreground/70 mb-6">
              Explore my complete portfolio and discover more innovative projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary group">
                <span>View All Projects</span>
                <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
              <button className="btn-secondary group">
                <span><a href="https://github.com/Zikrypt">GitHub Portfolio</a></span>
                <Github className="w-4 h-4 transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className={`absolute top-32 right-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
      }`}>
        <div className="w-2 h-2 bg-[hsl(var(--bright-red))] rounded-full animate-ping" />
      </div>
      <div className={`absolute bottom-32 left-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}>
        <div className="w-3 h-3 bg-[hsl(var(--dusty-purple))] rounded-full animate-pulse" />
      </div>

      <style>{`
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        /* Enhanced glass effect */
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
        
        /* Smooth transitions for all interactive elements */
        button, .group {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
