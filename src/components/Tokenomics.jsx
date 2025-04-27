import React from 'react';

const tokenomics = [
  { title: '50% - Community Rewards', description: 'Empowering loyal supporters and active members.', icon: '🤝' },
  { title: '20% - Development Fund', description: 'Funding game development, ecosystem growth.', icon: '🛠️' },
  { title: '15% - Marketing & Partnerships', description: 'Strategic promotions and strong collaborations.', icon: '📢' },
  { title: '10% - Team Allocation', description: 'Locked allocations to ensure project sustainability.', icon: '👨‍💻' },
  { title: '5% - Liquidity Pool', description: 'Ensuring healthy market conditions.', icon: '💧' },
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-blue-950 to-black text-white px-8 text-center overflow-hidden">
      
      {/* Yıldız Arka Plan */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="stars"></div>
      </div>

      {/* Başlık */}
      <div className="relative z-10 max-w-4xl animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Tokenomics</h2>

        {/* Kartlar */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {tokenomics.map((item, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-md p-6 rounded-xl hover:bg-white/10 transition duration-300 animate-slideInUp">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-md">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Tokenomics;
