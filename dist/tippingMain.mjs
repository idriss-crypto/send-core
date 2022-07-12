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

/***/ "./src/tippingMain.mpts":
/*!******************************!*\
  !*** ./src/tippingMain.mpts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _86=document.createDocumentFragment();const _87=document.createElement("header");const _88=document.createTextNode("\r\n    ");_87.append(_88);const _89=document.createElement("h1");const _90=document.createTextNode("Send to ");_89.append(_90);const _91=document.createTextNode(variables["identifier"]);_89.append(_91);_87.append(_89);const _92=document.createTextNode("\r\n    ");_87.append(_92);const _93=document.createElement("img");_93.setAttribute("class", "closeButton");_93.setAttribute("src", variables["close"]);_93.setAttribute("alt", "close");_87.append(_93);const _94=document.createTextNode("\r\n    ");_87.append(_94);const _95=document.createElement("style");const _96=document.createTextNode("\r\n    ::-webkit-scrollbar {\r\n         width: 6px;\r\n         height: 6px;\r\n         }\r\n         ::-webkit-scrollbar-track {\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.1);\r\n         }\r\n         ::-webkit-scrollbar-thumb{\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.2);\r\n         }\r\n         ::-webkit-scrollbar-thumb:hover{\r\n         background: rgba(0,0,0,0.4);\r\n         }\r\n         ::-webkit-scrollbar-thumb:active{\r\n         background: rgba(0,0,0,.9);\r\n         }\r\n     ");_95.append(_96);_87.append(_95);const _97=document.createTextNode("\r\n");_87.append(_97);_86.append(_87);const _98=document.createTextNode("\r\n");_86.append(_98);const _99=document.createElement("main");const _100=document.createTextNode("\r\n    ");_99.append(_100);const _101=document.createElement("div");_101.setAttribute("class", "valueSelection");const _102=document.createTextNode("\r\n        ");_101.append(_102);const _103=document.createElement("button");_103.setAttribute("type", "button");_103.setAttribute("data-value", "1");_103.setAttribute("class", "isSelected");const _104=document.createTextNode("\r\n            ");_103.append(_104);const _105=document.createElement("span");const _106=document.createTextNode("$1");_105.append(_106);_103.append(_105);const _107=document.createTextNode("\r\n        ");_103.append(_107);_101.append(_103);const _108=document.createTextNode("\r\n\r\n        ");_101.append(_108);const _109=document.createElement("button");_109.setAttribute("type", "button");_109.setAttribute("data-value", "2");const _110=document.createTextNode("\r\n            ");_109.append(_110);const _111=document.createElement("span");const _112=document.createTextNode("$2");_111.append(_112);_109.append(_111);const _113=document.createTextNode("\r\n        ");_109.append(_113);_101.append(_109);const _114=document.createTextNode("\r\n\r\n        ");_101.append(_114);const _115=document.createElement("button");_115.setAttribute("type", "button");_115.setAttribute("data-value", "5");const _116=document.createTextNode("\r\n            ");_115.append(_116);const _117=document.createElement("span");const _118=document.createTextNode("$5");_117.append(_118);_115.append(_117);const _119=document.createTextNode("\r\n        ");_115.append(_119);_101.append(_115);const _120=document.createTextNode("\r\n\r\n        ");_101.append(_120);const _121=document.createElement("div");_121.setAttribute("class", "more");const _122=document.createTextNode("\r\n            ");_121.append(_122);const _123=document.createElement("img");_123.setAttribute("alt", "");_123.setAttribute("src", variables["pen"]);_121.append(_123);const _124=document.createTextNode("\r\n            ");_121.append(_124);const _125=document.createElement("span");const _126=document.createTextNode("$");_125.append(_126);_121.append(_125);const _127=document.createTextNode("\r\n            ");_121.append(_127);const _128=document.createElement("input");_121.append(_128);const _129=document.createTextNode("\r\n        ");_121.append(_129);_101.append(_121);const _130=document.createTextNode("\r\n    ");_101.append(_130);_99.append(_101);const _131=document.createTextNode("\r\n    ");_99.append(_131);const _132=document.createElement("div");_132.setAttribute("class", "select-wrapper");const _133=document.createTextNode("\r\n        ");_132.append(_133);const _134=document.createElement("label");_134.setAttribute("for", "network");const _135=document.createTextNode("Network:");_134.append(_135);_132.append(_134);const _136=document.createTextNode("\r\n        ");_132.append(_136);const _137=document.createElement("div");_137.setAttribute("class", "select networkSelect");_137.setAttribute("data-network", variables["networks"]["0"]["code"]);const _138=document.createTextNode("\r\n            ");_137.append(_138);const _139=document.createElement("button");_139.setAttribute("type", "button");_139.setAttribute("id", "network");const _140=document.createTextNode("\r\n                ");_139.append(_140);const _141=document.createElement("img");_141.setAttribute("src", variables["networks"]["0"]["img"]);_141.setAttribute("alt", "");_139.append(_141);const _142=document.createTextNode("\r\n                ");_139.append(_142);const _143=document.createElement("span");_143.setAttribute("class", "name");const _144=document.createTextNode(variables["networks"]["0"]["name"]);_143.append(_144);_139.append(_143);const _145=document.createTextNode("\r\n                ");_139.append(_145);const _146=document.createElement("img");_146.setAttribute("class", "arrow");_146.setAttribute("src", variables["arrow"]);_139.append(_146);const _147=document.createTextNode("\r\n            ");_139.append(_147);_137.append(_139);const _148=document.createTextNode("\r\n            ");_137.append(_148);const _149=document.createElement("ul");_149.setAttribute("tabindex", "-1");_149.setAttribute("role", "listbox");const _150=document.createTextNode("\r\n                ");_149.append(_150);let _151=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["networks"])){let network = _foreachValue;const _152=document.createTextNode("\r\n                    ");_151.append(_152);const _153=document.createElement("li");_153.setAttribute("role", "option");_153.setAttribute("data-network", network["code"]);const _154=document.createTextNode("\r\n                        ");_153.append(_154);const _155=document.createElement("img");_155.setAttribute("src", network["img"]);_155.setAttribute("alt", "");_153.append(_155);const _156=document.createTextNode("\r\n                        ");_153.append(_156);const _157=document.createElement("span");_157.setAttribute("class", "name");const _158=document.createTextNode(network["name"]);_157.append(_158);_153.append(_157);const _159=document.createTextNode("\r\n                    ");_153.append(_159);_151.append(_153);const _160=document.createTextNode("\r\n                ");_151.append(_160);}_149.append(_151);const _161=document.createTextNode("\r\n            ");_149.append(_161);_137.append(_149);const _162=document.createTextNode("\r\n        ");_137.append(_162);_132.append(_137);const _163=document.createTextNode("\r\n    ");_132.append(_163);_99.append(_132);const _164=document.createTextNode("\r\n    ");_99.append(_164);const _165=document.createElement("div");_165.setAttribute("class", "select-wrapper");const _166=document.createTextNode("\r\n        ");_165.append(_166);const _167=document.createElement("label");_167.setAttribute("for", "tokenButton");const _168=document.createTextNode("Coin:");_167.append(_168);_165.append(_167);const _169=document.createTextNode("\r\n        ");_165.append(_169);const _170=document.createElement("div");_170.setAttribute("class", "select tokenSelect");_170.setAttribute("data-symbol", variables["tokens"]["0"]["symbol"]);const _171=document.createTextNode("\r\n            ");_170.append(_171);const _172=document.createElement("button");_172.setAttribute("type", "button");_172.setAttribute("id", "tokenButton");const _173=document.createTextNode("\r\n                ");_172.append(_173);const _174=document.createElement("img");_174.setAttribute("src", variables["tokens"]["0"]["logoURI"]);_174.setAttribute("alt", "");_172.append(_174);const _175=document.createTextNode("\r\n                ");_172.append(_175);const _176=document.createElement("span");_176.setAttribute("class", "name");const _177=document.createTextNode(variables["tokens"]["0"]["name"]);_176.append(_177);_172.append(_176);const _178=document.createTextNode("\r\n                ");_172.append(_178);const _179=document.createElement("img");_179.setAttribute("class", "arrow");_179.setAttribute("src", variables["arrow"]);_172.append(_179);const _180=document.createTextNode("\r\n            ");_172.append(_180);_170.append(_172);const _181=document.createTextNode("\r\n            ");_170.append(_181);const _182=document.createElement("ul");_182.setAttribute("tabindex", "-1");_182.setAttribute("role", "listbox");const _183=document.createTextNode("\r\n                ");_182.append(_183);let _184=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["tokens"])){let token = _foreachValue;const _185=document.createTextNode("\r\n                    ");_184.append(_185);const _186=document.createElement("li");_186.setAttribute("role", "option");_186.setAttribute("data-network", token["network"]);_186.setAttribute("data-symbol", token["symbol"]);const _187=document.createTextNode("\r\n                        ");_186.append(_187);const _188=document.createElement("img");_188.setAttribute("src", token["logoURI"]);_188.setAttribute("alt", "");_186.append(_188);const _189=document.createTextNode("\r\n                        ");_186.append(_189);const _190=document.createElement("span");_190.setAttribute("class", "name");const _191=document.createTextNode(token["name"]);_190.append(_191);_186.append(_190);const _192=document.createTextNode("\r\n                    ");_186.append(_192);_184.append(_186);const _193=document.createTextNode("\r\n                ");_184.append(_193);}_182.append(_184);const _194=document.createTextNode("\r\n            ");_182.append(_194);_170.append(_182);const _195=document.createTextNode("\r\n        ");_170.append(_195);_165.append(_170);const _196=document.createTextNode("\r\n    ");_165.append(_196);_99.append(_165);const _197=document.createTextNode("\r\n");_99.append(_197);_86.append(_99);const _198=document.createTextNode("\r\n");_86.append(_198);const _199=document.createElement("footer");const _200=document.createTextNode("\r\n    ");_199.append(_200);const _201=document.createElement("button");_201.setAttribute("type", "button");_201.setAttribute("class", "send");const _202=document.createTextNode("\r\n        ");_201.append(_202);const _203=document.createElement("span");const _204=document.createTextNode("Send");_203.append(_204);_201.append(_203);const _205=document.createTextNode("\r\n    ");_201.append(_205);_199.append(_201);const _206=document.createTextNode("\r\n");_199.append(_206);_86.append(_199);return _86}


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

var __webpack_exports__TippingMain = __webpack_exports__.TippingMain;
export { __webpack_exports__TippingMain as TippingMain };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXhCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1NDOUlBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7O1NBRUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7Ozs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxpQ0FBaUMsV0FBVztVQUM1QztVQUNBOzs7OztVQ1BBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ1k7QUFDRTtBQUNSO0FBQ0o7QUFDSTtBQUNxQjtBQUNFO0FBQ2pDO0FBQ0Y7QUFDcEM7QUFDTztBQUNQO0FBQ0E7QUFDQSxhQUFhLHVCQUF1Qiw2RUFBYyxnQ0FBZ0M7QUFDbEYsYUFBYSx1QkFBdUIsb0VBQVEsMEJBQTBCO0FBQ3RFLGFBQWEsa0JBQWtCLDhFQUFlLDJCQUEyQjtBQUN6RTtBQUNBLG9CQUFvQixvREFBTSxVQUFVLEVBQUUsNkRBQVEsRUFBRSw0QkFBNEIsNkRBQVUsaUZBQVcsOEVBQU8sd0VBQUssd0VBQU8sb0VBQUM7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLGNBQWM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxRQUFRO0FBQzdFO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtY3JlYXRvci9kaXN0L2VudHJ5LmpzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nTWFpbi5tcHRzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy9pbWcvYXJyb3cuc3ZnIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy9pbWcvYmluYW5jZS1jb2luLWxvZ28ud2VicCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2V0aF9sb2dvLnBuZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL21hdGljLXRva2VuLWljb24ud2VicCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL3Blbi5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy91c2RjX2xvZ28ucG5nIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nTWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5mdW5jdGlvbiBjcmVhdGVGcm9tRGVmaW5pdGlvbigpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghZG9jdW1lbnRPYmplY3QpIGRvY3VtZW50T2JqZWN0ID0gZG9jdW1lbnQ7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnRPYmplY3QuY3JlYXRlRWxlbWVudChhdHRyaWJ1dGVzLnRhZ05hbWUgfHwgJ2RpdicpO1xuICByZXBhaXJDbGFzc2VzKGF0dHJpYnV0ZXMpO1xuXG4gIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXR0cmlidXRlcy5jbGFzc0xpc3QpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciB4ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RleHQnKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdodG1sJykge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2RhdGEnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgYXR0cmlidXRlcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQoeCBpbnN0YW5jZW9mIE5vZGUgPyB4IDogY3JlYXRlKHgsIHt9LCBkb2N1bWVudE9iamVjdCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgICBlbGVtZW50W2F0dHJOYW1lXSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgaWYgKF90eXBlb2YoYXR0cmlidXRlc1thdHRyTmFtZV0pID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdW3N0eWxlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0YWdOYW1lJykgey8vbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gPT09IHRydWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSk7ZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBhaXJDbGFzc2VzKG9iaikge1xuICBpZiAob2JqLmNsYXNzTmFtZSkge1xuICAgIGlmICghb2JqLmNsYXNzTGlzdCkgb2JqLmNsYXNzTGlzdCA9IFtdO1xuICAgIG9iai5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpKSk7XG4gICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gIH1cbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogJHJldHVybnMge29iamVjdH1cclxuICovXG5cblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBzZWxlY3RvciA9IChzZWxlY3RvciArIFwiXCIpLnRyaW0oKTtcbiAgdmFyIHBvc2l0aW9uID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUVsZW1lbnQoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBjYW5CZVRhZ25hbWUgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG4gICAgICBwb3NpdGlvbisrO1xuXG4gICAgICBpZiAoX2NoYXIgPT09ICcjJykge1xuICAgICAgICByZXQuaWQgPSBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICcuJykge1xuICAgICAgICBpZiAoIXJldC5jbGFzc0xpc3QpIHJldC5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgcmV0LmNsYXNzTGlzdC5wdXNoKHBhcnNlVGV4dCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICdbJykge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSBwYXJzZVRleHQoWyc9JywgJ10nXSk7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnPScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXScpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJ10nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoL1xccy8udGVzdChfY2hhcikpIHtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoICYmIC9cXHMvLnRlc3Qoc2VsZWN0b3JbcG9zaXRpb25dKSkge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5jaGlsZHJlbiA9IFtwYXJzZUVsZW1lbnQoKV07XG4gICAgICB9IGVsc2UgaWYgKGNhbkJlVGFnbmFtZSkge1xuICAgICAgICByZXQudGFnTmFtZSA9IF9jaGFyICsgcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNhbkJlVGFnbmFtZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVRleHQoKSB7XG4gICAgdmFyIGVzY2FwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWycuJywgJyMnLCAnLCcsICdbJ107XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMiA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKC9cXHMvLnRlc3QoX2NoYXIyKSB8fCBlc2NhcGUuaW5jbHVkZXMoX2NoYXIyKSkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIyO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIzID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoX2NoYXIzID09ICdcIicpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMztcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyNCA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKCEvXFxzLy50ZXN0KF9jaGFyNCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IFwiXCIpIHJldHVybiB7fTtlbHNlIHJldHVybiBwYXJzZUVsZW1lbnQoKTtcbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgZGVmaW5pdGlvbiA9IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBudWxsO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXNbMF0gPT0gXCJzdHJpbmdcIikgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJzZVNlbGVjdG9yKHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pKTtcbiAgaWYgKF90eXBlb2YocGFyYW1zWzBdKSA9PSBcIm9iamVjdFwiICYmICEocGFyYW1zWzBdIGluc3RhbmNlb2YgTm9kZSkpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyYW1zLnNwbGljZSgwLCAxKVswXSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGFyYW1zID0gcGFyYW1zOyBfaSA8IF9wYXJhbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtc1tfaV07XG5cbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbS5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKCFkZWZpbml0aW9uLmNoaWxkcmVuKSBkZWZpbml0aW9uLmNoaWxkcmVuID0gW107XG4gICAgICBkZWZpbml0aW9uLmNoaWxkcmVuLnB1c2gocGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkb2N1bWVudE9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhhLCBiKSB7XG4gIHJlcGFpckNsYXNzZXMoYSk7XG4gIHJlcGFpckNsYXNzZXMoYik7XG5cbiAgdmFyIHJldCA9IF9vYmplY3RTcHJlYWQoe30sIGEsIHt9LCBiKTtcblxuICBpZiAoYS5kYXRhICYmIGIuZGF0YSkge1xuICAgIHJldC5kYXRhID0gX29iamVjdFNwcmVhZCh7fSwgYS5kYXRhLCB7fSwgYi5kYXRhKTtcbiAgfVxuXG4gIGlmIChhLmNoaWxkcmVuICYmIGIuY2hpbGRyZW4pIHtcbiAgICByZXQuY2hpbGRyZW4gPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2hpbGRyZW4pLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jaGlsZHJlbikpO1xuICB9XG5cbiAgaWYgKGEuY2xhc3NMaXN0ICYmIGIuY2xhc3NMaXN0KSB7XG4gICAgcmV0LmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jbGFzc0xpc3QpKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVGcm9tRGVmaW5pdGlvbjogY3JlYXRlRnJvbURlZmluaXRpb24sXG4gIHBhcnNlU2VsZWN0b3I6IHBhcnNlU2VsZWN0b3IsXG4gIGNyZWF0ZTogY3JlYXRlLFxuICBtZXJnZU9iamVjdHM6IG1lcmdlT2JqZWN0cyxcbiAgXCJkZWZhdWx0XCI6IGNyZWF0ZVxufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YXJpYWJsZXMpe2NvbnN0IF84Nj1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Y29uc3QgXzg3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7Y29uc3QgXzg4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfODcuYXBwZW5kKF84OCk7Y29uc3QgXzg5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtjb25zdCBfOTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZW5kIHRvIFwiKTtfODkuYXBwZW5kKF85MCk7Y29uc3QgXzkxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcImlkZW50aWZpZXJcIl0pO184OS5hcHBlbmQoXzkxKTtfODcuYXBwZW5kKF84OSk7Y29uc3QgXzkyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfODcuYXBwZW5kKF85Mik7Y29uc3QgXzkzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzkzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VCdXR0b25cIik7XzkzLnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJjbG9zZVwiXSk7XzkzLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImNsb3NlXCIpO184Ny5hcHBlbmQoXzkzKTtjb25zdCBfOTQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO184Ny5hcHBlbmQoXzk0KTtjb25zdCBfOTU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2NvbnN0IF85Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZle1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjkpO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgIFwiKTtfOTUuYXBwZW5kKF85Nik7Xzg3LmFwcGVuZChfOTUpO2NvbnN0IF85Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfODcuYXBwZW5kKF85Nyk7Xzg2LmFwcGVuZChfODcpO2NvbnN0IF85OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfODYuYXBwZW5kKF85OCk7Y29uc3QgXzk5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO2NvbnN0IF8xMDA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO185OS5hcHBlbmQoXzEwMCk7Y29uc3QgXzEwMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18xMDEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJ2YWx1ZVNlbGVjdGlvblwiKTtjb25zdCBfMTAyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEwMS5hcHBlbmQoXzEwMik7Y29uc3QgXzEwMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO18xMDMuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMTAzLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCIxXCIpO18xMDMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJpc1NlbGVjdGVkXCIpO2NvbnN0IF8xMDQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEwMy5hcHBlbmQoXzEwNCk7Y29uc3QgXzEwNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfMTA2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJDFcIik7XzEwNS5hcHBlbmQoXzEwNik7XzEwMy5hcHBlbmQoXzEwNSk7Y29uc3QgXzEwNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xMDMuYXBwZW5kKF8xMDcpO18xMDEuYXBwZW5kKF8xMDMpO2NvbnN0IF8xMDg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cXHJcXG4gICAgICAgIFwiKTtfMTAxLmFwcGVuZChfMTA4KTtjb25zdCBfMTA5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzEwOS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18xMDkuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIjJcIik7Y29uc3QgXzExMD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTA5LmFwcGVuZChfMTEwKTtjb25zdCBfMTExPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8xMTI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkMlwiKTtfMTExLmFwcGVuZChfMTEyKTtfMTA5LmFwcGVuZChfMTExKTtjb25zdCBfMTEzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEwOS5hcHBlbmQoXzExMyk7XzEwMS5hcHBlbmQoXzEwOSk7Y29uc3QgXzExND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblxcclxcbiAgICAgICAgXCIpO18xMDEuYXBwZW5kKF8xMTQpO2NvbnN0IF8xMTU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMTE1LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJidXR0b25cIik7XzExNS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwiNVwiKTtjb25zdCBfMTE2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMTUuYXBwZW5kKF8xMTYpO2NvbnN0IF8xMTc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzExOD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIiQ1XCIpO18xMTcuYXBwZW5kKF8xMTgpO18xMTUuYXBwZW5kKF8xMTcpO2NvbnN0IF8xMTk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTE1LmFwcGVuZChfMTE5KTtfMTAxLmFwcGVuZChfMTE1KTtjb25zdCBfMTIwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7XzEwMS5hcHBlbmQoXzEyMCk7Y29uc3QgXzEyMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18xMjEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJtb3JlXCIpO2NvbnN0IF8xMjI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEyMS5hcHBlbmQoXzEyMik7Y29uc3QgXzEyMz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xMjMuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18xMjMuc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcInBlblwiXSk7XzEyMS5hcHBlbmQoXzEyMyk7Y29uc3QgXzEyND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTIxLmFwcGVuZChfMTI0KTtjb25zdCBfMTI1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8xMjY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkXCIpO18xMjUuYXBwZW5kKF8xMjYpO18xMjEuYXBwZW5kKF8xMjUpO2NvbnN0IF8xMjc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEyMS5hcHBlbmQoXzEyNyk7Y29uc3QgXzEyOD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XzEyMS5hcHBlbmQoXzEyOCk7Y29uc3QgXzEyOT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xMjEuYXBwZW5kKF8xMjkpO18xMDEuYXBwZW5kKF8xMjEpO2NvbnN0IF8xMzA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18xMDEuYXBwZW5kKF8xMzApO185OS5hcHBlbmQoXzEwMSk7Y29uc3QgXzEzMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7Xzk5LmFwcGVuZChfMTMxKTtjb25zdCBfMTMyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzEzMi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdC13cmFwcGVyXCIpO2NvbnN0IF8xMzM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTMyLmFwcGVuZChfMTMzKTtjb25zdCBfMTM0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtfMTM0LnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldHdvcmtcIik7Y29uc3QgXzEzNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIk5ldHdvcms6XCIpO18xMzQuYXBwZW5kKF8xMzUpO18xMzIuYXBwZW5kKF8xMzQpO2NvbnN0IF8xMzY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTMyLmFwcGVuZChfMTM2KTtjb25zdCBfMTM3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzEzNy5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdCBuZXR3b3JrU2VsZWN0XCIpO18xMzcuc2V0QXR0cmlidXRlKFwiZGF0YS1uZXR3b3JrXCIsIHZhcmlhYmxlc1tcIm5ldHdvcmtzXCJdW1wiMFwiXVtcImNvZGVcIl0pO2NvbnN0IF8xMzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEzNy5hcHBlbmQoXzEzOCk7Y29uc3QgXzEzOT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO18xMzkuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMTM5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV0d29ya1wiKTtjb25zdCBfMTQwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTM5LmFwcGVuZChfMTQwKTtjb25zdCBfMTQxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzE0MS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wibmV0d29ya3NcIl1bXCIwXCJdW1wiaW1nXCJdKTtfMTQxLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfMTM5LmFwcGVuZChfMTQxKTtjb25zdCBfMTQyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTM5LmFwcGVuZChfMTQyKTtjb25zdCBfMTQzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO18xNDMuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF8xNDQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1wibmV0d29ya3NcIl1bXCIwXCJdW1wibmFtZVwiXSk7XzE0My5hcHBlbmQoXzE0NCk7XzEzOS5hcHBlbmQoXzE0Myk7Y29uc3QgXzE0NT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzEzOS5hcHBlbmQoXzE0NSk7Y29uc3QgXzE0Nj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xNDYuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtfMTQ2LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJhcnJvd1wiXSk7XzEzOS5hcHBlbmQoXzE0Nik7Y29uc3QgXzE0Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTM5LmFwcGVuZChfMTQ3KTtfMTM3LmFwcGVuZChfMTM5KTtjb25zdCBfMTQ4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xMzcuYXBwZW5kKF8xNDgpO2NvbnN0IF8xNDk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO18xNDkuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtfMTQ5LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJsaXN0Ym94XCIpO2NvbnN0IF8xNTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xNDkuYXBwZW5kKF8xNTApO2xldCBfMTUxPWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtmb3IobGV0IFtfZm9yZWFjaEtleSxfZm9yZWFjaFZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXSkpe2xldCBuZXR3b3JrID0gX2ZvcmVhY2hWYWx1ZTtjb25zdCBfMTUyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzE1MS5hcHBlbmQoXzE1Mik7Y29uc3QgXzE1Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XzE1My5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwib3B0aW9uXCIpO18xNTMuc2V0QXR0cmlidXRlKFwiZGF0YS1uZXR3b3JrXCIsIG5ldHdvcmtbXCJjb2RlXCJdKTtjb25zdCBfMTU0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO18xNTMuYXBwZW5kKF8xNTQpO2NvbnN0IF8xNTU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTU1LnNldEF0dHJpYnV0ZShcInNyY1wiLCBuZXR3b3JrW1wiaW1nXCJdKTtfMTU1LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfMTUzLmFwcGVuZChfMTU1KTtjb25zdCBfMTU2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO18xNTMuYXBwZW5kKF8xNTYpO2NvbnN0IF8xNTc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XzE1Ny5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hbWVcIik7Y29uc3QgXzE1OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXR3b3JrW1wibmFtZVwiXSk7XzE1Ny5hcHBlbmQoXzE1OCk7XzE1My5hcHBlbmQoXzE1Nyk7Y29uc3QgXzE1OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO18xNTMuYXBwZW5kKF8xNTkpO18xNTEuYXBwZW5kKF8xNTMpO2NvbnN0IF8xNjA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xNTEuYXBwZW5kKF8xNjApO31fMTQ5LmFwcGVuZChfMTUxKTtjb25zdCBfMTYxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xNDkuYXBwZW5kKF8xNjEpO18xMzcuYXBwZW5kKF8xNDkpO2NvbnN0IF8xNjI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTM3LmFwcGVuZChfMTYyKTtfMTMyLmFwcGVuZChfMTM3KTtjb25zdCBfMTYzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTMyLmFwcGVuZChfMTYzKTtfOTkuYXBwZW5kKF8xMzIpO2NvbnN0IF8xNjQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO185OS5hcHBlbmQoXzE2NCk7Y29uc3QgXzE2NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18xNjUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZWxlY3Qtd3JhcHBlclwiKTtjb25zdCBfMTY2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzE2NS5hcHBlbmQoXzE2Nik7Y29uc3QgXzE2Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XzE2Ny5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2tlbkJ1dHRvblwiKTtjb25zdCBfMTY4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29pbjpcIik7XzE2Ny5hcHBlbmQoXzE2OCk7XzE2NS5hcHBlbmQoXzE2Nyk7Y29uc3QgXzE2OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18xNjUuYXBwZW5kKF8xNjkpO2NvbnN0IF8xNzA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtfMTcwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0IHRva2VuU2VsZWN0XCIpO18xNzAuc2V0QXR0cmlidXRlKFwiZGF0YS1zeW1ib2xcIiwgdmFyaWFibGVzW1widG9rZW5zXCJdW1wiMFwiXVtcInN5bWJvbFwiXSk7Y29uc3QgXzE3MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTcwLmFwcGVuZChfMTcxKTtjb25zdCBfMTcyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzE3Mi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18xNzIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2tlbkJ1dHRvblwiKTtjb25zdCBfMTczPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTcyLmFwcGVuZChfMTczKTtjb25zdCBfMTc0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzE3NC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1widG9rZW5zXCJdW1wiMFwiXVtcImxvZ29VUklcIl0pO18xNzQuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18xNzIuYXBwZW5kKF8xNzQpO2NvbnN0IF8xNzU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xNzIuYXBwZW5kKF8xNzUpO2NvbnN0IF8xNzY9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XzE3Ni5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hbWVcIik7Y29uc3QgXzE3Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJ0b2tlbnNcIl1bXCIwXCJdW1wibmFtZVwiXSk7XzE3Ni5hcHBlbmQoXzE3Nyk7XzE3Mi5hcHBlbmQoXzE3Nik7Y29uc3QgXzE3OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzE3Mi5hcHBlbmQoXzE3OCk7Y29uc3QgXzE3OT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xNzkuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhcnJvd1wiKTtfMTc5LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJhcnJvd1wiXSk7XzE3Mi5hcHBlbmQoXzE3OSk7Y29uc3QgXzE4MD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTcyLmFwcGVuZChfMTgwKTtfMTcwLmFwcGVuZChfMTcyKTtjb25zdCBfMTgxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xNzAuYXBwZW5kKF8xODEpO2NvbnN0IF8xODI9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO18xODIuc2V0QXR0cmlidXRlKFwidGFiaW5kZXhcIiwgXCItMVwiKTtfMTgyLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJsaXN0Ym94XCIpO2NvbnN0IF8xODM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xODIuYXBwZW5kKF8xODMpO2xldCBfMTg0PWRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtmb3IobGV0IFtfZm9yZWFjaEtleSxfZm9yZWFjaFZhbHVlXSBvZiBPYmplY3QuZW50cmllcyh2YXJpYWJsZXNbXCJ0b2tlbnNcIl0pKXtsZXQgdG9rZW4gPSBfZm9yZWFjaFZhbHVlO2NvbnN0IF8xODU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiKTtfMTg0LmFwcGVuZChfMTg1KTtjb25zdCBfMTg2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtfMTg2LnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJvcHRpb25cIik7XzE4Ni5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5ldHdvcmtcIiwgdG9rZW5bXCJuZXR3b3JrXCJdKTtfMTg2LnNldEF0dHJpYnV0ZShcImRhdGEtc3ltYm9sXCIsIHRva2VuW1wic3ltYm9sXCJdKTtjb25zdCBfMTg3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO18xODYuYXBwZW5kKF8xODcpO2NvbnN0IF8xODg9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTg4LnNldEF0dHJpYnV0ZShcInNyY1wiLCB0b2tlbltcImxvZ29VUklcIl0pO18xODguc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO18xODYuYXBwZW5kKF8xODgpO2NvbnN0IF8xODk9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7XzE4Ni5hcHBlbmQoXzE4OSk7Y29uc3QgXzE5MD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfMTkwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibmFtZVwiKTtjb25zdCBfMTkxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRva2VuW1wibmFtZVwiXSk7XzE5MC5hcHBlbmQoXzE5MSk7XzE4Ni5hcHBlbmQoXzE5MCk7Y29uc3QgXzE5Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO18xODYuYXBwZW5kKF8xOTIpO18xODQuYXBwZW5kKF8xODYpO2NvbnN0IF8xOTM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xODQuYXBwZW5kKF8xOTMpO31fMTgyLmFwcGVuZChfMTg0KTtjb25zdCBfMTk0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO18xODIuYXBwZW5kKF8xOTQpO18xNzAuYXBwZW5kKF8xODIpO2NvbnN0IF8xOTU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMTcwLmFwcGVuZChfMTk1KTtfMTY1LmFwcGVuZChfMTcwKTtjb25zdCBfMTk2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTY1LmFwcGVuZChfMTk2KTtfOTkuYXBwZW5kKF8xNjUpO2NvbnN0IF8xOTc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7Xzk5LmFwcGVuZChfMTk3KTtfODYuYXBwZW5kKF85OSk7Y29uc3QgXzE5OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfODYuYXBwZW5kKF8xOTgpO2NvbnN0IF8xOTk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtjb25zdCBfMjAwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTk5LmFwcGVuZChfMjAwKTtjb25zdCBfMjAxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzIwMS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18yMDEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJzZW5kXCIpO2NvbnN0IF8yMDI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMjAxLmFwcGVuZChfMjAyKTtjb25zdCBfMjAzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8yMDQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZW5kXCIpO18yMDMuYXBwZW5kKF8yMDQpO18yMDEuYXBwZW5kKF8yMDMpO2NvbnN0IF8yMDU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18yMDEuYXBwZW5kKF8yMDUpO18xOTkuYXBwZW5kKF8yMDEpO2NvbnN0IF8yMDY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzE5OS5hcHBlbmQoXzIwNik7Xzg2LmFwcGVuZChfMTk5KTtyZXR1cm4gXzg2fVxuIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2RtbGxkMEp2ZUQwaU1DQXdJREl3SURJd0lpQm1hV3hzUFNJak9XTmhNMkZtSWlCM2FXUjBhRDBpTWpCd2VDSWdhR1ZwWjJoMFBTSXlNSEI0SWo0TkNpQWdJQ0E4Y0dGMGFDQm1hV3hzTFhKMWJHVTlJbVYyWlc1dlpHUWlEUW9nSUNBZ0lDQWdJQ0FnWkQwaVRUVXVNamt6SURjdU1qa3pZVEVnTVNBd0lEQXhNUzQwTVRRZ01Fd3hNQ0F4TUM0MU9EWnNNeTR5T1RNdE15NHlPVE5oTVNBeElEQWdNVEV4TGpReE5DQXhMalF4Tkd3dE5DQTBZVEVnTVNBd0lEQXhMVEV1TkRFMElEQnNMVFF0TkdFeElERWdNQ0F3TVRBdE1TNDBNVFI2SWcwS0lDQWdJQ0FnSUNBZ0lHTnNhWEF0Y25Wc1pUMGlaWFpsYm05a1pDSXZQZzBLUEM5emRtYytcIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUm5vQkFBQlhSVUpRVmxBNFRHNEJBQUF2R0FBR0VMK0NvRzNiZVB2UG45UjVoWWJDdG0wYmR2ei84QkpCdGsxbmRIKzVzNDBreWNuTVBWcDRtS1JBQ3VTZkRvWC9HK0NmdFVBUlFJRlRDS0FRd0FBN1JBa1JCRUU0cU5FSkRVRmhseUJZb0NUQUFxR2hJNWp3STNqS0JpSGtvT09QRndvSWdtQVl4RzNvMU9vTmhSMUNDTEZpaGlnYzBnTE1FRUlVUkwzZEJXZjJHUUlJdG0wZGIwNmJXbkZTSTdadDI2K1kvMVIrNWVzTUl2cXZ3RzNVQm81TmQxK0JGVWM2VWRUNGN5VERwSnFNUldTa2dvUW1hZ2hvb29hZ0x0dkp6b0Rqc3ErL2xnN0g4TjNUcGViRFh0YlIvVGJUWlhabEVMQlhEckxLWEJqcDJZc3RzNmo2ZUhpL3g5NVlwRzNZWDREQW9PTG5MdTdHbHA4WFRuREdiN0UzK2tuQ1E5bFhINEdiL0VxV2hXdkFVVG5JSU5ZU2tYVVJlSnVKeVBRRFNHMUVwQjNTbFFmNE5hZ3JDMFZpVVBGWnBFOXg2ZWxtUHdrOGVUbFRHd2I4NWF6dmI1azV4OFEveGh2M2EzTHN4dmxTZmlOSUtMOHFKS3ord1Q5K0Rnb3dpUXFPL1U3MS93dz1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdZMnhoYzNNOUltZ3ROaUIzTFRZZ2RHVjRkQzFuY21GNUxUVXdNQ0J0YkMxaGRYUnZJaUJtYVd4c1BTSnViMjVsSWcwS0lDQWdJQ0IyYVdWM1FtOTRQU0l3SURBZ01qUWdNalFpSUhOMGNtOXJaVDBpSXpaaU56STRNQ0lnYzNSeWIydGxMWGRwWkhSb1BTSXlJaUIzYVdSMGFEMGlNalJ3ZUNJZ2FHVnBaMmgwUFNJeU5IQjRJajROQ2lBZ0lDQThjR0YwYUNCemRISnZhMlV0YkdsdVpXTmhjRDBpY205MWJtUWlJSE4wY205clpTMXNhVzVsYW05cGJqMGljbTkxYm1RaUlHUTlJazAySURFNFRERTRJRFpOTmlBMmJERXlJREV5SWk4K0RRbzhMM04yWno0PVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQU1BQUFDZHQ0SHNBQUFBQkdkQlRVRUFBTEdQQy94aEJRQUFBQUZ6VWtkQ0FLN09IT2tBQUFNQVVFeFVSVXhwY1d4N2JQLy8vK3p2OE92dTcrdnU3Ly8vLy8vLy8rdnU3Ly8vLyt6djhMKy92K3Z1NytydDd1cnQ3dXp2OE96djcvTDE5dTN2OE92dDd1M3c4ZXJ1N3V2dTcrenc4ZTN3OGFGay8rN3k5T3p2OE96dThPL3k4dXp2OFBMMTlzQ3FxdW5zN1BEMDllN3U3dXZ2NytmdDdmRHk5Tzd5OHV2dTd1enU3K3J1Nzh6TXpPdnI3Ky96OCtyczd1N3g4K3p2OGV2dThPM3c4ZTd3OHV6dTcram82K1huNS9MMTl2SDE5dkwxOXV2dTcvRHo5ZTd5OU92dTcrL3k4L0h6OWUvejlQSDE5dkR6OU96czdPdnc4T3Z5OHUzdzhuLy8vL0QwOWZIMDllN3g4ZTN3OGUzdzhldnY3K3Z2OE96djhPM3g4ZXZ2Nyt2dzhQTDE5ZTd4OU92dDd1enc4ZXZ2OE83eDh1N3k4KzN3OHV6djhDOHdNSUtEaEJNVEV6UTFOVFUyTnV2dTcrcnQ3b1NGaGpFeU11L3k4L1g0K1JFUkVTMHVMb09FaGZiNStqSXpNL0R6OU83eDhueDlmZW5zN1RBeE1mUDI5L0wxOXYzLy8rM3c4ZkwxOS96Ly94VVZGWHQ4ZllHQ2cvajgvRGM0T1BUNCtDUWxKUlFVRlA3Ly80V0doM3g5Zmljb0tQLy8vL3I5LzMrQWdZZUppZnI5L2k0dkx6TTBOQ3NzTFBmNisrbnI3UFQzK0hwN2ZDa3FLaUlqSTM1L2dIMStmeW9yS3pZM045YlkyZGZhMnhjWEYrWG82Zm44L2Z2Ly80bUtpNENCZ3NmSnl1ZnA2dmo3L2ZUNCtRd05EQVFFQlBEejlMTzF0VDArUHRIVDFDRWhJUjhmSDZ1dHJpTWtKRjFlWGlZbkowTkVSRVZHUnZYNStyYTR1WStRa2NIRHhON2g0b3lQajZXbnFGTlZWUWNIQi9EejlXeHRicFdXbDh6T3o3N0F3YUdqcEV0TVRCc2JHM2Q0ZVp5ZW4zUjJkdVBtNTNoNWV1anE2K0hrNVppWm1zVEh5TnZlM3JDeXM2bXNyZFBWMW9LRWhXUmxaZXJ0N3hnWkdadWNuZmo3L04zZzRWcGNYSktVbFdab2FLQ2hvc2pMekxxOXZxeXVyL0gxOXMzUTBUVTFOdmI2KzI1d2NHbHJhOHJOemtGQ1FpY25KOW5iM09EaTQvTDI5MUZTVTJCaVlrZEpTYnUrdno5QlFTTWpJOEhFeGV6dzhWZFpXZS95OUtpcXE3Q3lzcVNtcDB4TlRqbzdPNWFZbWMzUDBFNU9UdlQyOS9IMDlWWlhXSEZ6YzU2Z29HSmpZN2k2dTRhKzNHRUFBQUJiZEZKT1V3QUJBdno5K3dRQi9nUDRCUHI4L3YyNjlOYjcraGlPS2UwQmp1dGVxR0xuQTJIOEZvY1ZkNDZRK05nRktFRS9yYWxyNzQvcUxpeS93djNFYlczSC9vYUc2K29jZUNoM0F0UFNYZmZRa05IT3JhaHI5VjNQenRiKy9vYXF2ZHd4QUFBSEUwbEVRVlJZdzQxWGQxd1RaeGord0F0M0FWRWNRS20wYmhGWFcwVzc2OTZyMno4dU1ja2xsNURrSWxtRnBHa2dDV1VUQ0NOU0ZGdy85MWJjb3c3YzFWYXB0cTZxSFhidjNYUitkd0c5K3k1Z3Z6OGd2N3Q3bjN2WFBlL3pBaUE2S1RId1QvVGtHZmNuZE0rSUpleXhHZDBUMGw1TXh1SEZHQnpjKytCU0FLVERSODJLMWJZWUxMU2RKTzIweGRDaW5mbHkydkE0ZU9lZUVOQjg0cURwV3B2QmhHRllWNEtFaCtnS2Y1b01OdTIwUVluY0F4MmNhQndramgxdjgzZVJZSnd0UENvVjk0L0FKRjIwMlJQRzlnZDRkRWV2ajNxeXQ0MldZT1NkbzZKcFZkdHZUTUprOTM0cUNzUzFILzJZUjdNWkNVSHk3RVBCNExVN0NDUUJJUjRiM1U0bWNCdzgySzFGWUU2U2xIYmJMUzNGdTBCSTZyczl5RDRid1I0ZjlUb2RUd3J0clI4ZUsxMVhuOFcvRms4WHBhV0lFYUx3dUFmeU1lSHJZUW1YYkt2UWJGcGlVdkV2RXAzeUg0akRvNUQzcC9SNUtLOHpZazVTL2pQZWF0Y2FqOUFGa3V5Yzk1QlU2QU11eFIvT2l4ZlpoeFkycUwyMXhabU55eWpobmZpOGgzRkJKbU5BVXI3by9iQ0VGN3llQlVyenhnMGhGWEtyYy81Z0VNT3ZmOTlGUFVYMmxHVzdRNjllb013MGZuMFFEWUxzdWFqdjNhYnNBNUpmNk5kRi9QN214UTF5RnNCY3V1cGRCdkdoUzc5dXcwQjBXd0trVDc4YUwzYmcwN2NjYWc1QVpnd2Nia0ZkaUs5L0lybzFEVkx3ZkxaRW5BRHI2aXE5UEF3Z00xY2VNQ0I1SkNYWmo0U0R3UEdCdlI3dlNvclB2dW83QUJyZlozYjBOc0gwNnMvVlVnb0dSSENBOGwrcFVNdmJBR0FRKytyTGtVZDYyQWF3THVCZzRIME1JYzVnazhjcHZ3dGd6bFFHclVnUXhETWpFOEZVV00xSnRnZ1pDQjEwcUhrQU11UDZ2ZUlzMkthd3pUQjBpQjhUdDhDSGJBSjRBRExOeHBWb0pUcjVod3lGU1JpaEZkbVQ5dkp0QlNoQTVSZkhUY2hqbUhZRVRHSlNua1Njd1pWY0J2a0FzcExBWXJRZkpiWWtXSVNYREpnb0FaL0kyNDdlMFFZQXozNi9NQTNZbGpreElEbldoTlpBeFJ6eGhnTnd5Z3NMYXR2TWplN1BMZThJNjJCS0h3WlN0MkNpREo3aUt1QjA2Z3ZsZXpldi9kaXNhVVZZdnhNSkF0T21nc0ZMRVFDVjZZM0ZEWHBvcmk0c2VIdVRKak5YZDk1ZHJER3p6VkR6MVcxYThGRmhTMmVEQkRRRmxPV3FRKzEwZWdvckxxNlNhV3FOT1RxZHJtNU5LWVFvTmdZV0NFdUpHUkpBZHd1QlpQQnNsVlB1OFJ6ZDVTbzJLcFZLVFk1dS9ueWRMbmR0RFJ0SnpUZENqcmJPQXhtaVB0NVh0Vmk5OTAyRnJFU3BWQ2pDQVBEbzVoL3l5VXA4dXdTOVFOQVpJTmFPRElJRERYSVl1a3dCclJVOEFOYU44MjZqKzhJaWZoRDJkSUIrUktjTE5zRFFsV0Z6QVFBTFVSZFFYTGZ5ODBnQUF1M0JFcmZDMVdhT0FNelB5ZG05L1AweVFUZUJkR0VJcXU4dnYxZFRmQmVCRDVCYnQzejM3NmV1OFIyd3g0SU1XdWlEM1cvOThYZWYwU1VHcU5PdDBPeTBHbWdCSzJXQWVWWUJnT2tFeFJpT1gvckZwNndWQXVUa3JqaWtYM0pqV2RaQ1hoMElTM2Uwa2VpbUg0SWh1aXg0dExpVWk2TVZnQTMrbjdOTFEyV05md1Y1RE04MjBteGhLMVAreHVvenpjdzE3ZmFMbFdZSXdRSEE0RmQ4OUcrWjFkQjBidU1QUlJTL2xRZURWSVJQS08yWm96dTJrN1RmOU5ObVg0bUxCY2pScmZDZHBMVVc4dStQY3M1bFp3bSs1MVF3TEYzME9aOTBlSDlkemRCbEp3by9xSFNWMU9YdXpqMTh1eVhrdjdMTEhmaVR0S3Y0bjNOc01vaVpnM3pQS3VhMFdsOVZ0Yk1weEpSZHYxVmF1bnozcnNzdEljUFptejZmcHVRM3Y4QUJ3MXpJNjBrb0tiTkQxYU4zZUxZZVo2eC9iUDI1OXVveXk3TG1IWXIxWmtYZ29IQTRTUElncFVVZ1ZWVm9wME90ZDFac2F6VFJaYzNOWmE4d2IyME9aQnBMMXQ5RW1KMGpWUnpTZWllVVVwYnNnS1NzTHZBZUNZWVlxL2JVQm5lTjBheXAzTnlNMEFta2RWWmJUQkVORnNxNnVvQWxWTDIzWVYzejZZcFN0OUhNOHRHQkcxa0lLVStDNWxOQjRzaG5DQkd2YitWNFhTOTNGRzVhdzNHaWNjMk9vbkprdXQ0M0VFNUdkcmphZW9oR2krbUNsNXNNbm1QczIxbEszckNIVkNIem5SdXVjTHozNzhXSW1iMnAwTWxTdTdxNmxodXVwUzUwdUhaOXZOZkFzRlNUZ2tmRTg1MnlOSEt6b1hVeWFkenJXc3JiRVJoUTRrUS9VUy9XZU5aMTdIUUlBeGdEeDlESkdsLy90TFJONlVXRHlkM0VJc3VlZFFscW5MQkc4djFjTGxTcnJNaEtodXFzSTVsSGhZTE9zQWZtNHVKR2JWWUhNbzl0aHNINUVZVHVsNjA2TVhBU3FTQVVta2w4b2RtTzFGVXg3enVnVXRXNDMvT3JVS243bkZEcXdscEt4V0tibFpwT3I2dHkxYnVJMU8yYzkyeWZLRHlDM085RW9MWGNYMUR0MnJoVldBRUNpeUQzV1I5UzBvcEVDNGRsNWVIS2MwV2loU01xOHNvQ1Y1NTZaT1VobWNMdnZoV1FVTHNyRDdkMGpYNE1XYm9vYTNDMWhlS1o3OGwrZEV6NzYyY2N1L1pCQ1A3YXh6RFUzYldQdG5XMDlvVVh6LzdqSm1Sckl5K2VyOW5HajB2c2NQRU1yNzZKZzZaRlhuMm5ENXA0cjlXM2RmbU9HejU3N2t6aDhoMDdhOVJ3NmY5WnZsa0l0a2Z4NUJscENmTXkwa2tpUFdOZVFscnFNTmJ4bUJUeDAvOEJzUDhENU9XZDRzOEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1Jod0NBQUJYUlVKUVZsQTRUQThDQUFBdkdBQUdFRC9rSUpJa1Jhb24vMjU1cHVwSmhNTzJqUnlKSC9ydk40MGxJQ2p5ZnpTMmpTUXBxajNybWNuOVBENy9yUDYyRHFET3dxZ1pSU0FFa1JGR0tJb2lJd1JoRkdGdWp2dHZ0am1LMSszeG42T3cvWnBBMklwUS9JWWRSTWdjanRkdGp0ZnQ4ZHZyZHYyc0NMdjlSY1dNb3JZakZMWWlPSDVJTU53MmlCMno3U0F5dzFHRTJpK0JoSVFmS2lSMFVZbEFoSXdJeE9YZERRRXRCRHl3d0FzRGZEQkJ3QTRCRFFRVUNFQ1FiZHQwOUdNN2JkdTJiZHZHaWQvN3NZMkJmM1I2QmhIOVorUzJqU1BKVTI1bDE2OWdlSHBqcVV6RjdYQlhNcW1ZbHhFemtpNjR3TmRWU0VkRVNPU2NFTk9aU3doSWx2Q0hLQ1g1K3lJQW41OFZUWkhiUnJNQS9LOWJSOTlVTE5rb3c2UWRvSjg3YlRMOXhCWHhDWEdrbVhnZTVMcGZWVC9YcTY1ZGZCTkpQcDV5Z1V4S3gyL3AxMjZUWXM5UC9ZSkRVeGtBUXpVUGZpQzhyRHRnencvZVdWNHlaWTY2UndMUWsvWHJPWk9pKy9pSEFDaDdBQXhiNy96dytaK1dHcFFkSXliRDlEMEJQQTZBekVxNnp2QysyaXh2M2ZqQWFhZGtsZ0FPRDBEdVo0em0wWFpGNC9Lekh3aGVHWVlCZU1vQXlPOXhqOUkyZjdOMlRnRjZaK0VvWndBQTdNZmhwWDlic3hJQ0FqZEdqa3pLQmY2RytqZGxMZnZmNUtKUE1rWGdTc1h6RU9oN1diQnJCMmRyVkFNM0JQazQ5NDhFRW5JeHBwZTE3WHhTT05LOHZ5b2kvVDdjZXZYei9pcS9CMkt5ZmgrdkI5VTNwL3F1L2JPZDFmZVpBUUE9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnWTJ4aGMzTTlJbWd0TlNCM0xUVWlJSFpwWlhkQ2IzZzlJakFnTUNBeU1DQXlNQ0lnWm1sc2JEMGlJekF3TUNJZ2QybGtkR2c5SWpJd0lpQm9aV2xuYUhROUlqSXdJajROQ2lBZ0lDQThjR0YwYUNCa1BTSk5NVE11TlRnMklETXVOVGcyWVRJZ01pQXdJREV4TWk0NE1qZ2dNaTQ0TWpoc0xTNDNPVE11TnprekxUSXVPREk0TFRJdU9ESTRMamM1TXkwdU56a3plazB4TVM0ek56a2dOUzQzT1ROTU15QXhOQzR4TnpKV01UZG9NaTQ0TWpoc09DNHpPQzA0TGpNM09TMHlMamd6TFRJdU9ESTRlaUl2UGcwS1BDOXpkbWMrXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRUFBQUFCQUNBWUFBQUNxYVhIZUFBQURRMGxFUVZSNFh0WFpNVzRVUVJDRllZN0FFWnlaQzNBQlRzQUZPQUVKaVNWSGhLUUVKSVNrWEFHUkk1QVFRckxrQUFtUm1CQ2NFQkFaallWWDhyZFYzYlV6czdQalgvcVRmYTk3dW5xTjJMWHYzVnVJNDVPUFA0NVBQbDBWdlhUOW5TTVlhcEx1djFvOCtOejZ2Rld3NDQvM1hLN2puMGx3c0VYMVBJdmhRUTZ0NTlzclBud3RlczdaOFlGcjFYUFBnZzladTU1L0VtNitxNmR2djIrOTF2UHh5N09yaDg4L2I3MitpODR4Q2pldEt1WTl4YnlxOCt5RW0xWE1zTmN6dzE1RjV5cmpSaTNmbi8zMnJMZXczN1BGK2M4L1cvMld6bFhDVFZyMnNGKzFoLzJXenRmRXhTMWIyQjFyQzdzdG5UUEZoWmtaOXVZeXcxNm1jNGE0S0RQRFhxYVlaMmJZeTNUZVcxUy8xV1hZYXlubUxUUHNaVHIzQm91UkdmWjZpbm5QREh1UnpyM0JZbVNFbllwaVhqSENUdVRSc3kvM25YM1I0YU85ekt0RzJJbDAvbEVYWU42eml1dDZpbm5rNU9FSDdHU093VDFhUnRpSm5IUUI1aTNINGo0dHhUeXlmQUVSZGpJajdHVGRKNi9QdHpxWkVYWjA5QVdZdHhSekZmT1dZcTcvaCs5LytCSHp6T0VkRkRzcTVpM0ZQTEw3N2o5OTg4MTl0enFacjk1ZHVIU3JNNmN5ZkVXM285MExFUE9lWWo2M1lxNkxYOEFOOXVaU3pQVmdGeERoMmpHS3VlNzlBcUk5S3JoSFZUSFhSUzRnMjZ1SDZ5dUt1UzU2QVRjT3YvT3Y0dHFlWXE0SHVZRElpMTkvZmRRMTlucUt1YTdtQW02TXNOTlN6SFYxRnhEOWZjRk9TekhYNFFJdWZWSEZQRlBNTThVOFU4d2o5L3BsU013akkreGtpcm51L2R0Z2hCMFY4NVppcnFNdllNQk9ab1NkTVYyTnNLUGxDeGdVODh4ZC9zOFg5Mm9wNXBHYkM2aGNRb1NkbHJ2aStwWVJkdlRXOEpVTEdCVHpuaFZjVTFITUk1My9Ha3NhWWFlcW1GZU5zS01QVGo4Y09mczFGaU1qN0ZRVTg0b1JkaUtkZThOeDRVUFJZSVNkbm1MZU04Sk9wblBmd25Ka2hyMldZdDR5dzE2azg0YTRLRExEM3R4bTJJc00veWdhNGNMTUZuYW4yc0p1cG5NMmNYRm1EL3U3MnNOK3B2T1ZjSk9XUGV6MzdQSG94ZGV0TlpuT1ZjYU5lcmF3MjdPRjNaN090Uk51VmpIQ1RzOElPeFdkWnhSdVduWEs0YWVzdmRFNUp1SG1hOWZ6ejRJUFdhdWVlM1o4NEZyMG5IdkZoeDlhejdjWUhtUnB5eDl2OTRtSFdrclBjWENHZDhORHptMzZ5NHkxNGNHbjZ2NTNEZ2ZxNmZwOThRL3R3cG1hdTZIVTRRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJleHBvcnQgY29uc3QgdG9rZW5zID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkV0aGVyZXVtXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy8zMngzMi8xMDI3LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIk1BVElDXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJNQVRJQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9wb2x5Z29uc2Nhbi5jb20vdG9rZW4vaW1hZ2VzL21hdGljXzMyLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJCTkJcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkJOQlwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzMyeDMyLzE4MzkucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4XCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVVNEIENvaW5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRENcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDYsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMuMWluY2guaW8vMHhhMGI4Njk5MWM2MjE4YjM2YzFkMTlkNGEyZTllYjBjZTM2MDZlYjQ4LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlVTRCBDb2luXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA2LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4Mjc5MWJjYTFmMmRlNDY2MWVkODhhMzBjOTlhN2E5NDQ5YWE4NDE3NFwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vd2FsbGV0LWFzc2V0Lm1hdGljLm5ldHdvcmsvaW1nL3Rva2Vucy91c2RjLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJVU0QgQ29pblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHg4QUM3NmE1MWNjOTUwZDk4MjJENjhiODNmRTFBZDk3QjMyQ2Q1ODBkXCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly93YWxsZXQtYXNzZXQubWF0aWMubmV0d29yay9pbWcvdG9rZW5zL3VzZGMuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRVRIIG9uIFBvbHlnb25cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIldFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4N2NlQjIzZkQ2YkMwYWRENTlFNjJhYzI1NTc4MjcwY0ZmMWI5ZjYxOVwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vcG9seWdvbnNjYW4uY29tL3Rva2VuL2ltYWdlcy93RVRIXzMyLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJFVEggb24gQlNDXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJXRVRIXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDIxNzBFZDA4ODBhYzlBNzU1ZmQyOUIyNjg4OTU2QkQ5NTlGOTMzRjhcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3BvbHlnb25zY2FuLmNvbS90b2tlbi9pbWFnZXMvd0VUSF8zMi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJEYWlcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkRBSVwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMuMWluY2guaW8vMHg2YjE3NTQ3NGU4OTA5NGM0NGRhOThiOTU0ZWVkZWFjNDk1MjcxZDBmLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4MUFGM0YzMjllOEJFMTU0MDc0RDg3NjlEMUZGYTRlRTA1OEIxREJjM1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJEYWlcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkRBSVwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMuMWluY2guaW8vMHg2YjE3NTQ3NGU4OTA5NGM0NGRhOThiOTU0ZWVkZWFjNDk1MjcxZDBmLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkRhaVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiREFJXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDhmM2NmN2FkMjNjZDNjYWRiZDk3MzVhZmY5NTgwMjMyMzljNmEwNjNcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3dhbGxldC1hc3NldC5tYXRpYy5uZXR3b3JrL2ltZy90b2tlbnMvZGFpLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4ZEFDMTdGOTU4RDJlZTUyM2EyMjA2MjA2OTk0NTk3QzEzRDgzMWVjN1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlRldGhlclwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEVFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogNixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weGRhYzE3Zjk1OGQyZWU1MjNhMjIwNjIwNjk5NDU5N2MxM2Q4MzFlYzcucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVGV0aGVyXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RUXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA2LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4YzIxMzJkMDVkMzFjOTE0YTg3YzY2MTFjMTA3NDhhZWIwNGI1OGU4ZlwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vd2FsbGV0LWFzc2V0Lm1hdGljLm5ldHdvcmsvaW1nL3Rva2Vucy91c2R0LnN2Z1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkRvZ2Vjb2luXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJET0dFXCIsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhiQTJhRTQyNGQ5NjBjMjYyNDdEZDZjMzJlZEM3MEIyOTVjNzQ0QzQzXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy5wYW5jYWtlc3dhcC5maW5hbmNlL2ltYWdlcy8weGJBMmFFNDI0ZDk2MGMyNjI0N0RkNmMzMmVkQzcwQjI5NWM3NDRDNDMucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ3VsdCBEQU9cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkNVTFRcIixcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweGYwZjlkODk1YWNhNWM4Njc4ZjcwNmZiODIxNmZhMjI5NTc2ODVhMTNcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy82NHg2NC8xNzc0Mi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJSZXZvbHQgMiBFYXJuXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJSVkxUXCIsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhmMGY5RDg5NWFDYTVjODY3OGY3MDZGQjgyMTZmYTIyOTU3Njg1QTEzXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvNjR4NjQvMTk4OTMucG5nXCJcclxuICAgIH0sXHJcbl0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL3RpcHBpbmdNYWluLm1wdHNcIjtcclxuaW1wb3J0IGV0aF9sb2dvIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvZXRoX2xvZ28ucG5nXCJcclxuaW1wb3J0IHVzZGNfbG9nbyBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL3VzZGNfbG9nby5wbmdcIlxyXG5pbXBvcnQgYXJyb3cgZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9hcnJvdy5zdmdcIlxyXG5pbXBvcnQgcGVuIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvcGVuLnN2Z1wiXHJcbmltcG9ydCBjbG9zZSBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2Nsb3NlLnN2Z1wiXHJcbmltcG9ydCBtYXRpY1Rva2VuSWNvbiBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL21hdGljLXRva2VuLWljb24ud2VicFwiXHJcbmltcG9ydCBiaWFubmNlQ29pbkxvZ28gZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9iaW5hbmNlLWNvaW4tbG9nby53ZWJwXCJcclxuaW1wb3J0IHt0b2tlbnN9IGZyb20gXCIuL3RpcHBpbmdVdGlsc1wiO1xyXG5pbXBvcnQge2NyZWF0ZX0gZnJvbSBcImZhc3QtY3JlYXRvclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpcHBpbmdNYWluIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkZW50aWZpZXIpIHtcclxuICAgICAgICBjb25zdCBuZXR3b3JrcyA9IFtcclxuICAgICAgICAgICAge25hbWU6ICdQb2x5Z29uICcsIGltZzogbWF0aWNUb2tlbkljb24sIGNoYWluSWQ6IDEzNywgY29kZTogJ1BvbHlnb24nfSxcclxuICAgICAgICAgICAge25hbWU6ICdFdGhlcmV1bScsIGltZzogZXRoX2xvZ28sIGNoYWluSWQ6IDEsIGNvZGU6ICdFVEgnfSxcclxuICAgICAgICAgICAge25hbWU6ICdCU0MnLCBpbWc6IGJpYW5uY2VDb2luTG9nbywgY2hhaW5JZDogNTYsIGNvZGU6ICdCU0MnfSxcclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5odG1sID0gY3JlYXRlKCdkaXYnLCB7fSwgdGVtcGxhdGUoe2lkZW50aWZpZXIsIG5ldHdvcmtzLCB0b2tlbnMsIGV0aF9sb2dvLCB1c2RjX2xvZ28sIGFycm93LCBwZW4sIGNsb3NlfSkpO1xyXG5cclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdCcpLmZvckVhY2goc2VsZWN0ID0+IHtcclxuICAgICAgICAgICAgc2VsZWN0Lm9uY2xpY2sgPSBlID0+IHNlbGVjdC5jbGFzc0xpc3QudG9nZ2xlKCdpc09wZW4nKVxyXG4gICAgICAgICAgICBzZWxlY3Qub25ibHVyID0gZSA9PiBzZWxlY3QuY2xhc3NMaXN0LnJlbW92ZSgnaXNPcGVuJylcclxuICAgICAgICAgICAgc2VsZWN0Lm9uY2xpY2sgPSBlID0+IHNlbGVjdC5maXJzdEVsZW1lbnRDaGlsZC5mb2N1cygpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QgdWwgbGknKS5mb3JFYWNoKGxpID0+IHtcclxuICAgICAgICAgICAgbGkub25jbGljayA9IGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGxpLnBhcmVudE5vZGUucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKVxyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5uYW1lJykudGV4dENvbnRlbnQgPSBsaS5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50O1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGxpLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYztcclxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oYnV0dG9uLnBhcmVudE5vZGUuZGF0YXNldCwgbGkuZGF0YXNldCk7XHJcbiAgICAgICAgICAgICAgICBsaS5wYXJlbnROb2RlLnBhcmVudE5vZGUuY2xhc3NMaXN0LnJlbW92ZSgnaXNPcGVuJylcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCc6Zm9jdXMnKT8uYmx1cigpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hWaXNpYmxlQ29pbnMoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnNlbmQnKT8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbmV0d29yayA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubmV0d29ya1NlbGVjdCcpLmRhdGFzZXQubmV0d29yaztcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy50b2tlblNlbGVjdCcpLmRhdGFzZXQuc3ltYm9sO1xyXG4gICAgICAgICAgICBsZXQgYW1vdW50ID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy52YWx1ZVNlbGVjdGlvbiAuaXNTZWxlY3RlZCBpbnB1dCcpPy52YWx1ZSB8fCB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnZhbHVlU2VsZWN0aW9uIC5pc1NlbGVjdGVkJykuZGF0YXNldC52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5odG1sLmRpc3BhdGNoRXZlbnQoT2JqZWN0LmFzc2lnbihuZXcgRXZlbnQoJ3NlbmRNb25leScsIHtidWJibGVzOiB0cnVlfSksIHtcclxuICAgICAgICAgICAgICAgIGlkZW50aWZpZXIsXHJcbiAgICAgICAgICAgICAgICBuZXR3b3JrLFxyXG4gICAgICAgICAgICAgICAgYW1vdW50LFxyXG4gICAgICAgICAgICAgICAgdG9rZW5cclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy52YWx1ZVNlbGVjdGlvbiA+IConKS5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgICAgICBiLm9uY2xpY2sgPSBlID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsdWVTZWxlY3Rpb24gID4gKicpLmZvckVhY2goeCA9PiB4LmNsYXNzTGlzdC5yZW1vdmUoJ2lzU2VsZWN0ZWQnKSlcclxuICAgICAgICAgICAgICAgIGIuY2xhc3NMaXN0LmFkZCgnaXNTZWxlY3RlZCcpXHJcbiAgICAgICAgICAgICAgICBiLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk/LmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMucmVmcmVzaFZpc2libGVDb2lucygpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZnJlc2hWaXNpYmxlQ29pbnMoKSB7XHJcbiAgICAgICAgbGV0IG5ldHdvcmsgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLm5ldHdvcmtTZWxlY3QnKS5kYXRhc2V0Lm5ldHdvcms7XHJcbiAgICAgICAgbGV0IHRva2VucyA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcudG9rZW5TZWxlY3QgbGknKVxyXG4gICAgICAgIGZvciAobGV0IHRva2VuIG9mIHRva2Vucykge1xyXG4gICAgICAgICAgICB0b2tlbi5zdHlsZS5kaXNwbGF5ID0gdG9rZW4uZGF0YXNldC5uZXR3b3JrID09IG5ldHdvcmsgPyAnJyA6ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudG9rZW5TZWxlY3QnKS5kYXRhc2V0Lm5ldHdvcmsgIT0gbmV0d29yaykge1xyXG4gICAgICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcihgLnRva2VuU2VsZWN0IGxpW2RhdGEtbmV0d29yaz1cIiR7bmV0d29ya31cIl1gKS5jbGljaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==