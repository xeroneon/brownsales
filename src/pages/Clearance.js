import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const categories = [
    {name: 'Mattresses', src: '/img/mattress-image.png', url: 'mattress'},
    {name: 'Carpet', src: '/img/carpet-image.png', url: 'carpet'},
    {name: 'Tile', src: '/img/tile-image.png', url: 'tile'},
    {name: 'Granite & Quartz', src: '/img/granite-image.png', url: 'granite-quartz'},
    {name: 'Lighting', src: '/img/lighting-image.png', url: 'lighting'}
];

const Clearance = () => {

    const [items, setItems] = useState([
        {name: 'lamp', category: 'Lighting', stock: 35, src: '/img/lighting-2.jpg', orgPrc: 46.99, price: 30.57, sku: 'L1234'},
        {name: 'lamp', category: 'Lighting', stock: 15, src: '/img/lighting-2.jpg', orgPrc: 46.99, price: 30.57, sku: 'L124'},
        {name: 'lamp', category: 'Lighting', stock: 5, src: '/img/lighting-2.jpg', orgPrc: 46.99, price: 30.57, sku: 'L123'},
        {name: 'lamp', category: 'Lighting', stock: 29, src: '/img/lighting-2.jpg', orgPrc: 46.99, price: 30.57, sku: 'L134'},
    ]);
    const location = useLocation();

    // useEffect(() => {
    //     // Get items from db if using db
    //     fetch('')
    // }, []);

    return (
        <div className='clearance-wrapper'>
            
            <div>
                <h2>Clearance Items In Our Phoenix Warehouse</h2>
                <p>Up to 75% off all clearance items</p>
            </div>

            <div className='clearance-categories'>
                {categories.map((cat, ind) => (
                    <Link to={`/clearance/${cat.url}`} key={ind}>
                        <img src={cat.src} alt={`${cat.name} Clearance Items`} />
                    </Link>
                ))}
            </div>

            <div className='clearance-items'>
                {items.filter(item => item.category.toLowerCase() === location.pathname.split('clearance/')[1].toLowerCase()).map(item => (
                    <div className='clearance-item' key={item.sku}>
                        <img src={item.src} alt={item.name} />
                        <div className='clearance-item-desc'>
                            <h4>{item.name}</h4>
                            <p className='item-sku'>{`ITEM# - ${item.sku}`}</p>
                            <span className='item-org-pice'>{item.orgPrice}</span>
                            <div>
                                <p>{item.price}</p>
                                <p>{item.stock > 30 ? 'More than 30 in stock' : `${item.stock} in stock`}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Clearance;