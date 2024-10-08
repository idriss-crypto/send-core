import Web3 from "web3/dist/web3.min.js";
import {BigNumber} from "ethers";
import { tokens, multiToken, walletTypeDefault, getCoin } from "./sendToAnyoneUtils";
import { IdrissCrypto } from "idriss-crypto/browser";

export const defaultWeb3 = new Web3(new Web3.providers.HttpProvider("https://polygon-mainnet.g.alchemy.com/v2/Ca6JC852xdC8fzdmF516JfDNN1RQQQlC"));
export const defaultWeb3ETH = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"));
export const defaultWeb3OP = new Web3(new Web3.providers.HttpProvider("https://mainnet.optimism.io"));


let oracleAddress = {
    ETH: "0xf9680d99d6c9589e2a93a78a04a279e509205945",
    WETH: "0xf9680d99d6c9589e2a93a78a04a279e509205945",
    BNB: "0x82a6c4af830caa6c97bb504425f6a66165c2c26e",
    POL: "0xab594600376ec9fd91f8e885dadf0ce036862de0",
    USDC: "0xfe4a8cc5b5b2366c1b58bea3858e81843581b2f7",
    USDT: "0x0a6513e40db6eb1b165753ad52e80663aea50545",
    DAI: "0x4746dec9e833a82ec7c2c1356372ccf2cfcd2f3d",
    DOGE: "0xbaf9327b6564454f4a3364c33efeef032b4b4444",
    OP: "0x0d276fc14719f9292d5c1ea2198673d1f4269246",
};

let oracleW3s = {
    ETH: defaultWeb3,
    WETH: defaultWeb3,
    BNB: defaultWeb3,
    POL: defaultWeb3,
    USDC: defaultWeb3,
    USDT: defaultWeb3,
    DAI: defaultWeb3,
    DOGE: defaultWeb3,
    OP: defaultWeb3OP,
}

const assetTypes = {
    native: 0,
    erc20: 1,
    erc721: 2,
    erc1155: 3,
};

// add ids of token supported by redstone
let redstoneId = {
    MNT: "MNT",
};

// add ids of token not supported in chainlink oracles
let coingeckoId = {
    CULT: "cult-dao",
    RVLT: "revolt-2-earn",
    BANK: "bankless-dao",
    AZERO: "aleph-zero"
};

let portal_fi = {
    PRIME: "ethereum:0xb23d80f5FefcDDaa212212F028021B41DEd428CF",
    GHST: "ethereum:0x3F382DbD960E3a9bbCeaE22651E88158d2791550",
    DEGEN: "base:0x4ed4e862860bed51a9570b96d89af5e1b0efefed"
}

// When using all token
//let allTokens = tokens.concat(multiToken)

