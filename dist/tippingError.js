/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/fast-creator/dist/entry.js":
/*!*************************************************!*\
  !*** ./node_modules/fast-creator/dist/entry.js ***!
  \*************************************************/
/***/ ((module) => {



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 *
 * @param attributes
 * @param documentObject
 * @returns {HTMLElement}
 */
function createFromDefinition() {
  var attributes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var documentObject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!documentObject) documentObject = document;
  var element = documentObject.createElement(attributes.tagName || 'div');
  repairClasses(attributes);

  for (var attrName in attributes) {
    if (attrName === 'className') {
      element.className = attributes[attrName];
    } else if (attrName === 'classList') {
      var _iterator = _createForOfIteratorHelper(attributes.classList),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var x = _step.value;
          element.classList.add(x);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    } else if (attrName === 'text') {
      element.textContent = attributes.text;
    } else if (attrName === 'html') {
      element.innerHTML = attributes.html;
    } else if (attrName === 'data') {
      Object.assign(element.dataset, attributes.data);
    } else if (attrName === 'children') {
      attributes.children.forEach(function (x) {
        return element.appendChild(x instanceof Node ? x : create(x, {}, documentObject));
      });
    } else if (attrName.startsWith('on')) {
      element[attrName] = attributes[attrName];
    } else if (attrName.startsWith('style')) {
      if (_typeof(attributes[attrName]) == "object") {
        for (var styleName in attributes[attrName]) {
          element.style.setProperty(styleName, attributes[attrName][styleName]);
        }
      } else if (attributes[attrName] !== false) {
        element.setAttribute(attrName, attributes[attrName]);
      }
    } else if (attrName === 'tagName') {//nothing
    } else {
      if (attributes[attrName] === true) element.setAttribute(attrName, attrName);else if (attributes[attrName] !== false) element.setAttribute(attrName, attributes[attrName]);
    }
  }

  return element;
}

function repairClasses(obj) {
  if (obj.className) {
    if (!obj.classList) obj.classList = [];
    obj.classList = [].concat(_toConsumableArray(obj.classList), _toConsumableArray(obj.className.split(' ')));
    delete obj.className;
  }
}
/**
 *
 * @param {string} selector
 * $returns {object}
 */


function parseSelector(selector) {
  selector = (selector + "").trim();
  var position = 0;

  function parseElement() {
    var ret = {};
    var canBeTagname = true;

    while (position < selector.length) {
      var _char = selector[position];
      position++;

      if (_char === '#') {
        ret.id = parseText();
      } else if (_char === '.') {
        if (!ret.classList) ret.classList = [];
        ret.classList.push(parseText());
      } else if (_char === '[') {
        var attrName = parseText(['=', ']']);
        skipWhitespace();

        if (selector[position] == '=') {
          position++;
          skipWhitespace();
          if (selector[position] != '"') throw new Error("Syntax error in position " + position);
          position++;
          var value = parseAttributeValue();
          skipWhitespace();
          if (selector[position] != '"') throw new Error("Syntax error in position " + position);
          position++;
          skipWhitespace();
          if (selector[position] != ']') throw new Error("Syntax error in position " + position);
          position++;
          ret[attrName] = value;
        } else if (selector[position] == ']') {
          position++;
          ret[attrName] = true;
        } else {
          throw new Error("Syntax error in position " + position);
        }
      } else if (/\s/.test(_char)) {
        while (position < selector.length && /\s/.test(selector[position])) {
          position++;
          skipWhitespace();
        }

        ret.children = [parseElement()];
      } else if (canBeTagname) {
        ret.tagName = _char + parseText();
      } else {
        throw new Error("Syntax error in position " + position);
      }

      canBeTagname = false;
    }

    return ret;
  }

  function parseText() {
    var escape = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['.', '#', ',', '['];
    var text = '';

    while (position < selector.length) {
      var _char2 = selector[position];

      if (/\s/.test(_char2) || escape.includes(_char2)) {
        return text;
      } else {
        text += _char2;
        position++;
      }
    }

    return text;
  }

  function parseAttributeValue() {
    var text = '';

    while (position < selector.length) {
      var _char3 = selector[position];

      if (_char3 == '"') {
        return text;
      } else {
        text += _char3;
        position++;
      }
    }

    return text;
  }

  function skipWhitespace() {
    while (position < selector.length) {
      var _char4 = selector[position];

      if (!/\s/.test(_char4)) {
        return;
      } else {
        position++;
      }
    }
  }

  if (selector === "") return {};else return parseElement();
}
/**
 *
 * @param {string} selector
 * @param {object} attributes
 * @param documentObject
 * @returns {HTMLElement}
 */


function create() {
  var definition = {};
  var documentObject = null;

  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  if (typeof params[0] == "string") definition = mergeObjects(definition, parseSelector(params.splice(0, 1)[0]));
  if (_typeof(params[0]) == "object" && !(params[0] instanceof Node)) definition = mergeObjects(definition, params.splice(0, 1)[0]);

  for (var _i = 0, _params = params; _i < _params.length; _i++) {
    var param = _params[_i];

    if (param instanceof Document) {
      documentObject = param;
    } else if (param instanceof Node) {
      documentObject = param.ownerDocument;
      if (!definition.children) definition.children = [];
      definition.children.push(param);
    }
  }

  return createFromDefinition(definition, documentObject);
}

function mergeObjects(a, b) {
  repairClasses(a);
  repairClasses(b);

  var ret = _objectSpread({}, a, {}, b);

  if (a.data && b.data) {
    ret.data = _objectSpread({}, a.data, {}, b.data);
  }

  if (a.children && b.children) {
    ret.children = [].concat(_toConsumableArray(a.children), _toConsumableArray(b.children));
  }

  if (a.classList && b.classList) {
    ret.classList = [].concat(_toConsumableArray(a.classList), _toConsumableArray(b.classList));
  }

  return ret;
}

module.exports = {
  createFromDefinition: createFromDefinition,
  parseSelector: parseSelector,
  create: create,
  mergeObjects: mergeObjects,
  "default": create
};

/***/ }),

