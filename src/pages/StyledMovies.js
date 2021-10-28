import styled from "styled-components";

export const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background-image: url("/media/moviesBG.jpeg");
  background-size: cover;
  background-repeat: no-repeat;

  &:before {
    content: "";
    background: linear-gradient(rgb(0, 0, 0, 1));
    top: 0;
    background-color: black;
    width: 100%;
    height: 100vh;
  }
`;
