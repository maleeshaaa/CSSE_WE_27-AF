import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button";
import "./styles.css"
export default function earn() {
    

  return (
    <div className="cards_styles card_flex" styel={{display: "flex"}}>
      <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Feedback</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Your feedback is vital in shaping unforgettable experiences for
            future travelers. Share your valuable insights and help us create
            enchanting adventures that exceed expectations!<br /><br />
            <Button>Give Feedback</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      </div>

      {/* Blog */}
      <div>
      <Card style={{ width: "18rem" }}>
        <Card.Header>Blog</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Your blog is vital in shaping unforgettable experiences for
            future travelers. Share your valuable insights and help us create
            enchanting adventures that exceed expectations!<br /><br />
            <Button>Post a Blog</Button>
          </ListGroup.Item>
        </ListGroup>
      </Card>
      </div>
    </div>
  );
}
