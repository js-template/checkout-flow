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

// src/components/CheckoutBillings.tsx
var CheckoutBillings_exports = {};
__export(CheckoutBillings_exports, {
  default: () => CheckoutBillings_default
});
module.exports = __toCommonJS(CheckoutBillings_exports);
var import_react2 = __toESM(require("react"));
var import_country_state_city = require("country-state-city");

// src/components/PaymentMethods.tsx
var import_react = __toESM(require("react"));
var import_image = __toESM(require("next/image"));
var import_bi = require("react-icons/bi");
var import_link = __toESM(require("next/link"));
var import_react_toast_notifications = require("react-toast-notifications");
var import_jsx_runtime = require("react/jsx-runtime");
var PaymentMethods = ({ billing, shippingDetails, shipingCheck }) => {
  const { addToast } = (0, import_react_toast_notifications.useToasts)();
  const [paymentActive, setPaymentActive] = import_react.default.useState(4);
  const billingIsDisabled = Object.values(billing).some(
    (value) => value === "" || value === null || value === void 0
  );
  const shippingIsDisabled = Object.values(shippingDetails).some(
    (value) => value === "" || value === null || value === void 0
  );
  const isNotPaymentCheck = shipingCheck ? !billingIsDisabled && !shippingIsDisabled : !billingIsDisabled;
  const isPaymentCheck = shipingCheck ? billingIsDisabled || shippingIsDisabled : billingIsDisabled;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "bg-white mt-7 rounded-xl p-2.5", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xl font-medium flex px-6 py-4 bg-themeSecondary100 text-themeSecondary800 rounded", children: "Payment Method" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex md:grid grid-cols-2 xl:flex flex-wrap lg:flex-nowrap items-center gap-4 p-4 md:p-10", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "label",
        {
          onChange: () => {
            isPaymentCheck ? addToast("Please Complete the Following Details Fields", {
              appearance: "error",
              autoDismiss: true,
              autoDismissTimeout: 3e3
            }) : setPaymentActive(0);
          },
          htmlFor: "paypal",
          className: "flex items-center gap-7 border rounded-lg px-5 py-3.5 w-full cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                type: "radio",
                name: "payment",
                id: "paypal",
                className: "cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 shrink-0 radio_style_one",
                checked: isNotPaymentCheck && paymentActive === 0
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.default, { src: "/paypal2.png", width: 115, height: 30, alt: "payment_img", priority: true })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "label",
        {
          onChange: () => {
            isPaymentCheck ? addToast("Please Complete the Following Details Fields", {
              appearance: "error",
              autoDismiss: true,
              autoDismissTimeout: 3e3
            }) : setPaymentActive(1);
          },
          htmlFor: "stripe",
          className: "flex items-center gap-7 border rounded-lg px-5 py-3.5 w-full cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                type: "radio",
                name: "payment",
                id: "stripe",
                className: "cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 shrink-0 radio_style_one",
                checked: isNotPaymentCheck && paymentActive === 1
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.default, { src: "/stripe.png", width: 77, height: 31, alt: "payment_img", priority: true })
          ]
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "label",
        {
          onChange: () => {
            isPaymentCheck ? addToast("Please Complete the Following Details Fields", {
              appearance: "error",
              autoDismiss: true,
              autoDismissTimeout: 3e3
            }) : setPaymentActive(2);
          },
          htmlFor: "sezzle",
          className: "flex items-center gap-7 border rounded-lg px-5 py-1 w-full cursor-pointer",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              "input",
              {
                type: "radio",
                name: "payment",
                id: "sezzle",
                className: "cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 shrink-0 radio_style_one",
                checked: isNotPaymentCheck && paymentActive === 2
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_image.default, { src: "/sezzle.png", width: 110, height: 32, alt: "payment_img", priority: true })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-fit", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: "/cart", children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 ml-10 mb-6 group w-fit", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_bi.BiArrowBack, { className: "text-themeSecondary600 w-4 h-4 group-hover:text-themePrimary600 transition hover:duration-700" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base font-medium text-themeSecondary600 group-hover:text-themePrimary600 transition hover:duration-700", children: "Return to cart" })
    ] }) }) })
  ] });
};

