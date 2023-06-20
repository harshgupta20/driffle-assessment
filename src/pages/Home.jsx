import React from 'react'
import "../styles/Home.css";

// COMPONENTS
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import AddModal from '../components/AddModal';

const Home = () => {
  return (
    <>
      <Navbar />
      <div id="home-main">
        <div id="home-searchBar">
          <SearchBar />
        </div>

        <div id="cards-main">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
        </div>

        <AddModal/>
      </div>
    </>
  )
}

export default Home;