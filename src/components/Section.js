import React from 'react';
import './style/Section.css';
import { Link } from 'react-router-dom';

export function Section() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Unlimited movies, TV shows, and more</h2>
        <p>Watch anywhere and anytime.</p>
        <p>Ready to watch? Let’s find your preferences!</p>
        <Link to="/main" className="start-btn">
          Get Started &gt;
        </Link>
      </div>
    </section>
  );
}

export default Section;
