import template from "./multiSendToAnyoneApproval.mpts";
import close from "!!url-loader!../img/close.svg"
import {create} from "fast-creator";

export class MultiSendToAnyoneApproval {
    constructor(assetName) {
        this.html = create('div', {}, template({close, assetName}));
    }
}