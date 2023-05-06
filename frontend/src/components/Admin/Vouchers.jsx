import React from "react";
import Header from "../Payment/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Vouchers = () => {
  return (
    <div className="admin_main_container">
      <Header title="VOUCHERS" subtitle="Add new vouchers" />
      <br />
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
          <Form.Label
            column
            sm={2}
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              fontFamily: "Lucida Sans",
            }}
          >
            Voucher Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Voucher Name"
              style={{
                fontSize: "1rem",
                fontWeight: 100,
                fontFamily: "Lucida Sans",
              }}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPoints">
          <Form.Label
            column
            sm={2}
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              fontFamily: "Lucida Sans",
            }}
          >
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              type="text"
              placeholder="Voucher Points"
              style={{
                fontSize: "1rem",
                fontWeight: 100,
                fontFamily: "Lucida Sans",
              }}
            />
          </Col>
        </Form.Group>
        
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalCord">
          <Form.Label column sm={2}>
            Voucher Code
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Voucher Code" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label
            column
            sm={2}
            style={{
              fontSize: "0.9rem",
              fontWeight: 500,
              fontFamily: "Lucida Sans",
            }}
          >
            Voucher Details
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your voucher details"
              style={{
                fontSize: "1rem",
                fontWeight: 100,
                fontFamily: "Lucida Sans",
              }}
            />
          </Col>
        </Form.Group>

        <div className="admin_form_button_div">
          <Button
            variant="primary"
            type="submit"
            className="admin_form_button"
            style={{
              fontSize: "1rem",
              fontWeight: 100,
              fontFamily: "Lucida Sans",
            }}
          >
            Add Vouchers
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Vouchers;
