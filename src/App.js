import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Clearance from './pages/Clearance';
import { ClearanceItemsContext } from './Context';
const contentful = require('contentful');

const contentfulAPI = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_SECRET
})

function App() {
    const [clearanceItems, setClearanceItems] = useState();

    return (
        <>
                <Nav />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <ClearanceItemsContext.Provider value={{ contentfulAPI, clearanceItems, setClearanceItems }}>
                        <Route path='/clearance'>
                            <Clearance />
                        </Route>
                    </ClearanceItemsContext.Provider>
                </Switch>
                <Footer />
        </>
    );
}

export default App;
