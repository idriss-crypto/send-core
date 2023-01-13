import template from "./multiSendToAnyoneSuccess.mpts";
import close from "!!url-loader!../img/close.svg"
import success from "!!url-loader!../img/success.svg"
import link from "!!url-loader!../img/link.svg"
import {create} from "fast-creator";

export class MultiSendToAnyoneSuccess {
    constructor(explorerLink, token, data=null) {

        const idrissHost = IDRISS_HOMEPAGE
        const claimData = data;
        const notificationUrl = `${idrissHost}/sendNotification`

        for (let claimableAsset of claimData) {
            let txnHash = "0x"
            const notificationBody = {
                'url': claimableAsset[2],
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
                        this.html.querySelector('#text-wrapper-inner').innerHTML = claimData? `Download claim links below.` : "Assets sent to everyone's wallet."
                    } else {
                        this.html.querySelector('#text-wrapper-inner').innerHTML = claimData? `Download claim links below.` : "Assets sent to everyone's wallet."
                    }
                    console.log(res)
                })
                .catch((res) => {this.html.querySelector('#text-wrapper-inner').innerHTML = claimData? `Download claim links below.` : "Assets sent to everyone's wallet."})
            }
        }

        this.html = create('div', {}, template({close, success}));
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        console.log("data is ", claimData)
        this.html.querySelector('#text-wrapper-inner').innerHTML = claimData? `Download claim links below.` : "Assets sent to everyone's wallet."
        this.html.querySelector('#downloadButton').style.display = claimData? "block" : "none";
        this.html.querySelector('#downloadButton')?.addEventListener('click', (e) => {
            this.downloadCSV(claimData);
        })
    }

    async downloadCSV(claimable) {
        let preppedData = [];

        for (let recipient_ of claimable) {
            let paramsString = recipient_.claimUrl.split('?')[1];
            let claimParams = new URLSearchParams(paramsString);
            preppedData.push(claimParams.get('identifier')+','+recipient_.claimUrl)
        }
        let csv = preppedData.join('\n');
        if (csv == null) return;

        let filename = "claimableAssets.csv";

        if (!csv.match(/^data:text\/csv/i)) {
            csv = "data:text/csv;charset=utf-8," + csv;
        }
        let data = encodeURI(csv);

        let link = document.createElement("a");
        link.setAttribute("href", data);
        link.setAttribute("download", filename);
        link.click();
    }
}