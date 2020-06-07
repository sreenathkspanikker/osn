import React from "react";
import { Nav, Row, Col } from "react-bootstrap";
import Logo1 from "../assets/images/logo-visa.svg";
import Logo2 from "../assets/images/logo-mastercard.svg";
import Logo3 from "../assets/images/logo-paypal.svg";
import Logo4 from "../assets/images/logo-amex.svg";
import Logo5 from "../assets/images/logo-mada.svg";

const HowWould = () => {
  return (
    <div className="how-would">
      <Row>
        <Col sm={4}>
          <Nav.Link className="active">
            <img src={Logo1} alt="img" />
          </Nav.Link>
        </Col>
        <Col sm={4}>
          <Nav.Link>
            <img src={Logo2} alt="img" />
          </Nav.Link>
        </Col>
        <Col sm={4}>
          <Nav.Link>
            <img src={Logo3} alt="img" />
          </Nav.Link>
        </Col>
        <Col sm={4}>
          <Nav.Link>
            <img src={Logo4} alt="img" />
          </Nav.Link>
        </Col>
        <Col sm={4}>
          <Nav.Link>
            <img src={Logo5} alt="img" />
          </Nav.Link>
        </Col>
      </Row>
    </div>
  );
};

export default HowWould;
