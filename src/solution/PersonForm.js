import React from "react";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";
import { Formik } from "formik";
import { Prompt } from "react-router-dom";

import { Card, CardContent, CardActions, CardAction } from "./Card";
import { useField } from "./hooks";

const required = value => (!!value ? null : "required");

const validate = ({ phone, email }) => {
  const errors = {};
  if (!(phone || email)) {
    errors.phone = errors.email =
      "provide either a phone number or an email address";
  }
  return errors;
};

const PersonFields = () => {
  const firstname = useField("firstname", {
    label: "first name",
    validate: required
  });
  const lastname = useField("lastname", {
    label: "last name",
    validate: required
  });
  const position = useField("position");
  const phone = useField("phone");
  const email = useField("email");

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

export const PersonForm = ({ person, onSubmit, onReset }) => {
  return (
    <Card>
      <Formik
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
