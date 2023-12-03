import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import img2 from './imgs/gallery-05.jpg'
import img3 from './imgs/gallery-06.png'
import img4 from './imgs/gallery-02.png'
import img5 from './imgs/gallery-01.png'
import img6 from './imgs/gallery-03.jpg'
const ImageGallery = () => {
    const images = [img2,img3,img4,img5,img6];
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
  };

  return (
    <div style={{ width: '95%', margin: 'auto', overflow: 'hidden' }}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <img
              src={image}
              alt={`Image ${index}`}
              style={{ width: '100%', height: 'auto' }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageGallery;
