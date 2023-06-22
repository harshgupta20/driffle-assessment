import React, { useContext, useEffect, useState } from 'react'
import "../styles/Home.css";

// COMPONENTS
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import AddModal from '../components/AddModal';
import { AppContext } from '../App';

import SearchImage from "../assets/search-icon.jpg";

const Home = () => {

  const [notesData, setNotesData] = useState();
  const [simpleSearch, setSimpleSearch] = useState("");

  //CONTEXT
  const { update } = useContext(AppContext);

  useEffect(() => {
    document.title = "Home | Driffle Notes"

    if (localStorage.getItem('notesData')) {
      setNotesData(JSON.parse(localStorage.getItem('notesData')));
    }
  }, [update])



  return (
    <>
      <Navbar />
      <div id="home-main">
        <div id="home-searchBar">
          <div id="search-main">
            <img id="search-img" src={SearchImage} alt="searchIcon" />
            <input id="searchbar" onChange={e => setSimpleSearch(e.target.value)} type="text" placeholder='Search with "title"' />
          </div>
        </div>

        <div id="cards-main">
          {notesData ? notesData.filter(filterData => filterData.title.toLowerCase().includes(simpleSearch)).map((note) => (
            <Card title={note.title} desc={note.desc} date={note.date} id={note.id} />
          )) : ""}
        </div>

        <AddModal />
      </div>
    </>
  )
}

export default Home;