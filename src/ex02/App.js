import React from "react";

import { AppBar } from "../solution/components/AppBar";
import { Card } from "./components/Card";

export const App = () => (
  <>
    <AppBar />
    <main>
      <Card title="React @ Sfeir" />
    </main>
  </>
);
