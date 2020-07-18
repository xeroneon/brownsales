import React from 'react';
import Carousel from '.';

const CarouselContainer = ({children, images, timeActive, width, height}) => {

    return (
        <div className='carousel__image--container' style={{width: width, height: height}}>
            <Carousel
            images={images}
            timeActive={timeActive}
            width={width}
            />
            {children}
        </div>
    )
}

export default CarouselContainer;