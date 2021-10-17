import React from "react";
import { StyledHeaderWrapper } from "./StyledHeader";
import Nav from "./nav/Nav";

const Header = () => {
  return (
    <StyledHeaderWrapper>
      <Nav />
    </StyledHeaderWrapper>
  );
};

export default Header;
