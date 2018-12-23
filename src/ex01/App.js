import React from "react";

import { AppBar } from "./components/AppBar";
import { Card } from "./components/Card";

const title = "React @ SFEIR";

export function App() {
  return (
    <>
      <AppBar />
      <main>
        <Card title={title} />
      </main>
    </>
  );
}
