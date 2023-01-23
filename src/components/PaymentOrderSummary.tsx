import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";

interface OrderSummaryProps {
  cartData?: any;
  billingData?: any;
}
export const PaymentOrderSummary = ({ cartData, billingData }: OrderSummaryProps) => {
  return (
    <div className="w-full lg:col-span-4 h-fit bg-white rounded-2xl pb-6">
      {/* Title */}
      <p className="text-xl font-medium m-2.5 p-2.5 bg-themeSecondary100 rounded-xl text-themeSecondary800">
        Order Summary
      </p>
      {/* cart added products */}
      {cartData?.map((singleItem: any, index: number) => (
        <div key={index} className="flex items-center mx-5 gap-2.5 md:gap-6 border-b py-5">
          <Image
            className="rounded"
            src={singleItem?.featured_image}
            width={70}
            height={70}
            alt="card-item-image"
            priority={true}
          />
          <div>
            <Link href={`/shop/product?slug=${singleItem?.slug}`}>
              <p className="text-base font-medium text-themeSecondary600 line-clamp-2 hover:text-themePrimary600 transition hover:duration-700">
                {singleItem?.title}
              </p>
            </Link>
            <div className="flex flex-wrap items-center gap-2 sm:gap-5 mt-1">
              <p className="ext-base font-medium text-themeSecondary500">Quantity: {singleItem?.quantity?.value}</p>
              <p className="ext-base font-bold text-themeSecondary800">${(singleItem?.totals?.total).toFixed(2)}</p>
            </div>
          </div>
        </div>
      ))}
      <hr className="container mx-auto border-t border-themeSecondary200"></hr>
      <div className="mx-5 mt-10  mb-7">
        {/* Delivery Time */}
        <p className="text-lg font-medium mb-6 text-themeSecondary800">Shipping Method</p>

        <div className="flex gap-3">
          <input
            className="cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 radio_style_one"
            id="8days"
            type="radio"
            name="deliverytime"
          />
          <label htmlFor="8days" className="text-base font-medium text-themeSecondary600">
            Standard Delivery : 8-10 Business Days
          </label>
        </div>
        <div className="flex gap-3 mt-4">
          <input
            className="cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 radio_style_one"
            id="2days"
            type="radio"
            name="deliverytime"
          />
          <label htmlFor="2days" className="text-base font-medium text-themeSecondary600">
            Express Delivery : 2 Business Days
          </label>
        </div>

        {/* coupon code */}
        <p className="text-lg font-medium mt-5 mb-2 rounded text-themeSecondary800">Coupon</p>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            className="w-full sm:w-auto h-full px-5 py-3 border rounded-lg focus:outline-none border-themeSecondary300"
            placeholder="Coupon Code"
          />
          <button
            className="bg-themeSecondary800 text-white hover:bg-themePrimary600 hover:text-white transition hover:duration-700 w-full sm:w-auto capitalize text-base px-6 py-2.5 rounded-lg"
            color="dark"
          >
            Apply
          </button>
        </div>
      </div>
      <hr className="container mx-auto border-t border-themeSecondary200"></hr>
      {/* calculate total price */}
      <div className="flex items-center justify-between gap-3 my-7 mx-5">
        <div className="space-y-2.5">
          <p className="text-base font-medium text-themeSecondary600">Subtotal</p>
          <p className="text-base font-medium text-themeSecondary600">Shipping Fee</p>
          <p className="text-xl font-medium text-themeSecondary800">Total</p>
        </div>
        <div className="space-y-2.5 text-right">
          {billingData?.cart_contents_total ? (
            <p className="text-base font-bold text-themeSecondary800">
              ${parseInt(billingData?.cart_contents_total).toFixed(2)}
            </p>
          ) : (
            <div className="space-y-2.5">
              $<Skeleton width={40} height={20} />
            </div>
          )}
          {billingData?.shipping_total ? (
            <p className="text-base font-bold text-themeSecondary800">
              ${parseInt(billingData?.shipping_total).toFixed(2)}
            </p>
          ) : (
            <div className="space-y-2.5">
              $<Skeleton width={40} height={20} />
            </div>
          )}
          {billingData?.total ? (
            <p className="text-xl font-bold text-themeSecondary800">${billingData?.total}</p>
          ) : (
            <div className="space-y-2.5">
              $<Skeleton width={40} height={20} />
            </div>
          )}
        </div>
      </div>
      <hr className="container mx-auto border-t border-themeSecondary200"></hr>
      {/* checkout button */}
      <div className="mx-5 my-7">
        <div className="flex items-center gap-3">
          <input id="notify" type="checkbox" className="w-5 h-5 accent-themePrimary600 shrink-0" />
          <label htmlFor="notify" className="text-themeSecondary600 text-base">
            Sign me up to receive email updates and news (optional)
          </label>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <input id="police" type="checkbox" className="w-5 h-5 accent-themePrimary600 shrink-0" />
          <label htmlFor="police" className="text-themeSecondary600 text-base">
            I agree with the{" "}
            <Link href="/">
              <span className="text-themePrimary600 font-bold">Meta-Shop Policies</span>
            </Link>
          </label>
        </div>
        <button className="bg-themePrimary600 text-white hover:bg-themeSecondary800 transition hover:duration-700 text-base px-7 py-4 rounded-md mt-7 w-full  font-semibold">
          Continue
        </button>
      </div>
    </div>
  );
};

export default PaymentOrderSummary;
