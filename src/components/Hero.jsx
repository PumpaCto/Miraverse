import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white overflow-hidden">
      
      {/* Yıldız Yağmuru */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="stars"></div>
      </div>

      {/* Logo ve Yazılar */}
      <div className="relative z-10 text-center px-6">
        <img 
          src="/logo.png" 
          alt="Miraverse Logo" 
          className="w-32 mx-auto mb-6 animate-glow"
        />
        <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-typing">
          Welcome to Miraverse
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto animate-fadeIn">
          Where crypto, anime, and the infinite universe collide.
        </p>
      </div>

      {/* Scroll Down İpucu */}
      <div className="absolute bottom-10 animate-bounce">
        <p className="text-sm text-blue-400">Scroll Down</p>
        <div className="w-1 h-6 bg-blue-400 mx-auto mt-2 rounded-full"></div>
      </div>

    </section>
  );
};

export default Hero;
