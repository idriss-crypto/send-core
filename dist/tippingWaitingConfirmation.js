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

/***/ "./src/tippingWaitingConfirmation.mpts":
/*!*********************************************!*\
  !*** ./src/tippingWaitingConfirmation.mpts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _20=document.createDocumentFragment();const _21=document.createElement("header");_21.setAttribute("class", "noH1");const _22=document.createTextNode("\r\n    ");_21.append(_22);const _23=document.createElement("img");_23.setAttribute("class", "closeButton");_23.setAttribute("src", variables["close"]);_23.setAttribute("alt", "close");_21.append(_23);const _24=document.createTextNode("\r\n");_21.append(_24);_20.append(_21);const _25=document.createTextNode("\r\n");_20.append(_25);const _26=document.createElement("main");const _27=document.createTextNode("\r\n    ");_26.append(_27);const _28=document.createElement("div");_28.setAttribute("class", "loader");_26.append(_28);const _29=document.createTextNode("\r\n    ");_26.append(_29);const _30=document.createElement("h2");const _31=document.createTextNode("Waiting for Confirmation");_30.append(_31);_26.append(_30);const _32=document.createTextNode("\r\n    ");_26.append(_32);const _33=document.createElement("p");_33.setAttribute("class", "subtitle");const _34=document.createTextNode("Sending ");_33.append(_34);const _35=document.createElement("strong");const _36=document.createTextNode("$");_35.append(_36);const _37=document.createTextNode(variables["amountUSD"]);_35.append(_37);_33.append(_35);const _38=document.createTextNode(" (");_33.append(_38);const _39=document.createElement("span");_39.setAttribute("class", "amountCoin");const _40=document.createTextNode("---");_39.append(_40);_33.append(_39);const _41=document.createTextNode(" ");_33.append(_41);const _42=document.createTextNode(variables["token"]);_33.append(_42);const _43=document.createTextNode(") to ");_33.append(_43);const _44=document.createTextNode(variables["identifier"]);_33.append(_44);const _45=document.createElement("img");_45.setAttribute("class", "twitterIcon");_45.setAttribute("src", variables["twitter"]);_45.setAttribute("alt", "");_33.append(_45);_26.append(_33);const _46=document.createTextNode("\r\n    ");_26.append(_46);const _47=document.createElement("p");const _48=document.createTextNode("Confirm this transaction in your wallet");_47.append(_48);_26.append(_47);const _49=document.createTextNode("\r\n");_26.append(_49);_20.append(_26);const _50=document.createTextNode("\r\n");_20.append(_50);const _51=document.createElement("footer");const _52=document.createTextNode("\r\n    ");_51.append(_52);const _53=document.createElement("p");_53.setAttribute("class", "link");const _54=document.createTextNode("\r\n        ");_53.append(_54);const _55=document.createElement("a");_55.setAttribute("href", "https://mirror.xyz/0x88d7709ce401e4E7b5068156423ECB4f60A99F75/gwUi5LU-JIy4ldoKKFC9E4ODZuKfF_cETW2uSZEuPSs");_55.setAttribute("target", "_blank");const _56=document.createTextNode("1% supplies IDriss treasury");_55.append(_56);_53.append(_55);const _57=document.createTextNode("\r\n    ");_53.append(_57);_51.append(_53);const _58=document.createTextNode("\r\n");_51.append(_58);_20.append(_51);return _20}


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

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/twitter.svg":
/*!*******************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/twitter.svg ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyNC4yLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTG9nbyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyNDggMjA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNDggMjA0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8c3R5bGUgdHlwZT0idGV4dC9jc3MiPg0KCS5zdDB7ZmlsbDojMUQ5QkYwO30NCjwvc3R5bGU+DQo8ZyBpZD0iTG9nb18xXyI+DQoJPHBhdGggaWQ9IndoaXRlX2JhY2tncm91bmQiIGNsYXNzPSJzdDAiIGQ9Ik0yMjEuOTUsNTEuMjljMC4xNSwyLjE3LDAuMTUsNC4zNCwwLjE1LDYuNTNjMCw2Ni43My01MC44LDE0My42OS0xNDMuNjksMTQzLjY5di0wLjA0ICAgQzUwLjk3LDIwMS41MSwyNC4xLDE5My42NSwxLDE3OC44M2MzLjk5LDAuNDgsOCwwLjcyLDEyLjAyLDAuNzNjMjIuNzQsMC4wMiw0NC44My03LjYxLDYyLjcyLTIxLjY2ICAgYy0yMS42MS0wLjQxLTQwLjU2LTE0LjUtNDcuMTgtMzUuMDdjNy41NywxLjQ2LDE1LjM3LDEuMTYsMjIuOC0wLjg3QzI3LjgsMTE3LjIsMTAuODUsOTYuNSwxMC44NSw3Mi40NmMwLTAuMjIsMC0wLjQzLDAtMC42NCAgIGM3LjAyLDMuOTEsMTQuODgsNi4wOCwyMi45Miw2LjMyQzExLjU4LDYzLjMxLDQuNzQsMzMuNzksMTguMTQsMTAuNzFjMjUuNjQsMzEuNTUsNjMuNDcsNTAuNzMsMTA0LjA4LDUyLjc2ICAgYy00LjA3LTE3LjU0LDEuNDktMzUuOTIsMTQuNjEtNDguMjVjMjAuMzQtMTkuMTIsNTIuMzMtMTguMTQsNzEuNDUsMi4xOWMxMS4zMS0yLjIzLDIyLjE1LTYuMzgsMzIuMDctMTIuMjYgICBjLTMuNzcsMTEuNjktMTEuNjYsMjEuNjItMjIuMiwyNy45M2MxMC4wMS0xLjE4LDE5Ljc5LTMuODYsMjktNy45NUMyNDAuMzcsMzUuMjksMjMxLjgzLDQ0LjE0LDIyMS45NSw1MS4yOXoiLz4NCjwvZz4NCjwvc3ZnPg0K");

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
/*!*******************************************!*\
  !*** ./src/tippingWaitingConfirmation.js ***!
  \*******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippingWaitingConfirmation": () => (/* binding */ TippingWaitingConfirmation)
