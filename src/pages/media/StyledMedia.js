import styled from "styled-components";
import { FaHeart as heart } from "react-icons/fa";

export const StyledMediaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100vh;
`;

export const StyledFloat = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 700px;
  height: 100%;
`;

export const StyledMediaItemsWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  flex-direction: column;
  width: 1000px;
`;

export const StyledMediaTitle = styled.h2`
  color: white;
  font-size: 62px;
  font-weight: 900;
  width: 90%;
  margin-bottom: 20px;
`;

export const StyledMediaItemWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledMediaVote = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMediaVoteNum = styled.h4`
  color: black;
  font-size: 22px;
  font-weight: 600;
`;

export const StyledMediaButton = styled(StyledMediaVote)`
  width: 50px;
  height: 50px;
  margin: 0 20px 0 70px;
`;

export const StyledMediaFavIcon = styled(heart)`
  color: black;
  font-size: 16px;
`;

export const StyledFavTitle = styled.h6`
  color: white;
  font-size: 15px;
  font-weight: 500;
`;

export const StyledMediaInfoTitle = styled.h2`
  color: white;
  font-size: 24px;
  font-weight: 500;
  margin-top: 40px;
`;

export const StyledMediaInfo = styled.p`
  color: white;
  font-size: 16px;
  line-height: 2;
  width: 60%;
  margin: 5px 0 30px 0;
`;

export const StyledMediaCast = styled.h6`
  color: white;
  font-size: 15px;
  font-weight: 400;
  color: gray;
`;

export const StyledMediaCastSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: white;
  margin-left: 20px;
`;

export const StyledBackdropWrapper = styled.div`
  display: flex;
`;
export const StyledBackdropContainer = styled.div`
  position: relative;
  margin-top: 50px;
  width: 300px;
  height: 180px;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;
export const StyledBackdrop = styled.img`
  position: absolute;
  width: 100%;

  transition: transform 0.3s ease;

  &:hover {
    transition: transform 0.4s ease;
  }
`;
