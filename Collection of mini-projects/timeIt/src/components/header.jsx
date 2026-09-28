import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="app-logo">
        <span className="app-logo-icon" aria-hidden="true">
          <i className="fa-solid fa-gauge-high"></i>
        </span>
        <span className="app-logo-text">TimeIt</span>
      </Link>

      <nav className="app-nav" aria-label="Main navigation">
        <NavLink to="/" end>
          <i className="fa-solid fa-house" aria-hidden="true"></i>
          <span className="nav-label">Home</span>
        </NavLink>

        <NavLink to="/stop-watch">
          <i className="fa-solid fa-stopwatch" aria-hidden="true"></i>
          <span className="nav-label">Stopwatch</span>
        </NavLink>

        <NavLink to="/timer">
          <i className="fa-solid fa-hourglass-half" aria-hidden="true"></i>
          <span className="nav-label">Timer</span>
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
