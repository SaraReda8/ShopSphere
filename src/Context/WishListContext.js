import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
    const [wishlistItems, setWishlistItems] = useState([]);
    
    // Retrieve the user token dynamically
    const userToken = localStorage.getItem('userToken'); // Adjust as needed

    const headers = {
        token: userToken
    };

    useEffect(() => {
        if (userToken) {
            fetchWishlist();
        }
    }, [userToken]);

    const fetchWishlist = async () => {
        try {
            const response = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist', {
                headers,
            });
            setWishlistItems(response.data.data);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
        }
    };

    const addToWishlist = async (productId) => {
        try {
            const response = await axios.post('https://ecommerce.routemisr.com/api/v1/wishlist', {
                productId,
            }, {
                headers,
            });
            if (response.data.status === 'success') {
                setWishlistItems(prev => [...prev, response.data.data]);
            }
        } catch (error) {
            console.error('Error adding to wishlist:', error);
        }
    };

    const removeFromWishlist = async (id) => {
        try {
            await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
                headers,
            });
            setWishlistItems(prev => prev.filter(item => item.id !== id));
        } catch (error) {
            console.error('Error removing from wishlist:', error);
        }
    };

    return (
        <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist }}>
            {children}
        </WishlistContext.Provider>
    );
};