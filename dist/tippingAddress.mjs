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

/***/ "./node_modules/idriss-crypto/lib/esnext/authorization.js":
/*!****************************************************************!*\
  !*** ./node_modules/idriss-crypto/lib/esnext/authorization.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorization": () => (/* binding */ Authorization),
/* harmony export */   "CheckPaymentResponse": () => (/* binding */ CheckPaymentResponse),
/* harmony export */   "CreateOTPResponse": () => (/* binding */ CreateOTPResponse),
/* harmony export */   "ValidateOTPResponse": () => (/* binding */ ValidateOTPResponse),
/* harmony export */   "WrongOTPException": () => (/* binding */ WrongOTPException)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

class Authorization {
    static async CreateOTP(tag, identifier, address, secretWord = null) {
        const url = "https://www.idriss.xyz/v1/createOTP";
        const searchParams = [];
        searchParams.push(["tag", tag]);
        searchParams.push(["identifier", identifier]);
        searchParams.push(["address", address]);
        if (secretWord != null)
            searchParams.push(["secretWord", secretWord]);
        const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url + '?' + searchParams.map(x => encodeURIComponent(x[0]) + '=' + encodeURIComponent(x[1])).join('&'));
        if (response.status != 200) {
            const responseText = await response.text();
            let message;
            try {
                message = JSON.parse(responseText).message;
            }
            catch (ex) {
                message = responseText;
            }
            throw new Error("Idriss api responded with code " + response.status + " " + response.statusText + "\r\n" + message);
        }
        const decodedResponse = await (response.json());
        return new CreateOTPResponse(decodedResponse.session_key, decodedResponse.tries_left, decodedResponse.address, decodedResponse.hash, decodedResponse.message, decodedResponse.next_step, decodedResponse.twitter_id, decodedResponse.twitter_msg);
    }
    static async ValidateOTP(OTP, sessionKey) {
        const url = "https://www.idriss.xyz/v1/validateOTP";
        const searchParams = [];
        searchParams.push(["OTP", OTP]);
        searchParams.push(["session_key", sessionKey]);
        const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url + '?' + searchParams.map(x => encodeURIComponent(x[0]) + '=' + encodeURIComponent(x[1])).join('&'), {
            method: 'POST'
        });
        if (response.status != 200) {
            const responseText = await response.text();
            let message;
            try {
                message = JSON.parse(responseText).message;
            }
            catch (ex) {
                message = responseText;
            }
            if (message == "Validation failed")
                throw new WrongOTPException("Idriss api responded with code " + response.status + " " + response.statusText + "\r\n" + message);
            else
                throw new Error("Idriss api responded with code " + response.status + " " + response.statusText + "\r\n" + message);
        }
        const decodedResponse = await (response.json());
        return new ValidateOTPResponse(decodedResponse.message, decodedResponse.txn_hash);
    }
    static async CheckPayment(token, sessionKey) {
        const url = "https://www.idriss.xyz/v1/checkPayment";
        const searchParams = [];
        searchParams.push(["token", token]);
        searchParams.push(["session_key", sessionKey]);
        const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()(url + '?' + searchParams.map(x => encodeURIComponent(x[0]) + '=' + encodeURIComponent(x[1])).join('&'), {
            method: 'GET'
        });
        if (response.status != 200) {
            const responseText = await response.text();
            let message;
            try {
                message = JSON.parse(responseText).message;
            }
            catch (ex) {
                message = responseText;
            }
            throw new Error("Idriss api responded with code " + response.status + " " + response.statusText + "\r\n" + message);
        }
        const decodedResponse = await (response.json());
        return new CheckPaymentResponse(decodedResponse.message, decodedResponse.txn_hash, decodedResponse.session_key, decodedResponse.referralLink);
    }
}
class CreateOTPResponse {
    constructor(sessionKey, triesLeft, address, hash, message, nextStep, twitterId, twitterMsg) {
        this.sessionKey = sessionKey;
        this.triesLeft = triesLeft;
        this.address = address;
        this.hash = hash;
        this.message = message;
        this.nextStep = nextStep;
        this.twitterId = twitterId;
        this.twitterMsg = twitterMsg;
    }
}
class ValidateOTPResponse {
    constructor(message, txnHash) {
        this.message = message;
        this.txnHash = txnHash;
    }
}
class CheckPaymentResponse {
    constructor(message, txnHash, sessionKey, referralLink) {
        this.message = message;
        this.txnHash = txnHash;
        this.sessionKey = sessionKey;
        this.referralLink = referralLink;
    }
}
class WrongOTPException extends Error {
    constructor(message) {
        super(message);
    }
}


/***/ }),

/***/ "./node_modules/idriss-crypto/lib/esnext/baseIdrissCrypto.js":
/*!*******************************************************************!*\
  !*** ./node_modules/idriss-crypto/lib/esnext/baseIdrissCrypto.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseIdrissCrypto": () => (/* binding */ BaseIdrissCrypto)
/* harmony export */ });
/* harmony import */ var _webApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./webApi */ "./node_modules/idriss-crypto/lib/esnext/webApi.js");

class BaseIdrissCrypto {
    constructor(web3) {
        this.web3Promise = Promise.resolve(web3);
        this.webApi = new _webApi__WEBPACK_IMPORTED_MODULE_0__.WebApi();
        this.contractPromise = this.generateContract();
        this.contractReversePromise = this.generateContractReverse();
    }
    static matchInput(input) {
        const regPh = /^(\+\(?\d{1,4}\s?)\)?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
        const regM = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
        const regT = /^@[^\s]+/;
        if (input.match(regPh))
            return "phone";
        if (input.match(regM))
            return "mail";
        if (input.match(regT))
            return "twitter";
        return null;
    }
    async resolve(input, options = {}) {
        let twitterID;
        let identifierT;
        let identifier = input;
        identifier = this.lowerFirst(identifier).replace(" ", "");
        const inputType = BaseIdrissCrypto.matchInput(input);
        if (inputType == "phone") {
            identifier = this.convertPhone(identifier);
        }
        else if (inputType === null) {
            throw new Error("Not a valid input. Input must start with valid phone number, email or @twitter handle.");
        }
        if (inputType == "twitter") {
            identifierT = identifier;
            identifier = await this.webApi.getTwitterID(identifier);
            if (identifier == "Not found")
                throw new Error("Twitter handle not found.");
        }
        let foundMatchesPromises = {};
        for (let [network, coins] of Object.entries(BaseIdrissCrypto.getWalletTags())) {
            if (options.network && network != options.network)
                continue;
            for (let [coin, tags] of Object.entries(coins)) {
                if (options.coin && coin != options.coin)
                    continue;
                for (let [tag, tag_key] of Object.entries(tags)) {
                    if (tag_key) {
                        foundMatchesPromises[tag] = this.digestMessage(identifier + tag_key).then(digested => this.callWeb3(digested));
                        foundMatchesPromises[tag];
                        foundMatchesPromises[tag].catch(() => {
                        });
                    }
                }
            }
        }
        ///awaiting on the end for better performance
        let foundMatches = {};
        for (let [tag, promise] of Object.entries(foundMatchesPromises)) {
            try {
                let address = await promise;
                if (address) {
                    foundMatches[tag] = address;
                }
            }
            catch (e) {
                //ommit
            }
        }
        return foundMatches;
    }
    async callWeb3(encrypted) {
        return await (await this.contractPromise).methods.getIDriss(encrypted).call();
    }
    async callWeb3Reverse(address) {
        return await (await this.contractReversePromise).methods.reverseIDriss(address).call();
    }
    async generateContract() {
        return new (await this.web3Promise).eth.Contract([
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "hashPub",
                        "type": "string"
                    }
                ],
                "name": "getIDriss",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            }
        ], '0x2EcCb53ca2d4ef91A79213FDDF3f8c2332c2a814');
    }
    async generateContractReverse() {
        return new (await this.web3Promise).eth.Contract([{
                "inputs": [{ "internalType": "address", "name": "", "type": "address" }],
                "name": "reverseIDriss",
                "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
                "stateMutability": "view",
                "type": "function"
            }], "0x561f1b5145897A52A6E94E4dDD4a29Ea5dFF6f64");
    }
    static getWalletTags() {
        return {
            evm: {
                ETH: {
                    "Metamask ETH": "5d181abc9dcb7e79ce50e93db97addc1caf9f369257f61585889870555f8c321",
                    "Binance ETH": "4b118a4f0f3f149e641c6c43dd70283fcc07eacaa624efc762aa3843d85b2aba",
                    "Coinbase ETH": "92c7f97fb58ddbcb06c0d5a7cb720d74bc3c3aa52a0d706e477562cba68eeb73",
                    "Exchange ETH": "ec72020f224c088671cfd623235b59c239964a95542713390a2b6ba07dd1151c",
                    "Private ETH": "005ba8fbc4c85a25534ac36354d779ef35e0ee31f4f8732b02b61c25ee406edb",
                    "Essentials ETH": "3ea9415b82f0ee7db933aab0be377ee1c1a405969d8b8c2454bcce7372a161c2",
                    "Rainbow ETH": "992335db5f54ef94a5f23be8b925ed2529b044537c19b59643d39696936b6d6c",
                    "Argent ETH": "682614f9b037714bbf001db3a8d6e894fbdcf75cbbb9dea5a42edce33e880072",
                    "Tally ETH": "f368de8673a59b860b71f54c7ba8ab17f0b9648ad014797e5f8d8fa9f7f1d11a",
                    "Trust ETH": "df3d3f0233e396b2b27c3943269b10ecf2e7c1070a485e1b6b8f2201cb23cb52",
                    "Public ETH": "9306eda974cb89b82c0f38ab407f55b6d124159d1fa7779f2e088b2b786573c1",
                },
                BNB: {
                    "Metamask BNB": "3bee8eefc6afe6b4f7dbcc024eb3ad4ceaa5e458d34b7877319f2fe9f676e983",
                    "Essentials BNB": "639c9abb5605a14a557957fa72e146e9abf727be32e5149dca377b647317ebb9",
                },
                USDT: {
                    "Metamask USDT": "74a3d8986c81769ed3bb99b773d66b60852f7ee3fa0d55a6a144523116c671c1",
                    "Binance USDT": "77c27c19cc85e24b1d4650800cc4b1bc607986dd3e78608435cececd31c35015",
                    "Coinbase USDT": "f2faabf9d133f31a13873ba8a15e676e063a730898ffadfcb0077f723260f563",
                    "Exchange USDT": "683e7b694b374ce0d81ba525361fa0c27fff7237eb12ec41b6e225449d5702b9",
                    "Private USDT": "8c9a306a7dc200c52d32e3c1fcbf2f65e8037a68127b81807e8e58428004bc57",
                    "Essentials USDT": "74dcb573a5c63382484f597ae8034a6153c011e291c01eb3da40e9d83c436a9a",
                },
                USDC: {
                    "Metamask USDC": "6f763fea691b1a723ef116e98c02fae07a4397e1a2b4b4c749d06845fa2ff5e4",
                    "Binance USDC": "7d2b0e0ee27a341da84ce56e95eb557988f9d4ff95fe452297fc765265bb27a2",
                    "Coinbase USDC": "6fe7c1a2fdd154e0b35283598724adee9a5d3b2e6523787d8b6de7cd441f15ca",
                    "Exchange USDC": "8c4a231c47a4cfa7530ba4361b6926da4acd87f569167b8ba55b268bf99640d0",
                    "Private USDC": "54c9da06ab3d7c6c7f813f36491b22b7f312ae8f3b8d12866d35b5d325895e3e",
                    "Essentials USDC": "23a66df178daf25111083ee1610fb253baf3d12bd74c6c2aae96077558e3737a",
                },
                ELA: {
                    "Essentials ELA SC": "c17c556467fe7c9fe5667dde7ca8cdbca8a24d0473b9e9c1c2c8166c1f355f6c",
                },
                MATIC: {
                    "Essentials MATIC": "336fb6cdd7fec196c6e66966bd1c326072538a94e700b8bc1111d1574b8357ba",
                },
                ERC20: {
                    ERC20: "63d95e64e7caff988f97fdf32de5f16624f971149749c90fbc7bbe44244d3ced",
                },
            },
            btc: {
                BTC: {
                    "Binance BTC": "450efeca15651e50995ed494ac24a945e61d67f60bed0dbb3b2d8d7df122a8ca",
                    "Coinbase BTC": "b3c77df93f865dd21a6196266d5c291adad15c7db9c81ddc78409a22f36ebe84",
                    "Exchange BTC": "a3f104cace8d66ed9971b19f749a821ae4397349155ea1a8724451c3e680335b",
                    "Private BTC": "a7d3f51b26dad11f5f4842d29f2fc419a48e3471bdec0a2c713c7d18d3143d65",
                    "Essentials BTC": "39d18497a64591bb1b061940309c453495398d00f9d9deab8b2c1e0979e4cbe7",
                },
                ELA: {
                    "Essentials ELA": "35ae820c72397977701524ee610e7ef2ca3d64539ccdc65e5198470d8e49eccb",
                },
            },
            sol: {
                SOL: {
                    "Solana SOL": "62994eac84217f90c44d7acf962861f044a5f2e653400c154a8bcbf114da16fb",
                    "Coinbase SOL": "b5a72b6402de8a0fa649e23c81ae165dcfcce22c960a4a67a218243a73f49b1f",
                    "Trust SOL": "70190458e6435ad1e8f575ac60a7d8542ae5a4927aba336789de377a47b839d4",
                    "Binance SOL": "19cd4e6feb1efb40eb6506fb448a22cefeb63690ecaa35fee65914607adee606",
                    "Phantom SOL": "88f5c6ddb68a1cee77543f2de2788ade913b87bbac1c38d354707bc8ee3a0328",
                },
            },
        };
    }
    lowerFirst(input) {
        return input.charAt(0).toLowerCase() + input.slice(1);
    }
    convertPhone(input) {
        // allow for letters because secret word can follow phone number
        return "+" + input.replace(/[^\da-zA-Z]/, "");
    }
    async reverseResolve(address) {
        let result = await this.callWeb3Reverse(address);
        if (+result) {
            return ('@' + await this.webApi.reverseTwitterID(result)).toLowerCase();
        }
        else {
            return result;
        }
    }
}


