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
            {windowWidth < 770 &&
                <span className='modal__close' onClick={() => setModal(false)}>X</span>
            }
            <div className='modal__overlay' onClick={() => setModal(false)}></div>
            {children}
        </>
    )
}

export default Modal;