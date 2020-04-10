import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Items from './pages/Items';
import { ItemsContext } from './utils/Context';
const contentful = require('contentful');

const contentfulAPI = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_SECRET
})

function App() {
    const [items, setItems] = useState();

    return (
        <>
            <Nav />
            <Route exact path='/'>
                <Home />
            </Route>
            <ItemsContext.Provider value={{ contentfulAPI, items, setItems }}>
                <Route path='/(clearance|stock)'>
                    <Items />
                </Route>
            </ItemsContext.Provider>
            <Footer />
        </>
    );
}

export default App;
