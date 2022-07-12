import template from "./tippingWaitingApproval.mpts";
import close from "!!url-loader!./img/close.svg"
import {create} from "fast-creator";

export class TippingWaitingApproval {
    constructor(token) {
        this.html = create('div', {}, template({close, token}));
    }
}