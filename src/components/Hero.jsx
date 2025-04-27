import React from 'react';

function Hero() {
  return (
    <section id="hero" style={styles.heroSection}>
      <div style={styles.content}>
        <h1 style={styles.title} className="animate-zoomIn">Welcome to Miraverse</h1>
        <p style={styles.subtitle} className="animate-fadeIn">
          A new dimension of crypto anime universes awaits you!
        </p>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    background: 'linear-gradient(180deg, #000428 0%, #004e92 100%)',
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '0 20px',
  },
  content: {
    maxWidth: '800px',
  },
  title: {
    fontSize: '48px',
    marginBottom: '20px',
  },
  subtitle: {
    fontSize: '24px',
  }
};

export default Hero;
