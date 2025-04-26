import React from 'react';

const About = () => {
  return (
    <section className="about-section flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6 text-center">
      <div className="max-w-3xl animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6">What is Miraverse Token?</h2>
        <p className="text-lg leading-relaxed">
          Miraverse Token is the last hope, born from the forgotten ashes of ancient worlds.  
          It represents rebirth, strength, and infinite possibilities across galaxies.  
          Join us and become part of the ultimate cosmic revolution.
        </p>
      </div>
    </section>
  );
};

export default About;
