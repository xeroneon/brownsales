import React, { useEffect, useState } from "react";

const Carousel = ({ images, timeActive }) => {
  const [carouselImg, setCarouselImg] = useState(0);

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
          className={`carousel__image--one
                ${carouselImg === ind ? "current" : ""}
                ${carouselImg === ind + 1 ? "inactive" : ""}
                ${
                  ind === images.length - 1 && carouselImg === 0
                    ? "inactive"
                    : ""
                }`}
        >
          <img src={img.image} alt={img.name} />
        </div>
      ))}
    </>
  );
};

export default Carousel;
