import template from "./tippingWaitingConfirmation.mpts";
import close from "!!url-loader!../img/close.svg"
import twitter from "!!url-loader!../img/twitter.svg"
import {create} from "fast-creator";

export class TippingWaitingConfirmation {
    constructor(identifier, amountUSD, token) {
        this.html = create('div', {}, template({identifier, close, twitter, amountUSD, token}));
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
    }
}