import React from "react";
import "./cart-dropdown.style.scss";
import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../custom-button/custom-button.component";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
function CartDropdown({ cartItems }) {
  const cartItemsElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));
  return (
    <div className="cart-dropdown">
      <div className="cart-items">{cartItemsElements}</div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default connect(mapStateToProps)(CartDropdown);
