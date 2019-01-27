import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Card, CardImage, CardHeader, CardInfo, CardContent } from "./Card";
import { useConfig } from "./Config";

const PersonCard = ({ person, children, ...props }) => {
  const { useRouter } = useConfig();

  const PersonLink = ({ toId, name }) =>
    useRouter ? (
      <Link to={`/person/${toId}`}>{name}</Link>
    ) : (
      <a href={`#/person/${toId}`}>{name}</a>
    );

  return (
    <Card {...props}>
      <CardContent type="person-info">
        <CardImage url={person.photo} desc={`face of ${person.firstname}`} />
        <CardHeader
          title={
            <PersonLink
              toId={person.id}
              name={`${person.firstname} ${person.lastname}`}
            />
          }
          subTitle={person.position}
        />
        <CardInfo icon="email">
          <a href={`mailto:${person.email}`}>{person.email}</a>
        </CardInfo>
        <CardInfo icon="phone">
          <a href={`tel:${person.phone}`}>{person.phone}</a>
        </CardInfo>
        {person.managerId && (
          <CardInfo icon="supervisor_account" desc="manager">
            <PersonLink toId={person.managerId} name={person.manager} />
          </CardInfo>
        )}
      </CardContent>
      {children}
    </Card>
  );
};

const MemoizedPersonCard = memo(PersonCard);
export { MemoizedPersonCard as PersonCard };
