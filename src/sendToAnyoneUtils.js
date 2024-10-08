import getAlchemyAPI from "./getAlchemyApi";
import usdc from "!!url-loader!./img/usdc_logo.png"
import rvlt from "!!url-loader!./img/rvlt.png"
import bank from "!!url-loader!./img/bank.png"
import cult from "!!url-loader!./img/cult.png"
import doge from "!!url-loader!./img/doge.png"
import bnb from "!!url-loader!./img/bnb.png"
import weth from "!!url-loader!./img/weth.png"
import prime from "!!url-loader!./img/prime.png"
import pol from "!!url-loader!./img/pol.png"
import eth from "!!url-loader!./img/eth_logo.png"
import usdt from "!!url-loader!./img/usdt.svg"
import ocean from "!!url-loader!./img/ocean.png"
import ghst from "!!url-loader!./img/ghst.png"
import degen from "!!url-loader!./img/degen.png"
import uni from "!!url-loader!./img/uni.svg"
import aave from "!!url-loader!./img/aave.svg"
import cel from "!!url-loader!./img/cel.svg"
import dai from "!!url-loader!./img/dai.svg"
import hex from "!!url-loader!./img/hex.svg"
import link_logo from "!!url-loader!./img/link_logo.svg"
import mana from "!!url-loader!./img/mana.svg"
import quick from "!!url-loader!./img/quick.svg"
import tel from "!!url-loader!./img/tel.svg"
import op from "!!url-loader!./img/op.png"
import mnt from "!!url-loader!./img/mantle.ico"
import azero from "!!url-loader!./img/azero.png"
import custom from "!!url-loader!./img/custom.png"

const tokens = [
    {
        chainId: 1,
        network: "ETH",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 1,
        network: "ETH",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: usdc,
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
    },
    {
        chainId: 1,
        network: "ETH",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: dai,
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
    },
    {
        chainId: 1,
        network: "ETH",
        name: "Tether",
        symbol: "USDT",
        decimals: 6,
        logoURI: usdt,
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
    },
    {
        chainId: 1,
        network: "ETH",
        name: "Echelon Prime",
        symbol: "PRIME",
        decimals: 18,
        logoURI: prime,
        address: "0xb23d80f5FefcDDaa212212F028021B41DEd428CF",
    },
    {
        chainId: 1,
        network: "ETH",
        name: "Cult DAO",
        symbol: "CULT",
        decimals: 18,
        logoURI: cult,
        address: "0xf0f9d895aca5c8678f706fb8216fa22957685a13",
    },
    {
        chainId: 1,
        network: "ETH",
        name: "Bankless DAO",
        symbol: "BANK",
        decimals: 18,
        logoURI: bank,
        address: "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
    },
    {
        chainId: 1,
        network: "ETH",
        name: "Aavegotchi",
        symbol: "GHST",
        decimals: 18,
        logoURI: ghst,
        address: "0x3F382DbD960E3a9bbCeaE22651E88158d2791550",
    },
    {
        chainId: 10,
        network: "optimism",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 10,
        network: "optimism",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: usdc,
        address: "0x0b2C639c533813f4Aa9D7837CAf62653d097Ff85",
    },
    {
        chainId: 10,
        network: "optimism",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: dai,
        address: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
    },
    {
        chainId: 10,
        network: "optimism",
        name: "Optimsim",
        symbol: "OP",
        decimals: 18,
        logoURI: op,
        address: "0x4200000000000000000000000000000000000042",
    },
    {
        chainId: 56,
        network: "BSC",
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
        logoURI: bnb,
    },
    {
        chainId: 56,
        network: "BSC",
        name: "USDC",
        symbol: "USDC",
        decimals: 18,
        logoURI: usdc,
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
    },
    {
        chainId: 56,
        network: "BSC",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: dai,
        address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
    },
    {
        chainId: 56,
        network: "BSC",
        name: "ETH on BSC",
        symbol: "WETH",
        decimals: 18,
        logoURI: weth,
        address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
    },
    {
        chainId: 56,
        network: "BSC",
        name: "Dogecoin",
        symbol: "DOGE",
        decimals: 8,
        logoURI: doge,
        address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Polygon",
        symbol: "POL",
        decimals: 18,
        logoURI: pol,
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: usdc,
        address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: dai,
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Tether",
        symbol: "USDT",
        decimals: 6,
        logoURI: usdt,
        address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "ETH on Polygon",
        symbol: "WETH",
        decimals: 18,
        logoURI: weth,
        address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Revolt 2 Earn",
        symbol: "RVLT",
        decimals: 18,
        logoURI: rvlt,
        address: "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Bankless DAO",
        symbol: "BANK",
        decimals: 18,
        logoURI: bank,
        address: "0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Aavegotchi",
        symbol: "GHST",
        decimals: 18,
        logoURI: ghst,
        address: "0x385eeac5cb85a38a9a07a70c73e0a3271cfb54a7",
    },
    {
        chainId: 324,
        network: "zkSync",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 324,
        network: "zkSync",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: usdc,
        address: "0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4",
    },
    {
        chainId: 424,
        network: "pgn",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 5000,
        network: "mantle",
        name: "Mantle",
        symbol: "MNT",
        decimals: 18,
        logoURI: mnt,
    },
    {
        chainId: 8453,
        network: "base",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 8453,
        network: "base",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: usdc,
        address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    },
    {
        chainId: 8453,
        network: "base",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: dai,
        address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    },
    {
        chainId: 8453,
        network: "base",
        name: "Echelon Prime",
        symbol: "PRIME",
        decimals: 18,
        logoURI: prime,
        address: "0xfA980cEd6895AC314E7dE34Ef1bFAE90a5AdD21b",
    },
    {
        chainId: 8453,
        network: "base",
        name: "Degen",
        symbol: "DEGEN",
        decimals: 18,
        logoURI: degen,
        address: "0x4ed4E862860beD51a9570b96d89aF5E1B0Efefed",
    },
    {
        chainId: 41455,
        network: "aleph",
        name: "AZERO",
        symbol: "AZERO",
        decimals: 18,
        logoURI: azero,
    },
    {
        chainId: 42161,
        network: "arbitrum",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 59144,
        network: "linea",
        name: "LineaETH",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 59144,
        network: "linea",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: usdc,
        address: "0x176211869cA2b568f2A7D4EE941E073a821EE1ff"
    },
    {
        chainId: 59144,
        network: "linea",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: dai,
        address: "0x4AF15ec2A0BD43Db75dd04E62FAA3B8EF36b00d5"
    },
    {
        chainId: 534352,
        network: "scroll",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: eth,
    },
    {
        chainId: 534352,
        network: "scroll",
        name: "USDC",
        symbol: "USDC",
        decimals: 6,
        logoURI: usdc,
        address: "0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4",
    },
    {
        chainId: 534352,
        network: "scroll",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: dai,
        address: "0xcA77eB3fEFe3725Dc33bccB54eDEFc3D9f764f97",
    },
    {
    chainId: 137,
    name: "Custom Token",
    symbol: "custom",
    network: "Polygon",
    decimals: 18,
    address: "custom",
    logoURI: custom
  },
];

