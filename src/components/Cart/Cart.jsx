import React, { useEffect, useState, useContext } from 'react';
import { CartContext } from '../../Context/CartContext';
import { FaTrashAlt, FaShoppingCart,FaCashRegister,  FaTrash } from 'react-icons/fa';
import { BallTriangle } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Field, Form } from 'formik';
// import axios from 'axios';

export default function Cart() {
    const { getLoggedUserCart, removeCartItem, updateProductQuantity, clearCartItems } = useContext(CartContext);
    const [cartDetails, setCartDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [discount, setDiscount] = useState(0);
    const navigate = useNavigate();

    const promoCode = 'ShopSphere20'; // Promo code for 20% off

    async function updateQuantity(id, newQuantity) {
        if (newQuantity < 1) return;
        setLoading(true);
        const response = await updateProductQuantity(id, newQuantity);
        if (response?.data) {
            setCartDetails(response.data);
        }
        setLoading(false);
    }

    async function clearCart() {
        setLoading(true);
        await clearCartItems();
        setCartDetails({ numOfCartItems: 0, data: { products: [], totalCartPrice: 0 } });
        setLoading(false);
    }

    async function removeItem(id) {
        setLoading(true);
        const response = await removeCartItem(id);
        if (response?.data) {
            setCartDetails(response.data);
        }
        setLoading(false);
    }

    async function getCart() {
        setLoading(true);
        const response = await getLoggedUserCart();
        if (response?.data) {
            setCartDetails(response.data);
        }
        setLoading(false);
    }

    useEffect(() => {
        getCart();
    }, []);

    // Apply promo code discount
    const applyPromoCode = (values) => {
        if (values.promoCode === promoCode) {
            setDiscount(0.20); // Apply 20% discount
        } else {
            setDiscount(0); // Reset discount if code is incorrect
        }
    };

    const totalPrice = cartDetails ? cartDetails.data.totalCartPrice * (1 - discount) : 0; // Calculate total with discount

    return (
        <>
            {loading ? (
                <section id='loading' className='w-100 py-5 d-flex justify-content-center'>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color='green'
                        ariaLabel="ball-triangle-loading"
                        visible={true}
                    />
                </section>
            ) : (
                <div className='container my-5'>
                    <div className='row'>
                        {/* Left Side: Shopping Cart */}
                        <div className='col-md-8'>
                            <div className='card shadow p-4 mb-4'>
                                <h2 className='text-center text-dark title mb-4 special'>
                                    <FaShoppingCart /> Shopping Cart
                                </h2>
                                <div className='cart-items overflow-auto' style={{ maxHeight: '60vh' }}>
                                    <div className='row'>
                                        {cartDetails.data.products.map((product) => (
                                            <div key={product.product.id} className='col-md-12'>
                                                <div className='card mb-3'>
                                                    <div className='row g-0 align-items-center'>
                                                        <div className='col-md-3'>
                                                            <img src={product.product.imageCover} className='img-fluid rounded-start' alt={product.product.title} />
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='card-body'>
                                                                <h5 className='card-title'>{product.product.title}</h5>
                                                                <p className='card-text text-muted'>Price: {product.price} EGP</p>
                                                                <div className='btn-group' role='group'>
                                                                    <button
                                                                        onClick={() => updateQuantity(product.product.id, product.count - 1)}
                                                                        className='btn btn-outline-secondary'
                                                                        disabled={product.count <= 1}
                                                                    >-</button>
                                                                    <span className='mx-3'>{product.count}</span>
                                                                    <button
                                                                        onClick={() => updateQuantity(product.product.id, product.count + 1)}
                                                                        className='btn btn-outline-secondary'
                                                                    >+</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-3 text-end p-3'>
                                                            <button className='btn btn4' onClick={() => removeItem(product.product.id)}>
                                                                <FaTrashAlt />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Summary */}
                        <div className='col-md-4'>
                            <div className='card shadow p-4'>
                                <h3 className='text-dark text-center txt'>Order Summary</h3>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <p>Items: {cartDetails.numOfCartItems}</p>
                                    <p>Subtotal: {cartDetails.data.totalCartPrice.toFixed(2)} EGP</p>
                                </div>

                                {/* Promo Code Section */}
                                <Formik
                                    initialValues={{ promoCode: '' }}
                                    onSubmit={applyPromoCode}
                                >
                                    <Form className='mt-3'>
                                        <div className='input-group'>
                                            <Field name="promoCode" className='form-control' placeholder='Enter Promo Code' />
                                            <button type='submit' className='btn btn4' disabled={discount > 0}>
                                                Apply
                                            </button>
                                        </div>
                                    </Form>
                                </Formik>

                                {discount > 0 && <p className='text-success mt-2'>Promo code applied! You saved 20%.</p>}

                                <hr />
                                <h5 className='d-flex justify-content-between'>
                                    <span>Total:</span>
                                    <span>{totalPrice.toFixed(2)} EGP</span>
                                </h5>

                                {/* Action Buttons */}
                                <div className='d-grid gap-2 mt-4'>
      <button onClick={() => navigate('/')} className='btn btn4'>
        <FaShoppingCart className='me-2' /> Continue Shopping
      </button>
      <Link to='/CheckOut' className='btn btn4'>
        <FaCashRegister className='me-2' /> Checkout
      </Link>
      <button onClick={clearCart} className='btn btn4'>
        <FaTrash className='me-2' /> Clear Cart
      </button>
    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
