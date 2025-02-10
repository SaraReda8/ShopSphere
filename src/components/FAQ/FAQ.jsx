// FAQ.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './FAQ.module.css';

export default function FAQ() {
  const [activeSection, setActiveSection] = useState('section1'); // Default section
  const location = useLocation();

  // Scroll to section based on hash in URL
  useEffect(() => {
    const hash = location.hash.substring(1); // Remove the '#' from the hash
    switch (hash) {
      case 'Account':
        setActiveSection('section1');
        break;
      case 'Orders':
        setActiveSection('section2');
        break;
      case 'Returns':
        setActiveSection('section3');
        break;
      case 'Payments':
        setActiveSection('section4');
        break;
      case 'ProductInfo':
        setActiveSection('section5');
        break;
      default:
        setActiveSection('section1'); // Default section
    }
  }, [location]);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className={styles.container}>
      <div className="row">
        {/* Left Vertical Navbar */}
        <div className="col-md-3">
          <nav className="nav flex-column sticky-top">
            <button className={styles.navLinks} onClick={() => handleNavClick('section1')}>
              Account & Registration
            </button>
            <button className={styles.navLinks} onClick={() => handleNavClick('section2')}>
              Orders & Shipping
            </button>
            <button className={styles.navLinks} onClick={() => handleNavClick('section3')}>
              Returns & Refunds
            </button>
            <button className={styles.navLinks} onClick={() => handleNavClick('section4')}>
              Payments
            </button>
            <button className={styles.navLinks} onClick={() => handleNavClick('section5')}>
              Product Information
            </button>
          </nav>
        </div>

        {/* FAQ Content */}
        <div className="col-md-9">
          {/* Section 1: Account & Registration */}
          {activeSection === 'section1' && (
            <div id="section1" className={styles.section}>
              <h2 className="text-center mb-4 title1">Account & Registration</h2>
              <div className="accordion-body">
                <strong>1. How do I create an account?</strong>
                <p>Click on the "Sign Up" button at the top of the homepage and fill in your details. You'll receive a confirmation email to activate your account.</p>
                <strong>2. What should I do if I forget my password?</strong>
                <p>Click on "Forgot Password" on the login page, enter your email, and follow the instructions to reset your password.</p>
                <strong>3. How do I update my account information?</strong>
                <p>Log into your account, go to "Account Settings," and update your personal details, email, or password.</p>
                <strong>4. Can I have multiple accounts with the same email address?</strong>
                <p>No, each email address can only be associated with one account. If you need multiple accounts, use different email addresses.</p>
                <strong>5. What if I don't receive the password reset email?</strong>
                <p>If you don't receive the password reset email, check your spam folder. If it's not there, you can request it again or contact support for help.</p>
                <strong>6. How do I delete my account?</strong>
                <p>If you wish to delete your account, contact our support team through the Help Center, and they'll assist you with the process.</p>
              </div>
            </div>
          )}

          {/* Section 2: Orders & Shipping */}
          {activeSection === 'section2' && (
            <div id="section2" className={styles.section}>
              <h2 className="text-center mb-4 title1">Orders & Shipping</h2>
              <div className="accordion-body">
                <strong>1. How do I track my order?</strong>
                <p>After placing an order, you’ll receive a confirmation email with a tracking number. You can also track your order by logging into your account.</p>
                <strong>2. What are the available shipping options?</strong>
                <p>We offer Standard, Express, and Overnight shipping. Options will be displayed at checkout based on your location.</p>
                <strong>3. How long does shipping take?</strong>
                <p>Standard shipping takes 3-7 business days, Express takes 1-3 business days, and Overnight ensures next-day delivery if ordered before noon.</p>
                <strong>4. Can I change my shipping address after placing an order?</strong>
                <p>Yes, within 30 minutes of placing your order. After that, contact customer support to see if changes can still be made.</p>
                <strong>5. What happens if my package is lost or damaged?</strong>
                <p>If your package is lost or damaged, contact our customer support with your order number for assistance with a replacement or refund.</p>
              </div>
            </div>
          )}

          {/* Section 3: Returns & Refunds */}
          {activeSection === 'section3' && (
            <div id="section3" className={styles.section}>
              <h2 className="text-center mb-4 title1">Returns & Refunds</h2>
              <div className="accordion-body">
                <strong>1. What is your return policy?</strong>
                <p>We accept returns within 30 days. Items must be in original condition with tags attached. Final sale items are not eligible for return.</p>
                <strong>2. How do I return an item?</strong>
                <p>Log into your account, go to "Order History," and click on "Return Item" to print a return label.</p>
                <strong>3. How long will it take to receive my refund?</strong>
                <p>Refunds are processed within 5-7 business days after receiving the returned item.</p>
                <strong>4. Can I exchange an item?</strong>
                <p>We do not offer direct exchanges. Please return the unwanted item for a refund and place a new order.</p>
              </div>
            </div>
          )}

          {/* Section 4: Payments */}
          {activeSection === 'section4' && (
            <div id="section4" className={styles.section}>
              <h2 className="text-center mb-4 title1">Payments</h2>
              <div className="accordion-body">
                <strong>1. What payment methods do you accept?</strong>
                <p>We accept major credit cards, PayPal, gift cards, and installment payments like Klarna or Afterpay.</p>
                <strong>2. Is it safe to use my credit card on your website?</strong>
                <p>Yes, we use SSL encryption to ensure your payment information is secure.</p>
                <strong>3. When will I be charged for my order?</strong>
                <p>You’ll be charged once your order is confirmed. For installment payments, the first payment may be taken at checkout.</p>
                <strong>4. Why was my payment declined?</strong>
                <p>Payments may be declined due to incorrect card details, insufficient funds, or security measures. Please contact your bank if needed.</p>
              </div>
            </div>
          )}

          {/* Section 5: Product Information */}
          {activeSection === 'section5' && (
            <div id="section5" className={styles.section}>
              <h2 className="text-center mb-4 title1">Product Information</h2>
              <div className="accordion-body">
                <strong>1. How can I find the right size?</strong>
                <p>Each product page includes a size guide. Feel free to contact support for further assistance with sizing.</p>
                <strong>2. Are your products authentic?</strong>
                <p>Yes, all products are 100% authentic, sourced from authorized distributors and manufacturers.</p>
                <strong>3. Do you offer gift wrapping services?</strong>
                <p>Yes, we offer gift wrapping for a small fee. You can select this option at checkout and add a personalized message.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
