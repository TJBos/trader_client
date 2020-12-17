import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { GlobalCtx } from "../App";
import "./Navi.css";

const Navi = ({ history }) => {
  const { gState, setgState } = React.useContext(GlobalCtx);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <ion-icon name="book"></ion-icon>Intrspect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Navi;
