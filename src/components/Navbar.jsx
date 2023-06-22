import React, { useState } from 'react';
import "../styles/Navbar.css";

// DRIFFLE WEBSITE LOGO
import Logo from "../assets/driffle-logo.svg";

// COMPONENTS
import AddModal from './AddModal';

const Navbar = () => {
  // STATE FOR MODAL
  const [open, setOpen] = useState(false);

  // FUNCTION FOR OPENING MODAL
  const handleOpen = () => setOpen(true);

  return (
    <>
        {/* // NAVBAR */}
        <nav id="nav-main">
          {/* // NAVBAR LOGO */}
            <img id="nav-logo" src={Logo} alt="logo" />
            {/* // NAVBAR ADD BUTTON */}
            <button onClick={handleOpen} id="nav-btn-add">+ Add Note</button>
        </nav>

        {/* // ADD MODAL */}
        <AddModal open={open} setOpen={setOpen}/>
    </>
  )
}

export default Navbar