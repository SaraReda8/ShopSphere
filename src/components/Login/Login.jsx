import React, { useContext, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { UserContext } from './../../Context/UserContext';
import styles from './Login.module.css'; // Using CSS modules

export default function Login() {
    let {setUserToken, setUserData} = useContext(UserContext);
    let navigate = useNavigate();
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState(null);

    async function LoginSubmit(values) {
        setIsLoading(true);
        try {
            let { data } = await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin', {
                email: values.email,
                password: values.password,
            });

            if (data.message === 'success') {
                setSuccessMessage('Login successful! Redirecting to home...');
                localStorage.setItem('userToken', data.token);
                setUserToken(data.token);
                setUserData(data.user);
                setTimeout(() => {
                    navigate('/');
                }, 1000); // Wait 1 second before redirecting
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
        } finally {
            setIsLoading(false);
        }
    }

    const validationSchema = yup.object({
        email: yup.string().email('Invalid email format').required('Email is required'),
        password: yup.string().required('Password is required'),
    });

    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: validationSchema,
        onSubmit: LoginSubmit,
    });

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className={`${styles.loginCard} shadow-lg`}>
                {/* Left side for quote */}
                

                {/* Right side for the form */}
                <div className={styles.rightSide}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    {successMessage && <div className="alert alert-success text-center">{successMessage}</div>}

                    <form onSubmit={formik.handleSubmit}>
                    <h1 className="text-center special mt-2 mb-2"> 
Welcome Back!</h1>

                        <div className="mb-3">
                            <i className="fas fa-envelope me-2"></i> 
                            <label htmlFor="email" className="form-label">Email:</label>
                            <input
                                className={`form-control ${formik.touched.email && formik.errors.email ? 'is-invalid' : ''}`}
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="email"
                                id="email"
                                name="email"
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className="invalid-feedback">{formik.errors.email}</div>
                            )}
                        </div>

                        <div className="mb-3">
                            <i className="fas fa-lock me-2"></i>   
                            <label htmlFor="password" className="form-label">Password:</label>
                            <input
                                className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                value={formik.values.password}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                type="password"
                                id="password"
                                name="password"
                            />
                            {formik.touched.password && formik.errors.password && (
                                <div className="invalid-feedback">{formik.errors.password}</div>
                            )}
                        </div>

                        {isLoading ? (
                            <button className="btn bg-main text-white w-100 mt-2" type="button" disabled>
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
                            <>
                                <button
                                    disabled={!formik.isValid || !formik.dirty}
                                    className="btn AnimatedButton w-100 mt-2"
                                    type="submit"
                                >
                                    Login
                                </button>
                                <div className="mt-3 text-center">
                                    <span>Don't have an account? </span>
                                    <Link to="/register" className={styles.btn}>Register Now</Link>
                                </div>
                                <div className="mt-3 text-center">
                                    <Link to="/ForgetPassword" className={styles.btn}>Forget Password</Link>
                                </div>
                            </>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}
