/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__yuan_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fang_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__People_js__ = __webpack_require__(3);




console.log(__WEBPACK_IMPORTED_MODULE_0__yuan_js__["b" /* zhouchang */](10));
console.log(__WEBPACK_IMPORTED_MODULE_0__yuan_js__["a" /* mianji */](10));
console.log(__WEBPACK_IMPORTED_MODULE_1__fang_js__["b" /* zhouchang */](10,20));
console.log(__WEBPACK_IMPORTED_MODULE_1__fang_js__["a" /* mianji */](10,20));

var xiaoming = new __WEBPACK_IMPORTED_MODULE_2__People_js__["a" /* default */]("小明",12,"男");
xiaoming.haha();

Object(__WEBPACK_IMPORTED_MODULE_2__People_js__["b" /* lajihanshu */])();

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mianji = function(r){
	return 3.14 * r * r;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = mianji;


const zhouchang = function(r){
	return 6.28 * r;
}
/* harmony export (immutable) */ __webpack_exports__["b"] = zhouchang;




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const mianji = function(a,b){
	return a * b;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = mianji;


const zhouchang = function(a , b){
	return 2 * (a + b);
}
/* harmony export (immutable) */ __webpack_exports__["b"] = zhouchang;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class People{
	constructor(name,age,sex){
		this.name = name;
		this.age = age;
		this.sex = sex;
	}
	haha(){
		console.log(`我是${this.name}，哈哈`);
	}
}

//随便一个函数
const lajihanshu = function(){
	console.log("哈哈");
}
/* harmony export (immutable) */ __webpack_exports__["b"] = lajihanshu;


/* harmony default export */ __webpack_exports__["a"] = (People);

/***/ })
/******/ ]);