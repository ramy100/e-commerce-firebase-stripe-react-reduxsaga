import React from "react";
import StripeCheckout from "react-stripe-checkout";
function StripeButton({ price }) {
  const priceInCents = price * 100;
  const PublishableKey =
    "pk_test_51GrsV1LymTQ7NsPWaTS9k73M6VmRRiTFXdU48adSFfGyzx9LS17e3VhORhq5KqFq2G85qkCuUE9O7iItpuL8anex00vd84oO7K";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successfull");
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
