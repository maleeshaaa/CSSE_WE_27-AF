import React from "react";
import { useEffect, useState } from "react";
import Header from "../Payment/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import axios from "axios";

const Vouchers = () => {
  //add vouchers
  const [formData, setFormData] = useState({
    voucherName: "",
    voucherPoints: "",
    voucherCode: "",
    voucherDetails: "",
  });

  const { voucherName, voucherPoints, voucherCode, voucherDetails } = formData;

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/vouchers/add", formData)
      .then((res) => {
        setSuccessMessage("Voucher added successfully!");
      })
      .catch((err) => console.log(err));

    setFormData({
      voucherName: "",
      voucherPoints: "",
      voucherCode: "",
      voucherDetails: "",
    });
  };

  //get vouchers
  const [voucher, setVoucher] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/vouchers")
      .then((response) => {
        setVoucher(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="">
      <Header title="VOUCHERS" subtitle="Add new vouchers" />
      <br />
      <div>
        <Form onSubmit={handleSubmit}>
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
                name="voucherName"
                onChange={handleChange}
                value={voucherName}
                style={{
                  fontSize: "1rem",
                  fontWeight: 100,
                  fontFamily: "Lucida Sans",
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formHorizontalPoints"
          >
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
                name="voucherPoints"
                onChange={handleChange}
                value={voucherPoints}
                style={{
                  fontSize: "1rem",
                  fontWeight: 100,
                  fontFamily: "Lucida Sans",
                }}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3" controlId="formHorizontalCode">
            <Form.Label
              column
              sm={2}
              style={{
                fontSize: "0.9rem",
                fontWeight: 500,
                fontFamily: "Lucida Sans",
              }}
            >
              Vocher Code
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Voucher Code"
                name="voucherCode"
                onChange={handleChange}
                value={voucherCode}
                style={{
                  fontSize: "1rem",
                  fontWeight: 100,
                  fontFamily: "Lucida Sans",
                }}
              />
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
                name="voucherDetails"
                onChange={handleChange}
                value={voucherDetails}
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
        <div className="vd_successmessage">
          {successMessage && <h5>{successMessage}</h5>}
        </div>
      </div>
      <div className="display_vouchers">
        <div>
          <h4 className="voucher_heading">
            <span className="voucher_text">Vouchers</span>
          </h4>
        </div>
        <div className="card_flex">
          {voucher.map((voucher) => (
            <div key={voucher._id}>
              <Card style={{ width: "18rem", height: "20rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{voucher.voucherName}</Card.Title>
                  <div className="card_overflow">
                    <Card.Text>{voucher.voucherDetails}</Card.Text>
                  </div>
                  <div className="flex_voucherButton">
                    <Button
                      variant="primary"
                      style={{ margin: "1rem 0" }}
                      className="update__button"
                    >
                      Update
                    </Button>
                    <Button
                      variant="primary"
                      style={{ margin: "1rem 0" }}
                      className="delete__button delete_voucher"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vouchers;
