import React, { useState } from "react";
import { Nav, Row, Col } from "react-bootstrap";

import Logo1 from "../assets/images/logo-visa.svg";
import Logo2 from "../assets/images/logo-mastercard.svg";
import Logo3 from "../assets/images/logo-paypal.svg";
import Logo4 from "../assets/images/logo-amex.svg";
import Logo5 from "../assets/images/logo-mada.svg";

const HowWould = (props) => {
  const [selectedIndex, setIndex] = useState(0);

  // HANDLE CLICK
  const handleClick = (e, i) => {
    props.paymentMathod(e);
    setIndex(i);
  };

  return (
    <div className="how-would">
      <Row>
        {data.map((item, index) => (
          <Col xs={4} key={index}>
            <Nav.Link
              className={selectedIndex === index && "active"}
              onClick={() => handleClick(item.name, index)}
            >
              <img src={item.image} alt="img" />
            </Nav.Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default React.memo(HowWould);

const data = [
  {
    name: "visa",
    image: Logo1,
  },
  {
    name: "mastercard",
    image: Logo2,
  },
  {
    name: "paypal",
    image: Logo3,
  },
  {
    name: "amex",
    image: Logo4,
  },
  {
    name: "mada",
    image: Logo5,
  },
];
