import React, { useState } from 'react';
import '../styles/Home.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import BackImage1 from "../images/img9.jpeg";
import BackImage2 from "../images/new8.jpg";
import BackImage3 from "../images/img27.jpeg";
import BackImage4 from "../images/img6.jpeg";
import BackImage5 from "../images/img32.jpeg";
import BackImage6 from "../images/img14.avif";
import BackImage7 from "../images/img29.jpeg";
import BackImage8 from "../images/new7.jpg";
import BackImage9 from "../images/new8.jpg";
import BackImage10 from "../images/new1.jpg";
import BackImage12 from "../images/new13.jpg";




function Home() {

  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [isMissionVisible, setIsMissionVisible] = useState(false);
  const [isVisionVisible, setIsVisionVisible] = useState(false);

  const handleToggleVisibility = (section) => {
    switch (section) {
      case 'history':
        setIsHistoryVisible(!isHistoryVisible);
        setIsMissionVisible(false);
        setIsVisionVisible(false);
        break;
      case 'mission':
        setIsMissionVisible(!isMissionVisible);
        setIsHistoryVisible(false);
        setIsVisionVisible(false);
        break;
      case 'vision':
        setIsVisionVisible(!isVisionVisible);
        setIsHistoryVisible(false);
        setIsMissionVisible(false);
        break;
      default:
        break;
    }
  };


  return (
    <div className='home'>

    <div className='top-form'>
        <form>
          <input type='text' placeholder='NAME' />
          <input type='email' placeholder='EMAIL' />
          <input type='text' placeholder='MESSAGE' />
          <button type='submit'>CONTACT US</button>
        </form>
      </div>

      <section className='container-two'>
        <div className='services'>
          < MonetizationOnIcon />
          <h3>REASONABLE COSTS</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
            adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
            adipiscing nec, ultricies sed, dolor.</p>
        </div>

     
        <div className='services'>
          < LocalDiningIcon />
          <h3>DELICIOUS CUISINE</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
             adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
             adipiscing nec, ultricies sed, dolor.</p>
        </div>

        
        <div className='services'>
          < CardMembershipIcon />
          <h3>HIGH-END SERVICES</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet,
             adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, 
             adipiscing nec, ultricies sed, dolor.</p>
        </div>
      </section>

      <section>
        <div className='container3'>
          <div className='left-side'>
            <h1><span>Join Us</span> for a Relaxing Meal.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. 
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. consectetur adipiscing elit. 
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit.
                Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>

          </div>

          <div className='right-side'>
          <img className='img2' src={BackImage12} alt='Delicious Food' />
          <img className='img' src={BackImage3} alt='Delicious Food' />
          </div>
        </div>
      </section>

      <section className='container-4'>
        <div className='sample-menu'>
          <h1>OUR SAMPLE MENU</h1>
          <div className='icon-container'>
            < LocalDiningIcon />
          </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. 
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. consectetur adipiscing elit. 
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            </p>
            </div>
        <div className='menu-container'>

        <div className='menu-item'>
          <img className='img' src={BackImage1} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name1</h3>
            <p className='price'>Ksh 350</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage2} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name2</h3>
            <p className='price'>Ksh 450</p>
           </div>
          </div>
          <div className='menu-item'>
          <img className='img' src={BackImage10} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name3</h3>
            <p className='price'>Ksh 550</p>
           </div>
          </div>
          <div className='menu-item'>
          <img className='img' src={BackImage4} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name4</h3>
            <p className='price'>Ksh 650</p>
           </div>
          </div>
          <div className='menu-item'>
          <img className='img' src={BackImage5} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name5</h3>
            <p className='price'>Ksh 250</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage6} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name6</h3>
            <p className='price'>Ksh 150</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage7} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name7</h3>
            <p className='price'>Ksh 750</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage8} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name8</h3>
            <p className='price'>Ksh 350</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage9} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name9</h3>
            <p className='price'>Ksh 950</p>
           </div>
          </div>

        </div>
        
        <div className='menu-btn'>
        <button>DISCOVER SHOP</button>
        </div>
      </section>

      <section className='container5'>

      <div className='left-container'>
          <img src={BackImage10} alt='delicious-food' />
      </div>

        <div className='right-container'>
        <div className={`history-container ${isHistoryVisible ? 'visible' : ''}`}>
        <h1 onClick={() => handleToggleVisibility('history')}>DELICACY RESTAURANT HISTORY <span className='span1'>++</span></h1>
          {isHistoryVisible && (
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. 
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. consectetur adipiscing elit. 
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.
               </p>
               )}
        </div>

        <div className={`history-container ${isMissionVisible ? 'visible' : ''}`}>
        <h1 onClick={() => handleToggleVisibility('mission')}>OUR MISSION <span className='span2'>++</span></h1>
        {isMissionVisible && (
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. 
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. consectetur adipiscing elit. 
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.
               </p>
               )}
        </div>

        <div className={`history-container ${isVisionVisible ? 'visible' : ''}`}>
        <h1 onClick={() => handleToggleVisibility('vision')}>DELICACY VISION <span className='span3'>++</span></h1>
        {isVisionVisible && (
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor,
               dignissim sit amet, adipiscing nec, ultricies sed, dolor.consectetur adipiscing elit. Sed non risus. 
               Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. consectetur adipiscing elit. 
               Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec.
               </p>
               )}
         </div>
        </div>

       
      </section>

    </div>
  )
}

export default Home;
