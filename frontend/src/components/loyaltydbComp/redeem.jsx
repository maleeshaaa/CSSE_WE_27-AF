import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import "./styles.css"
export default function Redeem() {
  
    const [progress, setProgress] = useState(100);
    const [buttonDisabled, setButtonDisabled] = useState(true);
  
    const currentProgress = 200;

    const handleProgress = () => {
        setProgress(currentProgress);
        if (currentProgress <= progress) {
          setButtonDisabled(false);
        } else {
          setButtonDisabled(true);
        }
      };

  return (
    <div className="card_styles">
    <Card style={{ width: "18rem" }}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <ProgressBar now={currentProgress} max={progress} label={`${currentProgress}`} />
        <Button variant="primary" style={{ margin: "1rem 0" }} onClick={handleProgress} disabled={buttonDisabled} >
          View Voucher
        </Button>
      </Card.Body>
    </Card>
    </div>
  );
}
