/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/javascript-obfuscator/dist/index.browser.js":
/*!******************************************************************!*\
  !*** ./node_modules/javascript-obfuscator/dist/index.browser.js ***!
  \******************************************************************/
/***/ ((module) => {


/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://dashboard/./src/scss/style.scss?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ \"./src/scss/style.scss\");\n/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/main */ \"./src/modules/main.js\");\n/* harmony import */ var _modules_main__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_main__WEBPACK_IMPORTED_MODULE_1__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://dashboard/./src/app.js?");

/***/ }),

/***/ "./src/modules/main.js":
/*!*****************************!*\
  !*** ./src/modules/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const JavaScriptObfuscator = __webpack_require__(/*! javascript-obfuscator */ \"./node_modules/javascript-obfuscator/dist/index.browser.js\");\r\n\r\nconst startButton = document.querySelector(\"[start]\");\r\nconst clearButton = document.querySelector(\"[clear]\");\r\nconst copyButton = document.querySelector(\"[copy]\");\r\nconst inputArea = document.querySelector(\"#input-area\");\r\nconst modalArea = document.querySelector(\"[modal-area]\");\r\n\r\nconst validateModalContent = {\r\n  successCopy: {\r\n    icon: \"../../src/images/icons/check.svg\",\r\n    title: \"Your code has been copied\",\r\n  },\r\n  error: {\r\n    icon: \"../src/images/icons/error.svg\",\r\n    title: \"Paste the code into the input field!\",\r\n  },\r\n};\r\n\r\nconst blockManipulationUser = `\r\nfunction _0x1b5c(_0x2dca67, _0x39a686) {\r\n  var _0x37ac07 = _0x37ac();\r\n  return (\r\n    (_0x1b5c = function (_0x1b5cfe, _0x28f23e) {\r\n      _0x1b5cfe = _0x1b5cfe - 0x6a;\r\n      var _0x5ac1f2 = _0x37ac07[_0x1b5cfe];\r\n      return _0x5ac1f2;\r\n    }),\r\n    _0x1b5c(_0x2dca67, _0x39a686)\r\n  );\r\n}\r\n(function (_0xc7028a, _0x545fbf) {\r\n  var _0x4a401f = _0x1b5c,\r\n    _0x29e1dc = _0xc7028a();\r\n  while (!![]) {\r\n    try {\r\n      var _0x280103 =\r\n        parseInt(_0x4a401f(0x7b)) / 0x1 +\r\n        -parseInt(_0x4a401f(0x7c)) / 0x2 +\r\n        (parseInt(_0x4a401f(0x6d)) / 0x3) * (parseInt(_0x4a401f(0x77)) / 0x4) +\r\n        (parseInt(_0x4a401f(0x7a)) / 0x5) * (parseInt(_0x4a401f(0x76)) / 0x6) +\r\n        (-parseInt(_0x4a401f(0x6e)) / 0x7) * (-parseInt(_0x4a401f(0x6a)) / 0x8) +\r\n        parseInt(_0x4a401f(0x71)) / 0x9 +\r\n        -parseInt(_0x4a401f(0x73)) / 0xa;\r\n      if (_0x280103 === _0x545fbf) break;\r\n      else _0x29e1dc[\"push\"](_0x29e1dc[\"shift\"]());\r\n    } catch (_0xab9d1f) {\r\n      _0x29e1dc[\"push\"](_0x29e1dc[\"shift\"]());\r\n    }\r\n  }\r\n})(_0x37ac, 0x814ed);\r\nfunction _0x37ac() {\r\n  var _0x5d8085 = [\r\n    \"addEventListener\",\r\n    \"1335zQETNI\",\r\n    \"450850uoaWvy\",\r\n    \"372150KuMURl\",\r\n    \"8haNDvd\",\r\n    \"stopPropagation\",\r\n    \"oncontextmenu\",\r\n    \"9IpTsYt\",\r\n    \"2304519SPeSIz\",\r\n    \"platform\",\r\n    \"keyCode\",\r\n    \"1585377sbcTER\",\r\n    \"ctrlKey\",\r\n    \"7528610HBMDNE\",\r\n    \"preventDefault\",\r\n    \"metaKey\",\r\n    \"7260QLTKIQ\",\r\n    \"252388twwScw\",\r\n    \"body\",\r\n  ];\r\n  _0x37ac = function () {\r\n    return _0x5d8085;\r\n  };\r\n  return _0x37ac();\r\n}\r\n`;\r\n\r\nfunction obfuscatorCode() {\r\n  const inputValue = inputArea.value;\r\n\r\n  if (inputValue === \"\") {\r\n    checkValueArea();\r\n    return;\r\n  } else {\r\n    buttonDisabled(startButton);\r\n    buttonRemoveDisabled(clearButton);\r\n  }\r\n\r\n  const combinedCode = inputValue + blockManipulationUser;\r\n  const obfuscatedCode = JavaScriptObfuscator.obfuscate(combinedCode, {\r\n    compact: true,\r\n    controlFlowFlattening: true,\r\n  });\r\n\r\n  inputArea.value = obfuscatedCode.getObfuscatedCode();\r\n  buttonRemoveDisabled(copyButton);\r\n}\r\n\r\nfunction renderModalAreaContent({ icon, title }, className) {\r\n  modalArea.classList.add(className);\r\n  modalArea.insertAdjacentHTML(\r\n    \"afterbegin\",\r\n    `\r\n    <div class=\"textarea-content__input-modal__content\">\r\n        <img src=\"${icon}\" alt=\"icon\">\r\n        <span>${title}</span>\r\n    </div>\r\n    `\r\n  );\r\n}\r\n\r\nfunction buttonDisabled(element) {\r\n  element.disabled = true;\r\n}\r\n\r\nfunction buttonRemoveDisabled(element) {\r\n  element.disabled = false;\r\n}\r\n\r\nfunction removeModalArea(element, className) {\r\n  element.classList.add(\"fade-out\");\r\n\r\n  setTimeout(() => {\r\n    element.innerHTML = \"\";\r\n    element.classList.remove(\"fade-out\");\r\n    element.classList.remove(className);\r\n  }, 600);\r\n}\r\n\r\nfunction checkValueArea() {\r\n  const error = validateModalContent.error;\r\n  buttonDisabled(startButton);\r\n  renderModalAreaContent(error, \"error\");\r\n  setTimeout(() => {\r\n    removeModalArea(modalArea, \"error\");\r\n    buttonRemoveDisabled(startButton);\r\n  }, 1000);\r\n}\r\n\r\nfunction successCopyValue() {\r\n  const successCopy = validateModalContent.successCopy;\r\n  renderModalAreaContent(successCopy, \"copy\");\r\n  buttonDisabled(copyButton);\r\n  setTimeout(() => {\r\n    removeModalArea(modalArea, \"copy\");\r\n    buttonRemoveDisabled(copyButton);\r\n  }, 1000);\r\n}\r\n\r\nfunction clearArea() {\r\n  inputArea.value = \"\";\r\n  buttonRemoveDisabled(startButton);\r\n  buttonDisabled(clearButton);\r\n  buttonDisabled(copyButton);\r\n}\r\n\r\nfunction copyCode() {\r\n  inputArea.select();\r\n  document.execCommand(\"copy\");\r\n  successCopyValue();\r\n}\r\n\r\nstartButton.addEventListener(\"click\", () => obfuscatorCode());\r\n\r\nclearButton.addEventListener(\"click\", () => clearArea());\r\n\r\ncopyButton.addEventListener(\"click\", () => copyCode());\r\n\n\n//# sourceURL=webpack://dashboard/./src/modules/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;