import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import styles from './MainSlider.module.css';
import headerImg2 from '../../Assets/images/elec1.webp';
import headerImg1 from '../../Assets/images/blog-img-2.webp';
import headerImg3 from '../../Assets/images/fashion.webp';
import headerImg5 from '../../Assets/images/delivery.webp'
export default function CarouselSection() {
  return (
    <div className={`${styles.heroSection} `}> 
    {/* delete container .. to delete the spaces */}
      <Carousel>

        <Carousel.Item className={`${styles.carouselItem} vh-100`} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.20), rgba(0, 0, 0, 0.50)), url(${headerImg3})` }}>
          <Carousel.Caption className="h-100 d-flex flex-column align-items-end justify-content-center">
            <h2 className={`${styles.title3} ${styles.slide3Title}`}>Winter Collection</h2>
            <p className={`${styles.slide3Text}`}>Available Now</p>
            <Button as={Link} to="/FeaturedProducts" variant="success" className="AnimatedButton">
              Shop Now
            </Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={`${styles.carouselItem} vh-100`} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.60), rgba(0, 0, 0, 0.30)), url(${headerImg2})` }}>
          <Carousel.Caption className="h-100 d-flex flex-column align-items-end justify-content-end">
            <h2 className={`${styles.title3} ${styles.slide2Title}`}>Upgrade Your Tech</h2>
            <p className={`${styles.slide2Text}`}>Upgrade Your Life</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item
  className={`${styles.carouselItem} vh-100`}
  style={{
    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.40)), url(${headerImg1})`
  }}
>
  <Carousel.Caption className="h-100  p-5">
    <h3 className={`${styles.title3} ${styles.slide3Title}`}>From Farm to Fork</h3>
 
  </Carousel.Caption>
</Carousel.Item>

        <Carousel.Item className={`${styles.carouselItem} vh-100`} style={{ backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.50), rgba(0, 0, 0, 0.40)), url(${headerImg5})` }}>
          <Carousel.Caption className="h-100 d-flex flex-column align-items-start justify-content-center">
            <h3 className={`${styles.title5} ${styles.slide5Title}`}>Fast, Convenient Delivery</h3>
            <p className={`${styles.slide5Text}`}>Ripe, Vibrant Fruits for Your Kitchen</p>
            <p className={`${styles.slide5Text}`}>Fresher Than the Farmer's Market,</p>
            <p className={`${styles.slide5Text}`}>Delivered to Your Door</p>
            
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}
