import React from "react";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Shows = () => {
  const { searchQuery, setSearchQuery, medias, popularMedias } = useMedia(
    "tv",
    "life"
  );

  return (
    <>
      <Header />
      <Hero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        defaultListTitle='Shows'
        medias={medias}
        popularMedias={popularMedias}
      />
    </>
  );
};

export default Shows;
