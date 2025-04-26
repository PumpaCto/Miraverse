import React from 'react';

const Roadmap = () => {
  return (
    <section className="roadmap-section flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <div className="max-w-4xl animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6">Our Journey Ahead</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Phase 1 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Phase 1: Awakening</h3>
            <p>Launch Miraverse Token, build initial community, set up social media presence.</p>
          </div>

          {/* Phase 2 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Phase 2: Expansion</h3>
            <p>Introduce NFT collection, partnerships, expand marketing campaigns globally.</p>
          </div>

          {/* Phase 3 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Phase 3: Universe Integration</h3>
            <p>Launch Miraverse game alpha version, integrate token utilities across platforms.</p>
          </div>

          {/* Phase 4 */}
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Phase 4: Cosmic Dominance</h3>
            <p>Full game release, major CEX listings, massive global expansion.</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Roadmap;
