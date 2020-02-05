import React, { memo } from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImage,
  CardHeader,
  CardInfo,
  CardContent,
  CardActions,
  CardAction
} from "./Card";
import { useConfig } from "./Config";
import { usePerson } from "./connect";

type PersonCardProps = {
  person: Person;
  actions?: { label: string; onClick: () => void }[];
  className?: string;
};

const PersonCard: React.FC<PersonCardProps> = ({
  person,
  actions,
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
      {actions && (
        <CardActions>
          {actions.map(({ label, onClick }) => (
            <CardAction onClick={onClick} key={label}>
              {label}
            </CardAction>
          ))}
        </CardActions>
      )}
    </Card>
  );
};

const MemoizedPersonCard = memo(PersonCard);
const ConnectedPersonCard: React.FC<{
  personId: string;
  className?: string;
}> = ({ personId, className }) => (
  <PersonCard person={usePerson(personId)} className={className} />
);

const toPersonCard = (person: Person | string) =>
  typeof person === "string" ? (
    <ConnectedPersonCard personId={person} key={person} />
  ) : (
    <MemoizedPersonCard person={person} key={person.id} />
  );

export { MemoizedPersonCard as PersonCard, ConnectedPersonCard, toPersonCard };
