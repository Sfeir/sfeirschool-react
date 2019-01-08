import React from "react";

import logo from "../AppBar.logo.svg";

export function AppBar() {
  return (
    <>
      <header className="mdc-top-app-bar">
        <div className="mdc-top-app-bar__row">
          <section className="mdc-top-app-bar__section">
            <img src={logo} alt="People logo" />
          </section>
        </div>
      </header>
      <div className="mdc-top-app-bar--fixed-adjust" />
    </>
  );
}
