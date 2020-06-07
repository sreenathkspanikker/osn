import React from "react";
import { Row, Col } from "react-bootstrap";

import Layout from "../componenets/Layout";
import HowWould from "../componenets/HowWould";
import HowOften from "../componenets/HowOften";
import Proceed from "../componenets/Proceed";

const Payement = () => {
  return (
    <Layout>
      <div className="app-payement">
        <h2 className="app-title">How would you like to pay?</h2>

        <Row>
          <Col sm={7}>
            <HowWould />
            <HowOften />
          </Col>
          <Col sm={5}>
            <Proceed />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Payement;
