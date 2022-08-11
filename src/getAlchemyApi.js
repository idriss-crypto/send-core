import { Alchemy, Network } from "alchemy-sdk";

let api

export default function getAlchemyAPI (apiKey) {
    if (!api) {
        const config = {
            apiKey: apiKey,
            network: Network.MATIC_MAINNET,
        };
        api = new Alchemy(config);
    }
    return api
}