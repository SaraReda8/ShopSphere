import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { ColorRing } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import styles from './Register.module.css';

export default function Register() {
    const [showPassword, setShowPassword] = useState(false);
    const [showRePassword, setShowRePassword] = useState(false);
    const [isTermsChecked, setIsTermsChecked] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();


    async function registerSubmit(values) {
        setIsLoading(true);
        try {
            let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
            if (data.message === 'success') {
                setSuccessMessage('Registration successful!');
                setTimeout(() => navigate('/login'), 2000);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    const validationSchema = yup.object({
        name: yup.string().min(3).max(12).required(),
        email: yup.string().email().required(),
        password: yup.string()
            .matches(/^[A-Z]/, 'Password must start with a capital letter')
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{6,12}$)/)
            .required(),
        rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
    });

    const formik = useFormik({
        initialValues: { name: '', email: '', password: '', rePassword: '' },
        validationSchema,
        onSubmit: registerSubmit,
    });

    return (
        <div className={styles.registerCard}>
            <div className={styles.leftSide}>
                <h1 className='text-center special'>Register Now</h1>
                <form onSubmit={formik.handleSubmit}>
                    {/* Name & Email Row */}
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='name' className='form-label'>Name:</label>
                            <input className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                value={formik.values.name} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                type='text' id='name' name='name' />
                            {formik.touched.name && formik.errors.name && (
                                <div className='invalid-feedback'>{formik.errors.name}</div>
                            )}
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='email' className='form-label'>Email:</label>
                            <input className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                value={formik.values.email} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                type='email' id='email' name='email' />
                            {formik.touched.email && formik.errors.email && (
                                <div className='invalid-feedback'>{formik.errors.email}</div>
                            )}
                        </div>
                    </div>

                    {/* Password & Confirm Password Row */}
                    <div className='row mb-3'>
                        <div className='col-md-6'>
                            <label htmlFor='password' className='form-label'>Password:</label>
                            <div className='input-group'>
                                <input className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                    value={formik.values.password} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    type={showPassword ? 'text' : 'password'} id='password' name='password' />
                                <button type='button' className='btn btn-outline-secondary' onClick={() => setShowPassword(!showPassword)}>
                                    <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <div className='invalid-feedback'>{formik.errors.password}</div>
                            )}
                        </div>
                        <div className='col-md-6'>
                            <label htmlFor='rePassword' className='form-label'>Confirm Password:</label>
                            <div className='input-group'>
                                <input className={`form-control ${formik.touched.rePassword && formik.errors.rePassword ? 'is-invalid' : ''}`}
                                    value={formik.values.rePassword} onBlur={formik.handleBlur} onChange={formik.handleChange}
                                    type={showRePassword ? 'text' : 'password'} id='rePassword' name='rePassword' />
                                <button type='button' className='btn btn-outline-secondary' onClick={() => setShowRePassword(!showRePassword)}>
                                    <i className={`fas ${showRePassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </button>
                            </div>
                            {formik.touched.rePassword && formik.errors.rePassword && (
                                <div className='invalid-feedback'>{formik.errors.rePassword}</div>
                            )}
                        </div>
                    </div>

                    {/* Terms of Service Checkbox */}
                    <div className='mb-3 form-check'>
                        <input type='checkbox' className='form-check-input' id='terms' checked={isTermsChecked} onChange={(e) => setIsTermsChecked(e.target.checked)} />
                        <label className='form-check-label' htmlFor='terms'>
                            I accept the <Link to='/TermOfService'>Terms of Service</Link> and <Link to='/PrivacyPolicy'>Privacy Policy</Link>
                        </label>
                    </div>

                    {/* Error & Success Messages */}
                    {error && <div className='alert alert-danger'>{error}</div>}
                    {successMessage && <div className='alert alert-success'>{successMessage}</div>}

                    {/* Register Button */}
                    <button disabled={!formik.isValid || !formik.dirty || !isTermsChecked} className='btn AnimatedButton w-100 mt-2' type='submit'>
                        {isLoading ? <ColorRing height='30' width='30' /> : 'Register'}
                    </button>
                </form>
            </div>
        </div>
    );
}
