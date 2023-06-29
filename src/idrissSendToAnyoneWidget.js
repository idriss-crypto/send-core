import css from "./sendToAnyoneStyle.scss";
import {create} from "fast-creator";
import {getProvider} from "./getWeb3Provider";
import {SendToAnyoneMain, SendToAnyoneAddress, SendToAnyoneError, SendToAnyoneSuccess, SendToAnyoneConnect, SendToAnyoneWaitingApproval, SendToAnyoneWaitingConfirmation} from "./subpages";
import {SendToAnyoneLogic} from "./sendToAnyoneLogic";

export class IdrissSendToAnyoneWidget extends HTMLElement {
    constructor(config) {
        super();
        Object.assign(this, config);
        let walletTag;
        this.walletTag = walletTag;
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(create('style', {text: css}));
        this.container = create('section.sendToAnyone-popup')
        this.shadowRoot.append(this.container);

        this.shadowRoot.addEventListener('close', () => this.close());
        this.sendToAnyoneProcess();
    }


    close(){
        console.log('close');
        this.dispatchEvent(Object.assign(new Event('close', {bubbles :true})))
    }

    async sendToAnyoneProcess() {
        try {
            if (!this.recipient || !this.identifier) {
                this.container.append(new SendToAnyoneAddress().html);
                await new Promise(res => {
                    this.container.addEventListener('next', e => {
                        console.log(e);
                        this.identifier = e.identifier;
                        this.recipient = e.recipient;
                        this.isIDrissRegistered = e.isIDrissRegistered;
                        this.walletTag = e.walletTag ? e.walletTag : "Public ETH";
                        res()
                    })
                });
            }
            if (!this.token || !this.sendToAnyoneValue || !this.network) {
                this.container.firstElementChild?.remove();
                this.container.append(new SendToAnyoneConnect(this.identifier, this.isIDrissRegistered, false, this.tokenFilter).html);
                let addressNFTs;
                await new Promise(res => {
                    this.container.addEventListener('connectWallet', async e => {

                        let provider = await getProvider();
                        await SendToAnyoneLogic.prepareSendToAnyone(provider, this.network ?? 'Polygon', ALCHEMY_API_KEY)
                        const accounts = await SendToAnyoneLogic.web3.eth.getAccounts();
                        let selectedAccount = accounts[0];
                        if (e.method == "connect") {
                            // check nft retrieval
                            addressNFTs = await getNFTsForAddress(selectedAccount, ALCHEMY_API_KEY, network ?? 'Polygon')
                            // filter erc721 and existing titles
                            const nfts = addressNFTs.ownedNfts
                                .filter((v, i, a) => v.title != "")
                                .filter((v, i, a) => v.id.tokenMetadata.tokenType == "ERC721" || v.id.tokenMetadata.tokenType == "ERC1155")
                                .map((v, i, a) => {
                                    let image = v.metadata.avatar ? v.metadata.avatar : v.media[0].gateway
                                    if (image.startsWith('ipfs://')) image = image.replace('ipfs://', 'https://ipfs.io/ipfs/')
                                    return {
                                        name: v.title,
                                        address: v.contract.address,
                                        id: BigInt(v.id.tokenId).toString(10),
                                        type: v.id.tokenMetadata.tokenType,
                                        image: image,
                                    }
                                })

                            this.container.firstElementChild?.remove();

                            this.container.append(new SendToAnyoneMain(this.identifier, this.isIDrissRegistered, nfts, true, this.tokenFilter).html);
                            await new Promise(res => {
                                this.container.addEventListener('sendMoney', e => {
                                    console.log(e);
                                    this.network = e.network;
                                    this.token = e.token;
                                    this.sendToAnyoneValue = +e.amount;
                                    this.message = e.message;
                                    this.assetType = e.assetType;
                                    this.assetAddress = e.assetAddress;
                                    this.assetId = e.assetId;
                                    this.selectedNFT = nfts.filter(nft => nft.address == this.assetAddress).filter(nft => nft.id == this.assetId)
                                    this.nftName = (this.selectedNFT[0] != undefined) ? selectedNFT[0].name : "";
                                    res()
                                })
                            });
                        } else {
                            this.network = e.network;
                            this.token = e.token;
                            this.sendToAnyoneValue = +e.amount;
                            this.message = e.message;
                            this.assetType = e.assetType;
                            this.assetAddress = e.assetAddress;
                            this.assetId = e.assetId;
                            this.nftName = "";
                            res()
                        }
                        res()
                    })
                });
            }
            let provider
            try {
                provider = await getProvider();
            } catch (ex) {
                console.error(ex);
            }
            if (!provider) {
                let urlParams = {
                    isIDrissRegistered: this.isIDrissRegistered,
                    identifier: this.identifier,
                    recipient: this.recipient,
                    token: this.token,
                    sendToAnyoneValue: this.sendToAnyoneValue,
                    network: this.network
                }
                window.open(`https://www.idriss.xyz/send?` + Object.entries(urlParams).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&'));
                return;
            }
            this.clearContainer()
            this.container.append(new SendToAnyoneWaitingApproval(this.token).html);

            await SendToAnyoneLogic.prepareSendToAnyone(provider, this.network ?? 'Polygon', this.alchemyApiKey)

            let {
                integer: amountInteger,
                normal: amountNormal
            } = await SendToAnyoneLogic.calculateAmount(this.token, this.sendToAnyoneValue)

            this.clearContainer()
            this.container.append((new SendToAnyoneWaitingConfirmation(this.identifier, this.isIDrissRegistered, this.sendToAnyoneValue, this.token, amountNormal.toString(), this.assetId, this.assetType, this.nftName)).html)

            this.container.querySelector('.amountCoin').textContent = Math.round(amountNormal*10**5)/10**5;

            let sendToHandle = this.identifier;
            if (await SendToAnyoneLogic.web3.utils.isAddress(this.recipient)) sendToHandle = this.recipient;

            // check if this.walletTag == undefined works here
            let sendResult = await SendToAnyoneLogic.sendToAnyone(sendToHandle, amountInteger,
                this.network, this.token, this.message ?? "",
                this.assetType, this.assetAddress, this.assetId, this.walletTag)

            this.clearContainer()
            if (sendResult && sendResult.transactionHash && sendResult.transactionHash.status) {
                let explorerLink;
                blockNumber = sendResult.blockNumber? sendResult.blockNumber : sendResult.transactionReceipt.blockNumber;
                txnHash = sendResult.transactionHash? sendResult.transactionHash : sendResult.transactionReceipt.transactionHash;
                if (this.network == 'ETH')
                    explorerLink = `https://etherscan.io/tx/${sendResult.transactionHash}`
                else if (this.network == 'BSC')
                    explorerLink = `https://bscscan.com/tx/${sendResult.transactionHash}`
                else if (this.network == 'Polygon')
                    explorerLink = POLYGON_BLOCK_EXPLORER_ADDRESS + `/tx/${sendResult.transactionHash}`
                else if (network == 'zkSync')
                    explorerLink = `https://explorer.zksync.io/tx/${sendResult.transactionHash}`
                else if (network == 'linea')
                    explorerLink = `https://explorer.goerli.linea.build/tx/${sendResult.transactionHash}`

                this.container.append((new SendToAnyoneSuccess(this.identifier, explorerLink, sendResult.claimPassword, this.isIDrissRegistered,
                    this.assetId, this.assetType, this.assetAddress, this.token, blockNumber, txnHash)).html)
            } else {
                this.container.append((new SendToAnyoneError({name: 'Reverted', message: 'Transaction was not successful'})).html)
            }
        } catch (e) {
            this.container.firstElementChild?.remove();
            this.container.append((new SendToAnyoneError(e)).html)
            console.error(e)
        }

    }

    clearContainer() {
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
    }
}

customElements.define('idriss-payment-widget', IdrissSendToAnyoneWidget);