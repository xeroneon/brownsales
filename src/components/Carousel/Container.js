import React from 'react';
import Carousel from '.';

const CarouselContainer = ({children, images}) => {

    return (
        <div className='carousel__image--container'>
            <Carousel
            images={images}
            />
            {children}
        </div>
    )
}

export default CarouselContainer;