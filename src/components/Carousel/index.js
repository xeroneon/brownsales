import React, { useEffect, useState } from "react";
import {Link, useLocation} from 'react-router-dom';

const Carousel = ({ images, timeActive }) => {
  const [carouselImg, setCarouselImg] = useState(0);
  const [prevImg, setprevImg] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCarouselImg((prevImg) => {
        if (prevImg < images.length - 1) return prevImg + 1;
        if (prevImg === images.length - 1) return 0;
      });
    }, timeActive);

    return () => clearInterval(carouselInterval);
  });

  return (
    <>
      {images.map((img, ind) => (
        <div
          className={`carousel__image
                ${carouselImg === ind ? "current" : ""}
                ${carouselImg === ind + 1 ? "inactive" : ""}
                ${
                  ind === images.length - 1 && carouselImg === 0
                    ? "inactive"
                    : ""
                }`}
            key={ind}
        >
          <img src={img.image} alt={img.name} />
          {img.info &&
            <div className='carousel__heading--container'>
                <div className='carousel__headings'>
                    <h2>{img.name.substr(0,1).toUpperCase() + img.name.substr(1)}</h2>
                    <h4 className='carousel__heading carousel__info'>{img.info}</h4>
                </div>
                <Link
                to={`/special-buy/${img.name}`}
                // className='link__special--buy'
                >
                    Shop now
                </Link>
            </div>
          }
        </div>
      ))}
      {/* {location.pathname === '/' && 
      <>
          <button
          className='carousel__previous'
          onClick={() => setCarouselImg(img => img === 0 ? images.length - 1 : img - 1)}
          >
              {'<'}
          </button>
          <button
          className='carousel__next'
          onClick={() => setCarouselImg(img => img === images.length - 1 ? 0 : img + 1)}
          >
              {'>'}
          </button>
      </>
      } */}
    </>
  );
};

export default Carousel;
