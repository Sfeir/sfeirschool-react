import React from "react";

export const Card = ({ children }) => (
  <section className="mdc-card">
    <div className="card-content content-type-person-info">{children}</div>
  </section>
);

// declare and export subcomponents here
