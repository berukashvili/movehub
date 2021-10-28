import React from "react";
import { StyledHeroWrapper } from "./StyledHero";
import HeroList from "./heroList/HeroList";
import { StyledMainBackground } from "./StyledHero";

const Hero = ({ medias, popularMedias }) => {
  return (
    <StyledHeroWrapper>
      <StyledMainBackground />
      <HeroList medias={medias} popularMedias={popularMedias} />
    </StyledHeroWrapper>
  );
};

export default Hero;
