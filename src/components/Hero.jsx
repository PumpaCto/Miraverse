import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section relative flex items-center justify-center min-h-screen bg-black text-white text-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover opacity-20"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hero Content */}
      <div className="relative z-10 animate-fadeInUp px-6">
        <img src="/logo.png" alt="Miraverse Token Logo" className="w-32 mx-auto mb-6" />
        <h1 className="text-5xl font-bold mb-4">Welcome to Miraverse</h1>
        <p className="text-lg max-w-2xl mx-auto">
          The next evolution of decentralized crypto and gaming.  
          Explore the infinite possibilities with Miraverse Token.
        </p>
      </div>
    </section>
  );
};

export default Hero;
