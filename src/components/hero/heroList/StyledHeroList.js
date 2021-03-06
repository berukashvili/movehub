import styled from "styled-components";
import { devices } from "common/_device";

export const StyledHeroListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const StyledHeroDefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHeroDefaultWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  /* @media ${devices.laptop} {
    height: ${(props) => (props.defaultstyle ? "" : "500px")};
  } */
`;

export const StyledHeroListTitle = styled.h4`
  color: black;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
`;
