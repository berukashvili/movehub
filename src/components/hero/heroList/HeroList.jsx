import React from "react";
import {
  StyledHeroListWrapper,
  StyledHeroDefaultWrapper,
} from "./StyledHeroList";
import HeroListItem from "./heroListItem/HeroListItem";

export const HeroList = ({ medias, popularMedias }) => {
  return (
    <StyledHeroListWrapper>
      <StyledHeroDefaultWrapper defaultstyle='defaultstyle'>
        {medias.map((media) => (
          <HeroListItem
            defaultstyle='defaultstyle'
            key={media.id}
            media={media}
          ></HeroListItem>
        ))}
      </StyledHeroDefaultWrapper>
      <StyledHeroDefaultWrapper>
        {popularMedias.map((media) => (
          <HeroListItem key={media.id} media={media}></HeroListItem>
        ))}
      </StyledHeroDefaultWrapper>
    </StyledHeroListWrapper>
  );
};

export default HeroList;
