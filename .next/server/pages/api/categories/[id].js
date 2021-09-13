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
exports.id = "pages/api/categories/[id]";
exports.ids = ["pages/api/categories/[id]"];
exports.modules = {

/***/ "./pages/api/categories/[id].js":
/*!**************************************!*\
  !*** ./pages/api/categories/[id].js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nconst getCategoryById = async ({\n  query: {\n    id\n  }\n}, res) => {\n  const category = await prisma.category.findFirst({\n    where: {\n      id: Number(id)\n    },\n    include: {\n      products: true\n    }\n  });\n  res.status(200).json(category);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCategoryById);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsTUFBTUUsZUFBZSxHQUFHLE9BQU87QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBO0FBQUY7QUFBVCxDQUFQLEVBQTBCQyxHQUExQixLQUFrQztBQUN4RCxRQUFNQyxRQUFRLEdBQUcsTUFBTUwsTUFBTSxDQUFDSyxRQUFQLENBQWdCQyxTQUFoQixDQUEwQjtBQUMvQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0xKLE1BQUFBLEVBQUUsRUFBRUssTUFBTSxDQUFDTCxFQUFEO0FBREwsS0FEd0M7QUFJL0NNLElBQUFBLE9BQU8sRUFBRTtBQUNQQyxNQUFBQSxRQUFRLEVBQUU7QUFESDtBQUpzQyxHQUExQixDQUF2QjtBQVFBTixFQUFBQSxHQUFHLENBQUNPLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlAsUUFBckI7QUFDRCxDQVZEOztBQVlBLGlFQUFlSixlQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2NhdGVnb3JpZXMvW2lkXS5qcz9iNWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5jb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmNvbnN0IGdldENhdGVnb3J5QnlJZCA9IGFzeW5jICh7IHF1ZXJ5OiB7IGlkIH0gfSwgcmVzKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5ID0gYXdhaXQgcHJpc21hLmNhdGVnb3J5LmZpbmRGaXJzdCh7XG4gICAgd2hlcmU6IHtcbiAgICAgIGlkOiBOdW1iZXIoaWQpLFxuICAgIH0sXG4gICAgaW5jbHVkZToge1xuICAgICAgcHJvZHVjdHM6IHRydWUsXG4gICAgfSxcbiAgfSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKGNhdGVnb3J5KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGdldENhdGVnb3J5QnlJZDtcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnZXRDYXRlZ29yeUJ5SWQiLCJxdWVyeSIsImlkIiwicmVzIiwiY2F0ZWdvcnkiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsIk51bWJlciIsImluY2x1ZGUiLCJwcm9kdWN0cyIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/categories/[id].js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/api/categories/[id].js"));
module.exports = __webpack_exports__;

})();