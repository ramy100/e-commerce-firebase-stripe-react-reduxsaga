import React from "react";
import "./checkout.styles.scss";
import StripeButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  SelectCartTotal,
} from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selector";
import { Redirect } from "react-router-dom";
import CheckOutItem from "../../components/checkout-item/checkout-item.component";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
function CheckoutPage({ cartItems, cartTotal, currentUser }) {
  const cartItemsElements = cartItems.map((item) => (
    <CheckOutItem key={item.id} item={item} />
  ));
  return currentUser ? (
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
      <div className="test-warning">
        *Please use the follwing test credit card for payments*
        <br />
        4242 4242 4242 4242 - EXP : any future date - CVV : any 3 numbers
      </div>
      <StripeButton price={cartTotal} />
    </div>
  ) : (
    <Redirect to="/signin" />
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: SelectCartTotal,
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(CheckoutPage);
