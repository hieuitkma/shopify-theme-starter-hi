/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_sliders_sliders_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/sliders/sliders-01 */ \"./src/scripts/sections/sliders/sliders-01.js\");\n/* harmony import */ var _sections_sliders_slideHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/sliders/slideHeader */ \"./src/scripts/sections/sliders/slideHeader.js\");\n/* harmony import */ var _sections_content_product_sellers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/content/product-sellers */ \"./src/scripts/sections/content/product-sellers.js\");\n/* harmony import */ var _sections_menu_header_icon_left__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/menu/header-icon-left */ \"./src/scripts/sections/menu/header-icon-left.js\");\n/**\r\n * Import sections bên dưới\r\n */\n\n\n\n\n // From ./sections/slides/sliders-01\n\n(0,_sections_sliders_sliders_01__WEBPACK_IMPORTED_MODULE_0__.doSomething)();\nconsole.log('kmacoders developing...'); // slide header \n\nvar slideHead = new _sections_sliders_slideHeader__WEBPACK_IMPORTED_MODULE_1__.default(); // slide product sellers\n\nvar slidePrSeller = new _sections_content_product_sellers__WEBPACK_IMPORTED_MODULE_2__.default(); // icon tablet \n\nvar showIconTabletLeft = new _sections_menu_header_icon_left__WEBPACK_IMPORTED_MODULE_3__.default();\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/sections/content/product-sellers.js":
/*!*********************************************************!*\
  !*** ./src/scripts/sections/content/product-sellers.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// let slidePerView = document.querySelectorAll('.slide-per-view')[0].outerText;\n// console.log(slidePerView);\nvar container = document.querySelectorAll('.slide-content .swiper-container');\nconsole.log(container);\nvar slidePerView = container.dataset.slidePerView;\nconsole.log(slidePerView);\n\nvar SlidePrSellers = /*#__PURE__*/function () {\n  function SlidePrSellers() {\n    _classCallCheck(this, SlidePrSellers);\n\n    this.init();\n  }\n\n  _createClass(SlidePrSellers, [{\n    key: \"init\",\n    value: function init() {\n      this.slider();\n    }\n  }, {\n    key: \"slider\",\n    value: function slider() {\n      var slideFeatureCollection = new Swiper('.section-feature-collection .slide-content .swiper-container', {\n        navigation: {\n          nextEl: '.section-feature-collection .slide-content .swiper-button-next',\n          prevEl: '.section-feature-collection .slide-content .swiper-button-prev' // disabledClass: 'my-button-disabled',\n\n        },\n        breakpoints: {\n          480: {\n            slidesPerView: 1,\n            spaceBetween: 20\n          },\n          800: {\n            slidesPerView: 2,\n            spaceBetween: 20\n          },\n          1024: {\n            slidesPerView: slidePerView,\n            spaceBetween: 15\n          },\n          1200: {\n            slidesPerView: slidePerView,\n            spaceBetween: 30\n          }\n        }\n      });\n    }\n  }]);\n\n  return SlidePrSellers;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SlidePrSellers);\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/sections/content/product-sellers.js?");

/***/ }),

/***/ "./src/scripts/sections/menu/header-icon-left.js":
/*!*******************************************************!*\
  !*** ./src/scripts/sections/menu/header-icon-left.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar plus = document.querySelector('.nav__tablet--item__icon i');\nvar minus = document.querySelectorAll('.nav__tablet--item__icon i');\n\nvar iconHeaderTabletLeft = /*#__PURE__*/function () {\n  function iconHeaderTabletLeft() {\n    _classCallCheck(this, iconHeaderTabletLeft);\n\n    this.init();\n  }\n\n  _createClass(iconHeaderTabletLeft, [{\n    key: \"init\",\n    value: function init() {\n      this.showIcon();\n    }\n  }, {\n    key: \"showIcon\",\n    value: function showIcon() {\n      var liTag = document.querySelectorAll('.nav__tablet--item');\n      liTag[0].addEventListener('click', function () {\n        liTag[0].classList.toggle(\"nav__tablet--item-click\");\n        plus.classList.toggle('rotatePlus');\n        minus[1].classList.toggle('rotateMinus');\n      });\n    }\n  }]);\n\n  return iconHeaderTabletLeft;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconHeaderTabletLeft);\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/sections/menu/header-icon-left.js?");

/***/ }),

/***/ "./src/scripts/sections/sliders/slideHeader.js":
/*!*****************************************************!*\
  !*** ./src/scripts/sections/sliders/slideHeader.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n//slide header\nvar delaySlide = document.querySelectorAll('.slide-delay')[0].outerText;\nconsole.log(delaySlide);\n\nvar slideHeader = /*#__PURE__*/function () {\n  function slideHeader() {\n    _classCallCheck(this, slideHeader);\n\n    this.init();\n  }\n\n  _createClass(slideHeader, [{\n    key: \"init\",\n    value: function init() {\n      this.showSlide();\n    }\n  }, {\n    key: \"showSlide\",\n    value: function showSlide() {\n      var slide = new Swiper('.slide-header .swiper-container', {\n        spaceBetween: 30,\n        centeredSlides: true,\n        loop: true,\n        speed: 300,\n        autoplay: {\n          delay: delaySlide,\n          disableOnInteraction: false\n        },\n        pagination: {\n          el: '.slide-header .swiper-pagination',\n          clickable: true\n        },\n        navigation: {\n          nextEl: '.slide-header .swiper-button-next',\n          prevEl: '.slide-header .swiper-button-prev'\n        },\n        on: {\n          slideChange: function slideChange() {\n            anime({\n              targets: '.swiper-slide .slide--box',\n              easing: 'easeInOutQuad',\n              translateY: ['0%', '-70%'],\n              opacity: ['0', '1'],\n              duration: 1000,\n              delay: 1500\n            }), anime({\n              targets: '.swiper-slide .slide__img',\n              scale: ['1.5', '1.2'],\n              duration: 2000,\n              easing: 'easeInOutQuad'\n            });\n          }\n        }\n      });\n    }\n  }]);\n\n  return slideHeader;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slideHeader);\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/sections/sliders/slideHeader.js?");

/***/ }),

/***/ "./src/scripts/sections/sliders/sliders-01.js":
/*!****************************************************!*\
  !*** ./src/scripts/sections/sliders/sliders-01.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doSomething\": () => /* binding */ doSomething\n/* harmony export */ });\nvar doSomething = function doSomething() {\n  console.log(\"Do something with slider ... \");\n};\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/sections/sliders/sliders-01.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"kmacoders-style.css\");\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/styles/main.scss");
/******/ })()
;