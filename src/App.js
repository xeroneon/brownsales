import React from 'react';
import { Route } from 'react-router-dom';

// STYLESHEET
import './App.scss';

// COMPONENTS
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';

// PAGES
import Home from './pages/Home';
import Items from './pages/Items';

// API
const contentful = require('contentful');
const contentfulAPI = contentful.createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_SECRET
})

function App() {
    return (
        <>
            <Header />
            {/* <Nav /> */}
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
