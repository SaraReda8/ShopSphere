import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import { FaUser, FaMapMarkerAlt, FaPhone, FaCity } from 'react-icons/fa';
import { CartContext } from '../../Context/CartContext';
import styles from './CashOnDelivery.module.css';

export default function CashOnDelivery() {
    const [isSubmitted, setIsSubmitted] = useState(false); // Track if the form is submitted
    let { cashOnDelivery } = useContext(CartContext);  // Updated to CashOnDelivery

    async function handleAddressSubmit(values) {
        try {
            await cashOnDelivery(values); // Call your CashOnDelivery function
            setIsSubmitted(true); // Show confirmation message
        } catch (error) {
            console.error('Cash on Delivery process failed:', error);
        }
    }

    let formik = useFormik({
        initialValues: {
            name: '',
            details: '',
            phone: '',
            city: ''
        },
        onSubmit: (values, { setSubmitting }) => {
            handleAddressSubmit(values);
            setSubmitting(false); // Stop submitting once done
        }
    });

    return (
        <div className={styles.addressContainer}>
            {isSubmitted ? (  // If the form is submitted, show the confirmation message
                <div className={styles.thankYouMessage}>
                    <h2>Thank you for using ShopSphere!</h2>
                    <p>The shipping company will call you.</p>
                </div>
            ) : (  // Otherwise, show the form
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
                        Confirm
                    </button>
                </form>
            )}
        </div>
    );
}
