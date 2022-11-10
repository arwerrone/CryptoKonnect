import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function CancelPage(){

    const navigate = useNavigate()

    function handleClick() {
      navigate("/");
    }

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