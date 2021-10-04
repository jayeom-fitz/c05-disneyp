import React from "react";
import styled from "styled-components";

import Logo from "./Logo";
import Login from "./Login";

function Header() {
  return (
    <Nav>
      <Logo />
      <Login />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;
