// Soon.jsx

import React from 'react';
import ProductsComingSoon from '../../Assets/Files/Soon'; // Ensure this is the correct path to the data file
import styles from './Soon.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Soon = () => (
  <div className={`container ${styles.soonContainer}`}>
    <div className="row">
      {ProductsComingSoon.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <div className={`card ${styles.card}`}>
            <img src={product.img} className={styles.productImg} alt={product.name} loading="lazy" />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <p className={styles.offer}>{product.offer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Soon;
