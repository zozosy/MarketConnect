import React from 'react';
import '../App.css';

const Browse = () => {
  const Browseimg = [
    { src:  'browse-1.avif', alt: 'Device 1', width: 55,  height:  55},
    { src:  'browse-1.avif', alt: 'Device 1', width: 55,  height:  55},
    { src:  'browse-1.avif', alt: 'Device 1', width: 55,  height:  55},
    { src:  'browse-1.avif', alt: 'Device 1', width: 55,  height:  55},

  ];

  return (
    <div className="image-grid">
      {Browseimg.map((imageUrl, index) => (
        <img key={index} src={imageUrl} alt={`Image ${index + 1}`} className="grid-item" />
      ))}
    </div>
  );
};

export default Browse;
