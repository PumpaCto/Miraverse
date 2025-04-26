import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';
import Tokenomics from './components/Tokenomics';

// Import Animations
import './styles/animations.css';

const App = () => {
  return (
    <div className="App overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Roadmap Section */}
      <Roadmap />

      {/* Tokenomics Section */}
      <Tokenomics />

      {/* Future Sections (Community, Footer, etc.) */}
    </div>
  );
};

export default App;
