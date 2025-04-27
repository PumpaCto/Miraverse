import React from 'react';

function Navbar() {
  return (
    <nav className="navbar" style={styles.navbar}>
      <div style={styles.logo}>Miraverse</div>
      <ul style={styles.navLinks}>
        <li><a href="#hero" style={styles.link}>Home</a></li>
        <li><a href="#roadmap" style={styles.link}>Roadmap</a></li>
        <li><a href="#community" style={styles.link}>Community</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    backgroundColor: 'transparent',
    position: 'fixed',
    width: '100%',
    top: 0,
    zIndex: 1000,
    fontFamily: 'Arial, sans-serif',
  },
  logo: {
    color: '#00ffff',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '30px',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Navbar;
