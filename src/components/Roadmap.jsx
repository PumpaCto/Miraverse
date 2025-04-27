import React from 'react';

const steps = [
  {
    title: 'Phase 1 - Launch',
    description: 'Token launch, website release, initial community formation.',
    icon: '🚀',
  },
  {
    title: 'Phase 2 - Growth',
    description: 'Expanding social media presence, early partnerships.',
    icon: '🌌',
  },
  {
    title: 'Phase 3 - Ecosystem',
    description: 'Start of game development, NFT integration.',
    icon: '🛸',
  },
  {
    title: 'Phase 4 - Expansion',
    description: 'Miraverse open-world metaverse release, CEX listings.',
    icon: '✨',
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white px-8 text-center overflow-hidden">
      
      {/* Yıldız Arka Plan */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="stars"></div>
      </div>

      {/* Başlık */}
      <div className="relative z-10 max-w-4xl animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Miraverse Roadmap</h2>

        {/* Adımlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {steps.map((step, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition duration-300 animate-slideInUp">
              <div className="text-5xl mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
              <p className="text-md">{step.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Roadmap;
