import React from "react";

const SpreadTwo = (props) => {
  console.log(props);
  const { name, id, salary, address } = props;
  return (
    <div>
      <h6>{`Name: ${name} | ID: ${id}`}</h6>
      <h6>{`Salary: ${salary} | Address ${address}`}</h6>
    </div>
  );
};

export default SpreadTwo;
