import React, { useState, useEffect } from "react";
import { Row, Col, Nav, Badge } from "react-bootstrap";

const HowOften = (props) => {
  const [tabValue, setTabvalue] = useState({});
  const [selectedIndex, setIndex] = useState(0);

  // INITIAL VALUE
  useEffect(() => {
    setTabvalue(props.data[0].invoicePeriod[0]);
    props.calculateAmount(props.data[0].invoicePeriod[0]);
  }, []);

  // RENDER TAB TITLE
  const renderPricing = (data, idx) => {
    switch (idx) {
      case 0:
        return <Nav.Link eventKey={idx}>Month</Nav.Link>;
      case 1:
        return <Nav.Link eventKey={idx}>3 Month</Nav.Link>;
      case 2:
        return (
          <Nav.Link eventKey={idx}>
            6 Month <Badge>15 % OFF</Badge>
          </Nav.Link>
        );
      case 3:
        return (
          <Nav.Link eventKey={idx}>
            12 Month <Badge>25 % OFF</Badge>
          </Nav.Link>
        );
      default:
        break;
    }
  };

  // SET TAB VALUE
  const handleSelect = (e, i) => {
    setIndex(i);
    setTabvalue(e);
    props.calculateAmount(e);
  };

  return (
    <div className="how-often">
      <h3>How often would you like to pay?</h3>
      {props.data[0].method === "mada" && (
        <p className="mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500.
        </p>
      )}

      {/* NAV TAB TITLE */}
      <Nav>
        {props.data[0].invoicePeriod.map((item, index) => (
          <Nav.Item
            className={selectedIndex === index ? "active" : ""}
            key={index}
            onClick={() => handleSelect(item, index)}
          >
            {renderPricing(item, index)}
          </Nav.Item>
        ))}
      </Nav>

      {/* NAV TAB CONTENT */}
      <div className="content">
        <Row>
          {tabValue.frequency !== "1" && (
            <Col sm={8}>
              <h2>
                <small>SAR</small>
                <strong>
                  {tabValue.price !== undefined ? tabValue.price.pack : 14}
                  <span className="ml-1 mr-1">x</span>
                  {tabValue.frequency}
                </strong>
                <small>MONTHS</small>
              </h2>
            </Col>
          )}
          <Col sm={tabValue.frequency !== "1" ? 4 : 12} className="text-right">
            {tabValue.frequency === "1" ? (
              <React.Fragment>
                <h2>
                  <em>=</em>
                  <small>KD</small>
                  <strong>
                    {tabValue.price !== undefined ? tabValue.price.pack : 14}
                  </strong>
                </h2>
                <p>
                  Pay longer, save more <i className="icon-star" />
                </p>
              </React.Fragment>
            ) : (
              <h2>
                <em>=</em>
                <small>SAR</small>
                <strong>{props.amount}</strong>
              </h2>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default React.memo(HowOften);
