import React from 'react';
// import CategoryCard from '../components/CategoryCard';
import { Link } from 'react-router-dom';

// const categories = [
//     {name: 'Mattress'},
//     {name: 'Carpet'},
//     {name: 'Tile'},
//     {name: 'Granite & Quartz'},
//     {name: 'Lighting'},
//     // {name: 'Ceiling Fans', src: fans}
// ];

const Home = () => {

    return (
        <>

            <div>
                <Link to='/stock'>
                    <p>Come see what we carry</p>
                </Link>
            </div>

            <div className='home-clearance-header'>
                <h2>Special Buy Items In Our Phoenix Warehouse</h2>
                <p>Up to 75% off all these items!</p>
            </div>

            <Link to='/clearance'>
                <p>Clearance Items</p>
            </Link>
        </>
    )
}

export default Home;