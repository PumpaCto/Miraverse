import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Roadmap from './Roadmap';
import Tokenomics from './Tokenomics';
import Community from './Community';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

const MainSite = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Roadmap />
      <Tokenomics />
      <Community />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default MainSite;
