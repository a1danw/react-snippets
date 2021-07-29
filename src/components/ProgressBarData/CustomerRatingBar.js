import React from "react";
import {
  BarContainer,
  BarProgressFiller,
  StarsTitle,
  BarWrapper,
  CustomerAmount,
  Wrappper,
} from "./CustomerRatingBar.styles";

const CustomerRatingBar = ({ review, totalNo }) => {
  const calculateTotalReviews = (amountOfCustomers, totalReviews) => {
    // 5 stars: customers that have reviewed(16) / total (50) = 0.32 * 100 = 32%
    return (amountOfCustomers / totalReviews) * 100;
  };

  return (
    <BarWrapper>
      <StarsTitle>{review.starRating} stars</StarsTitle>
      <BarContainer>
        <BarProgressFiller
          stars={review.starRating}
          value={calculateTotalReviews(review.valueCount, totalNo)}
        />
      </BarContainer>
      <CustomerAmount>{review.valueCount}</CustomerAmount>
    </BarWrapper>
  );
};

export default CustomerRatingBar;
