import React from "react";
import {
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  FormInput,
  Button,
} from "shards-react";
import { useForm } from "react-hook-form";

const ReactHookFormExpando = () => {
  const { register, errors } = useForm();

  return (
    <div style={{ margin: "auto", width: 1200, padding: "1em" }}>
      <InputGroup className="mb-2">
        <InputGroupAddon type="prepend">
          <InputGroupText defaultValue="test">Customer</InputGroupText>
        </InputGroupAddon>
        <FormInput placeholder="Customer" />
      </InputGroup>
    </div>
  );
};

export default ReactHookFormExpando;
