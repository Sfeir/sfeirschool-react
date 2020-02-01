import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

type CarouselProps = {
  children: React.ReactElement[];
};

export const Carousel: React.FC<CarouselProps> = () => {
  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini />
      <div className="carousel">
        Display PersonCards here. The current needs to have className="current",
        the previous "prev" and the next "next" respectively. Use
        React.cloneElement to add className prop to children
      </div>
      <Fab icon="skip_next" mini />
    </div>
  );
};
