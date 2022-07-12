(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, () => {
return /******/ (() => { // webpackBootstrap
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

/***/ "./src/tippingMain.mpts":
/*!******************************!*\
  !*** ./src/tippingMain.mpts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _79=document.createDocumentFragment();const _80=document.createElement("header");const _81=document.createTextNode("\r\n    ");_80.append(_81);const _82=document.createElement("h1");const _83=document.createTextNode("Send to ");_82.append(_83);const _84=document.createTextNode(variables["identifier"]);_82.append(_84);_80.append(_82);const _85=document.createTextNode("\r\n    ");_80.append(_85);const _86=document.createElement("img");_86.setAttribute("class", "closeButton");_86.setAttribute("src", variables["close"]);_86.setAttribute("alt", "close");_80.append(_86);const _87=document.createTextNode("\r\n    ");_80.append(_87);const _88=document.createElement("style");const _89=document.createTextNode("\r\n    ::-webkit-scrollbar {\r\n         width: 6px;\r\n         height: 6px;\r\n         }\r\n         ::-webkit-scrollbar-track {\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.1);\r\n         }\r\n         ::-webkit-scrollbar-thumb{\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.2);\r\n         }\r\n         ::-webkit-scrollbar-thumb:hover{\r\n         background: rgba(0,0,0,0.4);\r\n         }\r\n         ::-webkit-scrollbar-thumb:active{\r\n         background: rgba(0,0,0,.9);\r\n         }\r\n     ");_88.append(_89);_80.append(_88);const _90=document.createTextNode("\r\n");_80.append(_90);_79.append(_80);const _91=document.createTextNode("\r\n");_79.append(_91);const _92=document.createElement("main");const _93=document.createTextNode("\r\n    ");_92.append(_93);const _94=document.createElement("div");_94.setAttribute("class", "valueSelection");const _95=document.createTextNode("\r\n        ");_94.append(_95);const _96=document.createElement("button");_96.setAttribute("type", "button");_96.setAttribute("data-value", "1");_96.setAttribute("class", "isSelected");const _97=document.createTextNode("\r\n            ");_96.append(_97);const _98=document.createElement("span");const _99=document.createTextNode("$1");_98.append(_99);_96.append(_98);const _100=document.createTextNode("\r\n        ");_96.append(_100);_94.append(_96);const _101=document.createTextNode("\r\n\r\n        ");_94.append(_101);const _102=document.createElement("button");_102.setAttribute("type", "button");_102.setAttribute("data-value", "2");const _103=document.createTextNode("\r\n            ");_102.append(_103);const _104=document.createElement("span");const _105=document.createTextNode("$2");_104.append(_105);_102.append(_104);const _106=document.createTextNode("\r\n        ");_102.append(_106);_94.append(_102);const _107=document.createTextNode("\r\n\r\n        ");_94.append(_107);const _108=document.createElement("button");_108.setAttribute("type", "button");_108.setAttribute("data-value", "5");const _109=document.createTextNode("\r\n            ");_108.append(_109);const _110=document.createElement("span");const _111=document.createTextNode("$5");_110.append(_111);_108.append(_110);const _112=document.createTextNode("\r\n        ");_108.append(_112);_94.append(_108);const _113=document.createTextNode("\r\n\r\n        ");_94.append(_113);const _114=document.createElement("div");_114.setAttribute("class", "more");const _115=document.createTextNode("\r\n            ");_114.append(_115);const _116=document.createElement("img");_116.setAttribute("alt", "");_116.setAttribute("src", variables["pen"]);_114.append(_116);const _117=document.createTextNode("\r\n            ");_114.append(_117);const _118=document.createElement("span");const _119=document.createTextNode("$");_118.append(_119);_114.append(_118);const _120=document.createTextNode("\r\n            ");_114.append(_120);const _121=document.createElement("input");_114.append(_121);const _122=document.createTextNode("\r\n        ");_114.append(_122);_94.append(_114);const _123=document.createTextNode("\r\n    ");_94.append(_123);_92.append(_94);const _124=document.createTextNode("\r\n    ");_92.append(_124);const _125=document.createElement("div");_125.setAttribute("class", "select-wrapper");const _126=document.createTextNode("\r\n        ");_125.append(_126);const _127=document.createElement("label");_127.setAttribute("for", "network");const _128=document.createTextNode("Network:");_127.append(_128);_125.append(_127);const _129=document.createTextNode("\r\n        ");_125.append(_129);const _130=document.createElement("div");_130.setAttribute("class", "select networkSelect");_130.setAttribute("data-network", variables["networks"]["0"]["code"]);const _131=document.createTextNode("\r\n            ");_130.append(_131);const _132=document.createElement("button");_132.setAttribute("type", "button");_132.setAttribute("id", "network");const _133=document.createTextNode("\r\n                ");_132.append(_133);const _134=document.createElement("img");_134.setAttribute("src", variables["networks"]["0"]["img"]);_134.setAttribute("alt", "");_132.append(_134);const _135=document.createTextNode("\r\n                ");_132.append(_135);const _136=document.createElement("span");_136.setAttribute("class", "name");const _137=document.createTextNode(variables["networks"]["0"]["name"]);_136.append(_137);_132.append(_136);const _138=document.createTextNode("\r\n                ");_132.append(_138);const _139=document.createElement("img");_139.setAttribute("class", "arrow");_139.setAttribute("src", variables["arrow"]);_132.append(_139);const _140=document.createTextNode("\r\n            ");_132.append(_140);_130.append(_132);const _141=document.createTextNode("\r\n            ");_130.append(_141);const _142=document.createElement("ul");_142.setAttribute("tabindex", "-1");_142.setAttribute("role", "listbox");const _143=document.createTextNode("\r\n                ");_142.append(_143);let _144=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["networks"])){let network = _foreachValue;const _145=document.createTextNode("\r\n                    ");_144.append(_145);const _146=document.createElement("li");_146.setAttribute("role", "option");_146.setAttribute("data-network", network["code"]);const _147=document.createTextNode("\r\n                        ");_146.append(_147);const _148=document.createElement("img");_148.setAttribute("src", network["img"]);_148.setAttribute("alt", "");_146.append(_148);const _149=document.createTextNode("\r\n                        ");_146.append(_149);const _150=document.createElement("span");_150.setAttribute("class", "name");const _151=document.createTextNode(network["name"]);_150.append(_151);_146.append(_150);const _152=document.createTextNode("\r\n                    ");_146.append(_152);_144.append(_146);const _153=document.createTextNode("\r\n                ");_144.append(_153);}_142.append(_144);const _154=document.createTextNode("\r\n            ");_142.append(_154);_130.append(_142);const _155=document.createTextNode("\r\n        ");_130.append(_155);_125.append(_130);const _156=document.createTextNode("\r\n    ");_125.append(_156);_92.append(_125);const _157=document.createTextNode("\r\n    ");_92.append(_157);const _158=document.createElement("div");_158.setAttribute("class", "select-wrapper");const _159=document.createTextNode("\r\n        ");_158.append(_159);const _160=document.createElement("label");_160.setAttribute("for", "tokenButton");const _161=document.createTextNode("Coin:");_160.append(_161);_158.append(_160);const _162=document.createTextNode("\r\n        ");_158.append(_162);const _163=document.createElement("div");_163.setAttribute("class", "select tokenSelect");_163.setAttribute("data-symbol", variables["tokens"]["0"]["symbol"]);const _164=document.createTextNode("\r\n            ");_163.append(_164);const _165=document.createElement("button");_165.setAttribute("type", "button");_165.setAttribute("id", "tokenButton");const _166=document.createTextNode("\r\n                ");_165.append(_166);const _167=document.createElement("img");_167.setAttribute("src", variables["tokens"]["0"]["logoURI"]);_167.setAttribute("alt", "");_165.append(_167);const _168=document.createTextNode("\r\n                ");_165.append(_168);const _169=document.createElement("span");_169.setAttribute("class", "name");const _170=document.createTextNode(variables["tokens"]["0"]["name"]);_169.append(_170);_165.append(_169);const _171=document.createTextNode("\r\n                ");_165.append(_171);const _172=document.createElement("img");_172.setAttribute("class", "arrow");_172.setAttribute("src", variables["arrow"]);_165.append(_172);const _173=document.createTextNode("\r\n            ");_165.append(_173);_163.append(_165);const _174=document.createTextNode("\r\n            ");_163.append(_174);const _175=document.createElement("ul");_175.setAttribute("tabindex", "-1");_175.setAttribute("role", "listbox");const _176=document.createTextNode("\r\n                ");_175.append(_176);let _177=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["tokens"])){let token = _foreachValue;const _178=document.createTextNode("\r\n                    ");_177.append(_178);const _179=document.createElement("li");_179.setAttribute("role", "option");_179.setAttribute("data-network", token["network"]);_179.setAttribute("data-symbol", token["symbol"]);const _180=document.createTextNode("\r\n                        ");_179.append(_180);const _181=document.createElement("img");_181.setAttribute("src", token["logoURI"]);_181.setAttribute("alt", "");_179.append(_181);const _182=document.createTextNode("\r\n                        ");_179.append(_182);const _183=document.createElement("span");_183.setAttribute("class", "name");const _184=document.createTextNode(token["name"]);_183.append(_184);_179.append(_183);const _185=document.createTextNode("\r\n                    ");_179.append(_185);_177.append(_179);const _186=document.createTextNode("\r\n                ");_177.append(_186);}_175.append(_177);const _187=document.createTextNode("\r\n            ");_175.append(_187);_163.append(_175);const _188=document.createTextNode("\r\n        ");_163.append(_188);_158.append(_163);const _189=document.createTextNode("\r\n    ");_158.append(_189);_92.append(_158);const _190=document.createTextNode("\r\n");_92.append(_190);_79.append(_92);const _191=document.createTextNode("\r\n");_79.append(_191);const _192=document.createElement("footer");const _193=document.createTextNode("\r\n    ");_192.append(_193);const _194=document.createElement("button");_194.setAttribute("type", "button");_194.setAttribute("class", "send");const _195=document.createTextNode("\r\n        ");_194.append(_195);const _196=document.createElement("span");const _197=document.createTextNode("Send");_196.append(_197);_194.append(_196);const _198=document.createTextNode("\r\n    ");_194.append(_198);_192.append(_194);const _199=document.createTextNode("\r\n");_192.append(_199);_79.append(_192);return _79}


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/arrow.svg":
/*!*****************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/arrow.svg ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDIwIDIwIiBmaWxsPSIjOWNhM2FmIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4Ij4NCiAgICA8cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiDQogICAgICAgICAgZD0iTTUuMjkzIDcuMjkzYTEgMSAwIDAxMS40MTQgMEwxMCAxMC41ODZsMy4yOTMtMy4yOTNhMSAxIDAgMTExLjQxNCAxLjQxNGwtNCA0YTEgMSAwIDAxLTEuNDE0IDBsLTQtNGExIDEgMCAwMTAtMS40MTR6Ig0KICAgICAgICAgIGNsaXAtcnVsZT0iZXZlbm9kZCIvPg0KPC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/binance-coin-logo.webp":
/*!******************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/binance-coin-logo.webp ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,UklGRnoBAABXRUJQVlA4TG4BAAAvGAAGEL+CoG3bePvPn9R5hYbCtm0bdvz/8BJBtk1ndH+5s40kycnMPVp4mKRACuSfDoX/G+CftUARQIFTCKAQwAA7RAkRBEE4qNEJDUFhlyBYoCTAAqGhI5jwI3jKBiHkoOOPFwoIgmAYxG3o1OoNhR1CCLFihigc0gLMEEIURL3dBWf2GQIItm0db06bWnFSI7Zt26+Y/1R+5esMIvqvwG3UBo5Nd1+BFUc6UdT4cyTDpJqMRWSkgoQmaghoooagLtvJzoDjsq+/lg7H8N3TpebDXtbR/TbTZXZlELBXDrLKXBjp2Ysts6j6eHi/x95YpG3YX4DAoOLnLu7Glp8XTnDGb7E3+knCQ9lXH4Gb/EqWhWvAUTnIINYSkXUReJuJyPQDSG1EpB3SlQf4NagrC0ViUPFZpE9x6elmPwk8eTlTGwb85azvb5k5x8Q/xhv3a3LsxvlSfiNIKL8qJKz+wT9+DgowiQqO/U71/ww=");

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

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/eth_logo.png":
/*!********************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/eth_logo.png ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,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");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/matic-token-icon.webp":
/*!*****************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/matic-token-icon.webp ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/webp;base64,UklGRhwCAABXRUJQVlA4TA8CAAAvGAAGED/kIJIkRaon/255pupJhMO2jRyJH/rvN40lICjyfzS2jSQpqj3rmcn9PD7/rP62DqDOwqgZRSAEkRFGKIoiIwRhFGFujvtvtjmK1+3xn6Ow/ZpA2IpQ/IYdRMgcjtdtjtft8dvrdv2sCLv9RcWMorYjFLYiOH5IMNw2iB2z7SAyw1GE2i+BhIQfKiR0UYlAhIwIxOXdDQEtBDywwAsDfDBBwA4BDQQUCECQbdt09GM7bdu2bdvGid/7sY2Bf3R6BhH9Z+S2jSPJU25l169geHpjqUzF7XBXMqmYlxEzki64wNdVSEdESOScENOZSwhIlvCHKCX5+yIAn58VTZHbRrMA/K9bR99ULNkow6QdoJ87bTL9xBXxCXGkmXge5LpfVT/Xq65dfBNJPp5ygUxKx2/p126TYs9P/YJDUxkAQzUPfiC8rDtgzw/eWV4yZY66RwLQk/XrOZOi+/iHACh7AAxb7/zw+Z+WGpQdIybD9D0BPA6AzEq6zvC+2ixv3fjAaadklgAOD0DuZ4zm0XZF4/KzHwheGYYBeMoAyO9xj9I2f7N2TgF6Z+EoZwAA7MfhpX9bsxICAjdGjkzKBf6G+jdlLfvf5KJPMkXgSsXzEOh7WbBrB2drVAM3BPk4948EEnIxppe17XxSONK8vyoi/T7cevXz/iq/B2Kyfh+vB9U3p/qu/bOd1feZAQA=");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/pen.svg":
/*!***************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/pen.svg ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiID8+DQo8c3ZnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgY2xhc3M9ImgtNSB3LTUiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iIzAwMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj4NCiAgICA8cGF0aCBkPSJNMTMuNTg2IDMuNTg2YTIgMiAwIDExMi44MjggMi44MjhsLS43OTMuNzkzLTIuODI4LTIuODI4Ljc5My0uNzkzek0xMS4zNzkgNS43OTNMMyAxNC4xNzJWMTdoMi44MjhsOC4zOC04LjM3OS0yLjgzLTIuODI4eiIvPg0KPC9zdmc+");

/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/img/usdc_logo.png":
/*!*********************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/img/usdc_logo.png ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADQ0lEQVR4XtXZMW4UQRCFYY7AEZyZC3ABTsAFOAEJiSVHhKQEJISkXAGRI5AQQrLkAAmRmBCcEBAZjYVX8rdV3bUzs7PjX/qTfa97unqN2LXv3VuI45OPP45PPl0VvXT9nSMYapLuv1o8+Nz6vFWw44/3XK7jn0lwsEX1PIvhQQ6t59srPnwtes7Z8YFr1XPPgg9Zu55/Em6+q6dvv2+91vPxy7Orh88/b72+i84xCjetKuY9xbyq8+yEm1XMsNczw15F5yrjRi3fn/32rLew37PF+c8/W/2WzlXCTVr2sF+1h/2WztfExS1b2B1rC7stnTPFhZkZ9uYyw16mc4a4KDPDXqaYZ2bYy3TeW1S/1WXYaynmLTPsZTr3BouRGfZ6innPDHuRzr3BYmSEnYpiXjHCTuTRsy/3nX3R4aO9zKtG2Il0/lEXYN6ziut6innk5OEH7GSOwT1aRtiJnHQB5i3H4j4txTyyfAERdjIj7GTdJ6/PtzqZEXZ09AWYtxRzFfOWYq7/h+9/+BHzzOEdFDsq5i3FPLL77j998819tzqZr95duHSrM6cyfEW3o90LEPOeYj63Yq6LX8AN9uZSzPVgFxDh2jGKue79AqI9KrhHVTHXRS4g26uH6yuKuS56ATcOv/Ov4tqeYq4HuYDIi19/fdQ19nqKua7mAm6MsNNSzHV1FxD9fcFOSzHX4QIufVHFPFPMM8U8U8wj9/plSMwjI+xkirnu/dtghB0V85ZirqMvYMBOZoSdMV2NsKPlCxgU88xd/s8X92op5pGbC6hcQoSdlrvi+pYRdvTW8JULGBTznhVcU1HMI53/GksaYaeqmFeNsKMPTj8cOfs1FiMj7FQU84oRdiKde8Nx4UPRYISdnmLeM8JOpnPfwnJkhr2WYt4yw16k84a4KDLD3txm2IsM/yga4cLMFnan2sJupnM2cXFmD/u72sN+pvOVcJOWPez37PHoxdetNZnOVcaNeraw27OF3Z7OtRNuVjHCTs8IOxWdZxRuWnXK4aesvdE5JuHma9fzz4IPWauee3Z84Fr0nHvFhx9az7cYHmRpyx9v94mHWkrPcXCGd8NDzm36y4y14cGn6v53Dgfq6fp98Q/twpmau6HU4QAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/tippingUtils.js":
/*!*****************************!*\
  !*** ./src/tippingUtils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "tokens": () => (/* binding */ tokens)
/* harmony export */ });
const tokens = [
    {
        "chainId": 1,
        "network": "ETH",
        "name": "Ethereum",
        "symbol": "ETH",
        "decimals": 18,
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png"
    },
    {
        "chainId": 137,
        "network": "Polygon",
        "name": "MATIC",
        "symbol": "MATIC",
        "decimals": 18,
        "logoURI": "https://polygonscan.com/token/images/matic_32.png"
    },
    {
        "chainId": 56,
        "network": "BSC",
        "name": "BNB",
        "symbol": "BNB",
        "decimals": 18,
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png"
    },
    {
        "address": "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        "chainId": 1,
        "network": "ETH",
        "name": "USD Coin",
        "symbol": "USDC",
        "decimals": 6,
        "logoURI": "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png"
    },
    {
        "chainId": 137,
        "network": "Polygon",
        "name": "USD Coin",
        "symbol": "USDC",
        "decimals": 6,
        "address": "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        "logoURI": "https://wallet-asset.matic.network/img/tokens/usdc.svg"
    },
    {
        "chainId": 56,
        "network": "BSC",
        "name": "USD Coin",
        "symbol": "USDC",
        "decimals": 18,
        "address": "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        "logoURI": "https://wallet-asset.matic.network/img/tokens/usdc.svg"
    },
    {
        "chainId": 137,
        "network": "Polygon",
        "name": "ETH on Polygon",
        "symbol": "WETH",
        "decimals": 18,
        "address": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        "logoURI": "https://polygonscan.com/token/images/wETH_32.png"
    },
    {
        "chainId": 56,
        "network": "BSC",
        "name": "ETH on BSC",
        "symbol": "WETH",
        "decimals": 18,
        "address": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        "logoURI": "https://polygonscan.com/token/images/wETH_32.png"
    },
    {
        "address": "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        "chainId": 1,
        "network": "ETH",
        "name": "Dai",
        "symbol": "DAI",
        "decimals": 18,
        "logoURI": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
    },
    {
        "address": "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        "chainId": 56,
        "network": "BSC",
        "name": "Dai",
        "symbol": "DAI",
        "decimals": 18,
        "logoURI": "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png"
    },
    {
        "chainId": 137,
        "network": "Polygon",
        "name": "Dai",
        "symbol": "DAI",
        "decimals": 18,
        "address": "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        "logoURI": "https://wallet-asset.matic.network/img/tokens/dai.svg"
    },
    {
        "address": "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        "chainId": 1,
        "network": "ETH",
        "name": "Tether",
        "symbol": "USDT",
        "decimals": 6,
        "logoURI": "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png"
    },
    {
        "chainId": 137,
        "network": "Polygon",
        "name": "Tether",
        "symbol": "USDT",
        "decimals": 6,
        "address": "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        "logoURI": "https://wallet-asset.matic.network/img/tokens/usdt.svg"
    },
    {
        "name": "Dogecoin",
        "symbol": "DOGE",
        "address": "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        "chainId": 56,
        "network": "BSC",
        "decimals": 8,
        "logoURI": "https://tokens.pancakeswap.finance/images/0xbA2aE424d960c26247Dd6c32edC70B295c744C43.png"
    },
    {
        "name": "Cult DAO",
        "symbol": "CULT",
        "address": "0xf0f9d895aca5c8678f706fb8216fa22957685a13",
        "chainId": 1,
        "network": "ETH",
        "decimals": 18,
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/17742.png"
    },
    {
        "name": "Revolt 2 Earn",
        "symbol": "RVLT",
        "address": "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
        "chainId": 137,
        "network": "Polygon",
        "decimals": 18,
        "logoURI": "https://s2.coinmarketcap.com/static/img/coins/64x64/19893.png"
    },
]

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
/*!****************************!*\
  !*** ./src/tippingMain.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippingMain": () => (/* binding */ TippingMain)
