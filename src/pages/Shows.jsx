import React from "react";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Shows = () => {
  const { mediaQuery, setMediaQuery, medias, popularMedias } = useMedia(
    "tv",
    "life"
  );

  return (
    <>
      <Header />
      <Hero
        mediaQuery={mediaQuery}
        setMediaQuery={setMediaQuery}
        defaultListTitle='Shows'
        medias={medias}
        popularMedias={popularMedias}
      />
    </>
  );
};

export default Shows;
