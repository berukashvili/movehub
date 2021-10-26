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
} from "./StyledItem";
import { useItem } from "hooks/useItem";
import { useLocation } from "react-router";

const Item = () => {
  const { itemType } = useLocation().state;

  const {
    mediasInfo,
    mediasActing,
    mediasDirector,
    mediasBackground,
    mediasImages,
  } = useItem(itemType);

  return (
    <StyledMediaContainer>
      <StyledFloat mediasBackground={mediasBackground} />
      <StyledMediaItemsWrapper>
        <StyledMediaTitle>
          {mediasInfo.title || mediasInfo.original_name}
        </StyledMediaTitle>
        <StyledMediaItemWrapper>
          <StyledMediaVote>
            <StyledMediaVoteNum>{mediasInfo.vote_average}</StyledMediaVoteNum>
          </StyledMediaVote>
          <StyledMediaButton>
            <StyledMediaFavIcon />
          </StyledMediaButton>
          <StyledFavTitle>Add to the favourites</StyledFavTitle>
        </StyledMediaItemWrapper>
        <StyledMediaInfoTitle>OVERVIEW</StyledMediaInfoTitle>
        <StyledMediaInfo>{mediasInfo.overview}</StyledMediaInfo>
        <StyledMediaCast>
          Starring
          {mediasActing.map((person, index) => (
            <StyledMediaCastSpan key={index}>{person.name}</StyledMediaCastSpan>
          ))}
        </StyledMediaCast>
        <StyledMediaCast>
          Director
          <StyledMediaCastSpan>
            {itemType === "movie"
              ? mediasDirector.name
              : mediasDirector.original_name}
          </StyledMediaCastSpan>{" "}
        </StyledMediaCast>
        <StyledBackdropWrapper>
          {mediasImages.map((backdrop, index) => (
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

export default Item;
