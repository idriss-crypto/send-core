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

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _20=document.createDocumentFragment();const _21=document.createElement("header");const _22=document.createTextNode("\r\n    ");_21.append(_22);const _23=document.createElement("h1");const _24=document.createTextNode("Send to ");_23.append(_24);const _25=document.createTextNode(variables["identifier"]);_23.append(_25);_21.append(_23);const _26=document.createTextNode("\r\n    ");_21.append(_26);const _27=document.createElement("img");_27.setAttribute("class", "closeButton");_27.setAttribute("src", variables["close"]);_27.setAttribute("alt", "close");_21.append(_27);const _28=document.createTextNode("\r\n    ");_21.append(_28);const _29=document.createElement("style");const _30=document.createTextNode("\r\n    ::-webkit-scrollbar {\r\n         width: 6px;\r\n         height: 6px;\r\n         }\r\n         ::-webkit-scrollbar-track {\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.1);\r\n         }\r\n         ::-webkit-scrollbar-thumb{\r\n         border-radius: 10px;\r\n         background: rgba(0,0,0,0.2);\r\n         }\r\n         ::-webkit-scrollbar-thumb:hover{\r\n         background: rgba(0,0,0,0.4);\r\n         }\r\n         ::-webkit-scrollbar-thumb:active{\r\n         background: rgba(0,0,0,.9);\r\n         }\r\n     ");_29.append(_30);_21.append(_29);const _31=document.createTextNode("\r\n");_21.append(_31);_20.append(_21);const _32=document.createTextNode("\r\n");_20.append(_32);const _33=document.createElement("main");const _34=document.createTextNode("\r\n    ");_33.append(_34);const _35=document.createElement("div");_35.setAttribute("class", "valueSelection");const _36=document.createTextNode("\r\n        ");_35.append(_36);const _37=document.createElement("button");_37.setAttribute("type", "button");_37.setAttribute("data-value", "1");_37.setAttribute("class", "isSelected");const _38=document.createTextNode("\r\n            ");_37.append(_38);const _39=document.createElement("span");const _40=document.createTextNode("$1");_39.append(_40);_37.append(_39);const _41=document.createTextNode("\r\n        ");_37.append(_41);_35.append(_37);const _42=document.createTextNode("\r\n\r\n        ");_35.append(_42);const _43=document.createElement("button");_43.setAttribute("type", "button");_43.setAttribute("data-value", "2");const _44=document.createTextNode("\r\n            ");_43.append(_44);const _45=document.createElement("span");const _46=document.createTextNode("$2");_45.append(_46);_43.append(_45);const _47=document.createTextNode("\r\n        ");_43.append(_47);_35.append(_43);const _48=document.createTextNode("\r\n\r\n        ");_35.append(_48);const _49=document.createElement("button");_49.setAttribute("type", "button");_49.setAttribute("data-value", "5");const _50=document.createTextNode("\r\n            ");_49.append(_50);const _51=document.createElement("span");const _52=document.createTextNode("$5");_51.append(_52);_49.append(_51);const _53=document.createTextNode("\r\n        ");_49.append(_53);_35.append(_49);const _54=document.createTextNode("\r\n\r\n        ");_35.append(_54);const _55=document.createElement("div");_55.setAttribute("class", "more");const _56=document.createTextNode("\r\n            ");_55.append(_56);const _57=document.createElement("img");_57.setAttribute("alt", "");_57.setAttribute("src", variables["pen"]);_55.append(_57);const _58=document.createTextNode("\r\n            ");_55.append(_58);const _59=document.createElement("span");const _60=document.createTextNode("$");_59.append(_60);_55.append(_59);const _61=document.createTextNode("\r\n            ");_55.append(_61);const _62=document.createElement("input");_55.append(_62);const _63=document.createTextNode("\r\n        ");_55.append(_63);_35.append(_55);const _64=document.createTextNode("\r\n    ");_35.append(_64);_33.append(_35);const _65=document.createTextNode("\r\n    ");_33.append(_65);const _66=document.createElement("div");_66.setAttribute("class", "select-wrapper");const _67=document.createTextNode("\r\n        ");_66.append(_67);const _68=document.createElement("label");_68.setAttribute("for", "network");const _69=document.createTextNode("Network:");_68.append(_69);_66.append(_68);const _70=document.createTextNode("\r\n        ");_66.append(_70);const _71=document.createElement("div");_71.setAttribute("class", "select networkSelect");_71.setAttribute("data-network", variables["networks"]["0"]["code"]);const _72=document.createTextNode("\r\n            ");_71.append(_72);const _73=document.createElement("button");_73.setAttribute("type", "button");_73.setAttribute("id", "network");const _74=document.createTextNode("\r\n                ");_73.append(_74);const _75=document.createElement("img");_75.setAttribute("src", variables["networks"]["0"]["img"]);_75.setAttribute("alt", "");_73.append(_75);const _76=document.createTextNode("\r\n                ");_73.append(_76);const _77=document.createElement("span");_77.setAttribute("class", "name");const _78=document.createTextNode(variables["networks"]["0"]["name"]);_77.append(_78);_73.append(_77);const _79=document.createTextNode("\r\n                ");_73.append(_79);const _80=document.createElement("img");_80.setAttribute("class", "arrow");_80.setAttribute("src", variables["arrow"]);_73.append(_80);const _81=document.createTextNode("\r\n            ");_73.append(_81);_71.append(_73);const _82=document.createTextNode("\r\n            ");_71.append(_82);const _83=document.createElement("ul");_83.setAttribute("tabindex", "-1");_83.setAttribute("role", "listbox");const _84=document.createTextNode("\r\n                ");_83.append(_84);let _85=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["networks"])){let network = _foreachValue;const _86=document.createTextNode("\r\n                    ");_85.append(_86);const _87=document.createElement("li");_87.setAttribute("role", "option");_87.setAttribute("data-network", network["code"]);const _88=document.createTextNode("\r\n                        ");_87.append(_88);const _89=document.createElement("img");_89.setAttribute("src", network["img"]);_89.setAttribute("alt", "");_87.append(_89);const _90=document.createTextNode("\r\n                        ");_87.append(_90);const _91=document.createElement("span");_91.setAttribute("class", "name");const _92=document.createTextNode(network["name"]);_91.append(_92);_87.append(_91);const _93=document.createTextNode("\r\n                    ");_87.append(_93);_85.append(_87);const _94=document.createTextNode("\r\n                ");_85.append(_94);}_83.append(_85);const _95=document.createTextNode("\r\n            ");_83.append(_95);_71.append(_83);const _96=document.createTextNode("\r\n        ");_71.append(_96);_66.append(_71);const _97=document.createTextNode("\r\n    ");_66.append(_97);_33.append(_66);const _98=document.createTextNode("\r\n    ");_33.append(_98);const _99=document.createElement("div");_99.setAttribute("class", "select-wrapper");const _100=document.createTextNode("\r\n        ");_99.append(_100);const _101=document.createElement("label");_101.setAttribute("for", "tokenButton");const _102=document.createTextNode("Coin:");_101.append(_102);_99.append(_101);const _103=document.createTextNode("\r\n        ");_99.append(_103);const _104=document.createElement("div");_104.setAttribute("class", "select tokenSelect");_104.setAttribute("data-symbol", variables["tokens"]["0"]["symbol"]);const _105=document.createTextNode("\r\n            ");_104.append(_105);const _106=document.createElement("button");_106.setAttribute("type", "button");_106.setAttribute("id", "tokenButton");const _107=document.createTextNode("\r\n                ");_106.append(_107);const _108=document.createElement("img");_108.setAttribute("src", variables["tokens"]["0"]["logoURI"]);_108.setAttribute("alt", "");_106.append(_108);const _109=document.createTextNode("\r\n                ");_106.append(_109);const _110=document.createElement("span");_110.setAttribute("class", "name");const _111=document.createTextNode(variables["tokens"]["0"]["name"]);_110.append(_111);_106.append(_110);const _112=document.createTextNode("\r\n                ");_106.append(_112);const _113=document.createElement("img");_113.setAttribute("class", "arrow");_113.setAttribute("src", variables["arrow"]);_106.append(_113);const _114=document.createTextNode("\r\n            ");_106.append(_114);_104.append(_106);const _115=document.createTextNode("\r\n            ");_104.append(_115);const _116=document.createElement("ul");_116.setAttribute("tabindex", "-1");_116.setAttribute("role", "listbox");const _117=document.createTextNode("\r\n                ");_116.append(_117);let _118=document.createDocumentFragment();for(let [_foreachKey,_foreachValue] of Object.entries(variables["tokens"])){let token = _foreachValue;const _119=document.createTextNode("\r\n                    ");_118.append(_119);const _120=document.createElement("li");_120.setAttribute("role", "option");_120.setAttribute("data-network", token["network"]);_120.setAttribute("data-symbol", token["symbol"]);const _121=document.createTextNode("\r\n                        ");_120.append(_121);const _122=document.createElement("img");_122.setAttribute("src", token["logoURI"]);_122.setAttribute("alt", "");_120.append(_122);const _123=document.createTextNode("\r\n                        ");_120.append(_123);const _124=document.createElement("span");_124.setAttribute("class", "name");const _125=document.createTextNode(token["name"]);_124.append(_125);_120.append(_124);const _126=document.createTextNode("\r\n                    ");_120.append(_126);_118.append(_120);const _127=document.createTextNode("\r\n                ");_118.append(_127);}_116.append(_118);const _128=document.createTextNode("\r\n            ");_116.append(_128);_104.append(_116);const _129=document.createTextNode("\r\n        ");_104.append(_129);_99.append(_104);const _130=document.createTextNode("\r\n    ");_99.append(_130);_33.append(_99);const _131=document.createTextNode("\r\n");_33.append(_131);_20.append(_33);const _132=document.createTextNode("\r\n");_20.append(_132);const _133=document.createElement("footer");const _134=document.createTextNode("\r\n    ");_133.append(_134);const _135=document.createElement("button");_135.setAttribute("type", "button");_135.setAttribute("class", "send");const _136=document.createTextNode("\r\n        ");_135.append(_136);const _137=document.createElement("span");const _138=document.createTextNode("Send");_137.append(_138);_135.append(_137);const _139=document.createTextNode("\r\n    ");_135.append(_139);_133.append(_135);const _140=document.createTextNode("\r\n");_133.append(_140);_20.append(_133);return _20}


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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcGluZ01haW4ubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWE7O0FBRWIsMkNBQTJDLGdDQUFnQyxvQ0FBb0Msb0RBQW9ELDhEQUE4RCxpRUFBaUUsR0FBRyxrQ0FBa0M7O0FBRXZVLGlDQUFpQyxnQkFBZ0Isc0JBQXNCLE9BQU8sdURBQXVELGFBQWEsdURBQXVELDRDQUE0QyxLQUFLLDZDQUE2Qyw2RUFBNkUsT0FBTyxpREFBaUQsbUZBQW1GLE9BQU87O0FBRXRnQiw0Q0FBNEMsa0JBQWtCLGtDQUFrQyxvRUFBb0UsS0FBSyxPQUFPLG9CQUFvQjs7QUFFcE0sbUNBQW1DOztBQUVuQyxnQ0FBZ0M7O0FBRWhDLGtDQUFrQzs7QUFFbEMsbUNBQW1DOztBQUVuQyx3QkFBd0IsMkJBQTJCLDJFQUEyRSxrQ0FBa0Msd0JBQXdCLE9BQU8sa0NBQWtDLG1JQUFtSTs7QUFFcFcseUNBQXlDLG1FQUFtRSxnRUFBZ0UsV0FBVyx5QkFBeUIsU0FBUyx3QkFBd0IsNEJBQTRCLGNBQWMsU0FBUywrQkFBK0Isc0JBQXNCLFdBQVcsWUFBWSxnS0FBZ0ssc0RBQXNELFNBQVMsa0JBQWtCLDRCQUE0QixvQkFBb0Isc0JBQXNCLDhCQUE4QixjQUFjLHVCQUF1QixlQUFlLFlBQVksb0JBQW9CLE1BQU0saUVBQWlFLFVBQVU7O0FBRTEyQixrREFBa0QsZ0JBQWdCLGdFQUFnRSx3REFBd0QsNkRBQTZELHNEQUFzRDs7QUFFN1MsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeks7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsOEJBQThCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsdUVBQXVFO0FBQ3ZFLE9BQU87QUFDUCxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU0sa0NBQWtDO0FBQ3hDLE1BQU07QUFDTixrRkFBa0Y7QUFDbEY7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjs7O0FBR0E7QUFDQTtBQUNBOztBQUVBLHdFQUF3RSxhQUFhO0FBQ3JGO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxQ0FBcUMscUJBQXFCO0FBQzFEOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEIsT0FBTzs7QUFFbkM7QUFDQSwrQkFBK0IsWUFBWTtBQUMzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFRQSw2QkFBZSxvQ0FBVSxXQUFXLDRDQUE0QywyQ0FBMkMsOENBQThDLGdCQUFnQix1Q0FBdUMsOENBQThDLGdCQUFnQiwyREFBMkQsZ0JBQWdCLGdCQUFnQiw4Q0FBOEMsZ0JBQWdCLHdDQUF3Qyx5Q0FBeUMsNENBQTRDLGlDQUFpQyxnQkFBZ0IsOENBQThDLGdCQUFnQiwwQ0FBMEMsZ0VBQWdFLHdCQUF3Qix5QkFBeUIsY0FBYyx3Q0FBd0MsaUNBQWlDLHlDQUF5QyxjQUFjLHVDQUF1QyxpQ0FBaUMseUNBQXlDLGNBQWMsNkNBQTZDLHlDQUF5QyxjQUFjLDhDQUE4Qyx3Q0FBd0MsY0FBYyxZQUFZLGdCQUFnQixnQkFBZ0IsMENBQTBDLGdCQUFnQixnQkFBZ0IsMENBQTBDLGdCQUFnQix5Q0FBeUMsOENBQThDLGdCQUFnQix3Q0FBd0MsNENBQTRDLGtEQUFrRCxnQkFBZ0IsMkNBQTJDLG1DQUFtQyxvQ0FBb0Msd0NBQXdDLHNEQUFzRCxnQkFBZ0IseUNBQXlDLHdDQUF3QyxnQkFBZ0IsZ0JBQWdCLGtEQUFrRCxnQkFBZ0IsZ0JBQWdCLHNEQUFzRCxnQkFBZ0IsMkNBQTJDLG1DQUFtQyxvQ0FBb0Msc0RBQXNELGdCQUFnQix5Q0FBeUMsd0NBQXdDLGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQixnQkFBZ0Isc0RBQXNELGdCQUFnQiwyQ0FBMkMsbUNBQW1DLG9DQUFvQyxzREFBc0QsZ0JBQWdCLHlDQUF5Qyx3Q0FBd0MsZ0JBQWdCLGdCQUFnQixrREFBa0QsZ0JBQWdCLGdCQUFnQixzREFBc0QsZ0JBQWdCLHdDQUF3QyxrQ0FBa0Msc0RBQXNELGdCQUFnQix3Q0FBd0MsNEJBQTRCLDBDQUEwQyxnQkFBZ0Isc0RBQXNELGdCQUFnQix5Q0FBeUMsdUNBQXVDLGdCQUFnQixnQkFBZ0Isc0RBQXNELGdCQUFnQiwwQ0FBMEMsZ0JBQWdCLGtEQUFrRCxnQkFBZ0IsZ0JBQWdCLDhDQUE4QyxnQkFBZ0IsZ0JBQWdCLDhDQUE4QyxnQkFBZ0Isd0NBQXdDLDRDQUE0QyxrREFBa0QsZ0JBQWdCLDBDQUEwQyxtQ0FBbUMsOENBQThDLGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQix3Q0FBd0Msa0RBQWtELHFFQUFxRSxzREFBc0QsZ0JBQWdCLDJDQUEyQyxtQ0FBbUMsa0NBQWtDLDBEQUEwRCxnQkFBZ0Isd0NBQXdDLDJEQUEyRCw0QkFBNEIsZ0JBQWdCLDBEQUEwRCxnQkFBZ0IseUNBQXlDLGtDQUFrQyxzRUFBc0UsZ0JBQWdCLGdCQUFnQiwwREFBMEQsZ0JBQWdCLHdDQUF3QyxtQ0FBbUMsNENBQTRDLGdCQUFnQixzREFBc0QsZ0JBQWdCLGdCQUFnQixzREFBc0QsZ0JBQWdCLHVDQUF1QyxtQ0FBbUMsb0NBQW9DLDBEQUEwRCxnQkFBZ0IsMENBQTBDLDhFQUE4RSw0QkFBNEIsOERBQThELGdCQUFnQix1Q0FBdUMsbUNBQW1DLGtEQUFrRCxrRUFBa0UsZ0JBQWdCLHdDQUF3Qyx3Q0FBd0MsNEJBQTRCLGdCQUFnQixrRUFBa0UsZ0JBQWdCLHlDQUF5QyxrQ0FBa0MsbURBQW1ELGdCQUFnQixnQkFBZ0IsOERBQThELGdCQUFnQixnQkFBZ0IsMERBQTBELGlCQUFpQixnQkFBZ0Isc0RBQXNELGdCQUFnQixnQkFBZ0Isa0RBQWtELGdCQUFnQixnQkFBZ0IsOENBQThDLGdCQUFnQixnQkFBZ0IsOENBQThDLGdCQUFnQix3Q0FBd0MsNENBQTRDLG1EQUFtRCxpQkFBaUIsMkNBQTJDLHdDQUF3Qyw0Q0FBNEMsa0JBQWtCLGlCQUFpQixtREFBbUQsaUJBQWlCLHlDQUF5QyxpREFBaUQscUVBQXFFLHVEQUF1RCxrQkFBa0IsNENBQTRDLG9DQUFvQyx1Q0FBdUMsMkRBQTJELGtCQUFrQix5Q0FBeUMsOERBQThELDZCQUE2QixrQkFBa0IsMkRBQTJELGtCQUFrQiwwQ0FBMEMsbUNBQW1DLHFFQUFxRSxrQkFBa0Isa0JBQWtCLDJEQUEyRCxrQkFBa0IseUNBQXlDLG9DQUFvQyw2Q0FBNkMsa0JBQWtCLHVEQUF1RCxrQkFBa0Isa0JBQWtCLHVEQUF1RCxrQkFBa0Isd0NBQXdDLG9DQUFvQyxxQ0FBcUMsMkRBQTJELGtCQUFrQiwyQ0FBMkMsNEVBQTRFLDBCQUEwQiwrREFBK0Qsa0JBQWtCLHdDQUF3QyxvQ0FBb0Msb0RBQW9ELGtEQUFrRCxtRUFBbUUsa0JBQWtCLHlDQUF5QywyQ0FBMkMsNkJBQTZCLGtCQUFrQixtRUFBbUUsa0JBQWtCLDBDQUEwQyxtQ0FBbUMsa0RBQWtELGtCQUFrQixrQkFBa0IsK0RBQStELGtCQUFrQixrQkFBa0IsMkRBQTJELG1CQUFtQixrQkFBa0IsdURBQXVELGtCQUFrQixrQkFBa0IsbURBQW1ELGtCQUFrQixpQkFBaUIsK0NBQStDLGlCQUFpQixnQkFBZ0IsMkNBQTJDLGlCQUFpQixnQkFBZ0IsMkNBQTJDLGlCQUFpQiw0Q0FBNEMsK0NBQStDLGtCQUFrQiw0Q0FBNEMsb0NBQW9DLG1DQUFtQyxtREFBbUQsa0JBQWtCLDBDQUEwQywyQ0FBMkMsa0JBQWtCLGtCQUFrQiwrQ0FBK0Msa0JBQWtCLGtCQUFrQiwyQ0FBMkMsa0JBQWtCLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7O0FDRHBnVixpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDQW5DLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNBaEMsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FDQS9CLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7QUNBaEMsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7OztBQ0FuQyxpRUFBZSxnQkFBZ0I7Ozs7Ozs7Ozs7Ozs7O0FDQXhCO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7O1NDOUlBO1NBQ0E7O1NBRUE7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7U0FDQTtTQUNBO1NBQ0E7O1NBRUE7U0FDQTs7U0FFQTtTQUNBO1NBQ0E7Ozs7O1VDdEJBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQSxpQ0FBaUMsV0FBVztVQUM1QztVQUNBOzs7OztVQ1BBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjBDO0FBQ1k7QUFDRTtBQUNSO0FBQ0o7QUFDSTtBQUNxQjtBQUNFO0FBQ2pDO0FBQ0Y7QUFDcEM7QUFDTztBQUNQO0FBQ0E7QUFDQSxhQUFhLHVCQUF1Qiw2RUFBYyxnQ0FBZ0M7QUFDbEYsYUFBYSx1QkFBdUIsb0VBQVEsMEJBQTBCO0FBQ3RFLGFBQWEsa0JBQWtCLDhFQUFlLDJCQUEyQjtBQUN6RTtBQUNBLG9CQUFvQixvREFBTSxVQUFVLEVBQUUsNkRBQVEsRUFBRSw0QkFBNEIsNkRBQVUsaUZBQVcsOEVBQU8sd0VBQUssd0VBQU8sb0VBQUM7QUFDckg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLGNBQWM7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxRQUFRO0FBQzdFO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vbm9kZV9tb2R1bGVzL2Zhc3QtY3JlYXRvci9kaXN0L2VudHJ5LmpzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nTWFpbi5tcHRzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy9pbWcvYXJyb3cuc3ZnIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy9pbWcvYmluYW5jZS1jb2luLWxvZ28ud2VicCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2V0aF9sb2dvLnBuZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL21hdGljLXRva2VuLWljb24ud2VicCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL3Blbi5zdmciLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL2ltZy91c2RjX2xvZ28ucG5nIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nVXRpbHMuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nTWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGlmIChlbnVtZXJhYmxlT25seSkgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pOyBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307IGlmIChpICUgMikgeyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pOyB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7IH0gZWxzZSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIobykgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCBvW1N5bWJvbC5pdGVyYXRvcl0gPT0gbnVsbCkgeyBpZiAoQXJyYXkuaXNBcnJheShvKSB8fCAobyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkpIHsgdmFyIGkgPSAwOyB2YXIgRiA9IGZ1bmN0aW9uIEYoKSB7fTsgcmV0dXJuIHsgczogRiwgbjogZnVuY3Rpb24gbigpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfSwgZTogZnVuY3Rpb24gZShfZSkgeyB0aHJvdyBfZTsgfSwgZjogRiB9OyB9IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gaXRlcmF0ZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfSB2YXIgaXQsIG5vcm1hbENvbXBsZXRpb24gPSB0cnVlLCBkaWRFcnIgPSBmYWxzZSwgZXJyOyByZXR1cm4geyBzOiBmdW5jdGlvbiBzKCkgeyBpdCA9IG9bU3ltYm9sLml0ZXJhdG9yXSgpOyB9LCBuOiBmdW5jdGlvbiBuKCkgeyB2YXIgc3RlcCA9IGl0Lm5leHQoKTsgbm9ybWFsQ29tcGxldGlvbiA9IHN0ZXAuZG9uZTsgcmV0dXJuIHN0ZXA7IH0sIGU6IGZ1bmN0aW9uIGUoX2UyKSB7IGRpZEVyciA9IHRydWU7IGVyciA9IF9lMjsgfSwgZjogZnVuY3Rpb24gZigpIHsgdHJ5IHsgaWYgKCFub3JtYWxDb21wbGV0aW9uICYmIGl0W1wicmV0dXJuXCJdICE9IG51bGwpIGl0W1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChkaWRFcnIpIHRocm93IGVycjsgfSB9IH07IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShuKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcclxuICpcclxuICogQHBhcmFtIGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5mdW5jdGlvbiBjcmVhdGVGcm9tRGVmaW5pdGlvbigpIHtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IG51bGw7XG4gIGlmICghZG9jdW1lbnRPYmplY3QpIGRvY3VtZW50T2JqZWN0ID0gZG9jdW1lbnQ7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnRPYmplY3QuY3JlYXRlRWxlbWVudChhdHRyaWJ1dGVzLnRhZ05hbWUgfHwgJ2RpdicpO1xuICByZXBhaXJDbGFzc2VzKGF0dHJpYnV0ZXMpO1xuXG4gIGZvciAodmFyIGF0dHJOYW1lIGluIGF0dHJpYnV0ZXMpIHtcbiAgICBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjbGFzc0xpc3QnKSB7XG4gICAgICB2YXIgX2l0ZXJhdG9yID0gX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIoYXR0cmlidXRlcy5jbGFzc0xpc3QpLFxuICAgICAgICAgIF9zdGVwO1xuXG4gICAgICB0cnkge1xuICAgICAgICBmb3IgKF9pdGVyYXRvci5zKCk7ICEoX3N0ZXAgPSBfaXRlcmF0b3IubigpKS5kb25lOykge1xuICAgICAgICAgIHZhciB4ID0gX3N0ZXAudmFsdWU7XG4gICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKHgpO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgX2l0ZXJhdG9yLmUoZXJyKTtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIF9pdGVyYXRvci5mKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RleHQnKSB7XG4gICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gYXR0cmlidXRlcy50ZXh0O1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdodG1sJykge1xuICAgICAgZWxlbWVudC5pbm5lckhUTUwgPSBhdHRyaWJ1dGVzLmh0bWw7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2RhdGEnKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGVsZW1lbnQuZGF0YXNldCwgYXR0cmlidXRlcy5kYXRhKTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnY2hpbGRyZW4nKSB7XG4gICAgICBhdHRyaWJ1dGVzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQuYXBwZW5kQ2hpbGQoeCBpbnN0YW5jZW9mIE5vZGUgPyB4IDogY3JlYXRlKHgsIHt9LCBkb2N1bWVudE9iamVjdCkpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdvbicpKSB7XG4gICAgICBlbGVtZW50W2F0dHJOYW1lXSA9IGF0dHJpYnV0ZXNbYXR0ck5hbWVdO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgaWYgKF90eXBlb2YoYXR0cmlidXRlc1thdHRyTmFtZV0pID09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZm9yICh2YXIgc3R5bGVOYW1lIGluIGF0dHJpYnV0ZXNbYXR0ck5hbWVdKSB7XG4gICAgICAgICAgZWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eShzdHlsZU5hbWUsIGF0dHJpYnV0ZXNbYXR0ck5hbWVdW3N0eWxlTmFtZV0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbYXR0ck5hbWVdICE9PSBmYWxzZSkge1xuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICd0YWdOYW1lJykgey8vbm90aGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gPT09IHRydWUpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyTmFtZSk7ZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSBlbGVtZW50LnNldEF0dHJpYnV0ZShhdHRyTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5mdW5jdGlvbiByZXBhaXJDbGFzc2VzKG9iaikge1xuICBpZiAob2JqLmNsYXNzTmFtZSkge1xuICAgIGlmICghb2JqLmNsYXNzTGlzdCkgb2JqLmNsYXNzTGlzdCA9IFtdO1xuICAgIG9iai5jbGFzc0xpc3QgPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KG9iai5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTmFtZS5zcGxpdCgnICcpKSk7XG4gICAgZGVsZXRlIG9iai5jbGFzc05hbWU7XG4gIH1cbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogJHJldHVybnMge29iamVjdH1cclxuICovXG5cblxuZnVuY3Rpb24gcGFyc2VTZWxlY3RvcihzZWxlY3Rvcikge1xuICBzZWxlY3RvciA9IChzZWxlY3RvciArIFwiXCIpLnRyaW0oKTtcbiAgdmFyIHBvc2l0aW9uID0gMDtcblxuICBmdW5jdGlvbiBwYXJzZUVsZW1lbnQoKSB7XG4gICAgdmFyIHJldCA9IHt9O1xuICAgIHZhciBjYW5CZVRhZ25hbWUgPSB0cnVlO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG4gICAgICBwb3NpdGlvbisrO1xuXG4gICAgICBpZiAoX2NoYXIgPT09ICcjJykge1xuICAgICAgICByZXQuaWQgPSBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICcuJykge1xuICAgICAgICBpZiAoIXJldC5jbGFzc0xpc3QpIHJldC5jbGFzc0xpc3QgPSBbXTtcbiAgICAgICAgcmV0LmNsYXNzTGlzdC5wdXNoKHBhcnNlVGV4dCgpKTtcbiAgICAgIH0gZWxzZSBpZiAoX2NoYXIgPT09ICdbJykge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSBwYXJzZVRleHQoWyc9JywgJ10nXSk7XG4gICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG5cbiAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnPScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXCInKSB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUF0dHJpYnV0ZVZhbHVlKCk7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHNraXBXaGl0ZXNwYWNlKCk7XG4gICAgICAgICAgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSAhPSAnXScpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gPT0gJ10nKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICByZXRbYXR0ck5hbWVdID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoL1xccy8udGVzdChfY2hhcikpIHtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoICYmIC9cXHMvLnRlc3Qoc2VsZWN0b3JbcG9zaXRpb25dKSkge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldC5jaGlsZHJlbiA9IFtwYXJzZUVsZW1lbnQoKV07XG4gICAgICB9IGVsc2UgaWYgKGNhbkJlVGFnbmFtZSkge1xuICAgICAgICByZXQudGFnTmFtZSA9IF9jaGFyICsgcGFyc2VUZXh0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTeW50YXggZXJyb3IgaW4gcG9zaXRpb24gXCIgKyBwb3NpdGlvbik7XG4gICAgICB9XG5cbiAgICAgIGNhbkJlVGFnbmFtZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZVRleHQoKSB7XG4gICAgdmFyIGVzY2FwZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogWycuJywgJyMnLCAnLCcsICdbJ107XG4gICAgdmFyIHRleHQgPSAnJztcblxuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyMiA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKC9cXHMvLnRlc3QoX2NoYXIyKSB8fCBlc2NhcGUuaW5jbHVkZXMoX2NoYXIyKSkge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIyO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gcGFyc2VBdHRyaWJ1dGVWYWx1ZSgpIHtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIzID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoX2NoYXIzID09ICdcIicpIHtcbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0ZXh0ICs9IF9jaGFyMztcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGV4dDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNraXBXaGl0ZXNwYWNlKCkge1xuICAgIHdoaWxlIChwb3NpdGlvbiA8IHNlbGVjdG9yLmxlbmd0aCkge1xuICAgICAgdmFyIF9jaGFyNCA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcblxuICAgICAgaWYgKCEvXFxzLy50ZXN0KF9jaGFyNCkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcG9zaXRpb24rKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAoc2VsZWN0b3IgPT09IFwiXCIpIHJldHVybiB7fTtlbHNlIHJldHVybiBwYXJzZUVsZW1lbnQoKTtcbn1cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JcclxuICogQHBhcmFtIHtvYmplY3R9IGF0dHJpYnV0ZXNcclxuICogQHBhcmFtIGRvY3VtZW50T2JqZWN0XHJcbiAqIEByZXR1cm5zIHtIVE1MRWxlbWVudH1cclxuICovXG5cblxuZnVuY3Rpb24gY3JlYXRlKCkge1xuICB2YXIgZGVmaW5pdGlvbiA9IHt9O1xuICB2YXIgZG9jdW1lbnRPYmplY3QgPSBudWxsO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBwYXJhbXMgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcGFyYW1zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXNbMF0gPT0gXCJzdHJpbmdcIikgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJzZVNlbGVjdG9yKHBhcmFtcy5zcGxpY2UoMCwgMSlbMF0pKTtcbiAgaWYgKF90eXBlb2YocGFyYW1zWzBdKSA9PSBcIm9iamVjdFwiICYmICEocGFyYW1zWzBdIGluc3RhbmNlb2YgTm9kZSkpIGRlZmluaXRpb24gPSBtZXJnZU9iamVjdHMoZGVmaW5pdGlvbiwgcGFyYW1zLnNwbGljZSgwLCAxKVswXSk7XG5cbiAgZm9yICh2YXIgX2kgPSAwLCBfcGFyYW1zID0gcGFyYW1zOyBfaSA8IF9wYXJhbXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtc1tfaV07XG5cbiAgICBpZiAocGFyYW0gaW5zdGFuY2VvZiBEb2N1bWVudCkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbTtcbiAgICB9IGVsc2UgaWYgKHBhcmFtIGluc3RhbmNlb2YgTm9kZSkge1xuICAgICAgZG9jdW1lbnRPYmplY3QgPSBwYXJhbS5vd25lckRvY3VtZW50O1xuICAgICAgaWYgKCFkZWZpbml0aW9uLmNoaWxkcmVuKSBkZWZpbml0aW9uLmNoaWxkcmVuID0gW107XG4gICAgICBkZWZpbml0aW9uLmNoaWxkcmVuLnB1c2gocGFyYW0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjcmVhdGVGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBkb2N1bWVudE9iamVjdCk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlT2JqZWN0cyhhLCBiKSB7XG4gIHJlcGFpckNsYXNzZXMoYSk7XG4gIHJlcGFpckNsYXNzZXMoYik7XG5cbiAgdmFyIHJldCA9IF9vYmplY3RTcHJlYWQoe30sIGEsIHt9LCBiKTtcblxuICBpZiAoYS5kYXRhICYmIGIuZGF0YSkge1xuICAgIHJldC5kYXRhID0gX29iamVjdFNwcmVhZCh7fSwgYS5kYXRhLCB7fSwgYi5kYXRhKTtcbiAgfVxuXG4gIGlmIChhLmNoaWxkcmVuICYmIGIuY2hpbGRyZW4pIHtcbiAgICByZXQuY2hpbGRyZW4gPSBbXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGEuY2hpbGRyZW4pLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jaGlsZHJlbikpO1xuICB9XG5cbiAgaWYgKGEuY2xhc3NMaXN0ICYmIGIuY2xhc3NMaXN0KSB7XG4gICAgcmV0LmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jbGFzc0xpc3QpLCBfdG9Db25zdW1hYmxlQXJyYXkoYi5jbGFzc0xpc3QpKTtcbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGVGcm9tRGVmaW5pdGlvbjogY3JlYXRlRnJvbURlZmluaXRpb24sXG4gIHBhcnNlU2VsZWN0b3I6IHBhcnNlU2VsZWN0b3IsXG4gIGNyZWF0ZTogY3JlYXRlLFxuICBtZXJnZU9iamVjdHM6IG1lcmdlT2JqZWN0cyxcbiAgXCJkZWZhdWx0XCI6IGNyZWF0ZVxufTsiLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YXJpYWJsZXMpe2NvbnN0IF8yMD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Y29uc3QgXzIxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7Y29uc3QgXzIyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjEuYXBwZW5kKF8yMik7Y29uc3QgXzIzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtjb25zdCBfMjQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJTZW5kIHRvIFwiKTtfMjMuYXBwZW5kKF8yNCk7Y29uc3QgXzI1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhcmlhYmxlc1tcImlkZW50aWZpZXJcIl0pO18yMy5hcHBlbmQoXzI1KTtfMjEuYXBwZW5kKF8yMyk7Y29uc3QgXzI2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjEuYXBwZW5kKF8yNik7Y29uc3QgXzI3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzI3LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiY2xvc2VCdXR0b25cIik7XzI3LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJjbG9zZVwiXSk7XzI3LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcImNsb3NlXCIpO18yMS5hcHBlbmQoXzI3KTtjb25zdCBfMjg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18yMS5hcHBlbmQoXzI4KTtjb25zdCBfMjk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2NvbnN0IF8zMD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXHJcXG4gICAgICAgICB3aWR0aDogNnB4O1xcclxcbiAgICAgICAgIGhlaWdodDogNnB4O1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgICAgICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntcXHJcXG4gICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXHJcXG4gICAgICAgICB9XFxyXFxuICAgICAgICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlcntcXHJcXG4gICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNCk7XFxyXFxuICAgICAgICAgfVxcclxcbiAgICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6YWN0aXZle1xcclxcbiAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsLjkpO1xcclxcbiAgICAgICAgIH1cXHJcXG4gICAgIFwiKTtfMjkuYXBwZW5kKF8zMCk7XzIxLmFwcGVuZChfMjkpO2NvbnN0IF8zMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMjEuYXBwZW5kKF8zMSk7XzIwLmFwcGVuZChfMjEpO2NvbnN0IF8zMj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMjAuYXBwZW5kKF8zMik7Y29uc3QgXzMzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJtYWluXCIpO2NvbnN0IF8zND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzMzLmFwcGVuZChfMzQpO2NvbnN0IF8zNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO18zNS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInZhbHVlU2VsZWN0aW9uXCIpO2NvbnN0IF8zNj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18zNS5hcHBlbmQoXzM2KTtjb25zdCBfMzc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtfMzcuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMzcuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIjFcIik7XzM3LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiaXNTZWxlY3RlZFwiKTtjb25zdCBfMzg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzM3LmFwcGVuZChfMzgpO2NvbnN0IF8zOT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfNDA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkMVwiKTtfMzkuYXBwZW5kKF80MCk7XzM3LmFwcGVuZChfMzkpO2NvbnN0IF80MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO18zNy5hcHBlbmQoXzQxKTtfMzUuYXBwZW5kKF8zNyk7Y29uc3QgXzQyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7XzM1LmFwcGVuZChfNDIpO2NvbnN0IF80Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO180My5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO180My5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwiMlwiKTtjb25zdCBfNDQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzQzLmFwcGVuZChfNDQpO2NvbnN0IF80NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfNDY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkMlwiKTtfNDUuYXBwZW5kKF80Nik7XzQzLmFwcGVuZChfNDUpO2NvbnN0IF80Nz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO180My5hcHBlbmQoXzQ3KTtfMzUuYXBwZW5kKF80Myk7Y29uc3QgXzQ4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7XzM1LmFwcGVuZChfNDgpO2NvbnN0IF80OT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO180OS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO180OS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwiNVwiKTtjb25zdCBfNTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzQ5LmFwcGVuZChfNTApO2NvbnN0IF81MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfNTI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCIkNVwiKTtfNTEuYXBwZW5kKF81Mik7XzQ5LmFwcGVuZChfNTEpO2NvbnN0IF81Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO180OS5hcHBlbmQoXzUzKTtfMzUuYXBwZW5kKF80OSk7Y29uc3QgXzU0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXFxyXFxuICAgICAgICBcIik7XzM1LmFwcGVuZChfNTQpO2NvbnN0IF81NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO181NS5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm1vcmVcIik7Y29uc3QgXzU2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO181NS5hcHBlbmQoXzU2KTtjb25zdCBfNTc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfNTcuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO181Ny5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wicGVuXCJdKTtfNTUuYXBwZW5kKF81Nyk7Y29uc3QgXzU4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO181NS5hcHBlbmQoXzU4KTtjb25zdCBfNTk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7Y29uc3QgXzYwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiJFwiKTtfNTkuYXBwZW5kKF82MCk7XzU1LmFwcGVuZChfNTkpO2NvbnN0IF82MT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfNTUuYXBwZW5kKF82MSk7Y29uc3QgXzYyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtfNTUuYXBwZW5kKF82Mik7Y29uc3QgXzYzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzU1LmFwcGVuZChfNjMpO18zNS5hcHBlbmQoXzU1KTtjb25zdCBfNjQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18zNS5hcHBlbmQoXzY0KTtfMzMuYXBwZW5kKF8zNSk7Y29uc3QgXzY1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMzMuYXBwZW5kKF82NSk7Y29uc3QgXzY2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzY2LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0LXdyYXBwZXJcIik7Y29uc3QgXzY3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzY2LmFwcGVuZChfNjcpO2NvbnN0IF82OD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XzY4LnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5ldHdvcmtcIik7Y29uc3QgXzY5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTmV0d29yazpcIik7XzY4LmFwcGVuZChfNjkpO182Ni5hcHBlbmQoXzY4KTtjb25zdCBfNzA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfNjYuYXBwZW5kKF83MCk7Y29uc3QgXzcxPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzcxLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0IG5ldHdvcmtTZWxlY3RcIik7XzcxLnNldEF0dHJpYnV0ZShcImRhdGEtbmV0d29ya1wiLCB2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJjb2RlXCJdKTtjb25zdCBfNzI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzcxLmFwcGVuZChfNzIpO2NvbnN0IF83Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO183My5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO183My5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ldHdvcmtcIik7Y29uc3QgXzc0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfNzMuYXBwZW5kKF83NCk7Y29uc3QgXzc1PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7Xzc1LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJpbWdcIl0pO183NS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJcIik7XzczLmFwcGVuZChfNzUpO2NvbnN0IF83Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzczLmFwcGVuZChfNzYpO2NvbnN0IF83Nz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfNzcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF83OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YXJpYWJsZXNbXCJuZXR3b3Jrc1wiXVtcIjBcIl1bXCJuYW1lXCJdKTtfNzcuYXBwZW5kKF83OCk7XzczLmFwcGVuZChfNzcpO2NvbnN0IF83OT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzczLmFwcGVuZChfNzkpO2NvbnN0IF84MD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO184MC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFycm93XCIpO184MC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wiYXJyb3dcIl0pO183My5hcHBlbmQoXzgwKTtjb25zdCBfODE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzczLmFwcGVuZChfODEpO183MS5hcHBlbmQoXzczKTtjb25zdCBfODI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzcxLmFwcGVuZChfODIpO2NvbnN0IF84Mz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XzgzLnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XzgzLnNldEF0dHJpYnV0ZShcInJvbGVcIiwgXCJsaXN0Ym94XCIpO2NvbnN0IF84ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzgzLmFwcGVuZChfODQpO2xldCBfODU9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2ZvcihsZXQgW19mb3JlYWNoS2V5LF9mb3JlYWNoVmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKHZhcmlhYmxlc1tcIm5ldHdvcmtzXCJdKSl7bGV0IG5ldHdvcmsgPSBfZm9yZWFjaFZhbHVlO2NvbnN0IF84Nj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgXCIpO184NS5hcHBlbmQoXzg2KTtjb25zdCBfODc9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO184Ny5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwib3B0aW9uXCIpO184Ny5zZXRBdHRyaWJ1dGUoXCJkYXRhLW5ldHdvcmtcIiwgbmV0d29ya1tcImNvZGVcIl0pO2NvbnN0IF84OD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtfODcuYXBwZW5kKF84OCk7Y29uc3QgXzg5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7Xzg5LnNldEF0dHJpYnV0ZShcInNyY1wiLCBuZXR3b3JrW1wiaW1nXCJdKTtfODkuc2V0QXR0cmlidXRlKFwiYWx0XCIsIFwiXCIpO184Ny5hcHBlbmQoXzg5KTtjb25zdCBfOTA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIik7Xzg3LmFwcGVuZChfOTApO2NvbnN0IF85MT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtfOTEuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF85Mj1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShuZXR3b3JrW1wibmFtZVwiXSk7XzkxLmFwcGVuZChfOTIpO184Ny5hcHBlbmQoXzkxKTtjb25zdCBfOTM9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiKTtfODcuYXBwZW5kKF85Myk7Xzg1LmFwcGVuZChfODcpO2NvbnN0IF85ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7Xzg1LmFwcGVuZChfOTQpO31fODMuYXBwZW5kKF84NSk7Y29uc3QgXzk1PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgXCIpO184My5hcHBlbmQoXzk1KTtfNzEuYXBwZW5kKF84Myk7Y29uc3QgXzk2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzcxLmFwcGVuZChfOTYpO182Ni5hcHBlbmQoXzcxKTtjb25zdCBfOTc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO182Ni5hcHBlbmQoXzk3KTtfMzMuYXBwZW5kKF82Nik7Y29uc3QgXzk4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMzMuYXBwZW5kKF85OCk7Y29uc3QgXzk5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Xzk5LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VsZWN0LXdyYXBwZXJcIik7Y29uc3QgXzEwMD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgXCIpO185OS5hcHBlbmQoXzEwMCk7Y29uc3QgXzEwMT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XzEwMS5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2tlbkJ1dHRvblwiKTtjb25zdCBfMTAyPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiQ29pbjpcIik7XzEwMS5hcHBlbmQoXzEwMik7Xzk5LmFwcGVuZChfMTAxKTtjb25zdCBfMTAzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7Xzk5LmFwcGVuZChfMTAzKTtjb25zdCBfMTA0PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzEwNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInNlbGVjdCB0b2tlblNlbGVjdFwiKTtfMTA0LnNldEF0dHJpYnV0ZShcImRhdGEtc3ltYm9sXCIsIHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJzeW1ib2xcIl0pO2NvbnN0IF8xMDU9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzEwNSk7Y29uc3QgXzEwNj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO18xMDYuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMTA2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9rZW5CdXR0b25cIik7Y29uc3QgXzEwNz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICBcIik7XzEwNi5hcHBlbmQoXzEwNyk7Y29uc3QgXzEwOD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18xMDguc2V0QXR0cmlidXRlKFwic3JjXCIsIHZhcmlhYmxlc1tcInRva2Vuc1wiXVtcIjBcIl1bXCJsb2dvVVJJXCJdKTtfMTA4LnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfMTA2LmFwcGVuZChfMTA4KTtjb25zdCBfMTA5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTA2LmFwcGVuZChfMTA5KTtjb25zdCBfMTEwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO18xMTAuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuYW1lXCIpO2NvbnN0IF8xMTE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFyaWFibGVzW1widG9rZW5zXCJdW1wiMFwiXVtcIm5hbWVcIl0pO18xMTAuYXBwZW5kKF8xMTEpO18xMDYuYXBwZW5kKF8xMTApO2NvbnN0IF8xMTI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgXCIpO18xMDYuYXBwZW5kKF8xMTIpO2NvbnN0IF8xMTM9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtfMTEzLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYXJyb3dcIik7XzExMy5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdmFyaWFibGVzW1wiYXJyb3dcIl0pO18xMDYuYXBwZW5kKF8xMTMpO2NvbnN0IF8xMTQ9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICBcIik7XzEwNi5hcHBlbmQoXzExNCk7XzEwNC5hcHBlbmQoXzEwNik7Y29uc3QgXzExNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTA0LmFwcGVuZChfMTE1KTtjb25zdCBfMTE2PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtfMTE2LnNldEF0dHJpYnV0ZShcInRhYmluZGV4XCIsIFwiLTFcIik7XzExNi5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwibGlzdGJveFwiKTtjb25zdCBfMTE3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTE2LmFwcGVuZChfMTE3KTtsZXQgXzExOD1kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7Zm9yKGxldCBbX2ZvcmVhY2hLZXksX2ZvcmVhY2hWYWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModmFyaWFibGVzW1widG9rZW5zXCJdKSl7bGV0IHRva2VuID0gX2ZvcmVhY2hWYWx1ZTtjb25zdCBfMTE5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICBcIik7XzExOC5hcHBlbmQoXzExOSk7Y29uc3QgXzEyMD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XzEyMC5zZXRBdHRyaWJ1dGUoXCJyb2xlXCIsIFwib3B0aW9uXCIpO18xMjAuc2V0QXR0cmlidXRlKFwiZGF0YS1uZXR3b3JrXCIsIHRva2VuW1wibmV0d29ya1wiXSk7XzEyMC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXN5bWJvbFwiLCB0b2tlbltcInN5bWJvbFwiXSk7Y29uc3QgXzEyMT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKTtfMTIwLmFwcGVuZChfMTIxKTtjb25zdCBfMTIyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XzEyMi5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgdG9rZW5bXCJsb2dvVVJJXCJdKTtfMTIyLnNldEF0dHJpYnV0ZShcImFsdFwiLCBcIlwiKTtfMTIwLmFwcGVuZChfMTIyKTtjb25zdCBfMTIzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpO18xMjAuYXBwZW5kKF8xMjMpO2NvbnN0IF8xMjQ9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XzEyNC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcIm5hbWVcIik7Y29uc3QgXzEyNT1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0b2tlbltcIm5hbWVcIl0pO18xMjQuYXBwZW5kKF8xMjUpO18xMjAuYXBwZW5kKF8xMjQpO2NvbnN0IF8xMjY9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgIFwiKTtfMTIwLmFwcGVuZChfMTI2KTtfMTE4LmFwcGVuZChfMTIwKTtjb25zdCBfMTI3PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICAgICAgICAgIFwiKTtfMTE4LmFwcGVuZChfMTI3KTt9XzExNi5hcHBlbmQoXzExOCk7Y29uc3QgXzEyOD1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICAgICAgICAgIFwiKTtfMTE2LmFwcGVuZChfMTI4KTtfMTA0LmFwcGVuZChfMTE2KTtjb25zdCBfMTI5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEwNC5hcHBlbmQoXzEyOSk7Xzk5LmFwcGVuZChfMTA0KTtjb25zdCBfMTMwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfOTkuYXBwZW5kKF8xMzApO18zMy5hcHBlbmQoXzk5KTtjb25zdCBfMTMxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18zMy5hcHBlbmQoXzEzMSk7XzIwLmFwcGVuZChfMzMpO2NvbnN0IF8xMzI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzIwLmFwcGVuZChfMTMyKTtjb25zdCBfMTMzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb290ZXJcIik7Y29uc3QgXzEzND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzEzMy5hcHBlbmQoXzEzNCk7Y29uc3QgXzEzNT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO18xMzUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImJ1dHRvblwiKTtfMTM1LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwic2VuZFwiKTtjb25zdCBfMTM2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgICAgICBcIik7XzEzNS5hcHBlbmQoXzEzNik7Y29uc3QgXzEzNz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtjb25zdCBfMTM4PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiU2VuZFwiKTtfMTM3LmFwcGVuZChfMTM4KTtfMTM1LmFwcGVuZChfMTM3KTtjb25zdCBfMTM5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMTM1LmFwcGVuZChfMTM5KTtfMTMzLmFwcGVuZChfMTM1KTtjb25zdCBfMTQwPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18xMzMuYXBwZW5kKF8xNDApO18yMC5hcHBlbmQoXzEzMyk7cmV0dXJuIF8yMH1cbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lJRDgrRFFvOGMzWm5JSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdkbWxsZDBKdmVEMGlNQ0F3SURJd0lESXdJaUJtYVd4c1BTSWpPV05oTTJGbUlpQjNhV1IwYUQwaU1qQndlQ0lnYUdWcFoyaDBQU0l5TUhCNElqNE5DaUFnSUNBOGNHRjBhQ0JtYVd4c0xYSjFiR1U5SW1WMlpXNXZaR1FpRFFvZ0lDQWdJQ0FnSUNBZ1pEMGlUVFV1TWpreklEY3VNamt6WVRFZ01TQXdJREF4TVM0ME1UUWdNRXd4TUNBeE1DNDFPRFpzTXk0eU9UTXRNeTR5T1ROaE1TQXhJREFnTVRFeExqUXhOQ0F4TGpReE5Hd3ROQ0EwWVRFZ01TQXdJREF4TFRFdU5ERTBJREJzTFRRdE5HRXhJREVnTUNBd01UQXRNUzQwTVRSNklnMEtJQ0FnSUNBZ0lDQWdJR05zYVhBdGNuVnNaVDBpWlhabGJtOWtaQ0l2UGcwS1BDOXpkbWMrXCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvd2VicDtiYXNlNjQsVWtsR1Jub0JBQUJYUlVKUVZsQTRURzRCQUFBdkdBQUdFTCtDb0czYmVQdlBuOVI1aFliQ3RtMGJkdnovOEJKQnRrMW5kSCs1czQwa3ljbk1QVnA0bUtSQUN1U2ZEb1gvRytDZnRVQVJRSUZUQ0tBUXdBQTdSQWtSQkVFNHFORUpEVUZobHlCWW9DVEFBcUdoSTVqd0kzaktCaUhrb09PUEZ3b0lnbUFZeEczbzFPb05oUjFDQ0xGaWhpZ2MwZ0xNRUVJVVJMM2RCV2YyR1FJSXRtMGRiMDZiV25GU0k3WnQyNitZLzFSKzVlc01JdnF2d0czVUJvNU5kMStCRlVjNlVkVDRjeVREcEpxTVJXU2tnb1FtYWdob29vYWdMdHZKem9EanNxKy9sZzdIOE4zVHBlYkRYdGJSL1RiVFpYWmxFTEJYRHJMS1hCanAyWXN0czZqNmVIaS94OTVZcEczWVg0REFvT0xuTHU3R2xwOFhUbkRHYjdFMytrbkNROWxYSDRHYi9FcVdoV3ZBVVRuSUlOWVNrWFVSZUp1SnlQUURTRzFFcEIzU2xRZjROYWdyQzBWaVVQRlpwRTl4NmVsbVB3azhlVGxUR3diODVhenZiNWs1eDhRL3hodjNhM0xzeHZsU2ZpTklLTDhxSkt6K3dUOStEZ293aVFxTy9VNzEvd3c9XCIiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpSUQ4K0RRbzhjM1puSUhodGJHNXpQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh5TURBd0wzTjJaeUlnWTJ4aGMzTTlJbWd0TmlCM0xUWWdkR1Y0ZEMxbmNtRjVMVFV3TUNCdGJDMWhkWFJ2SWlCbWFXeHNQU0p1YjI1bElnMEtJQ0FnSUNCMmFXVjNRbTk0UFNJd0lEQWdNalFnTWpRaUlITjBjbTlyWlQwaUl6WmlOekk0TUNJZ2MzUnliMnRsTFhkcFpIUm9QU0l5SWlCM2FXUjBhRDBpTWpSd2VDSWdhR1ZwWjJoMFBTSXlOSEI0SWo0TkNpQWdJQ0E4Y0dGMGFDQnpkSEp2YTJVdGJHbHVaV05oY0QwaWNtOTFibVFpSUhOMGNtOXJaUzFzYVc1bGFtOXBiajBpY205MWJtUWlJR1E5SWswMklERTRUREU0SURaTk5pQTJiREV5SURFeUlpOCtEUW84TDNOMlp6ND1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFQUFBQUJBQ0FNQUFBQ2R0NEhzQUFBQUJHZEJUVUVBQUxHUEMveGhCUUFBQUFGelVrZENBSzdPSE9rQUFBTUFVRXhVUlV4cGNXeDdiUC8vLyt6djhPdnU3K3Z1Ny8vLy8vLy8vK3Z1Ny8vLy8renY4TCsvdit2dTcrcnQ3dXJ0N3V6djhPenY3L0wxOXUzdjhPdnQ3dTN3OGVydTd1dnU3K3p3OGUzdzhhRmsvKzd5OU96djhPenU4Ty95OHV6djhQTDE5c0NxcXVuczdQRDA5ZTd1N3V2djcrZnQ3ZkR5OU83eTh1dnU3dXp1NytydTc4ek16T3ZyNysvejgrcnM3dTd4OCt6djhldnU4TzN3OGU3dzh1enU3K2pvNitYbjUvTDE5dkgxOXZMMTl1dnU3L0R6OWU3eTlPdnU3Ky95OC9IejllL3o5UEgxOXZEejlPenM3T3Z3OE92eTh1M3c4bi8vLy9EMDlmSDA5ZTd4OGUzdzhlM3c4ZXZ2Nyt2djhPenY4TzN4OGV2djcrdnc4UEwxOWU3eDlPdnQ3dXp3OGV2djhPN3g4dTd5OCszdzh1enY4Qzh3TUlLRGhCTVRFelExTlRVMk51dnU3K3J0N29TRmhqRXlNdS95OC9YNCtSRVJFUzB1TG9PRWhmYjUrakl6TS9EejlPN3g4bng5ZmVuczdUQXhNZlAyOS9MMTl2My8vKzN3OGZMMTkvei8veFVWRlh0OGZZR0NnL2o4L0RjNE9QVDQrQ1FsSlJRVUZQNy8vNFdHaDN4OWZpY29LUC8vLy9yOS8zK0FnWWVKaWZyOS9pNHZMek0wTkNzc0xQZjYrK25yN1BUMytIcDdmQ2txS2lJakkzNS9nSDErZnlvckt6WTNOOWJZMmRmYTJ4Y1hGK1hvNmZuOC9mdi8vNG1LaTRDQmdzZkp5dWZwNnZqNy9mVDQrUXdOREFRRUJQRHo5TE8xdFQwK1B0SFQxQ0VoSVI4Zkg2dXRyaU1rSkYxZVhpWW5KME5FUkVWR1J2WDUrcmE0dVkrUWtjSER4TjdoNG95UGo2V25xRk5WVlFjSEIvRHo5V3h0YnBXV2w4ek96NzdBd2FHanBFdE1UQnNiRzNkNGVaeWVuM1IyZHVQbTUzaDVldWpxNitIazVaaVptc1RIeU52ZTNyQ3lzNm1zcmRQVjFvS0VoV1JsWmVydDd4Z1pHWnVjbmZqNy9OM2c0VnBjWEpLVWxXWm9hS0Nob3NqTHpMcTl2cXl1ci9IMTlzM1EwVFUxTnZiNisyNXdjR2xyYThyTnprRkNRaWNuSjluYjNPRGk0L0wyOTFGU1UyQmlZa2RKU2J1K3Z6OUJRU01qSThIRXhlenc4VmRaV2UveTlLaXFxN0N5c3FTbXAweE5Uam83TzVhWW1jM1AwRTVPVHZUMjkvSDA5VlpYV0hGemM1NmdvR0pqWTdpNnU0YSszR0VBQUFCYmRGSk9Vd0FCQXZ6OSt3UUIvZ1A0QlByOC92MjY5TmI3K2hpT0tlMEJqdXRlcUdMbkEySDhGb2NWZDQ2UStOZ0ZLRUUvcmFscjc0L3FMaXkvd3YzRWJXM0gvb2FHNitvY2VDaDNBdFBTWGZmUWtOSE9yYWhyOVYzUHp0Yisvb2FxdmR3eEFBQUhFMGxFUVZSWXc0MVhkMXdUWnhqK3dBdDNBVkVjUUttMGJoRlhXMFc3Njk2cjJ6OHVNY2tsbDVEa0lsbUZwR2tnQ1dVVENDTlNGRncvOTFiY293N2MxVmFwdHE2cUhYYnYzWFIrZHdHOSt5NWd2ejhndjd0N24zdlhQZS96QWlBNktUSHdUL1RrR2ZjbmRNK0lKZXl4R2QwVDBsNU14dUhGR0J6YysrQlNBS1REUjgySzFiWVlMTFNkSk8yMHhkQ2luZmx5MnZBNGVPZWVFTkI4NHFEcFdwdkJoR0ZZVjRLRWgrZ0tmNW9NTnUyMFFZbmNBeDJjYUJ3a2poMXY4M2VSWUp3dFBDb1Y5NC9BSkYyMDJSUEc5Z2Q0ZEVldmozcXl0NDJXWU9TZG82SnBWZHR2VE1KazkzNHFDc1MxSC8yWVI3TVpDVUh5N0VQQjRMVTdDQ1FCSVI0YjNVNG1jQnc4MksxRllFNlNsSGJiTFMzRnUwQkk2cnM5eUQ0YndSNGY5VG9kVHdydHJSOGVLMTFYbjhXL0ZrOFhwYVdJRWFMd3VBZnlNZUhyWVFtWGJLdlFiRnBpVXZFdkVwM3lINGpEbzVEM3AvUjVLSzh6WWs1Uy9qUGVhdGNhajlBRmt1eWM5NUJVNkFNdXhSL09peGZaaHhZMnFMMjF4Wm1OeXlqaG5maThoM0ZCSm1OQVVyN28vYkNFRjd5ZUJVcnp4ZzBoRlhLcmMvNWdFTU92Zjk5RlBVWDJsR1c3UTY5ZW9NdzBmbjBRRFlMc3VhanYzYWJzQTVKZjZOZEYvUDdteFExeUZzQmN1dXBkQnZHaFM3OXV3MEIwV3dLa1Q3OGFMM2JnMDdjY2FnNUFaZ3djYmtGZGlLOS9Jcm8xRFZMd2ZMWkVuQURyNmlxOVBBd2dNMWNlTUNCNUpDWFpqNFNEd1BHQnZSN3ZTb3JQdnVvN0FCcmZaM2IwTnNIMDZzL1ZVZ29HUkhDQThsK3BVTXZiQUdBUSsrckxrVWQ2MkFhd0x1Qmc0SDBNSWM1Z2s4Y3B2d3RnemxRR3JVZ1F4RE1qRThGVVdNMUp0Z2daQ0IxMHFIa0FNdVA2dmVJczJLYXd6VEIwaUI4VHQ4Q0hiQUo0QURMTnhwVm9KVHI1aHd5RlNSaWhGZG1UOXZKdEJTaEE1UmZIVGNoam1IWUVUR0pTbmtTY3daVmNCdmtBc3BMQVlyUWZKYllrV0lTWERKZ29BWi9JMjQ3ZTBRWUF6MzYvTUEzWWxqa3hJRG5XaE5aQXhSenhoZ053eWdzTGF0dk1qZTdQTGU4STYyQktId1pTdDJDaURKN2lLdUIwNmd2bGV6ZXYvZGlzYVVWWXZ4TUpBdE9tZ3NGTEVRQ1Y2WTNGRFhwb3JpNHNlSHVUSmpOWGQ5NWRyREd6elZEejFXMWE4RkZoUzJlREJEUUZsT1dxUSsxMGVnb3JMcTZTYVdxTk9UcWRybTVOS1lRb05nWVdDRXVKR1JKQWR3dUJaUEJzbFZQdThSemQ1U28yS3BWS1RZNXUvbnlkTG5kdERSdEp6VGRDanJiT0F4bWlQdDVYdFZpOTkwMkZyRVNwVkNqQ0FQRG81aC95eVVwOHV3UzlRTkFaSU5hT0RJSUREWElZdWt3QnJSVThBTmFOODI2ais4SWlmaEQyZElCK1JLY0xOc0RRbFdGekFRQUxVUmRRWExmeTgwZ0FBdTNCRXJmQzFXYU9BTXpQeWRtOS9QMHlRVGVCZEdFSXF1OHZ2MWRUZkJlQkQ1QmJ0M3ozNzZldThSMnd4NElNV3VpRDNXLzk4WGVmMFNVR3FOT3QwT3kwR21nQksyV0FlVllCZ09rRXhSaU9YL3JGcDZ3VkF1VGtyamlrWDNKaldkWkNYaDBJUzNlMGtlaW1INElodWl4NHRMaVVpNk1WZ0EzK243TkxRMldOZndWNURNODIwbXhoSzFQK3h1b3p6Y3cxN2ZhTGxXWUl3UUhBNEZkODlHK1oxZEIwYnVNUFJSUy9sUWVEVklSUEtPMlpvenUyazdUZjlOTm1YNG1MQmNqUnJmQ2RwTFVXOHUrUGNzNWxad20rNTFRd0xGMzBPWjkwZUg5ZHpkQmxKd28vcUhTVjFPWHV6ajE4dXlYa3Y3TExIZmlUdEt2NG4zTnNNb2laZzN6UEt1YTBXbDlWdGJNcHhKUmR2MVZhdW56M3Jzc3RJY1BabXo2ZnB1UTN2OEFCdzF6STYwa29LYk5EMWFOM2VMWWVaNngvYlAyNTl1b3l5N0xtSFlyMVprWGdvSEE0U1BJZ3BVVWdWVlZvcDBPdGQxWnNhelRSWmMzTlphOHdiMjBPWkJwTDF0OUVtSjBqVlJ6U2VpZVVVcGJzZ0tTc0x2QWVDWVlZcS9iVUJuZU4wYXlwM055TTBBbWtkVlpiVEJFTkZzcTZ1b0FsVkwyM1lWM3o2WXBTdDlITTh0R0JHMWtJS1UrQzVsTkI0c2huQ0JHdmIrVjRYUzkzRkc1YXczR2ljYzJPb25Ka3V0NDNFRTVHZHJqYWVvaEdpK21DbDVzTW5tUHMyMWxLM3JDSFZDSHpuUnV1Y0x6Mzc4V0ltYjJwME1sU3U3cTZsaHV1cFM1MHVIWjl2TmZBc0ZTVGdrZkU4NTJ5TkhLem9YVXlhZHpyV3NyYkVSaFE0a1EvVVMvV2VOWjE3SFFJQXhnRHg5REpHbC8vdExSTjZVV0R5ZDNFSXN1ZWRRbHFuTEJHOHYxY0xsU3JyTWhLaHVxc0k1bEhoWUxPc0FmbTR1SkdiVllITW85dGhzSDVFWVR1bDYwNk1YQVNxU0FVbWtsOG9kbU8xRlV4N3p1Z1V0VzQzL09yVUtuN25GRHF3bHBLeFdLYmxacE9yNnR5MWJ1STFPMmM5MnlmS0R5QzNPOUVvTFhjWDFEdDJyaFZXQUVDaXlEM1dSOVMwb3BFQzRkbDVlSEtjMFdpaFNNcThzb0NWNTU2Wk9VaG1jTHZ2aFdRVUxzckQ3ZDBqWDRNV2Jvb2EzQzFoZUtaNzhsK2RFejc2MmNjdS9aQkNQN2F4ekRVM2JXUHRuVzA5b1VYei83akptUnJJeStlcjluR2owdnNjUEVNcjc2Smc2WkZYbjJuRDVwNHI5VzNkZm1PR3o1Nzdremg4aDA3YTlSdzZmOVp2bGtJdGtmeDVCbHBDZk15MGtraVBXTmVRbHJxTU5ieG1CVHgwLzhCc1A4RDVPV2Q0czhBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSaHdDQUFCWFJVSlFWbEE0VEE4Q0FBQXZHQUFHRUQva0lKSWtSYW9uLzI1NXB1cEpoTU8yalJ5SkgvcnZONDBsSUNqeWZ6UzJqU1FwcWozcm1jbjlQRDcvclA2MkRxRE93cWdaUlNBRWtSRkdLSW9pSXdSaEZHRnVqdnR2dGptSzErM3huNk93L1pwQTJJcFEvSVlkUk1nY2p0ZHRqdGZ0OGR2cmR2MnNDTHY5UmNXTW9yWWpGTFlpT0g1SU1OdzJpQjJ6N1NBeXcxR0UyaStCaElRZktpUjBVWWxBaEl3SXhPWGREUUV0QkR5d3dBc0RmREJCd0E0QkRRUVVDRUNRYmR0MDlHTTdiZHUyYmR2R2lkLzdzWTJCZjNSNkJoSDlaK1MyalNQSlUyNWwxNjlnZUhwanFVekY3WEJYTXFtWWx4RXpraTY0d05kVlNFZEVTT1NjRU5PWlN3aElsdkNIS0NYNSt5SUFuNThWVFpIYlJyTUEvSzliUjk5VUxOa293NlFkb0o4N2JUTDl4Qlh4Q1hHa21YZ2U1THBmVlQvWHE2NWRmQk5KUHA1eWdVeEt4Mi9wMTI2VFlzOVAvWUpEVXhrQVF6VVBmaUM4ckR0Z3p3L2VXVjR5Wlk2NlJ3TFFrL1hyT1pPaSsvaUhBQ2g3QUF4YjcvencrWitXR3BRZEl5YkQ5RDBCUEE2QXpFcTZ6dkMrMml4djNmakFhYWRrbGdBT0QwRHVaNHptMFhaRjQvS3pId2hlR1lZQmVNb0F5Tzl4ajlJMmY3TjJUZ0Y2WitFb1p3QUE3TWZocFg5YnN4SUNBamRHamt6S0JmNkcramRsTGZ2ZjVLSlBNa1hnU3NYekVPaDdXYkJyQjJkclZBTTNCUGs0OTQ4RUVuSXhwcGUxN1h4U09OSzh2eW9pL1Q3Y2V2WHovaXEvQjJLeWZoK3ZCOVUzcC9xdS9iT2QxZmVaQVFBPVwiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5TQjNMVFVpSUhacFpYZENiM2c5SWpBZ01DQXlNQ0F5TUNJZ1ptbHNiRDBpSXpBd01DSWdkMmxrZEdnOUlqSXdJaUJvWldsbmFIUTlJakl3SWo0TkNpQWdJQ0E4Y0dGMGFDQmtQU0pOTVRNdU5UZzJJRE11TlRnMllUSWdNaUF3SURFeE1pNDRNamdnTWk0NE1qaHNMUzQzT1RNdU56a3pMVEl1T0RJNExUSXVPREk0TGpjNU15MHVOemt6ZWsweE1TNHpOemtnTlM0M09UTk1NeUF4TkM0eE56SldNVGRvTWk0NE1qaHNPQzR6T0MwNExqTTNPUzB5TGpnekxUSXVPREk0ZWlJdlBnMEtQQzl6ZG1jK1wiIiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVBQUFBQkFDQVlBQUFDcWFYSGVBQUFEUTBsRVFWUjRYdFhaTVc0VVFSQ0ZZWTdBRVp5WkMzQUJUc0FGT0FFSmlTVkhoS1FFSklTa1hBR1JJNUFRUXJMa0FBbVJtQkNjRUJBWmpZVlg4cmRWM2JVenM3UGpYL3FUZmE5N3VucU4yTFh2M1Z1STQ1T1BQNDVQUGwwVnZYVDluU01ZYXBMdXYxbzgrTno2dkZXdzQ0LzNYSzdqbjBsd3NFWDFQSXZoUVE2dDU5c3JQbnd0ZXM3WjhZRnIxWFBQZ2c5WnU1NS9FbTYrcTZkdnYyKzkxdlB4eTdPcmg4OC9iNzIraTg0eENqZXRLdVk5eGJ5cTgreUVtMVhNc05jencxNUY1eXJqUmkzZm4vMzJyTGV3MzdQRitjOC9XLzJXemxYQ1RWcjJzRisxaC8yV3p0ZkV4UzFiMkIxckM3c3RuVFBGaFprWjl1WXl3MTZtYzRhNEtEUERYcWFZWjJiWXkzVGVXMVMvMVdYWWF5bm1MVFBzWlRyM0JvdVJHZlo2aW5uUERIdVJ6cjNCWW1TRW5ZcGlYakhDVHVUUnN5LzNuWDNSNGFPOXpLdEcySWwwL2xFWFlONnppdXQ2aW5uazVPRUg3R1NPd1QxYVJ0aUpuSFFCNWkzSDRqNHR4VHl5ZkFFUmRqSWo3R1RkSjYvUHR6cVpFWFowOUFXWXR4UnpGZk9XWXE3L2grOS8rQkh6ek9FZEZEc3E1aTNGUExMNzdqOTk4ODE5dHpxWnI5NWR1SFNyTTZjeWZFVzNvOTBMRVBPZVlqNjNZcTZMWDhBTjl1WlN6UFZnRnhEaDJqR0t1ZTc5QXFJOUtyaEhWVEhYUlM0ZzI2dUg2eXVLdVM1NkFUY092L092NHRxZVlxNEh1WURJaTE5L2ZkUTE5bnFLdWE3bUFtNk1zTk5TekhWMUZ4RDlmY0ZPU3pIWDRRSXVmVkhGUEZQTU04VThVOHdqOS9wbFNNd2pJK3hraXJudS9kdGdoQjBWODVaaXJxTXZZTUJPWm9TZE1WMk5zS1BsQ3hnVTg4eGQvczhYOTJvcDVwR2JDNmhjUW9TZGxydmkrcFlSZHZUVzhKVUxHQlR6bmhWY1UxSE1JNTMvR2tzYVlhZXFtRmVOc0tNUFRqOGNPZnMxRmlNajdGUVU4NG9SZGlLZGU4Tng0VVBSWUlTZG5tTGVNOEpPcG5QZnduSmtocjJXWXQ0eXcxNms4NGE0S0RMRDN0eG0ySXNNL3lnYTRjTE1GbmFuMnNKdXBuTTJjWEZtRC91NzJzTitwdk9WY0pPV1BlejM3UEhveGRldE5abk9WY2FOZXJhdzI3T0YzWjdPdFJOdVZqSENUczhJT3hXZFp4UnVXblhLNGFlc3ZkRTVKdUhtYTlmeno0SVBXYXVlZTNaODRGcjBuSHZGaHg5YXo3Y1lIbVJweXg5djk0bUhXa3JQY1hDR2Q4TkR6bTM2eTR5MTRjR242djUzRGdmcTZmcDk4US90d3BtYXU2SFU0UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwiZXhwb3J0IGNvbnN0IHRva2VucyA9IFtcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJFdGhlcmV1bVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvMzJ4MzIvMTAyNy5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJNQVRJQ1wiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiTUFUSUNcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vcG9seWdvbnNjYW4uY29tL3Rva2VuL2ltYWdlcy9tYXRpY18zMi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogNTYsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiQlNDXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQk5CXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJCTkJcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy8zMngzMi8xODM5LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4QTBiODY5OTFjNjIxOGIzNmMxZDE5RDRhMmU5RWIwY0UzNjA2ZUI0OFwiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlVTRCBDb2luXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA2LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vdG9rZW5zLjFpbmNoLmlvLzB4YTBiODY5OTFjNjIxOGIzNmMxZDE5ZDRhMmU5ZWIwY2UzNjA2ZWI0OC5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJVU0QgQ29pblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogNixcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDI3OTFiY2ExZjJkZTQ2NjFlZDg4YTMwYzk5YTdhOTQ0OWFhODQxNzRcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3dhbGxldC1hc3NldC5tYXRpYy5uZXR3b3JrL2ltZy90b2tlbnMvdXNkYy5zdmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogNTYsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiQlNDXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVVNEIENvaW5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRENcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4OEFDNzZhNTFjYzk1MGQ5ODIyRDY4YjgzZkUxQWQ5N0IzMkNkNTgwZFwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vd2FsbGV0LWFzc2V0Lm1hdGljLm5ldHdvcmsvaW1nL3Rva2Vucy91c2RjLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkVUSCBvbiBQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJXRVRIXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDdjZUIyM2ZENmJDMGFkRDU5RTYyYWMyNTU3ODI3MGNGZjFiOWY2MTlcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3BvbHlnb25zY2FuLmNvbS90b2tlbi9pbWFnZXMvd0VUSF8zMi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogNTYsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiQlNDXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRVRIIG9uIEJTQ1wiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiV0VUSFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHgyMTcwRWQwODgwYWM5QTc1NWZkMjlCMjY4ODk1NkJEOTU5RjkzM0Y4XCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9wb2x5Z29uc2Nhbi5jb20vdG9rZW4vaW1hZ2VzL3dFVEhfMzIucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHg2QjE3NTQ3NEU4OTA5NEM0NERhOThiOTU0RWVkZUFDNDk1MjcxZDBGXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGFpXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJEQUlcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vdG9rZW5zLjFpbmNoLmlvLzB4NmIxNzU0NzRlODkwOTRjNDRkYTk4Yjk1NGVlZGVhYzQ5NTI3MWQwZi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDFBRjNGMzI5ZThCRTE1NDA3NEQ4NzY5RDFGRmE0ZUUwNThCMURCYzNcIixcclxuICAgICAgICBcImNoYWluSWRcIjogNTYsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiQlNDXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRGFpXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJEQUlcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vdG9rZW5zLjFpbmNoLmlvLzB4NmIxNzU0NzRlODkwOTRjNDRkYTk4Yjk1NGVlZGVhYzQ5NTI3MWQwZi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImNoYWluSWRcIjogMTM3LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIlBvbHlnb25cIixcclxuICAgICAgICBcIm5hbWVcIjogXCJEYWlcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkRBSVwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHg4ZjNjZjdhZDIzY2QzY2FkYmQ5NzM1YWZmOTU4MDIzMjM5YzZhMDYzXCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly93YWxsZXQtYXNzZXQubWF0aWMubmV0d29yay9pbWcvdG9rZW5zL2RhaS5zdmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweGRBQzE3Rjk1OEQyZWU1MjNhMjIwNjIwNjk5NDU5N0MxM0Q4MzFlYzdcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJUZXRoZXJcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRFRcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDYsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMuMWluY2guaW8vMHhkYWMxN2Y5NThkMmVlNTIzYTIyMDYyMDY5OTQ1OTdjMTNkODMxZWM3LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlRldGhlclwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEVFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogNixcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweGMyMTMyZDA1ZDMxYzkxNGE4N2M2NjExYzEwNzQ4YWViMDRiNThlOGZcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3dhbGxldC1hc3NldC5tYXRpYy5uZXR3b3JrL2ltZy90b2tlbnMvdXNkdC5zdmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJEb2dlY29pblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiRE9HRVwiLFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4YkEyYUU0MjRkOTYwYzI2MjQ3RGQ2YzMyZWRDNzBCMjk1Yzc0NEM0M1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMucGFuY2FrZXN3YXAuZmluYW5jZS9pbWFnZXMvMHhiQTJhRTQyNGQ5NjBjMjYyNDdEZDZjMzJlZEM3MEIyOTVjNzQ0QzQzLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkN1bHQgREFPXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJDVUxUXCIsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhmMGY5ZDg5NWFjYTVjODY3OGY3MDZmYjgyMTZmYTIyOTU3Njg1YTEzXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvNjR4NjQvMTc3NDIucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiUmV2b2x0IDIgRWFyblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiUlZMVFwiLFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4ZjBmOUQ4OTVhQ2E1Yzg2NzhmNzA2RkI4MjE2ZmEyMjk1NzY4NUExM1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzY0eDY0LzE5ODkzLnBuZ1wiXHJcbiAgICB9LFxyXG5dIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB0ZW1wbGF0ZSBmcm9tIFwiLi90aXBwaW5nTWFpbi5tcHRzXCI7XHJcbmltcG9ydCBldGhfbG9nbyBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL2V0aF9sb2dvLnBuZ1wiXHJcbmltcG9ydCB1c2RjX2xvZ28gZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy91c2RjX2xvZ28ucG5nXCJcclxuaW1wb3J0IGFycm93IGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvYXJyb3cuc3ZnXCJcclxuaW1wb3J0IHBlbiBmcm9tIFwiISF1cmwtbG9hZGVyIS4vaW1nL3Blbi5zdmdcIlxyXG5pbXBvcnQgY2xvc2UgZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9jbG9zZS5zdmdcIlxyXG5pbXBvcnQgbWF0aWNUb2tlbkljb24gZnJvbSBcIiEhdXJsLWxvYWRlciEuL2ltZy9tYXRpYy10b2tlbi1pY29uLndlYnBcIlxyXG5pbXBvcnQgYmlhbm5jZUNvaW5Mb2dvIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvYmluYW5jZS1jb2luLWxvZ28ud2VicFwiXHJcbmltcG9ydCB7dG9rZW5zfSBmcm9tIFwiLi90aXBwaW5nVXRpbHNcIjtcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJmYXN0LWNyZWF0b3JcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXBwaW5nTWFpbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgY29uc3QgbmV0d29ya3MgPSBbXHJcbiAgICAgICAgICAgIHtuYW1lOiAnUG9seWdvbiAnLCBpbWc6IG1hdGljVG9rZW5JY29uLCBjaGFpbklkOiAxMzcsIGNvZGU6ICdQb2x5Z29uJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnRXRoZXJldW0nLCBpbWc6IGV0aF9sb2dvLCBjaGFpbklkOiAxLCBjb2RlOiAnRVRIJ30sXHJcbiAgICAgICAgICAgIHtuYW1lOiAnQlNDJywgaW1nOiBiaWFubmNlQ29pbkxvZ28sIGNoYWluSWQ6IDU2LCBjb2RlOiAnQlNDJ30sXHJcbiAgICAgICAgXVxyXG4gICAgICAgIHRoaXMuaHRtbCA9IGNyZWF0ZSgnZGl2Jywge30sIHRlbXBsYXRlKHtpZGVudGlmaWVyLCBuZXR3b3JrcywgdG9rZW5zLCBldGhfbG9nbywgdXNkY19sb2dvLCBhcnJvdywgcGVuLCBjbG9zZX0pKTtcclxuXHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3QnKS5mb3JFYWNoKHNlbGVjdCA9PiB7XHJcbiAgICAgICAgICAgIHNlbGVjdC5vbmNsaWNrID0gZSA9PiBzZWxlY3QuY2xhc3NMaXN0LnRvZ2dsZSgnaXNPcGVuJylcclxuICAgICAgICAgICAgc2VsZWN0Lm9uYmx1ciA9IGUgPT4gc2VsZWN0LmNsYXNzTGlzdC5yZW1vdmUoJ2lzT3BlbicpXHJcbiAgICAgICAgICAgIHNlbGVjdC5vbmNsaWNrID0gZSA9PiBzZWxlY3QuZmlyc3RFbGVtZW50Q2hpbGQuZm9jdXMoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcuc2VsZWN0IHVsIGxpJykuZm9yRWFjaChsaSA9PiB7XHJcbiAgICAgICAgICAgIGxpLm9uY2xpY2sgPSBlID0+IHtcclxuICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBidXR0b24gPSBsaS5wYXJlbnROb2RlLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignYnV0dG9uJylcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcubmFtZScpLnRleHRDb250ZW50ID0gbGkucXVlcnlTZWxlY3RvcignLm5hbWUnKS50ZXh0Q29udGVudDtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBsaS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmM7XHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGJ1dHRvbi5wYXJlbnROb2RlLmRhdGFzZXQsIGxpLmRhdGFzZXQpO1xyXG4gICAgICAgICAgICAgICAgbGkucGFyZW50Tm9kZS5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2lzT3BlbicpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignOmZvY3VzJyk/LmJsdXIoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVmlzaWJsZUNvaW5zKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5zZW5kJyk/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICAgICAgbGV0IG5ldHdvcmsgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLm5ldHdvcmtTZWxlY3QnKS5kYXRhc2V0Lm5ldHdvcms7XHJcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudG9rZW5TZWxlY3QnKS5kYXRhc2V0LnN5bWJvbDtcclxuICAgICAgICAgICAgbGV0IGFtb3VudCA9IHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcudmFsdWVTZWxlY3Rpb24gLmlzU2VsZWN0ZWQgaW5wdXQnKT8udmFsdWUgfHwgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy52YWx1ZVNlbGVjdGlvbiAuaXNTZWxlY3RlZCcpLmRhdGFzZXQudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuaHRtbC5kaXNwYXRjaEV2ZW50KE9iamVjdC5hc3NpZ24obmV3IEV2ZW50KCdzZW5kTW9uZXknLCB7YnViYmxlczogdHJ1ZX0pLCB7XHJcbiAgICAgICAgICAgICAgICBpZGVudGlmaWVyLFxyXG4gICAgICAgICAgICAgICAgbmV0d29yayxcclxuICAgICAgICAgICAgICAgIGFtb3VudCxcclxuICAgICAgICAgICAgICAgIHRva2VuXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yQWxsKCcudmFsdWVTZWxlY3Rpb24gPiAqJykuZm9yRWFjaChiID0+IHtcclxuICAgICAgICAgICAgYi5vbmNsaWNrID0gZSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnZhbHVlU2VsZWN0aW9uICA+IConKS5mb3JFYWNoKHggPT4geC5jbGFzc0xpc3QucmVtb3ZlKCdpc1NlbGVjdGVkJykpXHJcbiAgICAgICAgICAgICAgICBiLmNsYXNzTGlzdC5hZGQoJ2lzU2VsZWN0ZWQnKVxyXG4gICAgICAgICAgICAgICAgYi5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpPy5mb2N1cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLnJlZnJlc2hWaXNpYmxlQ29pbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoVmlzaWJsZUNvaW5zKCkge1xyXG4gICAgICAgIGxldCBuZXR3b3JrID0gdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5uZXR3b3JrU2VsZWN0JykuZGF0YXNldC5uZXR3b3JrO1xyXG4gICAgICAgIGxldCB0b2tlbnMgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvckFsbCgnLnRva2VuU2VsZWN0IGxpJylcclxuICAgICAgICBmb3IgKGxldCB0b2tlbiBvZiB0b2tlbnMpIHtcclxuICAgICAgICAgICAgdG9rZW4uc3R5bGUuZGlzcGxheSA9IHRva2VuLmRhdGFzZXQubmV0d29yayA9PSBuZXR3b3JrID8gJycgOiAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignLnRva2VuU2VsZWN0JykuZGF0YXNldC5uZXR3b3JrICE9IG5ldHdvcmspIHtcclxuICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoYC50b2tlblNlbGVjdCBsaVtkYXRhLW5ldHdvcms9XCIke25ldHdvcmt9XCJdYCkuY2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=