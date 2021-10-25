import React from "react";
import { StyledNavList, StyledNavItem, StyledNavLink } from "./StyledNav";

const Nav = () => {
  return (
    <StyledNavList>
      <StyledNavItem>
        <StyledNavLink to='/movies'>Movies</StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to='/shows'>Shows</StyledNavLink>
      </StyledNavItem>
      <StyledNavItem>
        <StyledNavLink to='/favourites'>Favourites</StyledNavLink>
      </StyledNavItem>
    </StyledNavList>
  );
};

export default Nav;
