import React from "react";
import ProgressBarData from "./ProgressBarData";
import { ProgressBarComponentContainer } from "./ProgressBarDataStyles";

const ProgressBarDataContainer = () => {
  const customerTotalReviewsData = {
    totalNoOfReviews: 50,
    averageRating: 4.8,
  };

  const customerReviews = [
    {
      starRating: 5,
      valueCount: 20,
    },
    {
      starRating: 4,
      valueCount: 4,
    },
    {
      starRating: 3,
      valueCount: 6,
    },
    {
      starRating: 2,
      valueCount: 6,
    },
    {
      starRating: 1,
      valueCount: 2,
    },
  ];

  return (
    <ProgressBarComponentContainer>
      <ProgressBarData
        customerTotalReviewsData={customerTotalReviewsData}
        customerReviews={customerReviews}
      />
    </ProgressBarComponentContainer>
  );
};

export default ProgressBarDataContainer;
