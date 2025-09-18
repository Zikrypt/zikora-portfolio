import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Trigger entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 */}
          <path
            d="M0,400 C300,300 600,500 1200,400 L1200,800 L0,800 Z"
            fill="url(#wave1)"
            className="animate-wave-1"
          />
          
          {/* Wave 2 */}
          <path
            d="M0,500 C400,400 800,600 1200,500 L1200,800 L0,800 Z"
            fill="url(#wave2)"
            className="animate-wave-2"
          />
          
          {/* Wave 3 */}
          <path
            d="M0,600 C200,550 400,650 600,600 C800,550 1000,650 1200,600 L1200,800 L0,800 Z"
            fill="url(#wave3)"
            className="animate-wave-3"
          />
        </svg>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center px-6 transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        {/* 404 Number with Glow Effect */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 leading-none select-none">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-cyan-400 opacity-20 blur-2xl leading-none select-none">
            404
          </div>
        </div>

        {/* Error Message */}
        <div className={`mb-8 transition-all duration-1000 ease-out delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Oops! Page not found
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-md mx-auto leading-relaxed">
            The page you're looking for seems to have drifted away like waves in the ocean.
          </p>
        </div>

        {/* Action Buttons */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 ease-out delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <a
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
          >
            <span className="relative z-10">Return Home</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          
          <button
            onClick={() => window.history.back()}
            className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300 hover:scale-105"
          >
            Go Back
          </button>
        </div>

        {/* Additional Info */}
        <div className={`mt-12 text-sm text-gray-400 transition-all duration-1000 ease-out delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p>Error Code: 404 | Page Not Found</p>
          <p className="mt-1">If you believe this is a mistake, please contact support.</p>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes wave-1 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-25px) translateY(-10px);
          }
        }

        @keyframes wave-2 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(25px) translateY(-15px);
          }
        }

        @keyframes wave-3 {
          0%, 100% {
            transform: translateX(0) translateY(0);
          }
          50% {
            transform: translateX(-15px) translateY(-8px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.2;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }

        .animate-wave-1 {
          animation: wave-1 8s ease-in-out infinite;
        }

        .animate-wave-2 {
          animation: wave-2 10s ease-in-out infinite reverse;
        }

        .animate-wave-3 {
          animation: wave-3 12s ease-in-out infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        /* Enhanced glow effects */
        .text-9xl, .md\\:text-\\[12rem\\] {
          text-shadow: 0 0 30px rgba(34, 211, 238, 0.5);
        }

        /* Smooth gradient animation */
        .bg-gradient-to-r {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        /* Button hover enhancements */
        .group:hover .absolute {
          animation: shimmer 0.6s ease-out;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        /* Performance optimizations */
        * {
          backface-visibility: hidden;
          perspective: 1000px;
        }

        /* Responsive text sizing */
        @media (max-width: 768px) {
          .text-9xl {
            font-size: 6rem;
          }
        }

        @media (max-width: 480px) {
          .text-9xl {
            font-size: 4rem;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFound;