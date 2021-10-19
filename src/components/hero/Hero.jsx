import React, { useState, useEffect } from "react";
import { StyledHeroWrapper } from "./StyledHero";
import HeroList from "./heroList/HeroList";
import { searchMedia } from "apis/MovieDB";

const Hero = (props) => {
  const [mediaQuery, setMediaQuery] = useState(props.defaultMedia);
  const [debounce, setDebounce] = useState(mediaQuery);
  const [media, setMedia] = useState([]);
  const [popular, setPopular] = useState([]);
  const [upcoming, setUpcoming] = useState([]);

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
      const renderedMovies = results.slice([0], [4]);
      setMedia(renderedMovies);
    };

    search();
  }, [debounce]);

  useEffect(() => {
    const getPopular = async () => {
      const {
        data: { results },
      } = await searchMedia.get(`/movie/popular?`, {
        params: {
          query: debounce,
        },
      });
      const renderedMovies = results.slice([0], [10]);
      setPopular(renderedMovies);
    };

    getPopular();
  }, []);
  useEffect(() => {
    const getUpcoming = async () => {
      const {
        data: { results },
      } = await searchMedia.get(`/movie/upcoming?`, {
        params: {
          query: debounce,
        },
      });
      const renderedMovies = results.slice([0], [10]);
      setUpcoming(renderedMovies);
    };

    getUpcoming();
  }, []);

  return (
    <StyledHeroWrapper>
      <HeroList media={media} popular={popular} upcoming={upcoming} />
    </StyledHeroWrapper>
  );
};

export default Hero;
