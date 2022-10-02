import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function NotFound(){

    const navigate = useNavigate()

    function handleClick() {
      navigate("/");
    }

    return(
        <>
            <Card className="align-items-center">
                <Card.Body>
                    <Card.Title style={{fontSize: 60}}>Not Found</Card.Title>
                    <Card.Text style={{fontSize: 30}}>We can't find what you're looking for...</Card.Text>
                    <Button onClick={handleClick}>Return to main page</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default NotFound;