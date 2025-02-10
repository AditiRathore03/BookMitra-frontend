import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Import your images
import Image1 from '../assets/images/slider1.jpg';
import Image2 from '../assets/images/slider2.jpg';
import Image3 from '../assets/images/slider3.jpg';
import Image4 from '../assets/images/lib1.jpg';

const ImageSlider = () => {
  const images = [Image1, Image2, Image3, Image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="slider-container" style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden' }}>
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: index === currentImageIndex ? '0%' : index < currentImageIndex ? '-100%' : '100%',
            opacity: index === currentImageIndex ? 1 : 0,
            transition: 'left 0.5s ease-in-out, opacity 0.5s ease-in-out',
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
      ))}

      <div className="slider-controls" style={{ position: 'absolute', top: '50%', left: 0, right: 0, transform: 'translateY(-50%)', display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        <button onClick={prevImage} style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}>
          <ChevronLeft size={24} color="#333" />
        </button>
        <button onClick={nextImage} style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none', padding: '10px', borderRadius: '50%', cursor: 'pointer' }}>
          <ChevronRight size={24} color="#333" />
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;