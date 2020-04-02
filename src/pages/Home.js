import React from 'react';
import CategoryCard from '../components/CategoryCard';

const Home = () => {

    return (
        <>
            <div className='home-clearance-header'>
                <h2>Clearance Items In Our Phoenix Warehouse</h2>
                <p>Up to 75% off all clearance items</p>
            </div>

            <CategoryCard />
        </>
    )
}

export default Home;