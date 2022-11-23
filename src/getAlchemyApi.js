import { Alchemy, Network } from "alchemy-sdk";

let api

export default function getAlchemyAPI (apiKey, network) {
    let apiNetwork
    switch (network) {
        // BSC not supported by Alchemy api
        // case 'BSC':
        //     apiNetwork =
        //     break
        case 'Ethereum':
            apiNetwork = Network.ETH_MAINNET
            break
        default:
            apiNetwork = Network.MATIC_MAINNET
    }

    if (!api) {
        const config = {
            apiKey: apiKey,
            network: Network.MATIC_MAINNET,
        };
        api = new Alchemy(config);
    }
    return api
}