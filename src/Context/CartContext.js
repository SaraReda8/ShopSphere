import axios from "axios";
import { createContext, useEffect, useState } from "react";

export let CartContext = createContext();
let userToken = localStorage.getItem('userToken');
let headers = {
    token: userToken
};

// Add product to the cart
function addToCart(id) {
    return axios.post('https://ecommerce.routemisr.com/api/v1/cart', { productId: id }, { headers })
        .then(response => response)
        .catch(error => error);
}

// Get logged user's cart
function getLoggedUserCart() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/cart', { headers })
        .then(response => response)
        .catch(error => error);
}

// Remove a specific item from the cart
function removeCartItem(productId) {
    return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { headers })
        .then(response => response)
        .catch(error => error);
}

// Update product quantity in the cart (using PUT instead of POST)
function updateProductQuantity(productId, count) {
    return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${productId}`, { count }, { headers })
        .then(response => response)
        .catch(error => {
            console.error("Error updating product quantity:", error);
            return error;
        });
}

// Clear all cart items
function clearCartItems() {
    return axios.delete('https://ecommerce.routemisr.com/api/v1/cart', { headers })
        .then(response => response)
        .catch(error => console.error(error));
}

// Online Payment function to create a checkout session
function onlinePayment(cartId, url, values) {
    return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${url}`, 
        {
        shippingAddress: values
    }, 
    {  headers })
    .then(response => response)
    .catch(error => {
        console.error('Payment error:', error);
        return error;
    });
}

export default function CartContextProvider(props) {
    const [cartId, setCartId] = useState(null);
    const [cartItemsCount, setCartItemsCount] = useState(0); // Track cart item count

    async function getCart() {
        let { data } = await getLoggedUserCart();
        setCartId(data?.data.id);
        setCartItemsCount(data?.data.products.length || 0); // Update the count of items in the cart
    }

    useEffect(() => {
        getCart();
    }, []); // Fetch cart data when the component mounts

    return (
        <CartContext.Provider value={{ 
            cartId, 
            cartItemsCount, 
            addToCart, 
            getLoggedUserCart, 
            removeCartItem, 
            clearCartItems, 
            updateProductQuantity,
            onlinePayment 
        }}>
            {props.children}
        </CartContext.Provider>
    );
}


// function CashOnDelivery(cartId, values) {
//     return axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, 
//         { shippingAddress: values }, 
//         { headers })
//         .then(response => response)
//         .catch(error => error);
// }

