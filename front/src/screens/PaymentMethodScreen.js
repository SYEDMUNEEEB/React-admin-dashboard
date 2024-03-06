import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CheckoutSteps from '../components/CheckoutSteps';
import { Store } from '../Store';
import StripeCheckout from 'react-stripe-checkout';

export default function PaymentMethodScreen() {
  const navigate = useNavigate();
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { shippingAddress, paymentMethod },
  } = state;

  const [paymentMethodName, setPaymentMethod] = useState(
    paymentMethod || 'Stripe'
  );

  useEffect(() => {
    if (!shippingAddress.address) {
      navigate('/shipping');
    }
  }, [shippingAddress, navigate]);

  const onToken = (token) => {
    // Handle the Stripe token here, e.g., send it to your server for payment processing
    console.log('Stripe Token:', token);

    // Assuming the payment was successful, navigate to the "Preview Order" page
    navigate('/placeorder');
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Handle Stripe payment method
    ctxDispatch({ type: 'SAVE_PAYMENT_METHOD', payload: 'Stripe' });
    localStorage.setItem('paymentMethod', 'Stripe');
  };

  return (
    <div>
      <CheckoutSteps step1 step2 step3></CheckoutSteps>
      <div className="container small-container">
        <Helmet>
          <title>Payment Method</title>
        </Helmet>
        <h1 className="my-3">Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <StripeCheckout
            token={onToken}
            stripeKey="pk_test_51NYQHRBVfaNqISsID4eRoyts7rWSgytwDa0As8xq6zT6WigHLIw5n5KfASGHCh0lkJdvBq8xcj6f01mX9nVysMOa009X2BXJnz" // Replace with your Stripe publishable key
            amount={1000} // Replace with the actual amount you want to charge (in cents)
          >
            <div className="mb-3">
              <Button type="submit">
                Continue with Stripe
              </Button>
            </div>
          </StripeCheckout>
        </Form>
      </div>
    </div>
  );
}
