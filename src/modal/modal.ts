import { defaultConfig, createWeb3Modal } from "@web3modal/ethers5";

import { metadata, chains } from "./constants";
import { getFeaturedWalletIds } from "./utils"

export const createModal = () => {
  return createWeb3Modal({
    ethersConfig: defaultConfig({
      metadata,
    }),
    chains,
    featuredWalletIds: getFeaturedWalletIds(),
    projectId: WALLET_CONNECT_ID,
  });
};
