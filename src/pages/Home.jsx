import React, { useContext, useEffect, useState } from 'react'
import "../styles/Home.css";

// COMPONENTS
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import Card from "../components/Card";
import AddModal from '../components/AddModal';
import { AppContext } from '../App';

const Home = () => {

  const [notesData, setNotesData] = useState();

  //CONTEXT
  const {update, setUpdate} = useContext(AppContext);

  useEffect(() => {
    document.title = "Home | Driffle Notes"
    
    if(localStorage.getItem('notesData')){
      setNotesData(JSON.parse(localStorage.getItem('notesData')));
    }
    console.log(update);
    console.log("useEffect Home");
  }, [update])


  console.log(notesData);

  return (
    <>
      <Navbar />
      <div id="home-main">
        <div id="home-searchBar">
          <SearchBar />
        </div>

        <div id="cards-main">
          {/* <Card/> */}
          {
            notesData ? notesData.map((note) => {return <Card title={note.title} desc={note.desc} date={note.date} id={note.id}/>}) : <h1>No Notes Available</h1>
          }
        </div>

        <AddModal/>
      </div>
    </>
  )
}

export default Home;