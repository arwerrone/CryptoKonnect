import React, { useState } from 'react';
// import { Accordion, Card, Button, Container } from 'react-bootstrap';
import { Accordion, Card, Container } from 'react-bootstrap';

// import user update hook
import { useUpdate } from '../../hooks/usePremium';

//Stripe
import { loadStripe } from "@stripe/stripe-js";
//const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
  }
  return stripePromise;
};

const Monthly = 'price_1M2OfjHhFmbBpGACL9hZ25vu';
const Annually = 'price_1M2OgeHhFmbBpGACgo5aN4Ow';

const PremiumPage = () => {
  const { update, isPending, error } = useUpdate();
  
  const setPremium = async () => {
    await update();
  };

  const [stripeError, setStripeError] = useState(null);

  const item1 = {
    price: "price_1M2OfjHhFmbBpGACL9hZ25vu",
    quantity: 1
  };
  const item2 = {
    price: "price_1M2OgeHhFmbBpGACgo5aN4Ow",
    quantity: 1
  };

  const checkoutOptions1 = {
    lineItems: [item1],
    mode: "payment",
    successUrl: `${window.location.origin}/getpremium/success`,
    cancelUrl: `${window.location.origin}/getpremium/cancel`
  };
  const checkoutOptions2 = {
    lineItems: [item2],
    mode: "payment",
    successUrl: `${window.location.origin}/getpremium/success`,
    cancelUrl: `${window.location.origin}/getpremium/cancel`
  };

  const redirectToCheckout = async (subType) => {
    console.log("redirectToCheckout");

    const stripe = await getStripe();

    if(Monthly === subType){
      const { error } = await stripe.redirectToCheckout(checkoutOptions1);
      console.log("Stripe checkout error", error);
      if (error) setStripeError(error.message);
    }if(Annually === subType){
      const { error } = await stripe.redirectToCheckout(checkoutOptions2);
      console.log("Stripe checkout error", error);
      if (error) setStripeError(error.message);
    }

  };

  if (stripeError) alert(stripeError);

  return (
    <>
      <Container>
        <h1 style={{ padding: '15px 0 25px 0' }}>Premium Membership</h1>

        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Premium Alert System</Accordion.Header>
            <Accordion.Body>Customize your favourite crypto threshold alert, Unlimited amount for alerts.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Unlimited Favourite Crypto List</Accordion.Header>
            <Accordion.Body>A regular account you can just have 3 favourite coins, but with premium you can have as many as you want, don't mind the 3 coins that you choose to keep track, just keep adding your coins to your favourite list and enjoy.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Feature #3</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <br></br>
        <hr></hr>

        <h1 style={{ padding: '15px 0 25px 0' }}>Subscription Plan</h1>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '18rem' }} className="text-center">
            <Card.Header as="h5">Monthly</Card.Header>
            <Card.Body>
              <Card.Title>$25 /Month</Card.Title>
              <Card.Text>Total: 25$</Card.Text>
              <Card.Text>Billed Monthly</Card.Text>
              {!isPending && (
                <button className="mt-4 mb-4 p-2 w-full bg-primary text-white rounded-xl shadow-2xl" onClick={event => {redirectToCheckout(Monthly); setPremium()}}>
                  Get Premium
                </button>
              )}
              {isPending && (
                <button className="mt-4 mb-4 p-2 w-full bg-primary text-white rounded-xl shadow-2xl" disabled>
                  loading
                </button>
              )}
              {error && <div className="error">{error}</div>}
            </Card.Body>
          </Card>

          <Card style={{ width: '18rem' }} className="text-center">
            <Card.Header as="h5">Annual</Card.Header>
            <Card.Body>
              <Card.Title>$17 /Month</Card.Title>
              <Card.Text>Total: 204$</Card.Text>
              <Card.Text>Billed Annually</Card.Text>

              {!isPending && (
                <button className="mt-4 mb-4 p-2 w-full bg-primary text-white rounded-xl shadow-xl" onClick={event => {redirectToCheckout(Annually); setPremium()}}>
                  Get Premium
                </button>
              )}
              {isPending && (
                <button className="mt-4 mb-4 p-2 w-full bg-primary text-white rounded-xl shadow-xl" disabled>
                  loading
                </button>
              )}
              {error && <div className="error">{error}</div>}
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default PremiumPage;
