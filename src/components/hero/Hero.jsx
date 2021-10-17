import React, { useState, useEffect } from "react";
import {
  StyledHeroWrapper,
  StyledHeroHeaderWrapper,
  StyledHeroHeader,
} from "./StyledHero";
import HeroList from "./heroList/HeroList";
import SearchBar from "./searchBar/SearchBar";
import { searchMedia } from "apis/MovieDB";

const Hero = (props) => {
  const [mediaQuery, setMediaQuery] = useState(props.defaultMedia);
  const [debounce, setDebounce] = useState(mediaQuery);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(mediaQuery ? mediaQuery : props.defaultMedia);
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [mediaQuery]);

  useEffect(() => {
    const search = async () => {
      const {
        data: { results },
      } = await searchMedia.get(`/search/${props.mediaPage}?`, {
        params: {
          query: debounce,
        },
      });
      const renderedMovies = results.slice([0], [3]);
      setMedia(renderedMovies);
    };

    search();
  }, [debounce]);

  return (
    <StyledHeroWrapper>
      <StyledHeroHeaderWrapper>
        <StyledHeroHeader>{props.title}</StyledHeroHeader>
        <SearchBar setMediaQuery={setMediaQuery} />
      </StyledHeroHeaderWrapper>
      <HeroList media={media} />
    </StyledHeroWrapper>
  );
};

export default Hero;
