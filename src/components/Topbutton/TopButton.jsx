import React, { useState, useEffect } from 'react';
import './TopButton.css';

function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`scroll-top-btn ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
      ▲
    </button>
  );
}

export default ScrollTopButton;
