import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Style from './ForgotPassword.module.css';
import { FaEnvelope } from 'react-icons/fa';

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords', {
        email: values.email,
      });

      // Set success message
      setSuccessMessage('Password reset link has been sent to your email! Redirecting in 3 seconds...');
      
      // Redirect after 3 seconds
      setTimeout(() => {
        navigate('/VerifyResetCode');
      }, 3000);

    } catch (error) {
      setErrors({ email: 'Failed to send password reset link. Please try again.' });
    }
    setSubmitting(false);
  };

  return (
    <div className={Style.container}>
      <h1 className='special text-center '><i class="bi bi-star me-2"></i>Forgot Password</h1>
      <p className='txt'>
      "Enter your email address to receive a link to reset your password"
</p>

      {successMessage && (
        <div className={Style.successMessage}>
          {successMessage}
        </div>
      )}

      <Formik
        initialValues={{ email: '' }}
        validationSchema={ForgotPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={Style.form}>
            <div className={Style.fieldContainer}>
              <label htmlFor="email" className='form-label me-2'>
                <FaEnvelope /> Email Address
              </label>
              <Field
                type="email"
                name="email"
                className={Style.input}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className={Style.error} />
            </div>
            <button
              type="submit"
              className='btn AnimatedButton'
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Reset Link'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
