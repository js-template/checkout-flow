import React, { Fragment, useEffect, useState } from "react";
import { Country, State } from "country-state-city";
import { FormLoader, LoaderGrowing } from "../loader";
import { useForm } from "react-hook-form";
import Image from "next/image";

// user data interface
interface userDataInterface {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address_1: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  company: string;
}

// cart data interface array of object
interface cartDataInterface {
  id: number;
  title: string;
  totals: {
    total: number;
  };
  featured_image: string;
}

// summery data interface
interface summeryDataInterface {
  total: number;
  subtotal: number;
  discount: number;
}

// policy data interface
interface policyDataInterface {
  title: string;
  description: string;
  link: {
    title: string;
    url: string;
    target: string;
  };
}

// sign up data interface
interface signUpDataInterface {
  title: string;
}

// company policy data interface
interface companyPolicyDataInterface {
  title: string;
  companyName: string;
  link: {
    title: string;
    url: string;
    target: string;
  };
}

// check out component props
interface CheckOutProps {
  loading?: boolean;
  userData?: userDataInterface;
  formSubmit?: (data: any) => void;
  couponSubmit?: (data: any) => void;
  autoFill?: boolean;
  cartData?: cartDataInterface[];
  summeryData?: summeryDataInterface;
  policyData?: policyDataInterface;
  signUpData?: signUpDataInterface;
  companyPolicyData?: companyPolicyDataInterface;
  userLogin?: boolean;
}

