import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section relative h-screen flex flex-col items-center justify-center overflow-hidden text-white">
      
      {/* Spiral Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute w-full h-full object-cover opacity-40"
      >
        <source src="/background.mp4" type="video/mp4" />
      </video>

      {/* Logo and Headings */}
      <div className="z-10 flex flex-col items-center animate-fadeInDown">
        <img src="/logo.png" alt="Miraverse Logo" className="w-40 mb-6" />
        <h1 className="text-4xl font-bold mb-4">Miraverse Token</h1>
        <p className="text-xl">The Last Hope Rises</p>
      </div>

      {/* Scroll Down Icon */}
      <div className="absolute bottom-8 animate-bounce z-10">
        <span className="text-2xl">↓</span>
      </div>

    </section>
  );
};

export default Hero;
