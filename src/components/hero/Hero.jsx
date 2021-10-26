import React, { useState, useEffect } from "react";
import { StyledHeroWrapper } from "./StyledHero";
import HeroList from "./heroList/HeroList";

const Hero = ({ medias, popularMedias }) => {
  return (
    <StyledHeroWrapper>
      <HeroList medias={medias} popularMedias={popularMedias} />
    </StyledHeroWrapper>
  );
};

export default Hero;
