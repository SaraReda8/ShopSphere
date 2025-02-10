import React, { useState } from 'react';
import axios from 'axios';
import Style from './Productcom.module.css';
import FeaturedProducts from './FeaturedProducts';
import ProductCard from './ProductCard'; // Import the ProductCard component
import Card1 from '../Card1/Card1';

export default function Productcom() {
    const [searchQuery, setSearchQuery] = useState('');
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);

    // Function to handle search and API request
    const handleSearch = async (e) => {
        e.preventDefault();
        setError(null); // Reset error state before new request
        try {
            const response = await axios.get(`https://ecommerce.routemisr.com/api/v1/products?title=${searchQuery}`);
            setProducts(response.data.data); // Assuming the API returns a list of products in response.data.data
        } catch (err) {
            setError('Product not found or an error occurred.');
            setProducts([]); // Clear products state if an error occurs
        }
    };

    return (
        
        <div className={Style.productComContainer}>
          
            <Card1 />
            {/* Search Form */}
            <form className={Style.searchForm} onSubmit={handleSearch}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Enter Product Name"
                    className={Style.searchInput}
                />
                <button 
                    type="submit" 
                    className={`btn btn-sm text-white bg-main w-100 ${Style.searchButton}`}
                >
                    Search
                </button>
            </form>

            {/* Display an error message if no products are found */}
            {error && <p className={Style.error}>{error}</p>}

            {/* Display the fetched products */}
            {products.length > 0 && (
                <div className="container py-4">
                    <div className="row">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}

            <FeaturedProducts />
            
        </div>
    );
}
