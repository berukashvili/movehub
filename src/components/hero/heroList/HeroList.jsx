import React from "react";
import { StyledHeroListWrapper } from "./StyledHeroList";
import HeroListItem from "./heroListItem/HeroListItem";
import HeroPopular from "./heroPopular/HeroPopular";

const HeroList = (props) => {
  return (
    <StyledHeroListWrapper>
      {props.media.map((item) => (
        <HeroListItem key={item.id} item={item}></HeroListItem>
      ))}
      {props.media.map((item) => (
        <HeroPopular key={item.id} item={item}></HeroPopular>
      ))}
    </StyledHeroListWrapper>
  );
};

export default HeroList;
