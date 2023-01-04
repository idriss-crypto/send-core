import template from "./multiSendToAnyone.mpts";
import arrow from "!!url-loader!../img/arrow.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";
import { walletTypeDefault, getCoin, loadToken } from "../sendToAnyoneUtils";
import { defaultWeb3 } from "../sendToAnyoneLogic";
import {IdrissCrypto} from "idriss-crypto/browser";

let hasAmount;
let sameAmount;
let currentAmount;
let currentSame;
let multiSendArr = [];
let asset;

const assetTypes = {};
assetTypes["native"] = 0;
assetTypes["erc20"] = 1;
assetTypes["erc721"] = 2;
assetTypes["erc1155"] = 3;



export class MultiSendToAnyone {
    constructor(ownedAssets = [], selectedAccount = "0x", assetFilter = null, selectNFT = false, networkFilter = {"networks":["polygon"]}) {
        this.idriss = new IdrissCrypto(POLYGON_RPC_ENDPOINT, {
            sendToAnyoneContractAddress: SEND_TO_ANYONE_CONTRACT_ADDRESS,
            idrissRegistryContractAddress: IDRISS_REGISTRY_CONTRACT_ADDRESS,
            reverseIDrissMappingContractAddress: REVERSE_IDRISS_MAPPING_CONTRACT_ADDRESS,
        });
        console.log("IDriss: ", this.idriss)

        this.selectedAccount = selectedAccount;
//        ownedAssets = [
//            {
//                "name": "IDriss Logo",
//                "address": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
//                "id": "104646746365016723314061203747530081823371947018124724650840385937829649186817",
//                "type": "ERC1155",
//                "image": "https://i.seadn.io/gae/mLZLriTgIaWR5om8vLydrhESR7M8TzL6atXtZ8TN_wWEQEIW-5MK-9N4ukfelTVsgBUaTtzkkbnKhzLfW9Q0fvaMUlmPv9H4HBIV?w=500&auto=format",
//                "network": "Polygon"
//            },
//            {
//                "name": "Spirits Of Eastern Europe #2",
//                "address": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
//                "id": "92684618316586457942843142044618663200253618197452727397604755407033069469697",
//                "type": "ERC1155",
//                "image": "https://i.seadn.io/gae/biwkRon23U60JLJcHRp36_U23arYNwLTr4x-ApN11zsryxBy_ZQ1rZpkittDvYxkoBQm5yLNtr9Nq5OAo6kg9liUvkEEc-9fJwnqDg?w=500&auto=format",
//                "network": "Polygon"
//            }
//        ];

        let networks = [
            {name: 'Polygon ', img: maticTokenIcon, chainId: 137, code: 'Polygon'}
        ]


        if (networkFilter) {
            ownedAssets = this.filterNetwork(networkFilter, ownedAssets)
        }

        for (let [key, value] of Object.entries(ownedAssets)) {
            if (!ownedAssets[key].balance) ownedAssets[key].balance = 0;
            if (!ownedAssets[key].type) ownedAssets[key].type =  ownedAssets[key].symbol === "MATIC" ? "native" : "ERC20";
            if (!ownedAssets[key].image) ownedAssets[key].image = ownedAssets[key].logoURI
        }

        this.html = create('div', {}, template({assets: ownedAssets, assetType: selectNFT ? "NFT" : "Token", arrow}));

        this.html.querySelector('input[type=checkbox]')?.addEventListener('change', (e) => {
            this.handleSlider();
        })

        this.html.addEventListener('drop', async (e) => {
            console.log("Dropped a file")
            this.html.querySelector('textarea[name="recipients"]').value = "Processing ...";
            let csvContent = await this.prepareMultiSend(e);
            this.html.querySelector('textarea[name="recipients"]').value = csvContent;
        })

        this.html.querySelectorAll('.select').forEach(select => {
            select.onclick = e => select.classList.toggle('isOpen')
            select.onblur = e => select.classList.remove('isOpen')
            select.onclick = e => select.firstElementChild.focus();
        })

        this.html.querySelectorAll('.select ul li').forEach(li => {
            li.onclick = e => {
                e.stopPropagation();
                const button = li.parentNode.parentNode.querySelector('button')
                button.querySelector('.name').textContent = li.querySelector('.name').textContent;
                button.querySelector('img').src = li.querySelector('img').src;
                button.querySelector('.amountOwned').textContent = li.querySelector('.amountOwned').textContent;
                Object.assign(button.parentNode.dataset, li.dataset);
                li.parentNode.parentNode.classList.remove('isOpen')
                this.html.querySelector(':focus')?.blur()
                this.refreshVisibleAssets()
            }
        })


        this.html.querySelector('.multiSend')?.addEventListener('click', async (e) => {
            console.log("next clicked")
            this.multiSend();
        });

        this.html.querySelector('#InputCustomAmount')?.addEventListener('input', (e) => {
            const tempAmount = this.html.querySelector('#InputCustomAmount').value? this.html.querySelector('#InputCustomAmount').value : '1';
            if (tempAmount === currentAmount) return

            currentAmount = tempAmount;
            currentSame = tempAmount;
            this.modifyTextbox();
        })

        this.html.querySelector('textarea[name="recipients"]')?.addEventListener('input', async (e) => {
            const content = this.html.querySelector('textarea[name="recipients"]').value;
            let result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
            await result.forEach((element) => {element[0] = element[0].replace(/\s+/g, '')})
            if (result.length === 0) return;
            sameAmount = false;
            for (let element of result){
                await this.isSameAmount(element)
            }
            console.log("same amount? ", sameAmount)
            if (sameAmount) {
            console.log("same amount, should be placed in input field")
            console.log(result[0])
                this.html.querySelector('#InputCustomAmount').value = result[0][1]
            } else {
                this.html.querySelector('#InputCustomAmount').value = ''
            }
        })

        this.html.querySelector('textarea[name="recipients"]').placeholder = "hello@idriss.xyz\n+16506655942\n@IDriss_xyz\n---------- paste or drag a file here ----------";
        this.refreshVisibleAssets();
    }

