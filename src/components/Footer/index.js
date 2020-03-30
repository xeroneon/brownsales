import React from 'react';
import { Link } from 'react-router-dom';

const brands = [
    {name: 'Serta', src: '/img/serta.png', url: 'https://www.serta.com'},
    {name: 'Craftmade', src: '/img/craftmade.png', url: 'https://www.craftmade.com'},
    {name: 'Ashley', src: '/img/ashley.png', url: 'https://www.ashleyfurniture.com'},
    {name: 'Coaster', src: '/img/coaster.png', url: 'https://www.coasterfurniture.com'},
    {name: 'Legends', src: '/img/legends.jpg', url: 'https://www.legendsfurniture.com'},
    {name: 'Legget & Platt', src: '/img/legget.png', url: 'https://www.leggett.com'},
    {name: 'Uttermost', src: '/img/uttermost.png', url: 'https://www.uttermost.com'},
    {name: 'Simmons', src: '/img/simmons.png', url: 'https://www.simmons.com'},
]

const Footer = () => {

    return (
        <footer className='footer'>

            <h3 className='footer-heading'>All Of Your Favorite Brands</h3>

            <div className='footer-brands'>
                {brands.map(brand => (
                    <a href={brand.url} target='_blank' key={brand.name} rel='noopener noreferrer'>
                        <img className='footer-brand-image' src={brand.src} alt={brand.name} />
                    </a>
                ))}
            </div>

            <div className='footer-hours-wrapper'>
                <h2>Hours</h2>
                <div className='footer-hours-container'>
                    <div className='footer-hours-weekday'>
                        <p>Monday-Friday</p>
                        <p>7:00 AM - 4:30 PM</p>
                    </div>
                    <div className='footer-hours-weekday'>
                        <p>Saturday</p>
                        <p>8:00 AM - 11:00 PM</p>
                    </div>
                    <div className='footer-hours-Sunday'>
                        <p>Sunday</p>
                        <p>Closed</p>
                    </div>
                </div>
            </div>

            <div className='footer-contact-wrapper'>
                <h2>Contact</h2>
                <div className='footer-contact-container'>
                    <div className='footer-contact-address'>
                        <p>Brown Sales, Inc</p>
                        <p>2626 E Washington St</p>
                        <p>Phoenix, AZ 85034</p>
                    </div>
                    <div className='footer-contact-container'>
                        <a href='tel:6029144579' className='footer-contact-phone'>602-914-4579</a>
                        <a href='mailto:office.brownsales@gmail.com?Subject=Inquiry%20to%20Brown%20Sales,%20referred%20from%20website' className='footer-contact-email'>office.brownsales@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;