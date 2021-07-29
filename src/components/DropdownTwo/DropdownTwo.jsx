import React, { useState } from "react";

const DropdownTwo = () => {
  const [foodState, setFoodState] = useState("dumpling");
  return (
    <div className="container p-5">
      <select
        className="custom-select"
        value={foodState}
        onChange={(e) => {
          const selectedFood = e.target.value;
          setFoodState(selectedFood);
        }}
      >
        <option value="steak">Steak</option>
        <option value="sandwich">Sandwich</option>
        <option value="dumpling">Dumpling</option>
      </select>
      <h2>{foodState}</h2>
    </div>
  );
};

export default DropdownTwo;
