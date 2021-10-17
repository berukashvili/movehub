import React from "react";
import Hero from "components/hero/Hero";
import Header from "components/header/Header";

const Movies = () => {
  return (
    <>
      <Header />
      <Hero mediaPage='movie' defaultMedia='Avengers' title='Movies' />
    </>
  );
};

export default Movies;
