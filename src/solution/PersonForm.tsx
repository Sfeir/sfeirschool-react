import React from "react";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";
import { Formik } from "formik";
import { Prompt } from "react-router-dom";

import { Card, CardContent, CardActions, CardAction } from "./Card";
import { useField } from "./hooks";

const required = (value: any) => (!!value ? null : "required");

const validate = ({ phone, email }) => {
  const errors: { phone?: string; email?: string } = {};
  if (!(phone || email)) {
    errors.phone = errors.email =
      "provide either a phone number or an email address";
  }
  return errors;
};

const PersonFields: React.FC = () => {
  const firstname = useField<string>("firstname", {
    label: "first name",
    validate: required
  });
  const lastname = useField<string>("lastname", {
    label: "last name",
    validate: required
  });
  const position = useField<string>("position");
  const phone = useField<string>("phone");
  const email = useField<string>("email");

  return (
    <CardContent type="person-form">
      <TextField {...firstname} />
      <TextField {...lastname} />
      <Select
        options={[
          "Director",
          "Developer",
          "Product Owner",
          "Sales",
          "Human Resources"
        ]}
        {...position}
      />
      <TextField {...phone} />
      <TextField {...email} />
    </CardContent>
  );
};

type PersonFormProps = {
  person: Person;
  onSubmit: (p: Person) => void;
  onReset: (p: Person) => void;
};

export const PersonForm: React.FC<PersonFormProps> = ({
  person,
  onSubmit,
  onReset
}) => {
  return (
    <Card>
      <Formik<Person>
        initialValues={person}
        onSubmit={onSubmit}
        onReset={onReset}
        validate={validate}
      >
        {({ handleSubmit, handleReset, dirty, isValid }) => (
          <>
            <form onSubmit={handleSubmit} onReset={handleReset}>
              <PersonFields />
              <CardActions>
                <CardAction type="submit" disabled={!isValid || !dirty}>
                  save
                </CardAction>
                <CardAction type="reset">cancel</CardAction>
              </CardActions>
            </form>
            <Prompt when={dirty} message="discard unsaved?" />
          </>
        )}
      </Formik>
    </Card>
  );
};
