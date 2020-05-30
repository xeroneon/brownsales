import React from 'react';

const Modal = ({ children, setModal }) => {

    return (
        <>
            <div className='overlay__modal' onClick={() => setModal(false)} style={{zIndex: 1, top: 0, left: 0, position: 'fixed', width: '100vw', height: '100vh'}}></div>
            {children}
        </>
    )
}

export default Modal;