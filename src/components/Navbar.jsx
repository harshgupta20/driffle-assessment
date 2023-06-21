import React, { useState } from 'react';
import "../styles/Navbar.css";

// DRIFFLE WEBSITE LOGO
import Logo from "../assets/driffle-logo.svg";
import AddModal from './AddModal';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
        <nav id="nav-main">
            <img id="nav-logo" src={Logo} alt="logo" />
            <button onClick={handleOpen} id="nav-btn-add">+ Add Note</button>
        </nav>
        <AddModal open={open} setOpen={setOpen}/>
    </>
  )
}

export default Navbar