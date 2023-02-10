import { defaultWeb3, defaultWeb3ETH, SendToAnyoneLogic } from "../sendToAnyoneLogic";
import template from "./revertPayment.mpts";
import {create} from "fast-creator";



export class RevertPayment {
    constructor(idriss) {
        this.idriss = idriss;
        this.html = create('div', {}, template({}));

        this.html.querySelector('.revertButton')?.addEventListener('click', async (e) => {
            console.log("revert clicked")
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

    async getTransaction(transactionHash) {

        this.html.querySelector('#buttonRevertSpinner').style.display = '';
        this.html.querySelector('#revertNext').style.display = 'none';
        let transaction;
        try {
            transaction = await defaultWeb3.eth.getTransaction(transactionHash)
        } catch {
            console.log("Invalid txn hash")
            this.html.querySelector('#buttonRevertSpinner').style.display = 'none';
            this.html.querySelector('#revertNext').style.display = '';
            return null
        }
        let method = transaction.input.slice(2, 10);
        let remove = transaction.input.replace(method, "");
        let [IDrissHash, type, address] = await this.getInputs(method, remove);
        console.log(IDrissHash, type, address)

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
