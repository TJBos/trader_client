import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { GlobalCtx } from "../App";
import "./Navi.css";

const NaviLoggedIn = ({ history }) => {
  //const { gState, setgState } = React.useContext(GlobalCtx);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="/">
          <ion-icon name="book"></ion-icon>Intrspect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav
            className="justify-content-center"
            style={{ marginRight: "75px" }}
          >
            <Nav.Item>
              <Nav.Link href="/calendar">Calendar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/">Timeline</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="/"
                onClick={() => {
                  //window.localStorage.removeItem("token");
                  //setgState({ ...gState, token: false, user: null });
                }}
              >
                Logout
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="justify-content-end">
            <Navbar.Text>User</Navbar.Text>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NaviLoggedIn;
