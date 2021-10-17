import React from "react";
import { StyledHeroListWrapper } from "./StyledHeroList";
import HeroListItem from "./heroListItem/HeroListItem";

const HeroList = (props) => {
  return (
    <StyledHeroListWrapper>
      {props.media.map((item) => (
        <HeroListItem key={item.id} item={item}></HeroListItem>
      ))}
    </StyledHeroListWrapper>
  );
};

export default HeroList;
