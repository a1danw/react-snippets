import React from "react";
import Customers from "../components/SegmentedBar/Customers/Customers";

export default {
  title: "Customers",
  component: Customers,
};

const Template = (args) => <Customers {...args} />;

export const Default = Template.bind({});
Default.args = {
  customerReviews: [
    {
      title: "Looks great",
      customer: "Joe Bloggs",
      date: "02 Jan 2020",
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
    {
      title: "Amazing quality",
      customer: "John Doe",
      date: "02 Jan 2020",
      ratings: [
        {
          name: "Item as described",
          value: 4.6,
        },
        {
          name: "Build quality",
          value: 5,
        },
        {
          name: "Appearence",
          value: 4.3,
        },
        {
          name: "Value for money",
          value: 3,
        },
      ],
    },
    {
      title: "Great value",
      customer: "Ian Smith",
      date: "02 Jan 2020",
      ratings: [
        {
          name: "Item as described",
          value: 4.9,
        },
        {
          name: "Build quality",
          value: 2.8,
        },
        {
          name: "Appearence",
          value: 3.8,
        },
        {
          name: "Value for money",
          value: 5,
        },
      ],
    },
  ],
};
