import React, { useState, useEffect, useContext } from 'react';
import { ClearanceItemsContext } from '../Context';
import CategoryCards from '../components/CategoryCard'

const Clearance = () => {
    const { contentfulAPI, clearanceItems, setClearanceItems } = useContext(ClearanceItemsContext);
    const [category, setCategory] = useState('all');

    useEffect(() => {
        // Get items from contentful
        contentfulAPI.getEntries().then(entries => setClearanceItems(entries.items));
    }, []);

    return (
        <>
            <CategoryCards
            setCategory={setCategory}
            onClick
            />

            <div className='clearance-items-wrapper'>

                <div className='clearance-items'>
                    {clearanceItems && 
                        clearanceItems.filter(item =>
                            category === 'all' ? item : item.fields.category.toLowerCase() === category.toLowerCase())
                        .map(item => (
                            <div className='clearance-item' key={item.fields.sku}>
                                <img src={item.fields.imageLink} alt={item.fields.name} />
                                <div className='clearance-item-desc'>
                                    <h4>{item.fields.name}</h4>
                                    <p className='item-sku'>{`ITEM# - ${item.fields.sku}`}</p>
                                    <span className='item-org-pice'>{item.fields.orgPrice}</span>
                                    <div>
                                        <p>{item.fields.price}</p>
                                        <p>{`${item.fields.quantity} in stock`}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        // :
                        // null
                    }
                </div>
            </div>
        </>
    )
}

export default Clearance;