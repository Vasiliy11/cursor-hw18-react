import React from 'react';
import './gallery.scss';

import BG from '../../assets/images/bg.jpg';

const Gallery = () => {
  return (
    <div className="gallery">
      <div className="gallery-img__wrapper">
        <img src={BG} alt="img" />
      </div>
      <div className="gallery-img__wrapper">
        <img src={BG} alt="img" />
      </div>
      <div className="gallery-img__wrapper">
        <img src={BG} alt="img" />
      </div>
    </div>
  );
};

export default Gallery;
