import React from 'react';
import { Carousel } from 'react-bootstrap';
import './ImageSlider.css';

function ImageSlider() {
  return (
    <div className="hero-container">
      {/* Left content section */}
      <div className="hero-content">
        <h1 className="hero-title">BOOKMITRA</h1>
        <p className="hero-description">
          Find your next great read with our personalized book recommendations.
          Discover titles tailored to your preferences and reading history.
        </p>
        <div className="hero-buttons">
          <button 
            className="recommendation-button"
            onClick={() => window.location.href = process.env.REACT_APP_STREAMLIT_URL || process.env.STREAMLIT_URL}
          >
            <img 
              src="/recommendation-icon.png" 
              alt="" 
              className="recommendation-icon"
            />
            <span>Recommendation Model</span>
          </button>
          
          <button className="secondary-button">
            Browse Library
          </button>
        </div>
      </div>
      
      {/* Right carousel section */}
      <div className="hero-carousel">
        <Carousel 
          indicators={true} 
          controls={true} 
          interval={5000}
        >
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://images.unsplash.com/photo-1529148482759-b35b25c5f217?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
              src="https://images.unsplash.com/photo-1650513259622-081281181c32?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Book collection"
            />
            <div className="caption-container">
              <h3>Expert Analysis</h3>
              <p>Data-driven insights for optimal decision making</p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel-img"
              src="https://as2.ftcdn.net/jpg/02/64/75/01/1000_F_264750103_j3pG3e64zgaDj8iaDhbVvSEXyxEUctpB.jpg"
              alt="Reading materials"
            />
            <div className="caption-container">
              <h3>Expert Analysis</h3>
              <p>Data-driven insights for optimal decision making</p>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default ImageSlider;