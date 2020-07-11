import React from "react";
import "./cart-item.styles.scss";
function CartITem({ item: { imageUrl, price, name, quantitiy } }) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantitiy} X ${price}
        </span>
      </div>
    </div>
  );
}

export default CartITem;
