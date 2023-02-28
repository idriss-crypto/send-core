import template from "./sendToAnyoneWaitingConfirmation.mpts";
import close from "!!url-loader!../img/close.svg"
import twitter from "!!url-loader!../img/twitter.svg"
import {create} from "fast-creator";

export class SendToAnyoneWaitingConfirmation {
    constructor(identifier, isIDrissRegistered, amountUSD, token, amountNormal, assetId, assetType, nftName="") {
        this.html = create('div', {}, template({identifier, close, twitter, amountUSD, amountNormal, assetId, token, nftName}));
        console.log(amountNormal)
        const subtitleCoin = this.html.querySelector('.subtitleCoin')
        const subtitleNFT = this.html.querySelector('.subtitleNFT')
        const treasuryMessage = this.html.querySelector(".linkContent");
        const twitterIcon = this.html.querySelector(".twitterIcon");
        const approvalMessage = this.html.querySelector("#numTxns");
        if (identifier.startsWith("@")) twitterIcon.style.display = "block";
        subtitleCoin.style.display = 'none'
        subtitleNFT.style.display = 'none'
        console.log(isIDrissRegistered)

        if (assetType === 'erc721' || assetType === 'erc1155') {
            subtitleNFT.style.display = ''
            treasuryMessage.innerHTML = "$1 supplies IDriss' treasury"
            if (isIDrissRegistered) treasuryMessage.innerHTML = "1% supplies IDriss' treasury"
            approvalMessage.innerHTML = "Confirm one approval and one transaction in your wallet"
        } else {
            if (assetType === 'erc20') {
                treasuryMessage.innerHTML = "$1 supplies IDriss' treasury"
                if (isIDrissRegistered) treasuryMessage.innerHTML = "1% supplies IDriss' treasury"
                approvalMessage.innerHTML = "Confirm one approval and one transaction in your wallet"
            }
            if (isIDrissRegistered) treasuryMessage.innerHTML = "1% supplies IDriss' treasury"
            subtitleCoin.style.display = ''
        }
    }
}