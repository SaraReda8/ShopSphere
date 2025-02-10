import React from 'react';
import styles from './AboutUs.module.css';
import AboutImg from '../../Assets/images/team3.webp'

import Team from './../Team/Team';
export default function AboutUs() {
  return (
    <div className={styles.aboutUsContainer}>
      {/* About ShopSphere */}
      <section className={styles.section1}>
  <div className={styles.card}>
    <img src={AboutImg} alt="About ShopSphere" className={styles.image} />
    <div>
      <h2 className={styles.heading}>About ShopSphere</h2>
      <p className={styles.text}>
        ShopSphere is your go-to platform for all things you need at home. Founded in 2020 by six friends, 
        we envisioned a marketplace where quality and convenience meet. Today, we bring you a curated selection 
        of clothing, food, electronic devices, and more, all at your fingertips.
      </p>
    </div>
  </div>
</section>


      {/* Our Core Values */}
      <section className={styles.section}>
  <h2 className={styles.heading}>Our Core Values</h2>
  <div className={styles.cardContainer}>
    {[
      { icon: "fa-heart", title: "Customer Love", text: "We put our customers at the center of everything we do." },
      { icon: "fa-globe", title: "Sustainability", text: "We strive to protect the planet with eco-friendly initiatives." },
      { icon: "fa-handshake", title: "Trust", text: "Transparency and honesty guide every transaction." },
      { icon: "fa-rocket", title: "Innovation", text: "Constantly evolving to enhance your shopping experience." },
      { icon: "fa-users", title: "Community", text: "Building a community that shares and grows together." },
      { icon: "fa-smile", title: "Happiness", text: "Creating moments of joy through a seamless shopping experience." },
    ].map((value, index) => (
      <div key={index} className={styles.card}>
        <i className={`fas ${value.icon} ${styles.icon}`}></i>
        <h3 className={styles.cardHeading}>{value.title}</h3>
        <p className={styles.cardText}>{value.text}</p>
      </div>
    ))}
  </div>
</section>


      <Team/>

    </div>
  );
}
