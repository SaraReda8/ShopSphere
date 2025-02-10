import React from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';
import { Formik, Field, ErrorMessage, Form as FormikForm } from 'formik';
import * as Yup from 'yup';
import Style from './ContactUs.module.css'; 
import contactus from '../../Assets/images/contact.jpg'

export default function ContactUs() {
  const initialValues = {
    name: '',
    tel: '',
    email: '',
    country: '',
    message: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    tel: Yup.string().required('Phone number is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    country: Yup.string().required('Country is required'),
    message: Yup.string().required('Message is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    alert('Thank you for your message! ShopSphere Support Team will get back to you soon.');
    resetForm();
  };

  return (
    <div className="contact">
      {/* Image */}
      <div className={Style.contactSection}>
      <div className={Style.overlay}>
        <img src={contactus} alt="Contact Us"  loading="lazy" className={Style.contactImage} />
        <div className={Style.textOverlay}>
          <h2 className='special text-white '>Contact us</h2>
          <p className='txt'>ShopSphere is ready to provide the right solution according to your needs</p>
        </div>
      </div>
    </div>

      <Row className={Style.Row}>
        {/* Left Side: Contact Info and Map */}
        <Col md={4} className={Style.contactInfo}>
      <h2>Get in touch</h2>
      <p className={Style.description}>
      We're just a message away! Connect with us for any inquiries or support
      </p>
      <div className={Style.infoItem}>
        <div className={Style.icon}><i className="bi bi-geo-alt-fill"></i></div>
        <div>
          <h5>Head Office</h5>
          <p>26 Bostan Emahameez street - Egypt</p>
        </div>
      </div>
      <div className={Style.infoItem}>
        <div className={Style.icon}><i className="bi bi-envelope-fill"></i></div>
        <div>
          <h5>Email Us</h5>
          <p>ShopSphere@gmail.com</p>
        </div>
      </div>
      <div className={Style.infoItem}>
        <div className={Style.icon}><i className="bi bi-telephone-fill"></i></div>
        <div>
          <h5>Call Us</h5>
          <p>Phone: +2002.2021.2025<br/>Fax: +0123.4567.8910</p>
        </div>
      </div>
      <div className={Style.socialMedia}>
        <h6>Follow our social media</h6>
        <div className={Style.icons}>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-youtube"></i>
        </div>
      </div>
    </Col>

        {/* Right Side: Form */}
        <Col md={4} className={Style.contactInfo}>
          <h2 >Send Us a Message</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <FormikForm>
              <Form.Group className="mb-3">
                <Field name="name" type="text" className="form-control" placeholder="Name*" />
                <ErrorMessage name="name" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Field name="tel" type="text" className="form-control" placeholder="Tel*" />
                <ErrorMessage name="tel" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Field name="email" type="email" className="form-control" placeholder="Email*" />
                <ErrorMessage name="email" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Field name="country" type="text" className="form-control" placeholder="Country*" />
                <ErrorMessage name="country" component="div" className="text-danger" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Field as="textarea" name="message" className="form-control" placeholder="Leave your message*" rows="4" />
                <ErrorMessage name="message" component="div" className="text-danger" />
              </Form.Group>

              <Button type="submit" className='btn4 w-100'>Send </Button>
            </FormikForm>
          </Formik>
        </Col>
      </Row>
    </div>
  );
}