/* harmony export */ });
/* harmony import */ var _tippingMain_mpts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippingMain.mpts */ "./src/tippingMain.mpts");
/* harmony import */ var _url_loader_img_eth_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!url-loader!./img/eth_logo.png */ "./node_modules/url-loader/dist/cjs.js!./src/img/eth_logo.png");
/* harmony import */ var _url_loader_img_usdc_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!url-loader!./img/usdc_logo.png */ "./node_modules/url-loader/dist/cjs.js!./src/img/usdc_logo.png");
/* harmony import */ var _url_loader_img_arrow_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !!url-loader!./img/arrow.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/arrow.svg");
/* harmony import */ var _url_loader_img_pen_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!url-loader!./img/pen.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/pen.svg");
/* harmony import */ var _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !!url-loader!./img/close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/close.svg");
/* harmony import */ var _url_loader_img_matic_token_icon_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!url-loader!./img/matic-token-icon.webp */ "./node_modules/url-loader/dist/cjs.js!./src/img/matic-token-icon.webp");
/* harmony import */ var _url_loader_img_binance_coin_logo_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! !!url-loader!./img/binance-coin-logo.webp */ "./node_modules/url-loader/dist/cjs.js!./src/img/binance-coin-logo.webp");
/* harmony import */ var _tippingUtils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tippingUtils */ "./src/tippingUtils.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_9__);











