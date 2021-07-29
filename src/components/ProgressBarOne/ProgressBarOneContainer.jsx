import React, { useState } from "react";
import ProgressBarOne from "./ProgressBarOne";

const ProgressBarOneContainer = () => {
  const [percentage] = useState(60);
  return (
    <div>
      <ProgressBarOne percentage={percentage} />
    </div>
  );
};

export default ProgressBarOneContainer;
