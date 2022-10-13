import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Form, Stack, Alert, } from "react-bootstrap";
import { injected } from "./connectors";
import {useWeb3React} from '@web3-react/core'
import { ethers } from "ethers";
import TokenListMainnet from '../../assets/token-list-mainnet.json'
import TokenListPolygon from '../../assets/token-list-polygonmainnet.json'
import useBalance from "../../actions/useBalance";
import ErrorMessage from "./ErrorMessage";
import TxList from "./TxList";


export default function WalletComp() {

  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function connect() {
    try {
      await activate(injected)
    }catch(err){
      console.log(err);
    }
  }

  async function disconnect() {
    try {
      await deactivate()
    }catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem('isWalletConnected') === 'true') {
        try {
          await activate(injected)
          localStorage.setItem('isWalletConnected', true)
        } catch (ex) {
          console.log(ex)
        }
      }
    }
    connectWalletOnPageLoad()
  }, [])

  const [mainnet,setMainnet]= useState();
  const [selectedToken, setSelectedToken] = useState(TokenListMainnet[0]);
  const [balance] = useBalance(selectedToken.address, selectedToken.decimals)
//////////////
  const [error2, setError2] = useState();
  const [tokenImported, setTokenImported] = useState(false);
  const addTokenToWallet = async () => {
    try {
      await window.ethereum.request({
        method: 'wallet_watchAsset',
        params: {
          type: 'ERC20',
          options: {
            address: selectedToken.address,
            symbol: selectedToken.symbol,
            decimals: selectedToken.decimals,
          },
        },
      })
      setTokenImported(true);
    }catch(err){
      setError2(err.message);
    }
  }

///////////////////////////////////////////////
  const [error, setError] = useState();
  const [txs, setTxs] = useState([]);


  const startPayment = async ({ setError, setTxs, ether, addr }) => {
    try {
      if (!window.ethereum){
        throw new Error("No crypto wallet found. Please install it.");
      }

      await window.ethereum.send("eth_requestAccounts");
      await activate(injected)
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      ethers.utils.getAddress(addr);
      const tx = await signer.sendTransaction({
        to: addr,
        value: ethers.utils.parseEther(ether)
      });
      console.log({ ether, addr });
      console.log("tx", tx);
      setTxs([tx]);
    } catch (err) {
      setError(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setError();
    await startPayment({
      setError,
      setTxs,
      ether: data.get("amount"),
      addr: data.get("addr")
    });
  };

///////////////////////////////////////////////
    return (
      <>
        <Container>
          <Row sm={6} className="align-items-center">
            <Col sm={8}>
              <Card>
                <Card.Header as="h5">Send Crypto</Card.Header>
                <Card.Body className="text-center">
                  <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3">
                      <Card.Title>Destination Wallet Address</Card.Title>
                      <Form.Control name="addr" className="text-center" type="text" placeholder="0x5A5...b779"/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Card.Title>Amount to send</Card.Title>
                      <Form.Control name="amount" className="text-center" type="text" placeholder="0.00"/>
                    </Form.Group>

                    <Button size="lg" variant="outline-primary" type="submit">Confirm Transaction</Button>

                    <ErrorMessage message={error} />
                    <TxList txs={txs} />

                  </Form>

                </Card.Body>
              </Card>
            </Col>





            <Col sm={4}>
              <Card>
                <Card.Header as="h5">User's Wallet</Card.Header>
                <Card.Body className="text-center">

                  <Stack gap={3}>

                  {active ? <Card.Title>{account}</Card.Title> : <Card.Title>NOT CONNECTED</Card.Title>}
TokenListMainnet[0]
                  <Form.Select value={mainnet} onChange={ e=> {setMainnet(e.target.value); setSelectedToken(TokenListMainnet[0]); setTokenImported(false);}}>
                    <option className="text-center">--Select Mainnet--</option>
                    <option className="text-center" value="1">Ethereum Mainnet</option>
                    <option className="text-center" value="2">Polygon Mainnet</option>
                  </Form.Select>

                  {mainnet === '1' &&
                      <><Form.Select onChange={e => { setSelectedToken(TokenListMainnet[e.target.value]); setTokenImported(false);} }>
                      {TokenListMainnet.map((token, index) => (
                        <option value={index} key={token.address}>{token.name}</option>
                      ))}
                    </Form.Select>
                    <Row><Col style={{fontWeight:"bold"}}>balance:</Col> <Col>{balance}</Col></Row>
                    <Row><Col style={{fontWeight:"bold"}}>Symbol:</Col><Col>{selectedToken.symbol}</Col></Row>
                    </>
                  }

                  {mainnet === '2' &&

                    <><Form.Select onChange={e => { setSelectedToken(TokenListPolygon[e.target.value]); setTokenImported(false);} }>
                      {TokenListPolygon.map((token, index) => (
                        <option value={index} key={token.address}>{token.name}</option>
                      ))}
                    </Form.Select>
                    <Row><Col style={{fontWeight:"bold"}}>balance:</Col> <Col>{balance}</Col></Row>
                    <Row><Col style={{fontWeight:"bold"}}>Symbol:</Col><Col>{selectedToken.symbol}</Col></Row>
                    </>
                  }

                  {active && mainnet ? <Button onClick={addTokenToWallet} variant="outline-secondary">Add {selectedToken.name} to Wallet</Button> : null}

                  {active ? <Button onClick={disconnect} variant="outline-primary">Disconnect Wallet</Button> :
                  <Button onClick={connect} variant="outline-primary">Connect Wallet</Button> }
                  
                  <ErrorMessage message={error2} />
                  {tokenImported ? <Alert key="info" variant="info">{selectedToken.name} added to your wallet!</Alert> : null}

                  </Stack>

                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );

}
