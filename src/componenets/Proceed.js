import React from "react";
import { ListGroup, Button } from "react-bootstrap";

const Proceed = () => {
  return (
    <div className="proceed">
      <h2>What you'll pay today</h2>
      <div className="list-data">
        <ListGroup horizontal>
          <ListGroup.Item>El Farq Pack</ListGroup.Item>
          <ListGroup.Item>
            <span>SAR 1428</span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
          <ListGroup.Item>OSN Plus HD Box</ListGroup.Item>
          <ListGroup.Item>
            <span>SAR 0</span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
          <ListGroup.Item>Installation</ListGroup.Item>
          <ListGroup.Item>
            <span>SAR 0</span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
          <ListGroup.Item>
            <strong>Amount Due</strong>
            <small>(incl. VAT)</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>
              <span>SAR 1428</span>
            </strong>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Button variant="primary">Proceed</Button>
    </div>
  );
};

export default Proceed;
