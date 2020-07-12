import "./checkout-item.style.scss";
import React from "react";
import { connect } from "react-redux";
import {
  removeItemFromCart,
  decreaseItemQuantity,
  addItemTOCart,
} from "../../redux/cart/cart.actions";

function CheckoutItem({ item, dispatch, removeItem, addItem, decreaseItem }) {
  const { id, name, imageUrl, price, quantity } = item;
  console.log(item);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => decreaseItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => removeItem(item)}>
        &#10006;
      </div>
    </div>
  );
}

const mapDispatchToState = (dispatch) => ({
  addItem: (item) => dispatch(addItemTOCart(item)),
  removeItem: (item) => dispatch(removeItemFromCart(item)),
  decreaseItem: (item) => dispatch(decreaseItemQuantity(item)),
});

export default connect(null, mapDispatchToState)(CheckoutItem);
