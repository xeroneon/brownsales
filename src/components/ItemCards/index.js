import React from 'react';
import { useLocation } from 'react-router-dom';

const ItemCard = ({name, imageLink, price, last}) => {
    const location = useLocation();
    const pathname = location.pathname.split('/')

    return (
        <div className={`${pathname[1]}-item`} ref={last}>
            <img src={imageLink} alt={name} />
            <div className='item-desc'>
                <h4>{name}</h4>
                <div>
                    <p>${price}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;