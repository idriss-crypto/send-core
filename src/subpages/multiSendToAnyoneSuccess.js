import template from "./multiSendToAnyoneSuccess.mpts";
import close from "!!url-loader!../img/close.svg"
import success from "!!url-loader!../img/success.svg"
import link from "!!url-loader!../img/link.svg"
import {create} from "fast-creator";

export class MultiSendToAnyoneSuccess {
    constructor(explorerLink, claimLinks, txnHash) {
        const idrissHost = IDRISS_HOMEPAGE
        const claimUrl = `${idrissHost}/claim?identifier=${identifier}&claimPassword=${claimPassword}&assetId=${assetId}&assetType=${assetType}&assetAddress=${assetAddress}&token=${token}&blockNumber=${blockNumber}`
        const notificationUrl = `${idrissHost}/sendNotification`
        const notificationBody = {
            'url': claimUrl,
            'txnHash': txnHash
        }
//        const notificationOptions = {
//            method: 'POST',
//            headers: {'Content-Type': 'application/json'},
//            mode: 'cors',
//            body: JSON.stringify(notificationBody)
//        }
//        if (txnHash!="0x"){
//            fetch(notificationUrl, notificationOptions)
//            .then((res) => {
//                if (res.status == 200) {
//                    this.html.querySelector('#text-wrapper-inner').innerHTML = `Send the claim link to ${identifier}`
//                } else {
//                    this.html.querySelector('#text-wrapper-inner').innerHTML = `Send the claim link to ${identifier}`
//                }
//                console.log(res)
//            })
//            .catch((res) => {this.html.querySelector('#text-wrapper-inner').innerHTML = `Send the claim link to ${identifier}`})
//        }
        this.html = create('div', {}, template({}));
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        this.html.querySelector('#downloadButton')?.addEventListener('click', (e) => {
            startDownload();
        })
    }
}