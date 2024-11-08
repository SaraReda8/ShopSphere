import React, { useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { WishlistContext } from '../../Context/WishListContext';

export default function Wishlist() {
    const { wishlistItems, removeFromWishlist } = useContext(WishlistContext);
    const { addToCart } = useContext(CartContext);

    const handleAddToCart = (item) => {
        addToCart(item);
        removeFromWishlist(item.id); 
    };

    return (
        <div className="container py-4">
            <h2 className="text-center mb-4"> <strong>Your Wishlist</strong></h2>
            <div className="row">
                {wishlistItems.length === 0 ? (
                    <div className="col-12 text-center">
                        <p>Your wishlist is empty.</p>
                    </div>
                ) : (
                    wishlistItems.map(item => (
                        <div key={item.id} className="col-md-4 mb-4">
                            <div className="card shadow-sm h-100">
                                <img src={item.imageCover} alt={item.title} className="card-img-top" />
                                <div className="card-body d-flex flex-column">
                                    <h5 className="card-title"><strong>{item.title}</strong></h5>
                                    <p className="card-text">{item.price} EGP</p>
                                    <div className="mt-auto">
                                        <Link to={`/ProductDetails/${item.id}`} className="btn btn-primary m-2">View Product</Link>
                                        <button onClick={() => handleAddToCart(item)} className="btn btn-success m-2">Add to Cart</button>
                                        <button onClick={() => removeFromWishlist(item.id)} className="btn btn-danger">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}