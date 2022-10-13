import { Alert  } from "react-bootstrap";

export default function ErrorMessage({ message }) {
    if (!message) return null;
  
    return (
      <div className="alert alert-error mt-5">
        <div className="flex-1">
            <Alert key="danger" variant="danger">
            <label>{message}</label>
            </Alert>
        </div>
      </div>
    );
  }
  