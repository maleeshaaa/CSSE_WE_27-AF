import React from 'react'
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Navbar from "../../components/navbar.jsx";
import Footer from "../../components/Home/footer.jsx";
import Payment from "../../components/Payment/package-payment.jsx"
import "./payment.css"

const payment = () => {
  return (
    <div>
      <div>
        <Navbar />
        <div className="container-payment">
          {/* Payment Form */}
          <Row>
            <div className="payment-form">
              <Payment />
            </div>
            <div className="package-card">
              <Card style={{ width: "35rem", height: "31rem" }}>
                <Card.Header style={{ fontSize: "1.5rem", fontWeight: "700" }}>
                  TRAVEL PACKAGE
                </Card.Header>
                <Card.Body>
                  <Card.Title style={{ marginBottom: "1.5rem" }}>
                    Package Number : 01
                  </Card.Title>
                  <Card.Title style={{ marginBottom: "1.5rem" }}>
                    Package Price : Rs.2500.00
                  </Card.Title>
                  <Card.Subtitle
                    style={{ marginBottom: "0.5rem", fontSize: "1rem" }}
                  >
                    Details of the Package
                  </Card.Subtitle>
                  <p>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content. Some quick example text to build on the card
                    title and make up the bulk of the card's content. Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content. Some quick example text to build on
                    the card title and make up the bulk of the card's content.
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content. Some quick example text
                    to build on the card title and make up the bulk of the
                    card's content.Some quick example text to build on the card
                    title and make up the bulk of the card's content.Some quick
                    example text to build on the card title and make up the bulk
                    of the card's content.
                  </p>
                </Card.Body>
              </Card>
            </div>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default payment