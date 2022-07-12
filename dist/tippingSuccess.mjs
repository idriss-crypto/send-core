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

/***/ "./src/tippingSuccess.mpts":
/*!*********************************!*\
  !*** ./src/tippingSuccess.mpts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _173=document.createDocumentFragment();const _174=document.createElement("header");_174.setAttribute("class", "noH1");const _175=document.createTextNode("\r\n    ");_174.append(_175);const _176=document.createElement("img");_176.setAttribute("class", "closeButton");_176.setAttribute("src", variables["close"]);_176.setAttribute("alt", "close");_174.append(_176);const _177=document.createTextNode("\r\n");_174.append(_177);_173.append(_174);const _178=document.createTextNode("\r\n");_173.append(_178);const _179=document.createElement("main");const _180=document.createTextNode("\r\n    ");_179.append(_180);const _181=document.createElement("img");_181.setAttribute("src", variables["success"]);_181.setAttribute("alt", "");_181.setAttribute("class", "success");_179.append(_181);const _182=document.createTextNode("\r\n    ");_179.append(_182);const _183=document.createElement("h2");const _184=document.createTextNode("Transaction Submitted🥳");_183.append(_184);_179.append(_183);const _185=document.createTextNode("\r\n    ");_179.append(_185);const _186=document.createElement("p");_186.setAttribute("class", "subtitle");const _187=document.createElement("a");_187.setAttribute("href", variables["explorerLink"]);const _188=document.createTextNode("View on Explorer");_187.append(_188);const _189=document.createElement("img");_189.setAttribute("src", variables["link"]);_189.setAttribute("alt", "");_189.setAttribute("class", "linkIcon");_187.append(_189);_186.append(_187);_179.append(_186);const _190=document.createTextNode("\r\n");_179.append(_190);_173.append(_179);const _191=document.createTextNode("\r\n");_173.append(_191);const _192=document.createElement("footer");const _193=document.createTextNode("\r\n    ");_192.append(_193);const _194=document.createElement("button");_194.setAttribute("type", "button");_194.setAttribute("class", "close");const _195=document.createTextNode("\r\n        ");_194.append(_195);const _196=document.createElement("span");const _197=document.createTextNode("Close");_196.append(_197);_194.append(_196);const _198=document.createTextNode("\r\n    ");_194.append(_198);_192.append(_194);const _199=document.createTextNode("\r\n");_192.append(_199);_173.append(_192);return _173}


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
/*!*******************************!*\
  !*** ./src/tippingSuccess.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippingSuccess": () => (/* binding */ TippingSuccess)
/* harmony export */ });
/* harmony import */ var _tippingSuccess_mpts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippingSuccess.mpts */ "./src/tippingSuccess.mpts");
/* harmony import */ var _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!url-loader!./img/close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/close.svg");
/* harmony import */ var _url_loader_img_success_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!url-loader!./img/success.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/success.svg");
/* harmony import */ var _url_loader_img_link_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !!url-loader!./img/link.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/link.svg");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_4__);






