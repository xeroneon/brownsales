import React, { useState, useEffect, useContext } from 'react';
import { ClearanceItemsContext } from '../Context';
import CategoryCards from '../components/CategoryCard'
import ItemCard from '../components/ItemCards';

const Clearance = () => {
    const { contentfulAPI, clearanceItems, setClearanceItems } = useContext(ClearanceItemsContext);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        // Get items from contentful
        contentfulAPI.getEntries().then(entries => setClearanceItems(entries.items));
    }, []);

    return (
        <>

            <div className='home-clearance-header'>
                <h2>Clearance Items In Our Phoenix Warehouse</h2>
                <p>Up to 75% off all clearance items</p>
            </div>

            <CategoryCards
            setCategory={setCategory}
            onClick
            />

            <div className='clearance-items-wrapper'>

                {clearanceItems &&
                    clearanceItems
                    .filter(item => category === 'all' ? item : item.fields.category.toLowerCase() === category.toLowerCase())
                    .map(item => (

                        <ItemCard
                        key={item.fields.sku}
                        price={item.fields.price}
                        name={item.fields.name}
                        desc={item.fields.description}
                        sku={item.fields.sku}
                        quantity={item.fields.quantity}
                        imageLink={item.fields.imageLink}
                        orgPrice={item.fields.orgPrice}
                        />
                    ))
                    // :
                    // null
                }
            </div>
        </>
    )
}

export default Clearance;