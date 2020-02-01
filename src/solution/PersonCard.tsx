import React, { memo } from "react";
import { Link } from "react-router-dom";
import { Card, CardImage, CardHeader, CardInfo, CardContent } from "./Card";
import { useConfig } from "./Config";
import { withPersonFromPersonId } from "./connect";

type PersonCardProps = {
  person: Person;
  className?: string;
};

const PersonCard: React.FC<PersonCardProps> = ({
  person,
  children,
  className
}) => {
  const { useRouter } = useConfig();

  const PersonLink: React.FC<{
    toId: string;
    name: string;
  }> = ({ toId, name }) =>
    useRouter ? (
      <Link to={`/person/${toId}`}>{name}</Link>
    ) : (
      <a href={`#/person/${toId}`}>{name}</a>
    );

  return (
    <Card className={className} id={`p-${person.id}`}>
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
const ConnectedPersonCard = withPersonFromPersonId(PersonCard);

const toPersonCard = (person: Person | string) =>
  typeof person === "string" ? (
    <ConnectedPersonCard personId={person} key={person} />
  ) : (
    <MemoizedPersonCard person={person} key={person.id} />
  );

export { MemoizedPersonCard as PersonCard, ConnectedPersonCard, toPersonCard };
