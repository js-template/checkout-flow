"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/loader/index.tsx
var loader_exports = {};
__export(loader_exports, {
  FormLoader: () => FormLoader,
  Loader: () => Loader,
  LoaderGrowing: () => LoaderGrowing
});
module.exports = __toCommonJS(loader_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Loader = ({ bg }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { id: "preloader", className: bg ? bg : `bg-white`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: `sk-three-bounce ${bg ? bg : `bg-white`}`, children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sk-child sk-bounce1" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sk-child sk-bounce2" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sk-child sk-bounce3" })
  ] }) }) });
};
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  FormLoader,
  Loader,
  LoaderGrowing
});
//# sourceMappingURL=index.js.map