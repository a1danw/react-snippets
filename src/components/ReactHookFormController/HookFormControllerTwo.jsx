import React from "react";
import { useForm, Controller } from "react-hook-form";

const HookFormControllerTwo = () => {
  const { control } = useForm();

  return (
    <Controller
      control={control}
      name="myField"
      render={({ field: { value, onChange } }) => (
        <input value={value} onChange={onChange} />
      )}
    />
  );
};

export default HookFormControllerTwo;
