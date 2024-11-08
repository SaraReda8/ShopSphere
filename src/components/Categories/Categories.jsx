import React, { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';
import styles from './Categories.module.css';

const fetchCategories = async () => {
  const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/categories');
  return data;
};

const fetchProductsByCategory = async (categoryId) => {
  const { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/products', {
    params: { category: categoryId },
  });
  return data;
};

export default function Categories() {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: categoriesData, error: categoriesError, isLoading: categoriesLoading, isError: categoriesIsError } = useQuery('categories', fetchCategories);

  const { data: productsData, error: productsError, isLoading: productsLoading, isError: productsIsError } = useQuery(
    ['products', selectedCategoryId],
    () => fetchProductsByCategory(selectedCategoryId),
    { enabled: !!selectedCategoryId }
  );

  const handleCategoryClick = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  const filteredCategories = categoriesData?.data?.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (categoriesLoading) return <div>Loading categories...</div>;
  if (categoriesIsError) return <div>Error: {categoriesError.message}</div>;

  return (
    <div className="container mt-5">
      <h1 className='txt fw-bold text-center mb-5 text-main'>Categories</h1>

      <div className="text-center mb-4">
        <input
          type="text"
          className={`${styles.searchInput} form-control`}
          placeholder="Search for a category..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="row">
        {filteredCategories.map((category) => (
          <div key={category._id} className="col-md-4 mb-4">
            <div className={`${styles.categoryCard} card h-100`} onClick={() => handleCategoryClick(category._id)}>
              <img src={category.image} className={styles.cardImgTop} alt={category.name} />
              <div className="card-body">
                <h5 className={styles.cardTitle}>{category.name}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedCategoryId && (
        <div className="mt-5">
          <h2 className="text-center mb-3">Products in Selected Category</h2>

          {productsLoading ? (
            <div className="text-center">Loading products...</div>
          ) : productsIsError ? (
            <div className="text-center text-danger">Error: {productsError.message}</div>
          ) : (
            <div className="row">
              {productsData?.data?.map((product) => (
                <div key={product._id} className="col-md-4 mb-4">
                  <div className={`${styles.productCard} card h-100`}>
                    <img src={product.imageCover} className={styles.cardImgTop} alt={product.title} />
                    <div className="card-body">
                      <h5 className={styles.productTitle}>{product.title}</h5>
                      <p className={styles.productPrice}>${product.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
