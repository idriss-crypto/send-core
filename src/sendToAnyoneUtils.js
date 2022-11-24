import getAlchemyAPI from "./getAlchemyApi";

const tokens = [
    {
        chainId: 1,
        network: "ETH",
        name: "Ethereum",
        symbol: "ETH",
        decimals: 18,
        logoURI: "https://s2.coinmarketcap.com/static/img/coins/32x32/1027.png",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18,
        logoURI: "https://polygonscan.com/token/images/matic_32.png",
    },
    {
        chainId: 56,
        network: "BSC",
        name: "BNB",
        symbol: "BNB",
        decimals: 18,
        logoURI: "https://s2.coinmarketcap.com/static/img/coins/32x32/1839.png",
    },
    {
        address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
        chainId: 1,
        network: "ETH",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        logoURI: "https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 6,
        address: "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",
        logoURI: "https://wallet-asset.matic.network/img/tokens/usdc.svg",
    },
    {
        chainId: 56,
        network: "BSC",
        name: "USD Coin",
        symbol: "USDC",
        decimals: 18,
        address: "0x8AC76a51cc950d9822D68b83fE1Ad97B32Cd580d",
        logoURI: "https://wallet-asset.matic.network/img/tokens/usdc.svg",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "ETH on Polygon",
        symbol: "WETH",
        decimals: 18,
        address: "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619",
        logoURI: "https://polygonscan.com/token/images/wETH_32.png",
    },
    {
        chainId: 56,
        network: "BSC",
        name: "ETH on BSC",
        symbol: "WETH",
        decimals: 18,
        address: "0x2170Ed0880ac9A755fd29B2688956BD959F933F8",
        logoURI: "https://polygonscan.com/token/images/wETH_32.png",
    },
    {
        address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
        chainId: 1,
        network: "ETH",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    },
    {
        address: "0x1AF3F329e8BE154074D8769D1FFa4eE058B1DBc3",
        chainId: 56,
        network: "BSC",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        logoURI: "https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Dai",
        symbol: "DAI",
        decimals: 18,
        address: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
        logoURI: "https://wallet-asset.matic.network/img/tokens/dai.svg",
    },
    {
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        chainId: 1,
        network: "ETH",
        name: "Tether",
        symbol: "USDT",
        decimals: 6,
        logoURI: "https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
    },
    {
        chainId: 137,
        network: "Polygon",
        name: "Tether",
        symbol: "USDT",
        decimals: 6,
        address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
        logoURI: "https://wallet-asset.matic.network/img/tokens/usdt.svg",
    },
    {
        name: "Dogecoin",
        symbol: "DOGE",
        address: "0xbA2aE424d960c26247Dd6c32edC70B295c744C43",
        chainId: 56,
        network: "BSC",
        decimals: 8,
        logoURI: "https://tokens.pancakeswap.finance/images/0xbA2aE424d960c26247Dd6c32edC70B295c744C43.png",
    },
    {
        name: "Cult DAO",
        symbol: "CULT",
        address: "0xf0f9d895aca5c8678f706fb8216fa22957685a13",
        chainId: 1,
        network: "ETH",
        decimals: 18,
        logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/17742.png",
    },
    {
        name: "Revolt 2 Earn",
        symbol: "RVLT",
        address: "0xf0f9D895aCa5c8678f706FB8216fa22957685A13",
        chainId: 137,
        network: "Polygon",
        decimals: 18,
        logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/19893.png",
    },
    {
        name: "Bankless DAO",
        symbol: "BANK",
        address: "0xdb7cb471dd0b49b29cab4a1c14d070f27216a0ab",
        chainId: 137,
        network: "Polygon",
        decimals: 18,
        logoURI: "https://assets.coingecko.com/coins/images/15227/small/j4WEJrwU.png?1622615796",
    },
    {
        name: "Bankless DAO",
        symbol: "BANK",
        address: "0x2d94aa3e47d9d5024503ca8491fce9a2fb4da198",
        chainId: 1,
        network: "ETH",
        decimals: 18,
        logoURI: "https://assets.coingecko.com/coins/images/15227/small/j4WEJrwU.png?1622615796",
    },
];

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
    "ownedNfts": [
        {
            "contract": {
                "address": DEFAULT_NFT_CONTRACT_ADDRESS
            },
            "id": {
                "tokenId": "1",
                "tokenMetadata": {
                    "tokenType": "ERC721"
                }
            },
            "title": "DuskBreaker #1",
            "description": "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
            "tokenUri": {
                "raw": "https://duskbreakers.gg/api/breakers/1",
                "gateway": "https://duskbreakers.gg/api/breakers/1"
            },
            "media": [
                {
                    "raw": "https://duskbreakers.gg/breaker_images/1.png",
                    "gateway": "https://duskbreakers.gg/breaker_images/1.png"
                }
            ],
            "metadata": {
                "name": "DuskBreaker #1",
                "description": "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
                "image": "https://duskbreakers.gg/breaker_images/1.png",
                "external_url": "https://duskbreakers.gg",
                "attributes": [
                    {
                        "value": "Big Smile (Purple)",
                        "trait_type": "Mouth"
                    },
                    {
                        "value": "Yellow",
                        "trait_type": "Background"
                    }
                ]
            },
            "timeLastUpdated": "2022-02-16T22:52:54.719Z"
        },
        {
            "contract": {
                "address": DEFAULT_NFT_CONTRACT_ADDRESS
            },
            "id": {
                "tokenId": "2",
                "tokenMetadata": {
                    "tokenType": "ERC721"
                }
            },
            "title": "DuskBreaker #2",
            "description": "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
            "tokenUri": {
                "raw": "https://duskbreakers.gg/api/breakers/2",
                "gateway": "https://duskbreakers.gg/api/breakers/2"
            },
            "media": [
                {
                    "raw": "https://duskbreakers.gg/breaker_images/2.png",
                    "gateway": "https://duskbreakers.gg/breaker_images/2.png"
                }
            ],
            "metadata": {
                "name": "DuskBreaker #2",
                "description": "Breakers have the honor of serving humanity through their work on The Dusk. They are part of a select squad of 10,000 recruits who spend their days exploring a mysterious alien spaceship filled with friends, foes, and otherworldly technology.",
                "image": "https://duskbreakers.gg/breaker_images/2.png",
                "external_url": "https://duskbreakers.gg",
                "attributes": [
                    {
                        "value": "Big Smile (Purple)",
                        "trait_type": "Mouth"
                    },
                    {
                        "value": "Yellow",
                        "trait_type": "Background"
                    }
                ]
            },
            "timeLastUpdated": "2022-02-16T22:52:54.719Z"
        },
        {
            "contract": {
                "address": DEFAULT_ERC1155_CONTRACT_ADDRESS
            },
            "id": {
                "tokenId": "0x03",
                "tokenMetadata": {
                    "tokenType": "ERC1155"
                }
            },
            "balance": "1",
            "title": "Zapper Terminator (Gold)",
            "description": "Though they can take on a humanoid form in meat-space, Terminators have yet to be observed sleeping, or taking a rest of any kind...",
            "tokenUri": {
                "raw": "ipfs://QmSknFJz1Z16xKGBJPF41DPsCzyzCYqBD8ZmVmnyaN1Vw4/20",
                "gateway": "https://ipfs.io/ipfs/QmSknFJz1Z16xKGBJPF41DPsCzyzCYqBD8ZmVmnyaN1Vw4/20"
            },
            "media": [
                {
                    "raw": "ipfs://QmYzbTvmPUgabLHukU7uDGnSvgTJt5gMkrNHctEbrLVM6h/20.webm",
                    "gateway": "https://ipfs.io/ipfs/QmYzbTvmPUgabLHukU7uDGnSvgTJt5gMkrNHctEbrLVM6h/20.webm"
                }
            ],
            "metadata": {
                "name": "Zapper Terminator (Gold)",
                "image": "ipfs://QmYzbTvmPUgabLHukU7uDGnSvgTJt5gMkrNHctEbrLVM6h/20.webm",
                "description": "Though they can take on a humanoid form in meat-space, Terminators have yet to be observed sleeping, or taking a rest of any kind...",
                "attributes": [
                    {
                        "value": "2",
                        "trait_type": "Generation"
                    },
                    {
                        "value": "Gold",
                        "trait_type": "Rarity"
                    },
                    {
                        "value": "Zapper Terminator",
                        "trait_type": "Name"
                    }
                ],
                "id": "3",
                "avatar": "ipfs://QmZXPtGXK3pikNCRNUvjfaGeTwY5ja5zP2Zd2ZG9Q2zAAh/20.png"
            },
            "timeLastUpdated": "2022-10-18T09:12:04.993Z",
            "contractMetadata": {
                "name": "Zapper NFT V2",
                "symbol": "ZPR NFT",
                "tokenType": "ERC1155"
            }
        }
    ],
    "totalCount": 3,
    "blockHash": "0xeb2d26af5b6175344a14091777535a2cb21c681665a734a8285f889981987630",
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
    return Object.keys(coinsTags).find(key => coinsTags[key].includes(walletTag))
}

export { tokens, getNFTsForAddress, walletTypeDefault, getCoin };