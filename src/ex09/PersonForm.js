import React from "react";
import { Card, CardContent, CardActions, CardAction } from "../solution/Card";
import { TextField } from "@rmwc/textfield";
import { Select } from "@rmwc/select";

const PersonFields = () => {
  return (
    <CardContent type="person-form">
      <TextField label="first name" />
      <TextField label="last name" />
      <Select
        label="position"
        options={[
          "Director",
          "Developer",
          "Product Owner",
          "Sales",
          "Human Resources"
        ]}
      />
      <TextField label="phone" />
      <TextField label="email" />
    </CardContent>
  );
};

export const PersonForm = ({ person }) => {
  return (
    <Card>
      <form>
        <PersonFields />
        <CardActions>
          <CardAction type="submit">save</CardAction>
          <CardAction type="reset">cancel</CardAction>
        </CardActions>
      </form>
    </Card>
  );
};
