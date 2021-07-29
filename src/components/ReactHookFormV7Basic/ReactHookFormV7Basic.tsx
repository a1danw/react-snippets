import React from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  developer: string;
};

const ReactHookFormV7Basic = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>();
  // console.log(watch());
  // console.log(errors);
  console.log("errors", errors);

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data);
      })}
    >
      <label>First Name:</label>
      <input
        {...register("firstName", {
          required: "First name is required",
        })}
        id="firstName"
      />
      {errors.firstName && <span>{errors.firstName.message}</span>}
      <label>Last Name:</label>
      <input
        {...register("lastName", {
          required: "This is required",
          maxLength: { value: 4, message: "You have exceeded max length" },
        })}
        id="lastName"
      />

      <label>Age:</label>
      <input {...register("age", { valueAsNumber: true })} id="age" />

      <label htmlFor="gender"></label>
      <select {...register("gender")} id="gender">
        <option value="">Select...</option>
        <option value="male">male</option>
        <option value="female">female</option>
      </select>

      <label htmlFor="developer">Are you a developer?</label>
      <input name="developer" value="yes" type="checkbox" />

      <input type="submit" />
    </form>
  );
};

export default ReactHookFormV7Basic;
