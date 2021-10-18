import React from "react";
import {
  StyledItemNavLink,
  StyledHeroImageContainer,
  StyledHeroImage,
  StyledItemTitle,
} from "./StyledHeroPopular";

const HeroPopular = ({ item }) => {
  const img_780 = "https://image.tmdb.org/t/p/w780";

  return (
    <StyledItemNavLink key={item.id} to={`/media/${item.id}`}>
      <StyledHeroImageContainer>
        <StyledItemTitle>{item.title}</StyledItemTitle>
        <StyledHeroImage src={`${img_780}/${item.poster_path}`} />
      </StyledHeroImageContainer>
    </StyledItemNavLink>
  );
};

export default HeroPopular;
