import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Figure from 'react-bootstrap/Figure';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    visibility: hidden;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);  
  }
`;

const ReadButton = styled.button`
  background-color: purple;
  color: white; 
  padding: 10px 30px;
  border: none;
  border-radius: 22px;
  cursor: pointer;
`;

const AnimatedFigureCaption = styled(Figure.Caption)`
  animation: ${fadeIn} 1s ease-in-out;
  margin-top: -9em;
`;

const StyledFigureImage = styled.img`
  border: none;
  width: 100%;
  height: auto;
  position: relative;
`;

const CaptionContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  text-align: left;
  z-index: 1;
`;

const StyledNavbar = styled(Navbar)`
  position: absolute;
  width: 0%;
  color: white;  
  z-index: 4;
`;

const BrandContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

`;

const LogoImage = styled.img` 
  width: 8vw;
  position: absolute;
  right: -15vw;
  margin-bottom:-4em;
  
`;
const StyledBrand = styled(Navbar.Brand)`
  color: white;
  font-weight: bold;
  font-size: 2vw;
  text-decoration: cursive;
  font-family: 'Pacifico', cursive;
`;

const NavLinkContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: 30vw; 
  margin-bottom: -3em;
  font-family: 'Pacifico', sans-serif;
  text-decoration: sans-serif;

`;

const StyledNavLink = styled(Nav.Link)`
  color: white;
  font-size: 1.3vw;
  text-decoration: sans-serif;
  font-family: 'Poppins', sans-serif;
  padding:2vw;
`;

function FigureExample() {                   
  const [isVisible, setIsVisible] = useState(true);

  setTimeout(() => {
    setIsVisible((prev) => !prev);
  }, 5000);

  return (
    <div style={{ position: 'relative' }}>
<StyledFigureImage
  alt="600x600"
  src="https://assets.website-files.com/64095707e7c9a7edba65e6a3/6411adf1ebe8ed215b5ec4a8_musical-show-worldwide-this-time-is-not-so-easy.jpg"
  style={{ width: '100%', height: 'auto', maxWidth: '300%' }}
/>



      <StyledNavbar bg="light" expand="lg">
        <BrandContainer>
          <LogoImage src="https://assets-global.website-files.com/62f35224774781301ab36d72/62fe4016e22ef6c2205e8145_logo.svg" alt="Logo" />
          <StyledBrand href="#home"></StyledBrand>
        </BrandContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <NavLinkContainer>
  <StyledNavLink to="/">Home</StyledNavLink>
  <StyledNavLink to="/about">About</StyledNavLink> {/* Link to About page */}
  <StyledNavLink to="#performance">Performance</StyledNavLink>
  <StyledNavLink to="#shop">Shop</StyledNavLink>
  <StyledNavLink to="#contact">Contact</StyledNavLink>
  <StyledNavLink to="#blog">Blog</StyledNavLink>
</NavLinkContainer>
        </Navbar.Collapse>
      </StyledNavbar>
      <CaptionContainer>
        <AnimatedFigureCaption style={{ color: 'white', marginBottom: '-8em' }}>
          <h1 style={{ fontSize: '4vw', fontFamily: 'sans-serif ', marginBottom: '0em' }}>MUSIC EVENT</h1>
          <h1 style={{ fontSize: '4vw', fontFamily: 'sans-serif', marginBottom: '0em' }}>GET THE BEAT</h1>
          <p style={{ fontSize: '1.5vw', fontFamily: 'italic', marginBottom: '0.5em' }}>Musical show organized worldwide, you can join this musical show very<br /> easily through this site and confirm your ticket with a click</p>
          <br></br>
          <ReadButton className="all categories">Get your Ticket</ReadButton>
        </AnimatedFigureCaption>
      </CaptionContainer>
    </div>
  );
}

export default FigureExample;


