import template from "./sendToAnyoneAddress.mpts";
import {create} from "fast-creator";
import close from "!!url-loader!../img/close.svg"
import {IdrissCrypto} from "idriss-crypto/browser";

export class SendToAnyoneAddress {
    constructor() {
        this.html = create('div', {}, template({close}));
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        const input = this.html.querySelector('input')
        input.addEventListener('input', async e => {
            this.lastEvent = {event: e, date: new Date(), input: e.target, value: e.target.value}
            setTimeout(() => this.checkInputChanged(), 500)
        })
        this.html.querySelector('.next').addEventListener('click', () => {
            if (this.address) {
                this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                    identifier: this.name,
                    recipient: this.address,
                    isIDrissRegistered: true
                }))
            }
        })
        this.idriss = new IdrissCrypto(POLYGON_RPC_ENDPOINT, {
            sendToAnyoneContractAddress: SEND_TO_ANYONE_CONTRACT_ADDRESS,
            idrissRegistryContractAddress: IDRISS_REGISTRY_CONTRACT_ADDRESS,
            reverseIDrissMappingContractAddress: REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS,
            priceOracleContractAddress: PRICE_ORACLE_CONTRACT_ADDRESS
        });
    }

    async checkInputChanged() {
        if (new Date() - this.lastEvent?.date >= 500 && this.lastEvent?.input.value == this.lastEvent?.value && this.lastEvent?.value.length >= 3) {
            let event = this.lastEvent;
            const results = document.createElement('div')
            results.className = 'results';
            this.html.querySelector('.results').replaceWith(results)
            let data = await this.idriss.resolve(event.value);
            if (data && event == this.lastEvent) {
                if (Object.values(data).length == 0) {
                    let item = document.createElement('div')
                    item.className = 'empty';
                    item.append("Nothing found. ");
                    let a = document.createElement('a')
                    a.textContent = 'Send anyway';
                    a.href = 'https://www.idriss.xyz/send-to-anyone';
                    a.onmousedown = () => {
                        this.name = event.value;
                        this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                            identifier: this.name,
                            recipient: this.address,
                            isIDrissRegistered: false
                        }))
                    }
                    a.target = '_blank';
                    item.append(a)
                    results.append(item)
                } else {
                    this.address = Object.values(data)[0];
                    this.name = event.value;
                }
                for (const elementsKey in data) {
                    let item = document.createElement('div')
                    let typeElement = document.createElement('div')
                    typeElement.className = 'type'
                    typeElement.textContent = elementsKey;
                    item.append(typeElement)
                    let keyElement = document.createElement('div')
                    keyElement.className = 'key'
                    keyElement.textContent = event.value;
                    item.append(keyElement)
                    if (event.value.startsWith("@")) {
                        keyElement.style.color = "#1DA1F2";
                        let imgElement = document.createElement('img')
                        imgElement.src = "https://www.idriss.xyz/static/images/twitter.png"
                        imgElement.alt = "Twitter"
                        imgElement.className = 'img'
                        item.append(imgElement)
                    }
                    let valueElement = document.createElement('div')
                    valueElement.className = 'value'
                    valueElement.textContent = data[elementsKey];
                    item.append(valueElement)
                    results.append(item)
                    item.onmousedown = () => {
                        this.address = data[elementsKey];
                        this.name = event.value;
                        this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                            identifier: this.name,
                            recipient: this.address,
                            isIDrissRegistered: true
                        }))
                    }
                }
            }
        }
    }
}