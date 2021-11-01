import React from "react";
import {
  StyledLogoContainer,
  StyledLogo,
  StyledHeaderContainer,
  StyledHeaderWrapper,
} from "./StyledHeader";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledLogoContainer>
          <StyledLogo src='./logo.png' />
        </StyledLogoContainer>
        <Nav />
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
};

export default Header;
