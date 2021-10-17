import React from "react";
import {
  StyledItemNavLink,
  StyledHeroImageContainer,
  StyledHeroImage,
  StyledItemTitle,
} from "./StyledHeroListItem";

const HeroListItem = ({ item }) => {
  const img_780 = "https://image.tmdb.org/t/p/w780";

  return (
    <StyledItemNavLink key={item.id} to={`/media/${item.id}`}>
      <StyledHeroImageContainer>
        <StyledHeroImage src={`${img_780}/${item.poster_path}`} />
      </StyledHeroImageContainer>
      <StyledItemTitle>{item.title}</StyledItemTitle>
    </StyledItemNavLink>
  );
};

export default HeroListItem;
