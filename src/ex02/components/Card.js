import React from "react";
import { Card as MdcCard } from "@rmwc/card";
import { Typography } from "@rmwc/typography";

const CardContent = ({ children }) => (
  <div style={{ padding: "1rem" }}>{children}</div>
);

export const Card = ({ title }) => (
  <MdcCard style={{ width: 480 }}>
    <CardContent>
      <Typography use="headline4" tag="h1">
        {title}
      </Typography>
    </CardContent>
  </MdcCard>
);
