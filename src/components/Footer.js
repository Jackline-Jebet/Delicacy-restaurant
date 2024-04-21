import React from 'react';
import Logo from "../images/logo rm bg.png";
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  FacebookIcon  from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import  WhatsAppIcon  from '@mui/icons-material/WhatsApp';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
    <div className="footer-content">
      <div className='left-footer'>
        <img src={Logo} alt='logo' />
      </div>

      <div className='right-footer'>
         <p className='txt'>Social Media Connect</p>
        <div className='socialMedia'>
        
          <a href='.'>
            <InstagramIcon />
          </a>
          <a a href=".">
          <FacebookIcon />
          </a>
            
          <a href=".">
            <WhatsAppIcon />
          </a>

          <a href=".">
          <FontAwesomeIcon icon={faTiktok} className='faTiktok' />
          </a>

          <a href=".">
            <TwitterIcon />
          </a>
       
        </div>
        </div>
        </div>

        <div className='main'>

          <div className='right-contact'>
            {/* <p>About Us</p> */}
            <p><span>Welcome to Delicacy Restaurant</span></p>
            <p>Delicacy was established with the intention of adding elegance and charm to our delicious Kenyan
               food while incorporating a worldwide theme. Providing more than 15 meat and vegetarian options and
                ever expanding, our goal is to surprise you while you savor our unique African cuisine. </p>
            
          </div>

        <div className='nav-links'>
          <p>SITEMAP</p>
          <Link to="/">Home</ Link>
          <Link to="/about">About Us</ Link>
          <Link to="/contact">Contact Us</Link>    
          <Link to="/gallery">Our Menu</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>

        </div>

        <div className='left-contact'>
            <p>CONTACT US</p>
            <p className='para1'>We are located in Nairobi-Kenya</p>
            <p className='para1'>Need Our Help to Order?</p>
            <p className='para1'>Got Questions ? Call us 24/7</p>
            <p><span>Call Us:</span> +254 011 888 199</p>
            <p className='para1'>or</p>
            <p><span>Email Us:</span> delicacyrestaurant@gmail.com</p>
          </div>
        </div>

        <div className='copyright-txt'>
         <p>&copy; COPYRIGHT 2023 <span>DELICACY RESTAURANT.</span> All rights reserved</p>
             <p><span>Designed By <span>JJR</span> CREATIVES.</span></p> 
       </div>
      </div>
  );
}

export default Footer
