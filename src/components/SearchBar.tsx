import React from "react";

const SearchBar = () => {
  return (
    <form action="#" className="searchbar">
      <input
        type="text"
        name="search"
        placeholder="find your film"
        className="searchbar__input"
      />
      <input type="submit" value="Search" className="searchbar__submit" />
    </form>
  )
}

export default SearchBar;