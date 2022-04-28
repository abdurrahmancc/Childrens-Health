import React from "react";
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "../../../img/img/logo.png";
import "./Navber.css";
const Navber = () => {
  return (
    <>
      <Navbar bg="primary" sticky="top" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="text-white">
            <img src={logo} alt="" /> Childrens Health
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0" style={{ maxHeight: "100px" }} navbarScroll>
              <NavLink
                id="home"
                to={"/home"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                Home
              </NavLink>
              <NavLink
                to={"/about"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                About
              </NavLink>
              <NavLink
                to={"/blog"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                Blog
              </NavLink>
              <NavLink to={"/add"} className={({ isActive }) => (isActive ? "active" : "inActive")}>
                Add
              </NavLink>
              <NavLink
                to={"/login"}
                className={({ isActive }) => (isActive ? "active" : "inActive")}
              >
                Login
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navber;
