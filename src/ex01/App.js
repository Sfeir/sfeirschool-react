import React from "react";

import { Header } from "./Header";
import { Card } from "./Card";

// import { Header } from "../solution/Header_ex01";
// import { Card } from "../solution/Card_ex01";

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
