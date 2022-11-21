import css from "./sendToAnyoneStyle.scss";
import {create} from "fast-creator";
import {SendToAnyoneMain} from "./subpages/sendToAnyoneMain";
import {SendToAnyoneConnect} from "./subpages/sendToAnyoneConnect";
import {SendToAnyoneAddress} from "./subpages/sendToAnyoneAddress";
import {SendToAnyoneError} from "./subpages/sendToAnyoneError";
import {SendToAnyoneSuccess} from "./subpages/sendToAnyoneSuccess";
import {getProvider} from "./getWeb3Provider";

export class IdrissSendToAnyoneWidget extends HTMLElement {
    constructor(config) {
        super();
        Object.assign(this, config);
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
        if (!this.identifier) {
            this.container.append(new SendToAnyoneAddress().html);
            await new Promise(res => {
                this.container.addEventListener('next', e => {
                    console.log(e);
                    this.identifier = e.identifier;
                    this.recipient = e.recipient;
                    this.isIDrissRegistered = e.isIDrissRegistered;
                    res()
                })
            });
        }
        if (!this.token || !this.sendToAnyoneValue || !this.network) {
            this.clearContainer();
            this.container.append(new SendToAnyoneMain(this.identifier, this.isIDrissRegistered).html);
            await new Promise(res => {
                this.container.addEventListener('sendMoney', e => {
                    console.log(e);
                    this.network = e.network;
                    this.token = e.token;
                    this.sendToAnyoneValue = +e.amount;
                    this.assetType = e.assetType;
                    this.assetAmount = e.assetAmount;
                    this.assetAddress = e.assetAddress;
                    this.assetId = e.assetId;
                    this.message = e.message;
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
            window.open(`https://www.idriss.xyz/send-to-anyone?` + Object.entries(urlParams).map(([k, v]) => k + '=' + encodeURIComponent(v)).join('&'));
            return;
        }
        this.clearContainer()
        this.container.append(new SendToAnyoneWaitingApproval(token).html);

        await SendToAnyoneLogic.prepareSendToAnyone(provider, network ?? this.network, this.alchemyApiKey)
        this.clearContainer()
        this.container.append((new SendToAnyoneWaitingConfirmation(identifier, sendToAnyoneValue, token)).html)
        let {
            integer: amountInteger,
            normal: amountNormal
        } = await SendToAnyoneLogic.calculateAmount(token, sendToAnyoneValue)

        this.container.querySelector('.amountCoin').textContent = Math.round(amountNormal*10**5)/10**5;
        let sendResult = await SendToAnyoneLogic.sendToAnyone(identifier ?? this.identifier, amountInteger,
            network ?? this.network, token ?? this.token, this.message ?? "",
            this.assetType, this.assetAmount, this.assetAddress, this.assetId)

        this.clearContainer()
        if (sendResult && sendResult.transactionReceipt && sendResult.transactionReceipt.status) {
            let explorerLink;
            if (this.network == 'ETH')
                explorerLink = `https://etherscan.io/tx/${sendResult.transactionHash}`
            else if (this.network == 'BSC')
                explorerLink = `https://bscscan.com/tx/${sendResult.transactionHash}`
            else if (this.network == 'Polygon')
                explorerLink = POLYGON_BLOCK_EXPLORER_ADDRESS + `/tx/${sendResult.transactionHash}`
            this.container.append((new SendToAnyoneSuccess(identifier, explorerLink, sendResult.claimPassword)).html)
        } else {
            this.container.append((new SendToAnyoneError({name: 'Reverted', message: 'Transaction was not successful'})).html)
        }
    }

    clearContainer() {
        while (this.container.firstChild) {
            this.container.firstChild.remove();
        }
    }
}

customElements.define('idriss-payment-widget', IdrissSendToAnyoneWidget);