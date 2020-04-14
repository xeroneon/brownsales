import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import mattress from '../../img/mattress-image.png';
import carpet from '../../img/carpet-image.png';
import lighting from '../../img/lighting-image.png';
import gAndQ from '../../img/granite-image.png';
import tile from '../../img/tile-image.png';
import fans from '../../img/fan.jpg'

const CategoryCards = ({categories}) => {
    const location = useLocation();
    const path = location.pathname.split('/');

    return (
        <div className={`${path[1]}-categories ${path[1]}`}>
            {categories.map((cat, ind) => (
                <Link
                to={`/${path[1] === 'stock' ? 'stock' : 'clearance'}/${cat.name.split(' ').join('-')}`}
                className='category-card'
                key={ind}
                >
                    <img
                    className='category-link'
                    src={
                        cat.name === 'Mattress' ? mattress :
                        cat.name === 'Tile' ? tile :
                        cat.name === 'Carpet' ? carpet :
                        cat.name === 'Lighting' ? lighting :
                        cat.name === 'Ceiling Fans' ? fans :
                        gAndQ
                    }
                    alt={`${cat.name} Clearance Items`}
                    />
                </Link>
            ))}
        </div>

    )
}

export default CategoryCards;