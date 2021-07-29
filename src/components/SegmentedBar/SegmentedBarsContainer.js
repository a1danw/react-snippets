import React from "react";
import SegmentedBar from "./SegmentedBar";
import { ContainerWidth } from "./SegmentedBarsContainer.styles";
import Customers from "./Customers/Customers";
const SegmentedBarsContainer = () => {
  const overallCustomerReviews = {
    ratings: [
      {
        name: "Item as described",
        value: 2.6,
      },
      {
        name: "Build quality",
        value: 3.8,
      },
      {
        name: "Appearence",
        value: 5,
      },
      {
        name: "Value for money",
        value: 1,
      },
    ],
  };

  return (
    <div>
      <ContainerWidth>
        <SegmentedBar
          direction="overallCustomerReviews"
          overallCustomerReviews={overallCustomerReviews}
        />
        <br />
        <Customers />
      </ContainerWidth>
    </div>
  );
};

export default SegmentedBarsContainer;
