import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from '../Modal';

const ItemCard = ({ name, imageLink, price, description, formOpen }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const [modal, setModal] = useState(false);

  
  useEffect(() => {
    setModal(prevState => {
        if(formOpen) return false;
        return prevState;
    })
  }, [formOpen])

  return (
    <>
        {modal &&
            <Modal
            setModal={setModal}
            >
                <div className='modal' style={{zIndex: 2, position: 'fixed'}}>
                    <div className="image__container__modal">
                        <img src={imageLink} alt={name} className="product--image__modal" />
                    </div>
                    <div className="product--info__modal">
                        <h4 className="product--name__modal">{name}</h4>
                        <h5 className="product--price__modal">${price}</h5>
                        <p className="product--description__modal">{description}</p>
                    </div>
                </div>
            </Modal>
        }

        <div className={`${pathname[1]}-item product`} onClick={() => setModal(formOpen ? false : true)}>
            <div className="product--image__container">
                <img src={imageLink} alt={name} className="product--image" />
            </div>
            <div className="product--info">
                <h4 className="product--name">{name}</h4>
                <h5 className="product--price">${price}</h5>
            </div>
        </div>
    </>
  );
};

export default ItemCard;
