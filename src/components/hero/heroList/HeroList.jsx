import React from "react";
import {
  StyledHeroListWrapper,
  StyledHeroDefaultWrapper,
  StyledHeroPopularWrapper,
} from "./StyledHeroList";
import HeroListItem from "./heroListItem/HeroListItem";
import { useLocation } from "react-router";

export const HeroList = ({ movies, popularMovies, shows, popularShows }) => {
  const { pathname } = useLocation();

  const defaultList =
    pathname === "/movies"
      ? movies.map((movie) => (
          <HeroListItem key={movie.id} movie={movie}></HeroListItem>
        ))
      : shows.map((show) => (
          <HeroListItem key={show.id} shows={show}></HeroListItem>
        ));

  shows.map((item) => console.log(item.id));

  const popularList =
    pathname === "/movies"
      ? popularMovies.map((popularMovie) => (
          <HeroListItem
            key={popularMovie.id}
            movie={popularMovie}
          ></HeroListItem>
        ))
      : popularShows.map((popularShow) => (
          <HeroListItem
            key={popularShow.id}
            popularShow={popularShow}
          ></HeroListItem>
        ));

  return (
    <StyledHeroListWrapper>
      <StyledHeroDefaultWrapper>
        {movies.map((movie) => (
          <HeroListItem key={movie.id} movie={movie}></HeroListItem>
        ))}
      </StyledHeroDefaultWrapper>
      <StyledHeroPopularWrapper></StyledHeroPopularWrapper>
    </StyledHeroListWrapper>
  );
};

export default HeroList;
