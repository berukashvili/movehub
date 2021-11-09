import styled from "styled-components";
import { devices } from "common/_device";

export const StyledHeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 1700px;

  @media ${devices.desktopL} {
    width: 1400px;
  }

  @media ${devices.laptopL} {
    width: 1250px;
  }
  @media ${devices.laptopL} {
    width: 1250px;
  }

  @media ${devices.laptopL} {
    width: 1150px;
  }
`;

export const StyledLogo = styled.h3`
  font-size: 32px;
  font-weight: 700;
`;

export const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 55px;
`;
