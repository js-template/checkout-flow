import React from "react";
import CheckOut from "../src/components/checkout";

// dummy cart data
const cartData = [
  {
    id: 1,
    title: "Product 1",
    totals: {
      total: 100,
    },
    featured_image: "",
  },
  {
    id: 2,
    title: "Product 2",
    totals: {
      total: 200,
    },
    featured_image: "",
  },
];

// dummy summary data for checkout
const summaryData = {
  subtotal: 300,
  total: 200,
  discount: 100,
};

const Page = () => {
  const formSubmit = async (data) => {
    console.log("formSubmit", data);
  };

  return (
    <>
      <h1 className="text-4xl bg-red-500">Hello World</h1>
      <CheckOut formSubmit={formSubmit} cartData={cartData} summeryData={summaryData} userLogin={true} />
    </>
  );
};
export default Page;
