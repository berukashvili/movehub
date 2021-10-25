import React, { useState, useEffect } from "react";
import { StyledHeroWrapper } from "./StyledHero";
import HeroList from "./heroList/HeroList";
import { searchMedia } from "apis/MovieDB";
import { useLocation } from "react-router";

const Hero = ({ movies, popularMovies, shows, popularShows }) => {
  // const [mediaQuery, setMediaQuery] = useState(props.defaultMedia);
  // const [debounce, setDebounce] = useState(mediaQuery);
  // const [movies, setMovies] = useState([]);
  // const [popularMovies, setPopularMovies] = useState([]);
  // const [shows, setShows] = useState([]);
  // const [popularShows, setPopularShows] = useState([]);

  // const { pathname } = useLocation();

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setDebounce(mediaQuery ? mediaQuery : props.defaultMedia);
  //   }, 500);
  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [mediaQuery]);

  // //MOVIES SECTION START

  // useEffect(() => {
  //   const search = async () => {
  //     const {
  //       data: { results },
  //     } = await searchMedia.get(`/search/movie`, {
  //       params: {
  //         query: debounce,
  //       },
  //     });
  //     const renderedMovies = results.slice([0], [4]);
  //     setMovies(renderedMovies);
  //   };

  //   search();
  // }, [debounce]);

  // useEffect(() => {
  //   const getPopularMovies = async () => {
  //     const {
  //       data: { results },
  //     } = await searchMedia.get(`/movie/popular?`, {
  //       params: {
  //         query: debounce,
  //       },
  //     });
  //     const renderedMovies = results.slice([0], [10]);

  //     setPopularMovies(renderedMovies);
  //   };

  //   getPopularMovies();
  // }, []);

  // //MOVIES SECTION END

  // //SHOWS SECTION START

  // useEffect(() => {
  //   const search = async () => {
  //     const {
  //       data: { results },
  //     } = await searchMedia.get(`/search/tv?`, {
  //       params: {
  //         query: debounce,
  //       },
  //     });
  //     const renderedShows = results.slice([0], [4]);
  //     setShows(renderedShows);
  //   };

  //   search();
  // }, [debounce]);

  // useEffect(() => {
  //   const getPopularShows = async () => {
  //     const {
  //       data: { results },
  //     } = await searchMedia.get(`/tv/popular?`, {
  //       params: {
  //         query: debounce,
  //       },
  //     });
  //     const renderedShows = results.slice([0], [10]);

  //     setPopularShows(renderedShows);
  //   };

  //   getPopularShows();
  // }, []);

  // //SHOWS SECTION END

  return (
    <StyledHeroWrapper>
      <HeroList
        movies={movies}
        popularMovies={popularMovies}
        shows={shows}
        popularShows={popularShows}
      />
    </StyledHeroWrapper>
  );
};

export default Hero;
