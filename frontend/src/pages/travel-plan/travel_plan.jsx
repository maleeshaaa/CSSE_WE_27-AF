import React from "react";
import Navbar from "../../components/navbar.jsx";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import "./travel-style.css"

export default function TravelPlan() {
  return (
    <div>
      <Navbar />
      <div className="background">
        <div className="heading">
          <h2>Hello Admin</h2>
          <p>Welcome to your Dashboard</p>
        </div>
      </div>
      <div className="side-nav-container">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row className="tab-board">
            <Col>
              <Nav variant="pills" className="flex-column">
                <Nav.Item className="nav-item">
                  <Nav.Link className="nav-link" eventKey="first">
                    Requests
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="second">
                    Packages
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="third">
                    Inquiries
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="nav-link" eventKey="fourth">
                    Vouchers
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col sm={9}>
              <Tab.Content className="tab-content">
                <Tab.Pane eventKey="first">AMAL</Tab.Pane>
                <Tab.Pane eventKey="second">MY MAN</Tab.Pane>
                <Tab.Pane eventKey="third">HELLO</Tab.Pane>
                <Tab.Pane eventKey="fourth">HI</Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </div>
  );
}
