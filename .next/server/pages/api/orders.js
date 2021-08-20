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
exports.id = "pages/api/orders";
exports.ids = ["pages/api/orders"];
exports.modules = {

/***/ "./pages/api/orders/index.js":
/*!***********************************!*\
  !*** ./pages/api/orders/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nconst handler = async (req, res) => {\n  if (req.method === \"POST\") {\n    createOrder(req, res);\n  }\n};\n\nconst createOrder = async (req, res) => {\n  const body = req.body;\n  console.log(body);\n  const order = await prisma.orders.create({\n    data: {\n      payment_type: \"cash\",\n      order_products: {\n        createMany: {\n          data: [{\n            product_id: 1\n          }]\n        }\n      }\n    }\n  });\n  console.log(order);\n  res.status(200).json(order);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QkMsSUFBQUEsV0FBVyxDQUFDSCxHQUFELEVBQU1DLEdBQU4sQ0FBWDtBQUNEO0FBQ0YsQ0FKRDs7QUFNQSxNQUFNRSxXQUFXLEdBQUcsT0FBT0gsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3RDLFFBQU1HLElBQUksR0FBR0osR0FBRyxDQUFDSSxJQUFqQjtBQUVBQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBLFFBQU1HLEtBQUssR0FBRyxNQUFNVCxNQUFNLENBQUNVLE1BQVAsQ0FBY0MsTUFBZCxDQUFxQjtBQUN2Q0MsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLFlBQVksRUFBRSxNQURWO0FBRUpDLE1BQUFBLGNBQWMsRUFBRTtBQUNkQyxRQUFBQSxVQUFVLEVBQUU7QUFDVkgsVUFBQUEsSUFBSSxFQUFFLENBQUM7QUFBRUksWUFBQUEsVUFBVSxFQUFFO0FBQWQsV0FBRDtBQURJO0FBREU7QUFGWjtBQURpQyxHQUFyQixDQUFwQjtBQVVBVCxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBTixFQUFBQSxHQUFHLENBQUNjLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQlQsS0FBckI7QUFDRCxDQWhCRDs7QUFrQkEsaUVBQWVSLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzP2U2N2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hLCBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG5jb25zdCBoYW5kbGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChyZXEubWV0aG9kID09PSBcIlBPU1RcIikge1xuICAgIGNyZWF0ZU9yZGVyKHJlcSwgcmVzKTtcbiAgfVxufTtcblxuY29uc3QgY3JlYXRlT3JkZXIgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgYm9keSA9IHJlcS5ib2R5O1xuXG4gIGNvbnNvbGUubG9nKGJvZHkpO1xuICBjb25zdCBvcmRlciA9IGF3YWl0IHByaXNtYS5vcmRlcnMuY3JlYXRlKHtcbiAgICBkYXRhOiB7XG4gICAgICBwYXltZW50X3R5cGU6IFwiY2FzaFwiLFxuICAgICAgb3JkZXJfcHJvZHVjdHM6IHtcbiAgICAgICAgY3JlYXRlTWFueToge1xuICAgICAgICAgIGRhdGE6IFt7IHByb2R1Y3RfaWQ6IDEgfV0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0pO1xuICBjb25zb2xlLmxvZyhvcmRlcik7XG4gIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9yZGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XG4iXSwibmFtZXMiOlsiUHJpc21hIiwiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsImNyZWF0ZU9yZGVyIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJvcmRlciIsIm9yZGVycyIsImNyZWF0ZSIsImRhdGEiLCJwYXltZW50X3R5cGUiLCJvcmRlcl9wcm9kdWN0cyIsImNyZWF0ZU1hbnkiLCJwcm9kdWN0X2lkIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/orders/index.js\n");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/orders/index.js"));
module.exports = __webpack_exports__;

})();