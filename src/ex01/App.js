import React from "react";
import { AppBar } from "./components/AppBar";
import { Card } from "./components/Card";
import "./App.css";

const title = "React @ SFEIR";

export function App() {
  return (
    <div className="App">
      <header>
        <AppBar />
      </header>
      <main>
        <Card title={title} />
      </main>
    </div>
  );
}
