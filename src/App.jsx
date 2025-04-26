import React from 'react';
import Hero from './components/Hero';

// Import Animations
import './styles/animations.css';

const App = () => {
  return (
    <div className="App overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Future Sections (About, Roadmap, Tokenomics, Community, etc.) */}
    </div>
  );
};

export default App;
