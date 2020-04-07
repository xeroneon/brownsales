import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const categories = [
    {name: 'Mattress', src: '/img/mattress-image.png'},
    {name: 'Carpet', src: '/img/carpet-image.png'},
    {name: 'Tile', src: '/img/tile-image.png'},
    {name: 'Granite & Quartz', src: '/img/granite-image.png'},
    {name: 'Lighting', src: '/img/lighting-image.png'},
    {name: 'Ceiling Fans', src: '/img/fan-image.png'}
];

const CategoryCards = () => {
    const location = useLocation();

    return (
        <div className={`clearance-categories ${location.pathname.split('/')[1] === 'clearance' ? 'clearance' : ''}`}>
            {categories.map((cat, ind) => (
                <Link
                to={`/clearance/${cat.name.toLowerCase().split(' ').join('-')}`}
                className='category-card'
                key={ind}
                >
                    <img
                    className='category-link'
                    src={cat.src}
                    alt={`${cat.name} Clearance Items`}
                    />
                </Link>
            ))}
        </div>

    )
}

export default CategoryCards;