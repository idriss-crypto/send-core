import template from "./multiSendToAnyoneApproval.mpts";
import close from "!!url-loader!../img/close.svg"
import {create} from "fast-creator";
import { feeQuotes, approvalMessages, regPh, regM, regT } from "../sendToAnyoneUtils";
import { SendToAnyoneLogic, defaultWeb3ETH } from "../sendToAnyoneLogic";

let allRegistered;
let noneRegistered;
let assetType;
let idriss;

export class MultiSendToAnyoneApproval {
    constructor(assetName, recipients, idriss) {
        this.html = create('div', {}, template({close, assetName, recipients}));
        this.assetType = recipients[0].asset.type
        this.updateMessages(recipients)
    }

    async updateMessages(recipients) {
        this.getFeeQuote(recipients)
        this.getApprovalMessage(recipients)
    }

    getFeeQuote(resolved, assetType) {
        let feeQuote = ""
        this.allRegistered = resolved.every(dict => Object.keys(dict).length > 0);
        this.noneRegistered = resolved.every(dict => Object.keys(dict).length === 0);

        feeQuote = feeQuotes.multiNonNative;
        if (!this.allRegistered && !this.noneRegistered) feeQuote = feeQuotes.multiMixed;
        if (this.allRegistered) {
            if (this.assetType===0) feeQuote = feeQuotes.singleToken;
        }
        if (this.noneRegistered) {
            if (this.assetType===0) feeQuote = feeQuotes.multiNRMatic;
        }

        this.html.querySelector('.linkContent').innerHTML = feeQuote
    }

    getApprovalMessage(resolved) {
        let approvalMessage;
        if (this.allRegistered || this.noneRegistered) {
            if (this.assetType===0) approvalMessage = approvalMessages.multiNative;
            else approvalMessage = approvalMessages.multiNonNative;
        } else {
            if (this.assetType===0) approvalMessage = approvalMessages.mixedNative;
            else approvalMessage = approvalMessages.mixedNonNative;
        }

        this.html.querySelector('#numTxns').innerHTML = approvalMessage;
    }

}