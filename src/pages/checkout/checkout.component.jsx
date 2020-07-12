import React from "react";
import "./checkout.styles.scss";
import {
  selectCartItems,
  SelectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
function CheckoutPage({ cartItems, cartTotal }) {
  const cartItemsElements = cartItems.map((item) => (
    <CheckOutItem key={item.id} item={item} />
  ));
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItemsElements}
      <div className="total">Total : {cartTotal}$</div>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: SelectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
