import React from "react";
import { StyledInput } from "./StyledSearchBar";

export const SearchBar = ({ searchQuery, setSearchQuery }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <StyledInput
        onChange={(e) => setSearchQuery(e.target.value)}
        type='text'
        placeholder='Search'
        name='query'
      />
    </form>
  );
};

export default SearchBar;
