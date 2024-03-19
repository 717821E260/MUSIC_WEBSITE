import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'; // Import NavLink
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import styled from 'styled-components'; // Import styled from styled-components
import './Navbar.css';

const StyledNavLink = styled(NavLink)` // Define styled NavLink
  font-size: 20px;
  font-weight: italic;
  margin: 0 10px;
  color: black;
  text-decoration: none;
  transition: color 0.1s ease-in-out;

  &:hover {
    color: blue; // Change color on hover if desired
  }
`;

function Navbar_Comp() {
  const [showNav, setShowNav] = useState(false);

  const navLinkStyle = {
    fontSize: '20px',
    fontWeight: 'italic',
    margin: '0 10px',
    color: 'black',
    textDecoration: 'black',
    transition: 'color 0.1s ease-in-out',
  };

  const formControlStyle = {
    fontSize: '16px',
    marginRight: '10px',
  };

  const buttonStyle = {
    fontSize: '25px',
    margin: '0 10px',
  };

  const navbarStyle = {
    backgroundColor: 'white',
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <nav>
      <Container fluid>
        <div className="nav__container">
          <Link to="/" className="nav__brand" style={{ fontSize: '30px', fontWeight: 'bold', color: 'black' }}>
            INFI- BOOKS
          </Link>
          <div className="nav__toggle-btn" onClick={toggleNav}>
            {showNav ? <AiOutlineClose /> : <FaBars />}
          </div>
          <div className={`nav__menu ${showNav ? 'nav__menu--active' : ''}`}>
            <StyledNavLink exact to="/" style={navLinkStyle}>
              Home
            </StyledNavLink>
            <StyledNavLink to="/about" style={navLinkStyle}>
              About
            </StyledNavLink>
            <StyledNavLink to="/blogs" style={navLinkStyle}>
              Blog
            </StyledNavLink>
            <StyledNavLink to="/events" style={navLinkStyle}>
              Performance
            </StyledNavLink>
            <StyledNavLink to="/contactus" style={navLinkStyle}>
              Contact
            </StyledNavLink>
          </div>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              style={formControlStyle}
            />
            <Button variant="outline-success" style={{ color: 'black', fontSize: '20px', marginRight: '10px' }}>
              Search
            </Button>
            <Link to='/login'>
              <Button variant="outline-success" style={{ color: 'black', fontSize: '20px', marginRight: '10px' }}>
                Login
              </Button>
            </Link>
            <Button variant="outline-success" style={{ color: 'black', fontSize: '20px', marginRight: '10px' }}>
              Cart
            </Button>
          </Form>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar_Comp;
