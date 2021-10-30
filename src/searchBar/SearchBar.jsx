import React, { useState } from "react";
import { StyledInput } from "./StyledSearchBar";

export const SearchBar = ({ mediaQuery, setMediaQuery }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        onChange={(e) => setMediaQuery(e.target.value)}
        type='text'
        placeholder='Search'
        name='query'
      />
    </form>
  );
};

export default SearchBar;
