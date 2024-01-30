import React, { useState, useEffect } from 'react';
import '../styles/ImagePopup.css';

const imageUrls = [
    'https://i.pinimg.com/564x/e3/85/82/e38582ab8b3e9f5819e1f8e8e29c9762.jpg'
  ,'https://i.pinimg.com/564x/35/8f/73/358f733298389b81f06f789a2e4dfdc7.jpg'
  ,'https://i.pinimg.com/564x/1b/54/61/1b5461fc5b5d7e77cee25ffacc37e484.jpg',
  
  // Add more image URLs here
];

const ImagePopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [randomIndex, setRandomIndex] = useState(0);

  useEffect(() => {
    fetchRandomImage();

    // Show the pop-up after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, []);

  const fetchRandomImage = () => {
    const newIndex = Math.floor(Math.random() * imageUrls.length);
    setRandomIndex(newIndex);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  const handleNext = () => {
    fetchRandomImage();
    setShowPopup(true);
  };

  return (
    <div className={`image-popup ${showPopup ? 'show' : ''}`}>
      <img src={imageUrls[randomIndex]} alt="Popup Image" />
      <button onClick={handleNext}>Next</button>
      <span className="close" onClick={handleClose}>&times;</span>
    </div>
  );
};

export default ImagePopup;
