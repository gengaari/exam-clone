import React from 'react';
import './style/Header.css';

export function Header({ onSignInClick }) {
  return (
    <header className="header">
      <h1 className="logo">Cinemate</h1>
      <div className="header-buttons">
        <select className="lang">
          <option value="en">English</option>
          <option value="ua">Українська</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