// src/components/CheckoutBillings.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var CheckoutBillings = ({ user }) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s;
  const [country, setCountry] = import_react2.default.useState(import_country_state_city.Country.getAllCountries());
  const [state, setState] = import_react2.default.useState(import_country_state_city.State.getAllStates());
  const [shipingCheck, setShipingCheck] = import_react2.default.useState(false);
  const [billing, setBilling] = import_react2.default.useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    address_1: "",
    address_2: "",
    city: "",
    country: "",
    postcode: "",
    state: ""
  });
  const [shippingDetails, setShippingDetails] = import_react2.default.useState({
    first_name: "",
    last_name: "",
    phone: "",
    address_1: "",
    address_2: "",
    city: "",
    country: "",
    postcode: "",
    state: ""
  });
  import_react2.default.useEffect(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2;
    setBilling({
      first_name: ((_a2 = user == null ? void 0 : user.billing) == null ? void 0 : _a2.first_name) || "",
      last_name: ((_b2 = user == null ? void 0 : user.billing) == null ? void 0 : _b2.last_name) || "",
      phone: ((_c2 = user == null ? void 0 : user.billing) == null ? void 0 : _c2.phone) || "",
      email: ((_d2 = user == null ? void 0 : user.billing) == null ? void 0 : _d2.email) || "",
      address_1: ((_e2 = user == null ? void 0 : user.billing) == null ? void 0 : _e2.address_1) || "",
      address_2: ((_f2 = user == null ? void 0 : user.billing) == null ? void 0 : _f2.address_2) || "",
      city: ((_g2 = user == null ? void 0 : user.billing) == null ? void 0 : _g2.city) || "",
      country: ((_h2 = user == null ? void 0 : user.billing) == null ? void 0 : _h2.country) || "",
      postcode: ((_i2 = user == null ? void 0 : user.billing) == null ? void 0 : _i2.postcode) || "",
      state: ((_j2 = user == null ? void 0 : user.billing) == null ? void 0 : _j2.state) || ""
    });
  }, [user]);
  import_react2.default.useEffect(() => {
    var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2;
    setShippingDetails({
      first_name: ((_a2 = user == null ? void 0 : user.shipping) == null ? void 0 : _a2.first_name) || "",
      last_name: ((_b2 = user == null ? void 0 : user.shipping) == null ? void 0 : _b2.last_name) || "",
      phone: ((_c2 = user == null ? void 0 : user.shipping) == null ? void 0 : _c2.phone) || "",
      address_1: ((_d2 = user == null ? void 0 : user.shipping) == null ? void 0 : _d2.address_1) || "",
      address_2: ((_e2 = user == null ? void 0 : user.shipping) == null ? void 0 : _e2.address_2) || "",
      city: ((_f2 = user == null ? void 0 : user.shipping) == null ? void 0 : _f2.city) || "",
      country: ((_g2 = user == null ? void 0 : user.shipping) == null ? void 0 : _g2.country) || "",
      postcode: ((_h2 = user == null ? void 0 : user.shipping) == null ? void 0 : _h2.postcode) || "",
      state: ((_i2 = user == null ? void 0 : user.shipping) == null ? void 0 : _i2.state) || ""
    });
  }, [user]);
  const handleOnChangeDetails = (e) => {
    const { name, value } = e.target;
    setBilling(__spreadProps(__spreadValues({}, billing), { [name]: value }));
  };
  import_react2.default.useEffect(() => {
    setState(import_country_state_city.State.getStatesOfCountry(billing.country));
  }, [billing.country]);
  const handleOnChangeShipingDetails = (e) => {
    if (shipingCheck) {
      const { name, value } = e.target;
      setShippingDetails(__spreadProps(__spreadValues({}, shippingDetails), { [name]: value }));
    }
  };
  import_react2.default.useEffect(() => {
    if (shipingCheck) {
      setState(import_country_state_city.State.getStatesOfCountry(shippingDetails.country));
    }
  }, [shippingDetails]);
  const handleOnChangeShipingCheck = () => {
    setShipingCheck(!shipingCheck);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_jsx_runtime2.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full lg:col-span-8", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "p-2.5 bg-white rounded-2xl", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grid lg:gap-3 gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-xl  font-medium p-2.5 bg-themeSecondary100 rounded-xl text-themeSecondary800", children: "Billing Details" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("form", { action: "", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full grid gap-5 px-2 sm:p-7", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "First Name",
                name: "first_name",
                onChange: handleOnChangeDetails,
                defaultValue: (_a = user == null ? void 0 : user.billing) == null ? void 0 : _a.first_name
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Last Name",
                name: "last_name",
                onChange: handleOnChangeDetails,
                defaultValue: (_b = user == null ? void 0 : user.billing) == null ? void 0 : _b.last_name
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Phone",
                name: "phone",
                onChange: handleOnChangeDetails,
                defaultValue: (_c = user == null ? void 0 : user.billing) == null ? void 0 : _c.phone
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "email",
                placeholder: "Your Email Address",
                name: "email",
                onChange: handleOnChangeDetails,
                defaultValue: (_d = user == null ? void 0 : user.billing) == null ? void 0 : _d.email
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Street Address",
                name: "address_1",
                onChange: handleOnChangeDetails,
                defaultValue: (_e = user == null ? void 0 : user.billing) == null ? void 0 : _e.address_1
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Apartment/Suite/Unit Etc",
                name: "address_2",
                onChange: handleOnChangeDetails,
                defaultValue: (_f = user == null ? void 0 : user.billing) == null ? void 0 : _f.address_2
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Town/City",
                name: "city",
                onChange: handleOnChangeDetails,
                defaultValue: (_g = user == null ? void 0 : user.billing) == null ? void 0 : _g.city
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "select",
              {
                title: "state",
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon",
                name: "country",
                onChange: handleOnChangeDetails,
                defaultValue: (_h = user == null ? void 0 : user.billing) == null ? void 0 : _h.country,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Choose Country" }),
                  country.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("option", { value: item.isoCode, children: [
                    item.flag,
                    " ",
                    item.name
                  ] }, index))
                ]
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Post Code",
                name: "postcode",
                onChange: handleOnChangeDetails,
                defaultValue: (_j = (_i = user == null ? void 0 : user.data) == null ? void 0 : _i.billing) == null ? void 0 : _j.postcode
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "select",
              {
                title: "Country",
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon",
                name: "state",
                onChange: handleOnChangeDetails,
                defaultValue: (_k = user == null ? void 0 : user.billing) == null ? void 0 : _k.state,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Choose State" }),
                  state.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: item.value, children: item.name }, index))
                ]
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                onChange: handleOnChangeShipingCheck,
                defaultChecked: shipingCheck,
                id: "ship-checkbox",
                type: "checkbox",
                className: "w-5 h-5 cursor-pointer accent-themePrimary700"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { htmlFor: "ship-checkbox", className: "text-base text-themeSecondary600", children: "Ship to a different address instead of the billing address" })
          ] })
        ] }) })
      ] }),
      shipingCheck && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "grid lg:gap-3 gap-8", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-xl font-medium p-2.5 bg-themeSecondary100 rounded-xl text-themeSecondary800", children: "Shipping Details" }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("form", { action: "", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full grid gap-5 px-2 sm:p-7", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "First Name",
                name: "first_name",
                onChange: handleOnChangeShipingDetails,
                defaultValue: (_l = user == null ? void 0 : user.shipping) == null ? void 0 : _l.first_name
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Last Name",
                name: "last_name",
                onChange: handleOnChangeShipingDetails,
                defaultValue: (_m = user == null ? void 0 : user.shipping) == null ? void 0 : _m.last_name
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
            "input",
            {
              className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
              type: "text",
              placeholder: "Phone",
              name: "phone",
              onChange: handleOnChangeShipingDetails,
              defaultValue: (_n = user == null ? void 0 : user.shipping) == null ? void 0 : _n.phone
            }
          ) }) }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Street Address",
                name: "address_1",
                onChange: handleOnChangeShipingDetails,
                defaultValue: (_o = user == null ? void 0 : user.shipping) == null ? void 0 : _o.address_1
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Apartment/Suite/Unit Etc",
                name: "address_2",
                onChange: handleOnChangeShipingDetails,
                defaultValue: (_p = user == null ? void 0 : user.shipping) == null ? void 0 : _p.address_2
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Town/City",
                name: "city",
                onChange: handleOnChangeShipingDetails,
                defaultValue: (_q = user == null ? void 0 : user.shipping) == null ? void 0 : _q.city
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "select",
              {
                title: "state",
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon",
                name: "country",
                onChange: handleOnChangeShipingDetails,
                defaultValue: (_r = user == null ? void 0 : user.shipping) == null ? void 0 : _r.country,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Choose Country" }),
                  country.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("option", { value: item.isoCode, children: [
                    item.flag,
                    " ",
                    item.name
                  ] }, index))
                ]
              }
            ) }) })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "sm:flex grid sm:gap-5 gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
              "input",
              {
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline",
                type: "text",
                placeholder: "Post Code",
                name: "postcode",
                onChange: handleOnChangeShipingDetails,
                defaultValue: (_s = user == null ? void 0 : user.shipping) == null ? void 0 : _s.postcode
              }
            ) }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "sm:w-1/2 w-full", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
              "select",
              {
                title: "Country",
                className: "appearance-none border rounded-md w-full py-3.5 px-5 text-themeSecondary600 border-themeSecondary300 leading-tight focus:outline-none focus:shadow-lg focus:shadow-outline cursor-pointer svg_icon",
                name: "state",
                onChange: handleOnChangeShipingDetails,
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: "", children: "Choose State" }),
                  state.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("option", { value: item.value, children: item.name }, index))
                ]
              }
            ) }) })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(PaymentMethods, { billing, shippingDetails, shipingCheck })
  ] }) });
};
var CheckoutBillings_default = CheckoutBillings;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
//# sourceMappingURL=CheckoutBillings.js.map