import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { FaUser, FaMapMarkerAlt, FaPhone, FaCity } from 'react-icons/fa';
import { CartContext } from '../../Context/CartContext';
import styles from './address.module.css';

export default function Address() {
    let { onlinePayment } = useContext(CartContext);

    async function handleAddressSubmit(values) {
        try {
            let response = await onlinePayment('66da7bbcd6a95f154e1a925e', 'http://localhost:3001', values);
            const paymentUrl = response?.data?.session?.url;
            if (paymentUrl) {
                window.location.href = paymentUrl;
            } else {
                console.error('No payment URL returned:', response);
            }
        } catch (error) {
            console.error('Payment failed:', error);
        }
    }

    let formik = useFormik({
        initialValues: {
            name: '',
            details: '',
            phone: '',
            city: ''
        },
        onSubmit: handleAddressSubmit
    });

    return (
        <div className={styles.addressContainer}>
            <form onSubmit={formik.handleSubmit} className={styles.addressForm}>
                <h3 className='title text-center p-2'>Please provide your information to complete the purchase</h3>

                <div className={styles.inputGroup}>
                    <FaUser className={styles.icon} />
                    <label htmlFor="name">Name:</label>
                </div>
                <div className={styles.inputWrapper}>
                    <input 
                        className={styles.formControl} 
                        type="text" 
                        id="name" 
                        name="name" 
                        onChange={formik.handleChange} 
                        value={formik.values.name} 
                        required 
                    />
                </div>

                <div className={styles.inputGroup}>
                    <FaMapMarkerAlt className={styles.icon} />
                    <label htmlFor="details">Address:</label>
                </div>
                <div className={styles.inputWrapper}>
                    <input 
                        className={styles.formControl} 
                        type="text" 
                        id="details" 
                        name="details" 
                        onChange={formik.handleChange} 
                        value={formik.values.details} 
                        required 
                    />
                </div>

         

                <div className={styles.inputGroup}>
                    <FaCity className={styles.icon} />
                    <label htmlFor="city">City:</label>
                </div>
                <div className={styles.inputWrapper}>
                    <input 
                        className={styles.formControl} 
                        type="text" 
                        id="city" 
                        name="city" 
                        onChange={formik.handleChange} 
                        value={formik.values.city} 
                        required 
                    />
                </div>
                <div className={styles.inputGroup}>
                    <FaPhone className={styles.icon} />
                    <label htmlFor="phone">Phone:</label>
                </div>
                <div className={styles.inputWrapper}>
                    <input 
                        className={styles.formControl} 
                        type="text" 
                        id="phone" 
                        name="phone" 
                        onChange={formik.handleChange} 
                        value={formik.values.phone} 
                        required 
                    />
                </div>

                <button type="submit" className='btn AnimatedButton w-100'>
                    Pay Now
                </button>
            </form>
        </div>
    );
}