export const SendToAnyoneLogic = {
    provider: null,
    idriss: null,
    apiKey: null,
    async prepareSendToAnyone(provider, network, apiKey) {
        console.log("prepareSendToAnyone");
        let ORACLE_CONTRACT_ADDRESS = POLYGON_PRICE_ORACLE_CONTRACT_ADDRESS;
        let TIPPING_CONTRACT_ADDRESS = POLYGON_TIPPING_CONTRACT_ADDRESS;

        switch (network) {
            case "ETH":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = ETH_TIPPING_CONTRACT_ADDRESS;
                break;
            case "BSC":
                ORACLE_CONTRACT_ADDRESS = BSC_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = BSC_TIPPING_CONTRACT_ADDRESS;
                break;
            case "zkSync":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = ZK_TIPPING_CONTRACT_ADDRESS;
                break;
            case "linea":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = LINEA_TIPPING_CONTRACT_ADDRESS;
                break;
            case "optimism":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = OP_TIPPING_CONTRACT_ADDRESS;
                break;
            case "pgn":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = PGN_TIPPING_CONTRACT_ADDRESS;
                break;
            case "base":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = BASE_TIPPING_CONTRACT_ADDRESS;
                break;
            case "arbitrum":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                break;
            case "mantle":
                // not adding an oracle address (use default) as calculation is separate below
                TIPPING_CONTRACT_ADDRESS = MANTLE_TIPPING_CONTRACT_ADDRESS;
                break;
            case "aleph":
                // not adding an oracle address (use default) as calculation is separate below
                TIPPING_CONTRACT_ADDRESS = ALEPH_TIPPING_CONTRACT_ADDRESS;
                break;
            case "scroll":
                ORACLE_CONTRACT_ADDRESS = ETH_PRICE_ORACLE_CONTRACT_ADDRESS;
                TIPPING_CONTRACT_ADDRESS = SCROLL_TIPPING_CONTRACT_ADDRESS;
                break;
            default:
                // Handle the default case if needed
                break;
        }
        this.provider = provider;
        this.apiKey = apiKey;
        const web3 = new Web3(this.provider);
        // all values are injected by webpack based on the environment
        this.idriss = new IdrissCrypto(this.provider.host ?? POLYGON_RPC_ENDPOINT, {
            providerType: 'ethersv5',
            web3Provider: this.provider,
            sendToAnyoneContractAddress: SEND_TO_ANYONE_CONTRACT_ADDRESS,
            idrissRegistryContractAddress: IDRISS_REGISTRY_CONTRACT_ADDRESS,
            reverseIDrissMappingContractAddress: REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS,
            priceOracleContractAddress: ORACLE_CONTRACT_ADDRESS,
            tippingContractAddress: TIPPING_CONTRACT_ADDRESS,
        });
        this.web3 = web3;
        await this.switchNetwork(network);
    },

    async calculateAmount(ticker, sendToAnyoneValue) {
        let priceSt;

        if (oracleAddress[ticker]) {
            let oracle = await this.loadOracle(ticker); // token ticker selected
            priceSt = await this.getPrice(oracle);
        } else if (coingeckoId[ticker]) {
            let response = await (await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${coingeckoId[ticker]}&vs_currencies=USD&precision=full`)).json();
            priceSt = Object.values(Object.values(response)[0])[0];
        } else if (redstoneId[ticker]) {
            let response = await (await fetch(`https://api.redstone.finance/prices/?symbol=${redstoneId[ticker]}&provider=redstone&limit=1`)).json();
            priceSt = response[0]["value"]
        } else if (ticker.toUpperCase() == "AZERO") {
            let response = await (await fetch(`https://api.diadata.org/v1/assetQuotation/AlephZero/0x0000000000000000000000000000000000000000`)).json();
            priceSt = response["Price"]
        } else {
            let response = await (await fetch(`https://www.idriss.xyz/pricing?token=${portal_fi[ticker]}`)).json();
            priceSt = response['tokens'][0]['price']
        }

        let decimals = tokens.filter((x) => x.symbol == ticker)[0]?.decimals;
        priceSt = Number.parseFloat(priceSt).toFixed(decimals)

        let BN = defaultWeb3.utils.BN;
        let ten = new BN(10);
        let base = ten.pow(new BN(decimals));
        let integer = this.getAmount(sendToAnyoneValue.toString(), priceSt, decimals);
        let normal = (integer/base).toString();
        return { integer, normal };
    },


    async calculateTokenAmount(assetAddress, decimalValue, userAssetType) {
        console.log(decimalValue)
        console.log(userAssetType)
        console.log(assetAddress)

        const BN = defaultWeb3.utils.BN;
        const ten = new BN(10);

        let decimals;
        console.log(assetTypes)
        console.log(userAssetType == assetTypes.native)

        if (userAssetType == assetTypes.native) {decimals="18"}
        else if (userAssetType == assetTypes.erc20) {
            let tokenContract = await this.loadERC20(assetAddress);
            console.log(tokenContract)
            decimals = await tokenContract.methods.decimals().call();
        } else { return "1" }

        console.log(decimals)
        const base = ten.pow(new BN(decimals));

        // expect values to be non-negative and start with number, i.e., not ".xxx"

        // Split it into a whole and fractional part
        let comps = decimalValue.split('.');
        let whole = comps[0]
        let fraction = comps[1];
        console.log(comps, whole, fraction, base, decimals)

        if (!whole) { whole = '0'; }
        if (!fraction) { fraction = '0'; }
        if (fraction.length > parseInt(decimals)) {
            throw new Error('Too many decimal places');
        }

        while (fraction.length < parseInt(decimals)) {
            fraction += '0';
        }

        whole = new BN(whole);
        fraction = new BN(fraction);
        let wei = (whole.mul(base)).add(fraction);

        return wei.toString()
    },

    async switchNetwork(network) {
        if (network === "Polygon") {
            try {
                await this.switchtopolygon();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "ETH") {
            try {
                await this.switchtoeth();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "BSC") {
            try {
                await this.switchtobsc();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "zkSync") {
            try {
                await this.switchtozk();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "linea") {
            try {
                await this.switchtolinea();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "optimism") {
            try {
                await this.switchtooptimism();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "pgn") {
            try {
                await this.switchtopgn();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "mantle") {
            try {
                await this.switchtomantle();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "aleph") {
            try {
                await this.switchtoaleph();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "base") {
            try {
                await this.switchtobase();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "arbitrum") {
            try {
                await this.switchtoarbitrum();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else if (network === "scroll") {
            try {
                await this.switchtoscroll();
            } catch (e) {
                if (e != "network1") {
                    throw e;
                }
            }
        } else {
            return false;
        }
    },

    async vote(recipient, amount, network, token, assetType, assetAddress, projectId, applicationIndex, roundContract) {

        let tokenContractAddr = tokens.filter((x) => x.symbol == token && x.network == network)[0]?.address; // get from json
        if (typeof(tokenContractAddr) === "undefined") tokenContractAddr = ZERO_ADDRESS;

        const asset = {
            amount: `${amount}`,
            type: assetTypes[assetType],
            assetContractAddress: (assetAddress ?? "").length > 0 ? assetAddress : tokenContractAddr,
            assetId: 0,
        };

        // should be address(0) if native
        console.log(asset.assetContractAddress)
        console.log(asset.amount)

        console.log(asset.assetContractAddress, asset.amount, recipient, projectId, applicationIndex, roundContract)

        const encodedVotes = [
            this.web3.eth.abi.encodeParameters(
                ['address', 'uint256', 'address', 'bytes32', 'uint256'],
                [asset.assetContractAddress, asset.amount, recipient, projectId, applicationIndex]
            )
        ];
        console.log(encodedVotes)

        // switch to selected payment option's network
        await this.switchNetwork(network);

        let polygonGas;
        try {
            if (network==="Polygon") {
                polygonGas = Math.round(1.05*(await this.web3.eth.getGasPrice()))
            }
        } catch {
            console.log("could not load polygon gas");
        }

        try{
            // create new idriss instance handling the new network
            await this.prepareSendToAnyone(this.provider, network, this.apiKey)
        } catch (e) {
            console.log(e)
        }

        // exchanged for redundant multiple get accounts calls
        const selectedAccount = await this.idriss.getConnectedAccount();

        if (selectedAccount) {
            let result;

            try {
                const transactionOptions = {
                    from: selectedAccount,
                    ...(polygonGas && { gasPrice: polygonGas }),
                };
                if (network === "zkSync" || network === "optimism" || network === 'linea' || network === 'mantle' || network === 'arbitrum') transactionOptions.gasPrice = await this.web3.eth.getGasPrice();
                console.log(network, this.idriss);
                console.log(encodedVotes, asset, transactionOptions);
                result = await this.idriss.vote(encodedVotes, asset, roundContract, transactionOptions);
                console.log(result)
            } catch (err) {
                console.log("error", err);
                // Transaction failed or user has denied
                // catch different errors?
                // code 4001 user denied
                if (err.code == 4001) {
                    console.log("Transaction denied.");
                    return false;
                } else {
                    throw err;
                }
            }
            return result;
        }
    },

    async sendToAnyone(recipient, amount, network, token, message, assetType, assetAddress, assetId, walletTag) {

        let tokenContractAddr = tokens.filter((x) => x.symbol == token && x.network == network)[0]?.address; // get from json
        console.log("Getting this contr address: ", tokenContractAddr)
        let properAmount;
        if (assetType === "erc721" || assetType === "erc1155") properAmount = 1;
        else properAmount =  amount;

        const asset = {
            amount: `${properAmount}`,
            type: assetTypes[assetType],
            assetContractAddress: (assetAddress ?? "").length > 0 ? assetAddress : tokenContractAddr,
            assetId: assetId === "" ? 0 : assetId,
        };

        const walletType = walletTag
            ? {
                  coin: getCoin(walletTag),
                  network: "evm",
                  walletTag: walletTag,
              }
            : walletTypeDefault;

        // switch to selected payment option's network
        await this.switchNetwork(network);

        let polygonGas;
        try {
            if (network==="Polygon") {
                polygonGas = Math.round(1.05*(await this.web3.eth.getGasPrice()))
            }
        } catch {
            console.log("could not load polygon gas");
        }

        try{
            // create new idriss instance handling the new network
            await this.prepareSendToAnyone(this.provider, network, this.apiKey)
        } catch (e) {
            console.log(e)
        }

        // exchanged for redundant multiple get accounts calls
        const selectedAccount = await this.idriss.getConnectedAccount();

        if (selectedAccount) {
            let result;

            try {
                const transactionOptions = {
                    from: selectedAccount,
                    ...(polygonGas && { gasPrice: polygonGas }),
                };
                console.log("Pre gas ", transactionOptions)
                if (network === "zkSync" || network === "optimism" || network === 'linea' || network === 'mantle' || network === 'base' || network === 'aleph') transactionOptions.gasPrice = await this.web3.eth.getGasPrice();
                console.log("post gas ", transactionOptions)
                console.log(recipient, walletType, asset, message, transactionOptions);
                console.log(network, this.idriss);
                console.log({
                    recipient, walletType, asset, message, transactionOptions
                })
                result = await this.idriss.transferToIDriss(recipient, walletType, asset, message, transactionOptions);
            } catch (err) {
                console.log("error", err);
                // Transaction failed or user has denied
                // catch different errors?
                // code 4001 user denied
                if (err.code == 4001) {
                    console.log("Transaction denied.");
                    return false;
                } else {
                    throw err;
                }
            }
            return result;
        }
    },

    async multiSendToAnyone(recipients_) {
        console.log(this.provider);
        let network = "Polygon"
        console.log("Final recipients: ", recipients_)

        // switch to selected payment option's network
        // exchange if statement for suitable check depending on selected network in dropdown

        await this.switchNetwork(network);

        let polygonGas;
        try {
            if (network==="Polygon") {
                polygonGas = Math.round(1.05*(await this.web3.eth.getGasPrice()))
            }
        } catch {
            console.log("could not load polygon gas");
        }

        try{
            // create new idriss instance handling the correct network
            await this.prepareSendToAnyone(this.provider, "Polygon", this.apiKey)
        } catch (e) {
            console.log(e)
        }

        // exchanged for redundant multiple get accounts calls
        const selectedAccount = await this.idriss.getConnectedAccount();

        if (selectedAccount) {
            let result;

            try {
                const transactionOptions = {
                    from: selectedAccount,
                    ...(polygonGas && { gasPrice: polygonGas }),
                };
                result = await this.idriss.multitransferToIDriss(recipients_, transactionOptions);
            } catch (err) {
                console.log("error", err);
                // Transaction failed or user has denied
                // catch different errors?
                // code 4001 user denied
                if (err.code == 4001) {
                    console.log("Transaction denied.");
                    return false;
                } else {
                    throw err;
                }
            }
            return result;
        }
    },

    async switchtopolygon() {
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);
        const chainIdHex = this.web3.utils.toHex(POLYGON_CHAIN_ID);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != POLYGON_CHAIN_ID) {
            console.log("Switch to Polygon requested");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: chainIdHex }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: chainIdHex,
                                    chainName: "Polygon",
                                    rpcUrls: ["https://polygon-rpc.com/"],
                                    nativeCurrency: { name: "POL", symbol: "POL", decimals: 18 },
                                },
                            ],
                        });
                    } catch (addError) {
                        alert("Please add Polygon network to continue.");
                    }
                }
                console.log("Please switch to Polygon network.");
                throw "network";
            }
        }
    },
    async switchtoeth() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 1) {
            console.log("Switch to Ethereum Mainnet requested");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x1" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: "0x1",
                                    chainName: "Ethereum Mainnet",
                                    rpcUrls: ["https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161"],
                                },
                            ],
                        });
                    } catch (addError) {
                        alert("Please add Ethereum network to continue.");
                    }
                }
                console.log("Please switch to Ethereum Mainnet.");
                // disable continue buttons here or throw error
                throw "network";
            }
        }
    },
    async switchtobsc() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 56) {
            console.log("Switch to BSC requested");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x38" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                            method: "wallet_addEthereumChain",
                            params: [
                                {
                                    chainId: "0x38",
                                    chainName: "BSC",
                                    rpcUrls: ["https://bsc-dataseed.binance.org/"],
                                    nativeCurrency: { name: "BNB", symbol: "BNB", decimals: 18 },
                                },
                            ],
                        });
                    } catch (addError) {
                        alert("Please add Binance Smart Chain to continue.");
                    }
                }
                console.log("Please switch to BSC.");
                // disable continue buttons here
                throw "network";
            }
        }
    },
    async switchtozk() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 324) {
            console.log("Switch to zkSync Era requested");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x144" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0x144', chainName: 'zkSync Era', rpcUrls: ['https://mainnet.era.zksync.io'], nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add zkSync Era Mainnet to continue.");
                    }
                }
                console.log("Please switch to zkSync Era.");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    async switchtolinea() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 59144) {
            console.log("Switch to Linea requested");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0xe708" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0xe708', chainName: 'Linea', rpcUrls: ['https://rpc.linea.build'], blockExplorerUrls: ['https://explorer.linea.build'], nativeCurrency: {name: 'Ethereum', symbol: 'LineaETH', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add Linea Testnet to continue.");
                    }
                }
                console.log("Please switch to Linea.");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    async switchtooptimism() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 10) {
            console.log("Switch to Optimism");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0xa" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0xa', chainName: 'OP Mainnet', rpcUrls: ['https://mainnet.optimism.io'], blockExplorerUrls: ['https://optimistic.etherscan.io/'], nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add OP Mainnet to continue.");
                    }
                }
                console.log("Please switch to OP.");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    async switchtopgn() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 424) {
            console.log("Switch to PGN");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x1a8" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0x1a8', chainName: 'PGN (Public Goods Network)', rpcUrls: ['https://rpc.publicgoods.network'], blockExplorerUrls: ['https://explorer.publicgoods.network'], nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add PGN to continue.");
                    }
                }
                console.log("Please switch to PGN.");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    async switchtobase() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 8453) {
            console.log("Switch to Base");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x2105" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0x2105', chainName: 'Base', rpcUrls: ['https://mainnet.base.org'], blockExplorerUrls: ['https://basescan.org/'], nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add Base to continue.");
                    }
                }
                console.log("Please switch to Base.");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    async switchtoarbitrum() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 42161) {
            console.log("Switch to Arbitrum One");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0xa4b1" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0xa4b1', chainName: 'Arbitrum One', rpcUrls: ['https://arbitrum.llamarpc.com'], blockExplorerUrls: ['https://arbiscan.io/'], nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add Arbitrum One to continue.");
                    }
                }
                console.log("Please switch to Arbitrum One.");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    async switchtomantle() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 5000) {
            console.log("Switch to Mantle");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x1388" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0x1388', chainName: 'Mantle', rpcUrls: ['https://rpc.mantle.xyz'], blockExplorerUrls: ['https://explorer.mantle.xyz'], nativeCurrency: {name: 'Mantle', symbol: 'MNT', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add Mantle to continue.");
                    }
                }
                console.log("Please switch to Mantle.");
                // disable continue buttons here
                throw "network";
            }
        }
    },
    
    async switchtoaleph() {
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 41455) {
            console.log("Switch to Aleph");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0xa1ef" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0xa1ef', chainName: 'Aleph Zero EVM', rpcUrls: ['https://rpc.alephzero.raas.gelato.cloud'], blockExplorerUrls: ['https://evm-explorer.alephzero.org'], nativeCurrency: {name: 'AZERO', symbol: 'AZERO', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add Aleph Zero EVM to continue.");
                    }
                }
                console.log("Please switch to Aleph Zero EVM");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    async switchtoscroll() {
        //  rpc method?
        console.log("Checking chain...");
        const chainId = await this.web3.eth.getChainId();
        console.log(chainId);

        // check if correct chain is connected
        console.log("Connected to chain ", chainId);
        if (chainId != 534352) {
            console.log("Switch to Scroll");
            try {
                await this.provider.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: "0x82750" }],
                });
            } catch (switchError) {
                if (switchError.message === "JSON RPC response format is invalid") {
                    throw "network1";
                }
                // This error code indicates that the chain has not been added to MetaMask.
                if (switchError.code === 4902) {
                    try {
                        await this.provider.request({
                        method: 'wallet_addEthereumChain',
                        params: [{ chainId: '0x82750', chainName: 'Scroll', rpcUrls: ['https://rpc.scroll.io'], blockExplorerUrls: ['https://scrollscan.com/'], nativeCurrency: {name: 'Ethereum', symbol: 'ETH', decimals: 18}}],
                        });
                    } catch (addError) {
                        alert("Please add Scroll to continue.");
                    }
                }
                console.log("Please switch to Scroll.");
                // disable continue buttons here
                throw "network";
            }
        }
    },

    // load oracle price data
    async loadOracle(ticker) {
        let abiOracle = [
            {
                inputs: [
                    { internalType: "address", name: "_aggregator", type: "address" },
                    { internalType: "address", name: "_accessController", type: "address" },
                ],
                stateMutability: "nonpayable",
                type: "constructor",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "int256", name: "current", type: "int256" },
                    { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
                    { indexed: false, internalType: "uint256", name: "updatedAt", type: "uint256" },
                ],
                name: "AnswerUpdated",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "uint256", name: "roundId", type: "uint256" },
                    { indexed: true, internalType: "address", name: "startedBy", type: "address" },
                    { indexed: false, internalType: "uint256", name: "startedAt", type: "uint256" },
                ],
                name: "NewRound",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "address", name: "from", type: "address" },
                    { indexed: true, internalType: "address", name: "to", type: "address" },
                ],
                name: "OwnershipTransferRequested",
                type: "event",
            },
            {
                anonymous: false,
                inputs: [
                    { indexed: true, internalType: "address", name: "from", type: "address" },
                    { indexed: true, internalType: "address", name: "to", type: "address" },
                ],
                name: "OwnershipTransferred",
                type: "event",
            },
            { inputs: [], name: "acceptOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "accessController", outputs: [{ internalType: "contract AccessControllerInterface", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "aggregator", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "confirmAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "description", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
            {
                inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
                name: "getRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            { inputs: [{ internalType: "uint256", name: "_roundId", type: "uint256" }], name: "getTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "latestAnswer", outputs: [{ internalType: "int256", name: "", type: "int256" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "latestRound", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
            {
                inputs: [],
                name: "latestRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            { inputs: [], name: "latestTimestamp", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "owner", outputs: [{ internalType: "address payable", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "uint16", name: "", type: "uint16" }], name: "phaseAggregators", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
            { inputs: [], name: "phaseId", outputs: [{ internalType: "uint16", name: "", type: "uint16" }], stateMutability: "view", type: "function" },
            { inputs: [{ internalType: "address", name: "_aggregator", type: "address" }], name: "proposeAggregator", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "proposedAggregator", outputs: [{ internalType: "contract AggregatorV2V3Interface", name: "", type: "address" }], stateMutability: "view", type: "function" },
            {
                inputs: [{ internalType: "uint80", name: "_roundId", type: "uint80" }],
                name: "proposedGetRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            {
                inputs: [],
                name: "proposedLatestRoundData",
                outputs: [
                    { internalType: "uint80", name: "roundId", type: "uint80" },
                    { internalType: "int256", name: "answer", type: "int256" },
                    { internalType: "uint256", name: "startedAt", type: "uint256" },
                    { internalType: "uint256", name: "updatedAt", type: "uint256" },
                    { internalType: "uint80", name: "answeredInRound", type: "uint80" },
                ],
                stateMutability: "view",
                type: "function",
            },
            { inputs: [{ internalType: "address", name: "_accessController", type: "address" }], name: "setController", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [{ internalType: "address", name: "_to", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
            { inputs: [], name: "version", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        ];
        return await new oracleW3s[ticker].eth.Contract(abiOracle, oracleAddress[ticker]);
    },

    async loadERC20(address) {
        let abiERC20 = [
    {
        "constant": true,
        "inputs": [],
        "name": "name",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_spender",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "approve",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "totalSupply",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_from",
                "type": "address"
            },
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transferFrom",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "decimals",
        "outputs": [
            {
                "name": "",
                "type": "uint8"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [],
        "name": "symbol",
        "outputs": [
            {
                "name": "",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "name": "_to",
                "type": "address"
            },
            {
                "name": "_value",
                "type": "uint256"
            }
        ],
        "name": "transfer",
        "outputs": [
            {
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            },
            {
                "name": "_spender",
                "type": "address"
            }
        ],
        "name": "allowance",
        "outputs": [
            {
                "name": "",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "payable": true,
        "stateMutability": "payable",
        "type": "fallback"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "owner",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "spender",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Approval",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "name": "from",
                "type": "address"
            },
            {
                "indexed": true,
                "name": "to",
                "type": "address"
            },
            {
                "indexed": false,
                "name": "value",
                "type": "uint256"
            }
        ],
        "name": "Transfer",
        "type": "event"
    }
];
        return await new defaultWeb3.eth.Contract(abiERC20, address);
    },

    // calculate price in USD
    async getPrice(oracleContract) {
        let latestAnswer = oracleContract.methods.latestAnswer().call();
        let decimals = oracleContract.methods.decimals().call();
        return (await latestAnswer) / Math.pow(10, await decimals);
    },
    // calculate price in wei (amount needed to send to anyone)
    getAmount(sendToAnyoneValue, tokenPrice, decimals) {
        const BN = defaultWeb3.utils.BN;
        const ten = new BN(10);
        let decimalsTemp = new BN(decimals)
        let baseTemp = ten.pow(new BN(decimalsTemp));

        let decimalCountPrice = tokenPrice.includes('.') ? tokenPrice.split('.')[1].length : 0;
        let multiplierPrice = Math.pow(10, decimalCountPrice) || 1;
        let tokenPriceToInt = new BN(tokenPrice.replace('.', ''));

        let decimalCountValue = sendToAnyoneValue.includes('.') ? sendToAnyoneValue.split('.')[1].length : 0;
        let multiplierValue = Math.pow(10, decimalCountValue) || 1;
        let tokenValueToInt = new BN(sendToAnyoneValue.replace('.', ''));


        console.log(decimalCountValue)
        console.log(new BN(multiplierValue.toString()))

        return (new BN(multiplierPrice.toString())).mul(baseTemp).mul(tokenValueToInt).div(tokenPriceToInt).div(new BN(multiplierValue.toString()));
    },
};
