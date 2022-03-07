import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { CartItem } from '../../components';
import { useGlobalContext } from '../../context';
import './Cart.scss';
const Cart = () => {
  const { closeCart, isCartOpen, clearCart, totalPrice } = useGlobalContext();
  return (
    <>
      <aside className={`${isCartOpen ? 'cart open' : 'cart'}`}>
        <div className="cart__close">
          <FaTimes onClick={closeCart} />
        </div>
        <div className="cart__header">
          <h4 className="cart__title">Your Cart</h4>
        </div>

        <ul className="cart__item-container">
          <CartItem />
        </ul>

        <div className="cart__footer">
          <h4>Total</h4>
          <h4 className="price">$ {totalPrice}</h4>
        </div>
        <button className="cart__clear-btn btn" onClick={clearCart}>
          clear Cart
        </button>
      </aside>
    </>
  );
};

export default Cart;
