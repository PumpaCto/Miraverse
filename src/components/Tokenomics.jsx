import React from 'react';

const Tokenomics = () => {
  return (
    <section className="tokenomics-section flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-800 to-black text-white px-6 text-center">
      <div className="max-w-4xl animate-fadeInUp">
        <h2 className="text-4xl font-bold mb-6">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          
          {/* Supply */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Total Supply</h3>
            <p>1,000,000,000 MIR Tokens</p>
          </div>

          {/* Distribution */}
          <div className="p-6 bg-gray-900 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Distribution</h3>
            <ul className="list-disc list-inside">
              <li>50% Community Rewards</li>
              <li>20% Development & Team</li>
              <li>15% Marketing & Partnerships</li>
              <li>10% Ecosystem Growth</li>
              <li>5% CEX Listings Reserve</li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
