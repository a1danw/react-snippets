import React from "react";
import SegmentedBar from "../components/SegmentedBar/SegmentedBar";

export default {
  title: "SegmentedBar",
  component: SegmentedBar,
};

const Template = (args) => <SegmentedBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  overallCustomerReviews: {
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
  },
  allRatings: [
    { name: "Product quality", value: 4.8 },
    { name: "Value for money", value: 4.8 },
    { name: "Product as described", value: 4.8 },
    { name: "Appearence", value: 4.8 },
  ],
};
