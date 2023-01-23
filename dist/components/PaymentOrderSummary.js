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

// src/components/PaymentOrderSummary.tsx
var PaymentOrderSummary_exports = {};
__export(PaymentOrderSummary_exports, {
  PaymentOrderSummary: () => PaymentOrderSummary,
  default: () => PaymentOrderSummary_default
});
module.exports = __toCommonJS(PaymentOrderSummary_exports);
var import_image = __toESM(require("next/image"));
var import_link = __toESM(require("next/link"));
var import_react_loading_skeleton = __toESM(require("react-loading-skeleton"));
var import_jsx_runtime = require("react/jsx-runtime");
var PaymentOrderSummary = ({ cartData, billingData }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "w-full lg:col-span-4 h-fit bg-white rounded-2xl pb-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xl font-medium m-2.5 p-2.5 bg-themeSecondary100 rounded-xl text-themeSecondary800", children: "Order Summary" }),
    cartData == null ? void 0 : cartData.map((singleItem, index) => {
      var _a, _b;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center mx-5 gap-2.5 md:gap-6 border-b py-5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_image.default,
          {
            className: "rounded",
            src: singleItem == null ? void 0 : singleItem.featured_image,
            width: 70,
            height: 70,
            alt: "card-item-image",
            priority: true
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: `/shop/product?slug=${singleItem == null ? void 0 : singleItem.slug}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base font-medium text-themeSecondary600 line-clamp-2 hover:text-themePrimary600 transition hover:duration-700", children: singleItem == null ? void 0 : singleItem.title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-2 sm:gap-5 mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "ext-base font-medium text-themeSecondary500", children: [
              "Quantity: ",
              (_a = singleItem == null ? void 0 : singleItem.quantity) == null ? void 0 : _a.value
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "ext-base font-bold text-themeSecondary800", children: [
              "$",
              ((_b = singleItem == null ? void 0 : singleItem.totals) == null ? void 0 : _b.total).toFixed(2)
            ] })
          ] })
        ] })
      ] }, index);
    }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "container mx-auto border-t border-themeSecondary200" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mx-5 mt-10  mb-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-lg font-medium mb-6 text-themeSecondary800", children: "Shipping Method" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: "cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 radio_style_one",
            id: "8days",
            type: "radio",
            name: "deliverytime"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: "8days", className: "text-base font-medium text-themeSecondary600", children: "Standard Delivery : 8-10 Business Days" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex gap-3 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            className: "cursor-pointer appearance-none	inline-block	relative bg-white text-themePrimary600 top-0 letf-0 border-2 border-themeSecondary300 rounded-full w-5 h-5 radio_style_one",
            id: "2days",
            type: "radio",
            name: "deliverytime"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: "2days", className: "text-base font-medium text-themeSecondary600", children: "Express Delivery : 2 Business Days" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-lg font-medium mt-5 mb-2 rounded text-themeSecondary800", children: "Coupon" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "input",
          {
            type: "text",
            className: "w-full sm:w-auto h-full px-5 py-3 border rounded-lg focus:outline-none border-themeSecondary300",
            placeholder: "Coupon Code"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            className: "bg-themeSecondary800 text-white hover:bg-themePrimary600 hover:text-white transition hover:duration-700 w-full sm:w-auto capitalize text-base px-6 py-2.5 rounded-lg",
            color: "dark",
            children: "Apply"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "container mx-auto border-t border-themeSecondary200" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center justify-between gap-3 my-7 mx-5", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base font-medium text-themeSecondary600", children: "Subtotal" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base font-medium text-themeSecondary600", children: "Shipping Fee" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-xl font-medium text-themeSecondary800", children: "Total" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2.5 text-right", children: [
        (billingData == null ? void 0 : billingData.cart_contents_total) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-base font-bold text-themeSecondary800", children: [
          "$",
          parseInt(billingData == null ? void 0 : billingData.cart_contents_total).toFixed(2)
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2.5", children: [
          "$",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_loading_skeleton.default, { width: 40, height: 20 })
        ] }),
        (billingData == null ? void 0 : billingData.shipping_total) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-base font-bold text-themeSecondary800", children: [
          "$",
          parseInt(billingData == null ? void 0 : billingData.shipping_total).toFixed(2)
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2.5", children: [
          "$",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_loading_skeleton.default, { width: 40, height: 20 })
        ] }),
        (billingData == null ? void 0 : billingData.total) ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { className: "text-xl font-bold text-themeSecondary800", children: [
          "$",
          billingData == null ? void 0 : billingData.total
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "space-y-2.5", children: [
          "$",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_loading_skeleton.default, { width: 40, height: 20 })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "container mx-auto border-t border-themeSecondary200" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "mx-5 my-7", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: "notify", type: "checkbox", className: "w-5 h-5 accent-themePrimary600 shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { htmlFor: "notify", className: "text-themeSecondary600 text-base", children: "Sign me up to receive email updates and news (optional)" })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center gap-3 mt-4", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", { id: "police", type: "checkbox", className: "w-5 h-5 accent-themePrimary600 shrink-0" }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { htmlFor: "police", className: "text-themeSecondary600 text-base", children: [
          "I agree with the",
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: "/", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "text-themePrimary600 font-bold", children: "Meta-Shop Policies" }) })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { className: "bg-themePrimary600 text-white hover:bg-themeSecondary800 transition hover:duration-700 text-base px-7 py-4 rounded-md mt-7 w-full  font-semibold", children: "Continue" })
    ] })
  ] });
};
var PaymentOrderSummary_default = PaymentOrderSummary;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  PaymentOrderSummary
});
//# sourceMappingURL=PaymentOrderSummary.js.map