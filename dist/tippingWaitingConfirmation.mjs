/******/ var __webpack_modules__ = ({

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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _0=document.createDocumentFragment();const _1=document.createElement("header");_1.setAttribute("class", "noH1");const _2=document.createTextNode("\r\n    ");_1.append(_2);const _3=document.createElement("img");_3.setAttribute("class", "closeButton");_3.setAttribute("src", variables["close"]);_3.setAttribute("alt", "close");_1.append(_3);const _4=document.createTextNode("\r\n");_1.append(_4);_0.append(_1);const _5=document.createTextNode("\r\n");_0.append(_5);const _6=document.createElement("main");const _7=document.createTextNode("\r\n    ");_6.append(_7);const _8=document.createElement("div");_8.setAttribute("class", "loader");_6.append(_8);const _9=document.createTextNode("\r\n    ");_6.append(_9);const _10=document.createElement("h2");const _11=document.createTextNode("Waiting for Confirmation");_10.append(_11);_6.append(_10);const _12=document.createTextNode("\r\n    ");_6.append(_12);const _13=document.createElement("p");_13.setAttribute("class", "subtitle");const _14=document.createTextNode("Sending ");_13.append(_14);const _15=document.createElement("strong");const _16=document.createTextNode("$");_15.append(_16);const _17=document.createTextNode(variables["amountUSD"]);_15.append(_17);_13.append(_15);const _18=document.createTextNode(" (");_13.append(_18);const _19=document.createElement("span");_19.setAttribute("class", "amountCoin");const _20=document.createTextNode("---");_19.append(_20);_13.append(_19);const _21=document.createTextNode(" ");_13.append(_21);const _22=document.createTextNode(variables["token"]);_13.append(_22);const _23=document.createTextNode(") to ");_13.append(_23);const _24=document.createTextNode(variables["identifier"]);_13.append(_24);const _25=document.createElement("img");_25.setAttribute("class", "twitterIcon");_25.setAttribute("src", variables["twitter"]);_25.setAttribute("alt", "");_13.append(_25);_6.append(_13);const _26=document.createTextNode("\r\n    ");_6.append(_26);const _27=document.createElement("p");const _28=document.createTextNode("Confirm this transaction in your wallet");_27.append(_28);_6.append(_27);const _29=document.createTextNode("\r\n");_6.append(_29);_0.append(_6);const _30=document.createTextNode("\r\n");_0.append(_30);const _31=document.createElement("footer");const _32=document.createTextNode("\r\n    ");_31.append(_32);const _33=document.createElement("p");_33.setAttribute("class", "link");const _34=document.createTextNode("\r\n        ");_33.append(_34);const _35=document.createElement("a");_35.setAttribute("href", "https://mirror.xyz/0x88d7709ce401e4E7b5068156423ECB4f60A99F75/gwUi5LU-JIy4ldoKKFC9E4ODZuKfF_cETW2uSZEuPSs");_35.setAttribute("target", "_blank");const _36=document.createTextNode("1% supplies IDriss treasury");_35.append(_36);_33.append(_35);const _37=document.createTextNode("\r\n    ");_33.append(_37);_31.append(_33);const _38=document.createTextNode("\r\n");_31.append(_38);_0.append(_31);return _0}


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

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
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

var __webpack_exports__TippingWaitingConfirmation = __webpack_exports__.TippingWaitingConfirmation;
export { __webpack_exports__TippingWaitingConfirmation as TippingWaitingConfirmation };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QW9COzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxvQkFBb0I7Ozs7OztTQ0FuQztTQUNBOztTQUVBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBOztTQUVBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBOzs7OztVQ3RCQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsaUNBQWlDLFdBQVc7VUFDNUM7VUFDQTs7Ozs7VUNQQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLHlDQUF5Qyx3Q0FBd0M7VUFDakY7VUFDQTtVQUNBOzs7OztVQ1BBOzs7OztVQ0FBO1VBQ0E7VUFDQTtVQUNBLHVEQUF1RCxpQkFBaUI7VUFDeEU7VUFDQSxnREFBZ0QsYUFBYTtVQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ055RDtBQUNUO0FBQ0k7QUFDaEI7QUFDcEM7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLG9EQUFNLFVBQVUsRUFBRSw0RUFBUSxFQUFFLGlCQUFpQiw0RUFBUyx3RkFBbUI7QUFDN0Y7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtY3JlYXRvci9kaXN0L2VudHJ5LmpzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nV2FpdGluZ0NvbmZpcm1hdGlvbi5tcHRzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy9pbWcvY2xvc2Uuc3ZnIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy9pbWcvdHdpdHRlci5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nV2FpdGluZ0NvbmZpcm1hdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5mdW5jdGlvbiBjcmVhdGVGcm9tRGVmaW5pdGlvbigpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghZG9jdW1lbnRPYmplY3QpIGRvY3VtZW50T2JqZWN0ID0gZG9jdW1lbnQ7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnRPYmplY3QuY3JlYXRlRWxlbWVudChhdHRyaWJ1dGVzLnRhZ05hbWUgfHwgJ2RpdicpO1xuICByZXBhaXJDbGFzc2VzKGF0dHJpYnV0ZXMpO1xuXG4gIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXR0cmlidXRlcy5jbGFzc0xpc3QpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciB4ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RleHQnKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdodG1sJykge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2RhdGEnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgYXR0cmlidXRlcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQoeCBpbnN0YW5jZW9mIE5vZGUgPyB4IDogY3JlYXRlKHgsIHt9LCBkb2N1bWVudE9iamVjdCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgICBlbGVtZW50W2F0dHJOYW1lXSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgaWYgKF90eXBlb2YoYXR0cmlidXRlc1thdHRyTmFtZV0pID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdW3N0eWxlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0YWdOYW1lJykgey8vbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gPT09IHRydWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSk7ZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBhaXJDbGFzc2VzKG9iaikge1xuICBpZiAob2JqLmNsYXNzTmFtZSkge1xuICAgIGlmICghb2JqLmNsYXNzTGlzdCkgb2JqLmNsYXNzTGlzdCA9IFtdO1xuICAgIG9iai5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpKSk7XG4gICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gIH1cbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogJHJldHVybnMge29iamVjdH1cclxuICovXG5cblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBzZWxlY3RvciA9IChzZWxlY3RvciArIFwiXCIpLnRyaW0oKTtcbiAgdmFyIHBvc2l0aW9uID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUVsZW1lbnQoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBjYW5CZVRhZ25hbWUgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG4gICAgICBwb3NpdGlvbisrO1xuXG4gICAgICBpZiAoX2NoYXIgPT09ICcjJykge1xuICAgICAgICByZXQuaWQgPSBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICcuJykge1xuICAgICAgICBpZiAoIXJldC5jbGFzc0xpc3QpIHJldC5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgcmV0LmNsYXNzTGlzdC5wdXNoKHBhcnNlVGV4dCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICdbJykge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSBwYXJzZVRleHQoWyc9JywgJ10nXSk7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnPScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXScpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJ10nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoL1xccy8udGVzdChfY2hhcikpIHtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoICYmIC9cXHMvLnRlc3Qoc2VsZWN0b3JbcG9zaXRpb25dKSkge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5jaGlsZHJlbiA9IFtwYXJzZUVsZW1lbnQoKV07XG4gICAgICB9IGVsc2UgaWYgKGNhbkJlVGFnbmFtZSkge1xuICAgICAgICByZXQudGFnTmFtZSA9IF9jaGFyICsgcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNhbkJlVGFnbmFtZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVRleHQoKSB7XG4gICAgdmFyIGVzY2FwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWycuJywgJyMnLCAnLCcsICdbJ107XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMiA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKC9cXHMvLnRlc3QoX2NoYXIyKSB8fCBlc2NhcGUuaW5jbHVkZXMoX2NoYXIyKSkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIyO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIzID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoX2NoYXIzID09ICdcIicpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMztcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyNCA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKCEvXFxzLy50ZXN0KF9jaGFyNCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IFwiXCIpIHJldHVybiB7fTtlbHNlIHJldHVybiBwYXJzZUVsZW1lbnQoKTtcbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgZGVmaW5pdGlvbiA9IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBudWxsO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXNbMF0gPT0gXCJzdHJpbmdcIikgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJzZVNlbGVjdG9yKHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pKTtcbiAgaWYgKF90eXBlb2YocGFyYW1zWzBdKSA9PSBcIm9iamVjdFwiICYmICEocGFyYW1zWzBdIGluc3RhbmNlb2YgTm9kZSkpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyYW1zLnNwbGljZSgwLCAxKVswXSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGFyYW1zID0gcGFyYW1zOyBfaSA8IF9wYXJhbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtc1tfaV07XG5cbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbS5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKCFkZWZpbml0aW9uLmNoaWxkcmVuKSBkZWZpbml0aW9uLmNoaWxkcmVuID0gW107XG4gICAgICBkZWZpbml0aW9uLmNoaWxkcmVuLnB1c2gocGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkb2N1bWVudE9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhhLCBiKSB7XG4gIHJlcGFpckNsYXNzZXMoYSk7XG4gIHJlcGFpckNsYXNzZXMoYik7XG5cbiAgdmFyIHJldCA9IF9vYmplY3RTcHJlYWQoe30sIGEsIHt9LCBiKTtcblxuICBpZiAoYS5kYXRhICYmIGIuZGF0YSkge1xuICAgIHJldC5kYXRhID0gX29iamVjdFNwcmVhZCh7fSwgYS5kYXRhLCB7fSwgYi5kYXRhKTtcbiAgfVxuXG4gIGlmIChhLmNoaWxkcmVuICYmIGIuY2hpbGRyZW4pIHtcbiAgICByZXQuY2hpbGRyZW4gPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2hpbGRyZW4pLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jaGlsZHJlbikpO1xuICB9XG5cbiAgaWYgKGEuY2xhc3NMaXN0ICYmIGIuY2xhc3NMaXN0KSB7XG4gICAgcmV0LmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jbGFzc0xpc3QpKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVGcm9tRGVmaW5pdGlvbjogY3JlYXRlRnJvbURlZmluaXRpb24sXG4gIHBhcnNlU2VsZWN0b3I6IHBhcnNlU2VsZWN0b3IsXG4gIGNyZWF0ZTogY3JlYXRlLFxuICBtZXJnZU9iamVjdHM6IG1lcmdlT2JqZWN0cyxcbiAgXCJkZWZhdWx0XCI6IGNyZWF0ZVxufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YXJpYWJsZXMpe2NvbnN0IF8wPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjb25zdCBfMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO18xLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm9IMVwiKTtjb25zdCBfMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzEuYXBwZW5kKF8yKTtjb25zdCBfMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18zLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VCdXR0b25cIik7XzMuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImNsb3NlXCJdKTtfMy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJjbG9zZVwiKTtfMS5hcHBlbmQoXzMpO2NvbnN0IF80PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18xLmFwcGVuZChfNCk7XzAuYXBwZW5kKF8xKTtjb25zdCBfNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMC5hcHBlbmQoXzUpO2NvbnN0IF82PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO2NvbnN0IF83PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfNi5hcHBlbmQoXzcpO2NvbnN0IF84PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Xzguc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsb2FkZXJcIik7XzYuYXBwZW5kKF84KTtjb25zdCBfOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzYuYXBwZW5kKF85KTtjb25zdCBfMTA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO2NvbnN0IF8xMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIldhaXRpbmcgZm9yIENvbmZpcm1hdGlvblwiKTtfMTAuYXBwZW5kKF8xMSk7XzYuYXBwZW5kKF8xMCk7Y29uc3QgXzEyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfNi5hcHBlbmQoXzEyKTtjb25zdCBfMTM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XzEzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VidGl0bGVcIik7Y29uc3QgXzE0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2VuZGluZyBcIik7XzEzLmFwcGVuZChfMTQpO2NvbnN0IF8xNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3Ryb25nXCIpO2NvbnN0IF8xNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiRcIik7XzE1LmFwcGVuZChfMTYpO2NvbnN0IF8xNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJhbW91bnRVU0RcIl0pO18xNS5hcHBlbmQoXzE3KTtfMTMuYXBwZW5kKF8xNSk7Y29uc3QgXzE4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiIChcIik7XzEzLmFwcGVuZChfMTgpO2NvbnN0IF8xOT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhbW91bnRDb2luXCIpO2NvbnN0IF8yMD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIi0tLVwiKTtfMTkuYXBwZW5kKF8yMCk7XzEzLmFwcGVuZChfMTkpO2NvbnN0IF8yMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBcIik7XzEzLmFwcGVuZChfMjEpO2NvbnN0IF8yMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJ0b2tlblwiXSk7XzEzLmFwcGVuZChfMjIpO2NvbnN0IF8yMz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIikgdG8gXCIpO18xMy5hcHBlbmQoXzIzKTtjb25zdCBfMjQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1wiaWRlbnRpZmllclwiXSk7XzEzLmFwcGVuZChfMjQpO2NvbnN0IF8yNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18yNS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInR3aXR0ZXJJY29uXCIpO18yNS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1widHdpdHRlclwiXSk7XzI1LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfMTMuYXBwZW5kKF8yNSk7XzYuYXBwZW5kKF8xMyk7Y29uc3QgXzI2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfNi5hcHBlbmQoXzI2KTtjb25zdCBfMjc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7Y29uc3QgXzI4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29uZmlybSB0aGlzIHRyYW5zYWN0aW9uIGluIHlvdXIgd2FsbGV0XCIpO18yNy5hcHBlbmQoXzI4KTtfNi5hcHBlbmQoXzI3KTtjb25zdCBfMjk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzYuYXBwZW5kKF8yOSk7XzAuYXBwZW5kKF82KTtjb25zdCBfMzA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzAuYXBwZW5kKF8zMCk7Y29uc3QgXzMxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7Y29uc3QgXzMyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMzEuYXBwZW5kKF8zMik7Y29uc3QgXzMzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO18zMy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtcIik7Y29uc3QgXzM0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzMzLmFwcGVuZChfMzQpO2NvbnN0IF8zNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtfMzUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vbWlycm9yLnh5ei8weDg4ZDc3MDljZTQwMWU0RTdiNTA2ODE1NjQyM0VDQjRmNjBBOTlGNzUvZ3dVaTVMVS1KSXk0bGRvS0tGQzlFNE9EWnVLZkZfY0VUVzJ1U1pFdVBTc1wiKTtfMzUuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO2NvbnN0IF8zNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIjElIHN1cHBsaWVzIElEcmlzcyB0cmVhc3VyeVwiKTtfMzUuYXBwZW5kKF8zNik7XzMzLmFwcGVuZChfMzUpO2NvbnN0IF8zNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzMzLmFwcGVuZChfMzcpO18zMS5hcHBlbmQoXzMzKTtjb25zdCBfMzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzMxLmFwcGVuZChfMzgpO18wLmFwcGVuZChfMzEpO3JldHVybiBfMH1cbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROaUIzTFRZZ2RHVjRkQzFuY21GNUxUVXdNQ0J0YkMxaGRYUnZJaUJtYVd4c1BTSnViMjVsSWcwS0lDQWdJQ0IyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhOMGNtOXJaVDBpSXpaaU56STRNQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXlJaUIzYVdSMGFEMGlNalJ3ZUNJZ2FHVnBaMmgwUFNJeU5IQjRJajROQ2lBZ0lDQThjR0YwYUNCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlHUTlJazAySURFNFRERTRJRFpOTmlBMmJERXlJREV5SWk4K0RRbzhMM04yWno0PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlWVlJHTFRnaVB6NE5DandoTFMwZ1IyVnVaWEpoZEc5eU9pQkJaRzlpWlNCSmJHeDFjM1J5WVhSdmNpQXlOQzR5TGpBc0lGTldSeUJGZUhCdmNuUWdVR3gxWnkxSmJpQXVJRk5XUnlCV1pYSnphVzl1T2lBMkxqQXdJRUoxYVd4a0lEQXBJQ0F0TFQ0TkNqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEc5bmJ5SWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklpQjRiV3h1Y3pwNGJHbHVhejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOTRiR2x1YXlJZ2VEMGlNSEI0SWlCNVBTSXdjSGdpSUhacFpYZENiM2c5SWpBZ01DQXlORGdnTWpBMElpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBeU5EZ2dNakEwT3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStEUW84YzNSNWJHVWdkSGx3WlQwaWRHVjRkQzlqYzNNaVBnMEtDUzV6ZERCN1ptbHNiRG9qTVVRNVFrWXdPMzBOQ2p3dmMzUjViR1UrRFFvOFp5QnBaRDBpVEc5bmIxOHhYeUkrRFFvSlBIQmhkR2dnYVdROUluZG9hWFJsWDJKaFkydG5jbTkxYm1RaUlHTnNZWE56UFNKemREQWlJR1E5SWsweU1qRXVPVFVzTlRFdU1qbGpNQzR4TlN3eUxqRTNMREF1TVRVc05DNHpOQ3d3TGpFMUxEWXVOVE5qTUN3Mk5pNDNNeTAxTUM0NExERTBNeTQyT1MweE5ETXVOamtzTVRRekxqWTVkaTB3TGpBMElDQWdRelV3TGprM0xESXdNUzQxTVN3eU5DNHhMREU1TXk0Mk5Td3hMREUzT0M0NE0yTXpMams1TERBdU5EZ3NPQ3d3TGpjeUxERXlMakF5TERBdU56TmpNakl1TnpRc01DNHdNaXcwTkM0NE15MDNMall4TERZeUxqY3lMVEl4TGpZMklDQWdZeTB5TVM0Mk1TMHdMalF4TFRRd0xqVTJMVEUwTGpVdE5EY3VNVGd0TXpVdU1EZGpOeTQxTnl3eExqUTJMREUxTGpNM0xERXVNVFlzTWpJdU9DMHdMamczUXpJM0xqZ3NNVEUzTGpJc01UQXVPRFVzT1RZdU5Td3hNQzQ0TlN3M01pNDBObU13TFRBdU1qSXNNQzB3TGpRekxEQXRNQzQyTkNBZ0lHTTNMakF5TERNdU9URXNNVFF1T0Rnc05pNHdPQ3d5TWk0NU1pdzJMak15UXpFeExqVTRMRFl6TGpNeExEUXVOelFzTXpNdU56a3NNVGd1TVRRc01UQXVOekZqTWpVdU5qUXNNekV1TlRVc05qTXVORGNzTlRBdU56TXNNVEEwTGpBNExEVXlMamMySUNBZ1l5MDBMakEzTFRFM0xqVTBMREV1TkRrdE16VXVPVElzTVRRdU5qRXRORGd1TWpWak1qQXVNelF0TVRrdU1USXNOVEl1TXpNdE1UZ3VNVFFzTnpFdU5EVXNNaTR4T1dNeE1TNHpNUzB5TGpJekxESXlMakUxTFRZdU16Z3NNekl1TURjdE1USXVNallnSUNCakxUTXVOemNzTVRFdU5qa3RNVEV1TmpZc01qRXVOakl0TWpJdU1pd3lOeTQ1TTJNeE1DNHdNUzB4TGpFNExERTVMamM1TFRNdU9EWXNNamt0Tnk0NU5VTXlOREF1TXpjc016VXVNamtzTWpNeExqZ3pMRFEwTGpFMExESXlNUzQ1TlN3MU1TNHlPWG9pTHo0TkNqd3ZaejROQ2p3dmMzWm5QZzBLXCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL3RpcHBpbmdXYWl0aW5nQ29uZmlybWF0aW9uLm1wdHNcIjtcclxuaW1wb3J0IGNsb3NlIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvY2xvc2Uuc3ZnXCJcclxuaW1wb3J0IHR3aXR0ZXIgZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy90d2l0dGVyLnN2Z1wiXHJcbmltcG9ydCB7Y3JlYXRlfSBmcm9tIFwiZmFzdC1jcmVhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlwcGluZ1dhaXRpbmdDb25maXJtYXRpb24ge1xyXG4gICAgY29uc3RydWN0b3IoaWRlbnRpZmllciwgYW1vdW50VVNELCB0b2tlbikge1xyXG4gICAgICAgIHRoaXMuaHRtbCA9IGNyZWF0ZSgnZGl2Jywge30sIHRlbXBsYXRlKHtpZGVudGlmaWVyLCBjbG9zZSwgdHdpdHRlciwgYW1vdW50VVNELCB0b2tlbn0pKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==