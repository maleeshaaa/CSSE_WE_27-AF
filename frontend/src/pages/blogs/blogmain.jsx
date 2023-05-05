import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Navbar from "../../components/navbar";
import Banner from "../../images/blog.png"
import "./styles.css";
export default function blogmain() {
  return (
    <div>
      <Navbar />
      <div className="banner">
      <img src={Banner} alt="Banner" />
      <div className="centered_text">Blog area</div>
      </div>
      <div className="accordiandiv">
        <Accordion className="accordian_div">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Click here to post your BLOG</Accordion.Header>
            <Accordion.Body>
              <Form>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    Blog Name
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Control
                      type="text"
                      placeholder="Enter a name for your blog"
                    />
                  </Col>
                </Form.Group>

                <Form.Group as={Row} className="mb-3">
                  <Form.Label column sm={2}>
                    Blog
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Label>Enter your blog here</Form.Label>
                    <Form.Control as="textarea" rows={4} />
                  </Col>
                </Form.Group>
                <Row>
                  <Col>
                    <Button className="accordian_button" variant="primary" type="submit">
                      Submit Blog
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>{" "}
      </div>
    </div>
  );
}
