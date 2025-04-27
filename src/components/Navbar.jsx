import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <a href="#hero" className="text-2xl font-bold text-white hover:text-blue-400 transition">
          Miraverse
        </a>

        {/* Menu */}
        <div className="hidden md:flex space-x-8 text-lg">
          <a href="#hero" className="hover:text-blue-400 transition">Home</a>
          <a href="#about" className="hover:text-blue-400 transition">About</a>
          <a href="#roadmap" className="hover:text-blue-400 transition">Roadmap</a>
          <a href="#tokenomics" className="hover:text-blue-400 transition">Tokenomics</a>
          <a href="#community" className="hover:text-blue-400 transition">Community</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
