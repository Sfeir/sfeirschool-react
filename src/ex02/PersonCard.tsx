import React from "react";
import { Card, CardImage, CardHeader, CardInfo } from "./Card";

type PersonCardProps = {};

export const PersonCard: React.FC<PersonCardProps> = () => (
  <Card>
    <CardImage
      url="https://randomuser.me/portraits/women/85.jpg"
      desc="face of Leanne"
    />
    <CardHeader
      title={<a href="/person/5763cd4d9d2a4f259b53c901">Leanne Woodard</a>}
      subTitle="Developer"
    />
    <CardInfo icon="email">
      <a href="mailto:Leanne.Woodard@BIOSPAN.com">woodard.l@acme.com</a>
    </CardInfo>
    <CardInfo icon="phone">
      <a href="tel:0784112248">0784112248</a>
    </CardInfo>
    <CardInfo icon="supervisor_account" desc="manager">
      <a href="/person/5763cd4d3b57c672861bfa1f">Erika</a>
    </CardInfo>
  </Card>
);
