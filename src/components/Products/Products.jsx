import React from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// Function to fetch products data from the API
async function fetchProducts() {
  const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products');
  return data; // Ensure this returns the correct structure
}

export default function Products() {
  const { data, error, isLoading, isError } = useQuery('products', fetchProducts);

  // Log data for debugging
  console.log(data);

  if (isLoading) {
    return <div className="text-center">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center text-danger">Error: {error.message}</div>;
  }

  // Check and handle the structure of the response
  const products = data?.products || data || []; // Adjust based on the actual response structure

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Products</h1>
      <div className="row">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product._id} className="col-md-3 mb-4">
              <div className="card h-90">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  style={{ height: '200px', objectFit: 'contain' }} // Adjust image size
                />
                <div className="card-body">
                  <h5 className="card-title text-center fw-bold">{product.name}</h5>
                  <p className="card-text text-center">${product.price.toFixed(2)}</p>
                  <p className="card-text text-center">{product.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">No products available</div>
        )}
      </div>
    </div>
  );
}
