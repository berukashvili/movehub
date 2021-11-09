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
      <StyledHeaderWrapper>
        <StyledLogo>MovieHub</StyledLogo>
        <Nav />
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;
