import React from 'react';
import Hours from './Hours';
import Contact from './Contact';
import facebook from '../../img/facebook.png'

const Footer = () => {

    return (
        <footer>

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
                        <img src={facebook} alt='Facebook' />
                    </a>
                    <a href='/#' >Privacy Policy</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;