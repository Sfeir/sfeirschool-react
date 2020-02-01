import React from "react";
import {
  Card as MdcCard,
  CardActions as MdcCardActions,
  CardActionButton,
  CardActionButtons
} from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { Icon } from "@rmwc/icon";

export const Card: React.FC<{
  id?: string;
  className?: string;
}> = props => <MdcCard {...props} tag="section" />;

export const CardContent: React.FC<{
  type: string;
}> = ({ type, children }) => (
  <div className={`card-content content-type-${type}`}>{children}</div>
);

export const CardImage: React.FC<{
  url: string;
  desc: string;
}> = ({ url, desc }) => (
  <figure>
    <img src={url} alt={desc} />
  </figure>
);

export const CardHeader: React.FC<{
  title: React.ReactNode;
  subTitle: React.ReactNode;
}> = ({ title, subTitle }) => (
  <header>
    <Typography tag="h1" use="headline5">
      {title}
    </Typography>
    <Typography tag="h2" use="subtitle1">
      {subTitle}
    </Typography>
  </header>
);

export const CardInfo: React.FC<{
  icon: string;
  desc?: string;
  children: React.ReactNode;
}> = ({ icon, desc = icon, children }) => (
  <p>
    <Icon icon={{ icon, size: "small" }} title={desc} />
    &nbsp;
    {children}
  </p>
);

export const CardActions: React.FC = ({ children }) => (
  <MdcCardActions>
    <CardActionButtons>{children}</CardActionButtons>
  </MdcCardActions>
);

export { CardActionButton as CardAction };
