import template from "./sendToAnyoneAddress.mpts";
import {create} from "fast-creator";
import close from "!!url-loader!../img/close.svg"
import {IdrissCrypto} from "idriss-crypto/browser";

export class SendToAnyoneAddress {
    constructor(type="token") {
        this.html = create('div', {}, template({close}));
        const input = this.html.querySelector('input');
        if (type=='nft') { this.html.querySelector('#assetHeader').innerHTML = "NFT" }
        input.addEventListener('keyup', async e => {
            if (e.key == 'Enter') { await this.checkIDriss(); }
        })
        this.html.querySelector('.next').addEventListener('click', async () => {
            await this.checkIDriss();
        })
        this.idriss = new IdrissCrypto(POLYGON_RPC_ENDPOINT, {
            sendToAnyoneContractAddress: SEND_TO_ANYONE_CONTRACT_ADDRESS,
            idrissRegistryContractAddress: IDRISS_REGISTRY_CONTRACT_ADDRESS,
            reverseIDrissMappingContractAddress: REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS,
        });
    }

    async checkIDriss () {

        console.log("checking IDriss")
        let inputChecked = this.html.children[1].children['selectedInput'].value;

        this.html.querySelector('#buttonNextSpinner').style.display = '';
        this.html.querySelector('#buttonNext').style.display = 'none';

        // figure out buttons
        this.html.querySelector('.next').style.display = "block";

        let data;
        try {
            data = await this.idriss.resolve(inputChecked, {network: "evm"});
            this.html.querySelector('.errorInput').style.display = 'none';
        } catch {
            console.log("Twitter name not found: ", data)
            this.html.querySelector('.errorInput').style.display = 'block';
            this.html.querySelector('#buttonNextSpinner').style.display = 'none';
            this.html.querySelector('#buttonNext').style.display = 'block';
            return
        }
        if (Object.values(data).length == 0) {
            this.name = inputChecked;
            this.address = (function () { return; })();
            console.log(this.name, this.address)
            this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                identifier: this.name,
                recipient: this.address,
                isIDrissRegistered: false
            }))
        } else {
            this.address = data['Public ETH'] ?? Object.values(data)[0];
            this.walletTag = data['Public ETH'] ? 'Public ETH' : Object.keys(data)[0];
            this.name = inputChecked;
            console.log(this.name, this.address, this.walletTag)
            this.html.dispatchEvent(Object.assign(new Event('next', {bubbles: true}), {
                identifier: this.name,
                recipient: this.address,
                walletTag: this.walletTag,
                isIDrissRegistered: true
            }))
        }
    }
}