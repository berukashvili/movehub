import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledItemNavLink = styled(NavLink)`
  color: white;
  margin-bottom: 160px;

  &:not(:last-child) {
    margin-right: 60px;
  }
`;

export const StyledHeroImageContainer = styled.div`
  position: relative;
  width: 180px;
  height: 130px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
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
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 24px;
  font-weight: 600;
`;
