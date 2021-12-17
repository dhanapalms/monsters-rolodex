import React from "react";
import "./search.styles.css";

const Search = ({placeholder,onChange}) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Search;
