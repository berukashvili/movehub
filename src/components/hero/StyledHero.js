import styled from "styled-components";

export const StyledHeroContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  height: 100vh;
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const StyledMainBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* background-image: url("media/movieBG.jpeg"); */
  background-color: white;
  background-size: cover;
  z-index: -1;
`;
