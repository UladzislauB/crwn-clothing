import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishKey =
    "pk_test_51I8mSBJIGlufvdvPfHkDisLwKA38K5jTMZpeNws3kEZwowr88my6hM059clM758EFTp5yDJtIoQiT0KJZekpaadG00pwxz3Dmi";

  const onToken = (token) => {
    console.log(token);
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing"
      description={`Your total is ${price} $`}
      image="https://sendeyo.com/up/d/f3eb2117da"
      billingAddress
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};

export default StripeCheckoutButton;
