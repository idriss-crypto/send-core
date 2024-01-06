import { isDesktop } from "../utils";

import { desktopFeaturedWalletIds, mobileFeaturedWalletIds } from "./constants";

export const getFeaturedWalletIds = () => {
  return isDesktop() ? desktopFeaturedWalletIds : mobileFeaturedWalletIds;
};
