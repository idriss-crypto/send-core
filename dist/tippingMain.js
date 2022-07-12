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

/***/ "./src/tippingMain.mpts":
/*!******************************!*\
  !*** ./src/tippingMain.mpts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _59=document.createDocumentFragment();const _60=document.createElement("header");const _61=document.createTextNode("\r\n    ");_60.append(_61);const _62=document.createElement("h1");const _63=document.createTextNode("Send to ");_62.append(_63);const _64=document.createTextNode(variables["identifier"]);_62.append(_64);_60.append(_62);const _65=document.createTextNode("\r\n    ");_60.append(_65);const _66=document.createElement("img");_66.setAttribute("class", "closeButton");_66.setAttribute("src", variables["close"]);_66.setAttribute("alt", "close");_60.append(_66);const _67=document.createTextNode("\r\n");_60.append(_67);_59.append(_60);const _68=document.createTextNode("\r\n");_59.append(_68);const _69=document.createElement("main");const _70=document.createTextNode("\r\n    ");_69.append(_70);const _71=document.createElement("div");_71.setAttribute("class", "valueSelection");const _72=document.createTextNode("\r\n        ");_71.append(_72);const _73=document.createElement("button");_73.setAttribute("type", "button");const _74=document.createTextNode("\r\n            ");_73.append(_74);const _75=document.createElement("span");const _76=document.createTextNode("$1");_75.append(_76);_73.append(_75);const _77=document.createTextNode("\r\n        ");_73.append(_77);_71.append(_73);const _78=document.createTextNode("\r\n\r\n        ");_71.append(_78);const _79=document.createElement("button");_79.setAttribute("type", "button");const _80=document.createTextNode("\r\n            ");_79.append(_80);const _81=document.createElement("span");const _82=document.createTextNode("$2");_81.append(_82);_79.append(_81);const _83=document.createTextNode("\r\n        ");_79.append(_83);_71.append(_79);const _84=document.createTextNode("\r\n\r\n        ");_71.append(_84);const _85=document.createElement("button");_85.setAttribute("type", "button");const _86=document.createTextNode("\r\n            ");_85.append(_86);const _87=document.createElement("span");const _88=document.createTextNode("$5");_87.append(_88);_85.append(_87);const _89=document.createTextNode("\r\n        ");_85.append(_89);_71.append(_85);const _90=document.createTextNode("\r\n\r\n        ");_71.append(_90);const _91=document.createElement("button");_91.setAttribute("type", "button");_91.setAttribute("class", "more");const _92=document.createTextNode("\r\n            ");_91.append(_92);const _93=document.createElement("img");_93.setAttribute("alt", "");_93.setAttribute("src", variables["pen"]);_91.append(_93);const _94=document.createTextNode("\r\n        ");_91.append(_94);_71.append(_91);const _95=document.createTextNode("\r\n    ");_71.append(_95);_69.append(_71);const _96=document.createTextNode("\r\n    ");_69.append(_96);const _97=document.createElement("div");_97.setAttribute("class", "select-wrapper");const _98=document.createTextNode("\r\n        ");_97.append(_98);const _99=document.createElement("label");_99.setAttribute("for", "network");const _100=document.createTextNode("Network:");_99.append(_100);_97.append(_99);const _101=document.createTextNode("\r\n        ");_97.append(_101);const _102=document.createElement("div");_102.setAttribute("class", "select networkSelect");_102.setAttribute("data-chain-id", variables["networks"]["0"]["chainId"]);const _103=document.createTextNode("\r\n            ");_102.append(_103);const _104=document.createElement("button");_104.setAttribute("type", "button");_104.setAttribute("id", "network");const _105=document.createTextNode("\r\n                ");_104.append(_105);const _106=document.createElement("img");_106.setAttribute("src", variables["networks"]["0"]["img"]);_106.setAttribute("alt", "");_104.append(_106);const _107=document.createTextNode("\r\n                ");_104.append(_107);const _108=document.createElement("span");_108.setAttribute("class", "name");const _109=document.createTextNode(variables["networks"]["0"]["name"]);_108.append(_109);_104.append(_108);const _110=document.createTextNode("\r\n                ");_104.append(_110);const _111=document.createElement("img");_111.setAttribute("class", "arrow");_111.setAttribute("src", variables["arrow"]);_104.append(_111);const _112=document.createTextNode("\r\n            ");_104.append(_112);_102.append(_104);const _113=document.createTextNode("\r\n            ");_102.append(_113);const _114=document.createElement("ul");_114.setAttribute("tabindex", "-1");_114.setAttribute("role", "listbox");const _115=document.createTextNode("\r\n                ");_114.append(_115);let _116=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["networks"])){let network = _foreachValue;const _117=document.createTextNode("\r\n                    ");_116.append(_117);const _118=document.createElement("li");_118.setAttribute("role", "option");_118.setAttribute("data-chain-id", network["chainId"]);const _119=document.createTextNode("\r\n                        ");_118.append(_119);const _120=document.createElement("img");_120.setAttribute("src", network["img"]);_120.setAttribute("alt", "");_118.append(_120);const _121=document.createTextNode("\r\n                        ");_118.append(_121);const _122=document.createElement("span");_122.setAttribute("class", "name");const _123=document.createTextNode(network["name"]);_122.append(_123);_118.append(_122);const _124=document.createTextNode("\r\n                    ");_118.append(_124);_116.append(_118);const _125=document.createTextNode("\r\n                ");_116.append(_125);}_114.append(_116);const _126=document.createTextNode("\r\n            ");_114.append(_126);_102.append(_114);const _127=document.createTextNode("\r\n        ");_102.append(_127);_97.append(_102);const _128=document.createTextNode("\r\n    ");_97.append(_128);_69.append(_97);const _129=document.createTextNode("\r\n    ");_69.append(_129);const _130=document.createElement("div");_130.setAttribute("class", "select-wrapper");const _131=document.createTextNode("\r\n        ");_130.append(_131);const _132=document.createElement("label");_132.setAttribute("for", "tokenButton");const _133=document.createTextNode("Coin:");_132.append(_133);_130.append(_132);const _134=document.createTextNode("\r\n        ");_130.append(_134);const _135=document.createElement("div");_135.setAttribute("class", "select tokenSelect");_135.setAttribute("data-chain-id", variables["tokens"]["0"]["chainId"]);const _136=document.createTextNode("\r\n            ");_135.append(_136);const _137=document.createElement("button");_137.setAttribute("type", "button");_137.setAttribute("id", "tokenButton");const _138=document.createTextNode("\r\n                ");_137.append(_138);const _139=document.createElement("img");_139.setAttribute("src", variables["tokens"]["0"]["logoURI"]);_139.setAttribute("alt", "");_137.append(_139);const _140=document.createTextNode("\r\n                ");_137.append(_140);const _141=document.createElement("span");_141.setAttribute("class", "name");const _142=document.createTextNode(variables["tokens"]["0"]["name"]);_141.append(_142);_137.append(_141);const _143=document.createTextNode("\r\n                ");_137.append(_143);const _144=document.createElement("img");_144.setAttribute("class", "arrow");_144.setAttribute("src", variables["arrow"]);_137.append(_144);const _145=document.createTextNode("\r\n            ");_137.append(_145);_135.append(_137);const _146=document.createTextNode("\r\n            ");_135.append(_146);const _147=document.createElement("ul");_147.setAttribute("tabindex", "-1");_147.setAttribute("role", "listbox");const _148=document.createTextNode("\r\n                ");_147.append(_148);let _149=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["tokens"])){let token = _foreachValue;const _150=document.createTextNode("\r\n                    ");_149.append(_150);const _151=document.createElement("li");_151.setAttribute("role", "option");_151.setAttribute("data-chain-id", token["chainId"]);_151.setAttribute("data-address", token["address"]);const _152=document.createTextNode("\r\n                        ");_151.append(_152);const _153=document.createElement("img");_153.setAttribute("src", token["logoURI"]);_153.setAttribute("alt", "");_151.append(_153);const _154=document.createTextNode("\r\n                        ");_151.append(_154);const _155=document.createElement("span");_155.setAttribute("class", "name");const _156=document.createTextNode(token["name"]);_155.append(_156);_151.append(_155);const _157=document.createTextNode("\r\n                    ");_151.append(_157);_149.append(_151);const _158=document.createTextNode("\r\n                ");_149.append(_158);}_147.append(_149);const _159=document.createTextNode("\r\n            ");_147.append(_159);_135.append(_147);const _160=document.createTextNode("\r\n        ");_135.append(_160);_130.append(_135);const _161=document.createTextNode("\r\n    ");_130.append(_161);_69.append(_130);const _162=document.createTextNode("\r\n");_69.append(_162);_59.append(_69);const _163=document.createTextNode("\r\n");_59.append(_163);const _164=document.createElement("footer");const _165=document.createTextNode("\r\n    ");_164.append(_165);const _166=document.createElement("button");_166.setAttribute("type", "button");_166.setAttribute("class", "send");const _167=document.createTextNode("\r\n        ");_166.append(_167);const _168=document.createElement("span");const _169=document.createTextNode("Send");_168.append(_169);_166.append(_168);const _170=document.createTextNode("\r\n    ");_166.append(_170);_164.append(_166);const _171=document.createTextNode("\r\n");_164.append(_171);_59.append(_164);return _59}


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
            {name: 'Polygon ', img: _url_loader_img_matic_token_icon_webp__WEBPACK_IMPORTED_MODULE_6__["default"], chainId: 137},
            {name: 'Ethereum', img: _url_loader_img_eth_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"], chainId: 1},
            {name: 'BSC', img: _url_loader_img_binance_coin_logo_webp__WEBPACK_IMPORTED_MODULE_7__["default"], chainId: 56},
        ]
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_9__.create)('div',{},(0,_tippingMain_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({identifier, networks, tokens: _tippingUtils__WEBPACK_IMPORTED_MODULE_8__.tokens, eth_logo: _url_loader_img_eth_logo_png__WEBPACK_IMPORTED_MODULE_1__["default"], usdc_logo: _url_loader_img_usdc_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"], arrow: _url_loader_img_arrow_svg__WEBPACK_IMPORTED_MODULE_3__["default"], pen: _url_loader_img_pen_svg__WEBPACK_IMPORTED_MODULE_4__["default"], close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_5__["default"]}));

        this.html.querySelectorAll('.select').forEach(select => {
            select.onclick = e => select.classList.toggle('isOpen')
            select.onblur = e => select.classList.remove('isOpen')
        })
        this.html.querySelectorAll('.select ul li').forEach(li => {
            li.onclick = e => {
                e.stopPropagation();
                const button = li.parentNode.parentNode.querySelector('button')
                button.querySelector('.name').textContent = li.querySelector('.name').textContent;
                button.querySelector('img').src = li.querySelector('img').src;
                Object.assign(button.parentNode.dataset, li.dataset);
                li.parentNode.parentNode.classList.remove('isOpen')
                this.refreshVisibleCoins()
            }
        })
        this.html.querySelector('.send')?.addEventListener('click', (e) => {
            let chainId = this.html.querySelector('.networkSelect').dataset.chainId;
            this.html.dispatchEvent(Object.assign(new Event('sendMoney', {bubbles :true}), {identifier, chainId}))
        });
        this.refreshVisibleCoins();
    }

    refreshVisibleCoins() {
        let chainId = this.html.querySelector('.networkSelect').dataset.chainId;
        let tokens = this.html.querySelectorAll('.tokenSelect li')
        for (let token of tokens) {
            token.style.display = token.dataset.chainId == chainId ? '' : 'none';
        }
        if (this.html.querySelector('.tokenSelect').dataset.chainId != chainId) {
            this.html.querySelector(`.tokenSelect li[data-chain-id="${chainId}"]`).click();
        }
    }
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcGluZ01haW4uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOztBQUViLDJDQUEyQyxnQ0FBZ0Msb0NBQW9DLG9EQUFvRCw4REFBOEQsaUVBQWlFLEdBQUcsa0NBQWtDOztBQUV2VSxpQ0FBaUMsZ0JBQWdCLHNCQUFzQixPQUFPLHVEQUF1RCxhQUFhLHVEQUF1RCw0Q0FBNEMsS0FBSyw2Q0FBNkMsNkVBQTZFLE9BQU8saURBQWlELG1GQUFtRixPQUFPOztBQUV0Z0IsNENBQTRDLGtCQUFrQixrQ0FBa0Msb0VBQW9FLEtBQUssT0FBTyxvQkFBb0I7O0FBRXBNLG1DQUFtQzs7QUFFbkMsZ0NBQWdDOztBQUVoQyxrQ0FBa0M7O0FBRWxDLG1DQUFtQzs7QUFFbkMsd0JBQXdCLDJCQUEyQiwyRUFBMkUsa0NBQWtDLHdCQUF3QixPQUFPLGtDQUFrQyxtSUFBbUk7O0FBRXBXLHlDQUF5QyxtRUFBbUUsZ0VBQWdFLFdBQVcseUJBQXlCLFNBQVMsd0JBQXdCLDRCQUE0QixjQUFjLFNBQVMsK0JBQStCLHNCQUFzQixXQUFXLFlBQVksZ0tBQWdLLHNEQUFzRCxTQUFTLGtCQUFrQiw0QkFBNEIsb0JBQW9CLHNCQUFzQiw4QkFBOEIsY0FBYyx1QkFBdUIsZUFBZSxZQUFZLG9CQUFvQixNQUFNLGlFQUFpRSxVQUFVOztBQUUxMkIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLHVFQUF1RTtBQUN2RSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNLGtDQUFrQztBQUN4QyxNQUFNO0FBQ04sa0ZBQWtGO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsYUFBYTtBQUNiOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQSxhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSx3RUFBd0UsYUFBYTtBQUNyRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUEscUNBQXFDLHFCQUFxQjtBQUMxRDs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLE9BQU87O0FBRW5DO0FBQ0EsK0JBQStCLFlBQVk7QUFDM0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMxUUEsNkJBQWUsb0NBQVUsV0FBVyw0Q0FBNEMsMkNBQTJDLDhDQUE4QyxnQkFBZ0IsdUNBQXVDLDhDQUE4QyxnQkFBZ0IsMkRBQTJELGdCQUFnQixnQkFBZ0IsOENBQThDLGdCQUFnQix3Q0FBd0MseUNBQXlDLDRDQUE0QyxpQ0FBaUMsZ0JBQWdCLDBDQUEwQyxnQkFBZ0IsZ0JBQWdCLDBDQUEwQyxnQkFBZ0IseUNBQXlDLDhDQUE4QyxnQkFBZ0Isd0NBQXdDLDRDQUE0QyxrREFBa0QsZ0JBQWdCLDJDQUEyQyxtQ0FBbUMsc0RBQXNELGdCQUFnQix5Q0FBeUMsd0NBQXdDLGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQixnQkFBZ0Isc0RBQXNELGdCQUFnQiwyQ0FBMkMsbUNBQW1DLHNEQUFzRCxnQkFBZ0IseUNBQXlDLHdDQUF3QyxnQkFBZ0IsZ0JBQWdCLGtEQUFrRCxnQkFBZ0IsZ0JBQWdCLHNEQUFzRCxnQkFBZ0IsMkNBQTJDLG1DQUFtQyxzREFBc0QsZ0JBQWdCLHlDQUF5Qyx3Q0FBd0MsZ0JBQWdCLGdCQUFnQixrREFBa0QsZ0JBQWdCLGdCQUFnQixzREFBc0QsZ0JBQWdCLDJDQUEyQyxtQ0FBbUMsa0NBQWtDLHNEQUFzRCxnQkFBZ0Isd0NBQXdDLDRCQUE0QiwwQ0FBMEMsZ0JBQWdCLGtEQUFrRCxnQkFBZ0IsZ0JBQWdCLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLDhDQUE4QyxnQkFBZ0Isd0NBQXdDLDRDQUE0QyxrREFBa0QsZ0JBQWdCLDBDQUEwQyxtQ0FBbUMsK0NBQStDLGlCQUFpQixnQkFBZ0IsbURBQW1ELGlCQUFpQix5Q0FBeUMsbURBQW1ELDBFQUEwRSx1REFBdUQsa0JBQWtCLDRDQUE0QyxvQ0FBb0MsbUNBQW1DLDJEQUEyRCxrQkFBa0IseUNBQXlDLDREQUE0RCw2QkFBNkIsa0JBQWtCLDJEQUEyRCxrQkFBa0IsMENBQTBDLG1DQUFtQyx1RUFBdUUsa0JBQWtCLGtCQUFrQiwyREFBMkQsa0JBQWtCLHlDQUF5QyxvQ0FBb0MsNkNBQTZDLGtCQUFrQix1REFBdUQsa0JBQWtCLGtCQUFrQix1REFBdUQsa0JBQWtCLHdDQUF3QyxvQ0FBb0MscUNBQXFDLDJEQUEyRCxrQkFBa0IsMkNBQTJDLDhFQUE4RSw0QkFBNEIsK0RBQStELGtCQUFrQix3Q0FBd0Msb0NBQW9DLHVEQUF1RCxtRUFBbUUsa0JBQWtCLHlDQUF5Qyx5Q0FBeUMsNkJBQTZCLGtCQUFrQixtRUFBbUUsa0JBQWtCLDBDQUEwQyxtQ0FBbUMsb0RBQW9ELGtCQUFrQixrQkFBa0IsK0RBQStELGtCQUFrQixrQkFBa0IsMkRBQTJELG1CQUFtQixrQkFBa0IsdURBQXVELGtCQUFrQixrQkFBa0IsbURBQW1ELGtCQUFrQixpQkFBaUIsK0NBQStDLGlCQUFpQixnQkFBZ0IsK0NBQStDLGlCQUFpQix5Q0FBeUMsNkNBQTZDLG1EQUFtRCxrQkFBa0IsMkNBQTJDLHdDQUF3Qyw0Q0FBNEMsa0JBQWtCLGtCQUFrQixtREFBbUQsa0JBQWtCLHlDQUF5QyxpREFBaUQsd0VBQXdFLHVEQUF1RCxrQkFBa0IsNENBQTRDLG9DQUFvQyx1Q0FBdUMsMkRBQTJELGtCQUFrQix5Q0FBeUMsOERBQThELDZCQUE2QixrQkFBa0IsMkRBQTJELGtCQUFrQiwwQ0FBMEMsbUNBQW1DLHFFQUFxRSxrQkFBa0Isa0JBQWtCLDJEQUEyRCxrQkFBa0IseUNBQXlDLG9DQUFvQyw2Q0FBNkMsa0JBQWtCLHVEQUF1RCxrQkFBa0Isa0JBQWtCLHVEQUF1RCxrQkFBa0Isd0NBQXdDLG9DQUFvQyxxQ0FBcUMsMkRBQTJELGtCQUFrQiwyQ0FBMkMsNEVBQTRFLDBCQUEwQiwrREFBK0Qsa0JBQWtCLHdDQUF3QyxvQ0FBb0MscURBQXFELG9EQUFvRCxtRUFBbUUsa0JBQWtCLHlDQUF5QywyQ0FBMkMsNkJBQTZCLGtCQUFrQixtRUFBbUUsa0JBQWtCLDBDQUEwQyxtQ0FBbUMsa0RBQWtELGtCQUFrQixrQkFBa0IsK0RBQStELGtCQUFrQixrQkFBa0IsMkRBQTJELG1CQUFtQixrQkFBa0IsdURBQXVELGtCQUFrQixrQkFBa0IsbURBQW1ELGtCQUFrQixrQkFBa0IsK0NBQStDLGtCQUFrQixpQkFBaUIsMkNBQTJDLGlCQUFpQixnQkFBZ0IsMkNBQTJDLGlCQUFpQiw0Q0FBNEMsK0NBQStDLGtCQUFrQiw0Q0FBNEMsb0NBQW9DLG1DQUFtQyxtREFBbUQsa0JBQWtCLDBDQUEwQywyQ0FBMkMsa0JBQWtCLGtCQUFrQiwrQ0FBK0Msa0JBQWtCLGtCQUFrQiwyQ0FBMkMsa0JBQWtCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDRGpnVCxpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDQW5DLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNBaEMsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FDQS9CLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNBaEMsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FDQXhCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7VUNySUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEM7QUFDWTtBQUNFO0FBQ1I7QUFDSjtBQUNJO0FBQ3FCO0FBQ0U7QUFDakM7QUFDRjtBQUNwQztBQUNPO0FBQ1A7QUFDQTtBQUNBLGFBQWEsdUJBQXVCLDZFQUFjLGVBQWU7QUFDakUsYUFBYSx1QkFBdUIsb0VBQVEsYUFBYTtBQUN6RCxhQUFhLGtCQUFrQiw4RUFBZSxjQUFjO0FBQzVEO0FBQ0Esb0JBQW9CLG9EQUFNLFNBQVMsQ0FBQyw2REFBUSxFQUFFLDRCQUE0Qiw2REFBVSxpRkFBVyw4RUFBTyx3RUFBSyx3RUFBTyxvRUFBQztBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsMEVBQTBFLGNBQWMsSUFBSSxvQkFBb0I7QUFDaEgsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0VBQXNFLFFBQVE7QUFDOUU7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvLi9ub2RlX21vZHVsZXMvZmFzdC1jcmVhdG9yL2Rpc3QvZW50cnkuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdNYWluLm1wdHMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9hcnJvdy5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL2ltZy9iaW5hbmNlLWNvaW4tbG9nby53ZWJwIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy9pbWcvY2xvc2Uuc3ZnIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy9pbWcvZXRoX2xvZ28ucG5nIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy9pbWcvbWF0aWMtdG9rZW4taWNvbi53ZWJwIiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS8uL3NyYy9pbWcvcGVuLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL3VzZGNfbG9nby5wbmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdVdGlscy5qcyIsIndlYnBhY2s6Ly9AaWRyaXNzLnh5ei90aXBwaW5nLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BpZHJpc3MueHl6L3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGlkcmlzcy54eXovdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdNYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZyb21EZWZpbml0aW9uKCkge1xuICB2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFkb2N1bWVudE9iamVjdCkgZG9jdW1lbnRPYmplY3QgPSBkb2N1bWVudDtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudE9iamVjdC5jcmVhdGVFbGVtZW50KGF0dHJpYnV0ZXMudGFnTmFtZSB8fCAnZGl2Jyk7XG4gIHJlcGFpckNsYXNzZXMoYXR0cmlidXRlcyk7XG5cbiAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTGlzdCcpIHtcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihhdHRyaWJ1dGVzLmNsYXNzTGlzdCksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIHggPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoeCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAndGV4dCcpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHQ7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0dHJpYnV0ZXMuaHRtbDtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnZGF0YScpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5kYXRhc2V0LCBhdHRyaWJ1dGVzLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5hcHBlbmRDaGlsZCh4IGluc3RhbmNlb2YgTm9kZSA/IHggOiBjcmVhdGUoeCwge30sIGRvY3VtZW50T2JqZWN0KSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICAgIGVsZW1lbnRbYXR0ck5hbWVdID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICBpZiAoX3R5cGVvZihhdHRyaWJ1dGVzW2F0dHJOYW1lXSkgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYXR0cmlidXRlc1thdHRyTmFtZV0pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV1bc3R5bGVOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RhZ05hbWUnKSB7Ly9ub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSA9PT0gdHJ1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJOYW1lKTtlbHNlIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSAhPT0gZmFsc2UpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGFpckNsYXNzZXMob2JqKSB7XG4gIGlmIChvYmouY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFvYmouY2xhc3NMaXN0KSBvYmouY2xhc3NMaXN0ID0gW107XG4gICAgb2JqLmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShvYmouY2xhc3NOYW1lLnNwbGl0KCcgJykpKTtcbiAgICBkZWxldGUgb2JqLmNsYXNzTmFtZTtcbiAgfVxufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiAkcmV0dXJucyB7b2JqZWN0fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHNlbGVjdG9yID0gKHNlbGVjdG9yICsgXCJcIikudHJpbSgpO1xuICB2YXIgcG9zaXRpb24gPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlRWxlbWVudCgpIHtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgdmFyIGNhbkJlVGFnbmFtZSA9IHRydWU7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhciA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcbiAgICAgIHBvc2l0aW9uKys7XG5cbiAgICAgIGlmIChfY2hhciA9PT0gJyMnKSB7XG4gICAgICAgIHJldC5pZCA9IHBhcnNlVGV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJy4nKSB7XG4gICAgICAgIGlmICghcmV0LmNsYXNzTGlzdCkgcmV0LmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICByZXQuY2xhc3NMaXN0LnB1c2gocGFyc2VUZXh0KCkpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJ1snKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHBhcnNlVGV4dChbJz0nLCAnXSddKTtcbiAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dID09ICc9Jykge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ1wiJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICddJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgcmV0W2F0dHJOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnXScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgvXFxzLy50ZXN0KF9jaGFyKSkge1xuICAgICAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGggJiYgL1xccy8udGVzdChzZWxlY3Rvcltwb3NpdGlvbl0pKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0LmNoaWxkcmVuID0gW3BhcnNlRWxlbWVudCgpXTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuQmVUYWduYW1lKSB7XG4gICAgICAgIHJldC50YWdOYW1lID0gX2NoYXIgKyBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY2FuQmVUYWduYW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlVGV4dCgpIHtcbiAgICB2YXIgZXNjYXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJy4nLCAnIycsICcsJywgJ1snXTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIyID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoL1xccy8udGVzdChfY2hhcjIpIHx8IGVzY2FwZS5pbmNsdWRlcyhfY2hhcjIpKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBfY2hhcjI7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZVZhbHVlKCkge1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjMgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmIChfY2hhcjMgPT0gJ1wiJykge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIzO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcFdoaXRlc3BhY2UoKSB7XG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXI0ID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoIS9cXHMvLnRlc3QoX2NoYXI0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gXCJcIikgcmV0dXJuIHt9O2Vsc2UgcmV0dXJuIHBhcnNlRWxlbWVudCgpO1xufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBkZWZpbml0aW9uID0ge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IG51bGw7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIHBhcmFtc1swXSA9PSBcInN0cmluZ1wiKSBkZWZpbml0aW9uID0gbWVyZ2VPYmplY3RzKGRlZmluaXRpb24sIHBhcnNlU2VsZWN0b3IocGFyYW1zLnNwbGljZSgwLCAxKVswXSkpO1xuICBpZiAoX3R5cGVvZihwYXJhbXNbMF0pID09IFwib2JqZWN0XCIgJiYgIShwYXJhbXNbMF0gaW5zdGFuY2VvZiBOb2RlKSkgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJhbXMuc3BsaWNlKDAsIDEpWzBdKTtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9wYXJhbXMgPSBwYXJhbXM7IF9pIDwgX3BhcmFtcy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW1zW19pXTtcblxuICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtO1xuICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtLm93bmVyRG9jdW1lbnQ7XG4gICAgICBpZiAoIWRlZmluaXRpb24uY2hpbGRyZW4pIGRlZmluaXRpb24uY2hpbGRyZW4gPSBbXTtcbiAgICAgIGRlZmluaXRpb24uY2hpbGRyZW4ucHVzaChwYXJhbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGRvY3VtZW50T2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKGEsIGIpIHtcbiAgcmVwYWlyQ2xhc3NlcyhhKTtcbiAgcmVwYWlyQ2xhc3NlcyhiKTtcblxuICB2YXIgcmV0ID0gX29iamVjdFNwcmVhZCh7fSwgYSwge30sIGIpO1xuXG4gIGlmIChhLmRhdGEgJiYgYi5kYXRhKSB7XG4gICAgcmV0LmRhdGEgPSBfb2JqZWN0U3ByZWFkKHt9LCBhLmRhdGEsIHt9LCBiLmRhdGEpO1xuICB9XG5cbiAgaWYgKGEuY2hpbGRyZW4gJiYgYi5jaGlsZHJlbikge1xuICAgIHJldC5jaGlsZHJlbiA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jaGlsZHJlbiksIF90b0NvbnN1bWFibGVBcnJheShiLmNoaWxkcmVuKSk7XG4gIH1cblxuICBpZiAoYS5jbGFzc0xpc3QgJiYgYi5jbGFzc0xpc3QpIHtcbiAgICByZXQuY2xhc3NMaXN0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShiLmNsYXNzTGlzdCkpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUZyb21EZWZpbml0aW9uOiBjcmVhdGVGcm9tRGVmaW5pdGlvbixcbiAgcGFyc2VTZWxlY3RvcjogcGFyc2VTZWxlY3RvcixcbiAgY3JlYXRlOiBjcmVhdGUsXG4gIG1lcmdlT2JqZWN0czogbWVyZ2VPYmplY3RzLFxuICBcImRlZmF1bHRcIjogY3JlYXRlXG59OyIsIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHZhcmlhYmxlcyl7Y29uc3QgXzU5PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtjb25zdCBfNjA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtjb25zdCBfNjE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO182MC5hcHBlbmQoXzYxKTtjb25zdCBfNjI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgxXCIpO2NvbnN0IF82Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbmQgdG8gXCIpO182Mi5hcHBlbmQoXzYzKTtjb25zdCBfNjQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1wiaWRlbnRpZmllclwiXSk7XzYyLmFwcGVuZChfNjQpO182MC5hcHBlbmQoXzYyKTtjb25zdCBfNjU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO182MC5hcHBlbmQoXzY1KTtjb25zdCBfNjY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfNjYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZUJ1dHRvblwiKTtfNjYuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImNsb3NlXCJdKTtfNjYuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiY2xvc2VcIik7XzYwLmFwcGVuZChfNjYpO2NvbnN0IF82Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfNjAuYXBwZW5kKF82Nyk7XzU5LmFwcGVuZChfNjApO2NvbnN0IF82OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfNTkuYXBwZW5kKF82OCk7Y29uc3QgXzY5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO2NvbnN0IF83MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzY5LmFwcGVuZChfNzApO2NvbnN0IF83MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO183MS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInZhbHVlU2VsZWN0aW9uXCIpO2NvbnN0IF83Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO183MS5hcHBlbmQoXzcyKTtjb25zdCBfNzM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfNzMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtjb25zdCBfNzQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzczLmFwcGVuZChfNzQpO2NvbnN0IF83NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfNzY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkMVwiKTtfNzUuYXBwZW5kKF83Nik7XzczLmFwcGVuZChfNzUpO2NvbnN0IF83Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO183My5hcHBlbmQoXzc3KTtfNzEuYXBwZW5kKF83Myk7Y29uc3QgXzc4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7XzcxLmFwcGVuZChfNzgpO2NvbnN0IF83OT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO183OS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO2NvbnN0IF84MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfNzkuYXBwZW5kKF84MCk7Y29uc3QgXzgxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF84Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiQyXCIpO184MS5hcHBlbmQoXzgyKTtfNzkuYXBwZW5kKF84MSk7Y29uc3QgXzgzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7Xzc5LmFwcGVuZChfODMpO183MS5hcHBlbmQoXzc5KTtjb25zdCBfODQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgICAgIFwiKTtfNzEuYXBwZW5kKF84NCk7Y29uc3QgXzg1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7Xzg1LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7Y29uc3QgXzg2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO184NS5hcHBlbmQoXzg2KTtjb25zdCBfODc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzg4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJDVcIik7Xzg3LmFwcGVuZChfODgpO184NS5hcHBlbmQoXzg3KTtjb25zdCBfODk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfODUuYXBwZW5kKF84OSk7XzcxLmFwcGVuZChfODUpO2NvbnN0IF85MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblxcclxcbiAgICAgICAgXCIpO183MS5hcHBlbmQoXzkwKTtjb25zdCBfOTE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfOTEuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfOTEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb3JlXCIpO2NvbnN0IF85Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfOTEuYXBwZW5kKF85Mik7Y29uc3QgXzkzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzkzLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfOTMuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcInBlblwiXSk7XzkxLmFwcGVuZChfOTMpO2NvbnN0IF85ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO185MS5hcHBlbmQoXzk0KTtfNzEuYXBwZW5kKF85MSk7Y29uc3QgXzk1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfNzEuYXBwZW5kKF85NSk7XzY5LmFwcGVuZChfNzEpO2NvbnN0IF85Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzY5LmFwcGVuZChfOTYpO2NvbnN0IF85Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO185Ny5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC13cmFwcGVyXCIpO2NvbnN0IF85OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO185Ny5hcHBlbmQoXzk4KTtjb25zdCBfOTk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO185OS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJuZXR3b3JrXCIpO2NvbnN0IF8xMDA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOZXR3b3JrOlwiKTtfOTkuYXBwZW5kKF8xMDApO185Ny5hcHBlbmQoXzk5KTtjb25zdCBfMTAxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7Xzk3LmFwcGVuZChfMTAxKTtjb25zdCBfMTAyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzEwMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdCBuZXR3b3JrU2VsZWN0XCIpO18xMDIuc2V0QXR0cmlidXRlKFwiZGF0YS1jaGFpbi1pZFwiLCB2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJjaGFpbklkXCJdKTtjb25zdCBfMTAzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMDIuYXBwZW5kKF8xMDMpO2NvbnN0IF8xMDQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMTA0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzEwNC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldHdvcmtcIik7Y29uc3QgXzEwNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzEwNSk7Y29uc3QgXzEwNj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xMDYuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcIm5ldHdvcmtzXCJdW1wiMFwiXVtcImltZ1wiXSk7XzEwNi5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzEwNC5hcHBlbmQoXzEwNik7Y29uc3QgXzEwNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzEwNyk7Y29uc3QgXzEwOD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTA4LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfMTA5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcIm5ldHdvcmtzXCJdW1wiMFwiXVtcIm5hbWVcIl0pO18xMDguYXBwZW5kKF8xMDkpO18xMDQuYXBwZW5kKF8xMDgpO2NvbnN0IF8xMTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xMDQuYXBwZW5kKF8xMTApO2NvbnN0IF8xMTE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTExLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XzExMS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wiYXJyb3dcIl0pO18xMDQuYXBwZW5kKF8xMTEpO2NvbnN0IF8xMTI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzExMik7XzEwMi5hcHBlbmQoXzEwNCk7Y29uc3QgXzExMz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTAyLmFwcGVuZChfMTEzKTtjb25zdCBfMTE0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtfMTE0LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XzExNC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwibGlzdGJveFwiKTtjb25zdCBfMTE1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTE0LmFwcGVuZChfMTE1KTtsZXQgXzExNj1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Zm9yKGxldCBbX2ZvcmVhY2hLZXksX2ZvcmVhY2hWYWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModmFyaWFibGVzW1wibmV0d29ya3NcIl0pKXtsZXQgbmV0d29yayA9IF9mb3JlYWNoVmFsdWU7Y29uc3QgXzExNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO18xMTYuYXBwZW5kKF8xMTcpO2NvbnN0IF8xMTg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO18xMTguc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcIm9wdGlvblwiKTtfMTE4LnNldEF0dHJpYnV0ZShcImRhdGEtY2hhaW4taWRcIiwgbmV0d29ya1tcImNoYWluSWRcIl0pO2NvbnN0IF8xMTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzExOC5hcHBlbmQoXzExOSk7Y29uc3QgXzEyMD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xMjAuc2V0QXR0cmlidXRlKFwic3JjXCIsIG5ldHdvcmtbXCJpbWdcIl0pO18xMjAuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18xMTguYXBwZW5kKF8xMjApO2NvbnN0IF8xMjE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzExOC5hcHBlbmQoXzEyMSk7Y29uc3QgXzEyMj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTIyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfMTIzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKG5ldHdvcmtbXCJuYW1lXCJdKTtfMTIyLmFwcGVuZChfMTIzKTtfMTE4LmFwcGVuZChfMTIyKTtjb25zdCBfMTI0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzExOC5hcHBlbmQoXzEyNCk7XzExNi5hcHBlbmQoXzExOCk7Y29uc3QgXzEyNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzExNi5hcHBlbmQoXzEyNSk7fV8xMTQuYXBwZW5kKF8xMTYpO2NvbnN0IF8xMjY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzExNC5hcHBlbmQoXzEyNik7XzEwMi5hcHBlbmQoXzExNCk7Y29uc3QgXzEyNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xMDIuYXBwZW5kKF8xMjcpO185Ny5hcHBlbmQoXzEwMik7Y29uc3QgXzEyOD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7Xzk3LmFwcGVuZChfMTI4KTtfNjkuYXBwZW5kKF85Nyk7Y29uc3QgXzEyOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzY5LmFwcGVuZChfMTI5KTtjb25zdCBfMTMwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzEzMC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC13cmFwcGVyXCIpO2NvbnN0IF8xMzE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTMwLmFwcGVuZChfMTMxKTtjb25zdCBfMTMyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtfMTMyLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRva2VuQnV0dG9uXCIpO2NvbnN0IF8xMzM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJDb2luOlwiKTtfMTMyLmFwcGVuZChfMTMzKTtfMTMwLmFwcGVuZChfMTMyKTtjb25zdCBfMTM0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEzMC5hcHBlbmQoXzEzNCk7Y29uc3QgXzEzNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18xMzUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3QgdG9rZW5TZWxlY3RcIik7XzEzNS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNoYWluLWlkXCIsIHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJjaGFpbklkXCJdKTtjb25zdCBfMTM2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMzUuYXBwZW5kKF8xMzYpO2NvbnN0IF8xMzc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMTM3LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzEzNy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRva2VuQnV0dG9uXCIpO2NvbnN0IF8xMzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xMzcuYXBwZW5kKF8xMzgpO2NvbnN0IF8xMzk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTM5LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJ0b2tlbnNcIl1bXCIwXCJdW1wibG9nb1VSSVwiXSk7XzEzOS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzEzNy5hcHBlbmQoXzEzOSk7Y29uc3QgXzE0MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzEzNy5hcHBlbmQoXzE0MCk7Y29uc3QgXzE0MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTQxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfMTQyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJuYW1lXCJdKTtfMTQxLmFwcGVuZChfMTQyKTtfMTM3LmFwcGVuZChfMTQxKTtjb25zdCBfMTQzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTM3LmFwcGVuZChfMTQzKTtjb25zdCBfMTQ0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzE0NC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO18xNDQuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcImFycm93XCJdKTtfMTM3LmFwcGVuZChfMTQ0KTtjb25zdCBfMTQ1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMzcuYXBwZW5kKF8xNDUpO18xMzUuYXBwZW5kKF8xMzcpO2NvbnN0IF8xNDY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEzNS5hcHBlbmQoXzE0Nik7Y29uc3QgXzE0Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XzE0Ny5zZXRBdHRyaWJ1dGUoXCJ0YWJpbmRleFwiLCBcIi0xXCIpO18xNDcuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcImxpc3Rib3hcIik7Y29uc3QgXzE0OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE0Ny5hcHBlbmQoXzE0OCk7bGV0IF8xNDk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2ZvcihsZXQgW19mb3JlYWNoS2V5LF9mb3JlYWNoVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlc1tcInRva2Vuc1wiXSkpe2xldCB0b2tlbiA9IF9mb3JlYWNoVmFsdWU7Y29uc3QgXzE1MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO18xNDkuYXBwZW5kKF8xNTApO2NvbnN0IF8xNTE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO18xNTEuc2V0QXR0cmlidXRlKFwicm9sZVwiLCBcIm9wdGlvblwiKTtfMTUxLnNldEF0dHJpYnV0ZShcImRhdGEtY2hhaW4taWRcIiwgdG9rZW5bXCJjaGFpbklkXCJdKTtfMTUxLnNldEF0dHJpYnV0ZShcImRhdGEtYWRkcmVzc1wiLCB0b2tlbltcImFkZHJlc3NcIl0pO2NvbnN0IF8xNTI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzE1MS5hcHBlbmQoXzE1Mik7Y29uc3QgXzE1Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xNTMuc2V0QXR0cmlidXRlKFwic3JjXCIsIHRva2VuW1wibG9nb1VSSVwiXSk7XzE1My5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzE1MS5hcHBlbmQoXzE1Myk7Y29uc3QgXzE1ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtfMTUxLmFwcGVuZChfMTU0KTtjb25zdCBfMTU1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO18xNTUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF8xNTY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodG9rZW5bXCJuYW1lXCJdKTtfMTU1LmFwcGVuZChfMTU2KTtfMTUxLmFwcGVuZChfMTU1KTtjb25zdCBfMTU3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzE1MS5hcHBlbmQoXzE1Nyk7XzE0OS5hcHBlbmQoXzE1MSk7Y29uc3QgXzE1OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE0OS5hcHBlbmQoXzE1OCk7fV8xNDcuYXBwZW5kKF8xNDkpO2NvbnN0IF8xNTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzE0Ny5hcHBlbmQoXzE1OSk7XzEzNS5hcHBlbmQoXzE0Nyk7Y29uc3QgXzE2MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xMzUuYXBwZW5kKF8xNjApO18xMzAuYXBwZW5kKF8xMzUpO2NvbnN0IF8xNjE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xMzAuYXBwZW5kKF8xNjEpO182OS5hcHBlbmQoXzEzMCk7Y29uc3QgXzE2Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfNjkuYXBwZW5kKF8xNjIpO181OS5hcHBlbmQoXzY5KTtjb25zdCBfMTYzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO181OS5hcHBlbmQoXzE2Myk7Y29uc3QgXzE2ND1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO2NvbnN0IF8xNjU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xNjQuYXBwZW5kKF8xNjUpO2NvbnN0IF8xNjY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMTY2LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzE2Ni5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbmRcIik7Y29uc3QgXzE2Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xNjYuYXBwZW5kKF8xNjcpO2NvbnN0IF8xNjg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzE2OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlNlbmRcIik7XzE2OC5hcHBlbmQoXzE2OSk7XzE2Ni5hcHBlbmQoXzE2OCk7Y29uc3QgXzE3MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzE2Ni5hcHBlbmQoXzE3MCk7XzE2NC5hcHBlbmQoXzE2Nik7Y29uc3QgXzE3MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMTY0LmFwcGVuZChfMTcxKTtfNTkuYXBwZW5kKF8xNjQpO3JldHVybiBfNTl9XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnZG1sbGQwSnZlRDBpTUNBd0lESXdJREl3SWlCbWFXeHNQU0lqT1dOaE0yRm1JaUIzYVdSMGFEMGlNakJ3ZUNJZ2FHVnBaMmgwUFNJeU1IQjRJajROQ2lBZ0lDQThjR0YwYUNCbWFXeHNMWEoxYkdVOUltVjJaVzV2WkdRaURRb2dJQ0FnSUNBZ0lDQWdaRDBpVFRVdU1qa3pJRGN1TWprellURWdNU0F3SURBeE1TNDBNVFFnTUV3eE1DQXhNQzQxT0Rac015NHlPVE10TXk0eU9UTmhNU0F4SURBZ01URXhMalF4TkNBeExqUXhOR3d0TkNBMFlURWdNU0F3SURBeExURXVOREUwSURCc0xUUXROR0V4SURFZ01DQXdNVEF0TVM0ME1UUjZJZzBLSUNBZ0lDQWdJQ0FnSUdOc2FYQXRjblZzWlQwaVpYWmxibTlrWkNJdlBnMEtQQzl6ZG1jK1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSbm9CQUFCWFJVSlFWbEE0VEc0QkFBQXZHQUFHRUwrQ29HM2JlUHZQbjlSNWhZYkN0bTBiZHZ6LzhCSkJ0azFuZEgrNXM0MGt5Y25NUFZwNG1LUkFDdVNmRG9YL0crQ2Z0VUFSUUlGVENLQVF3QUE3UkFrUkJFRTRxTkVKRFVGaGx5QllvQ1RBQXFHaEk1andJM2pLQmlIa29PT1BGd29JZ21BWXhHM28xT29OaFIxQ0NMRmloaWdjMGdMTUVFSVVSTDNkQldmMkdRSUl0bTBkYjA2YlduRlNJN1p0MjYrWS8xUis1ZXNNSXZxdndHM1VCbzVOZDErQkZVYzZVZFQ0Y3lURHBKcU1SV1NrZ29RbWFnaG9vb2FnTHR2SnpvRGpzcSsvbGc3SDhOM1RwZWJEWHRiUi9UYlRaWFpsRUxCWERyTEtYQmpwMllzdHM2ajZlSGkveDk1WXBHM1lYNERBb09Mbkx1N0dscDhYVG5ER2I3RTMra25DUTlsWEg0R2IvRXFXaFd2QVVUbklJTllTa1hVUmVKdUp5UFFEU0cxRXBCM1NsUWY0TmFnckMwVmlVUEZacEU5eDZlbG1Qd2s4ZVRsVEd3Yjg1YXp2YjVrNXg4US94aHYzYTNMc3h2bFNmaU5JS0w4cUpLeit3VDkrRGdvd2lRcU8vVTcxL3d3PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5pQjNMVFlnZEdWNGRDMW5jbUY1TFRVd01DQnRiQzFoZFhSdklpQm1hV3hzUFNKdWIyNWxJZzBLSUNBZ0lDQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSE4wY205clpUMGlJelppTnpJNE1DSWdjM1J5YjJ0bExYZHBaSFJvUFNJeUlpQjNhV1IwYUQwaU1qUndlQ0lnYUdWcFoyaDBQU0l5TkhCNElqNE5DaUFnSUNBOGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDJJREU0VERFNElEWk5OaUEyYkRFeUlERXlJaTgrRFFvOEwzTjJaejQ9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBTUFBQUNkdDRIc0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQU1BVUV4VVJVeHBjV3g3YlAvLy8renY4T3Z1Nyt2dTcvLy8vLy8vLyt2dTcvLy8vK3p2OEwrL3YrdnU3K3J0N3VydDd1enY4T3p2Ny9MMTl1M3Y4T3Z0N3UzdzhlcnU3dXZ1Nyt6dzhlM3c4YUZrLys3eTlPenY4T3p1OE8veTh1enY4UEwxOXNDcXF1bnM3UEQwOWU3dTd1dnY3K2Z0N2ZEeTlPN3k4dXZ1N3V6dTcrcnU3OHpNek92cjcrL3o4K3JzN3U3eDgrenY4ZXZ1OE8zdzhlN3c4dXp1NytqbzYrWG41L0wxOXZIMTl2TDE5dXZ1Ny9EejllN3k5T3Z1NysveTgvSHo5ZS96OVBIMTl2RHo5T3pzN092dzhPdnk4dTN3OG4vLy8vRDA5ZkgwOWU3eDhlM3c4ZTN3OGV2djcrdnY4T3p2OE8zeDhldnY3K3Z3OFBMMTllN3g5T3Z0N3V6dzhldnY4Tzd4OHU3eTgrM3c4dXp2OEM4d01JS0RoQk1URXpRMU5UVTJOdXZ1NytydDdvU0ZoakV5TXUveTgvWDQrUkVSRVMwdUxvT0VoZmI1K2pJek0vRHo5Tzd4OG54OWZlbnM3VEF4TWZQMjkvTDE5djMvLyszdzhmTDE5L3ovL3hVVkZYdDhmWUdDZy9qOC9EYzRPUFQ0K0NRbEpSUVVGUDcvLzRXR2gzeDlmaWNvS1AvLy8vcjkvMytBZ1llSmlmcjkvaTR2THpNME5Dc3NMUGY2KytucjdQVDMrSHA3ZkNrcUtpSWpJMzUvZ0gxK2Z5b3JLelkzTjliWTJkZmEyeGNYRitYbzZmbjgvZnYvLzRtS2k0Q0Jnc2ZKeXVmcDZ2ajcvZlQ0K1F3TkRBUUVCUER6OUxPMXRUMCtQdEhUMUNFaElSOGZINnV0cmlNa0pGMWVYaVluSjBORVJFVkdSdlg1K3JhNHVZK1FrY0hEeE43aDRveVBqNlducUZOVlZRY0hCL0R6OVd4dGJwV1dsOHpPejc3QXdhR2pwRXRNVEJzYkczZDRlWnllbjNSMmR1UG01M2g1ZXVqcTYrSGs1WmlabXNUSHlOdmUzckN5czZtc3JkUFYxb0tFaFdSbFplcnQ3eGdaR1p1Y25majcvTjNnNFZwY1hKS1VsV1pvYUtDaG9zakx6THE5dnF5dXIvSDE5czNRMFRVMU52YjYrMjV3Y0dscmE4ck56a0ZDUWljbko5bmIzT0RpNC9MMjkxRlNVMkJpWWtkSlNidSt2ejlCUVNNakk4SEV4ZXp3OFZkWldlL3k5S2lxcTdDeXNxU21wMHhOVGpvN081YVltYzNQMEU1T1R2VDI5L0gwOVZaWFdIRnpjNTZnb0dKalk3aTZ1NGErM0dFQUFBQmJkRkpPVXdBQkF2ejkrd1FCL2dQNEJQcjgvdjI2OU5iNytoaU9LZTBCanV0ZXFHTG5BMkg4Rm9jVmQ0NlErTmdGS0VFL3JhbHI3NC9xTGl5L3d2M0ViVzNIL29hRzYrb2NlQ2gzQXRQU1hmZlFrTkhPcmFocjlWM1B6dGIrL29hcXZkd3hBQUFIRTBsRVFWUll3NDFYZDF3VFp4ait3QXQzQVZFY1FLbTBiaEZYVzBXNzY5NnIyejh1TWNrbGw1RGtJbG1GcEdrZ0NXVVRDQ05TRkZ3LzkxYmNvdzdjMVZhcHRxNnFIWGJ2M1hSK2R3RzkreTVndno4Z3Y3dDduM3ZYUGUvekFpQTZLVEh3VC9Ua0dmY25kTStJSmV5eEdkMFQwbDVNeHVIRkdCemMrK0JTQUtURFI4MksxYllZTExTZEpPMjB4ZENpbmZseTJ2QTRlT2VlRU5CODRxRHBXcHZCaEdGWVY0S0VoK2dLZjVvTU51MjBRWW5jQXgyY2FCd2tqaDF2ODNlUllKd3RQQ29WOTQvQUpGMjAyUlBHOWdkNGRFZXZqM3F5dDQyV1lPU2RvNkpwVmR0dlRNSms5MzRxQ3NTMUgvMllSN01aQ1VIeTdFUEI0TFU3Q0NRQklSNGIzVTRtY0J3ODJLMUZZRTZTbEhiYkxTM0Z1MEJJNnJzOXlENGJ3UjRmOVRvZFR3cnRyUjhlSzExWG44Vy9GazhYcGFXSUVhTHd1QWZ5TWVIcllRbVhiS3ZRYkZwaVV2RXZFcDN5SDRqRG81RDNwL1I1S0s4ellrNVMvalBlYXRjYWo5QUZrdXljOTVCVTZBTXV4Ui9PaXhmWmh4WTJxTDIxeFptTnl5amhuZmk4aDNGQkptTkFVcjdvL2JDRUY3eWVCVXJ6eGcwaEZYS3JjLzVnRU1PdmY5OUZQVVgybEdXN1E2OWVvTXcwZm4wUURZTHN1YWp2M2Fic0E1SmY2TmRGL1A3bXhRMXlGc0JjdXVwZEJ2R2hTNzl1dzBCMFd3S2tUNzhhTDNiZzA3Y2NhZzVBWmd3Y2JrRmRpSzkvSXJvMURWTHdmTFpFbkFEcjZpcTlQQXdnTTFjZU1DQjVKQ1haajRTRHdQR0J2Ujd2U29yUHZ1bzdBQnJmWjNiME5zSDA2cy9WVWdvR1JIQ0E4bCtwVU12YkFHQVErK3JMa1VkNjJBYXdMdUJnNEgwTUljNWdrOGNwdnd0Z3psUUdyVWdReERNakU4RlVXTTFKdGdnWkNCMTBxSGtBTXVQNnZlSXMyS2F3elRCMGlCOFR0OENIYkFKNEFETE54cFZvSlRyNWh3eUZTUmloRmRtVDl2SnRCU2hBNVJmSFRjaGptSFlFVEdKU25rU2N3WlZjQnZrQXNwTEFZclFmSmJZa1dJU1hESmdvQVovSTI0N2UwUVlBejM2L01BM1lsamt4SURuV2hOWkF4Unp4aGdOd3lnc0xhdHZNamU3UExlOEk2MkJLSHdaU3QyQ2lESjdpS3VCMDZndmxlemV2L2Rpc2FVVll2eE1KQXRPbWdzRkxFUUNWNlkzRkRYcG9yaTRzZUh1VEpqTlhkOTVkckRHenpWRHoxVzFhOEZGaFMyZURCRFFGbE9XcVErMTBlZ29yTHE2U2FXcU5PVHFkcm01TktZUW9OZ1lXQ0V1SkdSSkFkd3VCWlBCc2xWUHU4UnpkNVNvMktwVktUWTV1L255ZExuZHREUnRKelRkQ2pyYk9BeG1pUHQ1WHRWaTk5MDJGckVTcFZDakNBUERvNWgveXlVcDh1d1M5UU5BWklOYU9ESUlERFhJWXVrd0JyUlU4QU5hTjgyNmorOElpZmhEMmRJQitSS2NMTnNEUWxXRnpBUUFMVVJkUVhMZnk4MGdBQXUzQkVyZkMxV2FPQU16UHlkbTkvUDB5UVRlQmRHRUlxdTh2djFkVGZCZUJENUJidDN6Mzc2ZXU4UjJ3eDRJTVd1aUQzVy85OFhlZjBTVUdxTk90ME95MEdtZ0JLMldBZVZZQmdPa0V4UmlPWC9yRnA2d1ZBdVRrcmppa1gzSmpXZFpDWGgwSVMzZTBrZWltSDRJaHVpeDR0TGlVaTZNVmdBMytuN05MUTJXTmZ3VjVETTgyMG14aEsxUCt4dW96emN3MTdmYUxsV1lJd1FIQTRGZDg5RytaMWRCMGJ1TVBSUlMvbFFlRFZJUlBLTzJab3p1Mms3VGY5Tk5tWDRtTEJjalJyZkNkcExVVzh1K1BjczVsWndtKzUxUXdMRjMwT1o5MGVIOWR6ZEJsSndvL3FIU1YxT1h1emoxOHV5WGt2N0xMSGZpVHRLdjRuM05zTW9pWmczelBLdWEwV2w5VnRiTXB4SlJkdjFWYXVuejNyc3N0SWNQWm16NmZwdVEzdjhBQncxekk2MGtvS2JORDFhTjNlTFllWjZ4L2JQMjU5dW95eTdMbUhZcjFaa1hnb0hBNFNQSWdwVVVnVlZWb3AwT3RkMVpzYXpUUlpjM05aYTh3YjIwT1pCcEwxdDlFbUowalZSelNlaWVVVXBic2dLU3NMdkFlQ1lZWXEvYlVCbmVOMGF5cDNOeU0wQW1rZFZaYlRCRU5Gc3E2dW9BbFZMMjNZVjN6NllwU3Q5SE04dEdCRzFrSUtVK0M1bE5CNHNobkNCR3ZiK1Y0WFM5M0ZHNWF3M0dpY2MyT29uSmt1dDQzRUU1R2RyamFlb2hHaSttQ2w1c01ubVBzMjFsSzNyQ0hWQ0h6blJ1dWNMejM3OFdJbWIycDBNbFN1N3E2bGh1dXBTNTB1SFo5dk5mQXNGU1Rna2ZFODUyeU5IS3pvWFV5YWR6cldzcmJFUmhRNGtRL1VTL1dlTloxN0hRSUF4Z0R4OURKR2wvL3RMUk42VVdEeWQzRUlzdWVkUWxxbkxCRzh2MWNMbFNyck1oS2h1cXNJNWxIaFlMT3NBZm00dUpHYlZZSE1vOXRoc0g1RVlUdWw2MDZNWEFTcVNBVW1rbDhvZG1PMUZVeDd6dWdVdFc0My9PclVLbjduRkRxd2xwS3hXS2JsWnBPcjZ0eTFidUkxTzJjOTJ5ZktEeUMzTzlFb0xYY1gxRHQycmhWV0FFQ2l5RDNXUjlTMG9wRUM0ZGw1ZUhLYzBXaWhTTXE4c29DVjU1NlpPVWhtY0x2dmhXUVVMc3JEN2Qwalg0TVdib29hM0MxaGVLWjc4bCtkRXo3NjJjY3UvWkJDUDdheHpEVTNiV1B0blcwOW9VWHovN2pKbVJySXkrZXI5bkdqMHZzY1BFTXI3NkpnNlpGWG4ybkQ1cDRyOVczZGZtT0d6NTc3a3poOGgwN2E5Unc2ZjladmxrSXRrZng1QmxwQ2ZNeTBra2lQV05lUWxycU1OYnhtQlR4MC84QnNQOEQ1T1dkNHM4QUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmh3Q0FBQlhSVUpRVmxBNFRBOENBQUF2R0FBR0VEL2tJSklrUmFvbi8yNTVwdXBKaE1PMmpSeUpIL3J2TjQwbElDanlmelMyalNRcHFqM3JtY245UEQ3L3JQNjJEcURPd3FnWlJTQUVrUkZHS0lvaUl3UmhGR0Z1anZ0dnRqbUsxKzN4bjZPdy9acEEySXBRL0lZZFJNZ2NqdGR0anRmdDhkdnJkdjJzQ0x2OVJjV01vcllqRkxZaU9INUlNTncyaUIyejdTQXl3MUdFMmkrQmhJUWZLaVIwVVlsQWhJd0l4T1hkRFFFdEJEeXd3QXNEZkRCQndBNEJEUVFVQ0VDUWJkdDA5R003YmR1MmJkdkdpZC83c1kyQmYzUjZCaEg5WitTMmpTUEpVMjVsMTY5Z2VIcGpxVXpGN1hCWE1xbVlseEV6a2k2NHdOZFZTRWRFU09TY0VOT1pTd2hJbHZDSEtDWDUreUlBbjU4VlRaSGJSck1BL0s5YlI5OVVMTmtvdzZRZG9KODdiVEw5eEJYeENYR2ttWGdlNUxwZlZUL1hxNjVkZkJOSlBwNXlnVXhLeDIvcDEyNlRZczlQL1lKRFV4a0FRelVQZmlDOHJEdGd6dy9lV1Y0eVpZNjZSd0xRay9Yck9aT2krL2lIQUNoN0FBeGI3L3p3K1orV0dwUWRJeWJEOUQwQlBBNkF6RXE2enZDKzJpeHYzZmpBYWFka2xnQU9EMER1WjR6bTBYWkY0L0t6SHdoZUdZWUJlTW9BeU85eGo5STJmN04yVGdGNlorRW9ad0FBN01maHBYOWJzeElDQWpkR2prektCZjZHK2pkbExmdmY1S0pQTWtYZ1NzWHpFT2g3V2JCckIyZHJWQU0zQlBrNDk0OEVFbkl4cHBlMTdYeFNPTks4dnlvaS9UN2Nldlh6L2lxL0IyS3lmaCt2QjlVM3AvcXUvYk9kMWZlWkFRQT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROU0IzTFRVaUlIWnBaWGRDYjNnOUlqQWdNQ0F5TUNBeU1DSWdabWxzYkQwaUl6QXdNQ0lnZDJsa2RHZzlJakl3SWlCb1pXbG5hSFE5SWpJd0lqNE5DaUFnSUNBOGNHRjBhQ0JrUFNKTk1UTXVOVGcySURNdU5UZzJZVElnTWlBd0lERXhNaTQ0TWpnZ01pNDRNamhzTFM0M09UTXVOemt6TFRJdU9ESTRMVEl1T0RJNExqYzVNeTB1TnpremVrMHhNUzR6TnprZ05TNDNPVE5NTXlBeE5DNHhOekpXTVRkb01pNDRNamhzT0M0ek9DMDRMak0zT1MweUxqZ3pMVEl1T0RJNGVpSXZQZzBLUEM5emRtYytcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FZQUFBQ3FhWEhlQUFBRFEwbEVRVlI0WHRYWk1XNFVRUkNGWVk3QUVaeVpDM0FCVHNBRk9BRUppU1ZIaEtRRUpJU2tYQUdSSTVBUVFyTGtBQW1SbUJDY0VCQVpqWVZYOHJkVjNiVXpzN1BqWC9xVGZhOTd1bnFOMkxYdjNWdUk0NU9QUDQ1UFBsMFZ2WFQ5blNNWWFwTHV2MW84K056NnZGV3c0NC8zWEs3am4wbHdzRVgxUEl2aFFRNnQ1OXNyUG53dGVzN1o4WUZyMVhQUGdnOVp1NTUvRW02K3E2ZHZ2Mis5MXZQeHk3T3JoODgvYjcyK2k4NHhDamV0S3VZOXhieXE4K3lFbTFYTXNOY3p3MTVGNXlyalJpM2ZuLzMyckxldzM3UEYrYzgvVy8yV3psWENUVnIyc0YrMWgvMld6dGZFeFMxYjJCMXJDN3N0blRQRmhaa1o5dVl5dzE2bWM0YTRLRFBEWHFhWVoyYll5M1RlVzFTLzFXWFlheW5tTFRQc1pUcjNCb3VSR2ZaNmlublBESHVSenIzQlltU0VuWXBpWGpIQ1R1VFJzeS8zblgzUjRhTzl6S3RHMklsMC9sRVhZTjZ6aXV0Nmlubms1T0VIN0dTT3dUMWFSdGlKbkhRQjVpM0g0ajR0eFR5eWZBRVJkaklqN0dUZEo2L1B0enFaRVhaMDlBV1l0eFJ6RmZPV1lxNy9oKzkvK0JIenpPRWRGRHNxNWkzRlBMTDc3ajk5ODgxOXR6cVpyOTVkdUhTck02Y3lmRVczbzkwTEVQT2VZajYzWXE2TFg4QU45dVpTelBWZ0Z4RGgyakdLdWU3OUFxSTlLcmhIVlRIWFJTNGcyNnVINnl1S3VTNTZBVGNPdi9PdjR0cWVZcTRIdVlESWkxOS9mZFExOW5xS3VhN21BbTZNc05OU3pIVjFGeEQ5ZmNGT1N6SFg0UUl1ZlZIRlBGUE1NOFU4VTh3ajkvcGxTTXdqSSt4a2lybnUvZHRnaEIwVjg1WmlycU12WU1CT1pvU2RNVjJOc0tQbEN4Z1U4OHhkL3M4WDkyb3A1cEdiQzZoY1FvU2RscnZpK3BZUmR2VFc4SlVMR0JUem5oVmNVMUhNSTUzL0drc2FZYWVxbUZlTnNLTVBUajhjT2ZzMUZpTWo3RlFVODRvUmRpS2RlOE54NFVQUllJU2RubUxlTThKT3BuUGZ3bkpraHIyV1l0NHl3MTZrODRhNEtETEQzdHhtMklzTS95Z2E0Y0xNRm5hbjJzSnVwbk0yY1hGbUQvdTcyc04rcHZPVmNKT1dQZXozN1BIb3hkZXROWm5PVmNhTmVyYXcyN09GM1o3T3RSTnVWakhDVHM4SU94V2RaeFJ1V25YSzRhZXN2ZEU1SnVIbWE5Znp6NElQV2F1ZWUzWjg0RnIwbkh2Rmh4OWF6N2NZSG1ScHl4OXY5NG1IV2tyUGNYQ0dkOE5Eem0zNnk0eTE0Y0duNnY1M0RnZnE2ZnA5OFEvdHdwbWF1NkhVNFFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImV4cG9ydCBjb25zdCB0b2tlbnMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRXRoZXJldW1cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzMyeDMyLzEwMjcucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiTUFUSUNcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIk1BVElDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3BvbHlnb25zY2FuLmNvbS90b2tlbi9pbWFnZXMvbWF0aWNfMzIucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkJOQlwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQk5CXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvMzJ4MzIvMTgzOS5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweEEwYjg2OTkxYzYyMThiMzZjMWQxOUQ0YTJlOUViMGNFMzYwNmVCNDhcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJVU0QgQ29pblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogNixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weGEwYjg2OTkxYzYyMThiMzZjMWQxOWQ0YTJlOWViMGNlMzYwNmViNDgucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVVNEIENvaW5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRENcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDYsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHgyNzkxYmNhMWYyZGU0NjYxZWQ4OGEzMGM5OWE3YTk0NDlhYTg0MTc0XCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly93YWxsZXQtYXNzZXQubWF0aWMubmV0d29yay9pbWcvdG9rZW5zL3VzZGMuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlVTRCBDb2luXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDhBQzc2YTUxY2M5NTBkOTgyMkQ2OGI4M2ZFMUFkOTdCMzJDZDU4MGRcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3dhbGxldC1hc3NldC5tYXRpYy5uZXR3b3JrL2ltZy90b2tlbnMvdXNkYy5zdmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJFVEggb24gUG9seWdvblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiV0VUSFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHg3Y2VCMjNmRDZiQzBhZEQ1OUU2MmFjMjU1NzgyNzBjRmYxYjlmNjE5XCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9wb2x5Z29uc2Nhbi5jb20vdG9rZW4vaW1hZ2VzL3dFVEhfMzIucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkVUSCBvbiBCU0NcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIldFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4MjE3MEVkMDg4MGFjOUE3NTVmZDI5QjI2ODg5NTZCRDk1OUY5MzNGOFwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vcG9seWdvbnNjYW4uY29tL3Rva2VuL2ltYWdlcy93RVRIXzMyLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4NkIxNzU0NzRFODkwOTRDNDREYTk4Yjk1NEVlZGVBQzQ5NTI3MWQwRlwiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkRhaVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiREFJXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weDZiMTc1NDc0ZTg5MDk0YzQ0ZGE5OGI5NTRlZWRlYWM0OTUyNzFkMGYucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHgxQUYzRjMyOWU4QkUxNTQwNzREODc2OUQxRkZhNGVFMDU4QjFEQmMzXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkRhaVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiREFJXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weDZiMTc1NDc0ZTg5MDk0YzQ0ZGE5OGI5NTRlZWRlYWM0OTUyNzFkMGYucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGFpXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJEQUlcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4OGYzY2Y3YWQyM2NkM2NhZGJkOTczNWFmZjk1ODAyMzIzOWM2YTA2M1wiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vd2FsbGV0LWFzc2V0Lm1hdGljLm5ldHdvcmsvaW1nL3Rva2Vucy9kYWkuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhkQUMxN0Y5NThEMmVlNTIzYTIyMDYyMDY5OTQ1OTdDMTNEODMxZWM3XCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVGV0aGVyXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RUXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA2LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vdG9rZW5zLjFpbmNoLmlvLzB4ZGFjMTdmOTU4ZDJlZTUyM2EyMjA2MjA2OTk0NTk3YzEzZDgzMWVjNy5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJUZXRoZXJcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRFRcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDYsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhjMjEzMmQwNWQzMWM5MTRhODdjNjYxMWMxMDc0OGFlYjA0YjU4ZThmXCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly93YWxsZXQtYXNzZXQubWF0aWMubmV0d29yay9pbWcvdG9rZW5zL3VzZHQuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRG9nZWNvaW5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkRPR0VcIixcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweGJBMmFFNDI0ZDk2MGMyNjI0N0RkNmMzMmVkQzcwQjI5NWM3NDRDNDNcIixcclxuICAgICAgICBcImNoYWluSWRcIjogNTYsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiQlNDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vdG9rZW5zLnBhbmNha2Vzd2FwLmZpbmFuY2UvaW1hZ2VzLzB4YkEyYUU0MjRkOTYwYzI2MjQ3RGQ2YzMyZWRDNzBCMjk1Yzc0NEM0My5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJDdWx0IERBT1wiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiQ1VMVFwiLFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4ZjBmOWQ4OTVhY2E1Yzg2NzhmNzA2ZmI4MjE2ZmEyMjk1NzY4NWExM1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzY0eDY0LzE3NzQyLnBuZ1wiXHJcbiAgICB9LFxyXG5dXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgdGVtcGxhdGUgZnJvbSBcIi4vdGlwcGluZ01haW4ubXB0c1wiO1xyXG5pbXBvcnQgZXRoX2xvZ28gZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9ldGhfbG9nby5wbmdcIlxyXG5pbXBvcnQgdXNkY19sb2dvIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvdXNkY19sb2dvLnBuZ1wiXHJcbmltcG9ydCBhcnJvdyBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2Fycm93LnN2Z1wiXHJcbmltcG9ydCBwZW4gZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9wZW4uc3ZnXCJcclxuaW1wb3J0IGNsb3NlIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvY2xvc2Uuc3ZnXCJcclxuaW1wb3J0IG1hdGljVG9rZW5JY29uIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvbWF0aWMtdG9rZW4taWNvbi53ZWJwXCJcclxuaW1wb3J0IGJpYW5uY2VDb2luTG9nbyBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2JpbmFuY2UtY29pbi1sb2dvLndlYnBcIlxyXG5pbXBvcnQge3Rva2Vuc30gZnJvbSBcIi4vdGlwcGluZ1V0aWxzXCI7XHJcbmltcG9ydCB7Y3JlYXRlfSBmcm9tIFwiZmFzdC1jcmVhdG9yXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlwcGluZ01haW4ge1xyXG4gICAgY29uc3RydWN0b3IoaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IG5ldHdvcmtzID0gW1xyXG4gICAgICAgICAgICB7bmFtZTogJ1BvbHlnb24gJywgaW1nOiBtYXRpY1Rva2VuSWNvbiwgY2hhaW5JZDogMTM3fSxcclxuICAgICAgICAgICAge25hbWU6ICdFdGhlcmV1bScsIGltZzogZXRoX2xvZ28sIGNoYWluSWQ6IDF9LFxyXG4gICAgICAgICAgICB7bmFtZTogJ0JTQycsIGltZzogYmlhbm5jZUNvaW5Mb2dvLCBjaGFpbklkOiA1Nn0sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuaHRtbCA9IGNyZWF0ZSgnZGl2Jyx7fSx0ZW1wbGF0ZSh7aWRlbnRpZmllciwgbmV0d29ya3MsIHRva2VucywgZXRoX2xvZ28sIHVzZGNfbG9nbywgYXJyb3csIHBlbiwgY2xvc2V9KSk7XHJcblxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0JykuZm9yRWFjaChzZWxlY3QgPT4ge1xyXG4gICAgICAgICAgICBzZWxlY3Qub25jbGljayA9IGUgPT4gc2VsZWN0LmNsYXNzTGlzdC50b2dnbGUoJ2lzT3BlbicpXHJcbiAgICAgICAgICAgIHNlbGVjdC5vbmJsdXIgPSBlID0+IHNlbGVjdC5jbGFzc0xpc3QucmVtb3ZlKCdpc09wZW4nKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QgdWwgbGknKS5mb3JFYWNoKGxpID0+IHtcclxuICAgICAgICAgICAgbGkub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGxpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQgPSBsaS5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYztcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYnV0dG9uLnBhcmVudE5vZGUuZGF0YXNldCwgbGkuZGF0YXNldCk7XHJcbiAgICAgICAgICAgICAgICBsaS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXNPcGVuJylcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaFZpc2libGVDb2lucygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcuc2VuZCcpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBjaGFpbklkID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5uZXR3b3JrU2VsZWN0JykuZGF0YXNldC5jaGFpbklkO1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKG5ldyBFdmVudCgnc2VuZE1vbmV5Jywge2J1YmJsZXMgOnRydWV9KSwge2lkZW50aWZpZXIsIGNoYWluSWR9KSlcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnJlZnJlc2hWaXNpYmxlQ29pbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVmlzaWJsZUNvaW5zKCkge1xyXG4gICAgICAgIGxldCBjaGFpbklkID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5uZXR3b3JrU2VsZWN0JykuZGF0YXNldC5jaGFpbklkO1xyXG4gICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnRva2VuU2VsZWN0IGxpJylcclxuICAgICAgICBmb3IgKGxldCB0b2tlbiBvZiB0b2tlbnMpIHtcclxuICAgICAgICAgICAgdG9rZW4uc3R5bGUuZGlzcGxheSA9IHRva2VuLmRhdGFzZXQuY2hhaW5JZCA9PSBjaGFpbklkID8gJycgOiAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRva2VuU2VsZWN0JykuZGF0YXNldC5jaGFpbklkICE9IGNoYWluSWQpIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoYC50b2tlblNlbGVjdCBsaVtkYXRhLWNoYWluLWlkPVwiJHtjaGFpbklkfVwiXWApLmNsaWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9