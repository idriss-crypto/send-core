/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
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
/*!*****************************!*\
  !*** ./src/tippingUtils.js ***!
  \*****************************/
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
var __webpack_exports__tokens = __webpack_exports__.tokens;
export { __webpack_exports__tokens as tokens };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlwcGluZ1V0aWxzLm1qcyIsIm1hcHBpbmdzIjoiU0FBQTtTQUNBOzs7OztVQ0RBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EseUNBQXlDLHdDQUF3QztVQUNqRjtVQUNBO1VBQ0E7Ozs7O1VDUEE7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdEOzs7Ozs7Ozs7Ozs7QUNOTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AaWRyaXNzLWNyeXB0by90aXBwaW5nLWNvcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0BpZHJpc3MtY3J5cHRvL3RpcHBpbmctY29yZS8uL3NyYy90aXBwaW5nVXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgY29uc3QgdG9rZW5zID0gW1xyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkV0aGVyZXVtXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy8zMngzMi8xMDI3LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIk1BVElDXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJNQVRJQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9wb2x5Z29uc2Nhbi5jb20vdG9rZW4vaW1hZ2VzL21hdGljXzMyLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJCTkJcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkJOQlwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly9zMi5jb2lubWFya2V0Y2FwLmNvbS9zdGF0aWMvaW1nL2NvaW5zLzMyeDMyLzE4MzkucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhBMGI4Njk5MWM2MjE4YjM2YzFkMTlENGEyZTlFYjBjRTM2MDZlQjQ4XCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiRVRIXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVVNEIENvaW5cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIlVTRENcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDYsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMuMWluY2guaW8vMHhhMGI4Njk5MWM2MjE4YjM2YzFkMTlkNGEyZTllYjBjZTM2MDZlYjQ4LnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlVTRCBDb2luXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RDXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA2LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4Mjc5MWJjYTFmMmRlNDY2MWVkODhhMzBjOTlhN2E5NDQ5YWE4NDE3NFwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vd2FsbGV0LWFzc2V0Lm1hdGljLm5ldHdvcmsvaW1nL3Rva2Vucy91c2RjLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJVU0QgQ29pblwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHg4QUM3NmE1MWNjOTUwZDk4MjJENjhiODNmRTFBZDk3QjMyQ2Q1ODBkXCIsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly93YWxsZXQtYXNzZXQubWF0aWMubmV0d29yay9pbWcvdG9rZW5zL3VzZGMuc3ZnXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiRVRIIG9uIFBvbHlnb25cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIldFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4N2NlQjIzZkQ2YkMwYWRENTlFNjJhYzI1NTc4MjcwY0ZmMWI5ZjYxOVwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vcG9seWdvbnNjYW4uY29tL3Rva2VuL2ltYWdlcy93RVRIXzMyLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJFVEggb24gQlNDXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJXRVRIXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDIxNzBFZDA4ODBhYzlBNzU1ZmQyOUIyNjg4OTU2QkQ5NTlGOTMzRjhcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3BvbHlnb25zY2FuLmNvbS90b2tlbi9pbWFnZXMvd0VUSF8zMi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDZCMTc1NDc0RTg5MDk0QzQ0RGE5OGI5NTRFZWRlQUM0OTUyNzFkMEZcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJEYWlcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkRBSVwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMuMWluY2guaW8vMHg2YjE3NTQ3NGU4OTA5NGM0NGRhOThiOTU0ZWVkZWFjNDk1MjcxZDBmLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4MUFGM0YzMjllOEJFMTU0MDc0RDg3NjlEMUZGYTRlRTA1OEIxREJjM1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiA1NixcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJCU0NcIixcclxuICAgICAgICBcIm5hbWVcIjogXCJEYWlcIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkRBSVwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogMTgsXHJcbiAgICAgICAgXCJsb2dvVVJJXCI6IFwiaHR0cHM6Ly90b2tlbnMuMWluY2guaW8vMHg2YjE3NTQ3NGU4OTA5NGM0NGRhOThiOTU0ZWVkZWFjNDk1MjcxZDBmLnBuZ1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxMzcsXHJcbiAgICAgICAgXCJuZXR3b3JrXCI6IFwiUG9seWdvblwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIkRhaVwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiREFJXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweDhmM2NmN2FkMjNjZDNjYWRiZDk3MzVhZmY5NTgwMjMyMzljNmEwNjNcIixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3dhbGxldC1hc3NldC5tYXRpYy5uZXR3b3JrL2ltZy90b2tlbnMvZGFpLnN2Z1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4ZEFDMTdGOTU4RDJlZTUyM2EyMjA2MjA2OTk0NTk3QzEzRDgzMWVjN1wiLFxyXG4gICAgICAgIFwiY2hhaW5JZFwiOiAxLFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkVUSFwiLFxyXG4gICAgICAgIFwibmFtZVwiOiBcIlRldGhlclwiLFxyXG4gICAgICAgIFwic3ltYm9sXCI6IFwiVVNEVFwiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogNixcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy4xaW5jaC5pby8weGRhYzE3Zjk1OGQyZWU1MjNhMjIwNjIwNjk5NDU5N2MxM2Q4MzFlYzcucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJuYW1lXCI6IFwiVGV0aGVyXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJVU0RUXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiA2LFxyXG4gICAgICAgIFwiYWRkcmVzc1wiOiBcIjB4YzIxMzJkMDVkMzFjOTE0YTg3YzY2MTFjMTA3NDhhZWIwNGI1OGU4ZlwiLFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vd2FsbGV0LWFzc2V0Lm1hdGljLm5ldHdvcmsvaW1nL3Rva2Vucy91c2R0LnN2Z1wiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkRvZ2Vjb2luXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJET0dFXCIsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhiQTJhRTQyNGQ5NjBjMjYyNDdEZDZjMzJlZEM3MEIyOTVjNzQ0QzQzXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDU2LFxyXG4gICAgICAgIFwibmV0d29ya1wiOiBcIkJTQ1wiLFxyXG4gICAgICAgIFwiZGVjaW1hbHNcIjogOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3Rva2Vucy5wYW5jYWtlc3dhcC5maW5hbmNlL2ltYWdlcy8weGJBMmFFNDI0ZDk2MGMyNjI0N0RkNmMzMmVkQzcwQjI5NWM3NDRDNDMucG5nXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ3VsdCBEQU9cIixcclxuICAgICAgICBcInN5bWJvbFwiOiBcIkNVTFRcIixcclxuICAgICAgICBcImFkZHJlc3NcIjogXCIweGYwZjlkODk1YWNhNWM4Njc4ZjcwNmZiODIxNmZhMjI5NTc2ODVhMTNcIixcclxuICAgICAgICBcImNoYWluSWRcIjogMSxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJFVEhcIixcclxuICAgICAgICBcImRlY2ltYWxzXCI6IDE4LFxyXG4gICAgICAgIFwibG9nb1VSSVwiOiBcImh0dHBzOi8vczIuY29pbm1hcmtldGNhcC5jb20vc3RhdGljL2ltZy9jb2lucy82NHg2NC8xNzc0Mi5wbmdcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJSZXZvbHQgMiBFYXJuXCIsXHJcbiAgICAgICAgXCJzeW1ib2xcIjogXCJSVkxUXCIsXHJcbiAgICAgICAgXCJhZGRyZXNzXCI6IFwiMHhmMGY5RDg5NWFDYTVjODY3OGY3MDZGQjgyMTZmYTIyOTU3Njg1QTEzXCIsXHJcbiAgICAgICAgXCJjaGFpbklkXCI6IDEzNyxcclxuICAgICAgICBcIm5ldHdvcmtcIjogXCJQb2x5Z29uXCIsXHJcbiAgICAgICAgXCJkZWNpbWFsc1wiOiAxOCxcclxuICAgICAgICBcImxvZ29VUklcIjogXCJodHRwczovL3MyLmNvaW5tYXJrZXRjYXAuY29tL3N0YXRpYy9pbWcvY29pbnMvNjR4NjQvMTk4OTMucG5nXCJcclxuICAgIH0sXHJcbl0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=