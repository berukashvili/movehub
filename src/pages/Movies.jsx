import React from "react";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Movies = () => {
  const { mediaQuery, debounce, medias, popularMedias } = useMedia(
    "movie",
    "Avengers"
  );

  return (
    <>
      <Header />
      <Hero
        mediaQuery={mediaQuery}
        debounce={debounce}
        medias={medias}
        popularMedias={popularMedias}
      />
    </>
  );
};

export default Movies;
