import React from "react";

const Search = ({ search, setSearch }) => {
  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          id="search"
          role="searchbox"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
