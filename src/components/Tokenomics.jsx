import React from 'react';

const Tokenomics = () => {
  return (
    <section className="tokenomics-section flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <div className="max-w-3xl animate-slideInLeft">
        <h2 className="text-4xl font-bold mb-6">Tokenomics</h2>
        <p className="text-lg leading-relaxed mb-8">
          A fair and transparent distribution model designed to fuel growth and empower the community.
        </p>

        <div className="space-y-4 text-lg">
          <p><span className="font-semibold">50%</span> — Community Rewards</p>
          <p><span className="font-semibold">20%</span> — Development Fund</p>
          <p><span className="font-semibold">15%</span> — Marketing and Partnerships</p>
          <p><span className="font-semibold">10%</span> — Team Allocation (Locked)</p>
          <p><span className="font-semibold">5%</span> — Liquidity Pool</p>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
