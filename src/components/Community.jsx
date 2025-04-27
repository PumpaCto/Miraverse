import React from 'react';

const Community = () => {
  return (
    <section id="community" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-indigo-900 to-black text-white px-8 text-center overflow-hidden">
      
      {/* Yıldız Arka Plan */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="stars"></div>
      </div>

      {/* İçerik */}
      <div className="relative z-10 max-w-4xl animate-fadeIn">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Join the Miraverse Community</h2>
        <p className="text-lg mb-12">Be part of the revolution. Connect, build, and shape the future of crypto with us.</p>

        {/* Butonlar */}
        <div className="flex flex-wrap gap-6 justify-center">
          <a href="https://t.me/miraversetoken" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 rounded-full font-semibold shadow-lg hover:scale-110 transition transform duration-300">
            Telegram
          </a>
          <a href="https://twitter.com/miraversetoken" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-blue-400 to-indigo-500 hover:from-indigo-500 hover:to-blue-400 rounded-full font-semibold shadow-lg hover:scale-110 transition transform duration-300">
            Twitter
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 hover:from-blue-500 hover:to-green-400 rounded-full font-semibold shadow-lg hover:scale-110 transition transform duration-300">
            Discord
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 hover:from-pink-500 hover:to-red-500 rounded-full font-semibold shadow-lg hover:scale-110 transition transform duration-300">
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
