import React from "react";
import { Accordion, Card, Button, Container  } from "react-bootstrap";


export default function PremiumPage(){

    return (
        <>
        <Container>
            <h1 style={{padding: '15px 0 25px 0'}}>Premium Membership</h1>

            <Accordion flush>
            <Accordion.Item eventKey="0">
            <Accordion.Header>Premium Alert System</Accordion.Header>
            <Accordion.Body>
                Customize your favourite crypto threshold alert,
                Unlimited amount for alerts.                
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Feature #2</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Feature #3</Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            <br></br><br></br>
            <hr></hr>

            <h1 style={{padding: '15px 0 25px 0'}}>Subscription Plan</h1>
            <div className="d-flex justify-content-around">
                <Card style={{ width: '18rem' }} className="text-center">
                <Card.Header as="h5">Monthly</Card.Header>
                <Card.Body>
                    <Card.Title>$/Month</Card.Title>
                    <Button variant="primary" size="lg">Get this</Button>
                </Card.Body>
                </Card>

                <Card style={{ width: '18rem' }} className="text-center">
                <Card.Header as="h5">Annual</Card.Header>
                <Card.Body>
                    <Card.Title>$/Month</Card.Title>
                    <Card.Text>
                    Billed once per year
                    </Card.Text>
                    <Button variant="primary" size="lg">Get this</Button>
                </Card.Body>
                </Card>
            </div>

        </Container >

        </>
    );

}