const multiToken = [
    {
    chainId: 137,
    name: "Telcoin",
    symbol: "TEL",
    network: "Polygon",
    decimals: 2,
    address: "0xdf7837de1f2fa4631d716cf2502f8b230f1dcc32",
    logoURI: tel
  },
  {
    chainId: 137,
    name: "Aave - PoS",
    symbol: "AAVE",
    network: "Polygon",
    decimals: 18,
    address: "0xd6df932a45c0f255f85145f286ea0b292b21c90b",
    logoURI: aave
  },
  {
    chainId: 137,
    name: "ChainLink Token",
    symbol: "LINK",
    network: "Polygon",
    decimals: 18,
    address: "0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39",
    logoURI: link_logo
  },
  {
    chainId: 137,
    name: "Uniswap - PoS",
    symbol: "UNI",
    network: "Polygon",
    decimals: 18,
    address: "0xb33eaad8d922b1083446dc23f610c2567fb5180f",
    logoURI: uni
  },
  {
    chainId: 137,
    name: "Quickswap",
    symbol: "QUICK",
    network: "Polygon",
    decimals: 18,
    address: "0x831753dd7087cac61ab5644b308642cc1c33dc13",
    logoURI: quick
  },
  {
    chainId: 137,
    name: "Celsius",
    symbol: "CEL",
    network: "Polygon",
    decimals: 4,
    address: "0xD85d1e945766Fea5Eda9103F918Bd915FbCa63E6",
    logoURI: cel
  },
  {
    chainId: 137,
    name: "HEX",
    symbol: "HEX",
    network: "Polygon",
    decimals: 8,
    address: "0x23D29D30e35C5e8D321e1dc9A8a61BFD846D4C5C",
    logoURI: hex
  },
  {
    chainId: 137,
    name: "Decentraland MANA",
    symbol: "MANA",
    network: "Polygon",
    decimals: 18,
    address: "0xA1c57f48F0Deb89f569dFbE6E2B7f46D33606fD4",
    logoURI: mana
  },
  {
    chainId: 137,
    name: "Ocean Token",
    symbol: "OCEAN",
    network: "Polygon",
    decimals: 18,
    address: "0x282d8efce846a88b159800bd4130ad77443fa1a1",
    logoURI: ocean
  }
];