    async modifyTextbox() {
        const content = this.html.querySelector('textarea[name="recipients"]').value;
        let result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
        await result.forEach((element) => {element[0] = element[0].replace(/\s+/g, '')})
        if (result.length === 0) return;
        result = result.map(data => [data[0], currentAmount]);
        let textToDisplay = result.join('\n');
        this.html.querySelector('textarea[name="recipients"]').value =  textToDisplay;
    }

    async prepareMultiSend(e){
        console.log(e)
        e.preventDefault();
        let file;
        let textToDisplay;

        if (e.dataTransfer.items) {
            // Use DataTransferItemList interface to access the file(s)
            [...e.dataTransfer.items].forEach((item, i) => {
                // If dropped items aren't files, reject them
                if (item.kind === 'file') {
                    file = item.getAsFile();
                    console.log(`… file[${i}].name = ${file.name}`);
                }
            });
        } else {
            // Use DataTransfer interface to access the file(s)
            [...e.dataTransfer.files].forEach((file, i) => {
                console.log(`… file[${i}].name = ${file.name}`);
                file = file;
            });
        }

        return new Promise(resolve => {
            const fileReader = new FileReader();
            hasAmount = false
            sameAmount = true;

            fileReader.addEventListener("load", async () => {
                const handlesRaw = fileReader.result;
                console.log(handlesRaw)
                let result = handlesRaw.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length != 0}).map(data => data.split(','));
                console.log(result)
                //ToDo: filter non-RegEx strings
                for (let element of result) {
                    await this.checkAmount(element);
                }
                if (hasAmount) {
                    for (let element of result) {
                        await this.fixAmount(element)
                    }
                } else {
                    result = result.map(data => [data[0], '1']);
                }
                console.log(result)
                console.log(hasAmount)
                textToDisplay = result.join('\n');
                if (hasAmount) currentSame = result[0][1]
                for (let element of result){
                    await this.isSameAmount(element)
                }
                console.log("Is same amount? ", sameAmount)
                // ToDo: check if same amount holds true
                console.log(textToDisplay)
                resolve(textToDisplay)
            });
            fileReader.readAsText(file);
        });
    }

    async multiSend(){
        console.log("Calling multiSend()")
        multiSendArr = []
        let content = this.html.querySelector('textarea[name="recipients"]').value;
        console.log(content)
        // if individual is turned on
        const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
        // if individual is turned off
        // const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => [data, this.html.querySelector('#InputCustomAmount').value]);
        console.log(result)
        // potentially also add for pasting (or real-time updating?)
        await result.forEach((element) => {element[0] = element[0].replace(/\s+/g, '')})
        console.log(result)
        if (result.length === 0) return;
        let assetType = this.html.querySelector('#Toggle').checked? "erc1155" : "native";
        let token = this.html.querySelector('.assetSelect').dataset.symbol;
        if (assetType === 'native' && token !== 'MATIC') assetType = 'erc20';
        // no message box atm
        // let message = this.html.querySelector('.messageBox textarea').value;
        // or just from selected asset?
        let assetAddress = this.filterAssets({polygon: [token]})[0]?.address;
        let assetId = this.html.querySelector('.assetSelect').dataset.assetid;
        if (WEBPACK_MODE !== 'production') {
            assetAddress = DEFAULT_TOKEN_CONTRACT_ADDRESS
        }
        if (assetType === 'erc1155') {
            assetAddress = this.html.querySelector('.assetSelect').dataset.address;
            assetType = this.html.querySelector('.assetSelect').dataset.assetType.toLowerCase();
        }
        if (assetType === 'erc1155' && assetAddress === "0x0000000000000000000000000000000000000000") return;

        asset = {
            type: assetTypes[assetType],
            assetContractAddress: assetAddress,
            assetId: assetId === "" ? 0 : assetId,
        };

        console.log(asset)
        for (let element of result) {
            let elemToPush = await this.prepareRecipients(element)
            multiSendArr.push(elemToPush)
        }

        console.log(multiSendArr)

//            // ToDo: what about messages?
        console.log("invoking event ", multiSendArr)
        this.html.dispatchEvent(Object.assign(new Event('multiSendMoney', {bubbles: true}), {
            multiSendArr,
            token
        }))

    }

    async prepareRecipients(res) {
        console.log(this.idriss)
        console.log(res)
        console.log(asset)
        let properAmount;
        let assetAmount = 1
        if (asset.type > 1 ) properAmount = 1;
        // ToDo: figure out assetAmount
        else properAmount = (res[1] ?? "").length > 0 ? res[1] : assetAmount;
        let resolved = await this.idriss.resolve(res[0], {'network': 'evm'})
        console.log(resolved)
        const walletTag = resolved['Public ETH']? "Public ETH" : Object.keys(resolved)[0]
        const walletType = walletTag
                ? {
                      coin: getCoin(walletTag),
                      network: "evm",
                      walletTag: walletTag,
                  }
                : walletTypeDefault;

        asset.amount = `${properAmount}`
        // ToDo: when uploading only unknown IDriss handles, there is a BigNumber bug
        console.log({"beneficiary": res[0], "walletType": walletType, "asset": asset})
        return {"beneficiary": res[0], "walletType": walletType, "asset": asset}
    }

    checkAmount(res) {
        if (res.length>1) hasAmount = true;
    }

    fixAmount(res) {
        if (res[1] == '') res[1] = 1;
    }

    isSameAmount(res) {
        if(res[1] != currentSame) sameAmount = false
    }

    handleSlider() {
        console.log("Slider clicked")
        let slider = this.html.querySelector('#Toggle');
        this.html.querySelector('.assetType').innerHTML = slider.checked? "NFT:" : "Token:";
        this.html.querySelector('.nft-mint-wrapper').firstElementChild.style.display = slider.checked ? 'block': 'none';
        this.html.querySelector('.amountSelection').style.display = slider.checked ? 'none' : 'block';
        this.refreshVisibleAssets();
    }

    async refreshVisibleAssets() {
        let slider = this.html.querySelector('#Toggle');

        let assets = this.html.querySelectorAll('.assetSelect li')

        console.log("Assets: ", assets)

        let count = 0
        for (let asset of assets) {
            let assetBalance = asset.querySelector(".amountOwned").textContent;
            let newAssetBalance = assetBalance;
            if (assetBalance === '0' && asset.dataset.assettype == "ERC20") {
                let tokenContract = await loadToken(defaultWeb3, asset.dataset.address);
                try {
                    newAssetBalance = await tokenContract.methods.balanceOf(this.selectedAccount).call();
                } catch {
                    newAssetBalance = '0';
                }
            }

            if (assetBalance === '0' && asset.dataset.assettype == "native") {
                await defaultWeb3.eth.getBalance(this.selectedAccount, function(error, result){
                    if(error){
                       console.log(error)
                       newAssetBalance = '0';
                    }
                    else{
                       console.log(" I have ", result, " MATIC.")
                       newAssetBalance = result;
                    }
                 })
            }


            asset.querySelector(".amountOwned").textContent = newAssetBalance;

            asset.style.display = slider.checked ? (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? '' : 'none') : (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? 'none' : '');
            count = asset.style.display == '' ? count + 1 : count;

            const button = asset.parentNode.parentNode.querySelector('button');
            console.log("Button is ", button)
            if (button.querySelector('.name').textContent === asset.dataset.symbol ) button.querySelector(".amountOwned").textContent = newAssetBalance;
        }
        if (count === 0) {
            this.html.querySelector('.assetSelectWrapper').style.display = 'none';
            this.html.querySelector('.errorAsset').style.display = 'block';
        }
        let requiredType = slider.checked? ["ERC721", "ERC1155"] : ["native", "ERC20"]
        if (!requiredType.includes(this.html.querySelector('.assetSelect').dataset.assettype)) {
            if (count>0) {
                for (let asset of assets) {
                    if (requiredType.includes(asset.dataset.assettype)) {
                        asset.click();
                        break
                    }
                }
            }
        }

    }

    filterAssets(assetFilter) {
        if (!assetFilter) {
            return tokens;
        } else {
            return tokens.filter(t => {
                return assetFilter[t.network.toLowerCase()]?.includes(t.symbol);
            })
        }
    }

    filterNetwork(networkFilter, ownedAssets) {
        if (!networkFilter) {
            return tokens.concat(ownedAssets);
        } else {
            let combinedAssets = tokens.concat(ownedAssets)
            return combinedAssets.filter(t => {
                return networkFilter.networks?.includes(t.network.toLowerCase());
            })
        }
    }
}