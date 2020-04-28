import React from 'react';

const Hours = () => {

    return (
        <>
            <div className='footer-hours-wrapper'>
                    
            <h2 className='footer-header'>Hours</h2>
            
            <div className='footer-hours-container'>
                <div className='footer-hours-weekday'>
                    <p>Monday-Friday</p>
                    <p>7:00 AM - 4:30 PM</p>
                </div>
            
                <div className='footer-hours-saturday'>
                    <p>Saturday</p>
                    <p>8:00 AM - 11:00 PM</p>
                </div>
            
                <div className='footer-hours-sunday'>
                    <p>Sunday</p>
                    <p>Closed</p>
                </div>
            
            </div>
        </div>
    </>

    )
}

export default Hours;