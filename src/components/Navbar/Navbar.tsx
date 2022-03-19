import React from 'react';
import { FaBars, FaCartPlus, FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './Navbar.scss';

const Navbar = () => {
  const { openCart, nuOfItemsInCart, toggleSidebar, user, signOutUser } =
    useGlobalContext();

  return (
    <nav className="nav">
      <div className="nav__center">
        <button className="nav__menu-btn" onClick={toggleSidebar}>
          <FaBars />
        </button>
        <Link to="/">
          <h2 className="nav__logo">J-Sprout</h2>
        </Link>
        <div className="nav__user">
          <span className="nav__welcome">Hello</span>
          <strong className="nav__userName">
            {/* @ts-ignore */}
            {user ? user?.auth.currentUser.email : 'Guest'}
          </strong>
        </div>
        <form className="nav__form">
          <input type="text" placeholder="shearch products..." />
          <button type="submit" className="nav__search-btn">
            <FaSearch />
          </button>
        </form>
        <ul className="nav__links">
          <li>
            <Link className="nav__link" to="/about">
              About
            </Link>
          </li>

          <li>
            <Link className="nav__link" to="/products">
              Products
            </Link>
          </li>
          <li>
            {user ? (
              <Link to="/" onClick={signOutUser}>
                Logout
              </Link>
            ) : (
              <Link className="nav__link" to="/auth">
                Login
              </Link>
            )}
          </li>
        </ul>
        <div className="nav__cart-contanier" onClick={openCart}>
          <FaCartPlus />
          <p>{nuOfItemsInCart}</p>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
