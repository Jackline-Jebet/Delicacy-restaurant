import React from 'react';
import '../styles/Home.css';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import BackImage3 from "../images/img222.png";
import BackImage2 from "../images/img6.jpeg";




function Home() {

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
          <img className='img2' src={BackImage2} alt='Delicious Food' />
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
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name1</h3>
            <p className='price'>Ksh 350</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name2</h3>
            <p className='price'>Ksh 450</p>
           </div>
          </div>
          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name3</h3>
            <p className='price'>Ksh 550</p>
           </div>
          </div>
          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name4</h3>
            <p className='price'>Ksh 650</p>
           </div>
          </div>
          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name5</h3>
            <p className='price'>Ksh 250</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name6</h3>
            <p className='price'>Ksh 150</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name7</h3>
            <p className='price'>Ksh 750</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
          <div className='menu-details'>
            <h3>Item Name8</h3>
            <p className='price'>Ksh 350</p>
           </div>
          </div>

          <div className='menu-item'>
          <img className='img' src={BackImage3} alt='Delicious Food' />
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

      

    </div>
  )
}

export default Home;
