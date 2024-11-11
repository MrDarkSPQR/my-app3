import React from 'react';
import { Link } from 'react-router-dom';
import useActivePage from '../Hooks/useActivePage'; 
import './Header.css';

const Header = () => {
  return (
    <div className="menu">
      <div className="logo">
        <span className="logo-text-green">Image</span> <span className="logo-text-orange">Editor</span>
      </div>
      <nav className="nav">
        <Link to="/" className={`nav-link ${useActivePage('/') ? 'active' : ''}`}>
          Головна
        </Link>
        <Link to="/editor" className={`nav-link ${useActivePage('/editor') ? 'active' : ''}`}>
          Редактор
        </Link>
        <Link to="/updates" className={`nav-link ${useActivePage('/updates') ? 'active' : ''}`}>
          Оновлення
        </Link>
        <Link to="/about" className={`nav-link ${useActivePage('/about') ? 'active' : ''}`}>
          Про нас
        </Link>
      </nav>
      <div className="menu-icon">
        <span>&#9776;</span>
      </div>
    </div>
  );
};

export default Header;
