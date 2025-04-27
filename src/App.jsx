import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
