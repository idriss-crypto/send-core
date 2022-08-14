import template from "./sendToAnyoneSuccess.mpts";
import close from "!!url-loader!../img/close.svg"
import success from "!!url-loader!../img/success.svg"
import link from "!!url-loader!../img/link.svg"
import {create} from "fast-creator";

export class SendToAnyoneSuccess {
    constructor(identifier, explorerLink, claimPassword, isIDrissRegistered,
                assetAmount, assetId, assetType, assetAddress, token, blockNumber) {
        const idrissHost = IDRISS_HOMEPAGE
        const claimUrl = `${idrissHost}/claim?identifier=${identifier}&claimPassword=${claimPassword}&assetId=${assetId}&assetType=${assetType}&assetAddress=${assetAddress}&token=${token}&blockNumber=${blockNumber}`
        this.html = create('div', {}, template({identifier, close, success, link, explorerLink, claimUrl}));
        this.html.querySelector('#text-wrapper').style.display = isIDrissRegistered ? 'none' : '';
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        this.html.querySelector('.close')?.addEventListener('click', (e) => {
            this.html.dispatchEvent(Object.assign(new Event('close', {bubbles :true})))
        });
    }
}