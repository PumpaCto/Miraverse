import React, { useState, useEffect } from 'react';

const Landing = ({ onEnter }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 saniye loading ekranı

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="landing-section flex items-center justify-center min-h-screen bg-black text-white relative overflow-hidden">
      {loading ? (
        <div className="flex flex-col items-center">
          {/* Mini Loading (Yıldız Barı gibi) */}
          <img src="/logo.png" alt="Miraverse Logo" className="w-24 mb-6 animate-zoomIn" />
          <div className="w-48 h-2 bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 animate-loadingBar"></div>
          </div>
          <p className="mt-4 text-sm">Preparing the Universe...</p>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Miraverse Logo" className="w-32 mb-6 animate-glow" />
          <h1 className="text-4xl font-bold mb-4 animate-fadeIn">Welcome to Miraverse</h1>
          <p className="text-lg mb-8 animate-fadeIn">A new era of crypto, gaming, and infinite possibilities.</p>
          <button 
            onClick={onEnter}
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-purple-600 hover:to-blue-500 text-white font-bold rounded-full transition duration-300 animate-fadeIn"
          >
            Enter Miraverse
          </button>
        </div>
      )}
    </section>
  );
};

export default Landing;
