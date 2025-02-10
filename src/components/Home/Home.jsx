import React from 'react';
import FeaturedProducts from '../Product/FeaturedProducts';
import CategorySlider from './../CategorySlider/CategorySlider';
import MainSlider from './../MainSlider/MainSlider';
import useNetwork from './../../Hooks/useNetwork';
import Card1 from '../Card1/Card1';
import AboutUs from './../AboutUs/AboutUs';
import FAQ from './../FAQ/FAQ';
import UniqueSection from './../Unique/Unique';
import Cover from '../../Assets/images/home5.png';
import Style from './Home.module.css';

export default function Home() {
  let x = useNetwork();

  return (
    <>
      {x}
      <div className={Style.Cover}>
        <img src={Cover} alt="HomeImg" loading="lazy" className={Style.Cover} />
      </div>

      {/* First UniqueSection with default layout */}
      <UniqueSection />

  

      <CategorySlider />
      <FeaturedProducts />

      <section id="faq">
        <FAQ />
      </section>
      
<MainSlider/>
      <section id="about-us">
        <AboutUs />
      </section>
    </>
  );
}
