import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledItemNavLink = styled(NavLink)`
  color: white;
  margin-bottom: 40px;
  transition: 270ms ease-in-out;

  &:not(:last-child) {
    margin-right: ${(props) => {
      const changeMargin = props.default ? "60px" : "11px";
      return changeMargin;
    }};
  }
`;
export const StyledItemTitle = styled.h4`
  z-index: 1;
  position: absolute;
  text-align: center;
  top: ${(props) => {
    const changePosition = props.default ? "50%" : "80%";
    return changePosition;
  }};
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${(props) => {
    const changeFont = props.default ? "24px" : "12px";
    return changeFont;
  }};
  font-weight: 600;
  transition: 270ms ease-in-out;
  opacity: ${(props) => {
    const hideTitle = props.default ? "100" : "0";
    return hideTitle;
  }};
`;

export const StyledHeroImageContainer = styled.div`
  position: relative;
  width: ${(props) => {
    const changeStyle = props.default ? "380px" : "160px";
    return changeStyle;
  }};
  height: 240px;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: translateY(
      ${(props) => {
        const itemHover = props.default ? "0" : "-10px";
        return itemHover;
      }}
    );
  }

  &:hover {
    ${StyledItemTitle} {
      opacity: ${(props) => {
        const showTitle = props.default ? "100" : "100";
        return showTitle;
      }};
    }
  }
  &:before {
    content: "";
    z-index: 1;
    position: absolute;
    top: 0;
    background: rgb(0, 0, 0);
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(93, 93, 93, 1) 100%
    );

    width: ${(props) => {
      const changeStyle = props.default ? "380px" : "160px";
      return changeStyle;
    }};
    height: 240px;
    opacity: 10%;
  }
`;

export const StyledHeroImage = styled.img`
  position: absolute;
  width: 100%;
`;
