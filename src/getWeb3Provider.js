import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import {CoinbaseWalletProvider} from "@depay/coinbase-wallet-sdk"

import metamaskLogo from "!!url-loader!./img/metamask.svg"
import tallyLogo from "!!url-loader!./img/tally.svg"
import coinbaseLogo from "!!url-loader!./img/coinbase.svg"
import Web3Modal from "web3modal";
const tallyOpts= {
    "custom-tally": {
        display: {
            logo: tallyLogo,
                name: "Tally",
                description: "Connect to your Tally Ho! Wallet",
        },
        package: true,
            connector: async () => {
            if (!window.ethereum?.isTally) {
                window.open("https://tally.cash/community-edition", '_blank'); // <-- LOOK HERE
                return;
            }

            let provider = null;
            if (typeof window.ethereum !== 'undefined') {

                provider = window.ethereum
                try {
                    await provider.request({ method: 'eth_requestAccounts' });
                } catch (error) {
                    throw new Error("User Rejected");
                }
            } else {
                throw new Error("No Tally Ho! Wallet found");
            }
            console.log("Tally provider", provider);
            return provider;
        },
    },
};
const walletConnectOpts= {
    walletconnect: {
        package: WalletConnectProvider,
            options: {
            rpc: {
                1: 'https://eth-mainnet.alchemyapi.io/v2/NcZapwC9N6OhvtRKvjGhc23st5VmG2hB'
            },
            network: "mainnet",
        }
    }
};
const metaMaskOpts= {
    "custom-metamask": {
        display: {
            logo: metamaskLogo,
                name: "MetaMask",
                description: "Connect to your MetaMask Wallet"
        },
        package: true,
            connector: async () => {
            if (!window.ethereum?.isMetaMask) {
                window.open("https://metamask.io/download/", '_blank'); // <-- LOOK HERE
                return;
            }

            let provider = null;
            if (typeof window.ethereum !== 'undefined') {
                let providers = window.ethereum.providers;
                if (providers) {
                    provider = providers.find(p => p.isMetaMask);
                } else {
                    provider = window.ethereum
                }
                try {
                    await provider.request({method: 'eth_requestAccounts'});
                } catch (error) {
                    throw new Error("User Rejected");
                }
            } else {
                throw new Error("No MetaMask Wallet found");
            }
            console.log("MetaMask provider", provider);
            return provider;
        }
    }
};
const walletLinkOpts= {
    'custom-walletlink': {
        display: {
            logo: coinbaseLogo,
                name: 'Coinbase',
                description: 'Scan with WalletLink to connect',
        },
        options: {
            appName: 'IDriss', // Your app name
                rpc: "https://eth-mainnet.alchemyapi.io/v2/NcZapwC9N6OhvtRKvjGhc23st5VmG2hB",
                chainId: 1
        },
        package: WalletLink,
            connector: async (_, options) => {
            const {appName, networkUrl, chainId} = options
            const walletLink = new WalletLink({
                appName
            });
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
            await provider.enable();
            return provider;
        },
    }
}

const providerOptions={
        ...walletConnectOpts,
        ...walletLinkOpts,
        ...metaMaskOpts,
        ...tallyOpts
    }


export async function getProvider() {
    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: false, // optional
        providerOptions: providerOptions, // required
        disableInjectedProvider: true,
    });
    await web3Modal.clearCachedProvider();
    let provider
    try {
        provider = await web3Modal.connect();
        console.log({provider})
    } catch (ex) {
        console.error(ex)
    }
    if (!provider) {
        provider = window.ethereum?.providers[0]
    }
    if (!provider) {
        window.open('https://metamask.io/download/')
    }
    return provider;
}