import React, { useState, useEffect } from "react";
import Header from "components/header/Header";
import Hero from "components/hero/Hero";
import { useMedia } from "hooks/useMedia";

const Shows = () => {
  const { mediaQuery, debounce, medias, popularMedias } = useMedia(
    "tv",
    "life"
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

export default Shows;
