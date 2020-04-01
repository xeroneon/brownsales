import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Clearance from './pages/Clearance';
import { ClearanceItemsContext } from './Context';
import contentful from 'contentful';

const contentfulAPI = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_SECRET
})

function App() {
    const [clearanceItems, setClearanceItems] = useState();

    return (
        <>
            <ClearanceItemsContext.Provider value={{ contentfulAPI, clearanceItems, setClearanceItems }}>
                <Nav />
                <Switch>
                    <Route exact path='/'>
                        <Home />
                    </Route>
                    <Route path='/clearance'>
                        <Clearance />
                    </Route>
                </Switch>
                <Footer />
            </ClearanceItemsContext.Provider>
        </>
    );
}

export default App;
