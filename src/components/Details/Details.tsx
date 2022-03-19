import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './Details.scss';
const Details = () => {
  const params = useParams();
  const id = Number(params.id);
  const { allProducts, addToCart, openCart } = useGlobalContext();

  const product = allProducts.find((prod) => prod.id === id);
  return (
    <div className="details">
      <h1 className="details__title">
        Product <span>Details</span>{' '}
      </h1>
      <article className="details__product">
        <img className="details__img" src={product?.img} alt={product?.title} />
        <div className="details__product-info">
          <div>
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Brand</h4>
            <h4>Description</h4>
            <h4>Quantity</h4>
          </div>
          <div>
            <h4>{product?.title}</h4>
            <h4>$ {product?.price}</h4>
            <h4>{product?.brand}</h4>
            <h4>{product?.description}</h4>
            <h4>{product?.amount}</h4>
          </div>
          <div className="details__actions">
            <Link to="/products" className="btn to-products">
              Products
            </Link>
            <button className="btn add" onClick={() => addToCart(id)}>
              Add to Cart
            </button>
            <button className="btn to-cart" onClick={openCart}>
              Go to Cart
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default Details;
