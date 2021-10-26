import React from "react";
import {
  StyledItemNavLink,
  StyledItemTitle,
  StyledHeroImageContainer,
  StyledHeroImage,
} from "./StyledHeroListItem";
import { useLocation } from "react-router";

const HeroListItem = ({ media, popularMovies }) => {
  const img_780 = "https://image.tmdb.org/t/p/w780";

  const { pathname } = useLocation();
  const getType = pathname === "/movies" ? "movie" : "tv";

  return (
    <StyledItemNavLink
      key={`${media}.id`}
      to={{
        pathname: `/details/${media.id}`,
        state: { itemType: getType },
      }}
    >
      <StyledHeroImageContainer>
        <StyledHeroImage src={`${img_780}/${media.poster_path}`} />
        <StyledItemTitle>{media.title}</StyledItemTitle>
      </StyledHeroImageContainer>
    </StyledItemNavLink>
  );
};

export default HeroListItem;
