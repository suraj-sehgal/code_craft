import React from "react";
import {Link} from "react-router-dom";
import './NavBar.scss'; // Import CSS file for styling

function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src="logo.png" alt="CodeCraft Logo" />
          <span>CodeCraft</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/output">Output</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
