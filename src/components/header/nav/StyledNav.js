import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavList = styled.ul`
  display: flex;
`;

export const StyledNavItem = styled.li`
  list-style: none;

  &:not(:last-child) {
    margin-right: 110px;
  }
`;

export const StyledNavLink = styled(NavLink)`
  color: white;
  font-size: 24px;
  font-weight: 600;

  &.active {
    color: gray;
  }

  &:hover {
    color: gray;
  }
`;
