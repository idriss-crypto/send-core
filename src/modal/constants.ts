// Required by web3modal, it is also visible in Metamask mobile app in confirmation popups etc.
export const metadata = {
  name: "IDriss",
  description: "IDriss",
  url: "https://idriss.xyz/",
  icons: ["https://www.idriss.xyz/static/images/IDriss_Logo.svg"],
};

// we don't allow to switch chains anyway because the modal is only used for connection purposes but the library still requires at least 1 chain, chain switching is handled internally in our code.
export const chains = [
  {
    chainId: Number(POLYGON_CHAIN_ID),
    name: "Polygon",
    currency: "POL",
    explorerUrl: POLYGON_BLOCK_EXPLORER_ADDRESS,
    rpcUrl: POLYGON_RPC_ENDPOINT,
  },
];

export const desktopFeaturedWalletIds = [
  "cf14642fb8736a99b733ada71863241c823743b16e2a822b3dba24e2fa25014d",
  "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
  "971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709",
];
export const mobileFeaturedWalletIds = [];
