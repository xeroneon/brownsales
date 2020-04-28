import React from 'react';
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon as FAIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {

    return (
        <>
            <div className='footer-contact-wrapper'>
                
                <h2>Contact</h2>
                
                <div className='footer-contact-container'>
                    
                    <div>
                        <label htmlFor='phone'>Phone</label>
                        <a name='phone' href='tel:6029144579' className='footer-contact-phone'>602-914-4579</a>
                    </div>
    
                    <div>
                        <label htmlFor='email'>Email</label>
                        <a name='email' href='mailto:office.brownsales@gmail.com?Subject=Inquiry%20to%20Brown%20Sales,%20referred%20from%20website' className='footer-contact-email'>office.brownsales@gmail.com</a>
                    </div>
    
                    <div>
                        <label htmlFor='address'>Address</label>
                        <div name='address'>
                            <p>Brown Sales, Inc</p>
                            <p>2626 E Washington St</p>
                            <p>Phoenix, AZ 85034</p>
                        </div>
                    </div>
                        <a
                            href='https://www.facebook.com/pages/Brown-Sales/162169013801027'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='footer-facebook'
                            >
                                
                                <FAIcon
                                icon={faCircle}
                                color="#ffffff"
                                className='footer-facebook-circle'
                                />
    
                                <FAIcon
                                icon={faFacebookSquare}
                                color='#3a559f'
                                className='footer-facebook-icon'
                                />
                                
                            </a>
    
                    {/* <div className='footer-contacts'>
                        
                    </div> */}
    
                </div>
            </div>
        </>
    )
}

export default Contact;