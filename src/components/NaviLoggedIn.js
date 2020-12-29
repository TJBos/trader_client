import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { GlobalCtx } from "../App";
import "./Navi.css";

const NaviLoggedIn = ({ history }) => {
  //const { gState, setgState } = React.useContext(GlobalCtx);
  return (
    <>
      <Navbar collapseOnSelect expand="sm">
        <Navbar.Brand href="/" style={{ color: "#17a2b8", fontSize: "1.5em" }}>
          <ion-icon name="rocket"></ion-icon>LEVELS
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav
            className="justify-content-center"
            style={{ marginRight: "75px" }}
          >
            <Nav.Item>
              <Nav.Link href="/portfolio" style={{ color: "#17a2b8" }}>
                Portfolio
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/search" style={{ color: "#17a2b8" }}>
                Search
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/strategy" style={{ color: "#17a2b8" }}>
                Strategy
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#" style={{ color: "#17a2b8" }}>
                TradingBot
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                style={{ color: "#17a2b8" }}
                href="/"
                onClick={() => {
                  //window.localStorage.removeItem("token");
                  //setgState({ ...gState, token: false, user: null });
                }}
              >
                Login
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Navbar.Text></Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NaviLoggedIn;
