import React from 'react';
import "../styles/Navbar.css";

// DRIFFLE WEBSITE LOGO
import Logo from "../assets/driffle-logo.svg";

const Navbar = () => {
  return (
    <>
        <nav id="nav-main">
            <img id="nav-logo" src={Logo} alt="logo" />
            <button id="nav-btn-add">+ Add Note</button>
        </nav>
    </>
  )
}

export default Navbar