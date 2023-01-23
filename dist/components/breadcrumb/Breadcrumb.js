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

// src/components/breadcrumb/Breadcrumb.tsx
var Breadcrumb_exports = {};
__export(Breadcrumb_exports, {
  Breadcrumb: () => Breadcrumb
});
module.exports = __toCommonJS(Breadcrumb_exports);
var import_react_loading_skeleton = __toESM(require("react-loading-skeleton"));
var import_router = require("next/router");
var import_link = __toESM(require("next/link"));
var import_jsx_runtime = require("react/jsx-runtime");
var Breadcrumb = ({ name }) => {
  var _a;
  const router = (0, import_router.useRouter)();
  const segments = router.pathname.split("/");
  const replaceName = (_a = segments[segments.length - 1]) == null ? void 0 : _a.replace(/-/g, " ");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { className: "py-16 font-sans text-center bg-themeSecondary100", children: [
    name ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-3xl md:text-3xl lg:text-4xl font-bold capitalize", children: name }) : replaceName ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { className: "text-3xl md:text-3xl lg:text-4xl font-bold capitalize", children: replaceName }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_loading_skeleton.default, { height: 25, width: 100 }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex items-center  justify-center h-5 overflow-hidden gap-2 mx-auto mt-4", children: [
      (segments == null ? void 0 : segments.length) >= 3 && (segments == null ? void 0 : segments.map(
        (segment, index) => index < segments.length - 1 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: `/${segments == null ? void 0 : segments.slice(0, index + 1).join("/")}`, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base text-themeSecondary600 capitalize border-themeSecondary300 pr-2 hover:text-themePrimary700 transition duration-300 ease-in-out border-r", children: segment }) }, index) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base text-themeSecondary600 capitalize border-themeSecondary300 ", children: replaceName })
      )),
      (segments == null ? void 0 : segments.length) === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_link.default, { href: "/", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base text-themeSecondary600 capitalize border-themeSecondary300 hover:text-themePrimary700 transition duration-300 ease-in-out border-r pr-2", children: "Home" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { className: "text-base text-themeSecondary600 capitalize border-themeSecondary300", children: replaceName })
      ] })
    ] })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Breadcrumb
});
//# sourceMappingURL=Breadcrumb.js.map