import React from "react";
import { StyledHeaderContainer, StyledHeaderWrapper } from "./StyledHeader";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <Nav />
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;
