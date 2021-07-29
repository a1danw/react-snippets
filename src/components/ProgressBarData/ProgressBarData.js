import React from "react";
import CustomerRatingBar from "./CustomerRatingBar";

const ProgressBarData = ({ customerTotalReviewsData, customerReviews }) => (
  <>
    {customerReviews.map((review) => (
      <CustomerRatingBar
        review={review}
        totalNo={customerTotalReviewsData.totalNoOfReviews}
      />
    ))}
  </>
);

export default ProgressBarData;
