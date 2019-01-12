import React from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { AppBar } from "../solution/components/AppBar";
import { usePeople } from "../solution/components/ex03/usePeople";

import { AllCards } from "./components/AllCards.js";

export function App() {
  const { people, shuffle } = usePeople();
  return (
    <>
      <AppBar>
        <TopAppBarActionItem onClick={shuffle}>shuffle</TopAppBarActionItem>
      </AppBar>
      <AllCards people={people} />
    </>
  );
}
