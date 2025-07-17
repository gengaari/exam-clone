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
        <button 
          className="signin-btn" 
          onClick={onSignInClick}>
          Sign in 
        </button>
      </div>
    </header>
  );
}

export default Header;
