import styled from "styled-components";

export const StyledHeroWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 100vh;
`;

export const StyledMainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("media/movieBG.jpeg");
  background-size: cover;
  z-index: -1;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgb(3, 0, 3);
    background: linear-gradient(
      0deg,
      rgba(3, 0, 3, 1) 40%,
      rgba(255, 255, 255, 0) 90%
    );
  }
`;