/***/ }),

/***/ "./node_modules/idriss-crypto/lib/esnext/browser.js":
/*!**********************************************************!*\
  !*** ./node_modules/idriss-crypto/lib/esnext/browser.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Authorization": () => (/* reexport safe */ _authorization__WEBPACK_IMPORTED_MODULE_1__.Authorization),
/* harmony export */   "CreateOTPResponse": () => (/* reexport safe */ _authorization__WEBPACK_IMPORTED_MODULE_1__.CreateOTPResponse),
/* harmony export */   "IdrissCrypto": () => (/* binding */ IdrissCrypto),
/* harmony export */   "WrongOTPException": () => (/* reexport safe */ _authorization__WEBPACK_IMPORTED_MODULE_1__.WrongOTPException)
/* harmony export */ });
/* harmony import */ var _baseIdrissCrypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseIdrissCrypto */ "./node_modules/idriss-crypto/lib/esnext/baseIdrissCrypto.js");
/* harmony import */ var _authorization__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authorization */ "./node_modules/idriss-crypto/lib/esnext/authorization.js");

class IdrissCrypto extends _baseIdrissCrypto__WEBPACK_IMPORTED_MODULE_0__.BaseIdrissCrypto {
    constructor(polygonEndpoint = "https://polygon-rpc.com/") {
        // @ts-ignore
        const Web3Promise = import("web3/dist/web3.min.js");
        super(Web3Promise.then(x => x.default).then(Web3 => new Web3(new Web3.providers.HttpProvider(polygonEndpoint))));
    }
    async digestMessage(message) {
        const msgUint8 = new TextEncoder().encode(message); // encode as (utf-8) Uint8Array
        const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8); // hash the message
        const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
        const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // convert bytes to hex string
        return hashHex;
    }
}




/***/ }),

/***/ "./node_modules/idriss-crypto/lib/esnext/webApi.js":
/*!*********************************************************!*\
  !*** ./node_modules/idriss-crypto/lib/esnext/webApi.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WebApi": () => (/* binding */ WebApi)
/* harmony export */ });
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_0__);

class WebApi {
    async getTwitterID(inputCombination) {
        const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://www.idriss.xyz/v1/getTwitterID?identifier=" + encodeURIComponent(inputCombination));
        if (response.status != 200)
            throw new Error("IDriss api responded with code " + response.status + " " + response.statusText + "\r\n" + await response.text());
        const json = await response.json();
        return json.twitterID;
    }
    async reverseTwitterID(id) {
        const response = await node_fetch__WEBPACK_IMPORTED_MODULE_0___default()("https://www.idriss.xyz/v1/getTwitterNames?ids=" + encodeURIComponent(id));
        if (response.status != 200)
            throw new Error("IDriss api responded with code " + response.status + " " + response.statusText + "\r\n" + await response.text());
        const json = await response.json();
        return json.twitterNames[id];
    }
}


/***/ }),

/***/ "./src/tippingAddress.mpts":
/*!*********************************!*\
  !*** ./src/tippingAddress.mpts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(variables){const _239=document.createDocumentFragment();const _240=document.createElement("header");_240.setAttribute("class", "noH1");const _241=document.createTextNode("\r\n    ");_240.append(_241);const _242=document.createElement("h1");const _243=document.createTextNode("Input destination");_242.append(_243);_240.append(_242);const _244=document.createTextNode("\r\n    ");_240.append(_244);const _245=document.createElement("img");_245.setAttribute("class", "closeButton");_245.setAttribute("src", variables["close"]);_245.setAttribute("alt", "close");_240.append(_245);const _246=document.createTextNode("\r\n");_240.append(_246);_239.append(_240);const _247=document.createTextNode("\r\n");_239.append(_247);const _248=document.createElement("main");const _249=document.createTextNode("\r\n    ");_248.append(_249);const _250=document.createElement("input");_248.append(_250);const _251=document.createTextNode("\r\n    ");_248.append(_251);const _252=document.createElement("div");_252.setAttribute("class", "results");_248.append(_252);const _253=document.createTextNode("\r\n");_248.append(_253);_239.append(_248);const _254=document.createTextNode("\r\n");_239.append(_254);const _255=document.createElement("footer");const _256=document.createTextNode("\r\n    ");_255.append(_256);const _257=document.createElement("button");_257.setAttribute("type", "button");_257.setAttribute("class", "next");const _258=document.createTextNode("\r\n        ");_257.append(_258);const _259=document.createElement("span");const _260=document.createTextNode("Next");_259.append(_260);_257.append(_259);const _261=document.createTextNode("\r\n    ");_257.append(_261);_255.append(_257);const _262=document.createTextNode("\r\n");_255.append(_262);_239.append(_255);return _239}


/***/ }),

/***/ "./node_modules/node-fetch/browser.js":
/*!********************************************!*\
  !*** ./node_modules/node-fetch/browser.js ***!
  \********************************************/
/***/ ((module, exports) => {



// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
}

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports["default"] = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;

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
  !*** ./src/tippingAddress.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TippingAddress": () => (/* binding */ TippingAddress)
/* harmony export */ });
/* harmony import */ var _tippingAddress_mpts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippingAddress.mpts */ "./src/tippingAddress.mpts");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-creator */ "./node_modules/fast-creator/dist/entry.js");
/* harmony import */ var fast_creator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_creator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!url-loader!./img/close.svg */ "./node_modules/url-loader/dist/cjs.js!./src/img/close.svg");
/* harmony import */ var idriss_crypto_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idriss-crypto/browser */ "./node_modules/idriss-crypto/lib/esnext/browser.js");





class TippingAddress {
    constructor() {
        this.html = (0,fast_creator__WEBPACK_IMPORTED_MODULE_1__.create)('div', {}, (0,_tippingAddress_mpts__WEBPACK_IMPORTED_MODULE_0__["default"])({close: _url_loader_img_close_svg__WEBPACK_IMPORTED_MODULE_2__["default"]}));
        const input = this.html.querySelector('input')
        input.addEventListener('input', async e => {
            this.lastEvent = {event: e, date: new Date(), input: e.target, value: e.target.value}
            setTimeout(() => this.checkInputChanged(), 500)
        })
        this.html.querySelector('.next').addEventListener('click', () => {
            if (this.address) {
                this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                    identifier: this.name,
                    recipient: this.address,
                }))
            }
        })
        this.idriss = new idriss_crypto_browser__WEBPACK_IMPORTED_MODULE_3__.IdrissCrypto();
    }

    async checkInputChanged() {
        if (new Date() - this.lastEvent?.date >= 500 && this.lastEvent?.input.value == this.lastEvent?.value && this.lastEvent?.value.length >= 3) {
            let event = this.lastEvent;
            const results = document.createElement('div')
            results.className = 'results';
            this.html.querySelector('.results').replaceWith(results)
            let data = await this.idriss.resolve(event.value);
            if (data && event == this.lastEvent) {
                if (Object.values(data).length == 0) {
                    let item = document.createElement('div')
                    item.className = 'empty';
                    item.append("Nothing found. ");
                    let a = document.createElement('a')
                    a.textContent = 'Sign up for IDriss now!';
                    a.href = 'https://www.idriss.xyz';
                    a.target = '_blank';
                    item.append(a)
                    results.append(item)
                }
                for (const elementsKey in data) {
                    let item = document.createElement('div')
                    let typeElement = document.createElement('div')
                    typeElement.className = 'type'
                    typeElement.textContent = elementsKey;
                    item.append(typeElement)
                    let keyElement = document.createElement('div')
                    keyElement.className = 'key'
                    keyElement.textContent = event.value;
                    item.append(keyElement)
                    if (event.value.startsWith("@")) {
                        keyElement.style.color = "#1DA1F2";
                        let imgElement = document.createElement('img')
                        imgElement.src = "https://www.idriss.xyz/static/images/twitter.png"
                        imgElement.alt = "Twitter"
                        imgElement.className = 'img'
                        item.append(imgElement)
                    }
                    let valueElement = document.createElement('div')
                    valueElement.className = 'value'
                    valueElement.textContent = data[elementsKey];
                    item.append(valueElement)
                    results.append(item)
                    item.onmousedown = () => {
                        this.address = data[elementsKey];
                        this.name = event.value;
                    }
                }
            }
        }
    }
}
})();

