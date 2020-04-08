import React from 'react';
import CategoryCard from '../components/CategoryCard';
import { Link } from 'react-router-dom';

const categories = [
    {name: 'Mattress', src: '/img/mattress-image.png'},
    {name: 'Carpet', src: '/img/carpet-image.png'},
    {name: 'Tile', src: '/img/tile-image.png'},
    {name: 'Granite & Quartz', src: '/img/granite-image.png'},
    {name: 'Lighting', src: '/img/lighting-image.png'},
    {name: 'Ceiling Fans', src: '/img/fan-image.png'}
];

const Home = () => {

    return (
        <>

            <div>
                <Link to='/stock'>
                    <p>Come see what we carry</p>
                </Link>
            </div>

            <div className='home-clearance-header'>
                <h2>Clearance Items In Our Phoenix Warehouse</h2>
                <p>Up to 75% off all clearance items</p>
            </div>

            <CategoryCard
            categories={categories}
            />
        </>
    )
}

export default Home;