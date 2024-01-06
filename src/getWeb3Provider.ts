import { createModal } from "./modal";
import {
    type CombinedProvider,
    type Provider,
} from "@web3modal/scaffold-utils/ethers";

const modal = createModal();

export async function getProvider() {
    // web3modal sdk "caches" the connection but we disconnect user on purpose every time he re-visits the page
    if (modal.getIsConnected()) {
        modal.disconnect();
    }
    modal.open();

    // await for provider event
    // TODO: add some timeout so it's not a never ending promise
    const provider: CombinedProvider | Provider = await new Promise((res) => {
        modal.subscribeProvider((providerEvent) => {
            if (providerEvent.isConnected && providerEvent.provider) {
                return res(providerEvent.provider);
            }
        });
    });

    modal.close();
    return provider;
}
