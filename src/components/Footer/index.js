import React from 'react';
import { Link } from 'react-router-dom';
import Brands from './Brands';
import Hours from './Hours';
import Contact from './Contact';

const Footer = () => {

    return (
        <footer>

            <Brands />
            <Hours />
            <Contact />

            <div className='footer'>
                <p>&copy; 2019 Brown Sales, Inc.  All Rights Reserved</p>
                <div className='footer-links'>
                    <a
                    href='https://www.facebook.com/pages/Brown-Sales/162169013801027'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        <img src='/img/facebook.png' alt='Facebook' />
                    </a>
                    <a href='/#' >Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;