class TippingSuccess {
    constructor(identifier, explorerLink) {
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_4__.create)('div', {}, (0,_tippingSuccess_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({identifier, close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"], success: _url_loader_img_success_svg__WEBPACK_IMPORTED_MODULE_2__["default"], link: _url_loader_img_link_svg__WEBPACK_IMPORTED_MODULE_3__["default"], explorerLink}));
        this.html.querySelector('.close')?.addEventListener('click', (e) => {
            this.html.dispatchEvent(Object.assign(new Event('close', {bubbles :true})))
        });
    }
}
})();

var __webpack_exports__TippingSuccess = __webpack_exports__.TippingSuccess;
export { __webpack_exports__TippingSuccess as TippingSuccess };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1NBQ0E7U0FDQTs7U0FFQTtTQUNBOztTQUVBO1NBQ0E7U0FDQTs7Ozs7VUN0QkE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBLGlDQUFpQyxXQUFXO1VBQzVDO1VBQ0E7Ozs7O1VDUEE7VUFDQTtVQUNBO1VBQ0E7VUFDQSx5Q0FBeUMsd0NBQXdDO1VBQ2pGO1VBQ0E7VUFDQTs7Ozs7VUNQQTs7Ozs7VUNBQTtVQUNBO1VBQ0E7VUFDQSx1REFBdUQsaUJBQWlCO1VBQ3hFO1VBQ0EsZ0RBQWdELGFBQWE7VUFDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjZDO0FBQ0c7QUFDSTtBQUNOO0FBQ1Y7QUFDcEM7QUFDTztBQUNQO0FBQ0Esb0JBQW9CLG9EQUFNLFVBQVUsRUFBRSxnRUFBUSxFQUFFLGlCQUFpQiw0RUFBUywyRUFBTSxpRkFBZTtBQUMvRjtBQUNBLHNFQUFzRSxjQUFjO0FBQ3BGLFNBQVM7QUFDVDtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9ub2RlX21vZHVsZXMvZmFzdC1jcmVhdG9yL2Rpc3QvZW50cnkuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdTdWNjZXNzLm1wdHMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9saW5rLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL3N1Y2Nlc3Muc3ZnIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ1N1Y2Nlc3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBpZiAoZW51bWVyYWJsZU9ubHkpIHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KTsga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpZiAoaSAlIDIpIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KTsgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykgeyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpOyB9IGVsc2UgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH07IH0gZWxzZSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTsgfSByZXR1cm4gX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKG8pIHsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwidW5kZWZpbmVkXCIgfHwgb1tTeW1ib2wuaXRlcmF0b3JdID09IG51bGwpIHsgaWYgKEFycmF5LmlzQXJyYXkobykgfHwgKG8gPSBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobykpKSB7IHZhciBpID0gMDsgdmFyIEYgPSBmdW5jdGlvbiBGKCkge307IHJldHVybiB7IHM6IEYsIG46IGZ1bmN0aW9uIG4oKSB7IGlmIChpID49IG8ubGVuZ3RoKSByZXR1cm4geyBkb25lOiB0cnVlIH07IHJldHVybiB7IGRvbmU6IGZhbHNlLCB2YWx1ZTogb1tpKytdIH07IH0sIGU6IGZ1bmN0aW9uIGUoX2UpIHsgdGhyb3cgX2U7IH0sIGY6IEYgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH0gdmFyIGl0LCBub3JtYWxDb21wbGV0aW9uID0gdHJ1ZSwgZGlkRXJyID0gZmFsc2UsIGVycjsgcmV0dXJuIHsgczogZnVuY3Rpb24gcygpIHsgaXQgPSBvW1N5bWJvbC5pdGVyYXRvcl0oKTsgfSwgbjogZnVuY3Rpb24gbigpIHsgdmFyIHN0ZXAgPSBpdC5uZXh0KCk7IG5vcm1hbENvbXBsZXRpb24gPSBzdGVwLmRvbmU7IHJldHVybiBzdGVwOyB9LCBlOiBmdW5jdGlvbiBlKF9lMikgeyBkaWRFcnIgPSB0cnVlOyBlcnIgPSBfZTI7IH0sIGY6IGZ1bmN0aW9uIGYoKSB7IHRyeSB7IGlmICghbm9ybWFsQ29tcGxldGlvbiAmJiBpdFtcInJldHVyblwiXSAhPSBudWxsKSBpdFtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoZGlkRXJyKSB0aHJvdyBlcnI7IH0gfSB9OyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obik7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBkb2N1bWVudE9iamVjdFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAqL1xuZnVuY3Rpb24gY3JlYXRlRnJvbURlZmluaXRpb24oKSB7XG4gIHZhciBhdHRyaWJ1dGVzID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiB7fTtcbiAgdmFyIGRvY3VtZW50T2JqZWN0ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiBudWxsO1xuICBpZiAoIWRvY3VtZW50T2JqZWN0KSBkb2N1bWVudE9iamVjdCA9IGRvY3VtZW50O1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50T2JqZWN0LmNyZWF0ZUVsZW1lbnQoYXR0cmlidXRlcy50YWdOYW1lIHx8ICdkaXYnKTtcbiAgcmVwYWlyQ2xhc3NlcyhhdHRyaWJ1dGVzKTtcblxuICBmb3IgKHZhciBhdHRyTmFtZSBpbiBhdHRyaWJ1dGVzKSB7XG4gICAgaWYgKGF0dHJOYW1lID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgZWxlbWVudC5jbGFzc05hbWUgPSBhdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2xhc3NMaXN0Jykge1xuICAgICAgdmFyIF9pdGVyYXRvciA9IF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyKGF0dHJpYnV0ZXMuY2xhc3NMaXN0KSxcbiAgICAgICAgICBfc3RlcDtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgZm9yIChfaXRlcmF0b3IucygpOyAhKF9zdGVwID0gX2l0ZXJhdG9yLm4oKSkuZG9uZTspIHtcbiAgICAgICAgICB2YXIgeCA9IF9zdGVwLnZhbHVlO1xuICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCh4KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIF9pdGVyYXRvci5lKGVycik7XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBfaXRlcmF0b3IuZigpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0ZXh0Jykge1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGF0dHJpYnV0ZXMudGV4dDtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnaHRtbCcpIHtcbiAgICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gYXR0cmlidXRlcy5odG1sO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdkYXRhJykge1xuICAgICAgT2JqZWN0LmFzc2lnbihlbGVtZW50LmRhdGFzZXQsIGF0dHJpYnV0ZXMuZGF0YSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NoaWxkcmVuJykge1xuICAgICAgYXR0cmlidXRlcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBlbGVtZW50LmFwcGVuZENoaWxkKHggaW5zdGFuY2VvZiBOb2RlID8geCA6IGNyZWF0ZSh4LCB7fSwgZG9jdW1lbnRPYmplY3QpKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnb24nKSkge1xuICAgICAgZWxlbWVudFthdHRyTmFtZV0gPSBhdHRyaWJ1dGVzW2F0dHJOYW1lXTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgIGlmIChfdHlwZW9mKGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSA9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGZvciAodmFyIHN0eWxlTmFtZSBpbiBhdHRyaWJ1dGVzW2F0dHJOYW1lXSkge1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoc3R5bGVOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXVtzdHlsZU5hbWVdKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSAhPT0gZmFsc2UpIHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAndGFnTmFtZScpIHsvL25vdGhpbmdcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdID09PSB0cnVlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0ck5hbWUpO2Vsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gcmVwYWlyQ2xhc3NlcyhvYmopIHtcbiAgaWYgKG9iai5jbGFzc05hbWUpIHtcbiAgICBpZiAoIW9iai5jbGFzc0xpc3QpIG9iai5jbGFzc0xpc3QgPSBbXTtcbiAgICBvYmouY2xhc3NMaXN0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShvYmouY2xhc3NMaXN0KSwgX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc05hbWUuc3BsaXQoJyAnKSkpO1xuICAgIGRlbGV0ZSBvYmouY2xhc3NOYW1lO1xuICB9XG59XG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAqICRyZXR1cm5zIHtvYmplY3R9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIHBhcnNlU2VsZWN0b3Ioc2VsZWN0b3IpIHtcbiAgc2VsZWN0b3IgPSAoc2VsZWN0b3IgKyBcIlwiKS50cmltKCk7XG4gIHZhciBwb3NpdGlvbiA9IDA7XG5cbiAgZnVuY3Rpb24gcGFyc2VFbGVtZW50KCkge1xuICAgIHZhciByZXQgPSB7fTtcbiAgICB2YXIgY2FuQmVUYWduYW1lID0gdHJ1ZTtcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuICAgICAgcG9zaXRpb24rKztcblxuICAgICAgaWYgKF9jaGFyID09PSAnIycpIHtcbiAgICAgICAgcmV0LmlkID0gcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnLicpIHtcbiAgICAgICAgaWYgKCFyZXQuY2xhc3NMaXN0KSByZXQuY2xhc3NMaXN0ID0gW107XG4gICAgICAgIHJldC5jbGFzc0xpc3QucHVzaChwYXJzZVRleHQoKSk7XG4gICAgICB9IGVsc2UgaWYgKF9jaGFyID09PSAnWycpIHtcbiAgICAgICAgdmFyIGF0dHJOYW1lID0gcGFyc2VUZXh0KFsnPScsICddJ10pO1xuICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuXG4gICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJz0nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ1wiJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgdmFyIHZhbHVlID0gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ10nKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc2VsZWN0b3JbcG9zaXRpb25dID09ICddJykge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgcmV0W2F0dHJOYW1lXSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKC9cXHMvLnRlc3QoX2NoYXIpKSB7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCAmJiAvXFxzLy50ZXN0KHNlbGVjdG9yW3Bvc2l0aW9uXSkpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXQuY2hpbGRyZW4gPSBbcGFyc2VFbGVtZW50KCldO1xuICAgICAgfSBlbHNlIGlmIChjYW5CZVRhZ25hbWUpIHtcbiAgICAgICAgcmV0LnRhZ05hbWUgPSBfY2hhciArIHBhcnNlVGV4dCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgfVxuXG4gICAgICBjYW5CZVRhZ25hbWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VUZXh0KCkge1xuICAgIHZhciBlc2NhcGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFsnLicsICcjJywgJywnLCAnWyddO1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmICgvXFxzLy50ZXN0KF9jaGFyMikgfHwgZXNjYXBlLmluY2x1ZGVzKF9jaGFyMikpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMjtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlQXR0cmlidXRlVmFsdWUoKSB7XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMyA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKF9jaGFyMyA9PSAnXCInKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBfY2hhcjM7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBza2lwV2hpdGVzcGFjZSgpIHtcbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjQgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmICghL1xccy8udGVzdChfY2hhcjQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHNlbGVjdG9yID09PSBcIlwiKSByZXR1cm4ge307ZWxzZSByZXR1cm4gcGFyc2VFbGVtZW50KCk7XG59XG4vKipcclxuICpcclxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yXHJcbiAqIEBwYXJhbSB7b2JqZWN0fSBhdHRyaWJ1dGVzXHJcbiAqIEBwYXJhbSBkb2N1bWVudE9iamVjdFxyXG4gKiBAcmV0dXJucyB7SFRNTEVsZW1lbnR9XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGNyZWF0ZSgpIHtcbiAgdmFyIGRlZmluaXRpb24gPSB7fTtcbiAgdmFyIGRvY3VtZW50T2JqZWN0ID0gbnVsbDtcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcGFyYW1zID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIHBhcmFtc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgcGFyYW1zWzBdID09IFwic3RyaW5nXCIpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyc2VTZWxlY3RvcihwYXJhbXMuc3BsaWNlKDAsIDEpWzBdKSk7XG4gIGlmIChfdHlwZW9mKHBhcmFtc1swXSkgPT0gXCJvYmplY3RcIiAmJiAhKHBhcmFtc1swXSBpbnN0YW5jZW9mIE5vZGUpKSBkZWZpbml0aW9uID0gbWVyZ2VPYmplY3RzKGRlZmluaXRpb24sIHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pO1xuXG4gIGZvciAodmFyIF9pID0gMCwgX3BhcmFtcyA9IHBhcmFtczsgX2kgPCBfcGFyYW1zLmxlbmd0aDsgX2krKykge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbXNbX2ldO1xuXG4gICAgaWYgKHBhcmFtIGluc3RhbmNlb2YgRG9jdW1lbnQpIHtcbiAgICAgIGRvY3VtZW50T2JqZWN0ID0gcGFyYW07XG4gICAgfSBlbHNlIGlmIChwYXJhbSBpbnN0YW5jZW9mIE5vZGUpIHtcbiAgICAgIGRvY3VtZW50T2JqZWN0ID0gcGFyYW0ub3duZXJEb2N1bWVudDtcbiAgICAgIGlmICghZGVmaW5pdGlvbi5jaGlsZHJlbikgZGVmaW5pdGlvbi5jaGlsZHJlbiA9IFtdO1xuICAgICAgZGVmaW5pdGlvbi5jaGlsZHJlbi5wdXNoKHBhcmFtKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY3JlYXRlRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgZG9jdW1lbnRPYmplY3QpO1xufVxuXG5mdW5jdGlvbiBtZXJnZU9iamVjdHMoYSwgYikge1xuICByZXBhaXJDbGFzc2VzKGEpO1xuICByZXBhaXJDbGFzc2VzKGIpO1xuXG4gIHZhciByZXQgPSBfb2JqZWN0U3ByZWFkKHt9LCBhLCB7fSwgYik7XG5cbiAgaWYgKGEuZGF0YSAmJiBiLmRhdGEpIHtcbiAgICByZXQuZGF0YSA9IF9vYmplY3RTcHJlYWQoe30sIGEuZGF0YSwge30sIGIuZGF0YSk7XG4gIH1cblxuICBpZiAoYS5jaGlsZHJlbiAmJiBiLmNoaWxkcmVuKSB7XG4gICAgcmV0LmNoaWxkcmVuID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhLmNoaWxkcmVuKSwgX3RvQ29uc3VtYWJsZUFycmF5KGIuY2hpbGRyZW4pKTtcbiAgfVxuXG4gIGlmIChhLmNsYXNzTGlzdCAmJiBiLmNsYXNzTGlzdCkge1xuICAgIHJldC5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2xhc3NMaXN0KSwgX3RvQ29uc3VtYWJsZUFycmF5KGIuY2xhc3NMaXN0KSk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlRnJvbURlZmluaXRpb246IGNyZWF0ZUZyb21EZWZpbml0aW9uLFxuICBwYXJzZVNlbGVjdG9yOiBwYXJzZVNlbGVjdG9yLFxuICBjcmVhdGU6IGNyZWF0ZSxcbiAgbWVyZ2VPYmplY3RzOiBtZXJnZU9iamVjdHMsXG4gIFwiZGVmYXVsdFwiOiBjcmVhdGVcbn07IiwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodmFyaWFibGVzKXtjb25zdCBfMTczPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjb25zdCBfMTc0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XzE3NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5vSDFcIik7Y29uc3QgXzE3NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE3NC5hcHBlbmQoXzE3NSk7Y29uc3QgXzE3Nj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xNzYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZUJ1dHRvblwiKTtfMTc2LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJjbG9zZVwiXSk7XzE3Ni5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJjbG9zZVwiKTtfMTc0LmFwcGVuZChfMTc2KTtjb25zdCBfMTc3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18xNzQuYXBwZW5kKF8xNzcpO18xNzMuYXBwZW5kKF8xNzQpO2NvbnN0IF8xNzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzE3My5hcHBlbmQoXzE3OCk7Y29uc3QgXzE3OT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtjb25zdCBfMTgwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTc5LmFwcGVuZChfMTgwKTtjb25zdCBfMTgxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzE4MS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wic3VjY2Vzc1wiXSk7XzE4MS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzE4MS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInN1Y2Nlc3NcIik7XzE3OS5hcHBlbmQoXzE4MSk7Y29uc3QgXzE4Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE3OS5hcHBlbmQoXzE4Mik7Y29uc3QgXzE4Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7Y29uc3QgXzE4ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlRyYW5zYWN0aW9uIFN1Ym1pdHRlZPCfpbNcIik7XzE4My5hcHBlbmQoXzE4NCk7XzE3OS5hcHBlbmQoXzE4Myk7Y29uc3QgXzE4NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE3OS5hcHBlbmQoXzE4NSk7Y29uc3QgXzE4Nj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtfMTg2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic3VidGl0bGVcIik7Y29uc3QgXzE4Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtfMTg3LnNldEF0dHJpYnV0ZShcImhyZWZcIiwgdmFyaWFibGVzW1wiZXhwbG9yZXJMaW5rXCJdKTtjb25zdCBfMTg4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiVmlldyBvbiBFeHBsb3JlclwiKTtfMTg3LmFwcGVuZChfMTg4KTtjb25zdCBfMTg5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzE4OS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wibGlua1wiXSk7XzE4OS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzE4OS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtJY29uXCIpO18xODcuYXBwZW5kKF8xODkpO18xODYuYXBwZW5kKF8xODcpO18xNzkuYXBwZW5kKF8xODYpO2NvbnN0IF8xOTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzE3OS5hcHBlbmQoXzE5MCk7XzE3My5hcHBlbmQoXzE3OSk7Y29uc3QgXzE5MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMTczLmFwcGVuZChfMTkxKTtjb25zdCBfMTkyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7Y29uc3QgXzE5Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE5Mi5hcHBlbmQoXzE5Myk7Y29uc3QgXzE5ND1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO18xOTQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMTk0LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VcIik7Y29uc3QgXzE5NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xOTQuYXBwZW5kKF8xOTUpO2NvbnN0IF8xOTY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzE5Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNsb3NlXCIpO18xOTYuYXBwZW5kKF8xOTcpO18xOTQuYXBwZW5kKF8xOTYpO2NvbnN0IF8xOTg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xOTQuYXBwZW5kKF8xOTgpO18xOTIuYXBwZW5kKF8xOTQpO2NvbnN0IF8xOTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzE5Mi5hcHBlbmQoXzE5OSk7XzE3My5hcHBlbmQoXzE5Mik7cmV0dXJuIF8xNzN9XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnWTJ4aGMzTTlJbWd0TmlCM0xUWWdkR1Y0ZEMxbmNtRjVMVFV3TUNCdGJDMWhkWFJ2SWlCbWFXeHNQU0p1YjI1bElnMEtJQ0FnSUNCMmFXVjNRbTk0UFNJd0lEQWdNalFnTWpRaUlITjBjbTlyWlQwaUl6WmlOekk0TUNJZ2MzUnliMnRsTFhkcFpIUm9QU0l5SWlCM2FXUjBhRDBpTWpSd2VDSWdhR1ZwWjJoMFBTSXlOSEI0SWo0TkNpQWdJQ0E4Y0dGMGFDQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJR1E5SWswMklERTRUREU0SURaTk5pQTJiREV5SURFeUlpOCtEUW84TDNOMlp6ND1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROU0IzTFRVZ2JYUXRNU0IwWlhoMExXZHlZWGt0TlRBd0lpQjJhV1YzUW05NFBTSXdJREFnTWpBZ01qQWlJR1pwYkd3OUlpTTJZamN5T0RBaVBnMEtJQ0FnSUR4d1lYUm9JR1E5SWsweE1TQXpZVEVnTVNBd0lERXdNQ0F5YURJdU5UZzJiQzAyTGpJNU15QTJMakk1TTJFeElERWdNQ0F4TURFdU5ERTBJREV1TkRFMFRERTFJRFl1TkRFMFZqbGhNU0F4SURBZ01UQXlJREJXTkdFeElERWdNQ0F3TUMweExURm9MVFY2SWo0OEwzQmhkR2crRFFvZ0lDQWdQSEJoZEdnZ1pEMGlUVFVnTldFeUlESWdNQ0F3TUMweUlESjJPR0V5SURJZ01DQXdNRElnTW1nNFlUSWdNaUF3SURBd01pMHlkaTB6WVRFZ01TQXdJREV3TFRJZ01IWXpTRFZXTjJnellURWdNU0F3SURBd01DMHlTRFY2SWo0OEwzQmhkR2crRFFvOEwzTjJaejQ9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnWm1sc2JEMGlibTl1WlNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElpQnpkSEp2YTJVOUlpTXhNV1JrTnpRaUlITjBjbTlyWlMxM2FXUjBhRDBpTVM0MUlqNE5DaUFnSUNBOGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDVJREV5YkRJZ01pQTBMVFJ0TmlBeVlUa2dPU0F3SURFeExURTRJREFnT1NBNUlEQWdNREV4T0NBd2VpSStQQzl3WVhSb1BnMEtQQzl6ZG1jK1wiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi90aXBwaW5nU3VjY2Vzcy5tcHRzXCI7XHJcbmltcG9ydCBjbG9zZSBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2Nsb3NlLnN2Z1wiXHJcbmltcG9ydCBzdWNjZXNzIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvc3VjY2Vzcy5zdmdcIlxyXG5pbXBvcnQgbGluayBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2xpbmsuc3ZnXCJcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJmYXN0LWNyZWF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXBwaW5nU3VjY2VzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyLCBleHBsb3JlckxpbmspIHtcclxuICAgICAgICB0aGlzLmh0bWwgPSBjcmVhdGUoJ2RpdicsIHt9LCB0ZW1wbGF0ZSh7aWRlbnRpZmllciwgY2xvc2UsIHN1Y2Nlc3MsIGxpbmssIGV4cGxvcmVyTGlua30pKTtcclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLmNsb3NlJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5odG1sLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihuZXcgRXZlbnQoJ2Nsb3NlJywge2J1YmJsZXMgOnRydWV9KSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=