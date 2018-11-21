import React from "react";
import logo from "./AppBar.logo.svg";
import "./AppBar.css";

export function AppBar() {
  return (
    <nav className="AppBar">
      <img
        className="AppBar-logo"
        src={logo}
        aria-label="people"
        alt="People"
      />
    </nav>
  );
}
