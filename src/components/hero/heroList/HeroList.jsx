import React from "react";
import {
  StyledHeroListWrapper,
  StyledHeroDefaultWrapper,
  StyledHeroPopularWrapper,
} from "./StyledHeroList";
import HeroListItem from "./heroListItem/HeroListItem";

export const HeroList = ({ medias, popularMedias }) => {
  return (
    <StyledHeroListWrapper>
      <StyledHeroDefaultWrapper>
        {medias.map((media) => (
          <HeroListItem
            defaultstyle='defaultstyle'
            key={media.id}
            media={media}
          ></HeroListItem>
        ))}
      </StyledHeroDefaultWrapper>
      <StyledHeroPopularWrapper>
        {popularMedias.map((media) => (
          <HeroListItem key={media.id} media={media}></HeroListItem>
        ))}
      </StyledHeroPopularWrapper>
    </StyledHeroListWrapper>
  );
};

export default HeroList;
