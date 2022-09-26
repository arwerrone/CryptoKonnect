import React, { Component } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";

export default class WalletComp extends Component {
  render() {
    return (
      <>
        <Container>
          <Row sm={6} className="align-items-center">
            <Col sm={8}>
              <Card>
                <Card.Header as="h5">Send Crypto</Card.Header>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3">
                      <Card.Title>Select Crypto</Card.Title>
                      <Form.Select>
                        <option className="text-center">Crypto - Network</option>
                        <option className="text-center">MATIC - POLYGON</option>
                        <option className="text-center">Ethereum - Ethereum</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Card.Title>Destination Wallet Address</Card.Title>
                      <Form.Control className="text-center" type="text" placeholder="0x5A5...b779"/>
                    </Form.Group>

                    <Row>
                        <Col sm={5}>
                            <Form.Control className="text-center" type="text" placeholder="Amount"/>
                            <Card border="dark">
                                <Card.Body>
                                <Card.Title>Crypto Info</Card.Title>
                                <Card.Text>MATIC - POLYGON</Card.Text>
                                <Card.Text>0.00</Card.Text>
                                <Card.Text>BTC 0.59%</Card.Text>
                                <Card.Text>ETH 2.02%</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={7}>
                            <Card border="dark">
                                <Card.Body>
                                <Card.Title>Transaction Info</Card.Title>
                                <Card.Text>Amount to send: 0.00</Card.Text>
                                <Card.Text>Gas fee: 0.00</Card.Text>
                                </Card.Body>
                            </Card>

                            <Button size="lg" variant="outline-primary" type="submit">Confirm Transaction</Button>
                        </Col>
                    </Row>


                  </Form>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={4}>
              <Card>
                <Card.Header as="h5">User's Wallet</Card.Header>
                <Card.Body>
                  <Card.Title>Wallet Address e.g. 0x7E5...c448</Card.Title>

                  <Row>
                    <Col>
                      <Card.Text>Ethereum</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>0.00</Card.Text>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Card.Text>MATIC</Card.Text>
                    </Col>
                    <Col>
                      <Card.Text>23.4567</Card.Text>
                    </Col>
                  </Row>

                  <Button variant="outline-primary">
                    Add crypto / Import token
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
