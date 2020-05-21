import React from "react";
import { useLocation } from "react-router-dom";

const ItemCard = ({ name, imageLink, price, last }) => {
  const location = useLocation();
  const pathname = location.pathname.split("/");

  return (
    <div className={`${pathname[1]}-item product`} ref={last}>
      <div className="product--image__container">
        <img src={imageLink} alt={name} className="product--image" />
      </div>
      <div className="product--info">
        <h4 className="product--name">{name}</h4>
        <h5 className="product--price">${price}</h5>
      </div>
    </div>
  );
};

export default ItemCard;
