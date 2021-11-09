import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { devices } from "common/_device";

export const StyledItemNavLink = styled(NavLink)`
  color: white;
  margin-bottom: 14px;
  transition: 0.4s ease-in-out;

  &:not(:last-child) {
    margin-right: ${(props) => (props.defaultstyle ? "60px" : "11px")};
  }

  @media ${devices.desktopL} {
    &:not(:last-child) {
      margin-right: ${(props) => (props.defaultstyle ? "53px" : "11px")};
    }
  }

  @media ${devices.laptopL} {
    &:not(:last-child) {
      margin-right: ${(props) => (props.defaultstyle ? "43px" : "8px")};
    }
  }

  @media ${devices.laptop} {
    &:not(:last-child) {
      margin-right: ${(props) => (props.defaultstyle ? "25px" : "7px")};
    }
  }
`;
export const StyledItemTitle = styled.h4`
  z-index: 1;
  position: absolute;
  text-align: center;
  top: ${(props) => (props.defaultstyle ? "50%" : "80%")};
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => (props.defaultstyle ? "24px" : "12px")};
  font-weight: 600;
  transition: 270ms ease-in-out;
  opacity: 0;
`;

export const StyledHeroImage = styled.img`
  position: absolute;
  width: 100%;
  transition: transform 0.4s ease-in-out;
`;

export const StyledHeroImageContainer = styled.div`
  position: relative;
  width: ${(props) => (props.defaultstyle ? "380px" : "160px")};
  height: ${(props) => (props.defaultstyle ? "200px" : "240px")};
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover img {
    transform: scale(1.02);
  }

  &:hover {
    transform: translateY(${(props) => (props.defaultstyle ? "0" : "-10px")});
    ${StyledItemTitle} {
      opacity: ${(props) => (props.defaultstyle ? "100" : "100")};
    }
  }

  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    background: rgb(3, 0, 3);
    background: linear-gradient(
      0deg,
      rgba(3, 0, 3, 1) 10%,
      rgba(255, 255, 255, 0) 100%
    );
    width: ${(props) => (props.defaultstyle ? "380px" : "160px")};
    height: 240px;
    opacity: 0%;
    transition: opacity 0.4s ease-in-out;
  }

  &:hover:before {
    opacity: 70%;
  }

  @media ${devices.desktopL} {
    width: ${(props) => (props.defaultstyle ? "310px" : "130px")};
    height: ${(props) => (props.defaultstyle ? "170px" : "194px")};
  }

  @media ${devices.laptopL} {
    width: ${(props) => (props.defaultstyle ? "280px" : "118px")};
    height: ${(props) => (props.defaultstyle ? "160px" : "175px")};
  }

  @media ${devices.laptop} {
    width: ${(props) => (props.defaultstyle ? "269px" : "109px")};
    height: ${(props) => (props.defaultstyle ? "160px" : "162px")};
  }
`;
