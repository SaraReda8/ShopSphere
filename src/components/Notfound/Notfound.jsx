import React from 'react';
import { Link } from 'react-router-dom';


export default function Notfound () {
    return <> <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <h2 className="display-4 mb-4">Oops! Page Not Found</h2>
        <p className="lead mb-4">
          The page you’re looking for doesn’t exist or has been moved. 
          Please check the URL or return to the homepage.
        </p>
        <Link to="/" className="btn bg-main text-white btn-lg">
          Go Back to Homepage
        </Link>
      </div>
    </div>
    </>
}

