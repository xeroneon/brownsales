import React from 'react';
import serta from '../../img/serta.png';
import craftmade from '../../img/craftmade.png';
import ashley from '../../img/ashley.png';
import coaster from '../../img/coaster.png';
import legends from '../../img/legends.jpg';
import legget from '../../img/legget.png';
import uttermost from '../../img/uttermost.png';
import simmons from '../../img/simmons.png'

const brands = [
    {name: 'Serta', src: serta, url: 'https://www.serta.com'},
    {name: 'Craftmade', src: craftmade, url: 'https://www.craftmade.com'},
    {name: 'Ashley', src: ashley, url: 'https://www.ashleyfurniture.com'},
    {name: 'Coaster', src: coaster, url: 'https://www.coasterfurniture.com'},
    {name: 'Legends', src: legends, url: 'https://www.legendsfurniture.com'},
    {name: 'Legget & Platt', src: legget, url: 'https://www.leggett.com'},
    {name: 'Uttermost', src: uttermost, url: 'https://www.uttermost.com'},
    {name: 'Simmons', src: simmons, url: 'https://www.simmons.com'},
];

const Brands = () => {

    return (
        <div className='footer-brands-wrapper'>
            <div className='footer-brands'>        
                <h2 className='footer-brand-header'>All Of Your Favorite Brands</h2>
                {brands.map(brand => (
                    
                    <a
                    className='brand-icon'
                    href={brand.url}
                    target='_blank'
                    key={brand.name}
                    rel='noopener noreferrer'
                    >
                        
                        <img className='footer-brand-image' src={brand.src} alt={brand.name} />

                    </a>
                ))}
            </div>
        </div>
    )
}

export default Brands;