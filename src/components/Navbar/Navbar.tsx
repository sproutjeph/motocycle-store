import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useGlobalContext } from '../../context';
import './Navbar.scss';

const Navbar = () => {
  const { openCart, nuOfItemsInCart } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <h2 className="logo">J-Sprout</h2>
        <ul>
          <li>About</li>
          <li>Products</li>
        </ul>
        <div className="nav-cart-contanier" onClick={openCart}>
          <FaCartPlus />
          <p>{nuOfItemsInCart}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
