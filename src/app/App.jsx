import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./StyledApp";
import Routes from "components/Routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
};

export default App;
