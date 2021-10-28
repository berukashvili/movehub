import styled from "styled-components";

export const StyledHeroListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHeroDefaultWrapper = styled.div`
  display: flex;
  margin-bottom: ${(props) => (props.defaultstyle ? "20px" : "0")};
`;
