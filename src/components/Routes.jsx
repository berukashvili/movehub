import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./header/Header";
import Hero from "./hero/Hero";
import Item from "./item/Item";

const Routes = ({ movies, popularMovies, shows, popularShows }) => {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/movies"]}>
          <Header />
          <Hero
            movies={movies}
            popularMovies={popularMovies}
            shows={shows}
            popularShows={popularShows}
          />
        </Route>
        <Route path='/shows'>
          <Header />
          <Hero
            movies={movies}
            popularMovies={popularMovies}
            shows={shows}
            popularShows={popularShows}
          />
        </Route>
        <Route path='/favourites'></Route>
        <Route path='/details/:id'>
          <Item
            movies={movies}
            popularMovies={popularMovies}
            shows={shows}
            popularShows={popularShows}
          />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
