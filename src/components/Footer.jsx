import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© 2025 Miraverse Token | All Rights Reserved</p>
      <div style={styles.links}>
        <a href="https://t.me/pumpatoken" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Telegram
        </a>
        <a href="https://x.com/Pumpa_Cto" target="_blank" rel="noopener noreferrer" style={styles.link}>
          Twitter
        </a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#111',
    color: '#fff',
    padding: '30px 20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  links: {
    marginTop: '15px',
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
  },
  link: {
    color: '#00ffff',
    textDecoration: 'none',
    fontSize: '18px',
  }
};

export default Footer;
