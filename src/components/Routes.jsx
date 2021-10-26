import React from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "pages/Movies";
import Shows from "pages/Shows";
import Favourites from "pages/Favourites";
import Item from "./item/Item";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path={["/", "/movies"]} component={Movies} />
        <Route path='/shows' component={Shows} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/details/:id' component={Item} />
      </Switch>
    </>
  );
};

export default Routes;
