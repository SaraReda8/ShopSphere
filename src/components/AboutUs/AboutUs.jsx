import React from 'react';
import Style from './AboutUs.module.css';
import WhyShopSphere from '../whyshopsphere/whyshopsphere';
import about from '../../Assets/images/team3.jpg'; // Import the image here

export default function AboutUs() {
  return (
    <div className={`container ${Style.container}`}>
      {/* About Section */}
      <div className={`row ${Style.borderSection}`}>
        <div className="col-md-6 d-flex justify-content-center">
          <img src={about} alt="About" loading="lazy" className={Style.aboutImg} />
        </div>
        <div className="col-md-6">
          <h2 className='txt text-center mb-3'>About ShopSphere</h2>
          <p className={Style.text}>
            ShopSphere, founded in 2019 by five childhood friends, aims to create a joyful shopping experience through customer satisfaction, quality products, innovation, sustainability, and community engagement. We offer personalized shopping, live support, exclusive promotions, a user-friendly interface, and fast delivery to ensure every customer enjoys their time with us.
          </p>
          <p className={Style.text}>
    At ShopSphere, we believe in building lasting relationships with our customers. Our team is dedicated to understanding your needs and preferences, allowing us to tailor our services and products just for you. With our commitment to excellence, we strive to not only meet but exceed your expectations, making every shopping experience memorable.
</p>

        </div>
      </div>
      <WhyShopSphere />
    </div>
  );
}
