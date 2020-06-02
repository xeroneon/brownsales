import React, { useState } from 'react';
import { Route, useLocation } from 'react-router-dom';

// CAROUSEL IMAGES
import apartment from './img/apartment-carousel.jpg';
import carpetWarehouse from './img/carpet-warehouse.jpg';
import warehouse from './img/warehouse.jpeg';
import building from './img/building.jpg';
import flooring from './img/flooring.jpg';


// STYLESHEET
import './App.scss';

// COMPONENTS
import Header from './components/Header'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Brands from './components/Brands'
import Form from './components/Form';
import Modal from './components/Modal';
import Banner from './components/Banner';
// PAGES
// import Home from './pages/Home';
import Items from './pages/Items';

import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon as FAIcon } from "@fortawesome/react-fontawesome"
import CarouselContainer from './components/Carousel/Container';

// CONTENTFUL API
const contentful = require("contentful");
const contentfulAPI = contentful.createClient({
  space: process.env.REACT_APP_SPACE,
  accessToken: process.env.REACT_APP_SECRET,
});

const imgArr = [
    {image:apartment, name: 'apartment'},
    {image: carpetWarehouse, name: 'carpet warehouse'},
    {image: warehouse, name: 'warehouse'},
    {image: building, name: 'building'},
    {image: flooring, name: 'flooring'}
]

function App() {
    const [formOpen, toggleForm] = useState(false);
    const location = useLocation();

    return (
        <>
            <Header />
            <Nav />
            <Banner
            contentfulAPI={contentfulAPI}
            />

            <Route path='/'>
                {formOpen &&
                    <Modal
                    setModal={toggleForm}
                    >
                        <Form
                        formOpen={formOpen}
                        toggleForm={toggleForm}
                        />
                    </Modal>
                }
                {location.pathname === '/' &&
                    <CarouselContainer
                    images={imgArr}
                    timeActive={7000}
                    >
                        <div className='carousel__heading--container'>
                            <h4 className='carousel__heading'> Brown Sales Flooring specializes in replacement flooring for the multi-family housing industry in the Phoenix Area</h4>
                            <a href='https://www.brownsalesaz.com' rel='noopener noreferrer' target='_blank'>brownsalesaz.com</a>
                        </div>
                    </CarouselContainer>
                    
                }
            </Route>
            <Route path='/special-buy'>
                <Items
                contentfulAPI={contentfulAPI}
                formOpen={formOpen}
                />
            </Route>
            <Brands />
            <Footer />

            {/*  */}

            <FormToggle toggleForm={e => toggleForm(!formOpen)}/>
        </>
    );
}

function FormToggle({toggleForm}) {
    return (
        <div className="toggle" onClick={toggleForm}>
            <p className="toggle--text">contact us</p>
            <FAIcon icon={faPaperPlane} className="toggle--icon"/>
        </div>
    )
}

export default App;
