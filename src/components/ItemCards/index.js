import React from 'react';

const ItemCard = ({sku, name, imageLink, price, quantity, orgPrice}) => {

    return (
        <div className='clearance-item'>
            <img src={imageLink} alt={name} />
            <div className='clearance-item-desc'>
                <h4>{name}</h4>
                {sku && <p className='item-sku'>{`ITEM# - ${sku}`}</p>}
                {orgPrice && <span className='item-org-pice'>{orgPrice}</span>}
                <div>
                    <p>{price}</p>
                    <p>{`${quantity} in stock`}</p>
                </div>
            </div>
        </div>
    )
}

export default ItemCard;