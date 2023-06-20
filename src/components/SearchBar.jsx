import React from 'react'
import "../styles/SearchBar.css";

// SEARCH IMAGE
import SearchImage from "../assets/search-icon.jpg";

const SearchBar = () => {
  return (
    <>
    <div id="search-main">
      <img id="search-img" src={SearchImage} alt="searchIcon"/>
      <input id="searchbar" type="text" placeholder='Search...' />
    </div>
    </>
  )
}

export default SearchBar