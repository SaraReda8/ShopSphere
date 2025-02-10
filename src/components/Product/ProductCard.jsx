import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import styles from './ProductCard.module.css'; // Using CSS module

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [wishlist, setWishlist] = useState([]);

  async function addProductToCart(id) {
    try {
      const response = await addToCart(id);
      if (response?.data?.status === 'success') {
        toast.success('Product successfully added to cart!', {
          duration: 4000,
          position: 'top-center',
        });
      } else {
        toast.error('Error adding product to cart');
      }
    } catch (error) {
      console.error('Error adding product to cart:', error);
      toast.error('Something went wrong, please try again.');
    }
  }

  async function handleAddToWishlist(productId) {
    try {
      setWishlist((prev) => [...prev, productId]);
      toast.success('Product added to wishlist!', {
        duration: 4000,
        position: 'top-center',
      });
    } catch (error) {
      console.error('Error adding product to wishlist:', error);
      toast.error('Error adding product to wishlist');
    }
  }

  return (
    <div key={product.id} className={`col-md-3 mb-4  ${styles.productCard}`}>
      <div className={`card ${styles.product} position-relative`}>
        <Link to={`/ProductDetails/${product.id}`} className="text-decoration-none text-dark">
          <img className="card-img-top" src={product.imageCover} alt={product.title} />
          <div className="card-body text-center bg-white">
            <span className="text-main font-sm fw-bolder">{product.category.name}</span>
            <h3 className="h6 mt-2">{product.title.split(" ").slice(0, 2).join(' ')}</h3>
            <div className="d-flex justify-content-between align-items-center mt-2 mb-3">
              <span className="fw-bold">{product.price} EGP</span>
              <button 
                className={`btn ${styles.wishlistBtn} m-2`}
                onClick={() => handleAddToWishlist(product.id)} 
              >
                <FontAwesomeIcon 
                  icon={wishlist.includes(product.id) ? solidHeart : regularHeart}
                  className="text-danger mt-5" 
                  size="2x" 
                />
              </button>
              <span className="d-flex align-items-center">
                <FontAwesomeIcon icon={faStar} className="text-warning me-1" />
                {product.ratingsAverage}
              </span>
            </div>
          </div>
        </Link>
        <div className={styles.addToCartContainer}>
          <button
            className={`btn btn-sm text-white bg-main w-100 ${styles.addToCartBtn}`}
            onClick={() => addProductToCart(product.id)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
