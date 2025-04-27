import React from 'react';

const About = () => {
  return (
    <section className="about-section flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <div className="max-w-3xl animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6">About Miraverse</h2>
        <p className="text-lg leading-relaxed">
          Miraverse Token is the gateway to a new universe where crypto, gaming, and digital innovation collide.  
          Join us as we build an expansive ecosystem powered by the community, for the community.
        </p>
      </div>
    </section>
  );
};

export default About;
