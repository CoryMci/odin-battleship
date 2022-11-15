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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'roboto';\n    font-style: normal;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\nbody{\n    font-family: roboto, sans-serif;\n    background-color: white;\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.title{\n    align-self: center;\n    justify-self: center;\n    font-size: 2em;\n    font-weight: 500;\n\n}\n\n.players{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n}\n\n.player,\n.computer {\n    width: 500px;\n    height: 500px;\n    background-color: grey;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.bar{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n.box {\n    background-color: rgb(200, 200, 200);\n    border: 1px solid black;\n    cursor:crosshair;\n}\n\n.hit{\n    background-color: red;\n    transition: color, 1s;\n    cursor: default;\n}\n\n.miss{\n    background-color: rgb(100, 100, 100);\n    transition: color, 1s;\n    cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,+DAAyC;AAC7C;;AAEA;IACI,+BAA+B;IAC/B,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,gBAAgB;;AAEpB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,SAAS;;AAEb;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,oCAAoC;IACpC,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,qBAAqB;IACrB,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'roboto';\n    font-style: normal;\n    src: url(./roboto.ttf) format('truetype');\n}\n\nbody{\n    font-family: roboto, sans-serif;\n    background-color: white;\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.title{\n    align-self: center;\n    justify-self: center;\n    font-size: 2em;\n    font-weight: 500;\n\n}\n\n.players{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n}\n\n.player,\n.computer {\n    width: 500px;\n    height: 500px;\n    background-color: grey;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.bar{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n.box {\n    background-color: rgb(200, 200, 200);\n    border: 1px solid black;\n    cursor:crosshair;\n}\n\n.hit{\n    background-color: red;\n    transition: color, 1s;\n    cursor: default;\n}\n\n.miss{\n    background-color: rgb(100, 100, 100);\n    transition: color, 1s;\n    cursor: default;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7e234daf6e7d6819bd54")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYjFlYzFhZjVmOGQwYzgwNjYyNjMuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUdBQStCO0FBQzNFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCw0QkFBNEIseUJBQXlCLDhFQUE4RSxHQUFHLFNBQVMsc0NBQXNDLDhCQUE4QixvQkFBb0IsbUJBQW1CLG9CQUFvQixrQ0FBa0MsOEJBQThCLEdBQUcsV0FBVyx5QkFBeUIsMkJBQTJCLHFCQUFxQix1QkFBdUIsS0FBSyxhQUFhLGtCQUFrQixtQkFBbUIsb0JBQW9CLHFDQUFxQyxnQkFBZ0IsS0FBSyx5QkFBeUIsbUJBQW1CLG9CQUFvQiw2QkFBNkIsb0JBQW9CLDRDQUE0QyxTQUFTLG9CQUFvQiw2Q0FBNkMsR0FBRyxRQUFRLDJDQUEyQyw4QkFBOEIsdUJBQXVCLEdBQUcsU0FBUyw0QkFBNEIsNEJBQTRCLHNCQUFzQixHQUFHLFVBQVUsMkNBQTJDLDRCQUE0QixzQkFBc0IsR0FBRyxPQUFPLGdGQUFnRixZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxzQ0FBc0MsNEJBQTRCLHlCQUF5QixnREFBZ0QsR0FBRyxTQUFTLHNDQUFzQyw4QkFBOEIsb0JBQW9CLG1CQUFtQixvQkFBb0Isa0NBQWtDLDhCQUE4QixHQUFHLFdBQVcseUJBQXlCLDJCQUEyQixxQkFBcUIsdUJBQXVCLEtBQUssYUFBYSxrQkFBa0IsbUJBQW1CLG9CQUFvQixxQ0FBcUMsZ0JBQWdCLEtBQUsseUJBQXlCLG1CQUFtQixvQkFBb0IsNkJBQTZCLG9CQUFvQiw0Q0FBNEMsU0FBUyxvQkFBb0IsNkNBQTZDLEdBQUcsUUFBUSwyQ0FBMkMsOEJBQThCLHVCQUF1QixHQUFHLFNBQVMsNEJBQTRCLDRCQUE0QixzQkFBc0IsR0FBRyxVQUFVLDJDQUEyQyw0QkFBNEIsc0JBQXNCLEdBQUcsbUJBQW1CO0FBQzUwRjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUNWdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLWJvaWxlcnBsYXRlL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9yb2JvdG8udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcblxcbn1cXG5cXG4ucGxheWVyc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wbGF5ZXIsXFxuLmNvbXB1dGVyIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKVxcbn1cXG5cXG4uYmFye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjpjcm9zc2hhaXI7XFxufVxcblxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIDFzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5taXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yLCAxcztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQiwrREFBeUM7QUFDN0M7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLFNBQVM7O0FBRWI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0FBQzFDO0FBQ0E7SUFDSSxvQ0FBb0M7SUFDcEMsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIHNyYzogdXJsKC4vcm9ib3RvLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbn1cXG5cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvLCBzYW5zLXNlcmlmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udGl0bGV7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcblxcbn1cXG5cXG4ucGxheWVyc3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxufVxcblxcbi5wbGF5ZXIsXFxuLmNvbXB1dGVyIHtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKVxcbn1cXG5cXG4uYmFye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG59XFxuLmJveCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDAsIDIwMCwgMjAwKTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgIGN1cnNvcjpjcm9zc2hhaXI7XFxufVxcblxcbi5oaXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIDFzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5taXNze1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTAwLCAxMDAsIDEwMCk7XFxuICAgIHRyYW5zaXRpb246IGNvbG9yLCAxcztcXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiN2UyMzRkYWY2ZTdkNjgxOWJkNTRcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=