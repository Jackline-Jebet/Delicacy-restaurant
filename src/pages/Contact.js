import React from 'react';
import  InstagramIcon  from '@mui/icons-material/Instagram';
import  FacebookIcon  from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTiktok } from '@fortawesome/free-brands-svg-icons';
// import { Link } from 'react-router-dom';
import  WhatsAppIcon  from '@mui/icons-material/WhatsApp';
// import BackImage1 from "../images/img9.jpeg";
// import BackImage2 from "../images/img17.jpg";
import BackImage3 from "../images/new5.jpg";
// import BackImage4 from "../images/img6.jpeg";
// import BackImage5 from "../images/img1.png";
// import BackImage6 from "../images/img18.jpeg";
// import BackImage7 from "../images/img20.png";
// import BackImage8 from "../images/img26.jpeg";
// import BackImage9 from "../images/img40.avif";
import containerImage from "../images/image1 bg.png";
import '../styles/Contact.css';

function Contact() {

  // const images = [BackImage1, BackImage2, BackImage3, BackImage4, BackImage5, BackImage6, BackImage7, BackImage8, BackImage9];
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const intervalid = setInterval(() => {
  //     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  //   }, 3000);

  //   return () => clearInterval(intervalid)
  // }, [images.length]);

  return (
    <div className='contact'>
    <div className='backgroundImg' style={{ backgroundImage: `url(${BackImage3})` }}></div>

     <div className='container'>
     <img className='img' src={containerImage} alt='Delicious Food' />
     <h1>CONTACT</h1>
     <div className='featured-title'>
      <p>We are simple yet magnificent</p>
      </div>
    </div>

      <div className='map'>
        <iframe 
        title='map'
        width='100%'
        height='450'
        frameBorder='0'
        scrolling='no'
        marginHeight='0'
        marginWidth='0'
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32390057037!2d36.68258076935997!3d-1.3032035600112055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1702977565819!5m2!1sen!2ske"
        // <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.32390057037!2d36.68258076935997!3d-1.3032035600112055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1172d84d49a7%3A0xf7cf0254b297924c!2sNairobi!5e0!3m2!1sen!2ske!4v1702977565819!5m2!1sen!2ske" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        ></iframe>

      </div>

    <div className='contact-info'>
      <div className='left-info'>
        <h2>CONTACT FORM</h2>
        <span className='line'></span>

        <p>We are Active 24/7 of the Working Days!!!</p>
        <form>
          <div className='form-group'>
          <input type='text' id='name' name='name' placeholder='NAME'/>
          </div>
          <input type='email' id='email' name='email' placeholder='EMAIL' />

          <input type='subject' id='subject' placeholder='SUBJECT' />

          <textarea id='message' name='message' placeholder='MESSAGE' ></textarea>

          <button type='submit'>Submit</button>
        </form>

      </div>
      <div className='right-container'>
      <div className='right-info'>
          <h2>PHONE</h2>
          <span className='line'></span>
          <p>Phone: +254 011 888 199</p>

          <h2 className='address'>ADDRESS</h2>
          <span className='line'></span>
          <p>Address: 123 Main St, Nairobi, Kenya</p>
          

          <h2 className='email'>EMAIL</h2>
          <span className='line'></span>
          <p>Email: delicacyrestaurant@gmail.com</p>

     
          </div>

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
    </div>
  )
}

export default Contact
