import React, { useContext, useEffect } from 'react';
import CategoryCards from '../components/CategoryCard';
import {StockItemsContext} from '../Context';

const categories = [
    {name: 'Lighting', src: ''},
    {name: 'Ceiling Fans', src: ''},
    {name: 'Tile', src: ''},
    {name: 'Furniture', src: ''},
    {name: 'Granite & Quartz', src: ''},
    {name: 'Carpet', src: ''}
]

const Stock = () => {
    const {contentfulAPI, stockItems, setStockItems} = useContext(StockItemsContext);

    useEffect(() => {
        contentfulAPI.getEntries().then(entries => {
            setStockItems(entries.items.filter(entry => entry.sys.contentType.sys.id === 'stockItems'))
        })
    }, [])

    return (
        <>
            <div className='hey'>
                some stuff
                <CategoryCards
                categories={categories}
                />
            </div>
        </>
    )
}

export default Stock;