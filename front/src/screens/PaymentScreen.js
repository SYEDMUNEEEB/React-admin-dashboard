import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';
import StripeCheckout from 'react-stripe-checkout'; // 

export default function PaymentScreen() {
  // ...

  const onToken = (token) => {
    // This function will be called when the payment is successful
    console.log(token); // You can handle the token here and send it to your server for further processing
  };

  return (
    <div>
      {/* ... */}
      <StripeCheckout
        token={onToken}
        stripeKey="pk_test_51NYQHRBVfaNqISsID4eRoyts7rWSgytwDa0As8xq6zT6WigHLIw5n5KfASGHCh0lkJdvBq8xcj6f01mX9nVysMOa009X2BXJnz" // Replace with your Stripe publishable key
        amount={1000} // Replace with the actual amount you want to charge (in cents)
      >
        <Button>Pay with Stripe</Button>
      </StripeCheckout>
    </div>
  );
}