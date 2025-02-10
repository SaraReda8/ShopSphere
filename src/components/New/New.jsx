import React from 'react';
import { FaSnowflake, FaShoppingBag } from 'react-icons/fa';
import styles from './New.module.css';
import imageSrc2 from '../../Assets/images/greencoat.jpg'; // Replace with actual path
import comingsoon from '../../Assets/images/comingsoon3.jpg'
import Soon from './../Soon/Soon';

export default function New() {
    return <>

      
        <section className={styles.uniqueSection2}>
            <div className={styles.textContent2}>
                <h2><span role="img" aria-label="celebration">🎉</span> Winter Collection Just Arrived! <FaSnowflake className={styles.icon} /></h2>
                <p>Stay warm in style with our latest winter essentials – now available with <strong>50% OFF!</strong></p>
                <p>From cozy sweaters to sleek jackets, we’ve got everything to keep you fashionable and snug this season.</p>
                <div className={styles.iconText}>
                    <h3><strong>Fast, FREE Delivery</strong> on all orders!</h3>
                </div>
                <p>Don’t miss out – shop now and bundle up with savings! <span role="img" aria-label="snowman">⛄</span><span role="img" aria-label="coat">🧥</span></p>
                <p><strong>Limited Time Offer!</strong></p>
                <a href="/shop" className='btn btn4'><FaShoppingBag className='text-white me-2' /> Shop the Winter Collection Now</a>
            </div>
            <div className={styles.imageContainer2}>
                <div className={styles.circleTopRight}></div>
                <img src={imageSrc2} alt="Unique features" className={styles.uniqueImage2} />
            </div>
        </section>
        
        <div className={styles.comingsoonSection}>
      <div className={styles.overlay}>
        <img src={comingsoon} alt="Coming Soon" className={styles.comingsoonImage} />
        <div className={styles.textOverlay}>
          <h2 className='special text-dark '>comingsoon</h2>
          <p className='txt'>Stay Tuned! Fresh Finds, Exclusive Offers, and Must-Have Deals Are on Their Way!</p>
        </div>
      </div>
    </div>
    <Soon/>

         </>
     
   
}
