import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import swal from 'sweetalert';
import dotenv from 'dotenv';
import { clearCart as clearCartAction } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
dotenv.config();

function StripeButton({ price, clearCart }) {
  const priceInCents = price * 100;
  const PublishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY || '';
  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then((response) => {
        swal('Paymen Recieved', 'Thanks for shopping!', 'success');
        clearCart();
      })
      .catch((error) => {
        console.log('payment error');
        swal(
          'Paymen Rejected',
          'There was an error recieving payments!',
          'error'
        );
      });
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your Total is $${price}`}
      amount={priceInCents}
      token={onToken}
      stripeKey={PublishableKey}
    />
  );
}

const mapDispatchToProps = (dispatch) => ({
  clearCart: () => dispatch(clearCartAction()),
});

export default connect(null, mapDispatchToProps)(StripeButton);
