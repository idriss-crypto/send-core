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

/***/ "./src/tippingWaitingApproval.mpts":
/*!*****************************************!*\
  !*** ./src/tippingWaitingApproval.mpts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _172=document.createDocumentFragment();const _173=document.createElement("header");_173.setAttribute("class", "noH1");const _174=document.createTextNode("\r\n    ");_173.append(_174);const _175=document.createElement("img");_175.setAttribute("class", "closeButton");_175.setAttribute("src", variables["close"]);_175.setAttribute("alt", "close");_173.append(_175);const _176=document.createTextNode("\r\n");_173.append(_176);_172.append(_173);const _177=document.createTextNode("\r\n");_172.append(_177);const _178=document.createElement("main");const _179=document.createTextNode("\r\n    ");_178.append(_179);const _180=document.createElement("div");_180.setAttribute("class", "loader");_178.append(_180);const _181=document.createTextNode("\r\n    ");_178.append(_181);const _182=document.createElement("h2");const _183=document.createTextNode("Waiting for Approval");_182.append(_183);_178.append(_182);const _184=document.createTextNode("\r\n    ");_178.append(_184);const _185=document.createElement("p");_185.setAttribute("class", "subtitle");const _186=document.createTextNode("Allow ");_185.append(_186);const _187=document.createElement("strong");const _188=document.createTextNode("IDriss");_187.append(_188);_185.append(_187);const _189=document.createTextNode(" to use your ");_185.append(_189);const _190=document.createTextNode(variables["token"]);_185.append(_190);_178.append(_185);const _191=document.createTextNode("\r\n    ");_178.append(_191);const _192=document.createElement("p");const _193=document.createTextNode("Confirm this transaction in your wallet");_192.append(_193);_178.append(_192);const _194=document.createTextNode("\r\n");_178.append(_194);_172.append(_178);const _195=document.createTextNode("\r\n");_172.append(_195);const _196=document.createElement("footer");const _197=document.createTextNode("\r\n    ");_196.append(_197);const _198=document.createElement("p");_198.setAttribute("class", "link");const _199=document.createTextNode("\r\n        ");_198.append(_199);const _200=document.createElement("a");_200.setAttribute("href", "https://polygonscan.com/address/0xa0665e585038f94cd7092611318326102dcf5b5a#code");_200.setAttribute("target", "_blank");const _201=document.createTextNode("Contract source code");_200.append(_201);_198.append(_200);const _202=document.createTextNode("\r\n    ");_198.append(_202);_196.append(_198);const _203=document.createTextNode("\r\n");_196.append(_203);_172.append(_196);return _172}


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
/*!***************************************!*\
  !*** ./src/tippingWaitingApproval.js ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippingWaitingApproval": () => (/* binding */ TippingWaitingApproval)
/* harmony export */ });
/* harmony import */ var _tippingWaitingApproval_mpts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippingWaitingApproval.mpts */ "./src/tippingWaitingApproval.mpts");
/* harmony import */ var _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!url-loader!./img/close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/close.svg");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_2__);




