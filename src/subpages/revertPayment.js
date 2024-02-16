import { defaultWeb3, defaultWeb3ETH, SendToAnyoneLogic } from "../sendToAnyoneLogic";
import { getProvider } from "../getWeb3Provider"
import template from "./revertPayment.mpts";
import {create} from "fast-creator";

let provider = null;


export class RevertPayment {
    constructor() {
        this.html = create('div', {}, template({}));

        this.html.querySelector('.revertButton')?.addEventListener('click', async (e) => {
            console.log("revert clicked")
            if (!this.provider) {
                this.provider = await getProvider();
                await SendToAnyoneLogic.prepareSendToAnyone(this.provider, 'Polygon', "")
                this.idriss = SendToAnyoneLogic.idriss;
            }
            this.connectWalletUI();
            let txnHash = this.html.querySelector('.customHash').value;
            try {
                await this.getTransaction(txnHash)
            } catch {
                this.html.querySelector('.customHash').value = '';
                this.html.querySelector('#buttonRevertSpinner').style.display = 'none';
                this.html.querySelector('#revertNext').style.display = '';
            }
        });

    }

    async connectWalletUI() {
        document.querySelector('#connectWallet').classList.add('hidden');
        document.querySelector('#connectedWallet').classList.remove('hidden');
        let accounts = await SendToAnyoneLogic.web3.eth.getAccounts();
        let reverse = await SendToAnyoneLogic.idriss.reverseResolve(accounts[0]);
        let loginDisplay = reverse? reverse : accounts[0].substring(0, 6).concat("...").concat(accounts[0].substr(-4))
        document.querySelector('#connectedWallet').firstElementChild.value = loginDisplay
        document.querySelector('#polygon-scan-link').href = POLYGON_BLOCK_EXPLORER_ADDRESS + "/address/" + accounts[0];
    }

    async getTransaction(transactionHash) {

        this.html.querySelector('#buttonRevertSpinner').style.display = '';
        this.html.querySelector('#revertNext').style.display = 'none';
        try {
            let transaction = await defaultWeb3.eth.getTransaction(transactionHash)
            let method = transaction.input.slice(2, 10);
            let remove = transaction.input.replace(method, "");
            let [IDrissHash, type, address] = await this.getInputs(method, remove);
            console.log(IDrissHash, type, address)
            this.html.querySelector('.errorInput').style.display = 'none';
        } catch {
            console.log("Invalid txn hash")
            this.html.querySelector('.errorInput').style.display = 'block';
            this.html.querySelector('#buttonRevertSpinner').style.display = 'none';
            this.html.querySelector('#revertNext').style.display = '';
            return null
        }


        await this.idriss.revertPayment(IDrissHash, type, address)

        this.html.querySelector('.customHash').value = '';
        this.html.querySelector('#buttonRevertSpinner').style.display = 'none';
        this.html.querySelector('#revertNext').style.display = '';
    }

    async getInputs(method_, remove_) {
        console.log(method_)
        let ret;
        if (method_ == '0045ac25') {
            ret =  await defaultWeb3.eth.abi.decodeParameters(
                [
                    {
                        type: "bytes32",
                        name: "_IDrissHash",
                    },
                    {
                        type: "uint256",
                        name: "_amount",
                    },
                    {
                        type: "uint8",
                        name: "_assetType",
                    },
                    {
                        type: "address",
                        name: "_assetContractAddress",
                    },
                    {
                        type: "uint256",
                        name: "_assetId"
                    },
                ],
                remove_
            );
            return [ret._IDrissHash, ret._assetType, ret._assetContractAddress]
        } else {
            return null
        }
    }

}
