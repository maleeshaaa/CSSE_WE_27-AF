import React, {useState, useEffect} from "react";
import Header from "../Payment/Header";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import axios from "axios"

const Donations = () => {

    //get Donations
    const [donate, setDonate] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:8080/donations")
        .then((response) => {
          setDonate(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

  return (
    <div>
      <Header title="DONATIONS" subtitle="Add Donations" />
      <div>
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
              Donation Name
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Donation Name"
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
                placeholder="Doantaion Points"
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
            controlId="formHorizontalAmount"
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
              Donation Amount
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="text"
                placeholder="Donation Amount LKR:"
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
              Donation Details
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Enter your Donation details"
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
              Add Donation
            </Button>
          </div>
        </Form>
      </div>
      <div className="display_donation">
        <div>
          <h4 className="donation_heading">
            <span className="donation_text">Donations</span>
          </h4>
        </div>
        <div className="card_flex">
          {donate.map((donate) => (
            <div key={donate._id}>
              <Card style={{ width: "18rem", height: "20rem" }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{donate.donateName}</Card.Title>
                  <div className="card_overflow">
                    <Card.Text>{donate.donateDetails}</Card.Text>
                  </div>
                  <br />
                  <Card.Subtitle className="mb-2 text-muted">
                  Donation Amount: LKR {donate.donateAmount}
                </Card.Subtitle>
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

export default Donations;
