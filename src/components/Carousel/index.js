import React, { useEffect, useState } from 'react';
import apartment from '../../img/apartment-carousel.jpg';
import carpetWarehouse from '../../img/carpet-warehouse.jpg';
import warehouse from '../../img/warehouse.jpeg';
import building from '../../img/building.jpg';

const Carousel = () => {
    const [carouselImg, setCarouselImg] = useState(1);

    useEffect(() => {
        const carouselInterval = setInterval(() => {
            setCarouselImg(prevImg => {
                if(prevImg < 4) return prevImg + 1;
                if(prevImg === 4) return 1;
            });
        }, 7000);

        return () => clearInterval(carouselInterval);
    })

    return (
        <div className='image__carousel'>
            <img src={apartment} alt='apartment' className={`image--one__carousel ${carouselImg === 1 ? 'current' : carouselImg === 2 ? 'inactive' : ''}`}></img>
            <img src={carpetWarehouse} alt='carpet warehouse' className={`image--two__carousel  ${carouselImg === 2 ? 'current' : carouselImg === 3 ? 'inactive' : ''}`}></img>
            <img src={warehouse} alt='warehouse' className={`image--three__carousel  ${carouselImg === 3 ? 'current' : carouselImg === 4 ? 'inactive' : ''}`}></img>
            <img src={building} alt='building' className={`image--four__carousel  ${carouselImg === 4 ? 'current' : carouselImg === 1 ? 'inactive' : ''}`}></img>
        </div>
    )
}

export default Carousel;