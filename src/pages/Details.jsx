import React from "react";
import {
  StyledMediaContainer,
  StyledFloat,
  StyledMediaItemsWrapper,
  StyledMediaTitle,
  StyledMediaItemWrapper,
  StyledMediaVote,
  StyledMediaVoteNum,
  StyledMediaButton,
  StyledMediaFavIcon,
  StyledFavTitle,
  StyledMediaInfoTitle,
  StyledMediaInfo,
  StyledMediaCast,
  StyledMediaCastSpan,
  StyledBackdropWrapper,
  StyledBackdrop,
  StyledBackdropContainer,
} from "./StyledDetails";
import { useItem } from "hooks/useItem";
import { useLocation } from "react-router";

const Details = () => {
  const { itemType } = useLocation().state;

  const { info, acting, director, background, image, video } =
    useItem(itemType);

  return (
    <StyledMediaContainer>
      <StyledFloat background={background} />
      <StyledMediaItemsWrapper>
        <StyledMediaTitle>{info.title || info.original_name}</StyledMediaTitle>
        <StyledMediaItemWrapper>
          <StyledMediaVote>
            <StyledMediaVoteNum>{info.vote_average}</StyledMediaVoteNum>
          </StyledMediaVote>
          <StyledMediaButton>
            <StyledMediaFavIcon />
          </StyledMediaButton>
          <StyledFavTitle>Add to the favourites</StyledFavTitle>
        </StyledMediaItemWrapper>
        <StyledMediaInfoTitle>OVERVIEW</StyledMediaInfoTitle>
        <StyledMediaInfo>{info.overview}</StyledMediaInfo>
        <StyledMediaCast>
          Starring
          {acting.map((person, index) => (
            <StyledMediaCastSpan key={index}>{person.name}</StyledMediaCastSpan>
          ))}
        </StyledMediaCast>
        <StyledMediaCast>
          Director
          <StyledMediaCastSpan></StyledMediaCastSpan>{" "}
        </StyledMediaCast>
        <StyledBackdropWrapper>
          {image.map((backdrop, index) => (
            <StyledBackdropContainer key={index}>
              <StyledBackdrop
                src={`https://www.themoviedb.org/t/p/w500/${backdrop.file_path}`}
              />
            </StyledBackdropContainer>
          ))}
        </StyledBackdropWrapper>
      </StyledMediaItemsWrapper>
    </StyledMediaContainer>
  );
};

export default Details;
