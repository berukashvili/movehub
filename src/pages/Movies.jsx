import React, { useState, useEffect } from "react";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Movies = () => {
  // const [mediaQuery, setMediaQuery] = useState("avengers");
  // const [debounce, setDebounce] = useState(mediaQuery);
  // const [movies, setMovies] = useState([]);
  // const [popularMovies, setPopularMovies] = useState([]);

  const { mediaQuery, debounce, medias, popularMedias } = useMedia("movie");

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
