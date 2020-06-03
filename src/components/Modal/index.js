import React, { useState, useEffect } from 'react';


const Modal = ({ children, setModal }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    console.log(windowWidth)

    useEffect(() => {
        const windowListener = window.addEventListener('resize', () => setWindowWidth(window.innerWidth));

        return () => window.removeEventListener('resize', windowListener);
    }, [])

    return (
        <>
            <div className='modal__overlay' onClick={() => setModal(false)}></div>
            {children}
        </>
    )
}

export default Modal;