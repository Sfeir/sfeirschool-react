import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Card, CardImage, CardTitle, CardInfo } from "./Card";
import { useConfig } from "./Config";

const PersonCard = ({ person, className }) => {
  const { useRouter } = useConfig();

  const PersonLink = ({ toId, name }) =>
    useRouter ? (
      <Link to={`/person/${toId}`}>{name}</Link>
    ) : (
      <a href={`#/person/${toId}`}>{name}</a>
    );

  return (
    <Card className={className} contentClass="person-info">
      <CardImage url={person.photo} desc={`face of ${person.firstname}`} />
      <CardTitle
        title={
          <PersonLink
            toId={person.id}
            name={`${person.firstname} ${person.lastname}`}
          />
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
          <PersonLink toId={person.managerId} name={person.manager} />
        </CardInfo>
      )}
    </Card>
  );
};

const MemoizedPersonCard = memo(PersonCard);
export { MemoizedPersonCard as PersonCard };
