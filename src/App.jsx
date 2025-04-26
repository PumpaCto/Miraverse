import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Roadmap from './components/Roadmap';

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

      {/* Future Sections (Tokenomics, Community, Footer, etc.) */}
    </div>
  );
};

export default App;
