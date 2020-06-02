import React, { useEffect, useState } from 'react';
import apartment from '../../img/apartment-carousel.jpg';
import carpetWarehouse from '../../img/carpet-warehouse.jpg';
import warehouse from '../../img/warehouse.jpeg';
import building from '../../img/building.jpg';
import flooring from '../../img/flooring.jpg';

const imgArr = [
    {image:apartment, name: 'apartment'},
    {image: carpetWarehouse, name: 'carpet warehouse'},
    {image: warehouse, name: 'warehouse'},
    {image: building, name: 'building'},
    {image: flooring, name: 'flooring'}
]

const Carousel = () => {
    const [carouselImg, setCarouselImg] = useState(0);

    useEffect(() => {
        const carouselInterval = setInterval(() => {
            setCarouselImg(prevImg => {
                if(prevImg < imgArr.length - 1) return prevImg + 1;
                if(prevImg === imgArr.length - 1) return 0;
            });
        }, 5000);

        return () => clearInterval(carouselInterval);
    })

    return (
        <div className='carousel__image--container'>
            {imgArr.map((img, ind) =>
                <img
                src={img.image}
                alt={img.name}
                className={`carousel__image--one
                    ${carouselImg === ind ? 'current' : carouselImg === ind + 1 ? 'inactive' : ''}
                    ${ind === imgArr.length - 1 && carouselImg === 0 ? 'inactive' : ''}`}
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