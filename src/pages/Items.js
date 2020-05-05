import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader as Loading } from 'react-spinners';
import CategoryCards from '../components/CategoryCard'
import ItemCard from '../components/ItemCards';

const categories = [
    {name: 'Mattress'},
    {name: 'Carpet'},
    {name: 'Tile'},
    {name: 'Granite & Quartz'},
    {name: 'Lighting'}, 
    {name: 'Ceiling Fans'}
];

const Items = ({ contentfulAPI }) => {
    const headerRef = useRef(null);
    const [items, setItems] = useState();
    const [category, setCategory] = useState();
    const [showImg, setShowImg] = useState(6);
    const [skipItems, setSkipItems] = useState(0);
    const [totalItems, setTotalItems] = useState(1);
    const location = useLocation();
    const pathname = location.pathname.split('/')
    
    useEffect(() => {
        setCategory(pathname[2] ?
            pathname[2].split('-').join(' ') :
            'all'    
        );
    }, [pathname, category]);

    useEffect(() => {
        // Get items from contentful based on the path
        if(skipItems < totalItems)
            contentfulAPI.getEntries({
                content_type: pathname[1] === 'clearance' ? 'clearanceItems' : 'stockItems',
                'fields.category': pathname[2] ? pathname[2].split('-').join(' ') : '',
                skip: skipItems
            })
            .then(entries => {
                setTotalItems(entries.total !== 0 ? entries.total : 1);
                setItems(prevItems => {
                    if(entries.total === 0) return null;
                    return prevItems && prevItems[0].fields.category === pathname[2] ? [...prevItems, ...entries.items] : entries.items;
                });
            });
    }, [skipItems, location.pathname]);

    useEffect(() => {
        window.scrollTo({top: headerRef.current.offsetTop, behavior: 'smooth'})
    }, [])

    return (
        <>
            {pathname[1] === 'clearance' ?
                <div
                className='home-clearance-header'
                ref={headerRef}
                >
                    <h2>Clearance Items In Our Phoenix Warehouse</h2>
                    <p>Up to 75% off all clearance items</p>
                </div>
            :
                <div
                className='home-stock-header'
                ref={headerRef}
                >
                    <h2>Items available in house or to order</h2>
                </div>
            }

            <CategoryCards categories={categories} />

            <div
            className={`${pathname[1]}-items-wrapper ${items ? '' : 'loading'}`}
            style={{height: `${showImg * 150}px`}}
            >

                {items ?
                    items
                    // .filter(item => item.fields.quantity > 0)
                    .map((item, ind) => {

                        if(ind >= showImg) return null;

                        return (
                            <ItemCard
                            key={ind}
                            price={item.fields.price}
                            name={item.fields.name}
                            desc={item.fields.description}
                            sku={item.fields.sku}
                            quantity={item.fields.quantity}
                            imageLink={item.fields.imageLink}
                            orgPrice={item.fields.orgPrice}
                            index={ind}
                            showImg={showImg}
                            />
                        )
                    })
                : totalItems !== 1 &&
                    <Loading
                    loading={true}
                    size={80}
                    />
                
                }
                
                {totalItems === 1 && pathname[1] === 'clearance' && 
                    <p className={`${pathname[1]}-out`}>
                        All {category !== 'all' ? category : ''} clearance items currently sold out!
                    </p>
                }

                {items && items.length - showImg > 0 &&
                    <span
                    className={`${pathname[1]}-load`}
                    onClick={() => {
                        setSkipItems(prevSkip => 
                            prevSkip < totalItems
                            && items.length - 6 <= showImg
                            && totalItems > 100 ? prevSkip + 100 : prevSkip
                        );
                        setShowImg(prevShown => (items.length - prevShown) < 4 ? prevShown + 3 : prevShown + 6);
                    }}
                    >
                        <span>Load More</span>
                        <FAIcon
                        icon={faAngleDoubleDown}
                        />
                    </span>
                }
            </div>
        </>
    )
}

export default Items;