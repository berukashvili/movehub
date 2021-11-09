import React from "react";
import { StyledMoviesWrapper } from "./StyledShows";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Shows = () => {
  const { searchQuery, setSearchQuery, medias, popularMedias } = useMedia(
    "tv",
    "life"
  );

  return (
    <StyledMoviesWrapper>
      <Header />
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        defaultListTitle='Shows'
        medias={medias}
        popularMedias={popularMedias}
      />
    </StyledMoviesWrapper>
  );
};

export default Shows;
