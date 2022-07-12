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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _224=document.createDocumentFragment();const _225=document.createElement("header");_225.setAttribute("class", "noH1");const _226=document.createTextNode("\r\n    ");_225.append(_226);const _227=document.createElement("img");_227.setAttribute("class", "closeButton");_227.setAttribute("src", variables["close"]);_227.setAttribute("alt", "close");_225.append(_227);const _228=document.createTextNode("\r\n");_225.append(_228);_224.append(_225);const _229=document.createTextNode("\r\n");_224.append(_229);const _230=document.createElement("main");const _231=document.createTextNode("\r\n    ");_230.append(_231);const _232=document.createElement("div");_232.setAttribute("class", "loader");_230.append(_232);const _233=document.createTextNode("\r\n    ");_230.append(_233);const _234=document.createElement("h2");const _235=document.createTextNode("Waiting for Confirmation");_234.append(_235);_230.append(_234);const _236=document.createTextNode("\r\n    ");_230.append(_236);const _237=document.createElement("p");_237.setAttribute("class", "subtitle");const _238=document.createTextNode("Sending ");_237.append(_238);const _239=document.createElement("strong");const _240=document.createTextNode("$");_239.append(_240);const _241=document.createTextNode(variables["amountUSD"]);_239.append(_241);_237.append(_239);const _242=document.createTextNode(" (");_237.append(_242);const _243=document.createElement("span");_243.setAttribute("class", "amountCoin");const _244=document.createTextNode("---");_243.append(_244);_237.append(_243);const _245=document.createTextNode(" ");_237.append(_245);const _246=document.createTextNode(variables["token"]);_237.append(_246);const _247=document.createTextNode(") to ");_237.append(_247);const _248=document.createTextNode(variables["identifier"]);_237.append(_248);const _249=document.createElement("img");_249.setAttribute("class", "twitterIcon");_249.setAttribute("src", variables["twitter"]);_249.setAttribute("alt", "");_237.append(_249);_230.append(_237);const _250=document.createTextNode("\r\n    ");_230.append(_250);const _251=document.createElement("p");const _252=document.createTextNode("Confirm this transaction in your wallet");_251.append(_252);_230.append(_251);const _253=document.createTextNode("\r\n");_230.append(_253);_224.append(_230);const _254=document.createTextNode("\r\n");_224.append(_254);const _255=document.createElement("footer");const _256=document.createTextNode("\r\n    ");_255.append(_256);const _257=document.createElement("p");_257.setAttribute("class", "link");const _258=document.createTextNode("\r\n        ");_257.append(_258);const _259=document.createElement("a");_259.setAttribute("href", "https://mirror.xyz/0x88d7709ce401e4E7b5068156423ECB4f60A99F75/gwUi5LU-JIy4ldoKKFC9E4ODZuKfF_cETW2uSZEuPSs");_259.setAttribute("target", "_blank");const _260=document.createTextNode("1% supplies IDriss treasury");_259.append(_260);_257.append(_259);const _261=document.createTextNode("\r\n    ");_257.append(_261);_255.append(_257);const _262=document.createTextNode("\r\n");_255.append(_262);_224.append(_255);return _224}


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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWtCOzs7Ozs7Ozs7Ozs7Ozs7QUNEempHLGlFQUFlLG9CQUFvQjs7Ozs7Ozs7Ozs7Ozs7QUNBbkMsaUVBQWUsb0JBQW9COzs7Ozs7U0NBbkM7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLGlDQUFpQyxXQUFXO1VBQzVDO1VBQ0E7Ozs7O1VDUEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOeUQ7QUFDVDtBQUNJO0FBQ2hCO0FBQ3BDO0FBQ087QUFDUDtBQUNBLG9CQUFvQixvREFBTSxVQUFVLEVBQUUsNEVBQVEsRUFBRSxpQkFBaUIsNEVBQVMsd0ZBQW1CO0FBQzdGO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL25vZGVfbW9kdWxlcy9mYXN0LWNyZWF0b3IvZGlzdC9lbnRyeS5qcyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ1dhaXRpbmdDb25maXJtYXRpb24ubXB0cyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL3R3aXR0ZXIuc3ZnIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ1dhaXRpbmdDb25maXJtYXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBkb2N1bWVudE9iamVjdFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnJvbURlZmluaXRpb24oKSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRvY3VtZW50T2JqZWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBpZiAoIWRvY3VtZW50T2JqZWN0KSBkb2N1bWVudE9iamVjdCA9IGRvY3VtZW50O1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50T2JqZWN0LmNyZWF0ZUVsZW1lbnQoYXR0cmlidXRlcy50YWdOYW1lIHx8ICdkaXYnKTtcbiAgcmVwYWlyQ2xhc3NlcyhhdHRyaWJ1dGVzKTtcblxuICBmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKGF0dHJOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBhdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2xhc3NMaXN0Jykge1xuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGF0dHJpYnV0ZXMuY2xhc3NMaXN0KSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgeCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh4KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0ZXh0Jykge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXMudGV4dDtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYXR0cmlidXRlcy5odG1sO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdkYXRhJykge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LmRhdGFzZXQsIGF0dHJpYnV0ZXMuZGF0YSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgYXR0cmlidXRlcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmFwcGVuZENoaWxkKHggaW5zdGFuY2VvZiBOb2RlID8geCA6IGNyZWF0ZSh4LCB7fSwgZG9jdW1lbnRPYmplY3QpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xuICAgICAgZWxlbWVudFthdHRyTmFtZV0gPSBhdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgIGlmIChfdHlwZW9mKGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBhdHRyaWJ1dGVzW2F0dHJOYW1lXSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXVtzdHlsZU5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAndGFnTmFtZScpIHsvL25vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdID09PSB0cnVlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0ck5hbWUpO2Vsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwYWlyQ2xhc3NlcyhvYmopIHtcbiAgaWYgKG9iai5jbGFzc05hbWUpIHtcbiAgICBpZiAoIW9iai5jbGFzc0xpc3QpIG9iai5jbGFzc0xpc3QgPSBbXTtcbiAgICBvYmouY2xhc3NMaXN0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShvYmouY2xhc3NMaXN0KSwgX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc05hbWUuc3BsaXQoJyAnKSkpO1xuICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICB9XG59XG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAqICRyZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgc2VsZWN0b3IgPSAoc2VsZWN0b3IgKyBcIlwiKS50cmltKCk7XG4gIHZhciBwb3NpdGlvbiA9IDA7XG5cbiAgZnVuY3Rpb24gcGFyc2VFbGVtZW50KCkge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICB2YXIgY2FuQmVUYWduYW1lID0gdHJ1ZTtcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuICAgICAgcG9zaXRpb24rKztcblxuICAgICAgaWYgKF9jaGFyID09PSAnIycpIHtcbiAgICAgICAgcmV0LmlkID0gcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnLicpIHtcbiAgICAgICAgaWYgKCFyZXQuY2xhc3NMaXN0KSByZXQuY2xhc3NMaXN0ID0gW107XG4gICAgICAgIHJldC5jbGFzc0xpc3QucHVzaChwYXJzZVRleHQoKSk7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnWycpIHtcbiAgICAgICAgdmFyIGF0dHJOYW1lID0gcGFyc2VUZXh0KFsnPScsICddJ10pO1xuICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJz0nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ1wiJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ10nKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3JbcG9zaXRpb25dID09ICddJykge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgcmV0W2F0dHJOYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKC9cXHMvLnRlc3QoX2NoYXIpKSB7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCAmJiAvXFxzLy50ZXN0KHNlbGVjdG9yW3Bvc2l0aW9uXSkpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXQuY2hpbGRyZW4gPSBbcGFyc2VFbGVtZW50KCldO1xuICAgICAgfSBlbHNlIGlmIChjYW5CZVRhZ25hbWUpIHtcbiAgICAgICAgcmV0LnRhZ05hbWUgPSBfY2hhciArIHBhcnNlVGV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBjYW5CZVRhZ25hbWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VUZXh0KCkge1xuICAgIHZhciBlc2NhcGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnLicsICcjJywgJywnLCAnWyddO1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmICgvXFxzLy50ZXN0KF9jaGFyMikgfHwgZXNjYXBlLmluY2x1ZGVzKF9jaGFyMikpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMjtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlVmFsdWUoKSB7XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMyA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKF9jaGFyMyA9PSAnXCInKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBfY2hhcjM7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwV2hpdGVzcGFjZSgpIHtcbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjQgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmICghL1xccy8udGVzdChfY2hhcjQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBcIlwiKSByZXR1cm4ge307ZWxzZSByZXR1cm4gcGFyc2VFbGVtZW50KCk7XG59XG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBkb2N1bWVudE9iamVjdFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIGRlZmluaXRpb24gPSB7fTtcbiAgdmFyIGRvY3VtZW50T2JqZWN0ID0gbnVsbDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zWzBdID09IFwic3RyaW5nXCIpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyc2VTZWxlY3RvcihwYXJhbXMuc3BsaWNlKDAsIDEpWzBdKSk7XG4gIGlmIChfdHlwZW9mKHBhcmFtc1swXSkgPT0gXCJvYmplY3RcIiAmJiAhKHBhcmFtc1swXSBpbnN0YW5jZW9mIE5vZGUpKSBkZWZpbml0aW9uID0gbWVyZ2VPYmplY3RzKGRlZmluaXRpb24sIHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX3BhcmFtcyA9IHBhcmFtczsgX2kgPCBfcGFyYW1zLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbXNbX2ldO1xuXG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50T2JqZWN0ID0gcGFyYW07XG4gICAgfSBlbHNlIGlmIChwYXJhbSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGRvY3VtZW50T2JqZWN0ID0gcGFyYW0ub3duZXJEb2N1bWVudDtcbiAgICAgIGlmICghZGVmaW5pdGlvbi5jaGlsZHJlbikgZGVmaW5pdGlvbi5jaGlsZHJlbiA9IFtdO1xuICAgICAgZGVmaW5pdGlvbi5jaGlsZHJlbi5wdXNoKHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZG9jdW1lbnRPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMoYSwgYikge1xuICByZXBhaXJDbGFzc2VzKGEpO1xuICByZXBhaXJDbGFzc2VzKGIpO1xuXG4gIHZhciByZXQgPSBfb2JqZWN0U3ByZWFkKHt9LCBhLCB7fSwgYik7XG5cbiAgaWYgKGEuZGF0YSAmJiBiLmRhdGEpIHtcbiAgICByZXQuZGF0YSA9IF9vYmplY3RTcHJlYWQoe30sIGEuZGF0YSwge30sIGIuZGF0YSk7XG4gIH1cblxuICBpZiAoYS5jaGlsZHJlbiAmJiBiLmNoaWxkcmVuKSB7XG4gICAgcmV0LmNoaWxkcmVuID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhLmNoaWxkcmVuKSwgX3RvQ29uc3VtYWJsZUFycmF5KGIuY2hpbGRyZW4pKTtcbiAgfVxuXG4gIGlmIChhLmNsYXNzTGlzdCAmJiBiLmNsYXNzTGlzdCkge1xuICAgIHJldC5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2xhc3NMaXN0KSwgX3RvQ29uc3VtYWJsZUFycmF5KGIuY2xhc3NMaXN0KSk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRnJvbURlZmluaXRpb246IGNyZWF0ZUZyb21EZWZpbml0aW9uLFxuICBwYXJzZVNlbGVjdG9yOiBwYXJzZVNlbGVjdG9yLFxuICBjcmVhdGU6IGNyZWF0ZSxcbiAgbWVyZ2VPYmplY3RzOiBtZXJnZU9iamVjdHMsXG4gIFwiZGVmYXVsdFwiOiBjcmVhdGVcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFyaWFibGVzKXtjb25zdCBfMjI0PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjb25zdCBfMjI1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XzIyNS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vSDFcIik7Y29uc3QgXzIyNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzIyNS5hcHBlbmQoXzIyNik7Y29uc3QgXzIyNz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18yMjcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZUJ1dHRvblwiKTtfMjI3LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJjbG9zZVwiXSk7XzIyNy5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJjbG9zZVwiKTtfMjI1LmFwcGVuZChfMjI3KTtjb25zdCBfMjI4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18yMjUuYXBwZW5kKF8yMjgpO18yMjQuYXBwZW5kKF8yMjUpO2NvbnN0IF8yMjk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzIyNC5hcHBlbmQoXzIyOSk7Y29uc3QgXzIzMD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtjb25zdCBfMjMxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjMwLmFwcGVuZChfMjMxKTtjb25zdCBfMjMyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzIzMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxvYWRlclwiKTtfMjMwLmFwcGVuZChfMjMyKTtjb25zdCBfMjMzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjMwLmFwcGVuZChfMjMzKTtjb25zdCBfMjM0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtjb25zdCBfMjM1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiV2FpdGluZyBmb3IgQ29uZmlybWF0aW9uXCIpO18yMzQuYXBwZW5kKF8yMzUpO18yMzAuYXBwZW5kKF8yMzQpO2NvbnN0IF8yMzY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18yMzAuYXBwZW5kKF8yMzYpO2NvbnN0IF8yMzc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XzIzNy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN1YnRpdGxlXCIpO2NvbnN0IF8yMzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZW5kaW5nIFwiKTtfMjM3LmFwcGVuZChfMjM4KTtjb25zdCBfMjM5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIik7Y29uc3QgXzI0MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiRcIik7XzIzOS5hcHBlbmQoXzI0MCk7Y29uc3QgXzI0MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJhbW91bnRVU0RcIl0pO18yMzkuYXBwZW5kKF8yNDEpO18yMzcuYXBwZW5kKF8yMzkpO2NvbnN0IF8yNDI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgKFwiKTtfMjM3LmFwcGVuZChfMjQyKTtjb25zdCBfMjQzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO18yNDMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhbW91bnRDb2luXCIpO2NvbnN0IF8yNDQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCItLS1cIik7XzI0My5hcHBlbmQoXzI0NCk7XzIzNy5hcHBlbmQoXzI0Myk7Y29uc3QgXzI0NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiBcIik7XzIzNy5hcHBlbmQoXzI0NSk7Y29uc3QgXzI0Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJ0b2tlblwiXSk7XzIzNy5hcHBlbmQoXzI0Nik7Y29uc3QgXzI0Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIikgdG8gXCIpO18yMzcuYXBwZW5kKF8yNDcpO2NvbnN0IF8yNDg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1wiaWRlbnRpZmllclwiXSk7XzIzNy5hcHBlbmQoXzI0OCk7Y29uc3QgXzI0OT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18yNDkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ0d2l0dGVySWNvblwiKTtfMjQ5LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJ0d2l0dGVyXCJdKTtfMjQ5LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfMjM3LmFwcGVuZChfMjQ5KTtfMjMwLmFwcGVuZChfMjM3KTtjb25zdCBfMjUwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjMwLmFwcGVuZChfMjUwKTtjb25zdCBfMjUxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO2NvbnN0IF8yNTI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb25maXJtIHRoaXMgdHJhbnNhY3Rpb24gaW4geW91ciB3YWxsZXRcIik7XzI1MS5hcHBlbmQoXzI1Mik7XzIzMC5hcHBlbmQoXzI1MSk7Y29uc3QgXzI1Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMjMwLmFwcGVuZChfMjUzKTtfMjI0LmFwcGVuZChfMjMwKTtjb25zdCBfMjU0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18yMjQuYXBwZW5kKF8yNTQpO2NvbnN0IF8yNTU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtjb25zdCBfMjU2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjU1LmFwcGVuZChfMjU2KTtjb25zdCBfMjU3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO18yNTcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJsaW5rXCIpO2NvbnN0IF8yNTg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMjU3LmFwcGVuZChfMjU4KTtjb25zdCBfMjU5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO18yNTkuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vbWlycm9yLnh5ei8weDg4ZDc3MDljZTQwMWU0RTdiNTA2ODE1NjQyM0VDQjRmNjBBOTlGNzUvZ3dVaTVMVS1KSXk0bGRvS0tGQzlFNE9EWnVLZkZfY0VUVzJ1U1pFdVBTc1wiKTtfMjU5LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtjb25zdCBfMjYwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiMSUgc3VwcGxpZXMgSURyaXNzIHRyZWFzdXJ5XCIpO18yNTkuYXBwZW5kKF8yNjApO18yNTcuYXBwZW5kKF8yNTkpO2NvbnN0IF8yNjE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18yNTcuYXBwZW5kKF8yNjEpO18yNTUuYXBwZW5kKF8yNTcpO2NvbnN0IF8yNjI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzI1NS5hcHBlbmQoXzI2Mik7XzIyNC5hcHBlbmQoXzI1NSk7cmV0dXJuIF8yMjR9XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnWTJ4aGMzTTlJbWd0TmlCM0xUWWdkR1Y0ZEMxbmNtRjVMVFV3TUNCdGJDMWhkWFJ2SWlCbWFXeHNQU0p1YjI1bElnMEtJQ0FnSUNCMmFXVjNRbTk0UFNJd0lEQWdNalFnTWpRaUlITjBjbTlyWlQwaUl6WmlOekk0TUNJZ2MzUnliMnRsTFhkcFpIUm9QU0l5SWlCM2FXUjBhRDBpTWpSd2VDSWdhR1ZwWjJoMFBTSXlOSEI0SWo0TkNpQWdJQ0E4Y0dGMGFDQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJR1E5SWswMklERTRUREU0SURaTk5pQTJiREV5SURFeUlpOCtEUW84TDNOMlp6ND1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpVlZSR0xUZ2lQejROQ2p3aExTMGdSMlZ1WlhKaGRHOXlPaUJCWkc5aVpTQkpiR3gxYzNSeVlYUnZjaUF5TkM0eUxqQXNJRk5XUnlCRmVIQnZjblFnVUd4MVp5MUpiaUF1SUZOV1J5QldaWEp6YVc5dU9pQTJMakF3SUVKMWFXeGtJREFwSUNBdExUNE5Danh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVRHOW5ieUlnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TkRnZ01qQTBJaUJ6ZEhsc1pUMGlaVzVoWW14bExXSmhZMnRuY205MWJtUTZibVYzSURBZ01DQXlORGdnTWpBME95SWdlRzFzT25Od1lXTmxQU0p3Y21WelpYSjJaU0krRFFvOGMzUjViR1VnZEhsd1pUMGlkR1Y0ZEM5amMzTWlQZzBLQ1M1emREQjdabWxzYkRvak1VUTVRa1l3TzMwTkNqd3ZjM1I1YkdVK0RRbzhaeUJwWkQwaVRHOW5iMTh4WHlJK0RRb0pQSEJoZEdnZ2FXUTlJbmRvYVhSbFgySmhZMnRuY205MWJtUWlJR05zWVhOelBTSnpkREFpSUdROUlrMHlNakV1T1RVc05URXVNamxqTUM0eE5Td3lMakUzTERBdU1UVXNOQzR6TkN3d0xqRTFMRFl1TlROak1DdzJOaTQzTXkwMU1DNDRMREUwTXk0Mk9TMHhORE11Tmprc01UUXpMalk1ZGkwd0xqQTBJQ0FnUXpVd0xqazNMREl3TVM0MU1Td3lOQzR4TERFNU15NDJOU3d4TERFM09DNDRNMk16TGprNUxEQXVORGdzT0N3d0xqY3lMREV5TGpBeUxEQXVOek5qTWpJdU56UXNNQzR3TWl3ME5DNDRNeTAzTGpZeExEWXlMamN5TFRJeExqWTJJQ0FnWXkweU1TNDJNUzB3TGpReExUUXdMalUyTFRFMExqVXRORGN1TVRndE16VXVNRGRqTnk0MU55d3hMalEyTERFMUxqTTNMREV1TVRZc01qSXVPQzB3TGpnM1F6STNMamdzTVRFM0xqSXNNVEF1T0RVc09UWXVOU3d4TUM0NE5TdzNNaTQwTm1Nd0xUQXVNaklzTUMwd0xqUXpMREF0TUM0Mk5DQWdJR00zTGpBeUxETXVPVEVzTVRRdU9EZ3NOaTR3T0N3eU1pNDVNaXcyTGpNeVF6RXhMalU0TERZekxqTXhMRFF1TnpRc016TXVOemtzTVRndU1UUXNNVEF1TnpGak1qVXVOalFzTXpFdU5UVXNOak11TkRjc05UQXVOek1zTVRBMExqQTRMRFV5TGpjMklDQWdZeTAwTGpBM0xURTNMalUwTERFdU5Ea3RNelV1T1RJc01UUXVOakV0TkRndU1qVmpNakF1TXpRdE1Ua3VNVElzTlRJdU16TXRNVGd1TVRRc056RXVORFVzTWk0eE9XTXhNUzR6TVMweUxqSXpMREl5TGpFMUxUWXVNemdzTXpJdU1EY3RNVEl1TWpZZ0lDQmpMVE11Tnpjc01URXVOamt0TVRFdU5qWXNNakV1TmpJdE1qSXVNaXd5Tnk0NU0yTXhNQzR3TVMweExqRTRMREU1TGpjNUxUTXVPRFlzTWprdE55NDVOVU15TkRBdU16Y3NNelV1TWprc01qTXhMamd6TERRMExqRTBMREl5TVM0NU5TdzFNUzR5T1hvaUx6NE5Dand2Wno0TkNqd3ZjM1puUGcwS1wiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi90aXBwaW5nV2FpdGluZ0NvbmZpcm1hdGlvbi5tcHRzXCI7XHJcbmltcG9ydCBjbG9zZSBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2Nsb3NlLnN2Z1wiXHJcbmltcG9ydCB0d2l0dGVyIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvdHdpdHRlci5zdmdcIlxyXG5pbXBvcnQge2NyZWF0ZX0gZnJvbSBcImZhc3QtY3JlYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpcHBpbmdXYWl0aW5nQ29uZmlybWF0aW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIsIGFtb3VudFVTRCwgdG9rZW4pIHtcclxuICAgICAgICB0aGlzLmh0bWwgPSBjcmVhdGUoJ2RpdicsIHt9LCB0ZW1wbGF0ZSh7aWRlbnRpZmllciwgY2xvc2UsIHR3aXR0ZXIsIGFtb3VudFVTRCwgdG9rZW59KSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=