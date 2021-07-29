import styled, { css } from "styled-components";

/* ======== Styles for the individual total customer reviews ======= */
const TotalCustomerReviewSegment = styled.div`
  display: flex;
  flex-direction: column;
`;

const TotalReviewsBarContainer = styled.div`
  /* margin-top: 18px; */
  display: flex;
  flex-direction: column;
`;

const TotalReviewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

const TotalReviewsSingleSegment = styled.div`
  flex: 1;
  background-color: grey;
  margin-right: 5px;
`;

const TotalReviewsSegmentItem = styled.div`
  width: ${(props) => `${props.width}%`};
  margin-right: 2px;
  background-color: red;
  height: 4px;
`;

/* ======== Styles for the single customer review ======= */
const SingleCustomerReviewSegment = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 20px;
`;

const SingleReviewsBarContainer = styled.div`
  justify-content: center;
  min-width: 250px;
`;

const SingleReviewsBarWrapper = styled.div`
  /* margin-top: 18px; */
  display: flex;
  flex-direction: row;
  p {
    margin-left: 10px;
  }
`;

const SingleReviewsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
`;

const SingleReviewsSingleSegment = styled.div`
  width: 14px;
  background-color: grey;
  margin-right: 5px;
`;

const SingleReviewsSegmentItem = styled.div`
  width: ${(props) => `${props.width}%`};
  margin-right: 2px;
  background-color: red;
  height: 4px;
`;

export {
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
};

// import styled from "styled-components";

// const SegmentedBarContainer = styled.div`
//   width: 20px;
//   background-color: grey;
//   height: 5px;
//   margin-right: 5px;
// `;

// const SegmentItemStyle = styled.div`
//   width: ${(props) => `${props.width}%`};
//   margin-right: 2px;
//   background-color: red;
//   height: 5px;

//   /* &:nth-child(1) {
//     background-color: red;
//   } */
// `;

// const FullSegment = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 10px 0;
// `;

// const SegmentWrapper = styled.div`
//   display: flex;
// `;

// export { SegmentedBarContainer, SegmentItemStyle, FullSegment, SegmentWrapper };

// /* flex-direction: ${(props) => (props.row ? "column" : "row")}; */
