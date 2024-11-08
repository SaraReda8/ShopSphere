import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CheckOut.module.css';
import checkoutImg from '../../Assets/images/logo6.png'; // Replace with actual path

export default function CheckOut() {
    const navigate = useNavigate();

    return (
        <div className={`container ${styles.checkoutContainer}`}>
            <div className={`card ${styles.checkoutCard}`}>
                {/* Right Side: Image */}
                <div className={`col-md-6 ${styles.imageContainer}`}>
                    <img src={checkoutImg} alt="Checkout" className={`img-fluid ${styles.checkoutImage}`} />
                </div>

                {/* Left Side: Title and Options */}
                <div className={`col-md-6 d-flex flex-column justify-content-center ${styles.optionsContainer}`}>
                    <h1 className={styles.title}>Choose Your Payment Method</h1>
                    <div className={`d-grid gap-3 ${styles.checkoutButtons}`}>
                        <button className="btn fillButton" onClick={() => navigate('/CashOnDelivery')}>
                            Cash on Delivery
                        </button>
                        <button className="btn fillButton" onClick={() => navigate('/Address')}>
                            Online Payment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
