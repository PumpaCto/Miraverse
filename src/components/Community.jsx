import React from 'react';

const Community = () => {
  return (
    <section className="community-section flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <div className="max-w-3xl animate-zoomIn">
        <h2 className="text-4xl font-bold mb-6">Join the Miraverse Community</h2>
        <p className="text-lg leading-relaxed mb-8">
          Be part of the Miraverse revolution!  
          Stay updated, connect, and grow together with us.
        </p>

        <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
          {/* Telegram Button */}
          <a 
            href="https://t.me/miraversetoken" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-blue-600 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Join Telegram
          </a>

          {/* Twitter Button */}
          <a 
            href="https://twitter.com/MiraverseToken" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-6 py-3 bg-blue-400 rounded-full font-semibold hover:bg-blue-500 transition"
          >
            Follow Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;
