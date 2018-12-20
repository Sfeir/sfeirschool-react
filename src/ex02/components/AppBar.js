import React from "react";
import styled from "styled-components";
import logo from "./AppBar.logo.svg";
import background from "./AppBar.background.png";

const Nav = styled.nav`
  background-color: #0168ab;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: right;
  color: white;
  margin-bottom: 10px;
  padding: 0 15px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img.attrs({
  src: logo,
  alt: "People"
})`
  height: 40px;
`;

export const AppBar = () => (
  <Nav>
    <Logo />
  </Nav>
);
