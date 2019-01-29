import React from "react";

import { Header } from "./Header";
// import { Header } from "../solution/ex01/Header";
import { Card } from "./Card";
// import { Card } from "../solution/ex01/Card";

const message = "React @ SFEIR";

export function App() {
  return (
    <>
      <header>replace this header with the Header component</header>
      <main>
        put the Card component here and pass "{message}" as title prop
      </main>
    </>
  );
}
