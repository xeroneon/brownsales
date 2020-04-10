import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/brown-sales-logo.png';

const Nav = () => {

    return (
        <>
            <nav className='nav'>
                <div>
                    <Link to='/'>
                        <img src={logo} alt='Brown Sales Logo' />
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Nav;