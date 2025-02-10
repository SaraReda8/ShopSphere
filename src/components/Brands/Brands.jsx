import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styles from './Brands.module.css';

// Function to fetch categories data from the API
const fetchCategories = async () => {
  const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/brands');
  return data;
};

export default function Brands() {
  const { data, error, isLoading, isError } = useQuery('categories', fetchCategories);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-danger">Error: {error.message}</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className='txt fw-bold text-center mb-5 text-main'>Brands</h1>
      <div className="row">
        {data.data.map((category) => (
          <div key={category._id} className="col-md-4 mb-4">
            <div className={`${styles.brandCard} card h-100`}>
              <img
                src={category.image}
                className={styles.cardImgTop}
                alt={category.name}
              />
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{category.name}</h5>
                <p className={styles.cardText}>
                  {category.description || 'Explore our premium brand!'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
