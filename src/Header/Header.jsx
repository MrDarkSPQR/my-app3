import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="menu">
      <div className="logo">
        <span className="logo-text-green">Image</span> <span className="logo-text-orange">Editor</span>
      </div>
      <nav className="nav">
        <a href="#home" className="nav-link">Головна</a>
        <a href="#editor" className="nav-link">Редактор</a>
        <a href="#updates" className="nav-link active">Оновлення</a>
        <a href="#About Use" className="nav-link">Про нас</a>
      </nav>
      <div className="menu-icon">
        <span>&#9776;</span>
      </div>
    </div>
  );
};

export default Header;