/* harmony export */ });
/* harmony import */ var _tippingWaitingConfirmation_mpts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippingWaitingConfirmation.mpts */ "./src/tippingWaitingConfirmation.mpts");
/* harmony import */ var _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!url-loader!./img/close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/close.svg");
/* harmony import */ var _url_loader_img_twitter_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!url-loader!./img/twitter.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/twitter.svg");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_3__);





class TippingWaitingConfirmation {
    constructor(identifier, amountUSD, token) {
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_3__.create)('div', {}, (0,_tippingWaitingConfirmation_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({identifier, close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"], twitter: _url_loader_img_twitter_svg__WEBPACK_IMPORTED_MODULE_2__["default"], amountUSD, token}));
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnQjs7Ozs7Ozs7Ozs7Ozs7O0FDRHo3RixpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDQW5DLGlFQUFlLG9CQUFvQjs7Ozs7O1VDQW5DO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTnlEO0FBQ1Q7QUFDSTtBQUNoQjtBQUNwQztBQUNPO0FBQ1A7QUFDQSxvQkFBb0Isb0RBQU0sVUFBVSxFQUFFLDRFQUFRLEVBQUUsaUJBQWlCLDRFQUFTLHdGQUFtQjtBQUM3RjtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvLi9ub2RlX21vZHVsZXMvZmFzdC1jcmVhdG9yL2Rpc3QvZW50cnkuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdXYWl0aW5nQ29uZmlybWF0aW9uLm1wdHMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL2ltZy90d2l0dGVyLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdXYWl0aW5nQ29uZmlybWF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZyb21EZWZpbml0aW9uKCkge1xuICB2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFkb2N1bWVudE9iamVjdCkgZG9jdW1lbnRPYmplY3QgPSBkb2N1bWVudDtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudE9iamVjdC5jcmVhdGVFbGVtZW50KGF0dHJpYnV0ZXMudGFnTmFtZSB8fCAnZGl2Jyk7XG4gIHJlcGFpckNsYXNzZXMoYXR0cmlidXRlcyk7XG5cbiAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTGlzdCcpIHtcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihhdHRyaWJ1dGVzLmNsYXNzTGlzdCksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIHggPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoeCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAndGV4dCcpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHQ7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0dHJpYnV0ZXMuaHRtbDtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnZGF0YScpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5kYXRhc2V0LCBhdHRyaWJ1dGVzLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5hcHBlbmRDaGlsZCh4IGluc3RhbmNlb2YgTm9kZSA/IHggOiBjcmVhdGUoeCwge30sIGRvY3VtZW50T2JqZWN0KSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICAgIGVsZW1lbnRbYXR0ck5hbWVdID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICBpZiAoX3R5cGVvZihhdHRyaWJ1dGVzW2F0dHJOYW1lXSkgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYXR0cmlidXRlc1thdHRyTmFtZV0pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV1bc3R5bGVOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RhZ05hbWUnKSB7Ly9ub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSA9PT0gdHJ1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJOYW1lKTtlbHNlIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSAhPT0gZmFsc2UpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGFpckNsYXNzZXMob2JqKSB7XG4gIGlmIChvYmouY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFvYmouY2xhc3NMaXN0KSBvYmouY2xhc3NMaXN0ID0gW107XG4gICAgb2JqLmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShvYmouY2xhc3NOYW1lLnNwbGl0KCcgJykpKTtcbiAgICBkZWxldGUgb2JqLmNsYXNzTmFtZTtcbiAgfVxufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiAkcmV0dXJucyB7b2JqZWN0fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHNlbGVjdG9yID0gKHNlbGVjdG9yICsgXCJcIikudHJpbSgpO1xuICB2YXIgcG9zaXRpb24gPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlRWxlbWVudCgpIHtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgdmFyIGNhbkJlVGFnbmFtZSA9IHRydWU7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhciA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcbiAgICAgIHBvc2l0aW9uKys7XG5cbiAgICAgIGlmIChfY2hhciA9PT0gJyMnKSB7XG4gICAgICAgIHJldC5pZCA9IHBhcnNlVGV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJy4nKSB7XG4gICAgICAgIGlmICghcmV0LmNsYXNzTGlzdCkgcmV0LmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICByZXQuY2xhc3NMaXN0LnB1c2gocGFyc2VUZXh0KCkpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJ1snKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHBhcnNlVGV4dChbJz0nLCAnXSddKTtcbiAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dID09ICc9Jykge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ1wiJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICddJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgcmV0W2F0dHJOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnXScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgvXFxzLy50ZXN0KF9jaGFyKSkge1xuICAgICAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGggJiYgL1xccy8udGVzdChzZWxlY3Rvcltwb3NpdGlvbl0pKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0LmNoaWxkcmVuID0gW3BhcnNlRWxlbWVudCgpXTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuQmVUYWduYW1lKSB7XG4gICAgICAgIHJldC50YWdOYW1lID0gX2NoYXIgKyBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY2FuQmVUYWduYW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlVGV4dCgpIHtcbiAgICB2YXIgZXNjYXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJy4nLCAnIycsICcsJywgJ1snXTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIyID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoL1xccy8udGVzdChfY2hhcjIpIHx8IGVzY2FwZS5pbmNsdWRlcyhfY2hhcjIpKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBfY2hhcjI7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZVZhbHVlKCkge1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjMgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmIChfY2hhcjMgPT0gJ1wiJykge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIzO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcFdoaXRlc3BhY2UoKSB7XG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXI0ID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoIS9cXHMvLnRlc3QoX2NoYXI0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gXCJcIikgcmV0dXJuIHt9O2Vsc2UgcmV0dXJuIHBhcnNlRWxlbWVudCgpO1xufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBkZWZpbml0aW9uID0ge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IG51bGw7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIHBhcmFtc1swXSA9PSBcInN0cmluZ1wiKSBkZWZpbml0aW9uID0gbWVyZ2VPYmplY3RzKGRlZmluaXRpb24sIHBhcnNlU2VsZWN0b3IocGFyYW1zLnNwbGljZSgwLCAxKVswXSkpO1xuICBpZiAoX3R5cGVvZihwYXJhbXNbMF0pID09IFwib2JqZWN0XCIgJiYgIShwYXJhbXNbMF0gaW5zdGFuY2VvZiBOb2RlKSkgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJhbXMuc3BsaWNlKDAsIDEpWzBdKTtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9wYXJhbXMgPSBwYXJhbXM7IF9pIDwgX3BhcmFtcy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW1zW19pXTtcblxuICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtO1xuICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtLm93bmVyRG9jdW1lbnQ7XG4gICAgICBpZiAoIWRlZmluaXRpb24uY2hpbGRyZW4pIGRlZmluaXRpb24uY2hpbGRyZW4gPSBbXTtcbiAgICAgIGRlZmluaXRpb24uY2hpbGRyZW4ucHVzaChwYXJhbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGRvY3VtZW50T2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKGEsIGIpIHtcbiAgcmVwYWlyQ2xhc3NlcyhhKTtcbiAgcmVwYWlyQ2xhc3NlcyhiKTtcblxuICB2YXIgcmV0ID0gX29iamVjdFNwcmVhZCh7fSwgYSwge30sIGIpO1xuXG4gIGlmIChhLmRhdGEgJiYgYi5kYXRhKSB7XG4gICAgcmV0LmRhdGEgPSBfb2JqZWN0U3ByZWFkKHt9LCBhLmRhdGEsIHt9LCBiLmRhdGEpO1xuICB9XG5cbiAgaWYgKGEuY2hpbGRyZW4gJiYgYi5jaGlsZHJlbikge1xuICAgIHJldC5jaGlsZHJlbiA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jaGlsZHJlbiksIF90b0NvbnN1bWFibGVBcnJheShiLmNoaWxkcmVuKSk7XG4gIH1cblxuICBpZiAoYS5jbGFzc0xpc3QgJiYgYi5jbGFzc0xpc3QpIHtcbiAgICByZXQuY2xhc3NMaXN0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShiLmNsYXNzTGlzdCkpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUZyb21EZWZpbml0aW9uOiBjcmVhdGVGcm9tRGVmaW5pdGlvbixcbiAgcGFyc2VTZWxlY3RvcjogcGFyc2VTZWxlY3RvcixcbiAgY3JlYXRlOiBjcmVhdGUsXG4gIG1lcmdlT2JqZWN0czogbWVyZ2VPYmplY3RzLFxuICBcImRlZmF1bHRcIjogY3JlYXRlXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZhcmlhYmxlcyl7Y29uc3QgXzIwPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjb25zdCBfMjE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtfMjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJub0gxXCIpO2NvbnN0IF8yMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzIxLmFwcGVuZChfMjIpO2NvbnN0IF8yMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18yMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlQnV0dG9uXCIpO18yMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wiY2xvc2VcIl0pO18yMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJjbG9zZVwiKTtfMjEuYXBwZW5kKF8yMyk7Y29uc3QgXzI0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18yMS5hcHBlbmQoXzI0KTtfMjAuYXBwZW5kKF8yMSk7Y29uc3QgXzI1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18yMC5hcHBlbmQoXzI1KTtjb25zdCBfMjY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1haW5cIik7Y29uc3QgXzI3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjYuYXBwZW5kKF8yNyk7Y29uc3QgXzI4PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzI4LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9hZGVyXCIpO18yNi5hcHBlbmQoXzI4KTtjb25zdCBfMjk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18yNi5hcHBlbmQoXzI5KTtjb25zdCBfMzA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO2NvbnN0IF8zMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIldhaXRpbmcgZm9yIENvbmZpcm1hdGlvblwiKTtfMzAuYXBwZW5kKF8zMSk7XzI2LmFwcGVuZChfMzApO2NvbnN0IF8zMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzI2LmFwcGVuZChfMzIpO2NvbnN0IF8zMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtfMzMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJ0aXRsZVwiKTtjb25zdCBfMzQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZW5kaW5nIFwiKTtfMzMuYXBwZW5kKF8zNCk7Y29uc3QgXzM1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7Y29uc3QgXzM2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJFwiKTtfMzUuYXBwZW5kKF8zNik7Y29uc3QgXzM3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcImFtb3VudFVTRFwiXSk7XzM1LmFwcGVuZChfMzcpO18zMy5hcHBlbmQoXzM1KTtjb25zdCBfMzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgKFwiKTtfMzMuYXBwZW5kKF8zOCk7Y29uc3QgXzM5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO18zOS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFtb3VudENvaW5cIik7Y29uc3QgXzQwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiLS0tXCIpO18zOS5hcHBlbmQoXzQwKTtfMzMuYXBwZW5kKF8zOSk7Y29uc3QgXzQxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIFwiKTtfMzMuYXBwZW5kKF80MSk7Y29uc3QgXzQyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcInRva2VuXCJdKTtfMzMuYXBwZW5kKF80Mik7Y29uc3QgXzQzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiKSB0byBcIik7XzMzLmFwcGVuZChfNDMpO2NvbnN0IF80ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJpZGVudGlmaWVyXCJdKTtfMzMuYXBwZW5kKF80NCk7Y29uc3QgXzQ1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzQ1LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwidHdpdHRlckljb25cIik7XzQ1LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJ0d2l0dGVyXCJdKTtfNDUuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18zMy5hcHBlbmQoXzQ1KTtfMjYuYXBwZW5kKF8zMyk7Y29uc3QgXzQ2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjYuYXBwZW5kKF80Nik7Y29uc3QgXzQ3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO2NvbnN0IF80OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbmZpcm0gdGhpcyB0cmFuc2FjdGlvbiBpbiB5b3VyIHdhbGxldFwiKTtfNDcuYXBwZW5kKF80OCk7XzI2LmFwcGVuZChfNDcpO2NvbnN0IF80OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMjYuYXBwZW5kKF80OSk7XzIwLmFwcGVuZChfMjYpO2NvbnN0IF81MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMjAuYXBwZW5kKF81MCk7Y29uc3QgXzUxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7Y29uc3QgXzUyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfNTEuYXBwZW5kKF81Mik7Y29uc3QgXzUzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO181My5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtcIik7Y29uc3QgXzU0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzUzLmFwcGVuZChfNTQpO2NvbnN0IF81NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtfNTUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vbWlycm9yLnh5ei8weDg4ZDc3MDljZTQwMWU0RTdiNTA2ODE1NjQyM0VDQjRmNjBBOTlGNzUvZ3dVaTVMVS1KSXk0bGRvS0tGQzlFNE9EWnVLZkZfY0VUVzJ1U1pFdVBTc1wiKTtfNTUuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO2NvbnN0IF81Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjElIHN1cHBsaWVzIElEcmlzcyB0cmVhc3VyeVwiKTtfNTUuYXBwZW5kKF81Nik7XzUzLmFwcGVuZChfNTUpO2NvbnN0IF81Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzUzLmFwcGVuZChfNTcpO181MS5hcHBlbmQoXzUzKTtjb25zdCBfNTg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzUxLmFwcGVuZChfNTgpO18yMC5hcHBlbmQoXzUxKTtyZXR1cm4gXzIwfVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5pQjNMVFlnZEdWNGRDMW5jbUY1TFRVd01DQnRiQzFoZFhSdklpQm1hV3hzUFNKdWIyNWxJZzBLSUNBZ0lDQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSE4wY205clpUMGlJelppTnpJNE1DSWdjM1J5YjJ0bExYZHBaSFJvUFNJeUlpQjNhV1IwYUQwaU1qUndlQ0lnYUdWcFoyaDBQU0l5TkhCNElqNE5DaUFnSUNBOGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDJJREU0VERFNElEWk5OaUEyYkRFeUlERXlJaTgrRFFvOEwzTjJaejQ9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaVZWUkdMVGdpUHo0TkNqd2hMUzBnUjJWdVpYSmhkRzl5T2lCQlpHOWlaU0JKYkd4MWMzUnlZWFJ2Y2lBeU5DNHlMakFzSUZOV1J5QkZlSEJ2Y25RZ1VHeDFaeTFKYmlBdUlGTldSeUJXWlhKemFXOXVPaUEyTGpBd0lFSjFhV3hrSURBcElDQXRMVDROQ2p4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlURzluYnlJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWlCNGJXeHVjenA0YkdsdWF6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M5NGJHbHVheUlnZUQwaU1IQjRJaUI1UFNJd2NIZ2lJSFpwWlhkQ2IzZzlJakFnTUNBeU5EZ2dNakEwSWlCemRIbHNaVDBpWlc1aFlteGxMV0poWTJ0bmNtOTFibVE2Ym1WM0lEQWdNQ0F5TkRnZ01qQTBPeUlnZUcxc09uTndZV05sUFNKd2NtVnpaWEoyWlNJK0RRbzhjM1I1YkdVZ2RIbHdaVDBpZEdWNGRDOWpjM01pUGcwS0NTNXpkREI3Wm1sc2JEb2pNVVE1UWtZd08zME5Dand2YzNSNWJHVStEUW84WnlCcFpEMGlURzluYjE4eFh5SStEUW9KUEhCaGRHZ2dhV1E5SW5kb2FYUmxYMkpoWTJ0bmNtOTFibVFpSUdOc1lYTnpQU0p6ZERBaUlHUTlJazB5TWpFdU9UVXNOVEV1TWpsak1DNHhOU3d5TGpFM0xEQXVNVFVzTkM0ek5Dd3dMakUxTERZdU5UTmpNQ3cyTmk0M015MDFNQzQ0TERFME15NDJPUzB4TkRNdU5qa3NNVFF6TGpZNWRpMHdMakEwSUNBZ1F6VXdMamszTERJd01TNDFNU3d5TkM0eExERTVNeTQyTlN3eExERTNPQzQ0TTJNekxqazVMREF1TkRnc09Dd3dMamN5TERFeUxqQXlMREF1TnpOak1qSXVOelFzTUM0d01pdzBOQzQ0TXkwM0xqWXhMRFl5TGpjeUxUSXhMalkySUNBZ1l5MHlNUzQyTVMwd0xqUXhMVFF3TGpVMkxURTBMalV0TkRjdU1UZ3RNelV1TURkak55NDFOeXd4TGpRMkxERTFMak0zTERFdU1UWXNNakl1T0Mwd0xqZzNRekkzTGpnc01URTNMaklzTVRBdU9EVXNPVFl1TlN3eE1DNDROU3czTWk0ME5tTXdMVEF1TWpJc01DMHdMalF6TERBdE1DNDJOQ0FnSUdNM0xqQXlMRE11T1RFc01UUXVPRGdzTmk0d09Dd3lNaTQ1TWl3MkxqTXlRekV4TGpVNExEWXpMak14TERRdU56UXNNek11Tnprc01UZ3VNVFFzTVRBdU56RmpNalV1TmpRc016RXVOVFVzTmpNdU5EY3NOVEF1TnpNc01UQTBMakE0TERVeUxqYzJJQ0FnWXkwMExqQTNMVEUzTGpVMExERXVORGt0TXpVdU9USXNNVFF1TmpFdE5EZ3VNalZqTWpBdU16UXRNVGt1TVRJc05USXVNek10TVRndU1UUXNOekV1TkRVc01pNHhPV014TVM0ek1TMHlMakl6TERJeUxqRTFMVFl1TXpnc016SXVNRGN0TVRJdU1qWWdJQ0JqTFRNdU56Y3NNVEV1TmprdE1URXVOallzTWpFdU5qSXRNakl1TWl3eU55NDVNMk14TUM0d01TMHhMakU0TERFNUxqYzVMVE11T0RZc01qa3ROeTQ1TlVNeU5EQXVNemNzTXpVdU1qa3NNak14TGpnekxEUTBMakUwTERJeU1TNDVOU3cxTVM0eU9Yb2lMejROQ2p3dlp6NE5Dand2YzNablBnMEtcIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdGlwcGluZ1dhaXRpbmdDb25maXJtYXRpb24ubXB0c1wiO1xyXG5pbXBvcnQgY2xvc2UgZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9jbG9zZS5zdmdcIlxyXG5pbXBvcnQgdHdpdHRlciBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL3R3aXR0ZXIuc3ZnXCJcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJmYXN0LWNyZWF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXBwaW5nV2FpdGluZ0NvbmZpcm1hdGlvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyLCBhbW91bnRVU0QsIHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5odG1sID0gY3JlYXRlKCdkaXYnLCB7fSwgdGVtcGxhdGUoe2lkZW50aWZpZXIsIGNsb3NlLCB0d2l0dGVyLCBhbW91bnRVU0QsIHRva2VufSkpO1xyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9