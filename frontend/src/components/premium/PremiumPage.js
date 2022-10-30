import React from 'react';
// import { Accordion, Card, Button, Container } from 'react-bootstrap';
import { Accordion, Card, Container } from 'react-bootstrap';

// import user update hook
import { useUpdate } from '../../hooks/usePremium';

const PremiumPage = () => {
  const { update, isPending, error } = useUpdate();

  const setPremium = async () => {
    await update();
  };

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
            <Accordion.Header>Feature #2</Accordion.Header>
            <Accordion.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Accordion.Body>
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
              <Card.Title>$/Month</Card.Title>
              <Card.Text>Billed Monthly</Card.Text>
              {!isPending && (
                <button className="mt-4 mb-4 p-2 w-full bg-primary text-white rounded-xl shadow-2xl" onClick={setPremium}>
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
              <Card.Title>$/Month</Card.Title>
              <Card.Text>Billed Annually</Card.Text>

              {!isPending && (
                <button className="mt-4 mb-4 p-2 w-full bg-primary text-white rounded-xl shadow-xl" onClick={setPremium}>
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
