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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ \"next-auth/providers\");\n/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_2__.PrismaClient(); // const prisma = new PrismaClient();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()({\n  // Configure one or more authentication providers\n  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default().Credentials({\n    name: \"Credentials\",\n\n    async authorize(credentials, req) {\n      const user = await prisma.users.findFirst({\n        where: {\n          username: credentials.username,\n          password: credentials.password\n        }\n      });\n\n      if (user) {\n        // Any object returned will be saved in `user` property of the JWT\n        return user;\n      } else {\n        return null; // You can also Reject this callback with an Error or with a URL:\n        // throw new Error('error message') // Redirect to error page\n        // throw '/path/to/redirect'        // Redirect to a URL\n      }\n    }\n\n  })],\n  callbacks: {\n    async jwt(token, user, account, profile, isNewUser) {\n      // Add access_token to the token right after signin\n      if (account !== null && account !== void 0 && account.accessToken) {\n        token.accessToken = account.accessToken;\n      }\n\n      return token;\n    }\n\n  },\n  pages: {\n    signIn: \"/login\",\n    error: \"/login\"\n  }\n}));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQSxNQUFNRyxNQUFNLEdBQUcsSUFBSUQsd0RBQUosRUFBZixFQUVBOztBQUNBLGlFQUFlRixnREFBUSxDQUFDO0FBQ3RCO0FBQ0FJLEVBQUFBLFNBQVMsRUFBRSxDQUNUSCxzRUFBQSxDQUFzQjtBQUNwQkssSUFBQUEsSUFBSSxFQUFFLGFBRGM7O0FBRXBCLFVBQU1DLFNBQU4sQ0FBZ0JDLFdBQWhCLEVBQTZCQyxHQUE3QixFQUFrQztBQUNoQyxZQUFNQyxJQUFJLEdBQUcsTUFBTVAsTUFBTSxDQUFDUSxLQUFQLENBQWFDLFNBQWIsQ0FBdUI7QUFDeENDLFFBQUFBLEtBQUssRUFBRTtBQUNMQyxVQUFBQSxRQUFRLEVBQUVOLFdBQVcsQ0FBQ00sUUFEakI7QUFFTEMsVUFBQUEsUUFBUSxFQUFFUCxXQUFXLENBQUNPO0FBRmpCO0FBRGlDLE9BQXZCLENBQW5COztBQU1BLFVBQUlMLElBQUosRUFBVTtBQUNSO0FBQ0EsZUFBT0EsSUFBUDtBQUNELE9BSEQsTUFHTztBQUNMLGVBQU8sSUFBUCxDQURLLENBRUw7QUFDQTtBQUNBO0FBQ0Q7QUFDRjs7QUFsQm1CLEdBQXRCLENBRFMsQ0FGVztBQXlCdEJNLEVBQUFBLFNBQVMsRUFBRTtBQUNULFVBQU1DLEdBQU4sQ0FBVUMsS0FBVixFQUFpQlIsSUFBakIsRUFBdUJTLE9BQXZCLEVBQWdDQyxPQUFoQyxFQUF5Q0MsU0FBekMsRUFBb0Q7QUFDbEQ7QUFDQSxVQUFJRixPQUFKLGFBQUlBLE9BQUosZUFBSUEsT0FBTyxDQUFFRyxXQUFiLEVBQTBCO0FBQ3hCSixRQUFBQSxLQUFLLENBQUNJLFdBQU4sR0FBb0JILE9BQU8sQ0FBQ0csV0FBNUI7QUFDRDs7QUFDRCxhQUFPSixLQUFQO0FBQ0Q7O0FBUFEsR0F6Qlc7QUFrQ3RCSyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsTUFBTSxFQUFFLFFBREg7QUFFTEMsSUFBQUEsS0FBSyxFQUFFO0FBRkY7QUFsQ2UsQ0FBRCxDQUF2QiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/OTkwOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IFByb3ZpZGVycyBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVyc1wiO1xuXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuLy8gY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoe1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIFByb3ZpZGVycy5DcmVkZW50aWFscyh7XG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMsIHJlcSkge1xuICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgcHJpc21hLnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIHVzZXJuYW1lOiBjcmVkZW50aWFscy51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBjcmVkZW50aWFscy5wYXNzd29yZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgICAvLyBBbnkgb2JqZWN0IHJldHVybmVkIHdpbGwgYmUgc2F2ZWQgaW4gYHVzZXJgIHByb3BlcnR5IG9mIHRoZSBKV1RcbiAgICAgICAgICByZXR1cm4gdXNlcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAvLyBZb3UgY2FuIGFsc28gUmVqZWN0IHRoaXMgY2FsbGJhY2sgd2l0aCBhbiBFcnJvciBvciB3aXRoIGEgVVJMOlxuICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignZXJyb3IgbWVzc2FnZScpIC8vIFJlZGlyZWN0IHRvIGVycm9yIHBhZ2VcbiAgICAgICAgICAvLyB0aHJvdyAnL3BhdGgvdG8vcmVkaXJlY3QnICAgICAgICAvLyBSZWRpcmVjdCB0byBhIFVSTFxuICAgICAgICB9XG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKSB7XG4gICAgICAvLyBBZGQgYWNjZXNzX3Rva2VuIHRvIHRoZSB0b2tlbiByaWdodCBhZnRlciBzaWduaW5cbiAgICAgIGlmIChhY2NvdW50Py5hY2Nlc3NUb2tlbikge1xuICAgICAgICB0b2tlbi5hY2Nlc3NUb2tlbiA9IGFjY291bnQuYWNjZXNzVG9rZW47XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfSxcbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXG4gIH0sXG59KTtcbiJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIlByb3ZpZGVycyIsIlByaXNtYUNsaWVudCIsInByaXNtYSIsInByb3ZpZGVycyIsIkNyZWRlbnRpYWxzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwicmVxIiwidXNlciIsInVzZXJzIiwiZmluZEZpcnN0Iiwid2hlcmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY2FsbGJhY2tzIiwiand0IiwidG9rZW4iLCJhY2NvdW50IiwicHJvZmlsZSIsImlzTmV3VXNlciIsImFjY2Vzc1Rva2VuIiwicGFnZXMiLCJzaWduSW4iLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();