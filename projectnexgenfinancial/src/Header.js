import React from "react";
import logo from "./logo.png";
import {Link} from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <div className="Menu">
        <a><Link to="/"><img src={logo} width="198px"></img></Link></a>
        <div className="navigation-items">
          <a className="navigation-item w-nav-link"><Link to="/about">About</Link></a>
          <a className="navigation-item w-nav-link">Form</a>
          <a className="navigation-item w-nav-link">FAQ</a>
          <a className="navigation-item w-nav-link">Contact</a>
        </div>
        <a><Link to="/login" className="button">Login</Link></a>
      </div>
    </div>
  );
}
export default Header;