const customNFT = {
                    "name": "Custom NFT",
                    "address": "custom",
                    "id": "custom",
                    "type": "ERC1155",
                    "image": custom,
                    "network": "Polygon",
                    "balance": "Input Address"
                }

const regPh = /^(\+\(?\d{1,4}\s?)\)?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
const regM = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const regT = /^@[a-zA-Z0-9_]{1,15}$/;

const feeQuotes = {
    singleToken: "1% supplies IDriss’ treasury",
    singleNFT: "$1 supplies IDriss’ treasury",
    multiNonNative: "$1 per recipient supplies IDriss’ treasury",
    singleNRPol: "1% (min. $1) supplies IDriss’ treasury",
    multiNRPol: "1% (min. $1) per recipient supplies IDriss’ treasury",
    multiMixed: "A small fee supplies IDriss’ treasury"
}

const approvalMessages = {
    mixedNative: "Confirm two transactions",
    mixedNonNative: "Confirm two approvals and two transactions",
    multiNative: "Confirm this transaction",
    multiNonNative: "Confirm one approval and one transaction"
}

const getNFTMetadata = (address, tokenId, apiKey, network) => {
    if (WEBPACK_MODE === "production") {
        const api = getAlchemyAPI(apiKey, network);
        return api.nft.getNftMetadata(address, tokenId);
    }
    return Promise.resolve(testNFTs.ownedNfts[0]);
};

const getNFTsForAddress = (address, apiKey, network) => {
    if (WEBPACK_MODE === "production") {
        const api = getAlchemyAPI(apiKey, network);
        return api.nft.getNftsForOwner(address);
    }
    return Promise.resolve(testNFTs);
};

const testNFTs = {
    ownedNfts: [
        {
            contract: {
                address: DEFAULT_NFT_CONTRACT_ADDRESS,
            },
            id: {
                tokenId: "1",
                tokenMetadata: {
                    tokenType: "ERC721",
                },
            },
            title: "DuskBreaker #1",
            description:
                "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
            tokenUri: {
                raw: "https://duskbreakers.gg/api/breakers/1",
                gateway: "https://duskbreakers.gg/api/breakers/1",
            },
            media: [
                {
                    raw: "https://duskbreakers.gg/breaker_images/1.png",
                    gateway: "https://duskbreakers.gg/breaker_images/1.png",
                },
            ],
            metadata: {
                name: "DuskBreaker #1",
                description:
                    "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
                image: "https://duskbreakers.gg/breaker_images/1.png",
                external_url: "https://duskbreakers.gg",
                attributes: [
                    {
                        value: "Big Smile (Purple)",
                        trait_type: "Mouth",
                    },
                    {
                        value: "Yellow",
                        trait_type: "Background",
                    },
                ],
            },
            timeLastUpdated: "2022-02-16T22:52:54.719Z",
        },
        {
            contract: {
                address: DEFAULT_NFT_CONTRACT_ADDRESS,
            },
            id: {
                tokenId: "2",
                tokenMetadata: {
                    tokenType: "ERC721",
                },
            },
            title: "DuskBreaker #2",
            description:
                "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
            tokenUri: {
                raw: "https://duskbreakers.gg/api/breakers/2",
                gateway: "https://duskbreakers.gg/api/breakers/2",
            },
            media: [
                {
                    raw: "https://duskbreakers.gg/breaker_images/2.png",
                    gateway: "https://duskbreakers.gg/breaker_images/2.png",
                },
            ],
            metadata: {
                name: "DuskBreaker #2",
                description:
                    "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
                image: "https://duskbreakers.gg/breaker_images/2.png",
                external_url: "https://duskbreakers.gg",
                attributes: [
                    {
                        value: "Big Smile (Purple)",
                        trait_type: "Mouth",
                    },
                    {
                        value: "Yellow",
                        trait_type: "Background",
                    },
                ],
            },
            timeLastUpdated: "2022-02-16T22:52:54.719Z",
        },
        {
            contract: {
                address: DEFAULT_ERC1155_CONTRACT_ADDRESS,
            },
            id: {
                tokenId: "0x03",
                tokenMetadata: {
                    tokenType: "ERC1155",
                },
            },
            balance: "1",
            title: "Zapper Terminator (Gold)",
            description: "Though they can take on a humanoid form in meat-space, Terminators have yet to be observed sleeping, or taking a rest of any kind...",
            tokenUri: {
                raw: "ipfs://QmSknFJz1Z16xKGBJPF41DPsCzyzCYqBD8ZmVmnyaN1Vw4/20",
                gateway: "https://ipfs.io/ipfs/QmSknFJz1Z16xKGBJPF41DPsCzyzCYqBD8ZmVmnyaN1Vw4/20",
            },
            media: [
                {
                    raw: "ipfs://QmYzbTvmPUgabLHukU7uDGnSvgTJt5gMkrNHctEbrLVM6h/20.webm",
                    gateway: "https://ipfs.io/ipfs/QmYzbTvmPUgabLHukU7uDGnSvgTJt5gMkrNHctEbrLVM6h/20.webm",
                },
            ],
            metadata: {
                name: "Zapper Terminator (Gold)",
                image: "ipfs://QmYzbTvmPUgabLHukU7uDGnSvgTJt5gMkrNHctEbrLVM6h/20.webm",
                description: "Though they can take on a humanoid form in meat-space, Terminators have yet to be observed sleeping, or taking a rest of any kind...",
                attributes: [
                    {
                        value: "2",
                        trait_type: "Generation",
                    },
                    {
                        value: "Gold",
                        trait_type: "Rarity",
                    },
                    {
                        value: "Zapper Terminator",
                        trait_type: "Name",
                    },
                ],
                id: "3",
                avatar: "ipfs://QmZXPtGXK3pikNCRNUvjfaGeTwY5ja5zP2Zd2ZG9Q2zAAh/20.png",
            },
            timeLastUpdated: "2022-10-18T09:12:04.993Z",
            contractMetadata: {
                name: "Zapper NFT V2",
                symbol: "ZPR NFT",
                tokenType: "ERC1155",
            },
        },
    ],
    totalCount: 3,
    blockHash: "0xeb2d26af5b6175344a14091777535a2cb21c681665a734a8285f889981987630",
};

