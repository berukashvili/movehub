import React from "react";
import {
  StyledHeroListWrapper,
  StyledHeroDefaultContainer,
  StyledHeroDefaultWrapper,
  StyledHeroListTitle,
} from "./StyledHeroList";
import HeroListItem from "./heroListItem/HeroListItem";

export const HeroList = ({ defaultListTitle, medias, popularMedias }) => {
  return (
    <StyledHeroListWrapper>
      <StyledHeroDefaultContainer>
        <StyledHeroListTitle>{defaultListTitle}</StyledHeroListTitle>
        <StyledHeroDefaultWrapper defaultstyle='defaultstyle'>
          {medias.map((media) => (
            <HeroListItem
              defaultstyle='defaultstyle'
              key={media.id}
              media={media}
            ></HeroListItem>
          ))}
        </StyledHeroDefaultWrapper>
      </StyledHeroDefaultContainer>
      <StyledHeroDefaultContainer>
        <StyledHeroListTitle>Popular</StyledHeroListTitle>
        <StyledHeroDefaultWrapper>
          {popularMedias.map((media) => (
            <HeroListItem key={media.id} media={media}></HeroListItem>
          ))}
        </StyledHeroDefaultWrapper>
      </StyledHeroDefaultContainer>
    </StyledHeroListWrapper>
  );
};

export default HeroList;
