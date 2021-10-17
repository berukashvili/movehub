import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledItemNavLink = styled(NavLink)`
  color: white;

  &:hover {
    color: gray;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const StyledHeroImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 595px;
  overflow: hidden;
  border: 4px solid white;
  cursor: pointer;

  &:hover img {
    transform: scale(1.05);
  }
`;

export const StyledHeroImage = styled.img`
  position: absolute;
  width: 100%;

  transition: transform 0.3s ease;

  &:hover {
    transition: transform 0.4s ease;
  }
`;

export const StyledItemTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
  margin-top: 20px;
`;
