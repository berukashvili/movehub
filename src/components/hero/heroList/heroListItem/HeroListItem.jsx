import React from "react";
import {
  StyledItemNavLink,
  StyledItemTitle,
  StyledHeroImageContainer,
  StyledHeroImage,
} from "./StyledHeroListItem";

const HeroListItem = (props) => {
  const img_780 = "https://image.tmdb.org/t/p/w780";

  return (
    <StyledItemNavLink
      default={props.default}
      key={props.item.id}
      to={`/media/${props.item.id}`}
    >
      <StyledHeroImageContainer default={props.default}>
        <StyledHeroImage src={`${img_780}/${props.item.poster_path}`} />
        <StyledItemTitle default={props.default}>
          {props.item.title}
        </StyledItemTitle>
      </StyledHeroImageContainer>
    </StyledItemNavLink>
  );
};

export default HeroListItem;
