"use strict";
self["webpackHotUpdatewebpack_boilerplate"]("index",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./roboto.ttf */ "./src/roboto.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'roboto';\n    font-style: normal;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\nbody{\n    font-family: roboto, sans-serif;\n    background-color: white;\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.title{\n    align-self: center;\n    justify-self: center;\n    font-size: 2em;\n    font-weight: 500;\n\n}\n\n.players{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n}\n\n.player,\n.computer {\n    width: 500px;\n    height: 500px;\n    background-color: grey;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.bar{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n.box {\n    background-color: rgb(200, 200, 200);\n    border: 1px solid black;\n}\n\n.hit{\n    background-color: red;\n    transition: color, 1s;\n}\n\n.miss{\n    background-color: rgb(100, 100, 100);\n    transition: color, 1s;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,+DAAyC;AAC7C;;AAEA;IACI,+BAA+B;IAC/B,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,SAAS;;AAEb;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,oCAAoC;IACpC,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA;IACI,oCAAoC;IACpC,qBAAqB;AACzB","sourcesContent":["@font-face {\n    font-family: 'roboto';\n    font-style: normal;\n    src: url(./roboto.ttf) format('truetype');\n}\n\nbody{\n    font-family: roboto, sans-serif;\n    background-color: white;\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.title{\n    align-self: center;\n    justify-self: center;\n    font-size: 2em;\n    font-weight: 500;\n\n}\n\n.players{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n}\n\n.player,\n.computer {\n    width: 500px;\n    height: 500px;\n    background-color: grey;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.bar{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n.box {\n    background-color: rgb(200, 200, 200);\n    border: 1px solid black;\n}\n\n.hit{\n    background-color: red;\n    transition: color, 1s;\n}\n\n.miss{\n    background-color: rgb(100, 100, 100);\n    transition: color, 1s;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b1ec1af5f8d0c8066263")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguOTQ2OTcyN2EyNGJmYjBkYWYxYjcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUdBQStCO0FBQzNFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCw0QkFBNEIseUJBQXlCLDhFQUE4RSxHQUFHLFNBQVMsc0NBQXNDLDhCQUE4QixvQkFBb0IsbUJBQW1CLG9CQUFvQixrQ0FBa0MsOEJBQThCLEdBQUcsV0FBVyx5QkFBeUIsMkJBQTJCLHFCQUFxQix1QkFBdUIsS0FBSyxhQUFhLGtCQUFrQixtQkFBbUIsb0JBQW9CLHFDQUFxQyxnQkFBZ0IsS0FBSyx5QkFBeUIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsb0JBQW9CLDRDQUE0QyxTQUFTLG9CQUFvQiw2Q0FBNkMsR0FBRyxRQUFRLDJDQUEyQyw4QkFBOEIsR0FBRyxTQUFTLDRCQUE0Qiw0QkFBNEIsR0FBRyxVQUFVLDJDQUEyQyw0QkFBNEIsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxzQ0FBc0MsNEJBQTRCLHlCQUF5QixnREFBZ0QsR0FBRyxTQUFTLHNDQUFzQyw4QkFBOEIsb0JBQW9CLG1CQUFtQixvQkFBb0Isa0NBQWtDLDhCQUE4QixHQUFHLFdBQVcseUJBQXlCLDJCQUEyQixxQkFBcUIsdUJBQXVCLEtBQUssYUFBYSxrQkFBa0IsbUJBQW1CLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLEtBQUsseUJBQXlCLG1CQUFtQixvQkFBb0IsNkJBQTZCLG9CQUFvQiw0Q0FBNEMsU0FBUyxvQkFBb0IsNkNBQTZDLEdBQUcsUUFBUSwyQ0FBMkMsOEJBQThCLEdBQUcsU0FBUyw0QkFBNEIsNEJBQTRCLEdBQUcsVUFBVSwyQ0FBMkMsNEJBQTRCLEdBQUcsbUJBQW1CO0FBQ25xRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNWdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcblxcbn1cXG5cXG4ucGxheWVyc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wbGF5ZXIsXFxuLmNvbXB1dGVyIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKVxcbn1cXG5cXG4uYmFye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIDFzO1xcbn1cXG5cXG4ubWlzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciwgMXM7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLCtEQUF5QztBQUM3Qzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsU0FBUzs7QUFFYjs7QUFFQTs7SUFFSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2I7QUFDSjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7QUFDMUM7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyx1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLHFCQUFxQjtBQUN6QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHNyYzogdXJsKC4vcm9ib3RvLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcblxcbn1cXG5cXG4ucGxheWVyc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wbGF5ZXIsXFxuLmNvbXB1dGVyIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKVxcbn1cXG5cXG4uYmFye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIDFzO1xcbn1cXG5cXG4ubWlzc3tcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwMCwgMTAwLCAxMDApO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciwgMXM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJiMWVjMWFmNWY4ZDBjODA2NjI2M1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==