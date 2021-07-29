import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  age: yup
    .number()
    .positive("Age should contain only poitive values")
    .integer()
    .required(),
});

const ReactHookFormV7Two = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    console.log(data);
  };

  console.log(register("someField"));

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* <input
        {...register("firstName", {
          required: "First name is a required field",
        })}
      /> */}
      {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}
      {/* <input {...register("age")} placeholder="Age" /> */}
      <input name="defaultTitle" />
      <hr />
      <input name="facebookTitle" />
      <hr />
      <input name="youtubeTitle" />
      {/* <p>{errors.age?.message}</p> */}
      <button>Submit</button>
    </form>
  );
};

export default ReactHookFormV7Two;
