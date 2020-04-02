import React from 'react';

const ItemCard = ({sku, name, imageLink, price, quantity, orgPrice, index, showImg}) => {

    return (
        <div className='clearance-item'>
            <img src={index < showImg ? imageLink : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mOMrgcAATsA3BT31OAAAAAASUVORK5CYII='} alt={name} />
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