const walletTypeDefault = {
    coin: "ETH",
    network: "evm",
    walletTag: "Public ETH",
};

const coinsTags = {
    ETH: ["Metamask ETH", "Binance ETH", "Coinbase ETH", "Exchange ETH", "Private ETH", "Essentials ETH", "Rainbow ETH", "Argent ETH", "Tally ETH", "Trust ETH", "Public ETH"],
    BNB: ["Metamask BNB", "Essentials BNB"],
    USDT: ["Metamask USDT", "Binance USDT", "Coinbase USDT", "Exchange USDT", "Private USDT", "Essentials USDT"],
    USDC: ["Metamask USDC", "Binance USDC", "Coinbase USDC", "Exchange USDC", "Private USDC", "Essentials USDC"],
    ELA: ["Essentials ELA SC"],
    MATIC: ["Essentials MATIC"],
    ERC20: ["ERC20"],
};

function getCoin(walletTag) {
    return Object.keys(coinsTags).find((key) => coinsTags[key].includes(walletTag));
}

const tokenABI = [
    { inputs: [{ internalType: "address", name: "account", type: "address" }], name: "balanceOf", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "decimals", outputs: [{ internalType: "uint8", name: "", type: "uint8" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "name", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
    { inputs: [], name: "symbol", outputs: [{ internalType: "string", name: "", type: "string" }], stateMutability: "view", type: "function" },
];

const erc1155Abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"indexed":false,"internalType":"uint256[]","name":"values","type":"uint256[]"}],"name":"TransferBatch","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"id","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"TransferSingle","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"value","type":"string"},{"indexed":true,"internalType":"uint256","name":"id","type":"uint256"}],"name":"URI","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"accounts","type":"address[]"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"}],"name":"balanceOfBatch","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256[]","name":"ids","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeBatchTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"uri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]

async function loadToken(web3, tokenAddress) {
    return await new web3.eth.Contract(tokenABI, tokenAddress);
}

async function loadNFT(web3, tokenAddress) {
    return await new web3.eth.Contract(erc1155Abi, tokenAddress);
}

export { tokens, multiToken, getNFTsForAddress, walletTypeDefault, getCoin, loadToken, loadNFT, customNFT, feeQuotes, approvalMessages, regPh, regM, regT };
