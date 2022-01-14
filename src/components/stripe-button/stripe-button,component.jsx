import React from "react";
import StripeCheckOut from "react-stripe-checkout";

function StripeCheckoutButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KHkC9KD0R8n0m2vp26ldhqiUIo5Bc38DC3w6uV0rgJf9H3qMcVb1u4QcbpqKXOo3vU56koMgIspl2QMGH9XNzwl007XyUdHMP";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successfully");
  };

  return (
    <StripeCheckOut
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/updownload/file/script/d/f3eb2117da"
      description={`Your total is ${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
}

export default StripeCheckoutButton;
