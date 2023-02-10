import template from "./sendToAnyoneWaitingConfirmation.mpts";
import close from "!!url-loader!../img/close.svg"
import twitter from "!!url-loader!../img/twitter.svg"
import {create} from "fast-creator";

export class SendToAnyoneWaitingConfirmation {
    constructor(identifier, amountUSD, token, amountToken, assetId, assetType, nftName="") {
        this.html = create('div', {}, template({identifier, close, twitter, amountUSD, amountToken, assetId, token, nftName}));
        const subtitleCoin = this.html.querySelector('.subtitleCoin')
        const subtitleNFT = this.html.querySelector('.subtitleNFT')
        const treasuryMessage = this.html.querySelector(".linkContent");
        const twitterIcon = this.html.querySelector(".twitterIcon");
        if (identifier.startsWith("@")) twitterIcon.style.display = "block";
        subtitleCoin.style.display = 'none'
        subtitleNFT.style.display = 'none'

        if (assetType === 'erc721' || assetType === 'erc1155') {
            subtitleNFT.style.display = ''
            treasuryMessage.innerHTML = "$1 in MATIC supplies IDriss treasury"
        } else {
            if (assetType === 'erc20') {
                treasuryMessage.innerHTML = "$1 in MATIC supplies IDriss treasury"
            }
            subtitleCoin.style.display = ''
        }
    }
}