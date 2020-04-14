import React from 'react';
import { useLocation } from 'react-router-dom';

const ItemCard = ({sku, name, imageLink, price, quantity, orgPrice}) => {
    const location = useLocation();
    const pathname = location.pathname.split('/')

    return (
        <div className={`${pathname[1]}-item`}>
            <img src={imageLink} alt={name} />
            <div className='item-desc'>
                <h4>{name}</h4>
                {sku && <p className='item-sku'>ITEM# - {sku}</p>}
                {orgPrice && <span className='item-org-pice'>${orgPrice}</span>}
                <div>
                    <p>${price}</p>
                    <p>{quantity} in stock</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;