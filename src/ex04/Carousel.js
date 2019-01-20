import React, { useState } from "react";
import { Fab } from "@rmwc/fab";

import { range } from "../utils";

export const Carousel = () => {
  return (
    <div className="flex-row">
      <Fab icon="skip_previous" mini />
      What will you put here?
      <Fab icon="skip_next" mini />
    </div>
  );
};
