import React from 'react';
import { useLocation } from 'react-router-dom';

const categories = [
    {name: 'Mattresses', src: '/img/mattress-image.png'},
    {name: 'Carpet', src: '/img/carpet-image.png'},
    {name: 'Tile', src: '/img/tile-image.png'},
    {name: 'Granite & Quartz', src: '/img/granite-image.png'},
    {name: 'Ceiling Fans & Lighting', src: '/img/lighting-image.png'},
    {name: 'Furniture', src: '/img/furniture-image.png'}
];

const CategoryCards = ({setCategory, onClick}) => {
    const location = useLocation();

    return (
        <div className={`clearance-categories ${location.pathname.split('/')[1] === 'clearance' ? 'clearance' : ''}`}>
            {categories.map((cat, ind) => (
                <button className='category-card' onClick={onClick ? () => setCategory(cat.name) : null} key={ind}>
                    <img className='category-link' src={cat.src} alt={`${cat.name} Clearance Items`} />
                </button>
            ))}
        </div>

    )
}

export default CategoryCards;