export const CheckOut = ({
  loading,
  userData,
  formSubmit,
  couponSubmit,
  autoFill,
  cartData,
  summeryData,
  policyData,
  signUpData,
  companyPolicyData,
  userLogin,
}: CheckOutProps) => {
  const country = Country.getAllCountries();
  const [state, setState] = useState(State.getAllStates());
  const [loader, setLoader] = useState<boolean>(false);
  const [couponLoader, setCouponLoader] = useState<boolean>(false);

  // billing form register hook
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  // coupon form register hook
  const {
    register: couponRegister,
    handleSubmit: couponHandleSubmit,
    formState: { errors: couponErrors, isValid: couponIsValid },
  } = useForm({
    mode: "onBlur",
  });

  /* -------------------------------------------------------------------------- */
  /*                          if cartData is not passed                         */
  /* -------------------------------------------------------------------------- */
  if (!cartData) {
    cartData = null as any;
  }

  /* -------------------------------------------------------------------------- */
  /*                        if summeryData is not passed                        */
  /* -------------------------------------------------------------------------- */
  if (!summeryData) {
    summeryData = {
      total: 0,
      subtotal: 0,
      discount: 0,
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                         if policyData is not passed                        */
  /* -------------------------------------------------------------------------- */
  if (!policyData) {
    policyData = {
      title: "",
      description: "",
      link: {
        title: "",
        url: "",
        target: "",
      },
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                         if signUpData is not passed                        */
  /* -------------------------------------------------------------------------- */
  if (!signUpData) {
    signUpData = {
      title: "",
    };
  }

  /* -------------------------------------------------------------------------- */
  /*                     if companyPolicyData is not passed                     */
  /* -------------------------------------------------------------------------- */
  if (!companyPolicyData) {
    companyPolicyData = {
      title: "",
      companyName: "",
      link: {
        title: "",
        url: "",
        target: "",
      },
    };
  }

  /* -------------------------------------------------------------------------- */
  /*      if autoFill is true then auto fill the form using useEffect hook      */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (autoFill && userData) {
      // react hook form setValue
      Object.keys(userData).forEach((key) => {
        // @ts-ignore
        setValue(key, userData[key]);
      });
    }
    // if userLogin is true then auto fill the form using useEffect hook
    if (!userLogin) {
      // accountPolicy setValues using react hook form setValue
      setValue("accountPolicy", true);
    } else {
      // accountPolicy setValues using react hook form setValue
      setValue("accountPolicy", false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoFill, userData, userLogin]);

  /* -------------------------------------------------------------------------- */
  /*                           state watch for country                          */
  /* -------------------------------------------------------------------------- */
  useEffect(() => {
    if (watch("country")) {
      setState(State.getStatesOfCountry(watch("country")));
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch("country")]);

  /* -------------------------------------------------------------------------- */
  /*                             form submit handler                            */
  /* -------------------------------------------------------------------------- */
  const onSubmit = async (data: any) => {
    // form loader on submit
    setLoader(true);
    // form data console
    if (formSubmit) {
      formSubmit(data);
    }
    // form loader on submit
    setLoader(false);
  };

  /* -------------------------------------------------------------------------- */
  /*                         Coupon Code submit handler                         */
  /* -------------------------------------------------------------------------- */
  const couponSubmitHandler = async (data: any) => {
    // form loader on submit
    setCouponLoader(true);
    // form data console
    if (couponSubmit) {
      couponSubmit(data);
    }
    // form loader on submit
    setCouponLoader(false);
  };

  return (
    <div className="container mx-auto">
      <div className="lg:flex grid gap-10 mt-16 mb-28">
        {/* Form Body */}
        <div className="2xl:w-3/4 lg:w-2/3 w-11/12 mx-auto">
          <div className="bg-white shadow-md rounded-xl overflow-hidden p-6 relative">
            {/* Form Loader */}
            {(!cartData || loading) && <LoaderGrowing />}
            <div className=" grid lg:gap-3 gap-8">
              {/* Form Title */}
              <div className="flex p-2.5 bg-themeLightGray rounded font-medium text-xl text-themeDark mb-6">
                <h3 className="w-full md:w-4/12 sm:w-5/12 ml-2">Billing Details</h3>
              </div>
              {/* Form input lists */}
              {cartData && cartData.length > 0 && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-full grid gap-8">
                    {/* First Name & Last Name */}
                    <div className="sm:flex grid sm:gap-5 gap-8">
                      {/* First Name */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.first_name ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="first_name"
                          >
                            First Name
                          </label>
                          <input
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 ${
                              errors.first_name ? "border-red-400" : "border-[#DDE6F5]"
                            } text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline`}
                            type="text"
                            placeholder="First Name"
                            id="first_name"
                            {...register("first_name", {
                              required: "First Name is required",
                            })}
                          />
                        </div>
                      </div>
                      {/* Last Name */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.last_name ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="last_name"
                          >
                            Last Name
                          </label>
                          <input
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.last_name ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            type="text"
                            placeholder="Last Name"
                            id="last_name"
                            {...register("last_name", {
                              required: "Last Name is required",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    {/* company name & country */}
                    <div className="sm:flex grid sm:gap-5 gap-8">
                      {/* Company name */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label className="absolute -top-2 text-[#85929E] left-3 bg-white text-xs" htmlFor="company">
                            Company Name (Optional)
                          </label>
                          <input
                            className="appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline"
                            type="text"
                            placeholder="Company Name"
                            id="company"
                            {...register("company")}
                          />
                        </div>
                      </div>
                      {/* Country / Region */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.country ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="country"
                          >
                            Country / Region
                          </label>
                          <select
                            title="Country"
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.country ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            id="country"
                            {...register("country", {
                              required: "Country is required",
                            })}
                          >
                            <option value="">Select Country</option>
                            {country.map((item, index) => (
                              <option key={index} value={item.isoCode}>
                                {item.flag} {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Street address */}
                    <div className="sm:flex grid sm:gap-5 gap-8">
                      <div className="w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.address_1 ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="address_1"
                          >
                            Street Address
                          </label>
                          <input
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.address_1 ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            type="text"
                            placeholder="Address"
                            id="address_1"
                            {...register("address_1", {
                              required: "Address is required",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Town / City & District */}
                    <div className="sm:flex grid sm:gap-5 gap-8">
                      {/* Town / City */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.city ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="city"
                          >
                            Your Town / City
                          </label>
                          <input
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.city ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            type="text"
                            placeholder="City"
                            id="city"
                            {...register("city", {
                              required: "City is required",
                            })}
                          />
                        </div>
                      </div>
                      {/* State */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.state ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="state"
                          >
                            Your State
                          </label>
                          <select
                            title="state"
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.state ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            id="state"
                            {...register("state", {
                              required: "State is required",
                            })}
                          >
                            <option value="">Select State</option>
                            {state.map((item: any, index: any) => (
                              <option key={index} value={item.value}>
                                {item.name}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    {/* Postcode / ZIP & Phone */}
                    <div className="sm:flex grid sm:gap-5 gap-8">
                      {/* Postcode / ZIP */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.postcode ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="postcode"
                          >
                            Postcode / ZIP
                          </label>
                          <input
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.postcode ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            type="text"
                            placeholder="Your Postcode / ZIP"
                            id="postcode"
                            {...register("postcode", {
                              required: "Postcode is required",
                            })}
                          />
                        </div>
                      </div>
                      {/* Phone */}
                      <div className="sm:w-1/2 w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.phone ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="phone"
                          >
                            Phone
                          </label>
                          <input
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.phone ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            type="tel"
                            placeholder="Your Phone"
                            id="phone"
                            {...register("phone", {
                              required: "Phone is required",
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Email address */}
                    <div className="sm:flex grid sm:gap-5 gap-8">
                      <div className="w-full">
                        <div className="relative">
                          <label
                            className={`absolute -top-2 ${
                              errors.email ? "text-red-400" : "text-[#85929E]"
                            } left-3 bg-white text-xs`}
                            htmlFor="email"
                          >
                            Email Address
                          </label>
                          <input
                            className={`appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${
                              errors.email ? "border-red-400" : "border-[#DDE6F5]"
                            }`}
                            type="email"
                            placeholder="Your Email Address"
                            id="email"
                            {...register("email", {
                              required: "Email is required",
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address",
                              },
                            })}
                          />
                        </div>
                      </div>
                    </div>
                    {/* Account Policy checkbox */}
                    {!userLogin && (
                      <div className="sm:flex grid sm:gap-5 gap-8">
                        <div className="w-full">
                          <div className="relative">
                            <div
                              className={`border rounded-md w-full flex gap-3 py-3.5 px-5 ${
                                errors.accountPolicy
                                  ? "text-redLight border-redLight"
                                  : "border-[#DDE6F5] text-[#85929E]"
                              } leading-tight`}
                            >
                              <input
                                type="checkbox"
                                {...register("accountPolicy", {
                                  required: "Account Policy is required",
                                })}
                                defaultChecked={!userLogin}
                                id="accountPolicy"
                                className="flex-none form-check-input h-4 w-4 mt-1 border border-gray-300 rounded-sm bg-white checked:bg-blueTwo checked:border-blueTwo focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer group"
                              />
                              <label htmlFor="accountPolicy">
                                You are not logged in. We will automatically create a new account with your email
                                address. We will send you an email with your account details. If you already have an
                                account, please log in.
                              </label>
                            </div>
                            <label
                              className={`absolute -top-2 ${
                                errors.accountPolicy ? "text-redLight" : "text-[#85929E]"
                              } left-3 bg-white text-xs`}
                            >
                              Account Policy
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    {/* Order Button */}
                    <button
                      id="buy-button"
                      type="submit"
                      className={`${
                        isValid
                          ? loader
                            ? "bg-gray-800 shadow-md text-white cursor-not-allowed"
                            : "bg-orangeTwo shadow-4xl text-white hover:opacity-70 cursor-pointer"
                          : "bg-orangeTwo text-white cursor-not-allowed opacity-50"
                      } transition-all duration-300 ease-in-out flex justify-center items-center gap-4 rounded-md text-base font-semibold font-Roboto capitalize py-4 px-7 mt-6`}
                      disabled={!isValid || loader}
                    >
                      {loader ? "Processing..." : "Place Order"}
                      {loader && <FormLoader color="text-white" />}
                    </button>
                    {/* Add a image  */}
                    <div className="flex justify-center mt-6 w-1/3">
                      <Image
                        src="/2checkout_logo.png"
                        alt="payment icon"
                        width="300"
                        height="100"
                        priority
                        placeholder="blur"
                        blurDataURL="/2checkout_logo.png"
                      />
                    </div>
                    {/* Return to cart */}
                    <div className="flex justify-between mt-6">
                      <a
                        href="/cart"
                        className="flex items-center font-semibold text-themeNevyLight hover:text-themeRedLight text-base transition hover:duration-300 group"
                      >
                        <svg
                          className="mr-2.5 fill-themeNevyLight group-hover:fill-themeRedLight transition hover:duration-300"
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292892 5.70711C-0.097633 5.31658 -0.0976329 4.68342 0.292892 4.29289L4.29289 0.292892C4.68342 -0.0976324 5.31658 -0.0976324 5.70711 0.292893C6.09763 0.683416 6.09763 1.31658 5.70711 1.70711L3.41421 4L15 4C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6L3.41421 6L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711Z"
                          />
                        </svg>
                        Return to cart
                      </a>
                    </div>
                  </div>
                </form>
              )}
              {/* Cart Empty */}
              {(!cartData || cartData?.length === 0) && (
                <div className="flex-col flex gap-5 justify-center items-center min-h-[200px]">
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-16 h-16 text-gray-400"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc></desc>
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="6" cy="19" r="2"></circle>
                    <circle cx="17" cy="19" r="2"></circle>
                    <path d="M17 17h-11v-14h-2"></path>
                    <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13"></path>
                    <path d="M17 3l4 4"></path>
                    <path d="M21 3l-4 4"></path>
                  </svg>
                  <h3 className="text-center text-gray-400 text-xl">Your cart is currently empty.</h3>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Checkout Order Summery */}
        <div id="summary" className="2xl:max-w-md lg:w-1/3 w-11/12 mx-auto h-fit">
          <div className="bg-white sticky top-2 p-6 shadow-md rounded-xl overflow-hidden">
            {/* Form Loader */}
            {(!cartData || loading) && <LoaderGrowing />}
            {/* Title */}
            <h1 className="font-semibold text-2xl pb-7">Order Summary</h1>
            {/* Order summary */}
            <div className="relative max-h-80 overflow-y-auto mb-10 scrollBar">
              {cartData && cartData.length > 0 ? (
                cartData.map((item: any) => (
                  <div className="mb-7 flex gap-5" key={item.id}>
                    {/* Image here */}
                    <div className="flex-none">
                      {item?.featured_image ? (
                        <Image
                          src={item.featured_image}
                          alt="Product"
                          width={90}
                          height={90}
                          className="w-full rounded-md object-cover"
                          priority
                          placeholder="blur"
                          blurDataURL={item.featured_image}
                        />
                      ) : (
                        <div className="w-[90px] h-[90px] rounded-md bg-[#F2F4F4] flex items-center justify-center" />
                      )}
                    </div>
                    {/* Product details */}
                    <div className="flex-initial w-auto mr-1">
                      <h3 className="line-clamp-2 text-lg text-[#283747] mb-3 leading-5">{item.title}</h3>
                      <span className="text-[#283747] leading-7">
                        {"$" + Math.round(item.totals.total / item.quantity.value).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-14">
                  <h1 className="text-lg font-medium text-center text-gray-400">Your cart is empty</h1>
                </div>
              )}
            </div>
            {/* Discount Coupon input */}
            <form onSubmit={couponHandleSubmit(couponSubmitHandler)}>
              <div className="flex">
                <div className="w-full">
                  <div className="relative">
                    <label
                      htmlFor="couponCode"
                      className={`absolute -top-2 ${
                        couponErrors.couponCode ? "text-red-400" : "text-[#85929E]"
                      } left-3 bg-white text-xs`}
                    >
                      Discount Coupon
                    </label>
                    <input
                      className={`appearance-none border rounded-tl-md rounded-bl-md w-full py-3.5 px-5 ${
                        couponErrors.couponCode ? "border-red-400" : "border-[#DDE6F5]"
                      } text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline`}
                      type="text"
                      id="couponCode"
                      placeholder="Coupon Code"
                      {...couponRegister("couponCode", {
                        required: true,
                      })}
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!couponIsValid || couponLoader}
                  className={`bg-gradient-to-br ${
                    couponIsValid ? "cursor-pointer hover:opacity-80" : "cursor-not-allowed"
                  } from-blueOne to-blueTwo flex justify-center items-center rounded-r duration-500 ease-in-out py-3 px-5 text-base text-white`}
                >
                  {couponLoader ? <FormLoader color="text-white" /> : "Apply"}
                </button>
              </div>
            </form>
            {/* information */}
            <div className="mt-5">
              <ul>
                {/* Sub-Total */}
                <li className="flex font-medium justify-between py-2 text-base text-[#5D6D7E]">
                  <span>Sub Total</span>
                  <span className="text-[#1B2631]">
                    ${summeryData?.subtotal?.toFixed(2) || 0}
                    {/* <span className="text-[#85929E] text-sm">/year</span> */}
                  </span>
                </li>
                {/* Discount */}
                <li className="flex font-medium justify-between py-2 text-base text-[#5D6D7E]">
                  <span>Discount</span>
                  <span className="text-[#FA4F58]">- ${summeryData?.discount.toFixed(2) || 0}</span>
                </li>
                {/* Renewal On */}
                <li className="flex font-medium justify-between py-2 text-base text-[#5D6D7E] border-t-2">
                  <span className="text-bold">Total</span>
                  <span className="text-[#1B2631]">
                    ${summeryData?.total?.toFixed(2) || 0}
                    {/* <span className="text-[#85929E] text-sm">/year</span> */}
                  </span>
                </li>
              </ul>
            </div>
            {/* checkboxs */}
            <div className="mt-8">
              {/* tracking-coupone checkbox */}
              {policyData && (
                <Fragment>
                  <div className="mb-5">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2 justify-between">
                        <input id="Coupons" type="checkbox" defaultChecked />
                        <label htmlFor="Coupons" className="font-normal text-sm text-themeNevyLight">
                          {policyData.title || "Text me Tracking Updates  & Periodic Coupons (optional)"}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="font-normal text-sm text-themeNevyLight">
                      {policyData.description ||
                        "Your personal data will be used to process your order, support your experience throughout this website, and for other purpose describe in our"}
                      <a
                        href={policyData.link.url || "#"}
                        target={policyData.link.target || "_self"}
                        rel="noopener noreferrer"
                        className="font-semibold text-themeNevyLight hover:text-themeRedLight transition hover:duration-300"
                      >
                        {" "}
                        {policyData.link.title || "privacy policy"}
                      </a>
                    </p>
                  </div>
                </Fragment>
              )}
              {/* newsletter checkbox */}
              {signUpData && (
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center justify-between">
                      <input id="subscription" type="checkbox" defaultChecked />
                      <label htmlFor="subscription" className="ml-1 font-normal text-sm text-themeNevyLight">
                        {signUpData.title || "Sign me up to receive emil updates and news (optional)"}
                      </label>
                    </div>
                  </div>
                </div>
              )}
              {/* aggreement checkbox */}
              {companyPolicyData && (
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1 items-center justify-between">
                      <input id="policy" type="checkbox" defaultChecked />
                      <label htmlFor="policy" className="ml-1 font-normal text-sm text-themeNevyLight">
                        {companyPolicyData.title || "I agree with the"}
                        <a
                          href={companyPolicyData.link.url || "#"}
                          target={companyPolicyData.link.target || "_self"}
                          rel="noopener noreferrer"
                          className="font-semibold text-themeRedLight hover:text-themeDark transition hover:duration-300"
                        >
                          {" "}
                          {companyPolicyData.companyName || "Company Policies"}
                        </a>
                      </label>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
