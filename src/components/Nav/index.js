import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {

    return (
        <>
            <nav className='nav'>
                <Link to='/'>
                    <img src='/img/brown-sales-logo.png' alt='Brown Sales Logo' />
                </Link>
            </nav>
        </>
    )
}

export default Nav;