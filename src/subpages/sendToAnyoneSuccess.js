import template from "./sendToAnyoneSuccess.mpts";
import close from "!!url-loader!../img/close.svg"
import success from "!!url-loader!../img/success.svg"
import link from "!!url-loader!../img/link.svg"
import {create} from "fast-creator";

export class SendToAnyoneSuccess {
    constructor(identifier, explorerLink, claimPassword) {
        const idrissHost = IDRISS_HOMEPAGE
        this.html = create('div', {}, template({identifier, close, success, link, explorerLink, claimPassword, idrissHost}));
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        this.html.querySelector('.close')?.addEventListener('click', (e) => {
            this.html.dispatchEvent(Object.assign(new Event('close', {bubbles :true})))
        });
    }
}