class TippingMain {
    constructor(identifier) {
        const networks = [
            {name: 'Polygon ', img: _url_loader_img_matic_token_icon_webp__WEBPACK_IMPORTED_MODULE_6__["default"], chainId: 137, code: 'Polygon'},
            {name: 'Ethereum', img: _url_loader_img_eth_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"], chainId: 1, code: 'ETH'},
            {name: 'BSC', img: _url_loader_img_binance_coin_logo_webp__WEBPACK_IMPORTED_MODULE_7__["default"], chainId: 56, code: 'BSC'},
        ]
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_9__.create)('div', {}, (0,_tippingMain_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({identifier, networks, tokens: _tippingUtils__WEBPACK_IMPORTED_MODULE_8__.tokens, eth_logo: _url_loader_img_eth_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"], usdc_logo: _url_loader_img_usdc_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"], arrow: _url_loader_img_arrow_svg__WEBPACK_IMPORTED_MODULE_3__["default"], pen: _url_loader_img_pen_svg__WEBPACK_IMPORTED_MODULE_4__["default"], close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_5__["default"]}));

        this.html.querySelectorAll('.select').forEach(select => {
            select.onclick = e => select.classList.toggle('isOpen')
            select.onblur = e => select.classList.remove('isOpen')
            select.onclick = e => select.firstElementChild.focus();
        })
        this.html.querySelectorAll('.select ul li').forEach(li => {
            li.onclick = e => {
                e.stopPropagation();
                const button = li.parentNode.parentNode.querySelector('button')
                button.querySelector('.name').textContent = li.querySelector('.name').textContent;
                button.querySelector('img').src = li.querySelector('img').src;
                Object.assign(button.parentNode.dataset, li.dataset);
                li.parentNode.parentNode.classList.remove('isOpen')
                this.html.querySelector(':focus')?.blur()
                this.refreshVisibleCoins()
            }
        })
        this.html.querySelector('.send')?.addEventListener('click', (e) => {
            let network = this.html.querySelector('.networkSelect').dataset.network;
            let token = this.html.querySelector('.tokenSelect').dataset.symbol;
            let amount = this.html.querySelector('.valueSelection .isSelected input')?.value || this.html.querySelector('.valueSelection .isSelected').dataset.value;
            this.html.dispatchEvent(Object.assign(new Event('sendMoney', {bubbles: true}), {
                identifier,
                network,
                amount,
                token
            }))
        });
        this.html.querySelectorAll('.valueSelection > *').forEach(b => {
            b.onclick = e => {
                this.html.querySelectorAll('.valueSelection  > *').forEach(x => x.classList.remove('isSelected'))
                b.classList.add('isSelected')
                b.querySelector('input')?.focus();
            }
        })
        this.refreshVisibleCoins();
    }

