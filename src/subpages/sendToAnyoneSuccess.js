import template from "./sendToAnyoneSuccess.mpts";
import close from "!!url-loader!../img/close.svg"
import success from "!!url-loader!../img/success.svg"
import link from "!!url-loader!../img/link.svg"
import {create} from "fast-creator";

export class SendToAnyoneSuccess {
    constructor(identifier, explorerLink, claimPassword, isIDrissRegistered,
                assetAmount, assetId, assetType, assetAddress, token, blockNumber, txnHash) {
        const idrissHost = IDRISS_HOMEPAGE
        const claimUrl = `${idrissHost}claim?identifier=${identifier}&claimPassword=${claimPassword}&assetId=${assetId}&assetType=${assetType}&assetAddress=${assetAddress}&token=${token}&blockNumber=${blockNumber}`
        const notificationUrl = `${idrissHost}/sendNotification`
        const notificationBody = {
            'url': claimUrl,
            'txnHash': txnHash
        }
        const notificationOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            mode: 'cors',
            body: JSON.stringify(notificationBody)
        }
        if (txnHash!="0x"){
            fetch(notificationUrl, notificationOptions)
            .then((res) => {
                if (res.status == 200) {
                    this.html.querySelector('#text-wrapper-inner').innerHTML = `We have sent a notification to ${identifier}. Please send them the following link to make sure your gift is arriving:`
                } else {
                    this.html.querySelector('#text-wrapper-inner').innerHTML = `We could not send a notification to ${identifier}. Please send them the following link to make sure your gift is arriving:`
                }
                console.log(res)
            })
            .catch((res) => {this.html.querySelector('#text-wrapper-inner').innerHTML = `We could not send a notification to ${identifier}. Please send them the following link to make sure your gift is arriving:`})
        }
        this.html = create('div', {}, template({identifier, close, success, link, explorerLink, claimUrl}));
        this.html.querySelector('#text-wrapper').style.display = isIDrissRegistered ? 'none' : '';
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        this.html.querySelector('#copyButton')?.addEventListener('click', (e) => {
            let tooltip = this.html.querySelector(".tooltip")
             tooltip.style.display = "block";
             setTimeout(async function () {
                            tooltip.style.display = "none";
                            await navigator.clipboard.writeText(claimUrl);
                        }, 1000);
        });
        this.html.querySelector('.textWrap').onclick = () => {
            let tooltip = this.html.querySelector(".tooltip")
             tooltip.style.display = "block";
             setTimeout(async function () {
                            tooltip.style.display = "none";
                            await navigator.clipboard.writeText(claimUrl);
                        }, 1000);
        }
    }
}