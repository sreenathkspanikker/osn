import React from "react";
import { Row, Col, Nav, Badge } from "react-bootstrap";

const HowOften = () => {
  return (
    <div className="how-often">
      <h3>How often would you like to pay?</h3>

      {/* TABS */}
      <Nav>
        <Nav.Link>Monthly</Nav.Link>
        <Nav.Link>3 Months</Nav.Link>
        <Nav.Link>
          6 Month<Badge>15 % OFF</Badge>
        </Nav.Link>
        <Nav.Link className="active">
          12 Months<Badge>25 % OFF</Badge>
        </Nav.Link>
      </Nav>
      <div className="content">
        <Row>
          <Col sm={8}>
            <h2>
              <small>SAR</small>
              <strong>119 x 12</strong>
              <small>MONTHS</small>
            </h2>
          </Col>
          <Col sm={4} className="text-right">
            <h2>
              <em>=</em>
              <small>SAR</small>
              <strong>1428</strong>
            </h2>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HowOften;
