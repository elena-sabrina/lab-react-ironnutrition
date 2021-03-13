import React from "react";
import meals from "./../meals";

const SearchBar = (props) => {
  const handleInputChange = (event) => {
    props.onQueryChange(event.target.value);
  };

  return (
    <input
      type='text'
      placeholder='Search for a meal'
      value={props.query}
      onChange={handleInputChange}
    />
    
  );
};

export default SearchBar;
