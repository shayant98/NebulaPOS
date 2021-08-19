"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/products/[id]";
exports.ids = ["pages/api/products/[id]"];
exports.modules = {

/***/ "./pages/api/products/[id].js":
/*!************************************!*\
  !*** ./pages/api/products/[id].js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nconst getProductById = async ({\n  query: {\n    id\n  }\n}, res) => {\n  const product = await prisma.product.findFirst({\n    where: {\n      id: Number(id)\n    },\n    include: {\n      category: true\n    }\n  });\n  res.status(200).json(product);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getProductById);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1DLE1BQU0sR0FBRyxJQUFJRCx3REFBSixFQUFmOztBQUVBLE1BQU1FLGNBQWMsR0FBRyxPQUFPO0FBQUVDLEVBQUFBLEtBQUssRUFBRTtBQUFFQyxJQUFBQTtBQUFGO0FBQVQsQ0FBUCxFQUEwQkMsR0FBMUIsS0FBa0M7QUFDdkQsUUFBTUMsT0FBTyxHQUFHLE1BQU1MLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlQyxTQUFmLENBQXlCO0FBQzdDQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEosTUFBQUEsRUFBRSxFQUFFSyxNQUFNLENBQUNMLEVBQUQ7QUFETCxLQURzQztBQUk3Q00sSUFBQUEsT0FBTyxFQUFFO0FBQ1BDLE1BQUFBLFFBQVEsRUFBRTtBQURIO0FBSm9DLEdBQXpCLENBQXRCO0FBUUFOLEVBQUFBLEdBQUcsQ0FBQ08sTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCUCxPQUFyQjtBQUNELENBVkQ7O0FBWUEsaUVBQWVKLGNBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcHJvZHVjdHMvW2lkXS5qcz9mYjRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmNvbnN0IGdldFByb2R1Y3RCeUlkID0gYXN5bmMgKHsgcXVlcnk6IHsgaWQgfSB9LCByZXMpID0+IHtcbiAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IHByaXNtYS5wcm9kdWN0LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBOdW1iZXIoaWQpLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgY2F0ZWdvcnk6IHRydWUsXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKHByb2R1Y3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0UHJvZHVjdEJ5SWQ7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2V0UHJvZHVjdEJ5SWQiLCJxdWVyeSIsImlkIiwicmVzIiwicHJvZHVjdCIsImZpbmRGaXJzdCIsIndoZXJlIiwiTnVtYmVyIiwiaW5jbHVkZSIsImNhdGVnb3J5Iiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/products/[id].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/products/[id].js"));
module.exports = __webpack_exports__;

})();