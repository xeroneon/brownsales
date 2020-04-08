import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const CategoryCards = ({categories}) => {
    const location = useLocation();
    const path = location.pathname.split('/');

    return (
        <div className={`clearance-categories ${path[1] === 'clearance' ? 'clearance' : ''}`}>
            {categories.map((cat, ind) => (
                <Link
                to={`/${path[1] === 'stock' ? 'stock' : 'clearance'}/${cat.name.toLowerCase().split(' ').join('-')}`}
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