import React from "react";
import { Modal, Button } from "antd";
import { ListGroup } from "react-bootstrap";

const Proceed = (props) => {
  // SUCCES MODAL
  function countDown() {
    let secondsToGo = 5;
    const modal = Modal.success({
      title: "Payment Successfull",
      content: `This modal will be destroyed after ${secondsToGo} second.`,
    });
    const timer = setInterval(() => {
      secondsToGo -= 1;
      modal.update({
        content: `This modal will be destroyed after ${secondsToGo} second.`,
      });
    }, 1000);
    setTimeout(() => {
      clearInterval(timer);
      modal.destroy();
    }, secondsToGo * 1000);
  }

  return (
    <div className="proceed">
      <h2>What you'll pay today</h2>

      {/* DATA LIST */}
      <div className="list-data">
        <ListGroup horizontal>
          <ListGroup.Item>El Farq Pack</ListGroup.Item>
          <ListGroup.Item>
            <span>
              SAR
              {props.data.price !== undefined ? props.data.price.pack : "0"}
            </span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
          <ListGroup.Item>OSN Plus HD Box</ListGroup.Item>
          <ListGroup.Item>
            <span>
              SAR
              {props.data.price !== undefined ? props.data.price.hardware : "0"}
            </span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
          <ListGroup.Item>Installation</ListGroup.Item>
          <ListGroup.Item>
            <span>
              {props.data.price !== undefined
                ? props.data.price.installation
                : "0"}
            </span>
          </ListGroup.Item>
        </ListGroup>
        <ListGroup horizontal>
          <ListGroup.Item>
            <strong>Amount Due</strong>
            <small>(incl. VAT)</small>
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>
              <span>SAR {props.amount}</span>
            </strong>
          </ListGroup.Item>
        </ListGroup>
      </div>
      <Button className="btn-primary" onClick={countDown}>
        Proceed
      </Button>
    </div>
  );
};

export default Proceed;
