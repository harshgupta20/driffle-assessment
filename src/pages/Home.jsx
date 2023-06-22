import React, { useContext, useEffect, useState } from 'react'
import "../styles/Home.css";

// COMPONENTS
import Navbar from "../components/Navbar";
import Card from "../components/Card";
// import AddModal from '../components/AddModal';
import { AppContext } from '../App';

// SEARCH IMAGE
import SearchImage from "../assets/search-icon.jpg";

const Home = () => {

  // STATES FOR LOCAL STORAGE DATA
  const [notesData, setNotesData] = useState();

  // STATE FOR SEARCH INPUT
  const [simpleSearch, setSimpleSearch] = useState("");

  //CONTEXT
  const { update } = useContext(AppContext);

  useEffect(() => {
    // SETTING TITLE
    document.title = "Home | Driffle Notes"

    // GETTING DATA FROM LOCAL STORAGE
    if (localStorage.getItem('notesData')) {
      // SETTING DATA TO STATE
      setNotesData(JSON.parse(localStorage.getItem('notesData')));
    }
  }, [update])



  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      {/* // HOME MAIN */}
      <div id="home-main">
        <div id="home-searchBar">

          {/* // SEARCH BAR */}
          <div id="search-main">
            {/* // SEARCH ICON */}
            <img id="search-img" src={SearchImage} alt="searchIcon" />
            {/* // SEARCH INPUT */}
            <input id="searchbar" onChange={e => setSimpleSearch(e.target.value)} type="text" placeholder='Search with "title"' />
          </div>
        </div>

        {/* // CARDS MAIN */}
        <div id="cards-main">
          {/* // MAPPING DATA FROM LOCAL STORAGE AND INPUT STATE */}
          {notesData ? notesData.filter(filterData => filterData.title.toLowerCase().includes(simpleSearch)).map((note) => (
            <Card title={note.title} desc={note.desc} date={note.date} id={note.id} />
          )) : ""}
        </div>
      </div>
    </>
  )
}

export default Home;