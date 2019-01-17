import React, { memo } from "react";
import { Card, CardImage, CardTitle, CardInfo } from "./Card";

const PersonCard = ({ person }) => (
  <Card>
    <CardImage url={person.photo} desc={`face of ${person.firstname}`} />
    <CardTitle
      title={
        <a href={`/person/${person.id}`}>
          {person.firstname} {person.lastname}
        </a>
      }
      subTitle={person.entity}
    />
    <CardInfo icon="email">
      <a href={`mailto:${person.email}`}>{person.email}</a>
    </CardInfo>
    <CardInfo icon="phone">
      <a href={`tel:${person.phone}`}>{person.phone}</a>
    </CardInfo>
    {person.managerId && (
      <CardInfo icon="supervisor_account" desc="manager">
        <a href={`/person/${person.managerId}`}>{person.manager}</a>
      </CardInfo>
    )}
  </Card>
);

const MemoizedPersonCard = memo(PersonCard);
export { MemoizedPersonCard as PersonCard };