/***/ "./src/tippingError.mpts":
/*!*******************************!*\
  !*** ./src/tippingError.mpts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _0=document.createDocumentFragment();const _1=document.createElement("header");_1.setAttribute("class", "noH1");const _2=document.createTextNode("\r\n    ");_1.append(_2);const _3=document.createElement("img");_3.setAttribute("class", "closeButton");_3.setAttribute("src", variables["close"]);_3.setAttribute("alt", "close");_1.append(_3);const _4=document.createTextNode("\r\n");_1.append(_4);_0.append(_1);const _5=document.createTextNode("\r\n");_0.append(_5);const _6=document.createElement("main");const _7=document.createTextNode("\r\n    ");_6.append(_7);const _8=document.createElement("h2");const _9=document.createTextNode("Transaction aborted");_8.append(_9);_6.append(_8);const _10=document.createTextNode("\r\n");_6.append(_10);_0.append(_6);const _11=document.createTextNode("\r\n");_0.append(_11);const _12=document.createElement("footer");const _13=document.createTextNode("\r\n    ");_12.append(_13);const _14=document.createElement("button");_14.setAttribute("type", "button");_14.setAttribute("class", "close");const _15=document.createTextNode("\r\n        ");_14.append(_15);const _16=document.createElement("span");const _17=document.createTextNode("Close");_16.append(_17);_14.append(_16);const _18=document.createTextNode("\r\n    ");_14.append(_18);_12.append(_14);const _19=document.createTextNode("\r\n");_12.append(_19);_0.append(_12);return _0}


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/close.svg":
/*!*****************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/close.svg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImgtNiB3LTYgdGV4dC1ncmF5LTUwMCBtbC1hdXRvIiBmaWxsPSJub25lIg0KICAgICB2aWV3Qm94PSIwIDAgMjQgMjQiIHN0cm9rZT0iIzZiNzI4MCIgc3Ryb2tlLXdpZHRoPSIyIiB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4Ij4NCiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik02IDE4TDE4IDZNNiA2bDEyIDEyIi8+DQo8L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/link.svg":
/*!****************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/link.svg ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImgtNSB3LTUgbXQtMSB0ZXh0LWdyYXktNTAwIiB2aWV3Qm94PSIwIDAgMjAgMjAiIGZpbGw9IiM2YjcyODAiPg0KICAgIDxwYXRoIGQ9Ik0xMSAzYTEgMSAwIDEwMCAyaDIuNTg2bC02LjI5MyA2LjI5M2ExIDEgMCAxMDEuNDE0IDEuNDE0TDE1IDYuNDE0VjlhMSAxIDAgMTAyIDBWNGExIDEgMCAwMC0xLTFoLTV6Ij48L3BhdGg+DQogICAgPHBhdGggZD0iTTUgNWEyIDIgMCAwMC0yIDJ2OGEyIDIgMCAwMDIgMmg4YTIgMiAwIDAwMi0ydi0zYTEgMSAwIDEwLTIgMHYzSDVWN2gzYTEgMSAwIDAwMC0ySDV6Ij48L3BhdGg+DQo8L3N2Zz4=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/success.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/success.svg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0ibm9uZSIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHJva2U9IiMxMWRkNzQiIHN0cm9rZS13aWR0aD0iMS41Ij4NCiAgICA8cGF0aCBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGQ9Ik05IDEybDIgMiA0LTRtNiAyYTkgOSAwIDExLTE4IDAgOSA5IDAgMDExOCAweiI+PC9wYXRoPg0KPC9zdmc+");

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/tippingError.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippingError": () => (/* binding */ TippingError)
/* harmony export */ });
/* harmony import */ var _tippingError_mpts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippingError.mpts */ "./src/tippingError.mpts");
/* harmony import */ var _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!url-loader!./img/close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/close.svg");
/* harmony import */ var _url_loader_img_success_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!url-loader!./img/success.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/success.svg");
/* harmony import */ var _url_loader_img_link_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !!url-loader!./img/link.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/link.svg");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_4__);






