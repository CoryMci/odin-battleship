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
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n    font-family: 'roboto';\n    font-style: normal;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('truetype');\n}\n\nbody{\n    font-family: roboto, sans-serif;\n    background-color: white;\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.title{\n    display: grid;\n    grid-template-rows: 3em 2em;\n    gap: 50px;\n    align-self: center;\n    justify-self: center;\n    font-size: 2em;\n    font-weight: 500;\n}\n\n.alerts {\n    align-self: center;\n}\n\n.players{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n}\n\n.player,\n.computer {\n    width: 500px;\n    height: 500px;\n    background-color: grey;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.bar{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n.box {\n    background-color: rgb(200, 200, 200);\n    border: 1px solid black;\n    cursor:crosshair;\n}\n\n.hit{\n    background-color: red;\n    transition: color, 1s;\n    cursor: default;\n}\n\n.miss{\n    background-color: rgb(100, 100, 100);\n    transition: color, 1s;\n    cursor: default;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,kBAAkB;IAClB,+DAAyC;AAC7C;;AAEA;IACI,+BAA+B;IAC/B,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,SAAS;IACT,kBAAkB;IAClB,oBAAoB;IACpB,cAAc;IACd,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,8BAA8B;IAC9B,SAAS;;AAEb;;AAEA;;IAEI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb;AACJ;;AAEA;IACI,aAAa;IACb,sCAAsC;AAC1C;AACA;IACI,oCAAoC;IACpC,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,oCAAoC;IACpC,qBAAqB;IACrB,eAAe;AACnB","sourcesContent":["@font-face {\n    font-family: 'roboto';\n    font-style: normal;\n    src: url(./roboto.ttf) format('truetype');\n}\n\nbody{\n    font-family: roboto, sans-serif;\n    background-color: white;\n    height: 100vh;\n    width: 100vw;\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    justify-content: center;\n}\n\n.title{\n    display: grid;\n    grid-template-rows: 3em 2em;\n    gap: 50px;\n    align-self: center;\n    justify-self: center;\n    font-size: 2em;\n    font-weight: 500;\n}\n\n.alerts {\n    align-self: center;\n}\n\n.players{\n    width: 100%;\n    height: 100%;\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 20px;\n\n}\n\n.player,\n.computer {\n    width: 500px;\n    height: 500px;\n    background-color: grey;\n    display: grid;\n    grid-template-rows: repeat(10, 1fr)\n}\n\n.bar{\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n}\n.box {\n    background-color: rgb(200, 200, 200);\n    border: 1px solid black;\n    cursor:crosshair;\n}\n\n.hit{\n    background-color: red;\n    transition: color, 1s;\n    cursor: default;\n}\n\n.miss{\n    background-color: rgb(100, 100, 100);\n    transition: color, 1s;\n    cursor: default;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3df094664dd710198dac")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYTE5NTFjYmQyM2Y3YjQ3NjRiN2EuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDTztBQUNoRyw0Q0FBNEMscUdBQStCO0FBQzNFLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0YseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBLHNEQUFzRCw0QkFBNEIseUJBQXlCLDhFQUE4RSxHQUFHLFNBQVMsc0NBQXNDLDhCQUE4QixvQkFBb0IsbUJBQW1CLG9CQUFvQixrQ0FBa0MsOEJBQThCLEdBQUcsV0FBVyxvQkFBb0Isa0NBQWtDLGdCQUFnQix5QkFBeUIsMkJBQTJCLHFCQUFxQix1QkFBdUIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLGFBQWEsa0JBQWtCLG1CQUFtQixvQkFBb0IscUNBQXFDLGdCQUFnQixLQUFLLHlCQUF5QixtQkFBbUIsb0JBQW9CLDZCQUE2QixvQkFBb0IsNENBQTRDLFNBQVMsb0JBQW9CLDZDQUE2QyxHQUFHLFFBQVEsMkNBQTJDLDhCQUE4Qix1QkFBdUIsR0FBRyxTQUFTLDRCQUE0Qiw0QkFBNEIsc0JBQXNCLEdBQUcsVUFBVSwyQ0FBMkMsNEJBQTRCLHNCQUFzQixHQUFHLE9BQU8sZ0ZBQWdGLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLFdBQVcsS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLHNDQUFzQyw0QkFBNEIseUJBQXlCLGdEQUFnRCxHQUFHLFNBQVMsc0NBQXNDLDhCQUE4QixvQkFBb0IsbUJBQW1CLG9CQUFvQixrQ0FBa0MsOEJBQThCLEdBQUcsV0FBVyxvQkFBb0Isa0NBQWtDLGdCQUFnQix5QkFBeUIsMkJBQTJCLHFCQUFxQix1QkFBdUIsR0FBRyxhQUFhLHlCQUF5QixHQUFHLGFBQWEsa0JBQWtCLG1CQUFtQixvQkFBb0IscUNBQXFDLGdCQUFnQixLQUFLLHlCQUF5QixtQkFBbUIsb0JBQW9CLDZCQUE2QixvQkFBb0IsNENBQTRDLFNBQVMsb0JBQW9CLDZDQUE2QyxHQUFHLFFBQVEsMkNBQTJDLDhCQUE4Qix1QkFBdUIsR0FBRyxTQUFTLDRCQUE0Qiw0QkFBNEIsc0JBQXNCLEdBQUcsVUFBVSwyQ0FBMkMsNEJBQTRCLHNCQUFzQixHQUFHLG1CQUFtQjtBQUM5bEc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDVnZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1ib2lsZXJwbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vcm9ib3RvLnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XFxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gICAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNlbSAyZW07XFxuICAgIGdhcDogNTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5hbGVydHMge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpXFxufVxcblxcbi5iYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOmNyb3NzaGFpcjtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciwgMXM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLm1pc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIDFzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLCtEQUF5QztBQUM3Qzs7QUFFQTtJQUNJLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsU0FBUztJQUNULGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixTQUFTOztBQUViOztBQUVBOztJQUVJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYjtBQUNKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztBQUMxQztBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBzcmM6IHVybCguL3JvYm90by50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG59XFxuXFxuYm9keXtcXG4gICAgZm9udC1mYW1pbHk6IHJvYm90bywgc2Fucy1zZXJpZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRpdGxle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDNlbSAyZW07XFxuICAgIGdhcDogNTBweDtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5hbGVydHMge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5wbGF5ZXJze1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuLnBsYXllcixcXG4uY29tcHV0ZXIge1xcbiAgICB3aWR0aDogNTAwcHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpXFxufVxcblxcbi5iYXJ7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbn1cXG4uYm94IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMCwgMjAwLCAyMDApO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgY3Vyc29yOmNyb3NzaGFpcjtcXG59XFxuXFxuLmhpdHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciwgMXM7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLm1pc3N7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDAsIDEwMCwgMTAwKTtcXG4gICAgdHJhbnNpdGlvbjogY29sb3IsIDFzO1xcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzZGYwOTQ2NjRkZDcxMDE5OGRhY1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==