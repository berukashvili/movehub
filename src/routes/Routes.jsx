import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Movies from "pages/Movies";
import Shows from "pages/Shows";
import Favourites from "pages/Favourites";
import Details from "pages/details/Details";

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
      </Switch>
    </>
  );
};

export default Routes;
