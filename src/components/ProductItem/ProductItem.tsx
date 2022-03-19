import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import './ProductItem.scss';
import { ProductInter } from '../../types';
import { useGlobalContext } from '../../context';
import { Link } from 'react-router-dom';
const ProductItem = ({
  amount,
  brand,
  category,
  img,
  id,
  price,
  title,
  description,
  countInStock,
}: ProductInter) => {
  const { addToCart, openCart } = useGlobalContext();

  return (
    <Link to={`/products/details${id}`}>
      <article className="product-item">
        <div className="header">
          <img src={img} alt={title} />
        </div>
        <div className="footer">
          <div className="title">
            <h4>Product:</h4> <span>{title}</span>
          </div>

          <div className="price">
            <h4>price:</h4> <span>$ {price}</span>
          </div>
        </div>
        <button
          className="add-btn btn"
          onClick={() => {
            addToCart(id);
            openCart();
          }}
        >
          <FaCartPlus /> <span>add to cart</span>
        </button>
      </article>
    </Link>
  );
};

export default ProductItem;
