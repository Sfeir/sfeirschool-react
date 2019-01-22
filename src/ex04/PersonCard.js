import React from "react";
import {
  Card,
  CardImage,
  CardTitle,
  CardInfo,
  CardContent
} from "../solution/Card";

export const PersonCard = ({ person, ...props }) => (
  <Card {...props}>
    <CardContent type="person-info">
      <CardImage url={person.photo} desc={`face of ${person.firstname}`} />
      <CardTitle
        title={
          <a href={`/person/${person.id}`}>
            {person.firstname} {person.lastname}
          </a>
        }
        subTitle={person.position}
      />
      <CardInfo icon="email">
        <a href={`mailto:${person.email}`}>{person.email}</a>
      </CardInfo>
      <CardInfo icon="phone">
        <a href={`tel:${person.phone}`}>{person.phone}</a>
      </CardInfo>
      <CardInfo icon="supervisor_account" desc="manager">
        <a href={`/person/${person.managerId}`}>{person.manager}</a>
      </CardInfo>
    </CardContent>
  </Card>
);
