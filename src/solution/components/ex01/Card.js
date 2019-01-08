import React from "react";

export function Card(props) {
  return (
    <section className="mdc-card" style={{ width: 480 }}>
      <div style={{ padding: "1rem" }}>
        <h1 className="mdc-typography--headline4">{props.title}</h1>
      </div>
    </section>
  );
}
