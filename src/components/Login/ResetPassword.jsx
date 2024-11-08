import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Style from './ResetPassword.module.css';
import { FaLock } from 'react-icons/fa';

const ResetPasswordSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
});

export default function ResetPassword() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword', {
        email: values.email,
        newPassword: values.newPassword,
      });
      setSuccessMessage('Password reset successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirect to home or login page after 2 seconds
    } catch (error) {
      setErrors({ newPassword: 'Failed to reset password. Please try again.' });
    }
    setSubmitting(false);
  };

  return (
    <div className={Style.container}>
      <h1 className={Style.title}>Reset Password</h1>
      <Formik
        initialValues={{ email: '', newPassword: '' }}
        validationSchema={ResetPasswordSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className={Style.form}>
            <div className={Style.fieldContainer}>
              <label htmlFor="email" className={Style.label}>
                <FaLock /> Email
              </label>
              <Field
                type="email"
                name="email"
                className={Style.input}
                placeholder="Enter your email"
              />
              <ErrorMessage name="email" component="div" className={Style.error} />
            </div>
            <div className={Style.fieldContainer}>
              <label htmlFor="newPassword" className={Style.label}>
                <FaLock /> New Password
              </label>
              <Field
                type="password"
                name="newPassword"
                className={Style.input}
                placeholder="Enter new password"
              />
              <ErrorMessage name="newPassword" component="div" className={Style.error} />
            </div>
            <button
              type="submit"
              className={Style.submitButton}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Resetting...' : 'Reset Password'}
            </button>
            {successMessage && <div className={Style.successMessage}>{successMessage}</div>}
          </Form>
        )}
      </Formik>
    </div>
  );
}
