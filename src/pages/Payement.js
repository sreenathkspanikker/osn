import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";

import Layout from "../componenets/Layout";
import HowWould from "../componenets/HowWould";
import HowOften from "../componenets/HowOften";
import Proceed from "../componenets/Proceed";
import data from "../util/data.json";

const Payement = () => {
  const [state, setState] = useState([]);
  const [selectedRow, setRow] = useState({});
  const [tabVAlue, setTabval] = useState({});
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (data.packPrice.length > 0) {
      setState(data.packPrice);
      paymentMathod("visa");
    }
  }, []);

  // PAYMNET MATHOD
  const paymentMathod = (key) => {
    const res = data.packPrice.filter((e) => e.method === key);
    setRow(res);
  };

  // CALCULATE AMOUNT
  const calculateAmount = (data) => {
    setTabval(data);
    const value =
      parseFloat(data.price.pack) * parseFloat(data.frequency) -
      parseFloat(data.price.discountPerc);
    setAmount(value);
  };

  return (
    <Layout>
      <div className="app-payement">
        <h2 className="app-title">How would you like to pay?</h2>
        <Row>
          <Col md={7}>
            <HowWould data={state} paymentMathod={(e) => paymentMathod(e)} />
            {selectedRow.length > 0 && (
              <HowOften
                data={selectedRow}
                amount={amount}
                calculateAmount={(e) => calculateAmount(e)}
              />
            )}
          </Col>
          <Col md={5}>
            <Proceed data={tabVAlue} amount={amount} />
          </Col>
        </Row>
      </div>
    </Layout>
  );
};

export default Payement;
