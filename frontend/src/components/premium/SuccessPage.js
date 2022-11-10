import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function SuccessPage(){

    const navigate = useNavigate()

    function handleClick() {
      navigate("/account");
    }

    return(
        <>
            <Card className="align-items-center">
                <Card.Body>
                    <Card.Title style={{fontSize: 60}}>Congratulations!</Card.Title>
                    <Card.Text style={{fontSize: 30}}>We are happy that you choose to become a premium user, now go and enjoy it</Card.Text>
                    <Button onClick={handleClick}>Go to my account page</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default SuccessPage;