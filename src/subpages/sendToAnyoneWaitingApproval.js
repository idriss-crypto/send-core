import template from "./sendToAnyoneWaitingApproval.mpts";
import close from "!!url-loader!../img/close.svg"
import {create} from "fast-creator";

export class SendToAnyoneWaitingApproval {
    constructor(token) {
        this.html = create('div', {}, template({close, token}));
    }
}