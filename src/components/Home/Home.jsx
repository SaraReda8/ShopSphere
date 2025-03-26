import React from "react";
import FeaturedProducts from "../Product/FeaturedProducts";
import CategorySlider from "./../CategorySlider/CategorySlider";
import MainSlider from "./../MainSlider/MainSlider";
import useNetwork from "./../../Hooks/useNetwork";
import AboutUs from "./../AboutUs/AboutUs";
import FAQ from "./../FAQ/FAQ";
import UniqueSection from "./../Unique/Unique";
import useInView from "./../../Hooks/useInView";
import Cover from "../../Assets/images/home5.webp";
import Style from "./Home.module.css";
import New from '../New/New'
export default function Home() {
  let x = useNetwork();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  return (
    <>
      {x}
      <div className={Style.Cover}>
        <img src={Cover} alt="Homee" loading="lazy" className={Style.Cover} />
      </div>

      <div ref={ref1} className={`${Style.section} ${inView1 ? Style.visible : Style.hidden}`}>
        <UniqueSection />
      </div>

      <div ref={ref2} className={`${Style.section} ${inView2 ? Style.visible : Style.hidden}`}>
        <CategorySlider />
      </div>

        <FeaturedProducts />
        <New />


      <section id="faq" className={inView1 ? Style.visible : Style.hidden}>
        <FAQ />
      </section>

      <MainSlider />

      <section id="about-us" className={inView2 ? Style.visible : Style.hidden}>
        <AboutUs />
      </section>
    </>
  );
}
