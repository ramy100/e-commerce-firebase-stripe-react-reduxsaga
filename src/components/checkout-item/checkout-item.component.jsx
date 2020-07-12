import "./checkout-item.style.scss";
import React from "react";

function CheckoutItem({ item: { name, imageUrl, price, quantity } }) {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10006;</div>
    </div>
  );
}

export default CheckoutItem;
