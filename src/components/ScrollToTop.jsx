import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transition transform hover:scale-110 ${
        visible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.4s, transform 0.3s' }}
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
