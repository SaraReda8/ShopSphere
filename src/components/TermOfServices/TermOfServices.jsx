import React from 'react';
import Style from './TermOfServices.module.css';
import { FaUser, FaShoppingCart, FaTruck, FaUndo, FaLock, FaExclamationCircle, FaFileContract, FaEnvelope } from 'react-icons/fa';

export default function TermOfServices() {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <div className={`${Style['card-header']} bg-white text-dark text-center title`}>
          <h1 className="card-title mb-0"><FaFileContract /> Terms of Service</h1>
        </div>
        <div className="card-body">
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaFileContract /> 1. Introduction</h2>
            <p className="text-muted">
              Welcome to ShopSphere! These Terms of Service govern your use of our website and services.
              By using our site, you agree to these terms. Please read them carefully.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaUser /> 2. User Accounts</h2>
            <p className="text-muted">
              You must create an account to access certain features. You are responsible for maintaining
              the confidentiality of your account details and for all activities that occur under your account.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaShoppingCart /> 3. Orders and Payments</h2>
            <p className="text-muted">
              All orders are subject to availability. We reserve the right to cancel or refuse any order.
              Payments must be made through our accepted methods and are processed securely.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaTruck /> 4. Shipping and Delivery</h2>
            <p className="text-muted">
              We strive to deliver your orders in a timely manner. Shipping times vary based on location.
              We are not responsible for delays caused by external factors.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaUndo /> 5. Returns and Refunds</h2>
            <p className="text-muted">
              Our return policy allows for returns within 30 days of receipt. Items must be in original condition.
              Refunds will be processed after we receive the returned item.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaLock /> 6. Intellectual Property</h2>
            <p className="text-muted">
              All content on our site, including text, graphics, and logos, is the property of ShopSphere
              or its licensors. Unauthorized use is prohibited.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaExclamationCircle /> 7. Limitation of Liability</h2>
            <p className="text-muted">
              We are not liable for any indirect, incidental, or consequential damages arising from the use
              of our site or services. Our liability is limited to the maximum extent permitted by law.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaFileContract /> 8. Changes to Terms</h2>
            <p className="text-muted">
              We may update these Terms of Service from time to time. Changes will be posted on this page
              and are effective immediately upon posting.
            </p>
          </section>
          
          <section className="mb-4">
            <h2 className="fs-4 fw-bold"><FaEnvelope /> 9. Contact Us</h2>
            <p className="text-muted">
              If you have any questions about these Terms of Service, please contact us at..
              <a href="mailto:support@shopsphere.com" className='text-main'><strong> Support@shopsphere.com</strong></a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
