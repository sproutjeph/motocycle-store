import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import './Sidebar.scss';
const Sidebar = () => {
  const { toggleSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <div className={`${isSidebarOpen ? 'wrapper show' : 'wrapper'}`}>
      <aside className="sidebar">
        <button className="Sidbar__close-btn" onClick={toggleSidebar}>
          <FaTimes />
        </button>
        <ul>
          <li>
            <Link to="/" onClick={toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleSidebar}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/auth" onClick={toggleSidebar}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={toggleSidebar}>
              About
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
