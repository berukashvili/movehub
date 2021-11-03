import React from "react";
import { StyledHeroWrapper } from "./StyledHero";
import HeroList from "./heroList/HeroList";
import SearchBar from "components/searchBar/SearchBar";

const Hero = ({
  searchQuery,
  setSearchQuery,
  defaultListTitle,
  medias,
  popularMedias,
}) => {
  return (
    <StyledHeroWrapper>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HeroList
        defaultListTitle={defaultListTitle}
        medias={medias}
        popularMedias={popularMedias}
      />
    </StyledHeroWrapper>
  );
};

export default Hero;
