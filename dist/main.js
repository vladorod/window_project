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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// require('babel-polyfill');\n// require('formdata-polyfill');\nwindow.addEventListener('DOMContentLoaded', function () {\n  \"use scrict\";\n\n  var modal = __webpack_require__(/*! ./modules/modal.js */ \"./src/modules/modal.js\");\n\n  modal();\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function modal() {\n  var popupEngineer = document.querySelector('.popup_engineer'),\n      popupEngineerBtn = document.querySelector('.popup_engineer_btn'),\n      popupClose = document.querySelectorAll('.popup_close')[1],\n      glazinGpriceBtn = document.querySelectorAll('.glazing_price_btn'),\n      popupCalc = document.querySelector('.popup_calc'),\n      popupCalcClose = document.querySelector('.popup_calc_close'),\n      balconIcons = document.querySelector('.balcon_icons'),\n      bigIMG = document.querySelectorAll('.big_img img');\n  this.modalOpen = false;\n\n  function showModal(btn, modal) {\n    btn.addEventListener('click', function () {\n      if (modalOpen != true) {\n        modal.style.display = \"block\";\n        modalOpen = true;\n      } else {\n        modal.style.display = \"none\";\n        modalOpen = false;\n      }\n    });\n  }\n\n  function showIMG(img) {\n    for (var i = 0; i < bigIMG.length; i++) {\n      if (bigIMG[i].id == img) {\n        bigIMG[i].style.display = 'inline-block';\n      } else {\n        bigIMG[i].style.display = 'none';\n      }\n    }\n  } // first modal \n\n\n  showModal(popupEngineerBtn, popupEngineer);\n  showModal(popupClose, popupEngineer); // calc \n\n  for (var i = 0; i < 2; i++) {\n    showModal(glazinGpriceBtn[i], popupCalc);\n  }\n\n  showModal(popupCalcClose, popupCalc);\n  balconIcons.addEventListener('click', function (e) {\n    if (e.target.tagName == \"IMG\") {\n      showIMG(e.target.parentNode.className);\n    }\n  });\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/modules/modal.js?");

/***/ })

/******/ });