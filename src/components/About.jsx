import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-8 text-center overflow-hidden">
      
      {/* Yıldız Arka Plan */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="stars"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-3xl backdrop-blur-md bg-white/5 rounded-xl p-8 animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">About Miraverse</h2>
        <p className="text-lg leading-relaxed">
          Miraverse Token is more than just a project — it’s an interstellar vision.  
          Our mission is to bridge the gap between decentralized finance, gaming, and storytelling.  
          Dive into a cosmic journey powered by community, creativity, and innovation.  
          The future isn't coming. **We are building it.**
        </p>
      </div>

    </section>
  );
};

export default About;
