import { useEffect, useState } from 'react';

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; delay: number; left: string }>>([]);

  useEffect(() => {
    const createParticles = () => {
      const particleCount = window.innerWidth < 768 ? 8 : 15;
      const newParticles = Array.from({ length: particleCount }, (_, i) => ({
        id: i,
        delay: Math.random() * 15,
        left: `${Math.random() * 100}%`,
      }));
      setParticles(newParticles);
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="particle"
          style={{
            left: particle.left,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;