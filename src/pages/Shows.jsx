import React from "react";
import Hero from "components/hero/Hero";
import Header from "components/header/Header";

const Shows = () => {
  return (
    <>
      <Header />
      <Hero mediaPage='tv' defaultMedia='marvel' title='Shows' />
    </>
  );
};

export default Shows;
