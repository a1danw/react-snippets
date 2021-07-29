import React from "react";
import { InputWrapper, InputBox } from "./Input.styles";
const Input = ({ size }) => {
  return (
    <InputWrapper>
      <InputBox size={size} />
    </InputWrapper>
  );
};

export default Input;
