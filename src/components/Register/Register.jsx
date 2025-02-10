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

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    async function registerSubmit(values) {
        setIsLoading(true);
        try {
            let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup', values);
            if (data.message === 'success') {
                setSuccessMessage('Registration successful!');
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            }
        } catch (err) {
            setError(err.response?.data?.message || 'Registration failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    }

    const validationSchema = yup.object({
        name: yup.string().min(3).max(12).required(),
        phone: yup.string().matches(phoneRegExp, 'Phone is invalid').required(),
        email: yup.string().email().required(),
        password: yup.string()
            .matches(/^[A-Z]/, 'Password must start with a capital letter')
            .matches(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>?])(?=.{6,12}$)/)
            .required(),
        rePassword: yup.string().oneOf([yup.ref('password')], 'Passwords must match').required(),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
            rePassword: '',
        },
        validationSchema: validationSchema,
        onSubmit: registerSubmit,
    });

    const handleTogglePassword = () => setShowPassword(!showPassword);
    const handleToggleRePassword = () => setShowRePassword(!showRePassword);
    const handleTermsChange = (e) => setIsTermsChecked(e.target.checked);

    return (
        <div className={styles.registerCard}>
            <div className={styles.leftSide}>
                <h1 className='text-center special'><i className="bi bi-star me-2"></i>Register Now</h1>
                <form onSubmit={formik.handleSubmit}>
                    {/* Name Field */}
                    <div className='mb-3'>
                        <label htmlFor='name' className='form-label'><i className='fas fa-user m-2'></i>Name:</label>
                        <input className={`form-control ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                            value={formik.values.name}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type='text' id='name' name='name'
                        />
                        {formik.touched.name && formik.errors.name && (
                            <div className='invalid-feedback'>{formik.errors.name}</div>
                        )}
                    </div>

                    {/* Phone Field */}
                    <div className='mb-3'>
                        <label htmlFor='phone' className='form-label'><i className='fas fa-phone m-2'></i>Phone:</label>
                        <input className={`form-control ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                            value={formik.values.phone}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type='tel' id='phone' name='phone'
                        />
                        {formik.touched.phone && formik.errors.phone && (
                            <div className='invalid-feedback'>{formik.errors.phone}</div>
                        )}
                    </div>

                    {/* Email Field */}
                    <div className='mb-3'>
                        <label htmlFor='email' className='form-label'><i className='fas fa-envelope m-2'></i>Email:</label>
                        <input className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                            value={formik.values.email}
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            type='email' id='email' name='email'
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className='invalid-feedback'>{formik.errors.email}</div>
                        )}
                    </div>

                    {/* Password Field with Toggle */}
                    <div className='mb-3'>
                        <label htmlFor='password' className='form-label'><i className='fas fa-lock m-2'></i>Password:</label>
                        <div className='input-group'>
                            <input className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type={showPassword ? 'text' : 'password'}
                                id='password' name='password'
                            />
                            <button type='button' className='btn btn-outline-secondary' onClick={handleTogglePassword}>
                                <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {formik.touched.password && formik.errors.password && (
                            <div className='invalid-feedback'>{formik.errors.password}</div>
                        )}
                    </div>

                    {/* Confirm Password Field with Toggle */}
                    <div className='mb-3'>
                        <label htmlFor='rePassword' className='form-label'><i className='fas fa-check m-2'></i>Confirm Password:</label>
                        <div className='input-group'>
                            <input className={`form-control ${formik.touched.rePassword && formik.errors.rePassword ? 'is-invalid' : ''}`}
                                value={formik.values.rePassword}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type={showRePassword ? 'text' : 'password'}
                                id='rePassword' name='rePassword'
                            />
                            <button type='button' className='btn btn-outline-secondary' onClick={handleToggleRePassword}>
                                <i className={`fas ${showRePassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                            </button>
                        </div>
                        {formik.touched.rePassword && formik.errors.rePassword && (
                            <div className='invalid-feedback'>{formik.errors.rePassword}</div>
                        )}
                    </div>

                    {/* Terms of Service Checkbox */}
                    <div className='mb-3 form-check'>
                        <input
                            type='checkbox'
                            className='form-check-input text-main'
                            id='terms'
                            checked={isTermsChecked}
                            onChange={handleTermsChange}
                        />
                        <label className='form-check-label ' htmlFor='terms'>
                            I read and accept the <Link to="/TermOfService" className='text-main'>Terms of Service</Link> and <Link to='/PrivacyPolicy' className='text-main'>Privacy Policy</Link>
                        </label>
                    </div>

                    {/* Error Message */}
                    {error && <div className='alert alert-danger'>{error}</div>}

                    {/* Success Message */}
                    {successMessage && <div className='alert alert-success'>{successMessage}</div>}

                    {/* Register Button */}
                    {isLoading ? (
                        <button className='btn bg-main text-white mt-2' type='button' disabled>
                            <ColorRing
                                visible={true}
                                height="30"
                                width="30"
                                ariaLabel="color-ring-loading"
                                wrapperClass="color-ring-wrapper"
                                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
                            />
                        </button>
                    ) : (
                        <button disabled={!formik.isValid || !formik.dirty || !isTermsChecked} className='btn AnimatedButton w-100 mt-2' type='submit'>
                            Register
                        </button>
                    )}
                </form>
                <div className='mt-3 text-center'>
                    <span>Already have an account? </span>
                    <Link to="/login" className={styles.btn}>Login</Link>
                </div>
            </div>
        </div>
    );
}
