import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Style from './VerifyResetCode.module.css';

const VerifyResetCodeSchema = Yup.object().shape({
  resetCode: Yup.string()
    .min(5, 'Code must be 5 or 6 digits')
    .max(6, 'Code must be 5 or 6 digits')
    .required('Required'),
});

export default function VerifyResetCode() {
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setErrors }) => {
    try {
      await axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode', {
        resetCode: values.resetCode,
      });

      // Set success message
      setSuccessMessage('Reset code verified! Redirecting in 3 seconds...');
      
      // Redirect to ResetPassword after 3 seconds
      setTimeout(() => {
        navigate('/ResetPassword');
      }, 3000);

    } catch (error) {
      setErrors({ resetCode: 'Invalid reset code. Please try again.' });
    }
    setSubmitting(false);
  };

  return (
    <div className={Style.container}>
      <h1 className='special text-center mt-2 mb-2 '><i class="bi bi-star me-2"></i>Verify Reset Code</h1>
      <p className='txt'>
        "Please enter the verification code sent to your registered email to reset your password"
      </p>

      {successMessage && (
        <div className={Style.successMessage}>
          {successMessage}
        </div>
      )}

      <Formik
        initialValues={{ resetCode: '' }}
        validationSchema={VerifyResetCodeSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, handleChange }) => (
          <Form className={Style.form}>
            <div className={Style.codeContainer}>
              {[...Array(6)].map((_, index) => (
                <Field
                  key={index}
                  name={`resetCode${index}`}
                  type="text"
                  maxLength="1"
                  className={Style.codeInput}
                  value={values.resetCode[index] || ''}
                  onChange={(e) => {
                    const { value } = e.target;
                    if (/^\d?$/.test(value)) {
                      handleChange({
                        target: {
                          name: 'resetCode',
                          value: values.resetCode.slice(0, index) + value + values.resetCode.slice(index + 1),
                        },
                      });
                    }
                  }}
                />
              ))}
            </div>
            <ErrorMessage name="resetCode" component="div" className={Style.error} />
            <button
              type="submit"
              className='btn AnimatedButton w-100 mt-2'
              disabled={isSubmitting || (values.resetCode.length < 5 || values.resetCode.length > 6)}
            >
              {isSubmitting ? 'Verifying...' : 'Verify Code'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
