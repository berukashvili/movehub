import styled from "styled-components";
import { FaHeart as heart, FaPlay as play } from "react-icons/fa";
import Iframe from "react-iframe";
import { devices } from "common/_device";

export const StyledMediaContainer = styled.main`
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

  @media ${devices.desktopL} {
    width: 550px;
  }
  @media ${devices.laptopL} {
    width: 450px;
  }
  @media ${devices.laptop} {
    width: 350px;
  }
`;

export const StyledMediaItemsWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 1000px;

  @media ${devices.laptopL} {
    padding-left: 50px;
  }
  @media ${devices.laptop} {
    padding-left: 150px;
  }
`;

export const StyledMediaTitle = styled.h2`
  color: black;
  font-size: 68px;
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
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMediaVoteNum = styled.h4`
  color: white;
  font-size: 22px;
  font-weight: 600;
`;

export const StyledMediaBtn = styled.button`
  width: 50px;
  height: 50px;
  margin: 0 20px 0 70px;
  border-radius: 50%;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const StyledMediaFavIcon = styled(heart)`
  color: white;
  font-size: 16px;
`;

export const StyledIframeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const StyledIframe = styled(Iframe)`
  width: 1280px;
  height: 720px;
  border-radius: 4px;
`;

export const StyledModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all 0.3s ease-in-out;
`;

export const StyledMediaTrailerIcon = styled(play)`
  color: black;
  font-size: 16px;
  margin-right: 8px;
`;

export const StyledTrailerBtn = styled.button`
  display: flex;
  align-items: center;
  background-color: orange;
  font-size: 15px;
  font-weight: 900;
  padding: 12px 20px;
  border-radius: 3px;
  margin-left: 50px;
  cursor: pointer;
`;

export const StyledFavTitle = styled.h6`
  color: black;
  font-size: 15px;
  font-weight: 500;
`;

export const StyledMediaInfoTitle = styled.h2`
  color: black;
  font-size: 24px;
  font-weight: 500;
  margin-top: 40px;
`;

export const StyledMediaInfo = styled.p`
  color: black;
  font-size: 16px;
  line-height: 2;
  width: 60%;
  margin: 5px 0 30px 0;
`;

export const StyledMediaCast = styled.h6`
  color: black;
  font-size: 15px;
  font-weight: 400;
  color: gray;
`;

export const StyledMediaCastSpan = styled.span`
  font-size: 15px;
  font-weight: 500;
  color: black;
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

  @media ${devices.laptopL} {
    width: 290px;
  }
  @media ${devices.laptop} {
    width: 270px;
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
