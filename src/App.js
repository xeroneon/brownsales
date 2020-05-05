import React from 'react';
import { Route } from 'react-router-dom';

// STYLESHEET
import './App.scss';

// COMPONENTS
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Brands from './components/Brands'
// PAGES
// import Home from './pages/Home';
import Items from './pages/Items';

function App() {
    return (
        <>
            <Header />
            <Nav />
            {/* <Route exact path='/'>
                <Home />
            </Route> */}
            <Route path='/(clearance|stock)'>
                <Items />
            </Route>
            <Brands />
            <Footer />
        </>
    );
}

export default App;
