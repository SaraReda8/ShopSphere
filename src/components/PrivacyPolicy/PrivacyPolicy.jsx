import React from 'react';
import Style from './PrivacyPolicy.module.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt, faUserLock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PrivacyPolicy() {
  return (
    <Container className={Style.container}>
      <Row>
        <Col>
          <Card className={Style.card}>
            <Card.Body className={Style.cardBody}>
              <Card.Title className={`${Style.title} text-center mb-4`}>
                <h1 className=" fw-bold">Privacy Policy</h1>
              </Card.Title>
              <Card.Text>
                <h5><strong className='text-dark'>Effective Date:</strong> Sep 2024</h5>
                <p>
                  At <strong >ShopSphere</strong>, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard the information you provide when visiting or making a purchase on <a href="http://www.shopsphere.com" className='text-main'> www.shopsphere.com</a> (the "Site").
                </p>

                <h4 className="fs-4 fw-bold text-dark"><FontAwesomeIcon icon={faShieldAlt} /> 1. Information We Collect</h4>
                <ul>
                  <li><strong>Personal Identification Information:</strong> Name, email address, phone number, billing and shipping addresses.</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely through third-party payment processors).</li>
                  <li><strong>Account Information:</strong> Username, password, and order history.</li>
                  <li><strong>Technical Data:</strong> Browser type, device information, IP address, and cookies.</li>
                </ul>

                <h4 className="fs-4 fw-bold text-dark"><FontAwesomeIcon icon={faUserLock} /> 2. How We Use Your Information</h4>
                <ul>
                  <li>To process and fulfill your orders, including sending order confirmation and updates.</li>
                  <li>To communicate with you regarding your account, customer service inquiries, and promotional offers.</li>
                  <li>To improve the functionality and security of our website.</li>
                  <li>To personalize your experience and offer product recommendations.</li>
                  <li>For legal and security purposes, such as fraud prevention.</li>
                </ul>

                <h4 className="fs-4 fw-bold text-dark"><FontAwesomeIcon icon={faShieldAlt} /> 3. Sharing Your Information</h4>
                <ul>
                  <li><strong>Payment Processors:</strong> To process your payments securely.</li>
                  <li><strong>Shipping Companies:</strong> To deliver your orders.</li>
                  <li><strong>Service Providers:</strong> For website hosting, analytics, and marketing support.</li>
                </ul>

                <h4 className="fs-4 fw-bold text-dark"><FontAwesomeIcon icon={faShieldAlt} /> 4. Cookies and Tracking Technologies</h4>
                <ul>
                  <li><strong>Necessary Cookies:</strong> Required for the website to function properly (e.g., maintaining your shopping cart).</li>
                  <li><strong>Analytics Cookies:</strong> To track website performance and improve user experience.</li>
                  <li><strong>Advertising Cookies:</strong> To deliver personalized advertisements based on your browsing activity.</li>
                </ul>

                <h4 className="fs-4 fw-bold text-dark"><FontAwesomeIcon icon={faEnvelope} /> 9. Contact Us</h4>
                <ul>
                  <li><strong >Email:</strong> <a href="mailto:support@shopsphere.com" className='text-main'>support@shopsphere.com</a></li>
                  <li><strong>Phone:</strong> <FontAwesomeIcon icon={faPhone} /> +[Insert Phone Number]</li>
                  <li><strong>Mailing Address:</strong> [Insert Mailing Address]</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
