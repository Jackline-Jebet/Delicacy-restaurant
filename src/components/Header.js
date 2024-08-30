import React, { useEffect, useState } from 'react';
import Logo from "../images/lgg2-removebg-preview.png";
import { Link } from 'react-router-dom';
import "../styles/Header.css";
import ReorderIcon from '@mui/icons-material/Reorder';


function Header() {
  const [openLinks, setOpenLinks] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleHeader = () => {
    setOpenLinks(!openLinks);
  }

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

     useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
     <div className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className='leftSide'>
       
        {/* <Link to="/"> */}
        <img src={Logo} alt='logo' onClick={scrollToTop} style={{ cursor: 'pointer' }} />
        {/* </Link> */}

        </div>
        <div className=' id={openLinks ? "open" : "close"}'>
      <header>
        <nav>
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Our Menu</Link></li>
          <li><Link to="/about">About </Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    </div>
    <button onClick={toggleHeader}>
          <ReorderIcon />
        </button>
  </div> 
  )
}

export default Header
