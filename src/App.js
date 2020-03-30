import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Clearance from './pages/Clearance';

function App() {
    return (
        <>
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
        </>
    );
}

export default App;
