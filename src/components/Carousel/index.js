import React, { useEffect, useState } from 'react';

const Carousel = ({images}) => {
    const [carouselImg, setCarouselImg] = useState(0);

    useEffect(() => {
        const carouselInterval = setInterval(() => {
            setCarouselImg(prevImg => {
                if(prevImg < images.length - 1) return prevImg + 1;
                if(prevImg === images.length - 1) return 0;
            });
        }, 5000);

        return () => clearInterval(carouselInterval);
    })

    return (
        <div className='carousel__image--container'>
            {images.map((img, ind) =>
                <img
                src={img.image}
                alt={img.name}
                className={`carousel__image--one
                    ${carouselImg === ind ? 'current' : carouselImg === ind + 1 ? 'inactive' : ''}
                    ${ind === images.length - 1 && carouselImg === 0 ? 'inactive' : ''}`}
                />
            )}

            <div className='carousel__heading--container'>
                <h4 className='carousel__heading'> Brown Sales Flooring specializes in replacement flooring for the multi-family housing industry in the Phoenix Area</h4>
                <a href='https://www.brownsalesaz.com' rel='noopener noreferrer' target='_blank'>brownsalesaz.com</a>
            </div>
        </div>
    )
}

export default Carousel;