import React from "react";
import styled from "styled-components";

function Logo() {
  return (
    <Container>
      <img src="/images/logo/logo.svg" />
    </Container>
  );
}

export default Logo;

const Container = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;
