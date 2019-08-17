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

eval("function modal() {\n  var popupEngineer = document.querySelector('.popup_engineer'),\n      popupEngineerBtn = document.querySelector('.popup_engineer_btn'),\n      popupClose = document.querySelectorAll('.popup_close')[1],\n      glazinGpriceBtn = document.querySelectorAll('.glazing_price_btn'),\n      popupCalc = document.querySelector('.popup_calc'),\n      popupCalcClose = document.querySelector('.popup_calc_close'),\n      balconIcons = document.querySelector('.balcon_icons'),\n      bigIMG = document.querySelectorAll('.big_img img');\n  this.modalOpen = false;\n  this.scrollisFreezed = false;\n  this.whoModalIsOpen = \"\";\n  this.order = {\n    material: \"\",\n    type: \"\",\n    size: {\n      width: \"\",\n      height: \"\",\n      window: \"\"\n    },\n    name: \"\",\n    phone: \"\"\n  };\n\n  function showModal() {\n    var modal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : whoModalIsOpen;\n    freezeScreen();\n\n    if (modalOpen != true) {\n      modal.style.display = \"block\";\n      modalOpen = true;\n      whoModalIsOpen = modal;\n    } else {\n      modal.style.display = \"none\";\n      modalOpen = false;\n    }\n  }\n\n  ;\n\n  function showIMG(img) {\n    for (var i = 0; i < bigIMG.length; i++) {\n      if (bigIMG[i].id == img) {\n        bigIMG[i].style.display = 'inline-block';\n      } else {\n        bigIMG[i].style.display = 'none';\n      }\n    }\n  } // first modal \n\n\n  popupEngineerBtn.addEventListener('click', function (e) {\n    showModal(popupEngineer);\n  });\n  popupClose.addEventListener('click', function (e) {\n    showModal(popupEngineer);\n  }); // digitСheck in modal\n\n  var widthModal = document.querySelector(\".form-control[placeholder='Ширина']\"),\n      heightModal = document.querySelector(\".form-control[placeholder='Высота']\");\n  widthModal.addEventListener('input', function (e) {\n    digitСheck(widthModal);\n    order.size.width = e.target.value;\n  });\n  heightModal.addEventListener('input', function (e) {\n    digitСheck(heightModal);\n    order.size.height = e.target.value;\n  }); // button next \n\n  var buttonNext = document.querySelector('.popup_calc_button'),\n      lastmodal = document.querySelector('.popup_calc_end'),\n      buttonNextClose = document.querySelector('.popup_calc_end_close'),\n      inputUserName = document.querySelectorAll('input[name=\"user_name\"]'),\n      inputUserPhone = document.querySelectorAll('input[name=\"user_phone\"]'); // added all input name and phone value listner \n\n  for (var i = 0; i < inputUserName.length; i++) {\n    inputUserName[i].addEventListener('input', function (e) {\n      order.name = e.target.value;\n    });\n  }\n\n  for (var _i = 0; _i < inputUserPhone.length; _i++) {\n    inputUserPhone[_i].addEventListener('input', function (e) {\n      order.phone = e.target.value;\n    });\n  }\n\n  buttonNext.addEventListener('click', function () {\n    showModal();\n    showModal(lastmodal);\n    clearAllInput();\n  });\n  buttonNextClose.addEventListener('click', function (e) {\n    return showModal();\n  }); // calc \n\n  for (var _i2 = 0; _i2 < glazinGpriceBtn.length; _i2++) {\n    glazinGpriceBtn[_i2].addEventListener('click', function (e) {\n      var type = e.target.parentNode.parentNode.childNodes[1].classList[0].replace(/glazing_/ig, \"\");\n      showModal(popupCalc);\n      order.type = type;\n    });\n  }\n\n  popupCalcClose.addEventListener('click', function (e) {\n    showModal();\n  });\n  balconIcons.addEventListener('click', function (e) {\n    e.preventDefault();\n\n    if (e.target.tagName == \"IMG\") {\n      showIMG(e.target.parentNode.className);\n      order.size.window = e.target.parentNode.className;\n    }\n  }); // tab \n\n  var tabContent = document.querySelectorAll('.container')[2].querySelectorAll('.row'),\n      tabBtn = document.querySelector('.slick-track');\n\n  function showTAB(tab) {\n    for (var _i3 = 0; _i3 < tabContent.length; _i3++) {\n      var val = tabContent[_i3].className.replace(/row\\ /, \"\");\n\n      if (val == tab) {\n        tabContent[_i3].style.display = \"block\";\n      } else {\n        tabContent[_i3].style.display = \"none\";\n      }\n    }\n  }\n\n  tabBtn.addEventListener('click', function (e) {\n    var links = document.querySelector('.slick-track').querySelectorAll('a'),\n        material = e.target.className.replace(/_link/ig, \"\").replace(/ /, \"\").replace(/active/, \"\");\n\n    if (e.target.tagName == \"A\") {\n      showTAB(material);\n\n      for (var _i4 = 0; _i4 < links.length; _i4++) {\n        links[_i4].classList.remove(\"active\");\n      }\n\n      e.target.classList.add(\"active\");\n      order.material = material;\n    }\n  }); // addEventListener(\"click\", (e) => {\n  //     if (e.target.classList == \"popup_engineer\") \n  // });\n  // freeze Scrool body\n\n  function freezeScreen() {\n    if (!scrollisFreezed) {\n      document.body.classList.add(\"freezeScroll\");\n      scrollisFreezed = true;\n    } else {\n      scrollisFreezed = false;\n      document.body.classList.remove(\"freezeScroll\");\n    }\n  } // digit Check\n\n\n  function digitСheck(input) {\n    input.value = input.value.replace(/[^\\d,]/g, '');\n  }\n\n  ;\n\n  function clearAllInput() {\n    var allInput = document.querySelectorAll('input');\n\n    for (var _i5 in allInput) {\n      allInput[_i5].value = \"\";\n    }\n  }\n}\n\nmodule.exports = modal;\n\n//# sourceURL=webpack:///./src/modules/modal.js?");

/***/ })

/******/ });