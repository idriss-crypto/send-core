import template from "./sendToAnyoneAddress.mpts";
import {create} from "fast-creator";
import close from "!!url-loader!../img/close.svg"
import {IdrissCrypto} from "idriss-crypto/browser";

export class SendToAnyoneAddress {
    constructor() {
        this.html = create('div', {}, template({close}));
        const input = this.html.querySelector('input')
        input.addEventListener('keyup', async e => {
            this.lastEvent = {event: e, date: new Date(), input: e.target, value: e.target.value, key: e.key}
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

        // do something here with focused input field
//        this.html.addEventListener('keyup', () => {
//            console.log(event)
//            if (event.key=='Enter') {
//                console.log('Turn on spinner')
//            }
//        })
//
//        this.html.querySelector('.next').addEventListener('click', () => {
//            console.log('Turn on spinner')
//        })

    }

    async checkInputChanged() {
        if (new Date() - this.lastEvent?.date >= 500 && this.lastEvent?.input.value == this.lastEvent?.value && this.lastEvent?.value.length >= 3) {
            let event = this.lastEvent;
            console.log(event)
            const results = document.createElement('div')
            results.className = 'results';
            this.html.querySelector('.results').replaceWith(results)
            let data;
            try {
                data = await this.idriss.resolve(event.value, {network: "evm"});
                this.html.querySelector('.errorInput').style.display = 'none';
            } catch {
                // ToDo: enable error here
                console.log("Twitter name not found: ", data)
                this.html.querySelector('.errorInput').style.display = 'block';
                return
            }

            if (data && event == this.lastEvent) {
                if (Object.values(data).length == 0) {
                    let nextButton = this.html.querySelector('.nextSTA');
                    nextButton.style.display = "block";
                    this.html.querySelector('.next').style.display = "none";
                    var new_button = nextButton.cloneNode(true);
                    nextButton.parentNode.replaceChild(new_button, nextButton)
                    nextButton = this.html.querySelector('.nextSTA');
                    nextButton.addEventListener('click', () => {
                        this.html.querySelector('#buttonNextSTASpinner').style.display = 'block';
                        this.html.querySelector('#buttonNextSTA').style.display = 'none';
                        this.name = event.value;
                        this.address = (function () { return; })();
                        console.log(this.name, this.address)
                        this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                            identifier: this.name,
                            recipient: this.address,
                            isIDrissRegistered: false
                        }))
                    })
                    if (event.key == 'Enter') {
                        this.html.querySelector('.nextSTA').click();
                    }
                // ToDo: add one result <-> multiple result case
                } else {
                    this.html.querySelector('.next').style.display = "block";
                    this.html.querySelector('.nextSTA').style.display = "none"
                    this.address = data['Public ETH'] ?? Object.values(data)[0];
                    this.name = event.value;
                    let nextButton = this.html.querySelector('.next');
                    if (event.key == 'Enter') {
                        console.log("Enter pressed")
                        this.html.querySelector('#buttonNextSpinner').style.display = 'block';
                        this.html.querySelector('#buttonNext').style.display = 'none';
                        console.log(this.name, this.address)
                        this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                            identifier: this.name,
                            recipient: this.address,
                            isIDrissRegistered: true
                        }))
                    }
                    // this.html.querySelector('.results').style.display = "block"
                }
                for (const elementsKey in data) {
                    console.log(elementsKey)
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
                        this.html.querySelector('.#buttonNextSpinner').style.display = 'block';
                        this.html.querySelector('#buttonNext').style.display = 'none';
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