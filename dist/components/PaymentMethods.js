"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/components/PaymentMethods.tsx
var PaymentMethods_exports = {};
__export(PaymentMethods_exports, {
  PaymentMethods: () => PaymentMethods
});
module.exports = __toCommonJS(PaymentMethods_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PaymentMethods
});
//# sourceMappingURL=PaymentMethods.js.map