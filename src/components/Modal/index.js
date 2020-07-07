import React from 'react';

const Modal = ({ children, setModal }) => {

    return (
        <>
            <div className='modal__overlay' onClick={() => setModal(false)}></div>
            {children}
        </>
    )
}

export default Modal;