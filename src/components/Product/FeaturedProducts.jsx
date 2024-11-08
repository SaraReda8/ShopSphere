import React from 'react';
import { useQuery } from 'react-query';
import { BallTriangle } from 'react-loader-spinner';
import axios from 'axios';
import ProductCard from './ProductCard'; // Import the new ProductCard component

export default function FeaturedProducts() {

  function getFeaturedProducts() {
    return axios.get('https://ecommerce.routemisr.com/api/v1/products');
  }

  const { isLoading, isError, data } = useQuery('featuredProducts', getFeaturedProducts, {
    cacheTime: 5000,
    refetchInterval: 5000,
  });

  if (isLoading) {
    return (
      <div className='w-100 py-5 d-flex justify-content-center'>
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="main-color"
          ariaLabel="ball-triangle-loading"
          visible={true}
        />
      </div>
    );
  }

  if (isError) {
    return <div>Error loading featured products.</div>;
  }

  return (
    <div className="container py-4">

      <div className="row">
        {data?.data.data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
