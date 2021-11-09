import React from "react";
import { StyledMoviesWrapper } from "./StyledMovies";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Movies = () => {
  const { searchQuery, setSearchQuery, medias, popularMedias } = useMedia(
    "movie",
    "Avengers"
  );

  return (
    <StyledMoviesWrapper>
      <Header />
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        defaultListTitle='Movies'
        medias={medias}
        popularMedias={popularMedias}
      />
    </StyledMoviesWrapper>
  );
};

export default Movies;
