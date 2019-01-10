import React from "react";

export const Card = ({ children }) => (
  <section className="mdc-card">
    <div className="person-info">{children}</div>
  </section>
);

// declare and export subcomponents here
