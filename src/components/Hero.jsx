import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section flex flex-col items-center justify-center h-screen text-white relative overflow-hidden bg-black">
      {/* Spiral arka plan */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-96 h-96 border-8 border-blue-400 rounded-full animate-spin-slow opacity-30"></div>
      </div>

      {/* Logo ve Yazılar */}
      <h1 className="text-5xl font-bold mb-4 z-10 animate-fadeInDown">Miraverse Token</h1>
      <p className="text-xl z-10 animate-fadeInUp">The Last Hope Rises</p>

      {/* Scroll İkonu */}
      <div className="absolute bottom-8 animate-bounce">
        <span className="text-2xl">↓</span>
      </div>
    </section>
  );
};

export default Hero;
