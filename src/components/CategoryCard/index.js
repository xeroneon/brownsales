import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import mattress from '../../img/updatedphotos/mattresses.jpg';
import carpet from '../../img/updatedphotos/carpet.jpg';
import lighting from '../../img/updatedphotos/lighting.jpg';
import gAndQ from '../../img/updatedphotos/granite.jpg';
import tile from '../../img/updatedphotos/tile.jpg';
import fans from '../../img/updatedphotos/lighting.jpg'

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