class TippingError {
    constructor(identifier) {
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_4__.create)('div', {}, (0,_tippingError_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({identifier, close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"], success: _url_loader_img_success_svg__WEBPACK_IMPORTED_MODULE_2__["default"], link: _url_loader_img_link_svg__WEBPACK_IMPORTED_MODULE_3__["default"]}));
        this.html.querySelector('.close')?.addEventListener('click', (e) => {
            this.html.dispatchEvent(Object.assign(new Event('close', {bubbles :true})))
        });
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04yQztBQUNLO0FBQ0k7QUFDTjtBQUNWO0FBQ3BDO0FBQ087QUFDUDtBQUNBLG9CQUFvQixvREFBTSxVQUFVLEVBQUUsOERBQVEsRUFBRSxpQkFBaUIsNEVBQVMsMkVBQU0sbUVBQUM7QUFDakY7QUFDQSxzRUFBc0UsY0FBYztBQUNwRixTQUFTO0FBQ1Q7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtY3JlYXRvci9kaXN0L2VudHJ5LmpzIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nRXJyb3IubXB0cyIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2xpbmsuc3ZnIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy9pbWcvc3VjY2Vzcy5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nRXJyb3IuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBkb2N1bWVudE9iamVjdFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnJvbURlZmluaXRpb24oKSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRvY3VtZW50T2JqZWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBpZiAoIWRvY3VtZW50T2JqZWN0KSBkb2N1bWVudE9iamVjdCA9IGRvY3VtZW50O1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50T2JqZWN0LmNyZWF0ZUVsZW1lbnQoYXR0cmlidXRlcy50YWdOYW1lIHx8ICdkaXYnKTtcbiAgcmVwYWlyQ2xhc3NlcyhhdHRyaWJ1dGVzKTtcblxuICBmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKGF0dHJOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBhdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2xhc3NMaXN0Jykge1xuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGF0dHJpYnV0ZXMuY2xhc3NMaXN0KSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgeCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh4KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0ZXh0Jykge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXMudGV4dDtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYXR0cmlidXRlcy5odG1sO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdkYXRhJykge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LmRhdGFzZXQsIGF0dHJpYnV0ZXMuZGF0YSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgYXR0cmlidXRlcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmFwcGVuZENoaWxkKHggaW5zdGFuY2VvZiBOb2RlID8geCA6IGNyZWF0ZSh4LCB7fSwgZG9jdW1lbnRPYmplY3QpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xuICAgICAgZWxlbWVudFthdHRyTmFtZV0gPSBhdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgIGlmIChfdHlwZW9mKGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBhdHRyaWJ1dGVzW2F0dHJOYW1lXSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXVtzdHlsZU5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAndGFnTmFtZScpIHsvL25vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdID09PSB0cnVlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0ck5hbWUpO2Vsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwYWlyQ2xhc3NlcyhvYmopIHtcbiAgaWYgKG9iai5jbGFzc05hbWUpIHtcbiAgICBpZiAoIW9iai5jbGFzc0xpc3QpIG9iai5jbGFzc0xpc3QgPSBbXTtcbiAgICBvYmouY2xhc3NMaXN0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShvYmouY2xhc3NMaXN0KSwgX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc05hbWUuc3BsaXQoJyAnKSkpO1xuICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICB9XG59XG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAqICRyZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgc2VsZWN0b3IgPSAoc2VsZWN0b3IgKyBcIlwiKS50cmltKCk7XG4gIHZhciBwb3NpdGlvbiA9IDA7XG5cbiAgZnVuY3Rpb24gcGFyc2VFbGVtZW50KCkge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICB2YXIgY2FuQmVUYWduYW1lID0gdHJ1ZTtcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuICAgICAgcG9zaXRpb24rKztcblxuICAgICAgaWYgKF9jaGFyID09PSAnIycpIHtcbiAgICAgICAgcmV0LmlkID0gcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnLicpIHtcbiAgICAgICAgaWYgKCFyZXQuY2xhc3NMaXN0KSByZXQuY2xhc3NMaXN0ID0gW107XG4gICAgICAgIHJldC5jbGFzc0xpc3QucHVzaChwYXJzZVRleHQoKSk7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnWycpIHtcbiAgICAgICAgdmFyIGF0dHJOYW1lID0gcGFyc2VUZXh0KFsnPScsICddJ10pO1xuICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJz0nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ1wiJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ10nKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3JbcG9zaXRpb25dID09ICddJykge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgcmV0W2F0dHJOYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKC9cXHMvLnRlc3QoX2NoYXIpKSB7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCAmJiAvXFxzLy50ZXN0KHNlbGVjdG9yW3Bvc2l0aW9uXSkpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXQuY2hpbGRyZW4gPSBbcGFyc2VFbGVtZW50KCldO1xuICAgICAgfSBlbHNlIGlmIChjYW5CZVRhZ25hbWUpIHtcbiAgICAgICAgcmV0LnRhZ05hbWUgPSBfY2hhciArIHBhcnNlVGV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBjYW5CZVRhZ25hbWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VUZXh0KCkge1xuICAgIHZhciBlc2NhcGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnLicsICcjJywgJywnLCAnWyddO1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmICgvXFxzLy50ZXN0KF9jaGFyMikgfHwgZXNjYXBlLmluY2x1ZGVzKF9jaGFyMikpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMjtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlVmFsdWUoKSB7XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMyA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKF9jaGFyMyA9PSAnXCInKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBfY2hhcjM7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwV2hpdGVzcGFjZSgpIHtcbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjQgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmICghL1xccy8udGVzdChfY2hhcjQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBcIlwiKSByZXR1cm4ge307ZWxzZSByZXR1cm4gcGFyc2VFbGVtZW50KCk7XG59XG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBkb2N1bWVudE9iamVjdFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIGRlZmluaXRpb24gPSB7fTtcbiAgdmFyIGRvY3VtZW50T2JqZWN0ID0gbnVsbDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zWzBdID09IFwic3RyaW5nXCIpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyc2VTZWxlY3RvcihwYXJhbXMuc3BsaWNlKDAsIDEpWzBdKSk7XG4gIGlmIChfdHlwZW9mKHBhcmFtc1swXSkgPT0gXCJvYmplY3RcIiAmJiAhKHBhcmFtc1swXSBpbnN0YW5jZW9mIE5vZGUpKSBkZWZpbml0aW9uID0gbWVyZ2VPYmplY3RzKGRlZmluaXRpb24sIHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX3BhcmFtcyA9IHBhcmFtczsgX2kgPCBfcGFyYW1zLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbXNbX2ldO1xuXG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50T2JqZWN0ID0gcGFyYW07XG4gICAgfSBlbHNlIGlmIChwYXJhbSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGRvY3VtZW50T2JqZWN0ID0gcGFyYW0ub3duZXJEb2N1bWVudDtcbiAgICAgIGlmICghZGVmaW5pdGlvbi5jaGlsZHJlbikgZGVmaW5pdGlvbi5jaGlsZHJlbiA9IFtdO1xuICAgICAgZGVmaW5pdGlvbi5jaGlsZHJlbi5wdXNoKHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZG9jdW1lbnRPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMoYSwgYikge1xuICByZXBhaXJDbGFzc2VzKGEpO1xuICByZXBhaXJDbGFzc2VzKGIpO1xuXG4gIHZhciByZXQgPSBfb2JqZWN0U3ByZWFkKHt9LCBhLCB7fSwgYik7XG5cbiAgaWYgKGEuZGF0YSAmJiBiLmRhdGEpIHtcbiAgICByZXQuZGF0YSA9IF9vYmplY3RTcHJlYWQoe30sIGEuZGF0YSwge30sIGIuZGF0YSk7XG4gIH1cblxuICBpZiAoYS5jaGlsZHJlbiAmJiBiLmNoaWxkcmVuKSB7XG4gICAgcmV0LmNoaWxkcmVuID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhLmNoaWxkcmVuKSwgX3RvQ29uc3VtYWJsZUFycmF5KGIuY2hpbGRyZW4pKTtcbiAgfVxuXG4gIGlmIChhLmNsYXNzTGlzdCAmJiBiLmNsYXNzTGlzdCkge1xuICAgIHJldC5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2xhc3NMaXN0KSwgX3RvQ29uc3VtYWJsZUFycmF5KGIuY2xhc3NMaXN0KSk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRnJvbURlZmluaXRpb246IGNyZWF0ZUZyb21EZWZpbml0aW9uLFxuICBwYXJzZVNlbGVjdG9yOiBwYXJzZVNlbGVjdG9yLFxuICBjcmVhdGU6IGNyZWF0ZSxcbiAgbWVyZ2VPYmplY3RzOiBtZXJnZU9iamVjdHMsXG4gIFwiZGVmYXVsdFwiOiBjcmVhdGVcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFyaWFibGVzKXtjb25zdCBfMD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Y29uc3QgXzE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtfMS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vSDFcIik7Y29uc3QgXzI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xLmFwcGVuZChfMik7Y29uc3QgXzM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlQnV0dG9uXCIpO18zLnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJjbG9zZVwiXSk7XzMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiY2xvc2VcIik7XzEuYXBwZW5kKF8zKTtjb25zdCBfND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMS5hcHBlbmQoXzQpO18wLmFwcGVuZChfMSk7Y29uc3QgXzU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzAuYXBwZW5kKF81KTtjb25zdCBfNj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtjb25zdCBfNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzYuYXBwZW5kKF83KTtjb25zdCBfOD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7Y29uc3QgXzk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJUcmFuc2FjdGlvbiBhYm9ydGVkXCIpO184LmFwcGVuZChfOSk7XzYuYXBwZW5kKF84KTtjb25zdCBfMTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzYuYXBwZW5kKF8xMCk7XzAuYXBwZW5kKF82KTtjb25zdCBfMTE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzAuYXBwZW5kKF8xMSk7Y29uc3QgXzEyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7Y29uc3QgXzEzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTIuYXBwZW5kKF8xMyk7Y29uc3QgXzE0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzE0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzE0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VcIik7Y29uc3QgXzE1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzE0LmFwcGVuZChfMTUpO2NvbnN0IF8xNj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfMTc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDbG9zZVwiKTtfMTYuYXBwZW5kKF8xNyk7XzE0LmFwcGVuZChfMTYpO2NvbnN0IF8xOD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE0LmFwcGVuZChfMTgpO18xMi5hcHBlbmQoXzE0KTtjb25zdCBfMTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzEyLmFwcGVuZChfMTkpO18wLmFwcGVuZChfMTIpO3JldHVybiBfMH1cbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROaUIzTFRZZ2RHVjRkQzFuY21GNUxUVXdNQ0J0YkMxaGRYUnZJaUJtYVd4c1BTSnViMjVsSWcwS0lDQWdJQ0IyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhOMGNtOXJaVDBpSXpaaU56STRNQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXlJaUIzYVdSMGFEMGlNalJ3ZUNJZ2FHVnBaMmgwUFNJeU5IQjRJajROQ2lBZ0lDQThjR0YwYUNCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlHUTlJazAySURFNFRERTRJRFpOTmlBMmJERXlJREV5SWk4K0RRbzhMM04yWno0PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5TQjNMVFVnYlhRdE1TQjBaWGgwTFdkeVlYa3ROVEF3SWlCMmFXVjNRbTk0UFNJd0lEQWdNakFnTWpBaUlHWnBiR3c5SWlNMllqY3lPREFpUGcwS0lDQWdJRHh3WVhSb0lHUTlJazB4TVNBellURWdNU0F3SURFd01DQXlhREl1TlRnMmJDMDJMakk1TXlBMkxqSTVNMkV4SURFZ01DQXhNREV1TkRFMElERXVOREUwVERFMUlEWXVOREUwVmpsaE1TQXhJREFnTVRBeUlEQldOR0V4SURFZ01DQXdNQzB4TFRGb0xUVjZJajQ4TDNCaGRHZytEUW9nSUNBZ1BIQmhkR2dnWkQwaVRUVWdOV0V5SURJZ01DQXdNQzB5SURKMk9HRXlJRElnTUNBd01ESWdNbWc0WVRJZ01pQXdJREF3TWkweWRpMHpZVEVnTVNBd0lERXdMVElnTUhZelNEVldOMmd6WVRFZ01TQXdJREF3TUMweVNEVjZJajQ4TDNCaGRHZytEUW84TDNOMlp6ND1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdabWxzYkQwaWJtOXVaU0lnZG1sbGQwSnZlRDBpTUNBd0lESTBJREkwSWlCemRISnZhMlU5SWlNeE1XUmtOelFpSUhOMGNtOXJaUzEzYVdSMGFEMGlNUzQxSWo0TkNpQWdJQ0E4Y0dGMGFDQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJR1E5SWswNUlERXliRElnTWlBMExUUnROaUF5WVRrZ09TQXdJREV4TFRFNElEQWdPU0E1SURBZ01ERXhPQ0F3ZWlJK1BDOXdZWFJvUGcwS1BDOXpkbWMrXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL3RpcHBpbmdFcnJvci5tcHRzXCI7XHJcbmltcG9ydCBjbG9zZSBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2Nsb3NlLnN2Z1wiXHJcbmltcG9ydCBzdWNjZXNzIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvc3VjY2Vzcy5zdmdcIlxyXG5pbXBvcnQgbGluayBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2xpbmsuc3ZnXCJcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJmYXN0LWNyZWF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXBwaW5nRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoaWRlbnRpZmllcikge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGNyZWF0ZSgnZGl2Jywge30sIHRlbXBsYXRlKHtpZGVudGlmaWVyLCBjbG9zZSwgc3VjY2VzcywgbGlua30pKTtcclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLmNsb3NlJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5odG1sLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihuZXcgRXZlbnQoJ2Nsb3NlJywge2J1YmJsZXMgOnRydWV9KSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=