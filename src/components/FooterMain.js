import React from 'react';
import './style/Footer.css';

export function Footer() {
  return (
    <footer className="footer main">
      <p className="footer-call">Questions? Call <a href="tel:1-844-505-2993">1-844-505-2993</a></p>
      <div className="footer-columns">
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Investor Relations</a></li>
          <li><a href="#">Buy Gift Cards</a></li>
          <li><a href="#">Cookie Preferences</a></li>
          <li><a href="#">Legal Notices</a></li>
        </ul>
        <ul>
          <li><a href="#">Help Center</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">Ways to Watch</a></li>
          <li><a href="#">Corporate Information</a></li>
          <li><a href="#">Only on Netflix</a></li>
        </ul>
        <ul>
          <li><a href="#">Account</a></li>
          <li><a href="#">Netflix Shop</a></li>
          <li><a href="#">Terms of Use</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Do Not Sell or Share My Personal Information</a></li>
        </ul>
        <ul>
          <li><a href="#">Media Center</a></li>
          <li><a href="#">Redeem Gift Cards</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Speed Test</a></li>
          <li><a href="#">Ad Choices</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
