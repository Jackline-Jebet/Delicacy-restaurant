import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackImage1 from "../images/img9.jpeg";
import BackImage2 from "../images/img17.jpg";
import BackImage3 from "../images/img35.jpeg";
import BackImage4 from "../images/new13.jpg";
import BackImage5 from "../images/new4.jpg";
import BackImage6 from "../images/new5.jpg";
import BackImage7 from "../images/new16.jpg";
import BackImage8 from "../images/img26.jpeg";
import BackImage9 from "../images/new9.jpg";
import containerImage from "../images/image1 bg.png";
import "../styles/HomeTop.css"

function HomeTop() {
  const images = [BackImage1, BackImage2, BackImage3, BackImage4, BackImage5, BackImage6, BackImage7, BackImage8, BackImage9];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalid = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(intervalid)
  }, [images.length]);

  // const menuItems = [
  //   { image: BackImage3, label: 'Menu Item 1' },
  //   { image: BackImage4, label: 'Menu Item 2' },
  //   { image: BackImage3, label: 'Menu Item 1' },
  //   { image: BackImage4, label: 'Menu Item 2' },
  //   { image: BackImage3, label: 'Menu Item 1' },
  //   { image: BackImage4, label: 'Menu Item 2' },
  //   { image: BackImage3, label: 'Menu Item 1' },
  //   // Add more menu items as needed
  // ];

  return (
    <div className='home-top'>
      <div className='backgroundImg' style={{ backgroundImage: `url(${images[currentImageIndex]})`, transition: 'background-image 2s ease-in-out' }}></div>

      <div className='container'>
      <img className='img' src={containerImage} alt='Delicious Food' />
      <h3> Hello, Welcome. Are You Ready For Our Delicious Taste?</h3>
      <h1><span>D</span>ELICACY <span>R</span>ESTAURANT</h1>
      <Link to="/#">
          <button className='btnHome1'>Welcome Aboard</button>
          <button className='btnHome2'>Discover Menu</button>
      </Link>
      </div>
      
      {/* <div className='top-form'>
        <form>
          <input type='text' placeholder='NAME' />
          <input type='email' placeholder='EMAIL' />
          <input type='text' placeholder='MESSAGE' />
          <button type='submit'>CONTACT US</button>
        </form>
      </div> */}
    </div>
  )
}

export default HomeTop
