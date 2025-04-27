import React from 'react';

const Roadmap = () => {
  return (
    <section className="roadmap-section flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <div className="max-w-4xl animate-slideInDown">
        <h2 className="text-4xl font-bold mb-6">Roadmap</h2>
        <div className="text-lg leading-relaxed space-y-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">Phase 1 - Launch</h3>
            <p>Token release, website launch, initial marketing campaign.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Phase 2 - Community Growth</h3>
            <p>Expanding social media presence, partnerships, early community rewards.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Phase 3 - Ecosystem Expansion</h3>
            <p>Game development starts, NFT integrations, staking platform launch.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Phase 4 - Miraverse Launch</h3>
            <p>Open-world metaverse release, major CEX listings, global marketing push.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
