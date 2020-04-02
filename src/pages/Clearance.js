import React, { useState, useEffect, useContext } from 'react';
import { ClearanceItemsContext } from '../Context';
import CategoryCards from '../components/CategoryCard'
import ItemCard from '../components/ItemCards';
import { useLocation } from 'react-router-dom';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';
import { ClipLoader as Loading } from 'react-spinners';

const Clearance = () => {
    const { contentfulAPI, clearanceItems, setClearanceItems } = useContext(ClearanceItemsContext);
    const [currentCategory, setCurrentCategory] = useState();
    const [showImg, setShowImg] = useState(6);
    const location = useLocation();

    useEffect(() => {
        // Get items from contentful
        contentfulAPI.getEntries().then(entries => {
            setClearanceItems(entries.items)
            if(location.pathname.split('/')[2]){
                setCurrentCategory(location.pathname.split('/')[2].split('-').join(' ').toLowerCase());
            }
        });
    }, []);

    useEffect(() => {
        setShowImg(6);
        setCurrentCategory(location.pathname.split('/')[2].split('-').join(' ').toLowerCase());
    }, [location.pathname]);

    return (
        <>
            <div className='home-clearance-header'>
                <h2>Clearance Items In Our Phoenix Warehouse</h2>
                <p>Up to 75% off all clearance items</p>
            </div>

            <CategoryCards
            setCurrentCategory={setCurrentCategory}
            />

            <div
            className='clearance-items-wrapper'
            style={{height: `${showImg * 150}px`}}
            >

                {clearanceItems ?
                    clearanceItems
                    .filter(item => currentCategory ? item.fields.category.toLowerCase() === currentCategory : item)
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
                    />
                
                }
                {clearanceItems && clearanceItems.filter(item => item.fields.category.toLowerCase() === currentCategory).length < 1 && 
                    <p className='clearance-out'>All {currentCategory} clearance items currently sold out!</p>
                }
                {clearanceItems && clearanceItems.filter(item => currentCategory ? item.fields.category.toLowerCase() === currentCategory : item).length > showImg &&
                    <span
                    className='clearance-load'
                    onClick={() => setShowImg(clearanceItems.filter(item => item.fields.category.toLowerCase() === currentCategory).length % 6 < 4 ? showImg + 3 : showImg + 6)}
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