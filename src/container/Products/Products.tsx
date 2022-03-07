import React from 'react';
import { ProductItem } from '../../components';
import { useGlobalContext } from '../../context';

import './Products.scss';
const Products = () => {
  const { allProducts, allCategories, showByCategory } = useGlobalContext();
  return (
    <section className="products">
      <h1 className="products__title">
        Our <span>Products</span>
      </h1>
      <ul className="products__categories">
        {allCategories.map((category, index) => (
          <button
            className="category-btn btn"
            key={index}
            onClick={() => showByCategory(category.toLowerCase())}
          >
            {category}
          </button>
        ))}
      </ul>
      <ul className="product-list">
        {allProducts.map((product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
