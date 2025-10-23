import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>HealthTrack</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/daily-log">Daily Log</Link> | 
        <Link to="/progress">Progress</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
