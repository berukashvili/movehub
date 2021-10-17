import React from "react";
import { Route, Switch } from "react-router-dom";
import Movies from "pages/Movies";
import Shows from "pages/Shows";
import Favourites from "pages/Favourites";
import Media from "pages/media/Media";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path={["/", "/movies"]} exact component={Movies} />
        <Route path='/shows' component={Shows} />
        <Route path='/favourites' component={Favourites} />
        <Route path='/media/:id' component={Media} />
      </Switch>
    </>
  );
};

export default Routes;
