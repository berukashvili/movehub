import React from "react";
import {
  StyledLogo,
  StyledHeaderContainer,
  StyledHeaderWrapper,
} from "./StyledHeader";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledLogo>MovieHub</StyledLogo>
      <Nav />
    </StyledHeaderContainer>
  );
};

export default Header;
