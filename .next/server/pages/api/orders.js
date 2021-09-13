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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n\nconst handler = async (req, res) => {\n  if (req.method === \"POST\") {\n    createOrder(req, res);\n  }\n};\n\nconst createOrder = async (req, res) => {\n  const body = req.body;\n  const productArray = body.receipt.receiptItems.map(item => {\n    return {\n      product_id: item.id,\n      qty: item.qty\n    };\n  });\n\n  try {\n    const order = await prisma.orders.create({\n      data: {\n        payment_type: body.type,\n        payment_type: body.type,\n        item_total: body.receipt.subTotal,\n        order_total: body.receipt.subTotal,\n        order_tax: body.receipt.tax,\n        order_products: {\n          createMany: {\n            data: productArray\n          }\n        }\n      }\n    });\n    res.status(200).json(order);\n  } catch (error) {\n    res.status(500).json({\n      error: \"Order could not be inserted\"\n    });\n    console.log(error);\n  }\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvb3JkZXJzL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsTUFBTUUsTUFBTSxHQUFHLElBQUlELHdEQUFKLEVBQWY7O0FBRUEsTUFBTUUsT0FBTyxHQUFHLE9BQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUNsQyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxNQUFuQixFQUEyQjtBQUN6QkMsSUFBQUEsV0FBVyxDQUFDSCxHQUFELEVBQU1DLEdBQU4sQ0FBWDtBQUNEO0FBQ0YsQ0FKRDs7QUFNQSxNQUFNRSxXQUFXLEdBQUcsT0FBT0gsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ3RDLFFBQU1HLElBQUksR0FBR0osR0FBRyxDQUFDSSxJQUFqQjtBQUNBLFFBQU1DLFlBQVksR0FBR0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLFlBQWIsQ0FBMEJDLEdBQTFCLENBQStCQyxJQUFELElBQVU7QUFDM0QsV0FBTztBQUFFQyxNQUFBQSxVQUFVLEVBQUVELElBQUksQ0FBQ0UsRUFBbkI7QUFBdUJDLE1BQUFBLEdBQUcsRUFBRUgsSUFBSSxDQUFDRztBQUFqQyxLQUFQO0FBQ0QsR0FGb0IsQ0FBckI7O0FBSUEsTUFBSTtBQUNGLFVBQU1DLEtBQUssR0FBRyxNQUFNZixNQUFNLENBQUNnQixNQUFQLENBQWNDLE1BQWQsQ0FBcUI7QUFDdkNDLE1BQUFBLElBQUksRUFBRTtBQUNKQyxRQUFBQSxZQUFZLEVBQUViLElBQUksQ0FBQ2MsSUFEZjtBQUVKRCxRQUFBQSxZQUFZLEVBQUViLElBQUksQ0FBQ2MsSUFGZjtBQUdKQyxRQUFBQSxVQUFVLEVBQUVmLElBQUksQ0FBQ0UsT0FBTCxDQUFhYyxRQUhyQjtBQUlKQyxRQUFBQSxXQUFXLEVBQUVqQixJQUFJLENBQUNFLE9BQUwsQ0FBYWMsUUFKdEI7QUFLSkUsUUFBQUEsU0FBUyxFQUFFbEIsSUFBSSxDQUFDRSxPQUFMLENBQWFpQixHQUxwQjtBQU1KQyxRQUFBQSxjQUFjLEVBQUU7QUFDZEMsVUFBQUEsVUFBVSxFQUFFO0FBQ1ZULFlBQUFBLElBQUksRUFBRVg7QUFESTtBQURFO0FBTlo7QUFEaUMsS0FBckIsQ0FBcEI7QUFjQUosSUFBQUEsR0FBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCZCxLQUFyQjtBQUNELEdBaEJELENBZ0JFLE9BQU9lLEtBQVAsRUFBYztBQUNkM0IsSUFBQUEsR0FBRyxDQUFDeUIsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBQXJCO0FBQ0FDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixDQTFCRDs7QUE0QkEsaUVBQWU3QixPQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVycy9pbmRleC5qcz9lNjdjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYSwgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuY29uc3QgaGFuZGxlciA9IGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAocmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIpIHtcbiAgICBjcmVhdGVPcmRlcihyZXEsIHJlcyk7XG4gIH1cbn07XG5cbmNvbnN0IGNyZWF0ZU9yZGVyID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGJvZHkgPSByZXEuYm9keTtcbiAgY29uc3QgcHJvZHVjdEFycmF5ID0gYm9keS5yZWNlaXB0LnJlY2VpcHRJdGVtcy5tYXAoKGl0ZW0pID0+IHtcbiAgICByZXR1cm4geyBwcm9kdWN0X2lkOiBpdGVtLmlkLCBxdHk6IGl0ZW0ucXR5IH07XG4gIH0pO1xuXG4gIHRyeSB7XG4gICAgY29uc3Qgb3JkZXIgPSBhd2FpdCBwcmlzbWEub3JkZXJzLmNyZWF0ZSh7XG4gICAgICBkYXRhOiB7XG4gICAgICAgIHBheW1lbnRfdHlwZTogYm9keS50eXBlLFxuICAgICAgICBwYXltZW50X3R5cGU6IGJvZHkudHlwZSxcbiAgICAgICAgaXRlbV90b3RhbDogYm9keS5yZWNlaXB0LnN1YlRvdGFsLFxuICAgICAgICBvcmRlcl90b3RhbDogYm9keS5yZWNlaXB0LnN1YlRvdGFsLFxuICAgICAgICBvcmRlcl90YXg6IGJvZHkucmVjZWlwdC50YXgsXG4gICAgICAgIG9yZGVyX3Byb2R1Y3RzOiB7XG4gICAgICAgICAgY3JlYXRlTWFueToge1xuICAgICAgICAgICAgZGF0YTogcHJvZHVjdEFycmF5LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKG9yZGVyKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBcIk9yZGVyIGNvdWxkIG5vdCBiZSBpbnNlcnRlZFwiIH0pO1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcbiJdLCJuYW1lcyI6WyJQcmlzbWEiLCJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY3JlYXRlT3JkZXIiLCJib2R5IiwicHJvZHVjdEFycmF5IiwicmVjZWlwdCIsInJlY2VpcHRJdGVtcyIsIm1hcCIsIml0ZW0iLCJwcm9kdWN0X2lkIiwiaWQiLCJxdHkiLCJvcmRlciIsIm9yZGVycyIsImNyZWF0ZSIsImRhdGEiLCJwYXltZW50X3R5cGUiLCJ0eXBlIiwiaXRlbV90b3RhbCIsInN1YlRvdGFsIiwib3JkZXJfdG90YWwiLCJvcmRlcl90YXgiLCJ0YXgiLCJvcmRlcl9wcm9kdWN0cyIsImNyZWF0ZU1hbnkiLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/orders/index.js\n");

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