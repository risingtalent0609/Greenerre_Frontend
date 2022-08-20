import React from "react";

//import Components
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

//import CSS
import "./NavbarMenu.scss";
const NavbarMenu = () => {
  return (
    <Navbar bg="light" expand="lg" fixed="top" className="px-5">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="/logo.webp" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/" className="px-4">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="px-4">
              About
            </Nav.Link>
            <Nav.Link href="/services" className="px-4">
              Services
            </Nav.Link>
            <Nav.Link href="/token" className="px-4">
              GreenDAO
            </Nav.Link>
            <NavDropdown
              title="More"
              id="navbarScrollingDropdown"
              className="px-4"
            >
              <NavDropdown.Item href="/project">Projects</NavDropdown.Item>
              {/* <NavDropdown.Item href="/outreach-education">
                Outreach &amp; Education
              </NavDropdown.Item> */}
              <NavDropdown.Item href="/advisor">
                Board of Advisors
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <button className="btn-consultation">Book a Consultation</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarMenu;
