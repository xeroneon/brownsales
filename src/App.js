import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Clearance from './pages/Clearance';
import Stock from './pages/Stock';
import { ClearanceItemsContext, StockItemsContext } from './Context';
const contentful = require('contentful');

const contentfulAPI = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_SECRET
})

function App() {
    const [clearanceItems, setClearanceItems] = useState();
    const [stockItems, setStockItems] = useState();

    return (
        <>
            <Nav />
            <Route exact path='/'>
                <Home />
            </Route>
            <Switch>
                <Route path='/clearance'>
                    <ClearanceItemsContext.Provider value={{ contentfulAPI, clearanceItems, setClearanceItems }}>
                        <Clearance />
                    </ClearanceItemsContext.Provider>
                </Route>
                <Route path='/stock'>
                    <StockItemsContext.Provider value={{contentfulAPI, stockItems, setStockItems}}>
                        <Stock />
                    </StockItemsContext.Provider>
                </Route>
            </Switch>
            <Footer />
        </>
    );
}

export default App;