class TippingWaitingApproval {
    constructor(token) {
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_2__.create)('div', {}, (0,_tippingWaitingApproval_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_1__["default"], token}));
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDTDtBQUNaO0FBQ3BDO0FBQ087QUFDUDtBQUNBLG9CQUFvQixvREFBTSxVQUFVLEVBQUUsd0VBQVEsRUFBRSxLQUFLLDJFQUFRO0FBQzdEO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL25vZGVfbW9kdWxlcy9mYXN0LWNyZWF0b3IvZGlzdC9lbnRyeS5qcyIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ1dhaXRpbmdBcHByb3ZhbC5tcHRzIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy9pbWcvY2xvc2Uuc3ZnIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ1dhaXRpbmdBcHByb3ZhbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5mdW5jdGlvbiBjcmVhdGVGcm9tRGVmaW5pdGlvbigpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghZG9jdW1lbnRPYmplY3QpIGRvY3VtZW50T2JqZWN0ID0gZG9jdW1lbnQ7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnRPYmplY3QuY3JlYXRlRWxlbWVudChhdHRyaWJ1dGVzLnRhZ05hbWUgfHwgJ2RpdicpO1xuICByZXBhaXJDbGFzc2VzKGF0dHJpYnV0ZXMpO1xuXG4gIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXR0cmlidXRlcy5jbGFzc0xpc3QpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciB4ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RleHQnKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdodG1sJykge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2RhdGEnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgYXR0cmlidXRlcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQoeCBpbnN0YW5jZW9mIE5vZGUgPyB4IDogY3JlYXRlKHgsIHt9LCBkb2N1bWVudE9iamVjdCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgICBlbGVtZW50W2F0dHJOYW1lXSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgaWYgKF90eXBlb2YoYXR0cmlidXRlc1thdHRyTmFtZV0pID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdW3N0eWxlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0YWdOYW1lJykgey8vbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gPT09IHRydWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSk7ZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBhaXJDbGFzc2VzKG9iaikge1xuICBpZiAob2JqLmNsYXNzTmFtZSkge1xuICAgIGlmICghb2JqLmNsYXNzTGlzdCkgb2JqLmNsYXNzTGlzdCA9IFtdO1xuICAgIG9iai5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpKSk7XG4gICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gIH1cbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogJHJldHVybnMge29iamVjdH1cclxuICovXG5cblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBzZWxlY3RvciA9IChzZWxlY3RvciArIFwiXCIpLnRyaW0oKTtcbiAgdmFyIHBvc2l0aW9uID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUVsZW1lbnQoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBjYW5CZVRhZ25hbWUgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG4gICAgICBwb3NpdGlvbisrO1xuXG4gICAgICBpZiAoX2NoYXIgPT09ICcjJykge1xuICAgICAgICByZXQuaWQgPSBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICcuJykge1xuICAgICAgICBpZiAoIXJldC5jbGFzc0xpc3QpIHJldC5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgcmV0LmNsYXNzTGlzdC5wdXNoKHBhcnNlVGV4dCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICdbJykge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSBwYXJzZVRleHQoWyc9JywgJ10nXSk7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnPScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXScpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJ10nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoL1xccy8udGVzdChfY2hhcikpIHtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoICYmIC9cXHMvLnRlc3Qoc2VsZWN0b3JbcG9zaXRpb25dKSkge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5jaGlsZHJlbiA9IFtwYXJzZUVsZW1lbnQoKV07XG4gICAgICB9IGVsc2UgaWYgKGNhbkJlVGFnbmFtZSkge1xuICAgICAgICByZXQudGFnTmFtZSA9IF9jaGFyICsgcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNhbkJlVGFnbmFtZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVRleHQoKSB7XG4gICAgdmFyIGVzY2FwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWycuJywgJyMnLCAnLCcsICdbJ107XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMiA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKC9cXHMvLnRlc3QoX2NoYXIyKSB8fCBlc2NhcGUuaW5jbHVkZXMoX2NoYXIyKSkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIyO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIzID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoX2NoYXIzID09ICdcIicpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMztcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyNCA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKCEvXFxzLy50ZXN0KF9jaGFyNCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IFwiXCIpIHJldHVybiB7fTtlbHNlIHJldHVybiBwYXJzZUVsZW1lbnQoKTtcbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgZGVmaW5pdGlvbiA9IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBudWxsO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXNbMF0gPT0gXCJzdHJpbmdcIikgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJzZVNlbGVjdG9yKHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pKTtcbiAgaWYgKF90eXBlb2YocGFyYW1zWzBdKSA9PSBcIm9iamVjdFwiICYmICEocGFyYW1zWzBdIGluc3RhbmNlb2YgTm9kZSkpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyYW1zLnNwbGljZSgwLCAxKVswXSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGFyYW1zID0gcGFyYW1zOyBfaSA8IF9wYXJhbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtc1tfaV07XG5cbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbS5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKCFkZWZpbml0aW9uLmNoaWxkcmVuKSBkZWZpbml0aW9uLmNoaWxkcmVuID0gW107XG4gICAgICBkZWZpbml0aW9uLmNoaWxkcmVuLnB1c2gocGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkb2N1bWVudE9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhhLCBiKSB7XG4gIHJlcGFpckNsYXNzZXMoYSk7XG4gIHJlcGFpckNsYXNzZXMoYik7XG5cbiAgdmFyIHJldCA9IF9vYmplY3RTcHJlYWQoe30sIGEsIHt9LCBiKTtcblxuICBpZiAoYS5kYXRhICYmIGIuZGF0YSkge1xuICAgIHJldC5kYXRhID0gX29iamVjdFNwcmVhZCh7fSwgYS5kYXRhLCB7fSwgYi5kYXRhKTtcbiAgfVxuXG4gIGlmIChhLmNoaWxkcmVuICYmIGIuY2hpbGRyZW4pIHtcbiAgICByZXQuY2hpbGRyZW4gPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2hpbGRyZW4pLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jaGlsZHJlbikpO1xuICB9XG5cbiAgaWYgKGEuY2xhc3NMaXN0ICYmIGIuY2xhc3NMaXN0KSB7XG4gICAgcmV0LmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jbGFzc0xpc3QpKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVGcm9tRGVmaW5pdGlvbjogY3JlYXRlRnJvbURlZmluaXRpb24sXG4gIHBhcnNlU2VsZWN0b3I6IHBhcnNlU2VsZWN0b3IsXG4gIGNyZWF0ZTogY3JlYXRlLFxuICBtZXJnZU9iamVjdHM6IG1lcmdlT2JqZWN0cyxcbiAgXCJkZWZhdWx0XCI6IGNyZWF0ZVxufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YXJpYWJsZXMpe2NvbnN0IF8xNzI9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2NvbnN0IF8xNzM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtfMTczLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm9IMVwiKTtjb25zdCBfMTc0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTczLmFwcGVuZChfMTc0KTtjb25zdCBfMTc1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzE3NS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImNsb3NlQnV0dG9uXCIpO18xNzUuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImNsb3NlXCJdKTtfMTc1LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImNsb3NlXCIpO18xNzMuYXBwZW5kKF8xNzUpO2NvbnN0IF8xNzY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzE3My5hcHBlbmQoXzE3Nik7XzE3Mi5hcHBlbmQoXzE3Myk7Y29uc3QgXzE3Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMTcyLmFwcGVuZChfMTc3KTtjb25zdCBfMTc4PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO2NvbnN0IF8xNzk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xNzguYXBwZW5kKF8xNzkpO2NvbnN0IF8xODA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfMTgwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibG9hZGVyXCIpO18xNzguYXBwZW5kKF8xODApO2NvbnN0IF8xODE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xNzguYXBwZW5kKF8xODEpO2NvbnN0IF8xODI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO2NvbnN0IF8xODM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJXYWl0aW5nIGZvciBBcHByb3ZhbFwiKTtfMTgyLmFwcGVuZChfMTgzKTtfMTc4LmFwcGVuZChfMTgyKTtjb25zdCBfMTg0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTc4LmFwcGVuZChfMTg0KTtjb25zdCBfMTg1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO18xODUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzdWJ0aXRsZVwiKTtjb25zdCBfMTg2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQWxsb3cgXCIpO18xODUuYXBwZW5kKF8xODYpO2NvbnN0IF8xODc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0cm9uZ1wiKTtjb25zdCBfMTg4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSURyaXNzXCIpO18xODcuYXBwZW5kKF8xODgpO18xODUuYXBwZW5kKF8xODcpO2NvbnN0IF8xODk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIgdG8gdXNlIHlvdXIgXCIpO18xODUuYXBwZW5kKF8xODkpO2NvbnN0IF8xOTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1widG9rZW5cIl0pO18xODUuYXBwZW5kKF8xOTApO18xNzguYXBwZW5kKF8xODUpO2NvbnN0IF8xOTE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xNzguYXBwZW5kKF8xOTEpO2NvbnN0IF8xOTI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7Y29uc3QgXzE5Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIkNvbmZpcm0gdGhpcyB0cmFuc2FjdGlvbiBpbiB5b3VyIHdhbGxldFwiKTtfMTkyLmFwcGVuZChfMTkzKTtfMTc4LmFwcGVuZChfMTkyKTtjb25zdCBfMTk0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18xNzguYXBwZW5kKF8xOTQpO18xNzIuYXBwZW5kKF8xNzgpO2NvbnN0IF8xOTU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzE3Mi5hcHBlbmQoXzE5NSk7Y29uc3QgXzE5Nj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO2NvbnN0IF8xOTc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xOTYuYXBwZW5kKF8xOTcpO2NvbnN0IF8xOTg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XzE5OC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImxpbmtcIik7Y29uc3QgXzE5OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xOTguYXBwZW5kKF8xOTkpO2NvbnN0IF8yMDA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XzIwMC5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiaHR0cHM6Ly9wb2x5Z29uc2Nhbi5jb20vYWRkcmVzcy8weGEwNjY1ZTU4NTAzOGY5NGNkNzA5MjYxMTMxODMyNjEwMmRjZjViNWEjY29kZVwiKTtfMjAwLnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtjb25zdCBfMjAxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29udHJhY3Qgc291cmNlIGNvZGVcIik7XzIwMC5hcHBlbmQoXzIwMSk7XzE5OC5hcHBlbmQoXzIwMCk7Y29uc3QgXzIwMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE5OC5hcHBlbmQoXzIwMik7XzE5Ni5hcHBlbmQoXzE5OCk7Y29uc3QgXzIwMz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMTk2LmFwcGVuZChfMjAzKTtfMTcyLmFwcGVuZChfMTk2KTtyZXR1cm4gXzE3Mn1cbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROaUIzTFRZZ2RHVjRkQzFuY21GNUxUVXdNQ0J0YkMxaGRYUnZJaUJtYVd4c1BTSnViMjVsSWcwS0lDQWdJQ0IyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhOMGNtOXJaVDBpSXpaaU56STRNQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXlJaUIzYVdSMGFEMGlNalJ3ZUNJZ2FHVnBaMmgwUFNJeU5IQjRJajROQ2lBZ0lDQThjR0YwYUNCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlHUTlJazAySURFNFRERTRJRFpOTmlBMmJERXlJREV5SWk4K0RRbzhMM04yWno0PVwiIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi90aXBwaW5nV2FpdGluZ0FwcHJvdmFsLm1wdHNcIjtcclxuaW1wb3J0IGNsb3NlIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvY2xvc2Uuc3ZnXCJcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJmYXN0LWNyZWF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXBwaW5nV2FpdGluZ0FwcHJvdmFsIHtcclxuICAgIGNvbnN0cnVjdG9yKHRva2VuKSB7XHJcbiAgICAgICAgdGhpcy5odG1sID0gY3JlYXRlKCdkaXYnLCB7fSwgdGVtcGxhdGUoe2Nsb3NlLCB0b2tlbn0pKTtcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==