import React, { useState, useEffect } from "react";
import { StyledHeroWrapper } from "./StyledHero";
import HeroList from "./heroList/HeroList";
import { searchMedia } from "apis/MovieDB";
import { useLocation } from "react-router";

const Hero = (props) => {
  const [mediaQuery, setMediaQuery] = useState(props.defaultMedia);
  const [debounce, setDebounce] = useState(mediaQuery);
  const [movies, setMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularShows, setPopularShows] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [topRated, setTopRated] = useState([]);

  const { pathname } = useLocation();
  const category1 = pathname === "/movies" ? "movie" : "tv";
  const category2 =
    pathname === "/movies" ? "/movie/popular?" : "/tv/top_rated?";

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
      setMovies(renderedMovies);
    };

    search();
  }, [debounce]);

  //MOVIES SECTION START
  useEffect(() => {
    const getPopularMovies = async () => {
      const {
        data: { results },
      } = await searchMedia.get(`/movie/popular?`, {
        params: {
          query: debounce,
        },
      });
      const renderedMovies = results.slice([0], [10]);

      setPopularMovies(renderedMovies);
    };

    getPopularMovies();
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

  //MOVIES SECTION END

  //SHOWS SECTION START
  useEffect(() => {
    const getPopularShows = async () => {
      const {
        data: { results },
      } = await searchMedia.get(`/tv/popular?`, {
        params: {
          query: debounce,
        },
      });
      const renderedShows = results.slice([0], [10]);

      setPopularShows(renderedShows);
    };

    getPopularShows();
  }, []);
  useEffect(() => {
    const getTopRated = async () => {
      const {
        data: { results },
      } = await searchMedia.get(`/movie/upcoming?`, {
        params: {
          query: debounce,
        },
      });
      const renderedShows = results.slice([0], [10]);

      setTopRated(renderedShows);
    };

    getTopRated();
  }, []);

  //SHOWS SECTION END

  return (
    <StyledHeroWrapper>
      <HeroList
        movies={movies}
        popularMovies={popularMovies}
        upcoming={upcoming}
        shows={shows}
        popularShows={popularShows}
        topRated={topRated}
      />
    </StyledHeroWrapper>
  );
};

export default Hero;
