import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useQuery } from 'react-query';
import { BallTriangle } from 'react-loader-spinner';
import Slider from "react-slick";
import { Helmet } from 'react-helmet';
import { CartContext } from '../../Context/CartContext';
import { WishlistContext } from '../../Context/WishListContext';
import toast from 'react-hot-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './ProductDetails.module.css';

export default function ProductDetails() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    const { id } = useParams();
    const { addToCart } = useContext(CartContext);
    const { addToWishlist } = useContext(WishlistContext);
    const [isInWishlist, setIsInWishlist] = useState(false);

    // Fetch product data using React Query
    const { isError, isLoading, data } = useQuery(['ProductDetails', id], () =>
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    );

    if (isLoading) {
        return (
            <div className='w-100 py-5 d-flex justify-content-center'>
                <BallTriangle height={100} width={100} radius={5} color="main-color" ariaLabel="ball-triangle-loading" visible={true} />
            </div>
        );
    }

    if (isError || !data?.data?.data) {
        return <div>Error loading product details.</div>;
    }

    const product = data.data.data;

    const handleAddToCart = (productId) => {
        addToCart(productId);
        toast.success('Added to cart!');
    };

    const handleAddToWishlist = (productId) => {
        setIsInWishlist(!isInWishlist);
        addToWishlist(productId);
        toast.success(isInWishlist ? 'Removed from wishlist!' : 'Added to wishlist!');
    };

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{product.title}</title>
                <link rel="canonical" href={`http://mysite.com/products/${id}`} />
            </Helmet>
            <div className={`container py-4 ${styles.productDetails}`}>
                <div className="row">
                    <div className="col-md-5">
                        <Slider {...settings}>
                            {product.images.map((img, index) => (
                                <div key={index}>
                                    <img src={img} alt={` ${index}`} className={`${styles.productImage} img-fluid`} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="col-md-7">
                        <h3 className={`${styles.productTitle} mb-3`}>{product.title}</h3>
                        <p className={`${styles.productDescription} mb-3`}>{product.description}</p>
                        <h6 className="text-muted mb-2">{product.category?.name}</h6>
                        <h5 className={`${styles.productPrice} mb-3`}>Price: {product.price} EGP</h5>

                        <div className="mb-3">
                            <span className={`${styles.brand} d-block `}>Brand: {product.brand?.name}</span>
                            <span className={`${styles.stock} d-block ${product.quantity > 0 ? styles.inStock : styles.outOfStock}`}>
                                {product.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                            </span>
                            <span className={`${styles.sold} d-block`}>Total Sold: {product.sold}</span>
                        </div>

                        <div className={`${styles.rating} mb-3`}>
                            <span className="d-flex align-items-center">
                                <i className="fas fa-star text-warning me-1"></i> {product.ratingsAverage} ({product.ratingsQuantity} Reviews)
                            </span>
                        </div>

                        <button className={`${styles.addToCart} btn btn4 w-100`} onClick={() => handleAddToCart(product.id)}>
                            Add to Cart
                        </button>
                        <button className={`${styles.wishlistButton} btn w-100 mt-2`} onClick={() => handleAddToWishlist(product.id)}>
                            <FontAwesomeIcon icon={isInWishlist ? solidHeart : regularHeart} className="text-danger" size="2x" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
