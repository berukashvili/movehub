import React from "react";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Movies = () => {
  const { searchQuery, setSearchQuery, medias, popularMedias } = useMedia(
    "movie",
    "Avengers"
  );

  return (
    <>
      <Header />
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        defaultListTitle='Movies'
        medias={medias}
        popularMedias={popularMedias}
      />
    </>
  );
};

export default Movies;
