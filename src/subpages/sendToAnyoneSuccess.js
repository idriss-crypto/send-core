import template from "./sendToAnyoneSuccess.mpts";
import close from "!!url-loader!../img/close.svg"
import success from "!!url-loader!../img/success.svg"
import link from "!!url-loader!../img/link.svg"
import {create} from "fast-creator";

export class SendToAnyoneSuccess {
    constructor(identifier, explorerLink, claimPassword, isIDrissRegistered,
                assetId, assetType, assetAddress, token, blockNumber, txnHash) {
        const idrissHost = IDRISS_HOMEPAGE
        const claimUrl = `${idrissHost}/claim?identifier=${identifier}&claimPassword=${claimPassword}&assetId=${assetId}&assetType=${assetType}&assetAddress=${assetAddress}&token=${token}&blockNumber=${blockNumber}`
        const notificationUrl = `${idrissHost}/sendNotification`

        console.log(txnHash)

        this.html = create('div', {}, template({identifier, close, success, link, explorerLink, claimUrl}));
        this.html.querySelector('#text-wrapper').style.display = isIDrissRegistered ? 'none' : '';
        this.html.querySelector('.viewExplorer').style.display = isIDrissRegistered ? '' : 'none';
        this.html.querySelector('#closeSuccessButton').style.display = isIDrissRegistered ? "" : "none";
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));

        const notificationBody = {
            'url': claimUrl,
            'txnHash': txnHash,
            'token': token
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
                    // Case 1: Notification sent successfully
                    this.html.querySelector('#text-wrapper-inner').innerHTML = `Send the claim link to ${identifier}`
                } else {
                    // Case 2: Not a server error, but not sent successfully
                    this.html.querySelector('#text-wrapper-inner').innerHTML = `Send the claim link to ${identifier}`
                }
                console.log(res)
            })
            // Case 3: Server error, not sent successfully
            .catch((res) => {this.html.querySelector('#text-wrapper-inner').innerHTML = `Send the claim link to ${identifier}`})
        }

        this.html.querySelector('#copyButton')?.addEventListener('click', async (e) => {
            let tooltip = this.html.querySelector(".tooltip")
            tooltip.style.display = "block";
            await navigator.clipboard.writeText(claimUrl);
            setTimeout(async function () {
                            tooltip.style.display = "none";
                        }, 1000);
        });
        this.html.querySelector('#closeSuccessButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        this.html.querySelector('#copyButton').style.display = isIDrissRegistered ? "none" : "";

        this.html.querySelector('.textWrap').onclick = async () => {
            let tooltip = this.html.querySelector(".tooltip")
             tooltip.style.display = "block";
             await navigator.clipboard.writeText(claimUrl);
             setTimeout(async function () {
                            tooltip.style.display = "none";
                        }, 1000);
        }
    }
}