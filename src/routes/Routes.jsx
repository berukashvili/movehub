import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "pages/movies/Movies";
import Shows from "pages/shows/Shows";
import Favourites from "pages/favourites/Favourites";
import Details from "pages/details/Details";
import NotFound from "pages/notFound/NotFound";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Redirect from='/' to='/movies'></Redirect>
        </Route>
        <Route path='/movies' component={Movies} />
        <Route path='/shows' component={Shows} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/details/:id' component={Details} />
        <Route path='*' component={NotFound} />
      </Switch>
    </>
  );
};

export default Routes;
