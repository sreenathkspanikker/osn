import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import Payement from "./pages/Payement";
import * as serviceWorker from "./serviceWorker";

import "./assets/sass/app.scss";

ReactDOM.render(
  <Router>
    <Payement path="/" />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
