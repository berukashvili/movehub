import React from "react";
import {
  StyledItemNavLink,
  StyledItemTitle,
  StyledHeroImageContainer,
  StyledHeroImage,
} from "./StyledHeroListItem";

const HeroListItem = ({ movie, popularMovie, show, popularShow }) => {
  const img_780 = "https://image.tmdb.org/t/p/w780";

  return (
    <StyledItemNavLink key={`${movie}.id`} to={`/details/${movie.id}`}>
      <StyledHeroImageContainer>
        <StyledHeroImage src={`${img_780}/${movie.poster_path}`} />
        <StyledItemTitle>{movie.title}</StyledItemTitle>
      </StyledHeroImageContainer>
    </StyledItemNavLink>
  );
};

export default HeroListItem;
