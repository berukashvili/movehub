import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./StyledApp";
import Routes from "components/Routes";
import { searchItem } from "apis/MovieDB";

const App = () => {
  const [mediaQuery, setMediaQuery] = useState("avengers");
  const [debounce, setDebounce] = useState(mediaQuery);
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [shows, setShows] = useState([]);
  const [popularShows, setPopularShows] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounce(mediaQuery ? mediaQuery : "avengers");
    }, 500);
    return () => {
      clearTimeout(timerId);
    };
  }, [mediaQuery]);

  //MOVIES SECTION START

  useEffect(() => {
    const search = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/search/movie`, {
        params: {
          query: debounce,
        },
      });
      const renderedMovies = results.slice([0], [4]);
      setMovies(renderedMovies);
    };

    search();
  }, [debounce]);

  useEffect(() => {
    const getPopularMovies = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/movie/popular?`, {
        params: {
          query: debounce,
        },
      });
      const renderedMovies = results.slice([0], [10]);

      setPopularMovies(renderedMovies);
    };

    getPopularMovies();
  }, []);

  //MOVIES SECTION END

  //SHOWS SECTION START

  useEffect(() => {
    const search = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/search/tv?`, {
        params: {
          query: debounce,
        },
      });
      const renderedShows = results.slice([0], [4]);
      setShows(renderedShows);
    };

    search();
  }, [debounce]);

  useEffect(() => {
    const getPopularShows = async () => {
      const {
        data: { results },
      } = await searchItem.get(`/tv/popular?`, {
        params: {
          query: debounce,
        },
      });
      const renderedShows = results.slice([0], [10]);

      setPopularShows(renderedShows);
    };

    getPopularShows();
  }, []);

  //SHOWS SECTION END

  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes
          movies={movies}
          popularMovies={popularMovies}
          shows={shows}
          popularShows={popularShows}
        />
      </Router>
    </>
  );
};

export default App;
