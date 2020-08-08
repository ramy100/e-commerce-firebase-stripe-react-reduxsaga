import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import swal from "sweetalert";
function StripeButton({ price }) {
  const priceInCents = price * 100;
  const PublishableKey =
    "pk_test_51GrsV1LymTQ7NsPWaTS9k73M6VmRRiTFXdU48adSFfGyzx9LS17e3VhORhq5KqFq2G85qkCuUE9O7iItpuL8anex00vd84oO7K";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceInCents,
        token,
      },
    })
      .then((response) => {
        swal("Paymen Recieved", "Thanks for shopping!", "success");
      })
      .catch((error) => {
        console.log("payment error");
        swal(
          "Paymen Rejected",
          "There was an error recieving payments!",
          "error"
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

export default StripeButton;
