import React from "react";
import { Container } from "react-bootstrap";

const Layout = (props) => {
  return (
    <main className={`app-layout ${props.className}`}>
      <Container>{props.children}</Container>
    </main>
  );
};

export default Layout;
