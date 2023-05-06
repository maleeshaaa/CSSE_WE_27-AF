import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const Vouchers = () => {
  return (
    <div className="admin_main_container">
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalName">
          <Form.Label column sm={2}>
            Voucher Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Voucher Name" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formHorizontalPoints">
          <Form.Label column sm={2}>
            Points
          </Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Voucher Points" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Voucher Details
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Enter your voucher details"
            />
          </Col>
        </Form.Group>

        <div className="admin_form_button_div">
          <Button variant="primary" type="submit" className="admin_form_button">
            Add Vouchers
          </Button>
          </div>
      </Form>
    </div>
  );
};

export default Vouchers;
