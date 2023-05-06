import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Logo from "./images/LOGO.png";
const { Link } = require("react-router-dom");

const API_BASE = "http://localhost:8080";

const NavBar = ({ setStatus, status, logOut }) => {
  const navigate = useNavigate();

  return (
    <Navbar style={{height: "4rem"}} bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          {" "}
          <img className="navlogo" src={Logo} alt="logo" />{" "}
        </Navbar.Brand>
        <nav className="justify-content-end flex-grow-1 pe-3"
          style={{ textAlign: "right", display: "flex"}}
        >
          <Link
            to="/"
            style={{ padding: "10px", textDecoration: "none", color: "#000" }}
          >
            Home
          </Link>
          {/* <DropdownButton id="dropdown-basic-button" title="Catagories">
            <Dropdown.Item href="/herbal-beauty">
              Herbal Beauty Products
            </Dropdown.Item>
            <Dropdown.Item href="/herbal-hair">
              Herbal Hair Products
            </Dropdown.Item>
            <Dropdown.Item href="/other">Other</Dropdown.Item>
          </DropdownButton> */}
          {status ? (
            <Link
              to="/my-account"
              style={{ padding: "10px", textDecoration: "none", color: "#000" }}
            >
              Profile
            </Link>
          ) : null}

          {/* {isSeller ? (
            <Link
              to="/add-food"
              style={{ padding: "10px", textDecoration: "none", color: "#000" }}
            >
              Add Food
            </Link>
          ) : null} */}

          <Link
            to="/loyalty-reward"
            style={{ padding: "10px", textDecoration: "none", color: "#000" }}
          >
            Loyalty Program
          </Link>

          <Link
            to="/blogs"
            style={{ padding: "10px", textDecoration: "none", color: "#000" }}
          >
            Blogs
          </Link>

          <Link
            to="/register"
            style={{ padding: "10px", textDecoration: "none", color: "#000" }}
          >
            Register
          </Link>
          {!status ? (
            <Link
              to="/login"
              style={{ padding: "10px", textDecoration: "none", color: "#000" }}
            >
              Login
            </Link>
          ) : (
            <span className="d-flex justify-content-center align-items-center">
              <Link
                to="/login"
                style={{
                  padding: "10px",
                  textDecoration: "none",
                  color: "#000",
                }}
                onClick={logOut}
              >
                Logout
              </Link>
            </span>
          )}
        </nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
