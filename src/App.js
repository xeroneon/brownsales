import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Items from './pages/Items';

function App() {
    return (
        <>
            <Nav />
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='/(clearance|stock)'>
                <Items />
            </Route>
            <Footer />
        </>
    );
}

export default App;
