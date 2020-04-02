import React from 'react';

const Contact = () => {

    return (
        <>
            <div className='footer-contact-wrapper'>
                
                <h2>Contact</h2>
                
                <div className='footer-contact-container'>
                    
                    <div className='footer-contact-address'>
                        <p>Brown Sales, Inc</p>
                        <p>2626 E Washington St</p>
                        <p>Phoenix, AZ 85034</p>
                    </div>

                    <div className='footer-contacts'>
                        <a href='tel:6029144579' className='footer-contact-phone'>602-914-4579</a>
                        <a href='mailto:office.brownsales@gmail.com?Subject=Inquiry%20to%20Brown%20Sales,%20referred%20from%20website' className='footer-contact-email'>office.brownsales@gmail.com</a>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Contact;