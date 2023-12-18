import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BackImage1 from "../images/img9.jpeg";
import BackImage2 from "../images/img17.jpg";
import BackImage3 from "../images/img35.jpeg";
import BackImage4 from "../images/img6.jpeg";
import BackImage5 from "../images/img1.png";
import BackImage6 from "../images/img18.jpeg";
import BackImage7 from "../images/img20.png";
import BackImage8 from "../images/img26.jpeg";
import BackImage9 from "../images/img40.avif";
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
      <h1>DELICACY RESTAURANT</h1>
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
