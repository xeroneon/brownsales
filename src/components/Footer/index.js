import React from 'react';
import Brands from './Brands';
import Hours from './Hours';
import Contact from './Contact';

const Footer = () => {

    return (
        <>
        
            <Brands />

            <footer>

                <Hours />
                <Contact />

                <div className='footer'>
                    <a href='/#' >Privacy Policy</a>
                    <p>&copy; 2019 Brown Sales, Inc.  All Rights Reserved</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;