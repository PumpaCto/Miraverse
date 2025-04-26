import React from 'react';
import Hero from './components/Hero';

// Animasyonları dahil ediyoruz
import './styles/animations.css';

const App = () => {
  return (
    <div className="App overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Buraya ileride About, Roadmap, Community gibi bölümler de eklenecek */}
    </div>
  );
};

export default App;
