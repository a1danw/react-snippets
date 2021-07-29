import React from "react";
import "./App.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name should be required please"),
  lastName: yup.string().required("Last Name should be required please"),
  email: yup.string().email().required("Email should be required please"),
  age: yup.number().required("Age should be required please"),
  password: yup
    .string()
    .min(4)
    .max(15)
    .required("Password should be required please"),
  confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitForm = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <div className="Form">
        <div className="title">Sign Up</div>
        <div className="inputs">
          <form onSubmit={handleSubmit(submitForm)}>
            <input
              type="text"
              name="firstName"
              placeholder="First Name..."
              {...register("firstName")}
            />
            <p>{errors.firstName?.message}</p>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name..."
              {...register("lastName")}
            />
            <p>{errors.lastName?.message}</p>
            <input
              type="text"
              name="email"
              placeholder="Email..."
              {...register("email")}
            />
            <p>{errors.email?.message}</p>
            <input
              type="text"
              name="age"
              placeholder="Age..."
              {...register("age")}
            />
            <p>{errors.age?.message}</p>
            <input
              type="password"
              name="password"
              placeholder="Password..."
              {...register("password")}
            />
            <p>{errors.password?.message}</p>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password..."
              {...register("confirmPassword")}
            />
            <p>{errors.confirmPassword && "Passwords Should Match!"}</p>
            <input type="submit" id="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
