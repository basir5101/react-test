import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header>
      <div className="navbar">
        <img src={logo} height="10px" className="App-logo" alt="logo" />
        <div>
          <input type="text" placeholder="search user..." />
        </div>
      </div>
      <hr />
    </header>
  );
}
