import React, { useState } from "react";
import SpreadOne from "./SpreadOne/SpreadOne";
import SpreadTwo from "./SpreadTwo/SpreadTwo";

const SpreadVsRest = () => {
  const [inputName, setInputName] = useState();
  // Spread flattens array
  // We can use spread to merge old props/array/object/string with additional values

  // Sometimes it's fragile and tedious to pass every property
  // along. In that case you can use destructuring assignment with rest properties
  // to extract a set of unknown properties.
  const props = { firstName: "Aidan", lastName: "Walker" };
  const arr1 = [0, 1, 2];
  const arr2 = [3, 4, 5];
  const arr3 = [arr1, arr2];
  const arr4 = [...arr1, ...arr2];
  // console.log(arr3); 0: (3) [0, 1, 2]  1: (3) [3, 4, 5]
  // console.log(arr4); [0, 1, 2, 3, 4, 5]

  const employee = [
    {
      name: "Anthony",
      id: "ABC",
      salary: 20_000,
      address: "Example address 1",
    },
    {
      name: "George",
      id: "QWE",
      salary: 25_000,
      address: "Example address 2",
    },
  ];

  const firstEmployee = employee[0];

  const baseEmployeeObject = {
    role: "employee",
    company: "CodeSandbox",
  };

  const fistEmployee1 = { ...baseEmployeeObject, ...employee[0] };
  console.log(fistEmployee1);

  // rest example 1
  // Take property name defined on myObj and assign its value to a new
  // variable we call Username. Then, take whatever other properties were defined on myObj
  // (i.e., age, sex and dob) and collect them into a new object assigned to the variable we name rest.
  const myObj = {
    name: "John Doe",
    age: 35,
    sex: "M",
    dob: new Date(1994, 12, 2),
  };

  const { name: Username, ...rest } = myObj;
  console.log(Username);
  console.log(rest);

  return (
    <div>
      {/* <SpreadOne firstName="Aidan" lastName="Walker" /> */}
      <SpreadOne {...props} />
      {/* <SpreadTwo
        salary={firstEmployee.salary}
        name={firstEmployee.name}
        id={firstEmployee.id}
        address={firstEmployee.address}
      /> */}
      <SpreadTwo {...firstEmployee} />
      <Input
        type="text"
        id="name"
        label="Name"
        placeholder="Enter your name"
        value={inputName}
        onchange={(newValue) => setInputName({ name: newValue })}
        labelClass="form-label"
        inputClass="form-input"
        wrapClass="form-input-wrap"
      />
    </div>
  );
};

export default SpreadVsRest;

// Using rest
function Input({
  id,
  label,
  onchange,
  labelClass,
  inputClass,
  wrapClass,
  ...rest
}) {
  // Take all remaining properties defined on the props object and collect them inside an argument called rest.
  return (
    <div className={wrapClass}>
      {/* <input
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      /> */}
      {/* Because we have passed through all the properties, we have unwanted labelclass, inputclass and wrapclass attributes on the input tag.
      We can use the destructure assignment syntax to resolve this issue and clean the code up a little more.
      */}
      {/* On the first line we destructure the properties coming into our component into specific variables, collecting other properties
       in a rest variable. This means we no longer have to reference properties using props.propertyName - we can just use propertyName. 
       Referencing and spreading the rest variable means that we are also no longer passing through all the properties passed into the component. */}
      <label htmlFor={id} className={labelClass}>
        {label}
      </label>
      <input
        id={id}
        {...rest}
        onChange={(e) => onchange(e.target.value)}
        className={inputClass}
      />
    </div>
  );
}
