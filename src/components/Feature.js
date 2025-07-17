import React from 'react';
import tvImage from './images/tv.jpg';
import monitorImage from './images/monitor.png';
import charactersImage from './images/characters.png';
import phoneImage from './images/phone.png';
import './style/Feature.css';

export function Feature() {
  return (
    <div className="features">
      <section className="feature">
        <div className="text-content">
          <h3>Enjoy on your TV</h3>
          <p>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
        </div>
        <img src={tvImage} alt="TV" />
      </section>

      <section className="feature reverse">
        <div className="text-content">
          <h3>Watch everywhere</h3>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        <img src={monitorImage} alt="Monitor" />
      </section>

      <section className="feature">
        <div className="text-content">
          <h3>Create profiles for kids</h3>
          <p>Send kids on adventures with their favorite characters in a space made just for them — free.</p>
        </div>
        <img src={charactersImage} alt="Characters" />
      </section>

      <section className="feature reverse">
        <div className="text-content">
          <h3>Download your shows to watch offline</h3>
          <p>Watch on a plane, train, or submarine...</p>
        </div>
        <img src={phoneImage} alt="Phone" />
      </section>
    </div>
  );
}

export default Feature;
