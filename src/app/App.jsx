import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { GlobalStyle } from "./StyledApp";
import Routes from "components/Routes";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <main>
          <Routes />
        </main>
      </Router>
    </>
  );
};

export default App;
