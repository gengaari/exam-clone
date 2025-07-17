import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import new1 from './images/new1.png';
import new2 from './images/new2.png';
import new3 from './images/new3.jpg';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import Footer from './FooterMain';
import Header from './HeaderMain';

import './style/MainPage.css';

export function MainPage() {

  const watchImages = [img1, img2, img3];

  const categories = [
  { title: 'Sci-pop films', image: img1 },
  { title: 'Romantic films', image: img2 },
  { title: 'Action films', image: img3 },
];


  return (
    <div className="main-page">
      <Header />
      <div className="container">
        <Carousel>
          <Carousel.Item>
            <img src= {new1} alt="First slide" />
            <Carousel.Caption>
                <h2>New top content here</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src= {new2} alt="Second slide" />
            <Carousel.Caption>
                <h2>New top content here</h2>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src= {new3} alt="Second slide" />
            <Carousel.Caption>
                <h2>New top content here</h2>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr/>
        <h3>Continue watching</h3>
        <div className="watch-row">
          {watchImages.map((img, id) => (
            <img
              key={id}
              src={img}
              alt={`continue-${id}`}
              className="watch-item"
            />
          ))}
        </div>

        <hr/>
        <h3>Recommendations for you</h3>
        <div className="watch-row">
          {watchImages.map((img, id) => (
            <img
              key={id}
              src={img}
              alt={`rec-${id}`}
              className="watch-item"
            />
          ))}
        </div>

        <hr/>
        <h3>Top films of this year </h3>
        <div className="watch-row">
          {watchImages.map((img, id) => (
            <img
              key={id}
              src={img}
              alt={`top-${id}`}
              className="watch-item"
            />
          ))}
        </div>

        <div className="category-grid">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="category-card"
              style={{ backgroundImage: `url(${cat.image})` }}
            >
              <div className="category-title">{cat.title}</div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainPage;