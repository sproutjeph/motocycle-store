import React from 'react';
import { FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import './CartItem.scss';
const CartItem = () => {
  const { cart, removeItem, decreaseItem, increaseItem } = useGlobalContext();

  return (
    <>
      {cart.map((item) => (
        <article className="cart-item" key={item.id}>
          <div>
            <img src={item.img} alt={item.title} />
            <div className="cart-item__info">
              <h4>{item.title}</h4>
              <button
                className="remove btn"
                onClick={() => removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
          <div className="cart-item__action">
            <FaChevronUp onClick={() => increaseItem(item.id)} />
            <p>{item.amount}</p>
            <FaChevronDown onClick={() => decreaseItem(item.id)} />
          </div>
        </article>
      ))}
    </>
  );
};

export default CartItem;
