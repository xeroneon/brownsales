import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Items from './pages/Items';
const contentful = require('contentful');

const contentfulAPI = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_SECRET
})

function App() {
    return (
        <>
            <Nav />
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/(clearance|stock)'>
                <Items contentfulAPI={contentfulAPI} />
            </Route>
            <Footer />
        </>
    );
}

export default App;
