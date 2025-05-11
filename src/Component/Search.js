import React from "react";

function Search({ value, onChangeFunction, className ,name}) {
  return (
    <div className={className}>
      <label htmlFor="search-field">Search: </label>
      <input
        type="text"
        id="search-field"
        value={value}
        onChange={onChangeFunction}
      />
    </div>
  );
}

export default Search;
