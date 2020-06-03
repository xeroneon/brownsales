import React, { useEffect, useState } from 'react';

const Carousel = ({images, timeActive}) => {
    const [carouselImg, setCarouselImg] = useState(0);

    useEffect(() => {
        const carouselInterval = setInterval(() => {
            setCarouselImg(prevImg => {
                if(prevImg < images.length - 1) return prevImg + 1;
                if(prevImg === images.length - 1) return 0;
            });
        }, timeActive);

        return () => clearInterval(carouselInterval);
    })

    return (
        <>
            {images.map((img, ind) =>
                <img
                src={img.image}
                alt={img.name}
                className={`carousel__image
                    ${carouselImg === ind ? 'current' : ''}
                    ${carouselImg === ind + 1 ? 'inactive' : ''}
                    ${ind === images.length - 1 && carouselImg === 0 ? 'inactive' : ''}`}
                />
            )}
        </>
    )
}

export default Carousel;