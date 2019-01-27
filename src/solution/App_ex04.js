import React, { useState } from "react";
import { TopAppBarActionItem } from "@rmwc/top-app-bar";

import { Header } from "./Header";
import { PersonCard } from "./PersonCard";
import { Carousel } from "./Carousel_ex04";

export const App = ({ people }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const toggleView = () => setShowCarousel(x => !x);

  const personCards = people.map(person => (
    <PersonCard person={person} key={person.id} />
  ));

  return (
    <>
      <Header>
        <TopAppBarActionItem
          icon={showCarousel ? "view_module" : "view_carousel"}
          onClick={toggleView}
        />
      </Header>
      <main>
        {showCarousel ? <Carousel>{personCards}</Carousel> : personCards}
      </main>
    </>
  );
};
