import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "../solution/Header";
import { Loading } from "../solution/Loading";
import { SearchableList } from "../solution/SearchableList";

import { Player } from "./Player";
// import { Player } from "../solution/Player";

export const App: React.FC = () => {
  const [showList, setShowList] = useState(true);
  const toggleView = () => setShowList(x => !x);
  const toggleIcon = showList ? "view_carousel" : "view_module";

  // get people from http://localhost:3000/people
  // you can use loadPeople in ../utils.js
  const people = [];

  const CurrentView: React.ComponentType<{ people: People }> =
    people.length === 0 ? Loading : showList ? SearchableList : Player;

  return (
    <>
      <Header>
        <TopAppBarActionItem icon={toggleIcon} onClick={toggleView} />
      </Header>
      <CurrentView people={people} />
    </>
  );
};
