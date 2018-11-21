import React from "react";
import "./Card.css";

export function Card(props) {
  return (
    <section className="Card card">
      <div className="card-content">
        <div className="card-title">{props.title}</div>
      </div>
    </section>
  );
}
