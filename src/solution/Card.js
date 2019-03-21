import React from "react";
import {
  Card as MdcCard,
  CardActions as MdcCardActions,
  CardActionButton,
  CardActionButtons
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { Icon } from "@rmwc/icon";

export const Card = props => <MdcCard {...props} tag="section" />;

export const CardContent = ({ type, children }) => (
  <div className={`card-content content-type-${type}`}>{children}</div>
);

export const CardImage = ({ url, desc }) => (
  <figure>
    <img src={url} alt={desc} />
  </figure>
);

export const CardHeader = ({ title, subTitle }) => (
  <header>
    <Typography tag="h1" use="headline5">
      {title}
    </Typography>
    <Typography tag="h2" use="subtitle1">
      {subTitle}
    </Typography>
  </header>
);

export const CardInfo = ({ icon, desc = icon, children }) => (
  <p>
    <Icon icon={{ icon, size: "small" }} title={desc} />
    &nbsp;
    {children}
  </p>
);

export const CardActions = ({ children }) => (
  <MdcCardActions>
    <CardActionButtons>{children}</CardActionButtons>
  </MdcCardActions>
);

export { CardActionButton as CardAction };
