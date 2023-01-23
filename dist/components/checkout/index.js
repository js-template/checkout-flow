"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/components/checkout/index.tsx
var checkout_exports = {};
__export(checkout_exports, {
  CheckOut: () => CheckOut
});
module.exports = __toCommonJS(checkout_exports);
var import_react2 = __toESM(require("react"));
var import_country_state_city = require("country-state-city");

// src/components/loader/index.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var LoaderGrowing = () => {
  const itemLength = ["1", "2", "3", "4", "5"];
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 z-40 flex items-center justify-center bg-[#ffffffd0]", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `lds-ring`, "aria-labelledby": "none", children: itemLength.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {}, index)) }) }) });
};
var FormLoader = ({ color }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "svg",
    {
      className: `ml-2 h-5 w-5 animate-spin ${color ? color : "text-blueTwo"}`,
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "path",
          {
            className: "opacity-75",
            fill: "currentColor",
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          }
        )
      ]
    }
  ) });
};

// src/components/checkout/index.tsx
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime2 = require("react/jsx-runtime");
var CheckOut = ({
  loading,
  userData,
  formSubmit,
  autoFill,
  cartData,
  summeryData,
  policyData,
  signUpData,
  companyPolicyData,
  userLogin
}) => {
  var _a, _b;
  const [country, setCountry] = (0, import_react2.useState)(import_country_state_city.Country.getAllCountries());
  const [state, setState] = (0, import_react2.useState)(import_country_state_city.State.getAllStates());
  const [loader, setLoader] = (0, import_react2.useState)(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isValid }
  } = (0, import_react_hook_form.useForm)({
    mode: "onBlur"
  });
  if (!cartData) {
    cartData = [];
  }
  if (!summeryData) {
    summeryData = {
      total: 0,
      subtotal: 0,
      discount: 0
    };
  }
  if (!policyData) {
    policyData = {
      title: "",
      description: "",
      link: {
        title: "",
        url: "",
        target: ""
      }
    };
  }
  if (!signUpData) {
    signUpData = {
      title: ""
    };
  }
  if (!companyPolicyData) {
    companyPolicyData = {
      title: "",
      companyName: "",
      link: {
        title: "",
        url: "",
        target: ""
      }
    };
  }
  import_react2.default.useEffect(() => {
    if (autoFill && userData) {
      Object.keys(userData).forEach((key) => {
        setValue(key, userData[key]);
      });
    }
    if (!userLogin) {
      setValue("accountPolicy", true);
    } else {
      setValue("accountPolicy", false);
    }
  }, [autoFill, userData, userLogin]);
  const onSubmit = (data) => __async(void 0, null, function* () {
    setLoader(true);
    if (formSubmit) {
      formSubmit(data);
    }
    setLoader(false);
  });
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "container mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "lg:flex grid gap-10 mt-16 mb-28", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "2xl:w-3/4 lg:w-2/3 w-11/12 mx-auto ", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "bg-white shadow-md rounded-xl overflow-hidden p-6", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: " grid lg:gap-3 gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex p-2.5 bg-themeLightGray rounded font-medium text-xl text-themeDark mb-6", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "w-full md:w-4/12 sm:w-5/12 ml-2", children: "Billing Details" }) }),
      cartData && cartData.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("form", { onSubmit: handleSubmit(onSubmit), children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full grid gap-8", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "label",
                {
                  className: `absolute -top-2 ${errors.first_name ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                  htmlFor: "first_name",
                  children: "First Name"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                __spreadValues({
                  className: `appearance-none border rounded-md w-full py-3.5 px-5 ${errors.first_name ? "border-red-400" : "border-[#DDE6F5]"} text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline`,
                  type: "text",
                  placeholder: "First Name",
                  id: "first_name"
                }, register("first_name", {
                  required: "First Name is required"
                }))
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "label",
                {
                  className: `absolute -top-2 ${errors.last_name ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                  htmlFor: "last_name",
                  children: "Last Name"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                __spreadValues({
                  className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.last_name ? "border-red-400" : "border-[#DDE6F5]"}`,
                  type: "text",
                  placeholder: "Last Name",
                  id: "last_name"
                }, register("last_name", {
                  required: "Last Name is required"
                }))
              )
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { className: "absolute -top-2 text-[#85929E] left-3 bg-white text-xs", htmlFor: "company", children: "Company Name (Optional)" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                __spreadValues({
                  className: "appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                  type: "text",
                  placeholder: "Company Name",
                  id: "company"
                }, register("company"))
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "label",
                {
                  className: `absolute -top-2 ${errors.country ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                  htmlFor: "country",
                  children: "Country / Region"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "select",
                __spreadProps(__spreadValues({
                  title: "Country",
                  className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.country ? "border-red-400" : "border-[#DDE6F5]"}`,
                  id: "country"
                }, register("country", {
                  required: "Country is required"
                })), {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Select Country" }),
                    country.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("option", { value: item.isoCode, children: [
                      item.flag,
                      " ",
                      item.name
                    ] }, index))
                  ]
                })
              )
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "label",
              {
                className: `absolute -top-2 ${errors.address_1 ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                htmlFor: "address_1",
                children: "Street Address"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              __spreadValues({
                className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.address_1 ? "border-red-400" : "border-[#DDE6F5]"}`,
                type: "text",
                placeholder: "Address",
                id: "address_1"
              }, register("address_1", {
                required: "Address is required"
              }))
            )
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "label",
                {
                  className: `absolute -top-2 ${errors.city ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                  htmlFor: "city",
                  children: "Your Town / City"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                __spreadValues({
                  className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.city ? "border-red-400" : "border-[#DDE6F5]"}`,
                  type: "text",
                  placeholder: "City",
                  id: "city"
                }, register("city", {
                  required: "City is required"
                }))
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "label",
                {
                  className: `absolute -top-2 ${errors.state ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                  htmlFor: "state",
                  children: "Your State"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
                "select",
                __spreadProps(__spreadValues({
                  title: "state",
                  className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.state ? "border-red-400" : "border-[#DDE6F5]"}`,
                  id: "state"
                }, register("state", {
                  required: "State is required"
                })), {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Select State" }),
                    state.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: item.value, children: item.name }, index))
                  ]
                })
              )
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "label",
                {
                  className: `absolute -top-2 ${errors.postcode ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                  htmlFor: "postcode",
                  children: "Postcode / ZIP"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                __spreadValues({
                  className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.postcode ? "border-red-400" : "border-[#DDE6F5]"}`,
                  type: "text",
                  placeholder: "Your Postcode / ZIP",
                  id: "postcode"
                }, register("postcode", {
                  required: "Postcode is required"
                }))
              )
            ] }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "label",
                {
                  className: `absolute -top-2 ${errors.phone ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                  htmlFor: "phone",
                  children: "Phone"
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                "input",
                __spreadValues({
                  className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.phone ? "border-red-400" : "border-[#DDE6F5]"}`,
                  type: "tel",
                  placeholder: "Your Phone",
                  id: "phone"
                }, register("phone", {
                  required: "Phone is required"
                }))
              )
            ] }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "label",
              {
                className: `absolute -top-2 ${errors.email ? "text-red-400" : "text-[#85929E]"} left-3 bg-white text-xs`,
                htmlFor: "email",
                children: "Email Address"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              __spreadValues({
                className: `appearance-none border rounded-md w-full py-3.5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline ${errors.email ? "border-red-400" : "border-[#DDE6F5]"}`,
                type: "email",
                placeholder: "Your Email Address",
                id: "email"
              }, register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address"
                }
              }))
            )
          ] }) }) }),
          !userLogin && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "div",
              {
                className: `border rounded-md w-full flex gap-3 py-3.5 px-5 ${errors.accountPolicy ? "text-redLight border-redLight" : "border-[#DDE6F5] text-[#85929E]"} leading-tight`,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                    "input",
                    __spreadProps(__spreadValues({
                      type: "checkbox"
                    }, register("accountPolicy", {
                      required: "Account Policy is required"
                    })), {
                      defaultChecked: !userLogin,
                      id: "accountPolicy",
                      className: "flex-none form-check-input h-4 w-4 mt-1 border border-gray-300 rounded-sm bg-white checked:bg-blueTwo checked:border-blueTwo focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer group"
                    })
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "accountPolicy", children: "You are not logged in. We will automatically create a new account with your email address. We will send you an email with your account details. If you already have an account, please log in." })
                ]
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "label",
              {
                className: `absolute -top-2 ${errors.accountPolicy ? "text-redLight" : "text-[#85929E]"} left-3 bg-white text-xs`,
                children: "Account Policy"
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "button",
            {
              id: "buy-button",
              type: "submit",
              className: `${isValid ? loader ? "bg-gray-800 shadow-md text-white cursor-not-allowed" : "bg-orangeTwo shadow-4xl text-white hover:opacity-70 cursor-pointer" : "bg-orangeTwo text-white cursor-not-allowed opacity-50"} transition-all duration-300 ease-in-out flex justify-center items-center gap-4 rounded-md text-base font-semibold font-Roboto capitalize py-4 px-7 mt-6`,
              disabled: !isValid || loader,
              children: [
                loader ? "Processing..." : "Place Order",
                loader && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(FormLoader, { color: "text-white" })
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-center mt-6 w-1/3", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("img", { src: "/2checkout_logo.png", alt: "payment icon", width: "300", height: "100" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-between mt-6", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            "a",
            {
              href: "/cart",
              className: "flex items-center font-semibold text-themeNevyLight hover:text-themeRedLight text-base transition hover:duration-300 group",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                  "svg",
                  {
                    className: "mr-2.5 fill-themeNevyLight group-hover:fill-themeRedLight transition hover:duration-300",
                    width: "16",
                    height: "10",
                    viewBox: "0 0 16 10",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
                      "path",
                      {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5.70711 9.70711C5.31658 10.0976 4.68342 10.0976 4.29289 9.70711L0.292892 5.70711C-0.097633 5.31658 -0.0976329 4.68342 0.292892 4.29289L4.29289 0.292892C4.68342 -0.0976324 5.31658 -0.0976324 5.70711 0.292893C6.09763 0.683416 6.09763 1.31658 5.70711 1.70711L3.41421 4L15 4C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6L3.41421 6L5.70711 8.29289C6.09763 8.68342 6.09763 9.31658 5.70711 9.70711Z"
                      }
                    )
                  }
                ),
                "Return to cart"
              ]
            }
          ) })
        ] })
      ] }),
      cartData && cartData.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-col flex gap-5 justify-center items-center min-h-[200px]", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
          "svg",
          {
            stroke: "currentColor",
            fill: "none",
            strokeWidth: "2",
            viewBox: "0 0 24 24",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            className: "w-16 h-16 text-gray-400",
            height: "1em",
            width: "1em",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("desc", {}),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "6", cy: "19", r: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("circle", { cx: "17", cy: "19", r: "2" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M17 17h-11v-14h-2" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M17 3l4 4" }),
              /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "M21 3l-4 4" })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "text-center text-gray-400 text-xl", children: "Your cart is currently empty." })
      ] })
    ] }) }) }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { id: "summary", className: "2xl:max-w-md lg:w-1/3 w-11/12 mx-auto h-fit", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "bg-white sticky top-2 p-6 shadow-md rounded-xl overflow-hidden", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "font-semibold text-2xl pb-7", children: "Order Summary" }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative max-h-80 overflow-y-auto mb-10 scrollBar", children: [
        loading && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(LoaderGrowing, {}),
        cartData && cartData.length > 0 ? cartData.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mb-7 flex gap-5", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex-none", children: (item == null ? void 0 : item.featured_image) ? /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "img",
            {
              src: item.featured_image,
              alt: "Product",
              width: 90,
              height: 90,
              className: "w-full rounded-md object-cover"
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-[90px] h-[90px] rounded-md bg-[#F2F4F4] flex items-center justify-center" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex-initial w-auto mr-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h3", { className: "line-clamp-2 text-lg text-[#283747] mb-3 leading-5", children: "Product Name" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-[#283747] leading-7", children: "$ 100" })
          ] })
        ] }, index)) : /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-center items-center h-14", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h1", { className: "text-lg font-medium text-center text-gray-400", children: "Your cart is empty" }) })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { className: "absolute -top-2 text-[#85929E] left-3 bg-white text-xs", children: "Discount Coupon" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              className: "appearance-none border rounded-l-md w-full py-3.5 px-5 text-gray-700 border-[#DDE6F5] leading-tight focus:outline-none focus:shadow-outline",
              type: "text",
              placeholder: "Coupon Code"
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "bg-gradient-to-br from-blueOne to-blueTwo rounded-r duration-500 ease-in-out hover:opacity-80 py-3 px-5 text-base text-white", children: "Apply" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "mt-5", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: "flex font-medium justify-between py-2 text-base text-[#5D6D7E]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Sub Total" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "text-[#1B2631]", children: [
            "$",
            ((_a = summeryData == null ? void 0 : summeryData.subtotal) == null ? void 0 : _a.toFixed(2)) || 0
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: "flex font-medium justify-between py-2 text-base text-[#5D6D7E]", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { children: "Discount" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "text-[#FA4F58]", children: [
            "- $",
            (summeryData == null ? void 0 : summeryData.discount.toFixed(2)) || 0
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("li", { className: "flex font-medium justify-between py-2 text-base text-[#5D6D7E] border-t-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-bold", children: "Total" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("span", { className: "text-[#1B2631]", children: [
            "$",
            ((_b = summeryData == null ? void 0 : summeryData.total) == null ? void 0 : _b.toFixed(2)) || 0
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "mt-8", children: [
        policyData && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react2.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "mb-5", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center gap-2 justify-between", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: "Coupons", type: "checkbox", defaultChecked: true }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "Coupons", className: "font-normal text-sm text-themeNevyLight", children: policyData.title || "Text me Tracking Updates  & Periodic Coupons (optional)" })
          ] }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { className: "font-normal text-sm text-themeNevyLight", children: [
            policyData.description || "Your personal data will be used to process your order, support your experience throughout this website, and for other purpose describe in our",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "a",
              {
                href: policyData.link.url || "#",
                target: policyData.link.target || "_self",
                rel: "noopener noreferrer",
                className: "font-semibold text-themeNevyLight hover:text-themeRedLight transition hover:duration-300",
                children: [
                  " ",
                  policyData.link.title || "privacy policy"
                ]
              }
            )
          ] }) })
        ] }),
        signUpData && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex gap-1 items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: "subscription", type: "checkbox", defaultChecked: true }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "subscription", className: "ml-1 font-normal text-sm text-themeNevyLight", children: signUpData.title || "Sign me up to receive emil updates and news (optional)" })
        ] }) }) }),
        companyPolicyData && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "mb-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "flex justify-between items-center", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex gap-1 items-center justify-between", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("input", { id: "policy", type: "checkbox", defaultChecked: true }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("label", { htmlFor: "policy", className: "ml-1 font-normal text-sm text-themeNevyLight", children: [
            companyPolicyData.title || "I agree with the",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "a",
              {
                href: companyPolicyData.link.url || "#",
                target: companyPolicyData.link.target || "_self",
                rel: "noopener noreferrer",
                className: "font-semibold text-themeRedLight hover:text-themeDark transition hover:duration-300",
                children: [
                  " ",
                  companyPolicyData.companyName || "Company Name Policies"
                ]
              }
            )
          ] })
        ] }) }) })
      ] })
    ] }) })
  ] }) });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CheckOut
});
//# sourceMappingURL=index.js.map