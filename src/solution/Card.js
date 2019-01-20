import React from "react";
import { Card as MdcCard } from "@rmwc/card";
import { Typography } from "@rmwc/typography";
import { Icon } from "@rmwc/icon";

export const Card = ({ className, contentClass, children }) => (
  <MdcCard tag="section" className={className}>
    <div className={contentClass}>{children}</div>
  </MdcCard>
);

export const CardImage = ({ url, desc }) => (
  <figure>
    <img src={url} alt={desc} />
  </figure>
);

export const CardTitle = ({ title, subTitle }) => (
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
    <Icon icon={icon} title={desc} iconOptions={{ size: "small" }} />
    &nbsp;
    {children}
  </p>
);
