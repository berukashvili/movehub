import React from "react";
import { StyledInput } from "./StyledSearchBar";

const SearchBar = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        value={props.mediaQuery}
        onChange={(e) => props.setMediaQuery(e.target.value)}
        type='text'
        placeholder='Search'
        name='query'
      />
    </form>
  );
};

export default SearchBar;
