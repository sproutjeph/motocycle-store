import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
const Header = () => {
  return (
    <>
      <div className="header__hero">
        <h1>
          wellcome to
          <br /> J-sprout Motocycle
        </h1>
        <p>
          We sell all kinds of Motocycle, Tricycle and <br />
          motocycle spare-parts{' '}
        </p>
        <div>
          <Link to="/products" className="header__btn">
            Our Products
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
