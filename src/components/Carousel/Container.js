import React from 'react';
import Carousel from '.';

const CarouselContainer = ({children, images, timeActive}) => {

    return (
        <div className='carousel__image--container'>
            <Carousel
            images={images}
            timeActive={timeActive}
            />
            {children}
        </div>
    )
}

export default CarouselContainer;