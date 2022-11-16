import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import React, {useEffect} from 'react';

import { useAuthContext } from '../../hooks/useSocialAuthContext';
import { useUpdate } from '../../hooks/usePremium';

function CancelPage(){

    const { user } = useAuthContext();

    const { cancelPremiumHook } = useUpdate();
    const navigate = useNavigate()

    function handleClick() {
      navigate("/");
    }

    const cancelPremium = async () => {
        if(user){ await cancelPremiumHook(); }
    }

    useEffect(() => {
        cancelPremium();
      }, [user])

    return(
        <>
            <Card className="align-items-center">
                <Card.Body>
                    <Card.Title style={{fontSize: 60}}>Cancelled</Card.Title>
                    <Card.Text style={{fontSize: 30}}>Premium Account payment cancelled by user</Card.Text>
                    <Button onClick={handleClick}>Return to main page</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CancelPage;