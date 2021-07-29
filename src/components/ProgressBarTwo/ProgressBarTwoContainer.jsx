import React from "react";
import ProgressBarTwo from "./ProgressBarTwo";

const testData = [
  { bgcolor: "#6a1b9a", completed: 60 },
  { bgcolor: "#00695c", completed: 30 },
  { bgcolor: "#ef6c00", completed: 53 },
];

export const ProgressBarTwoContainer = () => (
  <div>
    {testData.map((item, idx) => (
      <ProgressBarTwo
        key={idx}
        bgColor={item.bgcolor}
        completed={item.completed}
      />
    ))}
  </div>
);

export default ProgressBarTwoContainer;