    refreshVisibleCoins() {
        let network = this.html.querySelector('.networkSelect').dataset.network;
        let tokens = this.html.querySelectorAll('.tokenSelect li')
        for (let token of tokens) {
            token.style.display = token.dataset.network == network ? '' : 'none';
        }
        if (this.html.querySelector('.tokenSelect').dataset.network != network) {
            this.html.querySelector(`.tokenSelect li[data-network="${network}"]`).click();
        }
    }
}
})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDQW5DLGlFQUFlLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7QUNBeEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7VUM5SUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDWTtBQUNFO0FBQ1I7QUFDSjtBQUNJO0FBQ3FCO0FBQ0U7QUFDakM7QUFDRjtBQUNwQztBQUNPO0FBQ1A7QUFDQTtBQUNBLGFBQWEsdUJBQXVCLDZFQUFjLGdDQUFnQztBQUNsRixhQUFhLHVCQUF1QixvRUFBUSwwQkFBMEI7QUFDdEUsYUFBYSxrQkFBa0IsOEVBQWUsMkJBQTJCO0FBQ3pFO0FBQ0Esb0JBQW9CLG9EQUFNLFVBQVUsRUFBRSw2REFBUSxFQUFFLDRCQUE0Qiw2REFBVSxpRkFBVyw4RUFBTyx3RUFBSyx3RUFBTyxvRUFBQztBQUNySDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwRUFBMEUsY0FBYztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUVBQXFFLFFBQVE7QUFDN0U7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL25vZGVfbW9kdWxlcy9mYXN0LWNyZWF0b3IvZGlzdC9lbnRyeS5qcyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ01haW4ubXB0cyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2Fycm93LnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2JpbmFuY2UtY29pbi1sb2dvLndlYnAiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9ldGhfbG9nby5wbmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9tYXRpYy10b2tlbi1pY29uLndlYnAiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9wZW4uc3ZnIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy9pbWcvdXNkY19sb2dvLnBuZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ1V0aWxzLmpzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvdGlwcGluZ01haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIHtcblx0XHR2YXIgYSA9IGZhY3RvcnkoKTtcblx0XHRmb3IodmFyIGkgaW4gYSkgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyA/IGV4cG9ydHMgOiByb290KVtpXSA9IGFbaV07XG5cdH1cbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5mdW5jdGlvbiBjcmVhdGVGcm9tRGVmaW5pdGlvbigpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghZG9jdW1lbnRPYmplY3QpIGRvY3VtZW50T2JqZWN0ID0gZG9jdW1lbnQ7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnRPYmplY3QuY3JlYXRlRWxlbWVudChhdHRyaWJ1dGVzLnRhZ05hbWUgfHwgJ2RpdicpO1xuICByZXBhaXJDbGFzc2VzKGF0dHJpYnV0ZXMpO1xuXG4gIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXR0cmlidXRlcy5jbGFzc0xpc3QpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciB4ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RleHQnKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdodG1sJykge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2RhdGEnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgYXR0cmlidXRlcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQoeCBpbnN0YW5jZW9mIE5vZGUgPyB4IDogY3JlYXRlKHgsIHt9LCBkb2N1bWVudE9iamVjdCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgICBlbGVtZW50W2F0dHJOYW1lXSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgaWYgKF90eXBlb2YoYXR0cmlidXRlc1thdHRyTmFtZV0pID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdW3N0eWxlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0YWdOYW1lJykgey8vbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gPT09IHRydWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSk7ZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBhaXJDbGFzc2VzKG9iaikge1xuICBpZiAob2JqLmNsYXNzTmFtZSkge1xuICAgIGlmICghb2JqLmNsYXNzTGlzdCkgb2JqLmNsYXNzTGlzdCA9IFtdO1xuICAgIG9iai5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpKSk7XG4gICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gIH1cbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogJHJldHVybnMge29iamVjdH1cclxuICovXG5cblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBzZWxlY3RvciA9IChzZWxlY3RvciArIFwiXCIpLnRyaW0oKTtcbiAgdmFyIHBvc2l0aW9uID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUVsZW1lbnQoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBjYW5CZVRhZ25hbWUgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG4gICAgICBwb3NpdGlvbisrO1xuXG4gICAgICBpZiAoX2NoYXIgPT09ICcjJykge1xuICAgICAgICByZXQuaWQgPSBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICcuJykge1xuICAgICAgICBpZiAoIXJldC5jbGFzc0xpc3QpIHJldC5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgcmV0LmNsYXNzTGlzdC5wdXNoKHBhcnNlVGV4dCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICdbJykge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSBwYXJzZVRleHQoWyc9JywgJ10nXSk7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnPScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXScpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJ10nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoL1xccy8udGVzdChfY2hhcikpIHtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoICYmIC9cXHMvLnRlc3Qoc2VsZWN0b3JbcG9zaXRpb25dKSkge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5jaGlsZHJlbiA9IFtwYXJzZUVsZW1lbnQoKV07XG4gICAgICB9IGVsc2UgaWYgKGNhbkJlVGFnbmFtZSkge1xuICAgICAgICByZXQudGFnTmFtZSA9IF9jaGFyICsgcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNhbkJlVGFnbmFtZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVRleHQoKSB7XG4gICAgdmFyIGVzY2FwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWycuJywgJyMnLCAnLCcsICdbJ107XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMiA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKC9cXHMvLnRlc3QoX2NoYXIyKSB8fCBlc2NhcGUuaW5jbHVkZXMoX2NoYXIyKSkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIyO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIzID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoX2NoYXIzID09ICdcIicpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMztcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyNCA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKCEvXFxzLy50ZXN0KF9jaGFyNCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IFwiXCIpIHJldHVybiB7fTtlbHNlIHJldHVybiBwYXJzZUVsZW1lbnQoKTtcbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgZGVmaW5pdGlvbiA9IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBudWxsO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXNbMF0gPT0gXCJzdHJpbmdcIikgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJzZVNlbGVjdG9yKHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pKTtcbiAgaWYgKF90eXBlb2YocGFyYW1zWzBdKSA9PSBcIm9iamVjdFwiICYmICEocGFyYW1zWzBdIGluc3RhbmNlb2YgTm9kZSkpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyYW1zLnNwbGljZSgwLCAxKVswXSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGFyYW1zID0gcGFyYW1zOyBfaSA8IF9wYXJhbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtc1tfaV07XG5cbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbS5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKCFkZWZpbml0aW9uLmNoaWxkcmVuKSBkZWZpbml0aW9uLmNoaWxkcmVuID0gW107XG4gICAgICBkZWZpbml0aW9uLmNoaWxkcmVuLnB1c2gocGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkb2N1bWVudE9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhhLCBiKSB7XG4gIHJlcGFpckNsYXNzZXMoYSk7XG4gIHJlcGFpckNsYXNzZXMoYik7XG5cbiAgdmFyIHJldCA9IF9vYmplY3RTcHJlYWQoe30sIGEsIHt9LCBiKTtcblxuICBpZiAoYS5kYXRhICYmIGIuZGF0YSkge1xuICAgIHJldC5kYXRhID0gX29iamVjdFNwcmVhZCh7fSwgYS5kYXRhLCB7fSwgYi5kYXRhKTtcbiAgfVxuXG4gIGlmIChhLmNoaWxkcmVuICYmIGIuY2hpbGRyZW4pIHtcbiAgICByZXQuY2hpbGRyZW4gPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2hpbGRyZW4pLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jaGlsZHJlbikpO1xuICB9XG5cbiAgaWYgKGEuY2xhc3NMaXN0ICYmIGIuY2xhc3NMaXN0KSB7XG4gICAgcmV0LmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jbGFzc0xpc3QpKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVGcm9tRGVmaW5pdGlvbjogY3JlYXRlRnJvbURlZmluaXRpb24sXG4gIHBhcnNlU2VsZWN0b3I6IHBhcnNlU2VsZWN0b3IsXG4gIGNyZWF0ZTogY3JlYXRlLFxuICBtZXJnZU9iamVjdHM6IG1lcmdlT2JqZWN0cyxcbiAgXCJkZWZhdWx0XCI6IGNyZWF0ZVxufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YXJpYWJsZXMpe2NvbnN0IF83OT1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Y29uc3QgXzgwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7Y29uc3QgXzgxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfODAuYXBwZW5kKF84MSk7Y29uc3QgXzgyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtjb25zdCBfODM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZW5kIHRvIFwiKTtfODIuYXBwZW5kKF84Myk7Y29uc3QgXzg0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcImlkZW50aWZpZXJcIl0pO184Mi5hcHBlbmQoXzg0KTtfODAuYXBwZW5kKF84Mik7Y29uc3QgXzg1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfODAuYXBwZW5kKF84NSk7Y29uc3QgXzg2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7Xzg2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VCdXR0b25cIik7Xzg2LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJjbG9zZVwiXSk7Xzg2LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImNsb3NlXCIpO184MC5hcHBlbmQoXzg2KTtjb25zdCBfODc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO184MC5hcHBlbmQoXzg3KTtjb25zdCBfODg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2NvbnN0IF84OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZle1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjkpO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgIFwiKTtfODguYXBwZW5kKF84OSk7XzgwLmFwcGVuZChfODgpO2NvbnN0IF85MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfODAuYXBwZW5kKF85MCk7Xzc5LmFwcGVuZChfODApO2NvbnN0IF85MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfNzkuYXBwZW5kKF85MSk7Y29uc3QgXzkyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO2NvbnN0IF85Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzkyLmFwcGVuZChfOTMpO2NvbnN0IF85ND1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO185NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInZhbHVlU2VsZWN0aW9uXCIpO2NvbnN0IF85NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO185NC5hcHBlbmQoXzk1KTtjb25zdCBfOTY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfOTYuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfOTYuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIjFcIik7Xzk2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXNTZWxlY3RlZFwiKTtjb25zdCBfOTc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7Xzk2LmFwcGVuZChfOTcpO2NvbnN0IF85OD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfOTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkMVwiKTtfOTguYXBwZW5kKF85OSk7Xzk2LmFwcGVuZChfOTgpO2NvbnN0IF8xMDA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfOTYuYXBwZW5kKF8xMDApO185NC5hcHBlbmQoXzk2KTtjb25zdCBfMTAxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7Xzk0LmFwcGVuZChfMTAxKTtjb25zdCBfMTAyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzEwMi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18xMDIuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIjJcIik7Y29uc3QgXzEwMz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTAyLmFwcGVuZChfMTAzKTtjb25zdCBfMTA0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8xMDU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkMlwiKTtfMTA0LmFwcGVuZChfMTA1KTtfMTAyLmFwcGVuZChfMTA0KTtjb25zdCBfMTA2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEwMi5hcHBlbmQoXzEwNik7Xzk0LmFwcGVuZChfMTAyKTtjb25zdCBfMTA3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7Xzk0LmFwcGVuZChfMTA3KTtjb25zdCBfMTA4PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzEwOC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18xMDguc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIjVcIik7Y29uc3QgXzEwOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTA4LmFwcGVuZChfMTA5KTtjb25zdCBfMTEwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8xMTE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkNVwiKTtfMTEwLmFwcGVuZChfMTExKTtfMTA4LmFwcGVuZChfMTEwKTtjb25zdCBfMTEyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEwOC5hcHBlbmQoXzExMik7Xzk0LmFwcGVuZChfMTA4KTtjb25zdCBfMTEzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7Xzk0LmFwcGVuZChfMTEzKTtjb25zdCBfMTE0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzExNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vcmVcIik7Y29uc3QgXzExNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTE0LmFwcGVuZChfMTE1KTtjb25zdCBfMTE2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzExNi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzExNi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wicGVuXCJdKTtfMTE0LmFwcGVuZChfMTE2KTtjb25zdCBfMTE3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMTQuYXBwZW5kKF8xMTcpO2NvbnN0IF8xMTg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzExOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiRcIik7XzExOC5hcHBlbmQoXzExOSk7XzExNC5hcHBlbmQoXzExOCk7Y29uc3QgXzEyMD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTE0LmFwcGVuZChfMTIwKTtjb25zdCBfMTIxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtfMTE0LmFwcGVuZChfMTIxKTtjb25zdCBfMTIyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzExNC5hcHBlbmQoXzEyMik7Xzk0LmFwcGVuZChfMTE0KTtjb25zdCBfMTIzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfOTQuYXBwZW5kKF8xMjMpO185Mi5hcHBlbmQoXzk0KTtjb25zdCBfMTI0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfOTIuYXBwZW5kKF8xMjQpO2NvbnN0IF8xMjU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfMTI1LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0LXdyYXBwZXJcIik7Y29uc3QgXzEyNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xMjUuYXBwZW5kKF8xMjYpO2NvbnN0IF8xMjc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO18xMjcuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwibmV0d29ya1wiKTtjb25zdCBfMTI4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTmV0d29yazpcIik7XzEyNy5hcHBlbmQoXzEyOCk7XzEyNS5hcHBlbmQoXzEyNyk7Y29uc3QgXzEyOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xMjUuYXBwZW5kKF8xMjkpO2NvbnN0IF8xMzA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfMTMwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0IG5ldHdvcmtTZWxlY3RcIik7XzEzMC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5ldHdvcmtcIiwgdmFyaWFibGVzW1wibmV0d29ya3NcIl1bXCIwXCJdW1wiY29kZVwiXSk7Y29uc3QgXzEzMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTMwLmFwcGVuZChfMTMxKTtjb25zdCBfMTMyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzEzMi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18xMzIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXR3b3JrXCIpO2NvbnN0IF8xMzM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xMzIuYXBwZW5kKF8xMzMpO2NvbnN0IF8xMzQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTM0LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJpbWdcIl0pO18xMzQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18xMzIuYXBwZW5kKF8xMzQpO2NvbnN0IF8xMzU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xMzIuYXBwZW5kKF8xMzUpO2NvbnN0IF8xMzY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XzEzNi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hbWVcIik7Y29uc3QgXzEzNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJuYW1lXCJdKTtfMTM2LmFwcGVuZChfMTM3KTtfMTMyLmFwcGVuZChfMTM2KTtjb25zdCBfMTM4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTMyLmFwcGVuZChfMTM4KTtjb25zdCBfMTM5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzEzOS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO18xMzkuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImFycm93XCJdKTtfMTMyLmFwcGVuZChfMTM5KTtjb25zdCBfMTQwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMzIuYXBwZW5kKF8xNDApO18xMzAuYXBwZW5kKF8xMzIpO2NvbnN0IF8xNDE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEzMC5hcHBlbmQoXzE0MSk7Y29uc3QgXzE0Mj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XzE0Mi5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO18xNDIuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImxpc3Rib3hcIik7Y29uc3QgXzE0Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE0Mi5hcHBlbmQoXzE0Myk7bGV0IF8xNDQ9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2ZvcihsZXQgW19mb3JlYWNoS2V5LF9mb3JlYWNoVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlc1tcIm5ldHdvcmtzXCJdKSl7bGV0IG5ldHdvcmsgPSBfZm9yZWFjaFZhbHVlO2NvbnN0IF8xNDU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiKTtfMTQ0LmFwcGVuZChfMTQ1KTtjb25zdCBfMTQ2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtfMTQ2LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJvcHRpb25cIik7XzE0Ni5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5ldHdvcmtcIiwgbmV0d29ya1tcImNvZGVcIl0pO2NvbnN0IF8xNDc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzE0Ni5hcHBlbmQoXzE0Nyk7Y29uc3QgXzE0OD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xNDguc2V0QXR0cmlidXRlKFwic3JjXCIsIG5ldHdvcmtbXCJpbWdcIl0pO18xNDguc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18xNDYuYXBwZW5kKF8xNDgpO2NvbnN0IF8xNDk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzE0Ni5hcHBlbmQoXzE0OSk7Y29uc3QgXzE1MD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTUwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfMTUxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ldHdvcmtbXCJuYW1lXCJdKTtfMTUwLmFwcGVuZChfMTUxKTtfMTQ2LmFwcGVuZChfMTUwKTtjb25zdCBfMTUyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzE0Ni5hcHBlbmQoXzE1Mik7XzE0NC5hcHBlbmQoXzE0Nik7Y29uc3QgXzE1Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE0NC5hcHBlbmQoXzE1Myk7fV8xNDIuYXBwZW5kKF8xNDQpO2NvbnN0IF8xNTQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzE0Mi5hcHBlbmQoXzE1NCk7XzEzMC5hcHBlbmQoXzE0Mik7Y29uc3QgXzE1NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xMzAuYXBwZW5kKF8xNTUpO18xMjUuYXBwZW5kKF8xMzApO2NvbnN0IF8xNTY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xMjUuYXBwZW5kKF8xNTYpO185Mi5hcHBlbmQoXzEyNSk7Y29uc3QgXzE1Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzkyLmFwcGVuZChfMTU3KTtjb25zdCBfMTU4PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzE1OC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC13cmFwcGVyXCIpO2NvbnN0IF8xNTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTU4LmFwcGVuZChfMTU5KTtjb25zdCBfMTYwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtfMTYwLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRva2VuQnV0dG9uXCIpO2NvbnN0IF8xNjE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb2luOlwiKTtfMTYwLmFwcGVuZChfMTYxKTtfMTU4LmFwcGVuZChfMTYwKTtjb25zdCBfMTYyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzE1OC5hcHBlbmQoXzE2Mik7Y29uc3QgXzE2Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18xNjMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3QgdG9rZW5TZWxlY3RcIik7XzE2My5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN5bWJvbFwiLCB2YXJpYWJsZXNbXCJ0b2tlbnNcIl1bXCIwXCJdW1wic3ltYm9sXCJdKTtjb25zdCBfMTY0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xNjMuYXBwZW5kKF8xNjQpO2NvbnN0IF8xNjU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMTY1LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzE2NS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRva2VuQnV0dG9uXCIpO2NvbnN0IF8xNjY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xNjUuYXBwZW5kKF8xNjYpO2NvbnN0IF8xNjc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTY3LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJ0b2tlbnNcIl1bXCIwXCJdW1wibG9nb1VSSVwiXSk7XzE2Ny5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzE2NS5hcHBlbmQoXzE2Nyk7Y29uc3QgXzE2OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE2NS5hcHBlbmQoXzE2OCk7Y29uc3QgXzE2OT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTY5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfMTcwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJuYW1lXCJdKTtfMTY5LmFwcGVuZChfMTcwKTtfMTY1LmFwcGVuZChfMTY5KTtjb25zdCBfMTcxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTY1LmFwcGVuZChfMTcxKTtjb25zdCBfMTcyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzE3Mi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO18xNzIuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImFycm93XCJdKTtfMTY1LmFwcGVuZChfMTcyKTtjb25zdCBfMTczPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xNjUuYXBwZW5kKF8xNzMpO18xNjMuYXBwZW5kKF8xNjUpO2NvbnN0IF8xNzQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzE2My5hcHBlbmQoXzE3NCk7Y29uc3QgXzE3NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XzE3NS5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO18xNzUuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImxpc3Rib3hcIik7Y29uc3QgXzE3Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE3NS5hcHBlbmQoXzE3Nik7bGV0IF8xNzc9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2ZvcihsZXQgW19mb3JlYWNoS2V5LF9mb3JlYWNoVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlc1tcInRva2Vuc1wiXSkpe2xldCB0b2tlbiA9IF9mb3JlYWNoVmFsdWU7Y29uc3QgXzE3OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO18xNzcuYXBwZW5kKF8xNzgpO2NvbnN0IF8xNzk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO18xNzkuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcIm9wdGlvblwiKTtfMTc5LnNldEF0dHJpYnV0ZShcImRhdGEtbmV0d29ya1wiLCB0b2tlbltcIm5ldHdvcmtcIl0pO18xNzkuc2V0QXR0cmlidXRlKFwiZGF0YS1zeW1ib2xcIiwgdG9rZW5bXCJzeW1ib2xcIl0pO2NvbnN0IF8xODA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzE3OS5hcHBlbmQoXzE4MCk7Y29uc3QgXzE4MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xODEuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRva2VuW1wibG9nb1VSSVwiXSk7XzE4MS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzE3OS5hcHBlbmQoXzE4MSk7Y29uc3QgXzE4Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtfMTc5LmFwcGVuZChfMTgyKTtjb25zdCBfMTgzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO18xODMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF8xODQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9rZW5bXCJuYW1lXCJdKTtfMTgzLmFwcGVuZChfMTg0KTtfMTc5LmFwcGVuZChfMTgzKTtjb25zdCBfMTg1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzE3OS5hcHBlbmQoXzE4NSk7XzE3Ny5hcHBlbmQoXzE3OSk7Y29uc3QgXzE4Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE3Ny5hcHBlbmQoXzE4Nik7fV8xNzUuYXBwZW5kKF8xNzcpO2NvbnN0IF8xODc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzE3NS5hcHBlbmQoXzE4Nyk7XzE2My5hcHBlbmQoXzE3NSk7Y29uc3QgXzE4OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xNjMuYXBwZW5kKF8xODgpO18xNTguYXBwZW5kKF8xNjMpO2NvbnN0IF8xODk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xNTguYXBwZW5kKF8xODkpO185Mi5hcHBlbmQoXzE1OCk7Y29uc3QgXzE5MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfOTIuYXBwZW5kKF8xOTApO183OS5hcHBlbmQoXzkyKTtjb25zdCBfMTkxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO183OS5hcHBlbmQoXzE5MSk7Y29uc3QgXzE5Mj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO2NvbnN0IF8xOTM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xOTIuYXBwZW5kKF8xOTMpO2NvbnN0IF8xOTQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMTk0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzE5NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbmRcIik7Y29uc3QgXzE5NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xOTQuYXBwZW5kKF8xOTUpO2NvbnN0IF8xOTY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzE5Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbmRcIik7XzE5Ni5hcHBlbmQoXzE5Nyk7XzE5NC5hcHBlbmQoXzE5Nik7Y29uc3QgXzE5OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE5NC5hcHBlbmQoXzE5OCk7XzE5Mi5hcHBlbmQoXzE5NCk7Y29uc3QgXzE5OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMTkyLmFwcGVuZChfMTk5KTtfNzkuYXBwZW5kKF8xOTIpO3JldHVybiBfNzl9XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZG1sbGQwSnZlRDBpTUNBd0lESXdJREl3SWlCbWFXeHNQU0lqT1dOaE0yRm1JaUIzYVdSMGFEMGlNakJ3ZUNJZ2FHVnBaMmgwUFNJeU1IQjRJajROQ2lBZ0lDQThjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaURRb2dJQ0FnSUNBZ0lDQWdaRDBpVFRVdU1qa3pJRGN1TWprellURWdNU0F3SURBeE1TNDBNVFFnTUV3eE1DQXhNQzQxT0Rac015NHlPVE10TXk0eU9UTmhNU0F4SURBZ01URXhMalF4TkNBeExqUXhOR3d0TkNBMFlURWdNU0F3SURBeExURXVOREUwSURCc0xUUXROR0V4SURFZ01DQXdNVEF0TVM0ME1UUjZJZzBLSUNBZ0lDQWdJQ0FnSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJdlBnMEtQQzl6ZG1jK1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSbm9CQUFCWFJVSlFWbEE0VEc0QkFBQXZHQUFHRUwrQ29HM2JlUHZQbjlSNWhZYkN0bTBiZHZ6LzhCSkJ0azFuZEgrNXM0MGt5Y25NUFZwNG1LUkFDdVNmRG9YL0crQ2Z0VUFSUUlGVENLQVF3QUE3UkFrUkJFRTRxTkVKRFVGaGx5QllvQ1RBQXFHaEk1andJM2pLQmlIa29PT1BGd29JZ21BWXhHM28xT29OaFIxQ0NMRmloaWdjMGdMTUVFSVVSTDNkQldmMkdRSUl0bTBkYjA2YlduRlNJN1p0MjYrWS8xUis1ZXNNSXZxdndHM1VCbzVOZDErQkZVYzZVZFQ0Y3lURHBKcU1SV1NrZ29RbWFnaG9vb2FnTHR2SnpvRGpzcSsvbGc3SDhOM1RwZWJEWHRiUi9UYlRaWFpsRUxCWERyTEtYQmpwMllzdHM2ajZlSGkveDk1WXBHM1lYNERBb09Mbkx1N0dscDhYVG5ER2I3RTMra25DUTlsWEg0R2IvRXFXaFd2QVVUbklJTllTa1hVUmVKdUp5UFFEU0cxRXBCM1NsUWY0TmFnckMwVmlVUEZacEU5eDZlbG1Qd2s4ZVRsVEd3Yjg1YXp2YjVrNXg4US94aHYzYTNMc3h2bFNmaU5JS0w4cUpLeit3VDkrRGdvd2lRcU8vVTcxL3d3PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5pQjNMVFlnZEdWNGRDMW5jbUY1TFRVd01DQnRiQzFoZFhSdklpQm1hV3hzUFNKdWIyNWxJZzBLSUNBZ0lDQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSE4wY205clpUMGlJelppTnpJNE1DSWdjM1J5YjJ0bExYZHBaSFJvUFNJeUlpQjNhV1IwYUQwaU1qUndlQ0lnYUdWcFoyaDBQU0l5TkhCNElqNE5DaUFnSUNBOGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDJJREU0VERFNElEWk5OaUEyYkRFeUlERXlJaTgrRFFvOEwzTjJaejQ9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBTUFBQUNkdDRIc0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQU1BVUV4VVJVeHBjV3g3YlAvLy8renY4T3Z1Nyt2dTcvLy8vLy8vLyt2dTcvLy8vK3p2OEwrL3YrdnU3K3J0N3VydDd1enY4T3p2Ny9MMTl1M3Y4T3Z0N3UzdzhlcnU3dXZ1Nyt6dzhlM3c4YUZrLys3eTlPenY4T3p1OE8veTh1enY4UEwxOXNDcXF1bnM3UEQwOWU3dTd1dnY3K2Z0N2ZEeTlPN3k4dXZ1N3V6dTcrcnU3OHpNek92cjcrL3o4K3JzN3U3eDgrenY4ZXZ1OE8zdzhlN3c4dXp1NytqbzYrWG41L0wxOXZIMTl2TDE5dXZ1Ny9EejllN3k5T3Z1NysveTgvSHo5ZS96OVBIMTl2RHo5T3pzN092dzhPdnk4dTN3OG4vLy8vRDA5ZkgwOWU3eDhlM3c4ZTN3OGV2djcrdnY4T3p2OE8zeDhldnY3K3Z3OFBMMTllN3g5T3Z0N3V6dzhldnY4Tzd4OHU3eTgrM3c4dXp2OEM4d01JS0RoQk1URXpRMU5UVTJOdXZ1NytydDdvU0ZoakV5TXUveTgvWDQrUkVSRVMwdUxvT0VoZmI1K2pJek0vRHo5Tzd4OG54OWZlbnM3VEF4TWZQMjkvTDE5djMvLyszdzhmTDE5L3ovL3hVVkZYdDhmWUdDZy9qOC9EYzRPUFQ0K0NRbEpSUVVGUDcvLzRXR2gzeDlmaWNvS1AvLy8vcjkvMytBZ1llSmlmcjkvaTR2THpNME5Dc3NMUGY2KytucjdQVDMrSHA3ZkNrcUtpSWpJMzUvZ0gxK2Z5b3JLelkzTjliWTJkZmEyeGNYRitYbzZmbjgvZnYvLzRtS2k0Q0Jnc2ZKeXVmcDZ2ajcvZlQ0K1F3TkRBUUVCUER6OUxPMXRUMCtQdEhUMUNFaElSOGZINnV0cmlNa0pGMWVYaVluSjBORVJFVkdSdlg1K3JhNHVZK1FrY0hEeE43aDRveVBqNlducUZOVlZRY0hCL0R6OVd4dGJwV1dsOHpPejc3QXdhR2pwRXRNVEJzYkczZDRlWnllbjNSMmR1UG01M2g1ZXVqcTYrSGs1WmlabXNUSHlOdmUzckN5czZtc3JkUFYxb0tFaFdSbFplcnQ3eGdaR1p1Y25majcvTjNnNFZwY1hKS1VsV1pvYUtDaG9zakx6THE5dnF5dXIvSDE5czNRMFRVMU52YjYrMjV3Y0dscmE4ck56a0ZDUWljbko5bmIzT0RpNC9MMjkxRlNVMkJpWWtkSlNidSt2ejlCUVNNakk4SEV4ZXp3OFZkWldlL3k5S2lxcTdDeXNxU21wMHhOVGpvN081YVltYzNQMEU1T1R2VDI5L0gwOVZaWFdIRnpjNTZnb0dKalk3aTZ1NGErM0dFQUFBQmJkRkpPVXdBQkF2ejkrd1FCL2dQNEJQcjgvdjI2OU5iNytoaU9LZTBCanV0ZXFHTG5BMkg4Rm9jVmQ0NlErTmdGS0VFL3JhbHI3NC9xTGl5L3d2M0ViVzNIL29hRzYrb2NlQ2gzQXRQU1hmZlFrTkhPcmFocjlWM1B6dGIrL29hcXZkd3hBQUFIRTBsRVFWUll3NDFYZDF3VFp4ait3QXQzQVZFY1FLbTBiaEZYVzBXNzY5NnIyejh1TWNrbGw1RGtJbG1GcEdrZ0NXVVRDQ05TRkZ3LzkxYmNvdzdjMVZhcHRxNnFIWGJ2M1hSK2R3RzkreTVndno4Z3Y3dDduM3ZYUGUvekFpQTZLVEh3VC9Ua0dmY25kTStJSmV5eEdkMFQwbDVNeHVIRkdCemMrK0JTQUtURFI4MksxYllZTExTZEpPMjB4ZENpbmZseTJ2QTRlT2VlRU5CODRxRHBXcHZCaEdGWVY0S0VoK2dLZjVvTU51MjBRWW5jQXgyY2FCd2tqaDF2ODNlUllKd3RQQ29WOTQvQUpGMjAyUlBHOWdkNGRFZXZqM3F5dDQyV1lPU2RvNkpwVmR0dlRNSms5MzRxQ3NTMUgvMllSN01aQ1VIeTdFUEI0TFU3Q0NRQklSNGIzVTRtY0J3ODJLMUZZRTZTbEhiYkxTM0Z1MEJJNnJzOXlENGJ3UjRmOVRvZFR3cnRyUjhlSzExWG44Vy9GazhYcGFXSUVhTHd1QWZ5TWVIcllRbVhiS3ZRYkZwaVV2RXZFcDN5SDRqRG81RDNwL1I1S0s4ellrNVMvalBlYXRjYWo5QUZrdXljOTVCVTZBTXV4Ui9PaXhmWmh4WTJxTDIxeFptTnl5amhuZmk4aDNGQkptTkFVcjdvL2JDRUY3eWVCVXJ6eGcwaEZYS3JjLzVnRU1PdmY5OUZQVVgybEdXN1E2OWVvTXcwZm4wUURZTHN1YWp2M2Fic0E1SmY2TmRGL1A3bXhRMXlGc0JjdXVwZEJ2R2hTNzl1dzBCMFd3S2tUNzhhTDNiZzA3Y2NhZzVBWmd3Y2JrRmRpSzkvSXJvMURWTHdmTFpFbkFEcjZpcTlQQXdnTTFjZU1DQjVKQ1haajRTRHdQR0J2Ujd2U29yUHZ1bzdBQnJmWjNiME5zSDA2cy9WVWdvR1JIQ0E4bCtwVU12YkFHQVErK3JMa1VkNjJBYXdMdUJnNEgwTUljNWdrOGNwdnd0Z3psUUdyVWdReERNakU4RlVXTTFKdGdnWkNCMTBxSGtBTXVQNnZlSXMyS2F3elRCMGlCOFR0OENIYkFKNEFETE54cFZvSlRyNWh3eUZTUmloRmRtVDl2SnRCU2hBNVJmSFRjaGptSFlFVEdKU25rU2N3WlZjQnZrQXNwTEFZclFmSmJZa1dJU1hESmdvQVovSTI0N2UwUVlBejM2L01BM1lsamt4SURuV2hOWkF4Unp4aGdOd3lnc0xhdHZNamU3UExlOEk2MkJLSHdaU3QyQ2lESjdpS3VCMDZndmxlemV2L2Rpc2FVVll2eE1KQXRPbWdzRkxFUUNWNlkzRkRYcG9yaTRzZUh1VEpqTlhkOTVkckRHenpWRHoxVzFhOEZGaFMyZURCRFFGbE9XcVErMTBlZ29yTHE2U2FXcU5PVHFkcm01TktZUW9OZ1lXQ0V1SkdSSkFkd3VCWlBCc2xWUHU4UnpkNVNvMktwVktUWTV1L255ZExuZHREUnRKelRkQ2pyYk9BeG1pUHQ1WHRWaTk5MDJGckVTcFZDakNBUERvNWgveXlVcDh1d1M5UU5BWklOYU9ESUlERFhJWXVrd0JyUlU4QU5hTjgyNmorOElpZmhEMmRJQitSS2NMTnNEUWxXRnpBUUFMVVJkUVhMZnk4MGdBQXUzQkVyZkMxV2FPQU16UHlkbTkvUDB5UVRlQmRHRUlxdTh2djFkVGZCZUJENUJidDN6Mzc2ZXU4UjJ3eDRJTVd1aUQzVy85OFhlZjBTVUdxTk90ME95MEdtZ0JLMldBZVZZQmdPa0V4UmlPWC9yRnA2d1ZBdVRrcmppa1gzSmpXZFpDWGgwSVMzZTBrZWltSDRJaHVpeDR0TGlVaTZNVmdBMytuN05MUTJXTmZ3VjVETTgyMG14aEsxUCt4dW96emN3MTdmYUxsV1lJd1FIQTRGZDg5RytaMWRCMGJ1TVBSUlMvbFFlRFZJUlBLTzJab3p1Mms3VGY5Tk5tWDRtTEJjalJyZkNkcExVVzh1K1BjczVsWndtKzUxUXdMRjMwT1o5MGVIOWR6ZEJsSndvL3FIU1YxT1h1emoxOHV5WGt2N0xMSGZpVHRLdjRuM05zTW9pWmczelBLdWEwV2w5VnRiTXB4SlJkdjFWYXVuejNyc3N0SWNQWm16NmZwdVEzdjhBQncxekk2MGtvS2JORDFhTjNlTFllWjZ4L2JQMjU5dW95eTdMbUhZcjFaa1hnb0hBNFNQSWdwVVVnVlZWb3AwT3RkMVpzYXpUUlpjM05aYTh3YjIwT1pCcEwxdDlFbUowalZSelNlaWVVVXBic2dLU3NMdkFlQ1lZWXEvYlVCbmVOMGF5cDNOeU0wQW1rZFZaYlRCRU5Gc3E2dW9BbFZMMjNZVjN6NllwU3Q5SE04dEdCRzFrSUtVK0M1bE5CNHNobkNCR3ZiK1Y0WFM5M0ZHNWF3M0dpY2MyT29uSmt1dDQzRUU1R2RyamFlb2hHaSttQ2w1c01ubVBzMjFsSzNyQ0hWQ0h6blJ1dWNMejM3OFdJbWIycDBNbFN1N3E2bGh1dXBTNTB1SFo5dk5mQXNGU1Rna2ZFODUyeU5IS3pvWFV5YWR6cldzcmJFUmhRNGtRL1VTL1dlTloxN0hRSUF4Z0R4OURKR2wvL3RMUk42VVdEeWQzRUlzdWVkUWxxbkxCRzh2MWNMbFNyck1oS2h1cXNJNWxIaFlMT3NBZm00dUpHYlZZSE1vOXRoc0g1RVlUdWw2MDZNWEFTcVNBVW1rbDhvZG1PMUZVeDd6dWdVdFc0My9PclVLbjduRkRxd2xwS3hXS2JsWnBPcjZ0eTFidUkxTzJjOTJ5ZktEeUMzTzlFb0xYY1gxRHQycmhWV0FFQ2l5RDNXUjlTMG9wRUM0ZGw1ZUhLYzBXaWhTTXE4c29DVjU1NlpPVWhtY0x2dmhXUVVMc3JEN2Qwalg0TVdib29hM0MxaGVLWjc4bCtkRXo3NjJjY3UvWkJDUDdheHpEVTNiV1B0blcwOW9VWHovN2pKbVJySXkrZXI5bkdqMHZzY1BFTXI3NkpnNlpGWG4ybkQ1cDRyOVczZGZtT0d6NTc3a3poOGgwN2E5Unc2ZjladmxrSXRrZng1QmxwQ2ZNeTBra2lQV05lUWxycU1OYnhtQlR4MC84QnNQOEQ1T1dkNHM4QUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmh3Q0FBQlhSVUpRVmxBNFRBOENBQUF2R0FBR0VEL2tJSklrUmFvbi8yNTVwdXBKaE1PMmpSeUpIL3J2TjQwbElDanlmelMyalNRcHFqM3JtY245UEQ3L3JQNjJEcURPd3FnWlJTQUVrUkZHS0lvaUl3UmhGR0Z1anZ0dnRqbUsxKzN4bjZPdy9acEEySXBRL0lZZFJNZ2NqdGR0anRmdDhkdnJkdjJzQ0x2OVJjV01vcllqRkxZaU9INUlNTncyaUIyejdTQXl3MUdFMmkrQmhJUWZLaVIwVVlsQWhJd0l4T1hkRFFFdEJEeXd3QXNEZkRCQndBNEJEUVFVQ0VDUWJkdDA5R003YmR1MmJkdkdpZC83c1kyQmYzUjZCaEg5WitTMmpTUEpVMjVsMTY5Z2VIcGpxVXpGN1hCWE1xbVlseEV6a2k2NHdOZFZTRWRFU09TY0VOT1pTd2hJbHZDSEtDWDUreUlBbjU4VlRaSGJSck1BL0s5YlI5OVVMTmtvdzZRZG9KODdiVEw5eEJYeENYR2ttWGdlNUxwZlZUL1hxNjVkZkJOSlBwNXlnVXhLeDIvcDEyNlRZczlQL1lKRFV4a0FRelVQZmlDOHJEdGd6dy9lV1Y0eVpZNjZSd0xRay9Yck9aT2krL2lIQUNoN0FBeGI3L3p3K1orV0dwUWRJeWJEOUQwQlBBNkF6RXE2enZDKzJpeHYzZmpBYWFka2xnQU9EMER1WjR6bTBYWkY0L0t6SHdoZUdZWUJlTW9BeU85eGo5STJmN04yVGdGNlorRW9ad0FBN01maHBYOWJzeElDQWpkR2prektCZjZHK2pkbExmdmY1S0pQTWtYZ1NzWHpFT2g3V2JCckIyZHJWQU0zQlBrNDk0OEVFbkl4cHBlMTdYeFNPTks4dnlvaS9UN2Nldlh6L2lxL0IyS3lmaCt2QjlVM3AvcXUvYk9kMWZlWkFRQT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROU0IzTFRVaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TUNBeU1DSWdabWxzYkQwaUl6QXdNQ0lnZDJsa2RHZzlJakl3SWlCb1pXbG5hSFE5SWpJd0lqNE5DaUFnSUNBOGNHRjBhQ0JrUFNKTk1UTXVOVGcySURNdU5UZzJZVElnTWlBd0lERXhNaTQ0TWpnZ01pNDRNamhzTFM0M09UTXVOemt6TFRJdU9ESTRMVEl1T0RJNExqYzVNeTB1TnpremVrMHhNUzR6TnprZ05TNDNPVE5NTXlBeE5DNHhOekpXTVRkb01pNDRNamhzT0M0ek9DMDRMak0zT1MweUxqZ3pMVEl1T0RJNGVpSXZQZzBLUEM5emRtYytcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBRFEwbEVRVlI0WHRYWk1XNFVRUkNGWVk3QUVaeVpDM0FCVHNBRk9BRUppU1ZIaEtRRUpJU2tYQUdSSTVBUVFyTGtBQW1SbUJDY0VCQVpqWVZYOHJkVjNiVXpzN1BqWC9xVGZhOTd1bnFOMkxYdjNWdUk0NU9QUDQ1UFBsMFZ2WFQ5blNNWWFwTHV2MW84K056NnZGV3c0NC8zWEs3am4wbHdzRVgxUEl2aFFRNnQ1OXNyUG53dGVzN1o4WUZyMVhQUGdnOVp1NTUvRW02K3E2ZHZ2Mis5MXZQeHk3T3JoODgvYjcyK2k4NHhDamV0S3VZOXhieXE4K3lFbTFYTXNOY3p3MTVGNXlyalJpM2ZuLzMyckxldzM3UEYrYzgvVy8yV3psWENUVnIyc0YrMWgvMld6dGZFeFMxYjJCMXJDN3N0blRQRmhaa1o5dVl5dzE2bWM0YTRLRFBEWHFhWVoyYll5M1RlVzFTLzFXWFlheW5tTFRQc1pUcjNCb3VSR2ZaNmlublBESHVSenIzQlltU0VuWXBpWGpIQ1R1VFJzeS8zblgzUjRhTzl6S3RHMklsMC9sRVhZTjZ6aXV0Nmlubms1T0VIN0dTT3dUMWFSdGlKbkhRQjVpM0g0ajR0eFR5eWZBRVJkaklqN0dUZEo2L1B0enFaRVhaMDlBV1l0eFJ6RmZPV1lxNy9oKzkvK0JIenpPRWRGRHNxNWkzRlBMTDc3ajk5ODgxOXR6cVpyOTVkdUhTck02Y3lmRVczbzkwTEVQT2VZajYzWXE2TFg4QU45dVpTelBWZ0Z4RGgyakdLdWU3OUFxSTlLcmhIVlRIWFJTNGcyNnVINnl1S3VTNTZBVGNPdi9PdjR0cWVZcTRIdVlESWkxOS9mZFExOW5xS3VhN21BbTZNc05OU3pIVjFGeEQ5ZmNGT1N6SFg0UUl1ZlZIRlBGUE1NOFU4VTh3ajkvcGxTTXdqSSt4a2lybnUvZHRnaEIwVjg1WmlycU12WU1CT1pvU2RNVjJOc0tQbEN4Z1U4OHhkL3M4WDkyb3A1cEdiQzZoY1FvU2RscnZpK3BZUmR2VFc4SlVMR0JUem5oVmNVMUhNSTUzL0drc2FZYWVxbUZlTnNLTVBUajhjT2ZzMUZpTWo3RlFVODRvUmRpS2RlOE54NFVQUllJU2RubUxlTThKT3BuUGZ3bkpraHIyV1l0NHl3MTZrODRhNEtETEQzdHhtMklzTS95Z2E0Y0xNRm5hbjJzSnVwbk0yY1hGbUQvdTcyc04rcHZPVmNKT1dQZXozN1BIb3hkZXROWm5PVmNhTmVyYXcyN09GM1o3T3RSTnVWakhDVHM4SU94V2RaeFJ1V25YSzRhZXN2ZEU1SnVIbWE5Znp6NElQV2F1ZWUzWjg0RnIwbkh2Rmh4OWF6N2NZSG1ScHl4OXY5NG1IV2tyUGNYQ0dkOE5Eem0zNnk0eTE0Y0duNnY1M0RnZnE2ZnA5OFEvdHdwbWF1NkhVNFFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImV4cG9ydCBjb25zdCB0b2tlbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRXRoZXJldW1cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzMyeDMyLzEwMjcucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTUFUSUNcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIk1BVElDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3BvbHlnb25zY2FuLmNvbS90b2tlbi9pbWFnZXMvbWF0aWNfMzIucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkJOQlwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQk5CXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvMzJ4MzIvMTgzOS5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJVU0QgQ29pblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogNixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weGEwYjg2OTkxYzYyMThiMzZjMWQxOWQ0YTJlOWViMGNlMzYwNmViNDgucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVVNEIENvaW5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRENcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDYsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHgyNzkxYmNhMWYyZGU0NjYxZWQ4OGEzMGM5OWE3YTk0NDlhYTg0MTc0XCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly93YWxsZXQtYXNzZXQubWF0aWMubmV0d29yay9pbWcvdG9rZW5zL3VzZGMuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlVTRCBDb2luXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDhBQzc2YTUxY2M5NTBkOTgyMkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGRcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3dhbGxldC1hc3NldC5tYXRpYy5uZXR3b3JrL2ltZy90b2tlbnMvdXNkYy5zdmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJFVEggb24gUG9seWdvblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiV0VUSFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHg3Y2VCMjNmRDZiQzBhZEQ1OUU2MmFjMjU1NzgyNzBjRmYxYjlmNjE5XCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9wb2x5Z29uc2Nhbi5jb20vdG9rZW4vaW1hZ2VzL3dFVEhfMzIucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkVUSCBvbiBCU0NcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIldFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4MjE3MEVkMDg4MGFjOUE3NTVmZDI5QjI2ODg5NTZCRDk1OUY5MzNGOFwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vcG9seWdvbnNjYW4uY29tL3Rva2VuL2ltYWdlcy93RVRIXzMyLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRlwiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkRhaVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiREFJXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weDZiMTc1NDc0ZTg5MDk0YzQ0ZGE5OGI5NTRlZWRlYWM0OTUyNzFkMGYucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHgxQUYzRjMyOWU4QkUxNTQwNzREODc2OUQxRkZhNGVFMDU4QjFEQmMzXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkRhaVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiREFJXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weDZiMTc1NDc0ZTg5MDk0YzQ0ZGE5OGI5NTRlZWRlYWM0OTUyNzFkMGYucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGFpXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJEQUlcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4OGYzY2Y3YWQyM2NkM2NhZGJkOTczNWFmZjk1ODAyMzIzOWM2YTA2M1wiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vd2FsbGV0LWFzc2V0Lm1hdGljLm5ldHdvcmsvaW1nL3Rva2Vucy9kYWkuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3XCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVGV0aGVyXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RUXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA2LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vdG9rZW5zLjFpbmNoLmlvLzB4ZGFjMTdmOTU4ZDJlZTUyM2EyMjA2MjA2OTk0NTk3YzEzZDgzMWVjNy5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJUZXRoZXJcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRFRcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDYsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhjMjEzMmQwNWQzMWM5MTRhODdjNjYxMWMxMDc0OGFlYjA0YjU4ZThmXCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly93YWxsZXQtYXNzZXQubWF0aWMubmV0d29yay9pbWcvdG9rZW5zL3VzZHQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRG9nZWNvaW5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkRPR0VcIixcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweGJBMmFFNDI0ZDk2MGMyNjI0N0RkNmMzMmVkQzcwQjI5NWM3NDRDNDNcIixcclxuICAgICAgICBcImNoYWluSWRcIjogNTYsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiQlNDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vdG9rZW5zLnBhbmNha2Vzd2FwLmZpbmFuY2UvaW1hZ2VzLzB4YkEyYUU0MjRkOTYwYzI2MjQ3RGQ2YzMyZWRDNzBCMjk1Yzc0NEM0My5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJDdWx0IERBT1wiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQ1VMVFwiLFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4ZjBmOWQ4OTVhY2E1Yzg2NzhmNzA2ZmI4MjE2ZmEyMjk1NzY4NWExM1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzY0eDY0LzE3NzQyLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlJldm9sdCAyIEVhcm5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlJWTFRcIixcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweGYwZjlEODk1YUNhNWM4Njc4ZjcwNkZCODIxNmZhMjI5NTc2ODVBMTNcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy82NHg2NC8xOTg5My5wbmdcIlxyXG4gICAgfSxcclxuXSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdGlwcGluZ01haW4ubXB0c1wiO1xyXG5pbXBvcnQgZXRoX2xvZ28gZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9ldGhfbG9nby5wbmdcIlxyXG5pbXBvcnQgdXNkY19sb2dvIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvdXNkY19sb2dvLnBuZ1wiXHJcbmltcG9ydCBhcnJvdyBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2Fycm93LnN2Z1wiXHJcbmltcG9ydCBwZW4gZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9wZW4uc3ZnXCJcclxuaW1wb3J0IGNsb3NlIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvY2xvc2Uuc3ZnXCJcclxuaW1wb3J0IG1hdGljVG9rZW5JY29uIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvbWF0aWMtdG9rZW4taWNvbi53ZWJwXCJcclxuaW1wb3J0IGJpYW5uY2VDb2luTG9nbyBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2JpbmFuY2UtY29pbi1sb2dvLndlYnBcIlxyXG5pbXBvcnQge3Rva2Vuc30gZnJvbSBcIi4vdGlwcGluZ1V0aWxzXCI7XHJcbmltcG9ydCB7Y3JlYXRlfSBmcm9tIFwiZmFzdC1jcmVhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlwcGluZ01haW4ge1xyXG4gICAgY29uc3RydWN0b3IoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtzID0gW1xyXG4gICAgICAgICAgICB7bmFtZTogJ1BvbHlnb24gJywgaW1nOiBtYXRpY1Rva2VuSWNvbiwgY2hhaW5JZDogMTM3LCBjb2RlOiAnUG9seWdvbid9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ0V0aGVyZXVtJywgaW1nOiBldGhfbG9nbywgY2hhaW5JZDogMSwgY29kZTogJ0VUSCd9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ0JTQycsIGltZzogYmlhbm5jZUNvaW5Mb2dvLCBjaGFpbklkOiA1NiwgY29kZTogJ0JTQyd9LFxyXG4gICAgICAgIF1cclxuICAgICAgICB0aGlzLmh0bWwgPSBjcmVhdGUoJ2RpdicsIHt9LCB0ZW1wbGF0ZSh7aWRlbnRpZmllciwgbmV0d29ya3MsIHRva2VucywgZXRoX2xvZ28sIHVzZGNfbG9nbywgYXJyb3csIHBlbiwgY2xvc2V9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0JykuZm9yRWFjaChzZWxlY3QgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Qub25jbGljayA9IGUgPT4gc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2lzT3BlbicpXHJcbiAgICAgICAgICAgIHNlbGVjdC5vbmJsdXIgPSBlID0+IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW4nKVxyXG4gICAgICAgICAgICBzZWxlY3Qub25jbGljayA9IGUgPT4gc2VsZWN0LmZpcnN0RWxlbWVudENoaWxkLmZvY3VzKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCB1bCBsaScpLmZvckVhY2gobGkgPT4ge1xyXG4gICAgICAgICAgICBsaS5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbGkucGFyZW50Tm9kZS5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpXHJcbiAgICAgICAgICAgICAgICBidXR0b24ucXVlcnlTZWxlY3RvcignLm5hbWUnKS50ZXh0Q29udGVudCA9IGxpLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBidXR0b24ucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gbGkucXVlcnlTZWxlY3RvcignaW1nJykuc3JjO1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihidXR0b24ucGFyZW50Tm9kZS5kYXRhc2V0LCBsaS5kYXRhc2V0KTtcclxuICAgICAgICAgICAgICAgIGxpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW4nKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJzpmb2N1cycpPy5ibHVyKClcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpc2libGVDb2lucygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcuc2VuZCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBuZXR3b3JrID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5uZXR3b3JrU2VsZWN0JykuZGF0YXNldC5uZXR3b3JrO1xyXG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRva2VuU2VsZWN0JykuZGF0YXNldC5zeW1ib2w7XHJcbiAgICAgICAgICAgIGxldCBhbW91bnQgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnZhbHVlU2VsZWN0aW9uIC5pc1NlbGVjdGVkIGlucHV0Jyk/LnZhbHVlIHx8IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudmFsdWVTZWxlY3Rpb24gLmlzU2VsZWN0ZWQnKS5kYXRhc2V0LnZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKG5ldyBFdmVudCgnc2VuZE1vbmV5Jywge2J1YmJsZXM6IHRydWV9KSwge1xyXG4gICAgICAgICAgICAgICAgaWRlbnRpZmllcixcclxuICAgICAgICAgICAgICAgIG5ldHdvcmssXHJcbiAgICAgICAgICAgICAgICBhbW91bnQsXHJcbiAgICAgICAgICAgICAgICB0b2tlblxyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlU2VsZWN0aW9uID4gKicpLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgIGIub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWx1ZVNlbGVjdGlvbiAgPiAqJykuZm9yRWFjaCh4ID0+IHguY2xhc3NMaXN0LnJlbW92ZSgnaXNTZWxlY3RlZCcpKVxyXG4gICAgICAgICAgICAgICAgYi5jbGFzc0xpc3QuYWRkKCdpc1NlbGVjdGVkJylcclxuICAgICAgICAgICAgICAgIGIucXVlcnlTZWxlY3RvcignaW5wdXQnKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoVmlzaWJsZUNvaW5zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVmcmVzaFZpc2libGVDb2lucygpIHtcclxuICAgICAgICBsZXQgbmV0d29yayA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubmV0d29ya1NlbGVjdCcpLmRhdGFzZXQubmV0d29yaztcclxuICAgICAgICBsZXQgdG9rZW5zID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2tlblNlbGVjdCBsaScpXHJcbiAgICAgICAgZm9yIChsZXQgdG9rZW4gb2YgdG9rZW5zKSB7XHJcbiAgICAgICAgICAgIHRva2VuLnN0eWxlLmRpc3BsYXkgPSB0b2tlbi5kYXRhc2V0Lm5ldHdvcmsgPT0gbmV0d29yayA/ICcnIDogJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy50b2tlblNlbGVjdCcpLmRhdGFzZXQubmV0d29yayAhPSBuZXR3b3JrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKGAudG9rZW5TZWxlY3QgbGlbZGF0YS1uZXR3b3JrPVwiJHtuZXR3b3JrfVwiXWApLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9