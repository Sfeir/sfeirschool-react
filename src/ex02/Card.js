import React from "react";

export const Card = ({ children }) => (
  <section className="mdc-card">
    <div className="card-content content-type-person-info">{children}</div>
  </section>
);

// implement these subcomponents

export const CardImage = () => null;
export const CardHeader = () => null;
export const CardInfo = () => null;
