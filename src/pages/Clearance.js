import React, { useState, useEffect, useContext, useRef } from 'react';
import { ClearanceItemsContext } from '../Context';
import CategoryCards from '../components/CategoryCard'
import ItemCard from '../components/ItemCards';
import { useLocation } from 'react-router-dom';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader as Loading } from 'react-spinners';

const Clearance = () => {
    const { contentfulAPI, clearanceItems, setClearanceItems } = useContext(ClearanceItemsContext);
    const [category, setCategory] = useState();
    const [showImg, setShowImg] = useState(6);
    const location = useLocation();
    const clearanceHeaderRef = useRef(null)

    useEffect(() => {
        // Get items from contentful
        contentfulAPI.getEntries().then(entries => {
            setClearanceItems(entries.items)
            if(location.pathname.split('/')[2]){
                setCategory(location.pathname.split('/')[2].split('-').join(' ').toLowerCase());
            }
        });
    }, []);
    
    useEffect(() => {
        setCategory(location.pathname.split('/')[2].split('-').join(' ').toLowerCase());
        if(clearanceItems)
            setShowImg(() => {
                const images = clearanceItems.filter(item => item.fields.category.toLowerCase() === category)
                return images.length > 3 ? 6 : 3;
            });
    }, [location.pathname, clearanceItems, category]);

    useEffect(() => {
        window.scrollTo({top: clearanceHeaderRef.current.offsetTop, behavior: 'smooth'})
    }, [])

    return (
        <>
            <div
            className='home-clearance-header'
            ref={clearanceHeaderRef}
            >
                <h2>Clearance Items In Our Phoenix Warehouse</h2>
                <p>Up to 75% off all clearance items</p>
            </div>

            <CategoryCards
            setCurrentCategory={setCategory}
            />

            <div
            className={`clearance-items-wrapper ${clearanceItems ? '' : 'loading'}`}
            style={{height: `${showImg * 150}px`}}
            
            >

                {clearanceItems ?
                    clearanceItems
                    .filter(item => category ? item.fields.category.toLowerCase() === category : item)
                    .filter(item => item.fields.quantity > 0)
                    .map((item, ind) => (

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
                    ))
                :
                    <Loading
                    loading={true}
                    size={80}
                    />
                
                }
                {clearanceItems && clearanceItems.filter(item => item.fields.category.toLowerCase() === category).length < 1 && 
                    <p className='clearance-out'>All {category} clearance items currently sold out!</p>
                }
                {clearanceItems && clearanceItems.filter(item => category ? item.fields.category.toLowerCase() === category : item).length > showImg &&
                    <span
                    className='clearance-load'
                    onClick={() => setShowImg(clearanceItems.filter(item => item.fields.category.toLowerCase() === category).length % 6 < 4 ? showImg + 3 : showImg + 6)}
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

export default Clearance;