var __webpack_exports__TippingAddress = __webpack_exports__.TippingAddress;
export { __webpack_exports__TippingAddress as TippingAddress };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9ub2RlX21vZHVsZXMvZmFzdC1jcmVhdG9yL2Rpc3QvZW50cnkuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vbm9kZV9tb2R1bGVzL2lkcmlzcy1jcnlwdG8vbGliL2VzbmV4dC9hdXRob3JpemF0aW9uLmpzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL25vZGVfbW9kdWxlcy9pZHJpc3MtY3J5cHRvL2xpYi9lc25leHQvYmFzZUlkcmlzc0NyeXB0by5qcyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9ub2RlX21vZHVsZXMvaWRyaXNzLWNyeXB0by9saWIvZXNuZXh0L2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vbm9kZV9tb2R1bGVzL2lkcmlzcy1jcnlwdG8vbGliL2VzbmV4dC93ZWJBcGkuanMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdBZGRyZXNzLm1wdHMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vbm9kZV9tb2R1bGVzL25vZGUtZmV0Y2gvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvLi9zcmMvaW1nL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQGlkcmlzcy1jcnlwdG8vdGlwcGluZy1jb3JlLy4vc3JjL3RpcHBpbmdBZGRyZXNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSk7IGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTsgaWYgKGkgJSAyKSB7IG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSk7IH0gZWxzZSBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMpIHsgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTsgfSBlbHNlIHsgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikgeyByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5mdW5jdGlvbiBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihvKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8IG9bU3ltYm9sLml0ZXJhdG9yXSA9PSBudWxsKSB7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChvID0gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8pKSkgeyB2YXIgaSA9IDA7IHZhciBGID0gZnVuY3Rpb24gRigpIHt9OyByZXR1cm4geyBzOiBGLCBuOiBmdW5jdGlvbiBuKCkgeyBpZiAoaSA+PSBvLmxlbmd0aCkgcmV0dXJuIHsgZG9uZTogdHJ1ZSB9OyByZXR1cm4geyBkb25lOiBmYWxzZSwgdmFsdWU6IG9baSsrXSB9OyB9LCBlOiBmdW5jdGlvbiBlKF9lKSB7IHRocm93IF9lOyB9LCBmOiBGIH07IH0gdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBpdGVyYXRlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9IHZhciBpdCwgbm9ybWFsQ29tcGxldGlvbiA9IHRydWUsIGRpZEVyciA9IGZhbHNlLCBlcnI7IHJldHVybiB7IHM6IGZ1bmN0aW9uIHMoKSB7IGl0ID0gb1tTeW1ib2wuaXRlcmF0b3JdKCk7IH0sIG46IGZ1bmN0aW9uIG4oKSB7IHZhciBzdGVwID0gaXQubmV4dCgpOyBub3JtYWxDb21wbGV0aW9uID0gc3RlcC5kb25lOyByZXR1cm4gc3RlcDsgfSwgZTogZnVuY3Rpb24gZShfZTIpIHsgZGlkRXJyID0gdHJ1ZTsgZXJyID0gX2UyOyB9LCBmOiBmdW5jdGlvbiBmKCkgeyB0cnkgeyBpZiAoIW5vcm1hbENvbXBsZXRpb24gJiYgaXRbXCJyZXR1cm5cIl0gIT0gbnVsbCkgaXRbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKGRpZEVycikgdGhyb3cgZXJyOyB9IH0gfTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG4pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUZyb21EZWZpbml0aW9uKCkge1xuICB2YXIgYXR0cmlidXRlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDogbnVsbDtcbiAgaWYgKCFkb2N1bWVudE9iamVjdCkgZG9jdW1lbnRPYmplY3QgPSBkb2N1bWVudDtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudE9iamVjdC5jcmVhdGVFbGVtZW50KGF0dHJpYnV0ZXMudGFnTmFtZSB8fCAnZGl2Jyk7XG4gIHJlcGFpckNsYXNzZXMoYXR0cmlidXRlcyk7XG5cbiAgZm9yICh2YXIgYXR0ck5hbWUgaW4gYXR0cmlidXRlcykge1xuICAgIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTmFtZScpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2NsYXNzTGlzdCcpIHtcbiAgICAgIHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlcihhdHRyaWJ1dGVzLmNsYXNzTGlzdCksXG4gICAgICAgICAgX3N0ZXA7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGZvciAoX2l0ZXJhdG9yLnMoKTsgIShfc3RlcCA9IF9pdGVyYXRvci5uKCkpLmRvbmU7KSB7XG4gICAgICAgICAgdmFyIHggPSBfc3RlcC52YWx1ZTtcbiAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoeCk7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBfaXRlcmF0b3IuZShlcnIpO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgX2l0ZXJhdG9yLmYoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAndGV4dCcpIHtcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBhdHRyaWJ1dGVzLnRleHQ7XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBlbGVtZW50LmlubmVySFRNTCA9IGF0dHJpYnV0ZXMuaHRtbDtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lID09PSAnZGF0YScpIHtcbiAgICAgIE9iamVjdC5hc3NpZ24oZWxlbWVudC5kYXRhc2V0LCBhdHRyaWJ1dGVzLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAoYXR0ck5hbWUgPT09ICdjaGlsZHJlbicpIHtcbiAgICAgIGF0dHJpYnV0ZXMuY2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gZWxlbWVudC5hcHBlbmRDaGlsZCh4IGluc3RhbmNlb2YgTm9kZSA/IHggOiBjcmVhdGUoeCwge30sIGRvY3VtZW50T2JqZWN0KSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ29uJykpIHtcbiAgICAgIGVsZW1lbnRbYXR0ck5hbWVdID0gYXR0cmlidXRlc1thdHRyTmFtZV07XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICBpZiAoX3R5cGVvZihhdHRyaWJ1dGVzW2F0dHJOYW1lXSkgPT0gXCJvYmplY3RcIikge1xuICAgICAgICBmb3IgKHZhciBzdHlsZU5hbWUgaW4gYXR0cmlidXRlc1thdHRyTmFtZV0pIHtcbiAgICAgICAgICBlbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KHN0eWxlTmFtZSwgYXR0cmlidXRlc1thdHRyTmFtZV1bc3R5bGVOYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1thdHRyTmFtZV0gIT09IGZhbHNlKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhdHRyTmFtZSA9PT0gJ3RhZ05hbWUnKSB7Ly9ub3RoaW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSA9PT0gdHJ1ZSkgZWxlbWVudC5zZXRBdHRyaWJ1dGUoYXR0ck5hbWUsIGF0dHJOYW1lKTtlbHNlIGlmIChhdHRyaWJ1dGVzW2F0dHJOYW1lXSAhPT0gZmFsc2UpIGVsZW1lbnQuc2V0QXR0cmlidXRlKGF0dHJOYW1lLCBhdHRyaWJ1dGVzW2F0dHJOYW1lXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIHJlcGFpckNsYXNzZXMob2JqKSB7XG4gIGlmIChvYmouY2xhc3NOYW1lKSB7XG4gICAgaWYgKCFvYmouY2xhc3NMaXN0KSBvYmouY2xhc3NMaXN0ID0gW107XG4gICAgb2JqLmNsYXNzTGlzdCA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkob2JqLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShvYmouY2xhc3NOYW1lLnNwbGl0KCcgJykpKTtcbiAgICBkZWxldGUgb2JqLmNsYXNzTmFtZTtcbiAgfVxufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiAkcmV0dXJucyB7b2JqZWN0fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBwYXJzZVNlbGVjdG9yKHNlbGVjdG9yKSB7XG4gIHNlbGVjdG9yID0gKHNlbGVjdG9yICsgXCJcIikudHJpbSgpO1xuICB2YXIgcG9zaXRpb24gPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlRWxlbWVudCgpIHtcbiAgICB2YXIgcmV0ID0ge307XG4gICAgdmFyIGNhbkJlVGFnbmFtZSA9IHRydWU7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhciA9IHNlbGVjdG9yW3Bvc2l0aW9uXTtcbiAgICAgIHBvc2l0aW9uKys7XG5cbiAgICAgIGlmIChfY2hhciA9PT0gJyMnKSB7XG4gICAgICAgIHJldC5pZCA9IHBhcnNlVGV4dCgpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJy4nKSB7XG4gICAgICAgIGlmICghcmV0LmNsYXNzTGlzdCkgcmV0LmNsYXNzTGlzdCA9IFtdO1xuICAgICAgICByZXQuY2xhc3NMaXN0LnB1c2gocGFyc2VUZXh0KCkpO1xuICAgICAgfSBlbHNlIGlmIChfY2hhciA9PT0gJ1snKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHBhcnNlVGV4dChbJz0nLCAnXSddKTtcbiAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcblxuICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dID09ICc9Jykge1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICdcIicpIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHZhciB2YWx1ZSA9IHBhcnNlQXR0cmlidXRlVmFsdWUoKTtcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICAgIGlmIChzZWxlY3Rvcltwb3NpdGlvbl0gIT0gJ1wiJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgc2tpcFdoaXRlc3BhY2UoKTtcbiAgICAgICAgICBpZiAoc2VsZWN0b3JbcG9zaXRpb25dICE9ICddJykgdGhyb3cgbmV3IEVycm9yKFwiU3ludGF4IGVycm9yIGluIHBvc2l0aW9uIFwiICsgcG9zaXRpb24pO1xuICAgICAgICAgIHBvc2l0aW9uKys7XG4gICAgICAgICAgcmV0W2F0dHJOYW1lXSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2UgaWYgKHNlbGVjdG9yW3Bvc2l0aW9uXSA9PSAnXScpIHtcbiAgICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgICAgIHJldFthdHRyTmFtZV0gPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICgvXFxzLy50ZXN0KF9jaGFyKSkge1xuICAgICAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGggJiYgL1xccy8udGVzdChzZWxlY3Rvcltwb3NpdGlvbl0pKSB7XG4gICAgICAgICAgcG9zaXRpb24rKztcbiAgICAgICAgICBza2lwV2hpdGVzcGFjZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0LmNoaWxkcmVuID0gW3BhcnNlRWxlbWVudCgpXTtcbiAgICAgIH0gZWxzZSBpZiAoY2FuQmVUYWduYW1lKSB7XG4gICAgICAgIHJldC50YWdOYW1lID0gX2NoYXIgKyBwYXJzZVRleHQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlN5bnRheCBlcnJvciBpbiBwb3NpdGlvbiBcIiArIHBvc2l0aW9uKTtcbiAgICAgIH1cblxuICAgICAgY2FuQmVUYWduYW1lID0gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBhcnNlVGV4dCgpIHtcbiAgICB2YXIgZXNjYXBlID0gYXJndW1lbnRzLmxlbmd0aCA+IDAgJiYgYXJndW1lbnRzWzBdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMF0gOiBbJy4nLCAnIycsICcsJywgJ1snXTtcbiAgICB2YXIgdGV4dCA9ICcnO1xuXG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXIyID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoL1xccy8udGVzdChfY2hhcjIpIHx8IGVzY2FwZS5pbmNsdWRlcyhfY2hhcjIpKSB7XG4gICAgICAgIHJldHVybiB0ZXh0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGV4dCArPSBfY2hhcjI7XG4gICAgICAgIHBvc2l0aW9uKys7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUF0dHJpYnV0ZVZhbHVlKCkge1xuICAgIHZhciB0ZXh0ID0gJyc7XG5cbiAgICB3aGlsZSAocG9zaXRpb24gPCBzZWxlY3Rvci5sZW5ndGgpIHtcbiAgICAgIHZhciBfY2hhcjMgPSBzZWxlY3Rvcltwb3NpdGlvbl07XG5cbiAgICAgIGlmIChfY2hhcjMgPT0gJ1wiJykge1xuICAgICAgICByZXR1cm4gdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgKz0gX2NoYXIzO1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZXh0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2tpcFdoaXRlc3BhY2UoKSB7XG4gICAgd2hpbGUgKHBvc2l0aW9uIDwgc2VsZWN0b3IubGVuZ3RoKSB7XG4gICAgICB2YXIgX2NoYXI0ID0gc2VsZWN0b3JbcG9zaXRpb25dO1xuXG4gICAgICBpZiAoIS9cXHMvLnRlc3QoX2NoYXI0KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwb3NpdGlvbisrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChzZWxlY3RvciA9PT0gXCJcIikgcmV0dXJuIHt9O2Vsc2UgcmV0dXJuIHBhcnNlRWxlbWVudCgpO1xufVxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvclxyXG4gKiBAcGFyYW0ge29iamVjdH0gYXR0cmlidXRlc1xyXG4gKiBAcGFyYW0gZG9jdW1lbnRPYmplY3RcclxuICogQHJldHVybnMge0hUTUxFbGVtZW50fVxyXG4gKi9cblxuXG5mdW5jdGlvbiBjcmVhdGUoKSB7XG4gIHZhciBkZWZpbml0aW9uID0ge307XG4gIHZhciBkb2N1bWVudE9iamVjdCA9IG51bGw7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIHBhcmFtcyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBwYXJhbXNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICBpZiAodHlwZW9mIHBhcmFtc1swXSA9PSBcInN0cmluZ1wiKSBkZWZpbml0aW9uID0gbWVyZ2VPYmplY3RzKGRlZmluaXRpb24sIHBhcnNlU2VsZWN0b3IocGFyYW1zLnNwbGljZSgwLCAxKVswXSkpO1xuICBpZiAoX3R5cGVvZihwYXJhbXNbMF0pID09IFwib2JqZWN0XCIgJiYgIShwYXJhbXNbMF0gaW5zdGFuY2VvZiBOb2RlKSkgZGVmaW5pdGlvbiA9IG1lcmdlT2JqZWN0cyhkZWZpbml0aW9uLCBwYXJhbXMuc3BsaWNlKDAsIDEpWzBdKTtcblxuICBmb3IgKHZhciBfaSA9IDAsIF9wYXJhbXMgPSBwYXJhbXM7IF9pIDwgX3BhcmFtcy5sZW5ndGg7IF9pKyspIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW1zW19pXTtcblxuICAgIGlmIChwYXJhbSBpbnN0YW5jZW9mIERvY3VtZW50KSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtO1xuICAgIH0gZWxzZSBpZiAocGFyYW0gaW5zdGFuY2VvZiBOb2RlKSB7XG4gICAgICBkb2N1bWVudE9iamVjdCA9IHBhcmFtLm93bmVyRG9jdW1lbnQ7XG4gICAgICBpZiAoIWRlZmluaXRpb24uY2hpbGRyZW4pIGRlZmluaXRpb24uY2hpbGRyZW4gPSBbXTtcbiAgICAgIGRlZmluaXRpb24uY2hpbGRyZW4ucHVzaChwYXJhbSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZUZyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGRvY3VtZW50T2JqZWN0KTtcbn1cblxuZnVuY3Rpb24gbWVyZ2VPYmplY3RzKGEsIGIpIHtcbiAgcmVwYWlyQ2xhc3NlcyhhKTtcbiAgcmVwYWlyQ2xhc3NlcyhiKTtcblxuICB2YXIgcmV0ID0gX29iamVjdFNwcmVhZCh7fSwgYSwge30sIGIpO1xuXG4gIGlmIChhLmRhdGEgJiYgYi5kYXRhKSB7XG4gICAgcmV0LmRhdGEgPSBfb2JqZWN0U3ByZWFkKHt9LCBhLmRhdGEsIHt9LCBiLmRhdGEpO1xuICB9XG5cbiAgaWYgKGEuY2hpbGRyZW4gJiYgYi5jaGlsZHJlbikge1xuICAgIHJldC5jaGlsZHJlbiA9IFtdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYS5jaGlsZHJlbiksIF90b0NvbnN1bWFibGVBcnJheShiLmNoaWxkcmVuKSk7XG4gIH1cblxuICBpZiAoYS5jbGFzc0xpc3QgJiYgYi5jbGFzc0xpc3QpIHtcbiAgICByZXQuY2xhc3NMaXN0ID0gW10uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhLmNsYXNzTGlzdCksIF90b0NvbnN1bWFibGVBcnJheShiLmNsYXNzTGlzdCkpO1xuICB9XG5cbiAgcmV0dXJuIHJldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZUZyb21EZWZpbml0aW9uOiBjcmVhdGVGcm9tRGVmaW5pdGlvbixcbiAgcGFyc2VTZWxlY3RvcjogcGFyc2VTZWxlY3RvcixcbiAgY3JlYXRlOiBjcmVhdGUsXG4gIG1lcmdlT2JqZWN0czogbWVyZ2VPYmplY3RzLFxuICBcImRlZmF1bHRcIjogY3JlYXRlXG59OyIsImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuZXhwb3J0IGNsYXNzIEF1dGhvcml6YXRpb24ge1xuICAgIHN0YXRpYyBhc3luYyBDcmVhdGVPVFAodGFnLCBpZGVudGlmaWVyLCBhZGRyZXNzLCBzZWNyZXRXb3JkID0gbnVsbCkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vd3d3Lmlkcmlzcy54eXovdjEvY3JlYXRlT1RQXCI7XG4gICAgICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IFtdO1xuICAgICAgICBzZWFyY2hQYXJhbXMucHVzaChbXCJ0YWdcIiwgdGFnXSk7XG4gICAgICAgIHNlYXJjaFBhcmFtcy5wdXNoKFtcImlkZW50aWZpZXJcIiwgaWRlbnRpZmllcl0pO1xuICAgICAgICBzZWFyY2hQYXJhbXMucHVzaChbXCJhZGRyZXNzXCIsIGFkZHJlc3NdKTtcbiAgICAgICAgaWYgKHNlY3JldFdvcmQgIT0gbnVsbClcbiAgICAgICAgICAgIHNlYXJjaFBhcmFtcy5wdXNoKFtcInNlY3JldFdvcmRcIiwgc2VjcmV0V29yZF0pO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArICc/JyArIHNlYXJjaFBhcmFtcy5tYXAoeCA9PiBlbmNvZGVVUklDb21wb25lbnQoeFswXSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoeFsxXSkpLmpvaW4oJyYnKSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KS5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIklkcmlzcyBhcGkgcmVzcG9uZGVkIHdpdGggY29kZSBcIiArIHJlc3BvbnNlLnN0YXR1cyArIFwiIFwiICsgcmVzcG9uc2Uuc3RhdHVzVGV4dCArIFwiXFxyXFxuXCIgKyBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZWNvZGVkUmVzcG9uc2UgPSBhd2FpdCAocmVzcG9uc2UuanNvbigpKTtcbiAgICAgICAgcmV0dXJuIG5ldyBDcmVhdGVPVFBSZXNwb25zZShkZWNvZGVkUmVzcG9uc2Uuc2Vzc2lvbl9rZXksIGRlY29kZWRSZXNwb25zZS50cmllc19sZWZ0LCBkZWNvZGVkUmVzcG9uc2UuYWRkcmVzcywgZGVjb2RlZFJlc3BvbnNlLmhhc2gsIGRlY29kZWRSZXNwb25zZS5tZXNzYWdlLCBkZWNvZGVkUmVzcG9uc2UubmV4dF9zdGVwLCBkZWNvZGVkUmVzcG9uc2UudHdpdHRlcl9pZCwgZGVjb2RlZFJlc3BvbnNlLnR3aXR0ZXJfbXNnKTtcbiAgICB9XG4gICAgc3RhdGljIGFzeW5jIFZhbGlkYXRlT1RQKE9UUCwgc2Vzc2lvbktleSkge1xuICAgICAgICBjb25zdCB1cmwgPSBcImh0dHBzOi8vd3d3Lmlkcmlzcy54eXovdjEvdmFsaWRhdGVPVFBcIjtcbiAgICAgICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gW107XG4gICAgICAgIHNlYXJjaFBhcmFtcy5wdXNoKFtcIk9UUFwiLCBPVFBdKTtcbiAgICAgICAgc2VhcmNoUGFyYW1zLnB1c2goW1wic2Vzc2lvbl9rZXlcIiwgc2Vzc2lvbktleV0pO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArICc/JyArIHNlYXJjaFBhcmFtcy5tYXAoeCA9PiBlbmNvZGVVUklDb21wb25lbnQoeFswXSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoeFsxXSkpLmpvaW4oJyYnKSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT0gMjAwKSB7XG4gICAgICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgICAgICBsZXQgbWVzc2FnZTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KS5tZXNzYWdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGV4KSB7XG4gICAgICAgICAgICAgICAgbWVzc2FnZSA9IHJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtZXNzYWdlID09IFwiVmFsaWRhdGlvbiBmYWlsZWRcIilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgV3JvbmdPVFBFeGNlcHRpb24oXCJJZHJpc3MgYXBpIHJlc3BvbmRlZCB3aXRoIGNvZGUgXCIgKyByZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyBcIlxcclxcblwiICsgbWVzc2FnZSk7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWRyaXNzIGFwaSByZXNwb25kZWQgd2l0aCBjb2RlIFwiICsgcmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0ICsgXCJcXHJcXG5cIiArIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZWRSZXNwb25zZSA9IGF3YWl0IChyZXNwb25zZS5qc29uKCkpO1xuICAgICAgICByZXR1cm4gbmV3IFZhbGlkYXRlT1RQUmVzcG9uc2UoZGVjb2RlZFJlc3BvbnNlLm1lc3NhZ2UsIGRlY29kZWRSZXNwb25zZS50eG5faGFzaCk7XG4gICAgfVxuICAgIHN0YXRpYyBhc3luYyBDaGVja1BheW1lbnQodG9rZW4sIHNlc3Npb25LZXkpIHtcbiAgICAgICAgY29uc3QgdXJsID0gXCJodHRwczovL3d3dy5pZHJpc3MueHl6L3YxL2NoZWNrUGF5bWVudFwiO1xuICAgICAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSBbXTtcbiAgICAgICAgc2VhcmNoUGFyYW1zLnB1c2goW1widG9rZW5cIiwgdG9rZW5dKTtcbiAgICAgICAgc2VhcmNoUGFyYW1zLnB1c2goW1wic2Vzc2lvbl9rZXlcIiwgc2Vzc2lvbktleV0pO1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCArICc/JyArIHNlYXJjaFBhcmFtcy5tYXAoeCA9PiBlbmNvZGVVUklDb21wb25lbnQoeFswXSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoeFsxXSkpLmpvaW4oJyYnKSwge1xuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlVGV4dCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICAgICAgICAgIGxldCBtZXNzYWdlO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gSlNPTi5wYXJzZShyZXNwb25zZVRleHQpLm1lc3NhZ2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZXgpIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlID0gcmVzcG9uc2VUZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSWRyaXNzIGFwaSByZXNwb25kZWQgd2l0aCBjb2RlIFwiICsgcmVzcG9uc2Uuc3RhdHVzICsgXCIgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0ICsgXCJcXHJcXG5cIiArIG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlY29kZWRSZXNwb25zZSA9IGF3YWl0IChyZXNwb25zZS5qc29uKCkpO1xuICAgICAgICByZXR1cm4gbmV3IENoZWNrUGF5bWVudFJlc3BvbnNlKGRlY29kZWRSZXNwb25zZS5tZXNzYWdlLCBkZWNvZGVkUmVzcG9uc2UudHhuX2hhc2gsIGRlY29kZWRSZXNwb25zZS5zZXNzaW9uX2tleSwgZGVjb2RlZFJlc3BvbnNlLnJlZmVycmFsTGluayk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIENyZWF0ZU9UUFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihzZXNzaW9uS2V5LCB0cmllc0xlZnQsIGFkZHJlc3MsIGhhc2gsIG1lc3NhZ2UsIG5leHRTdGVwLCB0d2l0dGVySWQsIHR3aXR0ZXJNc2cpIHtcbiAgICAgICAgdGhpcy5zZXNzaW9uS2V5ID0gc2Vzc2lvbktleTtcbiAgICAgICAgdGhpcy50cmllc0xlZnQgPSB0cmllc0xlZnQ7XG4gICAgICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIHRoaXMuaGFzaCA9IGhhc2g7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgICAgIHRoaXMubmV4dFN0ZXAgPSBuZXh0U3RlcDtcbiAgICAgICAgdGhpcy50d2l0dGVySWQgPSB0d2l0dGVySWQ7XG4gICAgICAgIHRoaXMudHdpdHRlck1zZyA9IHR3aXR0ZXJNc2c7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIFZhbGlkYXRlT1RQUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHR4bkhhc2gpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50eG5IYXNoID0gdHhuSGFzaDtcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgQ2hlY2tQYXltZW50UmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHR4bkhhc2gsIHNlc3Npb25LZXksIHJlZmVycmFsTGluaykge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnR4bkhhc2ggPSB0eG5IYXNoO1xuICAgICAgICB0aGlzLnNlc3Npb25LZXkgPSBzZXNzaW9uS2V5O1xuICAgICAgICB0aGlzLnJlZmVycmFsTGluayA9IHJlZmVycmFsTGluaztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgV3JvbmdPVFBFeGNlcHRpb24gZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBXZWJBcGkgfSBmcm9tIFwiLi93ZWJBcGlcIjtcbmV4cG9ydCBjbGFzcyBCYXNlSWRyaXNzQ3J5cHRvIHtcbiAgICBjb25zdHJ1Y3Rvcih3ZWIzKSB7XG4gICAgICAgIHRoaXMud2ViM1Byb21pc2UgPSBQcm9taXNlLnJlc29sdmUod2ViMyk7XG4gICAgICAgIHRoaXMud2ViQXBpID0gbmV3IFdlYkFwaSgpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0UHJvbWlzZSA9IHRoaXMuZ2VuZXJhdGVDb250cmFjdCgpO1xuICAgICAgICB0aGlzLmNvbnRyYWN0UmV2ZXJzZVByb21pc2UgPSB0aGlzLmdlbmVyYXRlQ29udHJhY3RSZXZlcnNlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBtYXRjaElucHV0KGlucHV0KSB7XG4gICAgICAgIGNvbnN0IHJlZ1BoID0gL14oXFwrXFwoP1xcZHsxLDR9XFxzPylcXCk/XFwtP1xcLj9cXHM/XFwoP1xcZHszfVxcKT9bXFxzLi1dP1xcZHszfVtcXHMuLV0/XFxkezR9LztcbiAgICAgICAgY29uc3QgcmVnTSA9IC9eW2EtekEtWjAtOS5fLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWl17Mix9LztcbiAgICAgICAgY29uc3QgcmVnVCA9IC9eQFteXFxzXSsvO1xuICAgICAgICBpZiAoaW5wdXQubWF0Y2gocmVnUGgpKVxuICAgICAgICAgICAgcmV0dXJuIFwicGhvbmVcIjtcbiAgICAgICAgaWYgKGlucHV0Lm1hdGNoKHJlZ00pKVxuICAgICAgICAgICAgcmV0dXJuIFwibWFpbFwiO1xuICAgICAgICBpZiAoaW5wdXQubWF0Y2gocmVnVCkpXG4gICAgICAgICAgICByZXR1cm4gXCJ0d2l0dGVyXCI7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBhc3luYyByZXNvbHZlKGlucHV0LCBvcHRpb25zID0ge30pIHtcbiAgICAgICAgbGV0IHR3aXR0ZXJJRDtcbiAgICAgICAgbGV0IGlkZW50aWZpZXJUO1xuICAgICAgICBsZXQgaWRlbnRpZmllciA9IGlucHV0O1xuICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5sb3dlckZpcnN0KGlkZW50aWZpZXIpLnJlcGxhY2UoXCIgXCIsIFwiXCIpO1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSBCYXNlSWRyaXNzQ3J5cHRvLm1hdGNoSW5wdXQoaW5wdXQpO1xuICAgICAgICBpZiAoaW5wdXRUeXBlID09IFwicGhvbmVcIikge1xuICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuY29udmVydFBob25lKGlkZW50aWZpZXIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlucHV0VHlwZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGEgdmFsaWQgaW5wdXQuIElucHV0IG11c3Qgc3RhcnQgd2l0aCB2YWxpZCBwaG9uZSBudW1iZXIsIGVtYWlsIG9yIEB0d2l0dGVyIGhhbmRsZS5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlucHV0VHlwZSA9PSBcInR3aXR0ZXJcIikge1xuICAgICAgICAgICAgaWRlbnRpZmllclQgPSBpZGVudGlmaWVyO1xuICAgICAgICAgICAgaWRlbnRpZmllciA9IGF3YWl0IHRoaXMud2ViQXBpLmdldFR3aXR0ZXJJRChpZGVudGlmaWVyKTtcbiAgICAgICAgICAgIGlmIChpZGVudGlmaWVyID09IFwiTm90IGZvdW5kXCIpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVHdpdHRlciBoYW5kbGUgbm90IGZvdW5kLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZm91bmRNYXRjaGVzUHJvbWlzZXMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgW25ldHdvcmssIGNvaW5zXSBvZiBPYmplY3QuZW50cmllcyhCYXNlSWRyaXNzQ3J5cHRvLmdldFdhbGxldFRhZ3MoKSkpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLm5ldHdvcmsgJiYgbmV0d29yayAhPSBvcHRpb25zLm5ldHdvcmspXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBmb3IgKGxldCBbY29pbiwgdGFnc10gb2YgT2JqZWN0LmVudHJpZXMoY29pbnMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuY29pbiAmJiBjb2luICE9IG9wdGlvbnMuY29pbilcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgW3RhZywgdGFnX2tleV0gb2YgT2JqZWN0LmVudHJpZXModGFncykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhZ19rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWF0Y2hlc1Byb21pc2VzW3RhZ10gPSB0aGlzLmRpZ2VzdE1lc3NhZ2UoaWRlbnRpZmllciArIHRhZ19rZXkpLnRoZW4oZGlnZXN0ZWQgPT4gdGhpcy5jYWxsV2ViMyhkaWdlc3RlZCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRNYXRjaGVzUHJvbWlzZXNbdGFnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kTWF0Y2hlc1Byb21pc2VzW3RhZ10uY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8vYXdhaXRpbmcgb24gdGhlIGVuZCBmb3IgYmV0dGVyIHBlcmZvcm1hbmNlXG4gICAgICAgIGxldCBmb3VuZE1hdGNoZXMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgW3RhZywgcHJvbWlzZV0gb2YgT2JqZWN0LmVudHJpZXMoZm91bmRNYXRjaGVzUHJvbWlzZXMpKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCBhZGRyZXNzID0gYXdhaXQgcHJvbWlzZTtcbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcykge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZE1hdGNoZXNbdGFnXSA9IGFkZHJlc3M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvL29tbWl0XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvdW5kTWF0Y2hlcztcbiAgICB9XG4gICAgYXN5bmMgY2FsbFdlYjMoZW5jcnlwdGVkKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCAoYXdhaXQgdGhpcy5jb250cmFjdFByb21pc2UpLm1ldGhvZHMuZ2V0SURyaXNzKGVuY3J5cHRlZCkuY2FsbCgpO1xuICAgIH1cbiAgICBhc3luYyBjYWxsV2ViM1JldmVyc2UoYWRkcmVzcykge1xuICAgICAgICByZXR1cm4gYXdhaXQgKGF3YWl0IHRoaXMuY29udHJhY3RSZXZlcnNlUHJvbWlzZSkubWV0aG9kcy5yZXZlcnNlSURyaXNzKGFkZHJlc3MpLmNhbGwoKTtcbiAgICB9XG4gICAgYXN5bmMgZ2VuZXJhdGVDb250cmFjdCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyAoYXdhaXQgdGhpcy53ZWIzUHJvbWlzZSkuZXRoLkNvbnRyYWN0KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcImlucHV0c1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW50ZXJuYWxUeXBlXCI6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJoYXNoUHViXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJnZXRJRHJpc3NcIixcbiAgICAgICAgICAgICAgICBcIm91dHB1dHNcIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImludGVybmFsVHlwZVwiOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJzdHJpbmdcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInN0YXRlTXV0YWJpbGl0eVwiOiBcInZpZXdcIixcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJmdW5jdGlvblwiXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sICcweDJFY0NiNTNjYTJkNGVmOTFBNzkyMTNGRERGM2Y4YzIzMzJjMmE4MTQnKTtcbiAgICB9XG4gICAgYXN5bmMgZ2VuZXJhdGVDb250cmFjdFJldmVyc2UoKSB7XG4gICAgICAgIHJldHVybiBuZXcgKGF3YWl0IHRoaXMud2ViM1Byb21pc2UpLmV0aC5Db250cmFjdChbe1xuICAgICAgICAgICAgICAgIFwiaW5wdXRzXCI6IFt7IFwiaW50ZXJuYWxUeXBlXCI6IFwiYWRkcmVzc1wiLCBcIm5hbWVcIjogXCJcIiwgXCJ0eXBlXCI6IFwiYWRkcmVzc1wiIH1dLFxuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcInJldmVyc2VJRHJpc3NcIixcbiAgICAgICAgICAgICAgICBcIm91dHB1dHNcIjogW3sgXCJpbnRlcm5hbFR5cGVcIjogXCJzdHJpbmdcIiwgXCJuYW1lXCI6IFwiXCIsIFwidHlwZVwiOiBcInN0cmluZ1wiIH1dLFxuICAgICAgICAgICAgICAgIFwic3RhdGVNdXRhYmlsaXR5XCI6IFwidmlld1wiLFxuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgIH1dLCBcIjB4NTYxZjFiNTE0NTg5N0E1MkE2RTk0RTRkREQ0YTI5RWE1ZEZGNmY2NFwiKTtcbiAgICB9XG4gICAgc3RhdGljIGdldFdhbGxldFRhZ3MoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBldm06IHtcbiAgICAgICAgICAgICAgICBFVEg6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJNZXRhbWFzayBFVEhcIjogXCI1ZDE4MWFiYzlkY2I3ZTc5Y2U1MGU5M2RiOTdhZGRjMWNhZjlmMzY5MjU3ZjYxNTg1ODg5ODcwNTU1ZjhjMzIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQmluYW5jZSBFVEhcIjogXCI0YjExOGE0ZjBmM2YxNDllNjQxYzZjNDNkZDcwMjgzZmNjMDdlYWNhYTYyNGVmYzc2MmFhMzg0M2Q4NWIyYWJhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ29pbmJhc2UgRVRIXCI6IFwiOTJjN2Y5N2ZiNThkZGJjYjA2YzBkNWE3Y2I3MjBkNzRiYzNjM2FhNTJhMGQ3MDZlNDc3NTYyY2JhNjhlZWI3M1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkV4Y2hhbmdlIEVUSFwiOiBcImVjNzIwMjBmMjI0YzA4ODY3MWNmZDYyMzIzNWI1OWMyMzk5NjRhOTU1NDI3MTMzOTBhMmI2YmEwN2RkMTE1MWNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJQcml2YXRlIEVUSFwiOiBcIjAwNWJhOGZiYzRjODVhMjU1MzRhYzM2MzU0ZDc3OWVmMzVlMGVlMzFmNGY4NzMyYjAyYjYxYzI1ZWU0MDZlZGJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJFc3NlbnRpYWxzIEVUSFwiOiBcIjNlYTk0MTViODJmMGVlN2RiOTMzYWFiMGJlMzc3ZWUxYzFhNDA1OTY5ZDhiOGMyNDU0YmNjZTczNzJhMTYxYzJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJSYWluYm93IEVUSFwiOiBcIjk5MjMzNWRiNWY1NGVmOTRhNWYyM2JlOGI5MjVlZDI1MjliMDQ0NTM3YzE5YjU5NjQzZDM5Njk2OTM2YjZkNmNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJBcmdlbnQgRVRIXCI6IFwiNjgyNjE0ZjliMDM3NzE0YmJmMDAxZGIzYThkNmU4OTRmYmRjZjc1Y2JiYjlkZWE1YTQyZWRjZTMzZTg4MDA3MlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlRhbGx5IEVUSFwiOiBcImYzNjhkZTg2NzNhNTliODYwYjcxZjU0YzdiYThhYjE3ZjBiOTY0OGFkMDE0Nzk3ZTVmOGQ4ZmE5ZjdmMWQxMWFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJUcnVzdCBFVEhcIjogXCJkZjNkM2YwMjMzZTM5NmIyYjI3YzM5NDMyNjliMTBlY2YyZTdjMTA3MGE0ODVlMWI2YjhmMjIwMWNiMjNjYjUyXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUHVibGljIEVUSFwiOiBcIjkzMDZlZGE5NzRjYjg5YjgyYzBmMzhhYjQwN2Y1NWI2ZDEyNDE1OWQxZmE3Nzc5ZjJlMDg4YjJiNzg2NTczYzFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEJOQjoge1xuICAgICAgICAgICAgICAgICAgICBcIk1ldGFtYXNrIEJOQlwiOiBcIjNiZWU4ZWVmYzZhZmU2YjRmN2RiY2MwMjRlYjNhZDRjZWFhNWU0NThkMzRiNzg3NzMxOWYyZmU5ZjY3NmU5ODNcIixcbiAgICAgICAgICAgICAgICAgICAgXCJFc3NlbnRpYWxzIEJOQlwiOiBcIjYzOWM5YWJiNTYwNWExNGE1NTc5NTdmYTcyZTE0NmU5YWJmNzI3YmUzMmU1MTQ5ZGNhMzc3YjY0NzMxN2ViYjlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFVTRFQ6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJNZXRhbWFzayBVU0RUXCI6IFwiNzRhM2Q4OTg2YzgxNzY5ZWQzYmI5OWI3NzNkNjZiNjA4NTJmN2VlM2ZhMGQ1NWE2YTE0NDUyMzExNmM2NzFjMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkJpbmFuY2UgVVNEVFwiOiBcIjc3YzI3YzE5Y2M4NWUyNGIxZDQ2NTA4MDBjYzRiMWJjNjA3OTg2ZGQzZTc4NjA4NDM1Y2VjZWNkMzFjMzUwMTVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDb2luYmFzZSBVU0RUXCI6IFwiZjJmYWFiZjlkMTMzZjMxYTEzODczYmE4YTE1ZTY3NmUwNjNhNzMwODk4ZmZhZGZjYjAwNzdmNzIzMjYwZjU2M1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkV4Y2hhbmdlIFVTRFRcIjogXCI2ODNlN2I2OTRiMzc0Y2UwZDgxYmE1MjUzNjFmYTBjMjdmZmY3MjM3ZWIxMmVjNDFiNmUyMjU0NDlkNTcwMmI5XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUHJpdmF0ZSBVU0RUXCI6IFwiOGM5YTMwNmE3ZGMyMDBjNTJkMzJlM2MxZmNiZjJmNjVlODAzN2E2ODEyN2I4MTgwN2U4ZTU4NDI4MDA0YmM1N1wiLFxuICAgICAgICAgICAgICAgICAgICBcIkVzc2VudGlhbHMgVVNEVFwiOiBcIjc0ZGNiNTczYTVjNjMzODI0ODRmNTk3YWU4MDM0YTYxNTNjMDExZTI5MWMwMWViM2RhNDBlOWQ4M2M0MzZhOWFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFVTREM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJNZXRhbWFzayBVU0RDXCI6IFwiNmY3NjNmZWE2OTFiMWE3MjNlZjExNmU5OGMwMmZhZTA3YTQzOTdlMWEyYjRiNGM3NDlkMDY4NDVmYTJmZjVlNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkJpbmFuY2UgVVNEQ1wiOiBcIjdkMmIwZTBlZTI3YTM0MWRhODRjZTU2ZTk1ZWI1NTc5ODhmOWQ0ZmY5NWZlNDUyMjk3ZmM3NjUyNjViYjI3YTJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDb2luYmFzZSBVU0RDXCI6IFwiNmZlN2MxYTJmZGQxNTRlMGIzNTI4MzU5ODcyNGFkZWU5YTVkM2IyZTY1MjM3ODdkOGI2ZGU3Y2Q0NDFmMTVjYVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkV4Y2hhbmdlIFVTRENcIjogXCI4YzRhMjMxYzQ3YTRjZmE3NTMwYmE0MzYxYjY5MjZkYTRhY2Q4N2Y1NjkxNjdiOGJhNTViMjY4YmY5OTY0MGQwXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiUHJpdmF0ZSBVU0RDXCI6IFwiNTRjOWRhMDZhYjNkN2M2YzdmODEzZjM2NDkxYjIyYjdmMzEyYWU4ZjNiOGQxMjg2NmQzNWI1ZDMyNTg5NWUzZVwiLFxuICAgICAgICAgICAgICAgICAgICBcIkVzc2VudGlhbHMgVVNEQ1wiOiBcIjIzYTY2ZGYxNzhkYWYyNTExMTA4M2VlMTYxMGZiMjUzYmFmM2QxMmJkNzRjNmMyYWFlOTYwNzc1NThlMzczN2FcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEVMQToge1xuICAgICAgICAgICAgICAgICAgICBcIkVzc2VudGlhbHMgRUxBIFNDXCI6IFwiYzE3YzU1NjQ2N2ZlN2M5ZmU1NjY3ZGRlN2NhOGNkYmNhOGEyNGQwNDczYjllOWMxYzJjODE2NmMxZjM1NWY2Y1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgTUFUSUM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJFc3NlbnRpYWxzIE1BVElDXCI6IFwiMzM2ZmI2Y2RkN2ZlYzE5NmM2ZTY2OTY2YmQxYzMyNjA3MjUzOGE5NGU3MDBiOGJjMTExMWQxNTc0YjgzNTdiYVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgRVJDMjA6IHtcbiAgICAgICAgICAgICAgICAgICAgRVJDMjA6IFwiNjNkOTVlNjRlN2NhZmY5ODhmOTdmZGYzMmRlNWYxNjYyNGY5NzExNDk3NDljOTBmYmM3YmJlNDQyNDRkM2NlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnRjOiB7XG4gICAgICAgICAgICAgICAgQlRDOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQmluYW5jZSBCVENcIjogXCI0NTBlZmVjYTE1NjUxZTUwOTk1ZWQ0OTRhYzI0YTk0NWU2MWQ2N2Y2MGJlZDBkYmIzYjJkOGQ3ZGYxMjJhOGNhXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiQ29pbmJhc2UgQlRDXCI6IFwiYjNjNzdkZjkzZjg2NWRkMjFhNjE5NjI2NmQ1YzI5MWFkYWQxNWM3ZGI5YzgxZGRjNzg0MDlhMjJmMzZlYmU4NFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkV4Y2hhbmdlIEJUQ1wiOiBcImEzZjEwNGNhY2U4ZDY2ZWQ5OTcxYjE5Zjc0OWE4MjFhZTQzOTczNDkxNTVlYTFhODcyNDQ1MWMzZTY4MDMzNWJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJQcml2YXRlIEJUQ1wiOiBcImE3ZDNmNTFiMjZkYWQxMWY1ZjQ4NDJkMjlmMmZjNDE5YTQ4ZTM0NzFiZGVjMGEyYzcxM2M3ZDE4ZDMxNDNkNjVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJFc3NlbnRpYWxzIEJUQ1wiOiBcIjM5ZDE4NDk3YTY0NTkxYmIxYjA2MTk0MDMwOWM0NTM0OTUzOThkMDBmOWQ5ZGVhYjhiMmMxZTA5NzllNGNiZTdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIEVMQToge1xuICAgICAgICAgICAgICAgICAgICBcIkVzc2VudGlhbHMgRUxBXCI6IFwiMzVhZTgyMGM3MjM5Nzk3NzcwMTUyNGVlNjEwZTdlZjJjYTNkNjQ1MzljY2RjNjVlNTE5ODQ3MGQ4ZTQ5ZWNjYlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc29sOiB7XG4gICAgICAgICAgICAgICAgU09MOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiU29sYW5hIFNPTFwiOiBcIjYyOTk0ZWFjODQyMTdmOTBjNDRkN2FjZjk2Mjg2MWYwNDRhNWYyZTY1MzQwMGMxNTRhOGJjYmYxMTRkYTE2ZmJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJDb2luYmFzZSBTT0xcIjogXCJiNWE3MmI2NDAyZGU4YTBmYTY0OWUyM2M4MWFlMTY1ZGNmY2NlMjJjOTYwYTRhNjdhMjE4MjQzYTczZjQ5YjFmXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiVHJ1c3QgU09MXCI6IFwiNzAxOTA0NThlNjQzNWFkMWU4ZjU3NWFjNjBhN2Q4NTQyYWU1YTQ5MjdhYmEzMzY3ODlkZTM3N2E0N2I4MzlkNFwiLFxuICAgICAgICAgICAgICAgICAgICBcIkJpbmFuY2UgU09MXCI6IFwiMTljZDRlNmZlYjFlZmI0MGViNjUwNmZiNDQ4YTIyY2VmZWI2MzY5MGVjYWEzNWZlZTY1OTE0NjA3YWRlZTYwNlwiLFxuICAgICAgICAgICAgICAgICAgICBcIlBoYW50b20gU09MXCI6IFwiODhmNWM2ZGRiNjhhMWNlZTc3NTQzZjJkZTI3ODhhZGU5MTNiODdiYmFjMWMzOGQzNTQ3MDdiYzhlZTNhMDMyOFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH1cbiAgICBsb3dlckZpcnN0KGlucHV0KSB7XG4gICAgICAgIHJldHVybiBpbnB1dC5jaGFyQXQoMCkudG9Mb3dlckNhc2UoKSArIGlucHV0LnNsaWNlKDEpO1xuICAgIH1cbiAgICBjb252ZXJ0UGhvbmUoaW5wdXQpIHtcbiAgICAgICAgLy8gYWxsb3cgZm9yIGxldHRlcnMgYmVjYXVzZSBzZWNyZXQgd29yZCBjYW4gZm9sbG93IHBob25lIG51bWJlclxuICAgICAgICByZXR1cm4gXCIrXCIgKyBpbnB1dC5yZXBsYWNlKC9bXlxcZGEtekEtWl0vLCBcIlwiKTtcbiAgICB9XG4gICAgYXN5bmMgcmV2ZXJzZVJlc29sdmUoYWRkcmVzcykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5jYWxsV2ViM1JldmVyc2UoYWRkcmVzcyk7XG4gICAgICAgIGlmICgrcmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gKCdAJyArIGF3YWl0IHRoaXMud2ViQXBpLnJldmVyc2VUd2l0dGVySUQocmVzdWx0KSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBCYXNlSWRyaXNzQ3J5cHRvIH0gZnJvbSBcIi4vYmFzZUlkcmlzc0NyeXB0b1wiO1xuZXhwb3J0IGNsYXNzIElkcmlzc0NyeXB0byBleHRlbmRzIEJhc2VJZHJpc3NDcnlwdG8ge1xuICAgIGNvbnN0cnVjdG9yKHBvbHlnb25FbmRwb2ludCA9IFwiaHR0cHM6Ly9wb2x5Z29uLXJwYy5jb20vXCIpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBXZWIzUHJvbWlzZSA9IGltcG9ydChcIndlYjMvZGlzdC93ZWIzLm1pbi5qc1wiKTtcbiAgICAgICAgc3VwZXIoV2ViM1Byb21pc2UudGhlbih4ID0+IHguZGVmYXVsdCkudGhlbihXZWIzID0+IG5ldyBXZWIzKG5ldyBXZWIzLnByb3ZpZGVycy5IdHRwUHJvdmlkZXIocG9seWdvbkVuZHBvaW50KSkpKTtcbiAgICB9XG4gICAgYXN5bmMgZGlnZXN0TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgICAgIGNvbnN0IG1zZ1VpbnQ4ID0gbmV3IFRleHRFbmNvZGVyKCkuZW5jb2RlKG1lc3NhZ2UpOyAvLyBlbmNvZGUgYXMgKHV0Zi04KSBVaW50OEFycmF5XG4gICAgICAgIGNvbnN0IGhhc2hCdWZmZXIgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdCgnU0hBLTI1NicsIG1zZ1VpbnQ4KTsgLy8gaGFzaCB0aGUgbWVzc2FnZVxuICAgICAgICBjb25zdCBoYXNoQXJyYXkgPSBBcnJheS5mcm9tKG5ldyBVaW50OEFycmF5KGhhc2hCdWZmZXIpKTsgLy8gY29udmVydCBidWZmZXIgdG8gYnl0ZSBhcnJheVxuICAgICAgICBjb25zdCBoYXNoSGV4ID0gaGFzaEFycmF5Lm1hcChiID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpOyAvLyBjb252ZXJ0IGJ5dGVzIHRvIGhleCBzdHJpbmdcbiAgICAgICAgcmV0dXJuIGhhc2hIZXg7XG4gICAgfVxufVxuaW1wb3J0IHsgQXV0aG9yaXphdGlvbiwgQ3JlYXRlT1RQUmVzcG9uc2UsIFdyb25nT1RQRXhjZXB0aW9uIH0gZnJvbSBcIi4vYXV0aG9yaXphdGlvblwiO1xuZXhwb3J0IHsgQXV0aG9yaXphdGlvbiwgQ3JlYXRlT1RQUmVzcG9uc2UsIFdyb25nT1RQRXhjZXB0aW9uIH07XG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcIm5vZGUtZmV0Y2hcIjtcbmV4cG9ydCBjbGFzcyBXZWJBcGkge1xuICAgIGFzeW5jIGdldFR3aXR0ZXJJRChpbnB1dENvbWJpbmF0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy5pZHJpc3MueHl6L3YxL2dldFR3aXR0ZXJJRD9pZGVudGlmaWVyPVwiICsgZW5jb2RlVVJJQ29tcG9uZW50KGlucHV0Q29tYmluYXRpb24pKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJRHJpc3MgYXBpIHJlc3BvbmRlZCB3aXRoIGNvZGUgXCIgKyByZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyBcIlxcclxcblwiICsgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGpzb24udHdpdHRlcklEO1xuICAgIH1cbiAgICBhc3luYyByZXZlcnNlVHdpdHRlcklEKGlkKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3d3dy5pZHJpc3MueHl6L3YxL2dldFR3aXR0ZXJOYW1lcz9pZHM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoaWQpKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPSAyMDApXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJRHJpc3MgYXBpIHJlc3BvbmRlZCB3aXRoIGNvZGUgXCIgKyByZXNwb25zZS5zdGF0dXMgKyBcIiBcIiArIHJlc3BvbnNlLnN0YXR1c1RleHQgKyBcIlxcclxcblwiICsgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgICAgY29uc3QganNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGpzb24udHdpdHRlck5hbWVzW2lkXTtcbiAgICB9XG59XG4iLCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh2YXJpYWJsZXMpe2NvbnN0IF8yMzk9ZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO2NvbnN0IF8yNDA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtfMjQwLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibm9IMVwiKTtjb25zdCBfMjQxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjQwLmFwcGVuZChfMjQxKTtjb25zdCBfMjQyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtjb25zdCBfMjQzPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSW5wdXQgZGVzdGluYXRpb25cIik7XzI0Mi5hcHBlbmQoXzI0Myk7XzI0MC5hcHBlbmQoXzI0Mik7Y29uc3QgXzI0ND1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcbiAgICBcIik7XzI0MC5hcHBlbmQoXzI0NCk7Y29uc3QgXzI0NT1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO18yNDUuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJjbG9zZUJ1dHRvblwiKTtfMjQ1LnNldEF0dHJpYnV0ZShcInNyY1wiLCB2YXJpYWJsZXNbXCJjbG9zZVwiXSk7XzI0NS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgXCJjbG9zZVwiKTtfMjQwLmFwcGVuZChfMjQ1KTtjb25zdCBfMjQ2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18yNDAuYXBwZW5kKF8yNDYpO18yMzkuYXBwZW5kKF8yNDApO2NvbnN0IF8yNDc9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzIzOS5hcHBlbmQoXzI0Nyk7Y29uc3QgXzI0OD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibWFpblwiKTtjb25zdCBfMjQ5PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjQ4LmFwcGVuZChfMjQ5KTtjb25zdCBfMjUwPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtfMjQ4LmFwcGVuZChfMjUwKTtjb25zdCBfMjUxPWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjQ4LmFwcGVuZChfMjUxKTtjb25zdCBfMjUyPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XzI1Mi5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcInJlc3VsdHNcIik7XzI0OC5hcHBlbmQoXzI1Mik7Y29uc3QgXzI1Mz1kb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShcIlxcclxcblwiKTtfMjQ4LmFwcGVuZChfMjUzKTtfMjM5LmFwcGVuZChfMjQ4KTtjb25zdCBfMjU0PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuXCIpO18yMzkuYXBwZW5kKF8yNTQpO2NvbnN0IF8yNTU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtjb25zdCBfMjU2PWRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXFxyXFxuICAgIFwiKTtfMjU1LmFwcGVuZChfMjU2KTtjb25zdCBfMjU3PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XzI1Ny5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiYnV0dG9uXCIpO18yNTcuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJuZXh0XCIpO2NvbnN0IF8yNTg9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgICAgIFwiKTtfMjU3LmFwcGVuZChfMjU4KTtjb25zdCBfMjU5PWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO2NvbnN0IF8yNjA9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJOZXh0XCIpO18yNTkuYXBwZW5kKF8yNjApO18yNTcuYXBwZW5kKF8yNTkpO2NvbnN0IF8yNjE9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG4gICAgXCIpO18yNTcuYXBwZW5kKF8yNjEpO18yNTUuYXBwZW5kKF8yNTcpO2NvbnN0IF8yNjI9ZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJcXHJcXG5cIik7XzI1NS5hcHBlbmQoXzI2Mik7XzIzOS5hcHBlbmQoXzI1NSk7cmV0dXJuIF8yMzl9XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmVmOiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1nbG9iYWxcbnZhciBnZXRHbG9iYWwgPSBmdW5jdGlvbiAoKSB7XG5cdC8vIHRoZSBvbmx5IHJlbGlhYmxlIG1lYW5zIHRvIGdldCB0aGUgZ2xvYmFsIG9iamVjdCBpc1xuXHQvLyBgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKWBcblx0Ly8gSG93ZXZlciwgdGhpcyBjYXVzZXMgQ1NQIHZpb2xhdGlvbnMgaW4gQ2hyb21lIGFwcHMuXG5cdGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHNlbGY7IH1cblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiB3aW5kb3c7IH1cblx0aWYgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7IHJldHVybiBnbG9iYWw7IH1cblx0dGhyb3cgbmV3IEVycm9yKCd1bmFibGUgdG8gbG9jYXRlIGdsb2JhbCBvYmplY3QnKTtcbn1cblxudmFyIGdsb2JhbCA9IGdldEdsb2JhbCgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBnbG9iYWwuZmV0Y2g7XG5cbi8vIE5lZWRlZCBmb3IgVHlwZVNjcmlwdCBhbmQgV2VicGFjay5cbmlmIChnbG9iYWwuZmV0Y2gpIHtcblx0ZXhwb3J0cy5kZWZhdWx0ID0gZ2xvYmFsLmZldGNoLmJpbmQoZ2xvYmFsKTtcbn1cblxuZXhwb3J0cy5IZWFkZXJzID0gZ2xvYmFsLkhlYWRlcnM7XG5leHBvcnRzLlJlcXVlc3QgPSBnbG9iYWwuUmVxdWVzdDtcbmV4cG9ydHMuUmVzcG9uc2UgPSBnbG9iYWwuUmVzcG9uc2U7IiwiZXhwb3J0IGRlZmF1bHQgXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaUlEOCtEUW84YzNabklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ1kyeGhjM005SW1ndE5pQjNMVFlnZEdWNGRDMW5jbUY1TFRVd01DQnRiQzFoZFhSdklpQm1hV3hzUFNKdWIyNWxJZzBLSUNBZ0lDQjJhV1YzUW05NFBTSXdJREFnTWpRZ01qUWlJSE4wY205clpUMGlJelppTnpJNE1DSWdjM1J5YjJ0bExYZHBaSFJvUFNJeUlpQjNhV1IwYUQwaU1qUndlQ0lnYUdWcFoyaDBQU0l5TkhCNElqNE5DaUFnSUNBOGNHRjBhQ0J6ZEhKdmEyVXRiR2x1WldOaGNEMGljbTkxYm1RaUlITjBjbTlyWlMxc2FXNWxhbTlwYmowaWNtOTFibVFpSUdROUlrMDJJREU0VERFNElEWk5OaUEyYkRFeUlERXlJaTgrRFFvOEwzTjJaejQ9XCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHRlbXBsYXRlIGZyb20gXCIuL3RpcHBpbmdBZGRyZXNzLm1wdHNcIjtcclxuaW1wb3J0IHtjcmVhdGV9IGZyb20gXCJmYXN0LWNyZWF0b3JcIjtcclxuaW1wb3J0IGNsb3NlIGZyb20gXCIhIXVybC1sb2FkZXIhLi9pbWcvY2xvc2Uuc3ZnXCJcclxuaW1wb3J0IHtJZHJpc3NDcnlwdG99IGZyb20gXCJpZHJpc3MtY3J5cHRvL2Jyb3dzZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaXBwaW5nQWRkcmVzcyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmh0bWwgPSBjcmVhdGUoJ2RpdicsIHt9LCB0ZW1wbGF0ZSh7Y2xvc2V9KSk7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSB0aGlzLmh0bWwucXVlcnlTZWxlY3RvcignaW5wdXQnKVxyXG4gICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgYXN5bmMgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdEV2ZW50ID0ge2V2ZW50OiBlLCBkYXRlOiBuZXcgRGF0ZSgpLCBpbnB1dDogZS50YXJnZXQsIHZhbHVlOiBlLnRhcmdldC52YWx1ZX1cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNoZWNrSW5wdXRDaGFuZ2VkKCksIDUwMClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuaHRtbC5xdWVyeVNlbGVjdG9yKCcubmV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRyZXNzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0bWwuZGlzcGF0Y2hFdmVudChPYmplY3QuYXNzaWduKG5ldyBFdmVudCgnbmV4dCcsIHtidWJibGVzOiB0cnVlfSksIHtcclxuICAgICAgICAgICAgICAgICAgICBpZGVudGlmaWVyOiB0aGlzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjaXBpZW50OiB0aGlzLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5pZHJpc3MgPSBuZXcgSWRyaXNzQ3J5cHRvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2hlY2tJbnB1dENoYW5nZWQoKSB7XHJcbiAgICAgICAgaWYgKG5ldyBEYXRlKCkgLSB0aGlzLmxhc3RFdmVudD8uZGF0ZSA+PSA1MDAgJiYgdGhpcy5sYXN0RXZlbnQ/LmlucHV0LnZhbHVlID09IHRoaXMubGFzdEV2ZW50Py52YWx1ZSAmJiB0aGlzLmxhc3RFdmVudD8udmFsdWUubGVuZ3RoID49IDMpIHtcclxuICAgICAgICAgICAgbGV0IGV2ZW50ID0gdGhpcy5sYXN0RXZlbnQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICByZXN1bHRzLmNsYXNzTmFtZSA9ICdyZXN1bHRzJztcclxuICAgICAgICAgICAgdGhpcy5odG1sLnF1ZXJ5U2VsZWN0b3IoJy5yZXN1bHRzJykucmVwbGFjZVdpdGgocmVzdWx0cylcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhd2FpdCB0aGlzLmlkcmlzcy5yZXNvbHZlKGV2ZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGRhdGEgJiYgZXZlbnQgPT0gdGhpcy5sYXN0RXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QudmFsdWVzKGRhdGEpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NOYW1lID0gJ2VtcHR5JztcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZChcIk5vdGhpbmcgZm91bmQuIFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgICAgICAgICAgICAgICAgIGEudGV4dENvbnRlbnQgPSAnU2lnbiB1cCBmb3IgSURyaXNzIG5vdyEnO1xyXG4gICAgICAgICAgICAgICAgICAgIGEuaHJlZiA9ICdodHRwczovL3d3dy5pZHJpc3MueHl6JztcclxuICAgICAgICAgICAgICAgICAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uYXBwZW5kKGEpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5hcHBlbmQoaXRlbSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZWxlbWVudHNLZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdHlwZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVFbGVtZW50LmNsYXNzTmFtZSA9ICd0eXBlJ1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVFbGVtZW50LnRleHRDb250ZW50ID0gZWxlbWVudHNLZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQodHlwZUVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICAgICAgICAgIGtleUVsZW1lbnQuY2xhc3NOYW1lID0gJ2tleSdcclxuICAgICAgICAgICAgICAgICAgICBrZXlFbGVtZW50LnRleHRDb250ZW50ID0gZXZlbnQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoa2V5RWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQudmFsdWUuc3RhcnRzV2l0aChcIkBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5RWxlbWVudC5zdHlsZS5jb2xvciA9IFwiIzFEQTFGMlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VsZW1lbnQuc3JjID0gXCJodHRwczovL3d3dy5pZHJpc3MueHl6L3N0YXRpYy9pbWFnZXMvdHdpdHRlci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWdFbGVtZW50LmFsdCA9IFwiVHdpdHRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZ0VsZW1lbnQuY2xhc3NOYW1lID0gJ2ltZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5hcHBlbmQoaW1nRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVFbGVtZW50LmNsYXNzTmFtZSA9ICd2YWx1ZSdcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZUVsZW1lbnQudGV4dENvbnRlbnQgPSBkYXRhW2VsZW1lbnRzS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmFwcGVuZCh2YWx1ZUVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0cy5hcHBlbmQoaXRlbSlcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLm9ubW91c2Vkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZHJlc3MgPSBkYXRhW2VsZW1lbnRzS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uYW1lID0gZXZlbnQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9