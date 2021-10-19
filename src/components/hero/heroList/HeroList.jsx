import React from "react";
import {
  StyledHeroListWrapper,
  StyledHeroDefaultWrapper,
  StyledHeroPopularWrapper,
  StyledHeroUpcomingWrapper,
} from "./StyledHeroList";
import HeroListItem from "./heroListItem/HeroListItem";

const HeroList = ({ media, popular, upcoming }) => {
  return (
    <StyledHeroListWrapper>
      <StyledHeroDefaultWrapper>
        {media.map((item) => (
          <HeroListItem
            default='default'
            key={item.id}
            item={item}
          ></HeroListItem>
        ))}
      </StyledHeroDefaultWrapper>
      <StyledHeroPopularWrapper>
        {popular.map((item) => (
          <HeroListItem key={item.id} item={item}></HeroListItem>
        ))}
      </StyledHeroPopularWrapper>
      <StyledHeroUpcomingWrapper>
        {upcoming.map((item) => (
          <HeroListItem key={item.id} item={item}></HeroListItem>
        ))}
      </StyledHeroUpcomingWrapper>
    </StyledHeroListWrapper>
  );
};

export default HeroList;
