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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nconst getCategoryById = async ({\n  query: {\n    id\n  }\n}, res) => {\n  const category = await prisma.category.findFirst({\n    where: {\n      id: Number(id)\n    }\n  });\n  res.status(200).json(category);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getCategoryById);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvY2F0ZWdvcmllcy9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsTUFBTUUsZUFBZSxHQUFHLE9BQU87QUFBRUMsRUFBQUEsS0FBSyxFQUFFO0FBQUVDLElBQUFBO0FBQUY7QUFBVCxDQUFQLEVBQTBCQyxHQUExQixLQUFrQztBQUN4RCxRQUFNQyxRQUFRLEdBQUcsTUFBTUwsTUFBTSxDQUFDSyxRQUFQLENBQWdCQyxTQUFoQixDQUEwQjtBQUMvQ0MsSUFBQUEsS0FBSyxFQUFFO0FBQ0xKLE1BQUFBLEVBQUUsRUFBRUssTUFBTSxDQUFDTCxFQUFEO0FBREw7QUFEd0MsR0FBMUIsQ0FBdkI7QUFLQUMsRUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJMLFFBQXJCO0FBQ0QsQ0FQRDs7QUFTQSxpRUFBZUosZUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9jYXRlZ29yaWVzL1tpZF0uanM/YjVmNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5jb25zdCBnZXRDYXRlZ29yeUJ5SWQgPSBhc3luYyAoeyBxdWVyeTogeyBpZCB9IH0sIHJlcykgPT4ge1xuICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IHByaXNtYS5jYXRlZ29yeS5maW5kRmlyc3Qoe1xuICAgIHdoZXJlOiB7XG4gICAgICBpZDogTnVtYmVyKGlkKSxcbiAgICB9LFxuICB9KTtcbiAgcmVzLnN0YXR1cygyMDApLmpzb24oY2F0ZWdvcnkpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0Q2F0ZWdvcnlCeUlkO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdldENhdGVnb3J5QnlJZCIsInF1ZXJ5IiwiaWQiLCJyZXMiLCJjYXRlZ29yeSIsImZpbmRGaXJzdCIsIndoZXJlIiwiTnVtYmVyIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/categories/[id].js\n");

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