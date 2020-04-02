import React from 'react';

const brands = [
    {name: 'Serta', src: '/img/serta.png', url: 'https://www.serta.com'},
    {name: 'Craftmade', src: '/img/craftmade.png', url: 'https://www.craftmade.com'},
    {name: 'Ashley', src: '/img/ashley.png', url: 'https://www.ashleyfurniture.com'},
    {name: 'Coaster', src: '/img/coaster.png', url: 'https://www.coasterfurniture.com'},
    {name: 'Legends', src: '/img/legends.jpg', url: 'https://www.legendsfurniture.com'},
    {name: 'Legget & Platt', src: '/img/legget.png', url: 'https://www.leggett.com'},
    {name: 'Uttermost', src: '/img/uttermost.png', url: 'https://www.uttermost.com'},
    {name: 'Simmons', src: '/img/simmons.png', url: 'https://www.simmons.com'},
];

const Brands = () => {

    return (
        <>
            <h2>All Of Your Favorite Brands</h2>
            <div className='footer-brands'>        
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
        </>
    )
}

export default Brands;