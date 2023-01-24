import template from "./multiSendToAnyone.mpts";
import arrow from "!!url-loader!../img/arrow.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";
import { walletTypeDefault, getCoin, loadToken } from "../sendToAnyoneUtils";
import { defaultWeb3 } from "../sendToAnyoneLogic";
import { SendToAnyoneLogic } from "../sendToAnyoneLogic";
import {IdrissCrypto} from "idriss-crypto/browser";

let hasAmount = false;
let sameAmount = false;
let currentAmount=0;
let currentSame;
let gotBalance = false;
let multiSendArr = [];
let asset;

const regPh = /^(\+\(?\d{1,4}\s?)\)?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}/;
const regM = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
const regT = /^@[a-zA-Z0-9_]{1,15}$/;

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
            e.preventDefault();
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
            this.html.querySelector('#InputCustomAmount').placeholder = "0.00";
            // if empty, check this.hasAmounts? custom : 0.00
            if (!this.html.querySelector('#InputCustomAmount').value) return;
            const tempAmount = this.html.querySelector('#InputCustomAmount').value? this.html.querySelector('#InputCustomAmount').value : '1';

            console.log(tempAmount, currentAmount)
            // check logic
            if (tempAmount === currentAmount) return

            console.log("Still checking amount function")
            currentAmount = tempAmount;
            currentSame = tempAmount;
            this.modifyAmountInput();
            this.modifyRecipients();
        })

        this.html.querySelector('textarea[name="recipients"]')?.addEventListener('input', async (e) => {
            console.log(e)
            const content = this.html.querySelector('textarea[name="recipients"]').value;
            let result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
            await result.forEach((element) => {element[0] = element[0].replace(/\s+/g, '')})
            if (result.length === 0) {
                this.html.querySelector('.unique-recipients-wrapper').style.visibility = "hidden";
                this.html.querySelector('#InputCustomAmount').placeholder = "0.00";
                return
            }
            for (let element of result){
                await this.isSameAmount(element)
            }
            console.log("same amount? ", this.sameAmount)

            // check logic: placeholder changed, but only when this.hasAmount == true
            if (this.sameAmount) {
                console.log("same amount, should be placed in input field")
                console.log(result[0])
                this.html.querySelector('#InputCustomAmount').placeholder = "Custom"
            } else {
                this.html.querySelector('#InputCustomAmount').placeholder = "Custom"
            }
            this.modifyRecipients(e.inputType);
        })

        this.html.querySelector('textarea[name="recipients"]').placeholder = "hello@idriss.xyz\n+16506655942\n@IDriss_xyz\n---------- paste or drag a file here ----------";
        this.refreshVisibleAssets();
    }

    async modifyAmountInput() {
        const content = this.html.querySelector('textarea[name="recipients"]').value;
        let result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
        for (let i = 0; i< result.length; i++) {
            result[i][0] = result[i][0].replace(/\s+/g, '');
        }
        console.log("Still checking amount function1")
        if (result.length === 0) return;
        console.log("Still checking amount function2")
        console.log(currentAmount)
        result = result.map(data => [data[0], currentAmount]);
        let textToDisplay = result.join('\n');
        this.html.querySelector('textarea[name="recipients"]').value =  textToDisplay;
    }


    async modifyRecipients(inputType="") {
        let content = this.html.querySelector('textarea[name="recipients"]').value;

        // if individual amounts entered
        let result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
        console.log(result)
        if (!result[result.length - 1][1] || !this.isMatch(result[result.length - 1][0])) {
            this.html.querySelector(".multiSend").disabled = true;
            this.html.querySelector('.unique-recipients-wrapper').firstElementChild.innerHTML =  "Some of you input is invalid";
            this.html.querySelector('.unique-recipients-wrapper').firstElementChild.style.color =  "red";
            this.html.querySelector('.unique-recipients-wrapper').style.visibility = "visible";
            return
        }
        this.html.querySelector(".multiSend").disabled = false;

        // if same amounts entered
        // const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => [data, this.html.querySelector('#InputCustomAmount').value]);

        let recipients = []
        for (let i = 0; i< result.length; i++) {
            result[i][0] = result[i][0].replace(/\s+/g, '');
            recipients.push(result[i][0])
        }
        console.log(result)

        let textToDisplay = result.join('\n');

        this.html.querySelector('textarea[name="recipients"]').value =  textToDisplay.concat((inputType == "insertLineBreak")? "\n" : "");

        let uniqueRes = new Set(recipients).size;
        this.html.querySelector('.unique-recipients-wrapper').firstElementChild.innerHTML =  "Unique recipients: " + uniqueRes.toString();
        this.html.querySelector('.unique-recipients-wrapper').firstElementChild.style.color =  "#6B7280";
        this.html.querySelector('.unique-recipients-wrapper').style.visibility = (uniqueRes==0)? "hidden" : "visible";
    }

    async prepareMultiSend(e){
        console.log(e)
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

            fileReader.addEventListener("load", async () => {
                const handlesRaw = fileReader.result;
                console.log(handlesRaw)
                let result = handlesRaw.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length != 0}).map(data => data.split(','));
                console.log(result)
                //ToDo: filter non-RegEx strings
                for (let element of result) {
                    await this.checkAmount(element);
                }
                if (this.hasAmount) {
                    for (let element of result) {
                        await this.fixAmount(element)
                    }
                } else {
                    result = result.map(data => [data[0], '1']);
                }
                console.log(result)
                console.log(this.hasAmount)
                textToDisplay = result.join('\n');
                if (this.hasAmount) currentSame = result[0][1]
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
        this.html.querySelector('#buttonNextSpinner').style.display = '';
        this.html.querySelector('#buttonNext').style.display = 'none';

        multiSendArr = []
        let content = this.html.querySelector('textarea[name="recipients"]').value;
        console.log(content)
        // if individual is turned on
        let result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
        // if individual is turned off
        // const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => [data, this.html.querySelector('#InputCustomAmount').value]);
        console.log(result)
        // potentially also add for pasting (or real-time updating?)
        for (let i = 0; i< result.length; i++) {
            result[i][0] = result[i][0].replace(/\s+/g, '');
        }

        console.log(result)
        if (result.length === 0) {
            this.html.querySelector('#buttonNextSpinner').style.display = 'none';
            this.html.querySelector('#buttonNext').style.display = 'block';
            return;
        }
        let assetType = this.html.querySelector('#Toggle').checked? "erc1155" : "native";
        let token = this.html.querySelector('.assetSelect').dataset.symbol;
        if (assetType === 'native' && token !== 'MATIC') assetType = 'erc20';
        // no message box atm
        // let message = this.html.querySelector('.messageBox textarea').value;
        // or just from selected asset?
        let assetAddress = this.html.querySelector('.assetSelect').dataset.address;
        let assetId = this.html.querySelector('.assetSelect').dataset.assetid;
        if (WEBPACK_MODE !== 'production') {
            assetAddress = DEFAULT_TOKEN_CONTRACT_ADDRESS
        }
        if (assetType === 'erc1155') {
            assetAddress = this.html.querySelector('.assetSelect').dataset.address;
            assetType = this.html.querySelector('.assetSelect').dataset.assettype.toLowerCase();
        }
        if (assetType === 'erc1155' && assetAddress === "0x0000000000000000000000000000000000000000") return;

        asset = {
            type: assetTypes[assetType],
            assetContractAddress: assetAddress,
            assetId: assetId === "" ? 0 : assetId,
        };

        asset = Object.fromEntries(Object.entries(asset).filter(([k,v]) => v!=='undefined'));


        for (let element of result) {
            let elemToPush = await this.prepareRecipients(element)
            multiSendArr.push(elemToPush)
        }


        // ToDo: what about messages?
        console.log("invoking event ", multiSendArr)
        this.html.dispatchEvent(Object.assign(new Event('multiSendMoney', {bubbles: true}), {
            multiSendArr,
            token
        }))

    }

    // for the future, also need library change to accept other strings
    isMatch(identifier) {
        if (defaultWeb3.utils.isAddress(identifier)) return true;
        //if (defaultWeb3ETH.eth.ens.recordExists(identifier)) return true;
        if (identifier.match(regPh) || identifier.match(regM) || identifier.match(regT)) return true
        return false
    }

    async prepareRecipients(res) {
        let properAmount = await SendToAnyoneLogic.calculateTokenAmount(asset.assetContractAddress, res[1], asset.type);
        console.log(properAmount)
        let resolved = {}
        try {
            resolved = await this.idriss.resolve(res[0], {'network': 'evm'})
        } catch {
            console.log()
        }
        const walletTag = resolved['Public ETH']? "Public ETH" : Object.keys(resolved)[0]
        const walletType = walletTag
                ? {
                      coin: getCoin(walletTag),
                      network: "evm",
                      walletTag: walletTag,
                  }
                : walletTypeDefault;

        asset.amount = `${properAmount}`
        console.log({"beneficiary": res[0], "walletType": walletType, "asset": asset})
        return {"beneficiary": res[0], "walletType": walletType, "asset": asset}
    }

    checkAmount(res) {
        if (res.length>1) this.hasAmount = true;
    }

    fixAmount(res) {
        if (res[1] == '') res[1] = 1;
    }

    // logic broken
    isSameAmount(res) {
        if(res[1] != currentSame) this.sameAmount = false
    }

    handleSlider() {
        let slider = this.html.querySelector('#Toggle');
        this.html.querySelector('.assetType').textContent = slider.checked? "NFT:" : "Token:";
        this.html.querySelector('#assetHeader').textContent = slider.checked? "NFT" : "Token";
        this.html.querySelector('.nft-mint-wrapper').firstElementChild.style.display = slider.checked ? 'block': 'none';
        this.html.querySelector('.amountSelection').style.display = slider.checked ? 'none' : 'block';
        this.refreshVisibleAssets();
    }

    async getTokenBalance(address) {
        let tokenContract = await loadToken(defaultWeb3, address);
        let tempNewAssetBalance;
        try {
            tempNewAssetBalance = await tokenContract.methods.balanceOf(this.selectedAccount).call();
            let newBalanceDecimals = await tokenContract.methods.decimals().call();
            if (tempNewAssetBalance != '0') newAssetBalance = parseInt(tempNewAssetBalance)/10**parseInt(newBalanceDecimals)
        } catch {
            tempNewAssetBalance = '0';
        }
        return tempNewAssetBalance + ""
    }

    async getTokenData(address) {
        let tokenContract = await loadToken(defaultWeb3, address);
        let tempAssetBalance;
        let tempTokenDecimals;
        let tempTokenSymbol;
        let tempTokenName;
        let tempAdjustedBalance = '0';

        try {
            tempAssetBalance = await tokenContract.methods.balanceOf(this.selectedAccount).call();
            tempTokenDecimals = await tokenContract.methods.decimals().call();
            tempTokenSymbol = await tokenContract.methods.symbol().call();
            tempTokenName = await tokenContract.methods.name().call();
            if (tempAssetBalance != '0') tempAdjustedBalance = (parseInt(tempAssetBalance)/10**parseInt(tempTokenDecimals)) + ""
        } catch (error) {
            console.log(error)
            return false
        }
        return {tempAssetBalance, tempAdjustedBalance, tempTokenDecimals, tempTokenSymbol, tempTokenName}
    }

    async refreshVisibleAssets() {
        let slider = this.html.querySelector('#Toggle');

        let assets = this.html.querySelectorAll('.assetSelect li')


        let count = 0
        for (let asset of assets) {
            const button = asset.parentNode.parentNode.querySelector('button');
            let assetBalance = asset.querySelector(".amountOwned").textContent;
            let newAssetBalance = assetBalance;
            if (!gotBalance) {
                if (assetBalance === '0' && asset.dataset.assettype == "ERC20") {

                    newAssetBalance = this.getTokenBalance(asset.dataset.address)
                }

                if (assetBalance === '0' && asset.dataset.assettype == "native") {
                    await defaultWeb3.eth.getBalance(this.selectedAccount, function(error, result){
                        if(error){
                           console.log(error)
                           newAssetBalance = '0';
                        }
                        else{
                           newAssetBalance = result;
                           if (newAssetBalance != '0') newAssetBalance = parseInt(newAssetBalance)/10**18
                        }
                    })
                }
                gotBalance = true;
            }
            asset.querySelector(".amountOwned").textContent = newAssetBalance;
            if (button.querySelector('.name').textContent === asset.dataset.symbol ) button.querySelector(".amountOwned").textContent = newAssetBalance;

            asset.style.display = slider.checked ? (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? '' : 'none') : (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? 'none' : '');
            asset.querySelector(".amountOwned").style.display = slider.checked ? 'none' : '';

            count = asset.style.display == '' ? count + 1 : count;

            button.querySelector(".amountOwned").style.display = slider.checked ? 'none' : '';
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

    async setCustomAsset() {
        let customAddress = this.html.querySelector('.customAssetAddress').value;
        let slider = this.html.querySelector('#Toggle');
        let selectedAssetType = slider.checked? "NFT:" : "Token:";

        let customToken = slider.checked? "NFT:" : await this.getTokenData(customAddress);
        console.log(customToken)
    }

    async calculateAmount() {

        let amount = this.html.querySelector('#InputCustomAmount').value? this.html.querySelector('#InputCustomAmount').value : '1';

        let token = this.html.querySelector('.assetSelect').dataset.symbol;
        let tempAdjustedBalance;

        // ToDo: assetAddress can be custom
        let assetAddress = this.filterAssets({polygon: [token]})[0]?.address;

        let tokenContract = await loadToken(defaultWeb3, assetAddress);
        let tempTokenDecimals = await tokenContract.methods.decimals().call();
        if (tempAssetBalance != '0') tempAdjustedBalance = parseInt(parseFloat(amount.replace(/,/g, "."))*10**parseInt(tempTokenDecimals)) + ""

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