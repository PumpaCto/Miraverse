import React from 'react';

function Roadmap() {
  return (
    <section id="roadmap" style={styles.roadmapSection}>
      <h2 style={styles.title} className="animate-zoomIn">Our Roadmap</h2>
      <div style={styles.timeline}>
        <div style={styles.step}>
          <h3>Q2 2025</h3>
          <p>Launch of Miraverse Token and Community Building</p>
        </div>
        <div style={styles.step}>
          <h3>Q3 2025</h3>
          <p>Release of Crypto Anime Trailers and NFT Characters</p>
        </div>
        <div style={styles.step}>
          <h3>Q4 2025</h3>
          <p>Open-World Game Beta Release and Merch Store Launch</p>
        </div>
        <div style={styles.step}>
          <h3>Q1 2026</h3>
          <p>Major Exchange Listings and Global Expansion</p>
        </div>
      </div>
    </section>
  );
}

const styles = {
  roadmapSection: {
    minHeight: '100vh',
    background: '#0f0c29',
    backgroundImage: 'linear-gradient(180deg, #302b63, #24243e)',
    color: '#ffffff',
    padding: '100px 20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '40px',
    marginBottom: '50px',
  },
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '40px',
    alignItems: 'center',
  },
  step: {
    background: '#1c1c3c',
    padding: '20px 30px',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '600px',
    boxShadow: '0 0 10px #00ffff',
  }
};

export default Roadmap;
