import React from "react";
import "components/Navbar/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <ul className="nav-menu">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Service</li>
        </ul>
        <div className="logo">
          <div className="logo-circle">JC</div>
          <span className="logo-text">JCREA</span>
        </div>

        <ul className="nav-menu">
          <li className="nav-item">Resume</li>
          <li className="nav-item">Project</li>
          <li className="nav-item">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
