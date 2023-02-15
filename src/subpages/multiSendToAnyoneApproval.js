import template from "./multiSendToAnyoneApproval.mpts";
import close from "!!url-loader!../img/close.svg"
import {create} from "fast-creator";


export class MultiSendToAnyoneApproval {
    constructor(assetName) {
        this.html = create('div', {}, template({close, assetName}));
        // this.html.querySelector('.linkContent').innerHTML = isMulti? "A small fee supplies IDriss treasury" : "1% supplies IDriss treasury";
        // this.html.querySelector('#numTxns').innerHTML = "Confirm this transaction in your wallet"
    }
}