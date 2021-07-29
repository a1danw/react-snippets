import React from "react";
import SegmentedBar from "./SegmentedBar";

const ProgressBarData = ({ customerTotalReviewsData, customerReviews }) => (
  <>
    {customerReviews.map((review) => (
      <SegmentedBar
        review={review}
        totalNo={customerTotalReviewsData.totalNoOfReviews}
      />
    ))}
  </>
);

export default ProgressBarData;
