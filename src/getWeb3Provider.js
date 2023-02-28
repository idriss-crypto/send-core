import WalletConnectProvider from "@walletconnect/web3-provider/dist/umd/index.min.js";
import {CoinbaseWalletProvider} from "@depay/coinbase-wallet-sdk"
import { Magic } from 'magic-sdk';
import { ConnectExtension } from '@magic-ext/connect';
import Web3 from "web3/dist/web3.min.js";

import metamaskLogo from "!!url-loader!./img/metamask.svg"
import tallyLogo from "!!url-loader!./img/tally.svg"
import coinbaseLogo from "!!url-loader!./img/coinbase.svg"
import magicLogo from "!!url-loader!./img/magic.svg"
import Web3Modal from "web3modal";

const WCProvider = WalletConnectProvider.default;

const customNodePolygon = {
    rpcUrl: POLYGON_RPC_ENDPOINT,
    chainId: POLYGON_CHAIN_ID,
};

const tallyOpts= {
    "custom-tally": {
        display: {
            logo: tallyLogo,
            name: "Tally",
            description: "Connect to your Tally Ho! Wallet",
        },
        package: true,
        connector: async () => {
            if (!isTallyInstalled()) {
                    window.open("https://tally.cash/community-edition", '_blank'); // <-- LOOK HERE
                    return;
                }
            let provider = null;
            if (typeof window.ethereum !== 'undefined') {
                let providers = window.ethereum.providers;
                if (providers){
                    provider = providers.find(p => p.isTally);
                } else {
                    provider = window.ethereum
                }
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
        package: WCProvider,
        options: {
            rpc: {
                137: POLYGON_RPC_ENDPOINT,
            },
            chainId: 137,
        },
    },
};

const metaMaskOpts= {
    "custom-metamask": {
        display: {
            logo: metamaskLogo,
            name: "MetaMask",
            description: "Connect to your MetaMask Wallet",
        },
        package: true,
        connector: async () => {
            if (!isMetaMaskInstalled()) {
                window.open("https://metamask.io/download/", "_blank"); // <-- LOOK HERE
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
            name: "Coinbase",
            description: "Scan with WalletLink to connect",
        },
        options: {
            appName: "IDriss", // Your app name
            rpc: "https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
            chainId: 1,
        },
        package: WalletLink,
        connector: async (_, options) => {
            const { appName, networkUrl, chainId } = options;
            const walletLink = new WalletLink({
                appName,
            });
            const provider = walletLink.makeWeb3Provider(networkUrl, chainId);
            await provider.enable();
            return provider;
        },
    },
};
const magicLinkOpts= {
    'custom-magicConnect': {
        display: {
            logo: magicLogo,
            name: "Magic Connect",
            description: "Login with Magic Connect",
        },
        options: {
            rpc: {
                137: POLYGON_RPC_ENDPOINT,
            },
            chainId: 137,
        },
        package: true,
        connector: async (_, options) => {
            const { appName, networkUrl, chainId } = options;
            const magic = new Magic(MAGIC_API, {
                extensions: [new ConnectExtension()],
                network: customNodePolygon,
            });
            const provider = new Web3(magic.rpcProvider);
            await provider.currentProvider.enable();
            return provider;
        },
    },
};

const providerOptions = {
    ...walletConnectOpts,
    ...walletLinkOpts,
};

if (deviceType() === "desktop") {
    Object.assign(providerOptions, metaMaskOpts);
    Object.assign(providerOptions, tallyOpts);
    Object.assign(providerOptions, magicLinkOpts);
}

function isMetaMaskInstalled(){
    try {
        let providers = window.ethereum.providers;
        let pMM;
        if (providers){
            pMM = providers.find(p => p.isMetaMask);
        } else if (window.ethereum.isMetaMask) {
            return true
        }
        if (pMM) {
            return true
        }
        else {
            return false
        }
    } catch {
        return false
    }
}

function isTallyInstalled(){
    try {
        let providers = window.ethereum.providers;
        let pTally;
        if (providers){
            pTally = providers.find(p => p.isTally);
        }
        if (pTally) {
            return true
        }
        else {
            return false
        }
    } catch {
        return false
    }
}

function deviceType() {
    const ua = navigator.userAgent;
    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
        return "tablet";
    }
    if (/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        return "mobile";
    }
    return "desktop";
}

export async function getProvider() {
    const web3Modal = new Web3Modal({
        network: 'mainnet',
        cacheProvider: false, // optional
        providerOptions: providerOptions, // required
        disableInjectedProvider: deviceType()=='desktop'? true: false,
    });
    await web3Modal.clearCachedProvider();
    let provider
    try {
        provider = await web3Modal.connect();
    } catch (ex) {
        console.log(ex)
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