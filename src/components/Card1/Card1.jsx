import React from 'react';
import Style from './Card1.module.css';
import cardimg from '../../Assets/images/card.webp';
import { Link } from 'react-router-dom';

export default function Card1() {
  
  return (
    <div className={Style.cardContainer}>
      <div className={`card ${Style.cardOverlay}`}>
        <img
          src={cardimg}
          alt="Card image cap"
          className={`card-img ${Style.cardImg}`}
        />
        <div className={`card-img-overlay ${Style.cardContent}`}>
          <h5 className={Style.cardTitle}>Exclusive Offer</h5>
          <p className={Style.cardText}>Get the best deals on our latest products.</p>
          <Link to="/FeaturedProducts">
  <button className={Style.shopButton}>Shop Now</button>
</Link>
        </div>
      </div>
    </div>
  );
}
