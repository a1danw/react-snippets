import React from "react";
import {
  SingleCustomerReviewSegment,
  TotalCustomerReviewSegment,
  TotalReviewsBarContainer,
  TotalReviewsWrapper,
  TotalReviewsSingleSegment,
  TotalReviewsSegmentItem,
  SingleReviewsBarContainer,
  SingleReviewsBarWrapper,
  SingleReviewsWrapper,
  SingleReviewsSingleSegment,
  SingleReviewsSegmentItem,
} from "./SegmentedBar.styles";

const SegmentedBar = ({ overallCustomerReviews, direction }) => {
  // console.log("direction", direction);
  // const itemData = {
  //   itemAsDescribed: 2.6,
  //   buildQuality: 3.8,
  //   appearence: 5,
  //   valueForMoney: 1,
  // };

  const createSegmentPercentage = (rating) => {
    let numberOfSegments = 5; // total segments
    let singleSegmentSize = 1; // single segment
    let segmentPercent = [];
    // array will fill with segment percent for each segment bar based on the rating
    // 2.6 - 0: 100, 1: 100, 2: 61, 0, 0
    let total = rating; // total rating passed

    // console.log(segmentPercent);
    // console.log(total);

    // runs 5 times
    for (let i = 0; i < numberOfSegments; i++) {
      const originalValue = total;
      total = total - singleSegmentSize;

      if (total >= 0) {
        segmentPercent.push(100);
      } else if (total < 0 && originalValue > 0) {
        segmentPercent.push(Math.ceil(originalValue * 100));
        total = 0;
      } else {
        segmentPercent.push(0);
      }
    }

    return segmentPercent;
  };

  const allRatings = overallCustomerReviews.ratings;
  console.log(allRatings);
  // const ratingKeys = Object.keys(allRatings); // transforms object keys into array of strings so we can map over the keys and output as p tags
  // ["itemAsDescribed", "buildQualty", "appearence", "valueForMoney"];

  const ratingHtml = []; // html stored in array - html pushed here after mapping over key and ratings array

  allRatings.forEach((key, idx) => {
    // debugger;
    const { name, value } = key;
    // const rating = allRatings[key]; // each rating from data
    // 2.6, 3.8, 5, 1

    const ratingsArray = createSegmentPercentage(value);

    const html = (
      <>
        {/* html and styles for total customer reviews segment bar */}
        {direction === "overallCustomerReviews" && (
          <TotalReviewsBarContainer>
            <p>{name}</p>
            <TotalReviewsWrapper>
              {ratingsArray.map((width) => (
                <TotalReviewsSingleSegment>
                  <TotalReviewsSegmentItem width={width} />
                </TotalReviewsSingleSegment>
              ))}
            </TotalReviewsWrapper>
          </TotalReviewsBarContainer>
        )}
        {/* html and styles for single customer review segment bars */}

        {direction === "singleCustomerReview" && (
          <SingleReviewsBarContainer>
            <SingleReviewsBarWrapper>
              <SingleReviewsWrapper>
                {ratingsArray.map((width) => (
                  <SingleReviewsSingleSegment>
                    <SingleReviewsSegmentItem width={width} />
                  </SingleReviewsSingleSegment>
                ))}
              </SingleReviewsWrapper>
              <p>{name}</p>
            </SingleReviewsBarWrapper>
          </SingleReviewsBarContainer>
        )}
      </>
    );
    ratingHtml.push(html);
  });

  if (direction === "overallCustomerReviews")
    return (
      <TotalCustomerReviewSegment>{ratingHtml}</TotalCustomerReviewSegment>
    );

  return (
    <SingleCustomerReviewSegment>{ratingHtml}</SingleCustomerReviewSegment>
  );
};

export default SegmentedBar;

// import React from "react";
// import {
//   SegmentedBarContainer,
//   SegmentItemStyle,
//   FullSegment,
//   SegmentWrapper,
// } from "./SegmentedBar.styles";

// const SegmentedBar = ({ direction }) => {
//   console.log("direction", direction);
//   const itemData = {
//     itemAsDescribed: 2.6,
//     buildQuality: 3.8,
//     appearence: 5,
//     valueForMoney: 1,
//   };

//   const createSegmentPercentage = (rating) => {
//     let numberOfSegments = 5; // total segments
//     let singleSegmentSize = 1; // single segment
//     let segmentPercent = []; // array will fill with segment percent for each segment bar based on the rating
//     let total = rating; // total rating passed in

//     // run for each segment
//     for (let i = 0; i < numberOfSegments; i++) {
//       const originalValue = total;
//       total = total - singleSegmentSize;

//       if (total >= 0) {
//         segmentPercent.push(100);
//       } else if (total < 0 && originalValue > 0) {
//         segmentPercent.push(Math.ceil(originalValue * 100));
//         total = 0;
//       } else {
//         segmentPercent.push(0);
//       }
//     }

//     return segmentPercent;
//   };

//   const ratingKeys = Object.keys(itemData); // transforms object keys into array of strings so we can map over the keys and output as p tags
//   // ["itemAsDescribed", "buildQualty", "appearence", "valueForMoney"];

//   const ratingHtml = []; // html stored in array - html pushed here after mapping over key and ratings array

//   ratingKeys.forEach((key, idx) => {
//     const rating = itemData[key]; // each rating from data
//     // 2.6, 3.8, 5, 1

//     const ratingsArray = createSegmentPercentage(rating);
//     // itemAsDescribed: 2.6 - [100, 100, 61, 0, 0]
//     // buildQualty: 3.8 - [100, 100, 100, 80, 0]
//     // appearence: 5 - [100, 100, 100, 100, 100]
//     // valueForMoney: 1 - [100, 0, 0, 0, 0]

//     const html = (
//       <SegmentWrapper style={{ flexDirection: direction }}>
//         {direction != "row" && <p>{key}</p>}
//         <FullSegment>
//           {ratingsArray.map((width) => {
//             return (
//               <SegmentedBarContainer>
//                 <SegmentItemStyle width={width} />
//               </SegmentedBarContainer>
//             );
//           })}
//         </FullSegment>
//         {direction == "row" && <p>{key}</p>}
//       </SegmentWrapper>
//     );
//     ratingHtml.push(html);
//   });

//   return <div>{ratingHtml}</div>;
// };

// export default SegmentedBar;
