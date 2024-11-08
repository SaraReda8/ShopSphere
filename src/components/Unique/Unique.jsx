import React from 'react';
import styles from './Unique.module.css';
import imageOne from '../../Assets/images/eco2.jpg';
import imageTwo from '../../Assets/images/skin.jpg';

export default function UniqueSection() {
  const captions = [
    {
        title: "Sustainable Shopping",
        content: (
            <>
                <p>
                    Switching to eco-friendly items promotes a healthier living environment. Traditional household items, such as plastic containers or chemical-heavy cleaners, can release harmful toxins into the air and water. Sustainable options—like glass containers or natural cleaning solutions—reduce exposure to these harmful chemicals, making homes safer and healthier for families.
                </p>
                <p>
                    Join the eco-friendly movement with ShopSphere! Our curated selection of products helps you make responsible choices that are gentle on the planet without compromising on quality or style.
                </p>
            </>
        ),
        image: imageOne,
    },
    {
      title: "Beauty Essentials Redefined",
      content: (
          <>
              <p>
                  Elevate your self-care routine with ShopSphere’s premium beauty essentials. Our curated range includes clean, cruelty-free products designed to nourish and enhance your natural beauty. Whether it’s skincare, makeup, or haircare, we bring the best brands to your fingertips.
              </p>
              <p>
                  Feel radiant and confident every day with products that make you glow. Discover beauty redefined with ShopSphere.
              </p>
          </>
      ),
      image: imageTwo, // Replace `imageBeauty` with a beauty-related image
  },
    ];

    return (
        <section className={styles.uniqueContainer}>
            {captions.map((caption, index) => (
                <div key={index} className={`${styles.uniqueSection} ${index % 2 === 1 ? styles.reverse : ''}`}>
                    <div className={styles.imageContainer}>
                        <div className={styles.circle1}></div>
                        <div className={styles.circle2}></div>
                        <img src={caption.image} alt="Unique features" className={styles.uniqueImage} />
                    </div>
                    <div className={styles.textContent}>
                        <h2>{caption.title}</h2>
                        {caption.content}
                    </div>
                </div>
            ))}
        </section>
    );
}
