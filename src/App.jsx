import React from 'react';
import Hero from './components/Hero';
import About from './components/About';

// Import Animations
import './styles/animations.css';

const App = () => {
  return (
    <div className="App overflow-x-hidden">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />

      {/* Future Sections (Roadmap, Tokenomics, Community, etc.) */}
    </div>
  );
};

export default App;
