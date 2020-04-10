import React, { useState, useEffect, useContext, useRef } from 'react';
import { ItemsContext } from '../utils/Context';
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

const Items = () => {
    const headerRef = useRef(null);
    const { contentfulAPI, items, setItems } = useContext(ItemsContext);
    const [category, setCategory] = useState();
    const [showImg, setShowImg] = useState(6);
    const [skipItems, setSkipItems] = useState(0);
    const location = useLocation();
    const pathname = location.pathname.split('/')

    useEffect(() => {
        // Get items from contentful
        contentfulAPI.getEntries({
            content_type: pathname[1] === 'clearance' ? 'clearanceItems' : 'stockItems',
            skip: skipItems})
        .then(entries => {
            setItems(
                () => items ?
                    [...items, ...entries.items]
                :
                    entries.items
            );

            if(location.pathname.split('/')[2]){
                setCategory(pathname[2].split('-').join(' ').toLowerCase());
            }
        });

        return () => {
            setItems();
            setSkipItems(0);
        };

    }, [skipItems]);
    
    useEffect(() => {
        setCategory(pathname[2] ?
            pathname[2].split('-').join(' ').toLowerCase() :
            'all'    
        );
        if(items)
            setShowImg(() => {
                const images = items.filter(item => item.fields.category.toLowerCase() === category)
                return images.length > 3 ? 6 : 3;
            });
    }, [location.pathname, items, category]);

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

            <CategoryCards
            setCurrentCategory={setCategory}
            categories={categories}
            />

            <div
            className={`${pathname[1]}-items-wrapper ${items ? '' : 'loading'}`}
            style={{height: `${showImg * 150}px`}}
            >

                {items ?
                    items
                    .filter(item => category === 'all' ? item : item.fields.category.toLowerCase() === category)
                    // .filter(item => item.fields.quantity > 0)
                    .map((item, ind) => {
                        console.log(ind, showImg)
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
                :
                    <Loading
                    loading={true}
                    size={80}
                    />
                
                }
                
                {items && items.filter(item => item.fields.category.toLowerCase() === category).length < 1 && 
                    <p className={`${pathname[1]}-out`}>
                        All {category !== 'all' ? category : ''} clearance items currently sold out!
                    </p>
                }

                {items && items.filter(item => category ? item.fields.category.toLowerCase() === category : item).length - showImg - 1 > 0 &&
                    <span
                    className={`${pathname[1]}-load`}
                    onClick={() => setShowImg((items.filter(item => item.fields.category.toLowerCase() === category).length - showImg) < 4 ? showImg + 3 :showImg + 6)}
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