import styled, { css } from "styled-components";
import { devices } from "common/_device";

export const baseLayout = css`
  width: 1700px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media ${devices.desktopL} {
    width: 1400px;
  }

  @media ${devices.laptopL} {
    width: 1350px;
  }

  @media ${devices.laptop} {
    width: 1250px;
  }
`;

export const StyledMoviesWrapper = styled.div`
  ${baseLayout}
`;
