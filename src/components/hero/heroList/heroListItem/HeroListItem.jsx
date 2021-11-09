import React from "react";
import {
  StyledItemNavLink,
  StyledItemTitle,
  StyledHeroImageContainer,
  StyledHeroImage,
} from "./StyledHeroListItem";
import { useLocation } from "react-router";

const HeroListItem = ({ media, defaultstyle }) => {
  const img_780 = "https://image.tmdb.org/t/p/w780";

  const { pathname } = useLocation();
  const getType = pathname === "/movies" ? "movie" : "tv";

  return (
    <StyledItemNavLink
      defaultstyle={defaultstyle}
      key={`${media}.id`}
      to={{
        pathname: `details/${media.id}`,
        state: { itemType: getType },
      }}
    >
      <StyledHeroImageContainer defaultstyle={defaultstyle}>
        <StyledHeroImage
          defaultstyle={defaultstyle}
          src={`${img_780}/${media.poster_path}`}
        />
        <StyledItemTitle defaultstyle={defaultstyle}>
          {media.title || media.original_name}
        </StyledItemTitle>
      </StyledHeroImageContainer>
    </StyledItemNavLink>
  );
};

export default HeroListItem;
