import React from "react";
import Filler from "./Filler";
import "./ProgressBar.modules.css";

const ProgressBarOne = ({ percentage }) => {
  return (
    <div className="progress-bar">
      <Filler percentage={percentage} />
    </div>
  );
};

export default ProgressBarOne;
