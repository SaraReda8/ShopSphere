import React from 'react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom'; 
import {  FaCodepen,FaFacebookSquare, FaInstagram, FaTiktok, FaSnapchatSquare, FaTelegramPlane } from 'react-icons/fa';

export default function Footer() {
    return (
        <>
            <footer className={`${styles.footer} pt-5 pb-4`}>
                <div className="container">
                    <div className="row">
                        {/* Logo & Tagline */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h2 className="special text-white fw-bold">ShopSphere</h2>
                            <p className={`${styles.textWhite} ${styles.glow}`}>Where shopping meets simplicity. Explore a wide selection of top-quality products, great deals, and fast, reliable service, all designed to provide you with a hassle-free shopping experience</p>
                        </div>

                        {/* Useful Links */}
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h5 className="text mb-4">Useful Links</h5>
                            <ul className="list-unstyled">
                                <li>
                                    <Link to="/ContactUS" className={styles.link}>Contact Us</Link>
                                </li>
                            
                                <li>
                                    <Link to="/FAQ#Payments" className={styles.link}>Payments</Link> {/* Updated link */}
                                </li>
                                <li>
                                    <Link to="/FAQ#Account" className={styles.link}>Account & Registration</Link> {/* Updated link */}
                                </li>
                                <li>
                                    <Link to="/FAQ#Orders" className={styles.link}>Orders & Shipping</Link> {/* Updated link */}
                                </li>
                                <li>
                                    <Link to="/FAQ#Returns" className={styles.link}>Returns & Refunds</Link> {/* Returns & Refunds link */}
                                </li>
                                <li>
                                    <Link to="/PrivacyPolicy" className={styles.link}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/TermOfService" className={styles.link}>Terms of Service</Link>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Information */}
                        <div className="col-lg-4 col-md-6 mb-4 text-white">
                            <h5 className="text-uppercase mb-4">Contact Info</h5>
                            <ul className="list-unstyled text-white">
                                <li><i className="bi bi-telephone"></i> +1 123 456 7890</li>
                                <li><i className="bi bi-envelope"></i> support@shopsphere.com</li>
                                <li><i className="bi bi-geo-alt"></i> 123 Market St, Cairo, Egypt</li>
                            </ul>
                            <div className={styles.button}>

  <a href="https://codepen.io/yourusername" target="_blank" rel="noopener noreferrer" className="text-main me-1">
    <FaCodepen />
  </a>

  <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="text-main me-1">
    <FaFacebookSquare />
  </a>
 
  <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-main me-1">
    <FaInstagram />
  </a>
  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-main me-1">
          <FaTiktok  />
        </a>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer" className="text-main me-1">
          <FaSnapchatSquare  />
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="text-main me-1">
          <FaTelegramPlane  />
          </a>
</div>

                        </div>

               
                    </div>

                    <hr className="text-white" />

                    {/* Footer Bottom */}
                    <div className="text-center">
                        <p className="mb-0 text-white">&copy; {new Date().getFullYear()} ShopSphere. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </>
    );
}
