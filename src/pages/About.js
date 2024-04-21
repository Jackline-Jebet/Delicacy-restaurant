import React from 'react';
import BackImage3 from "../images/new21.jpg";
// import containerImage from "../images/BG22-removebg-preview (1).png";
import LooksIcon from '@mui/icons-material/Looks';
import BackImage12 from "../images/new13.jpg";
import BackImage13 from "../images/new14.jpg";
import BackImage14 from "../images/Screenshot from 2023-12-24 15-21-23.png";
import BackImage15 from "../images/p2.jpg";
import BackImage16 from "../images/p3.jpg";
import BackImage17 from "../images/Screenshot from 2023-12-24 15-14-21.png";
import BackImage18 from "../images/Screenshot from 2023-12-24 15-11-23.png";
import BackImage19 from "../images/Screenshot from 2023-12-24 15-09-06.png";
import "../styles/About.css";

function About() {
  return (
    <div className='about'>

      <div className='backgroundImg' style={{backgroundImage: `url(${BackImage3})`}}>
      </div>

      <div className='container'>
        < LooksIcon />
        {/* <img className='image' src={containerImage} alt='delicious food' /> */}
        <h1><span>A</span>BOUT <span>D</span>ELICACY</h1>
        <div className='feature-title'>
      <p><span>We are simple yet magnificent</span></p>
      </div>
      </div>
      
      <div className='about-container'>
      <h2><span>Welcome</span> to Delicacy Restaurant.</h2>
      <p>About a year ago since 2019, Delicacy was founded on the desire 
        to breathe class and bring charm to our lovely Kenyan cuisine 
        with a touch of global theme.  With a variety of over 15 beef and 
        vegetarian products and growing, our mission is to delight you as you 
        experience our distinctive African dishes.
      </p>
      </div>

      <section>
        <div className='container8'>
          <div className='left-side'>
            <h1><span>Know</span> About Delicacy </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. 
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. consectetur adipiscing elit. 
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit.
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>

          </div>

          <div className='right-side'>
          <img className='img2' src={BackImage13} alt='Delicious Food' />
          {/* <img className='img' src={BackImage3} alt='Delicious Food' /> */}
          </div>

         
        </div>
      </section>

      <section>
        <div className='container9'>

        <div className='right-side'>
          <img className='img1' src={BackImage12} alt='Delicious Food' />
          {/* <img className='img' src={BackImage3} alt='Delicious Food' /> */}
          </div>
          
          <div className='lft-side'>
            <h1><span>Delicacy</span> History</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. 
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. consectetur adipiscing elit. 
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit.
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
          </div>          
        </div>
      </section>

      <section className='container4'>
        <h1>OUR TEAM</h1>

        <div className='team'>

        <div className='team-container'>
      <div className='team-item'>
          <img className='img' src={BackImage14} alt='Delicious Food' />
          <div className='team-details'>
            <h3>CHARITY MEI</h3>
            <p className='label'>General Manager</p>
           </div>
          </div>

          <div className='team-item'>
          <img className='img' src={BackImage15} alt='Delicious Food' />
          <div className='team-details'>
            <h3>DAN MBOYA</h3>
            <p className='label'>Culinary Director</p>
           </div>
          </div>

          <div className='team-item'>
          <img className='img' src={BackImage16} alt='Delicious Food' />
          <div className='team-details'>
            <h3>MARK BOLKY</h3>
            <p className='label'>Pastry</p>
           </div>
          </div>

          <div className='team-item'>
          <img className='img' src={BackImage17} alt='Delicious Food' />
          <div className='team-details'>
            <h3>MARY GEE</h3>
            <p className='label'>Chef</p>
           </div>
          </div>

          <div className='team-item'>
          <img className='img' src={BackImage18} alt='Delicious Food' />
          <div className='team-details'>
            <h3>GEOFREY RAYS</h3>
            <p className='label'>Assistant Manager</p>
           </div>
          </div>

          <div className='team-item'>
          <img className='img' src={BackImage19} alt='Delicious Food' />
          <div className='team-details'>
            <h3>SHIRLEY RYAN</h3>
            <p className='label'>Accountant</p>
           </div>
          </div>
          </div>
          </div>
      </section>

      
    </div>
  )
}

export default About
