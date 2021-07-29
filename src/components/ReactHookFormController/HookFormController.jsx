import React from "react";
import { useForm, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const HookFormController = () => {
  const { handleSubmit, control } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller as={TextField} />
        <TextField label="Location Name" /> <br />
        <Button variant="container" color="primary" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
};

export default HookFormController;
