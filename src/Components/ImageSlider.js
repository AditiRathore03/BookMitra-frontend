import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageSlider.css';

function ImageSlider() {
  return (
    <div className="hero-container">
      {/* Full-width carousel section */}
      <div className="hero-carousel">
        <Carousel indicators={true} controls={true} interval={5000}>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=2070&auto=format&fit=crop"
              alt="Library shelves"
            />
            <div className="caption-container">
              <h3>Expert Analysis</h3>
              <p>Data-driven insights for optimal decision making</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://images.unsplash.com/photo-1650513259622-081281181c32?q=80&w=1952&auto=format&fit=crop"
              alt="Book collection"
            />
            <div className="caption-container">
              <h3>Trending Titles</h3>
              <p>Explore the most popular books right now</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://as2.ftcdn.net/jpg/02/64/75/01/1000_F_264750103_j3pG3e64zgaDj8iaDhbVvSEXyxEUctpB.jpg"
              alt="Reading materials"
            />
            <div className="caption-container">
              <h3>Curated Collections</h3>
              <p>Hand-picked reads from genre experts</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;
