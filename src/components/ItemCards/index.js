import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Modal from "../Modal";
import specialBuyIcon from "../../img/special-buy.svg";

const ItemCard = ({ name, imageLink, price, description, formOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const location = useLocation();
  const pathname = location.pathname.split("/");
  const [modal, setModal] = useState(false);
  const limitedDescription =
    description.length > 75
      ? description.substring(0, 72) + "..."
      : description;

  useEffect(() => {
    setModal((prevState) => {
      if (formOpen) return false;
      return prevState;
    });
  }, [formOpen]);

  useEffect(() => {
    const windowListener = window.addEventListener("resize", () =>
      setWindowWidth(window.innerWidth)
    );

    return () => window.removeEventListener("resize", windowListener);
  }, []);

  return (
    <>
      {modal && (
        <Modal setModal={setModal}>
          <div className="modal">
            <img
              className="specialbuy-icon"
              src={specialBuyIcon}
              alt="Special Buy"
            />
            {windowWidth < 770 && (
              <span className="modal__close" onClick={() => setModal(false)}>
                X
              </span>
            )}
            <div className="modal--image__container">
              <img src={imageLink} alt={name} className="modal--image" />
            </div>
            <div className="modal--info">
              <h4 className="modal--name">{name}</h4>
              <h5 className="modal--price">${price}</h5>
              <p className="modal--description">{description}</p>
            </div>
            <div className="modal--cta">
              <p>Come down to our Phoenix location to purchase!</p>
              <p>You can also Contact Us for more information!</p>
            </div>
          </div>
        </Modal>
      )}

      <div
        className={`${pathname[1]}-item product`}
        onClick={() => setModal(formOpen ? false : true)}
      >
        <div className="product--image__container">
          <img src={imageLink} alt={name} className="product--image" />
        </div>
        <div className="product--info">
          <h4 className="product--name">{name}</h4>
          <h5 className="product--price">${price}</h5>
        </div>
        <div className="product--description">
          <p>{limitedDescription}</p>
          <span>${price}</span>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
