import React from "react";
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import { useToasts } from "react-toast-notifications";


interface PaymentMethodsProps {
  // billing?: {
  //   first_name?: string;
  //   last_name?: string;
  //   phone?: string;
  //   email?: string;
  //   address_1?: string;
  //   address_2?: string;
  //   city?: string;
  //   country?: string;
  //   postcode?: string;
  //   state?: string;
  // }
  // shippingDetails?: {
  //   first_name?: string;
  //   last_name?: string;
  //   phone?: string;
  //   email?: string;
  //   address_1?: string;
  //   address_2?: string;
  //   city?: string;
  //   country?: string;
  //   postcode?: string;
  //   state?: string;
  // };
  billing?: any;
  shippingDetails?: any;
  shipingCheck?: boolean;
}

export const PaymentMethods = ({ billing, shippingDetails, shipingCheck }: PaymentMethodsProps) => {
  
  const { addToast } = useToasts();

  const [paymentActive, setPaymentActive] = React.useState(4);

  // check if the billing and shipping details are empty
  const billingIsDisabled: boolean = Object.values(billing).some(
    (value) => value === "" || value === null || value === undefined
  );

  // check if the billing and shipping details are empty
  const shippingIsDisabled: boolean = Object.values(shippingDetails).some(
    (value) => value === "" || value === null || value === undefined
  );

  // check the billing and shipping details
  const isNotPaymentCheck = shipingCheck ? !billingIsDisabled && !shippingIsDisabled : !billingIsDisabled;
  const isPaymentCheck = shipingCheck ? billingIsDisabled || shippingIsDisabled : billingIsDisabled;

  return (
    <div className="bg-white mt-7 rounded-xl p-2.5">
      <p className="text-xl font-medium flex px-6 py-4 bg-themeSecondary100 text-themeSecondary800 rounded">
        Payment Method
      </p>
      <div className="flex md:grid grid-cols-2 xl:flex flex-wrap lg:flex-nowrap items-center gap-4 p-4 md:p-10">
        <label
          onChange={() => {
            isPaymentCheck
              ? addToast("Please Complete the Following Details Fields", {
                  appearance: "error",
                  autoDismiss: true,
                  autoDismissTimeout: 3000,
                })
              : setPaymentActive(0);
          }}
          htmlFor="paypal"
          className="flex items-center gap-7 border rounded-lg px-5 py-3.5 w-full cursor-pointer"
        >
          <input
            type="radio"
            name="payment"
            id="paypal"
            className="cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 shrink-0 radio_style_one"
            checked={isNotPaymentCheck && paymentActive === 0}
          />
          <Image src="/paypal2.png" width={115} height={30} alt="payment_img" priority={true} />
        </label>
        <label
          onChange={() => {
            isPaymentCheck
              ? addToast("Please Complete the Following Details Fields", {
                  appearance: "error",
                  autoDismiss: true,
                  autoDismissTimeout: 3000,
                })
              : setPaymentActive(1);
          }}
          htmlFor="stripe"
          className="flex items-center gap-7 border rounded-lg px-5 py-3.5 w-full cursor-pointer"
        >
          <input
            type="radio"
            name="payment"
            id="stripe"
            className="cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 shrink-0 radio_style_one"
            checked={isNotPaymentCheck && paymentActive === 1}
          />
          <Image src="/stripe.png" width={77} height={31} alt="payment_img" priority={true} />
        </label>
        <label
          onChange={() => {
            isPaymentCheck
              ? addToast("Please Complete the Following Details Fields", {
                  appearance: "error",
                  autoDismiss: true,
                  autoDismissTimeout: 3000,
                })
              : setPaymentActive(2);
          }}
          htmlFor="sezzle"
          className="flex items-center gap-7 border rounded-lg px-5 py-1 w-full cursor-pointer"
        >
          <input
            type="radio"
            name="payment"
            id="sezzle"
            className="cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 shrink-0 radio_style_one"
            checked={isNotPaymentCheck && paymentActive === 2}
          />
          <Image src="/sezzle.png" width={110} height={32} alt="payment_img" priority={true} />
        </label>
      </div>
      {/* Return to cart */}
      <div className="w-fit">
        <Link href="/cart">
          <div className="flex items-center gap-3 ml-10 mb-6 group w-fit">
            <BiArrowBack className="text-themeSecondary600 w-4 h-4 group-hover:text-themePrimary600 transition hover:duration-700" />
            <p className="text-base font-medium text-themeSecondary600 group-hover:text-themePrimary600 transition hover:duration-700">
              Return to cart
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};
