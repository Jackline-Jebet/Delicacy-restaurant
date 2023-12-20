import React, { useState, useEffect } from 'react';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import IconButton from '@mui/material/IconButton';
import '../styles/ScrollTopArrow.css';

const ScrollTopArrow = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className='scroll-btn'>
    <>
      {isVisible && (
        <IconButton className="scroll-top-btn" onClick={scrollToTop} aria-label="scroll top">
          <KeyboardArrowUpIcon />
        </IconButton>
      )}
    </>
    </div>
  );
};

export default ScrollTopArrow;
