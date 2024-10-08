import template from "./multiSendToAnyone.mpts";
import arrow from "!!url-loader!../img/arrow.svg"
import polygonTokenIcon from "!!url-loader!../img/polygon-token-icon.webp"
import {tokens, multiToken} from "../sendToAnyoneUtils";
import {create} from "fast-creator";
import { walletTypeDefault, getCoin, loadToken, loadNFT, customNFT,  regPh, regM, regT } from "../sendToAnyoneUtils";
import { defaultWeb3, defaultWeb3ETH } from "../sendToAnyoneLogic";
import { SendToAnyoneLogic } from "../sendToAnyoneLogic";
import {IdrissCrypto} from "idriss-crypto/browser";
import custom from "!!url-loader!../img/custom.png"


let hasAmount;
let sameAmount;
let currentSame;
let gotBalance = false;
let customAmount = false;
let multiSendArr = [];
let asset;
let recipientsNoAmount = []
let content=""
let result = []

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

        let networks = [
            {name: 'Polygon ', img: polygonTokenIcon, chainId: 137, code: 'Polygon'}
        ]

        if (networkFilter) {
            ownedAssets = this.filterNetwork(networkFilter, ownedAssets)
        }

        for (let [key, value] of Object.entries(ownedAssets)) {
            if (!ownedAssets[key].balance) ownedAssets[key].balance = 0;
            if (!ownedAssets[key].type) ownedAssets[key].type =  ownedAssets[key].symbol === "POL" ? "native" : "ERC20";
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

        this.html.querySelector('.customAddress').addEventListener('input', async (e) => {
            console.log("input in custom asset field")
            let tokenData = await this.setCustomAsset();
            console.log(tokenData)
        })

        this.html.querySelector('.customId').addEventListener('input', async (e) => {
            console.log("input in custom Id field")
            let tokenData = await this.setCustomAsset();
            console.log(tokenData)
        })

        this.html.querySelectorAll('.select').forEach(select => {
            select.onblur = e => { select.classList.remove('isOpen'); console.log("blurring");}
            select.onclick = e => { if (select.dataset.address !== 'custom') select.firstElementChild.focus(); }
            select.querySelector('.customAddress').onclick = e => { select.classList.remove('isOpen'); console.log('Im here')}
        })

        this.html.querySelectorAll('.select ul li').forEach(li => {
            li.onclick = e => {
                this.liClicked(e, li);
            }
            li.onmousedown = e => {e.preventDefault()}
        })

        this.html.querySelector('.multiSend')?.addEventListener('click', async (e) => {
            console.log("next clicked")
            await this.checkValidity()? this.multiSend() : console.log("not valid");
        });


        this.html.querySelector('#InputCustomAmount')?.addEventListener('input', (e) => {
            this.content = this.html.querySelector('textarea[name="recipients"]').value;
            this.result = this.content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
            this.html.querySelector('#InputCustomAmount').placeholder = "0.00";
            this.hasAmount = false;
            // if empty, check this.hasAmounts? custom : 0.00
            if (!this.html.querySelector('#InputCustomAmount').value) return;

            //this.modifyRecipients();
            this.modifyAmountInput();

        })

        this.html.querySelector('textarea[name="recipients"]')?.addEventListener('input', async (e) => {
            this.content = this.html.querySelector('textarea[name="recipients"]').value;
            this.result = this.content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
            this.recipientsNoAmount = this.content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(',')[0])
            await this.result.forEach((element) => {element[0] = element[0].replace(/\s+/g, '')})
            await this.recipientsNoAmount.forEach((element) => {element = element.replace(/\s+/g, '')})

            if (this.result.length === 0) {
                this.html.querySelector('.unique-recipients-wrapper').style.visibility = "hidden";
                this.html.querySelector('#InputCustomAmount').placeholder = "0.00";
                return
            }

            this.sameAmount = true;
            this.currentSame = this.result[0][1];
            console.log(this.result)
            for (let element of this.result){
                await this.isSameAmount(element)
            }
            console.log("same amount? ", this.sameAmount)
            if (e.data == "," && this.result.length == 1) this.sameAmount = false;
            if (this.result.length == 1 && this.result[0].length == 1) this.hasAmount = false;
            if (this.sameAmount) {
                console.log("same amount, should be placed in input field")
                console.log(this.result[0])
                this.html.querySelector('#InputCustomAmount').value = this.result[0][1]? this.result[0][1] : this.html.querySelector('#InputCustomAmount').value;
                this.html.querySelector('#InputCustomAmount').placeholder = "0.00";
            } else {
                this.hasAmount = true;
                this.html.querySelector('#InputCustomAmount').placeholder = "Custom"
                this.html.querySelector('#InputCustomAmount').value = ""
            }
            if (e.inputType == "insertFromPaste"){
                if (!this.sameAmount || this.currentSame) this.hasAmount = true;
            }
            //let modifier = e.data == ","? e.data : e.inputType
            let modifier = e.inputType
            this.modifyRecipients(modifier);
        })

        if (window.innerWidth < 640) {
          this.html.querySelector('textarea[name="recipients"]').placeholder = "hello@idriss.xyz\n+16506655942\n@IDriss_xyz\n--------- paste a list here ---------";
        } else {
          this.html.querySelector('textarea[name="recipients"]').placeholder = "hello@idriss.xyz\n+16506655942\n@IDriss_xyz\n---------- paste or drag a file here ----------";
        }

        const recipientsTextarea = this.html.querySelector('textarea[name="recipients"]');

        window.addEventListener('resize', function() {
          if (window.innerWidth < 640) {
            recipientsTextarea.placeholder = "hello@idriss.xyz\n+16506655942\n@IDriss_xyz\n--------- paste a list here ---------";
          } else {
            recipientsTextarea.placeholder = "hello@idriss.xyz\n+16506655942\n@IDriss_xyz\n---------- paste or drag a file here ----------";
          }
        });

        this.refreshVisibleAssets();
    }


    async modifyAmountInput() {

        this.hasAmount = false

        this.currentSame = this.html.querySelector('#InputCustomAmount').value;
        console.log(this.currentSame)

        this.result = this.result.map(data => [data[0], this.currentSame]);
        this.sameAmount = true
        this.hasAmount = false
        let textToDisplay = this.hasAmount? this.result.join("\n") : this.recipientsNoAmount.join('\n')
        console.log(this.recipientsNoAmount, this.hasAmount, textToDisplay)
        this.html.querySelector('textarea[name="recipients"]').value =  textToDisplay;
    }

    liClicked(e, li) {
            console.log("Li clicked", e)
            e.stopPropagation();
            const button = li.parentNode.parentNode.querySelector('button')
            button.querySelector('.name').textContent = li.querySelector('.name').textContent;
            button.querySelector('img').src = li.querySelector('img').src;
            button.querySelector('.amountOwned').textContent = li.querySelector('.amountOwned').textContent;
            Object.assign(button.parentNode.dataset, li.dataset);
            button.querySelector('.amountOwned').style.display = li.dataset.address=='custom'? "none":"block";
            button.querySelector('.name').style.display = li.dataset.address=='custom'? "none":"block";
            button.querySelector('.customAddress').style.display = li.dataset.address=='custom'? "block":"none";
            button.querySelector('.customId').style.display = li.dataset.address=='custom'? (["ERC721", "ERC1155"].includes(li.dataset.assettype)? "block":"none") : "none";
            li.parentNode.parentNode.classList.remove('isOpen')
            this.html.querySelector('.customAssetError').style.display = "none";
            this.html.querySelector('.customAddress').value = "";
            this.html.querySelector('.customId').value = "";
            this.html.querySelector(':focus')?.blur()
            this.refreshVisibleAssets()
        }


    async checkValidity() {

        let isValid = false;
        this.html.querySelector(".multiSend").disabled = true;

        let token = this.html.querySelector('.assetSelect').dataset.symbol;
        console.log("token is ", token)
        if (token==='custom') {
            console.log("token is custom inner")
            this.html.querySelector('.customAssetError').style.display = "block";
            return isValid
        }
        this.html.querySelector('.customAssetError').style.display = "none";

        let wrongRegex = ""
        let wrongAmount = ""

        if (!this.result) {
            this.html.querySelector('.unique-recipients-wrapper').firstElementChild.innerHTML =  "No input made";
            this.html.querySelector('.unique-recipients-wrapper').firstElementChild.style.color =  "red";
            this.html.querySelector('.unique-recipients-wrapper').style.visibility = "visible";
            return isValid
        }

        for (let res of this.result) {
            if (!this.isMatch(res[0])) wrongRegex = res[0].concat(" is not a valid input");
            if (res[1] == "0") wrongAmount = "Amount cannot be 0 for ".concat(res[0]);
            if (!res[1]) wrongAmount = "Cannot find amount for ".concat(res[0]);
            if (wrongAmount && !this.currentSame) wrongAmount = "Please enter an amount";

            if(wrongRegex || wrongAmount) {
                this.html.querySelector('.unique-recipients-wrapper').firstElementChild.innerHTML =  wrongRegex? wrongRegex : wrongAmount;
                this.html.querySelector('.unique-recipients-wrapper').firstElementChild.style.color =  "red";
                this.html.querySelector('.unique-recipients-wrapper').style.visibility = "visible";
                return isValid
            }
        }

        isValid = true;

        return isValid;
    }

    async modifyRecipients(inputType="") {
        let slider = this.html.querySelector('#Toggle');
        this.hasAmount = false
        for (let element of this.result) {
            await this.checkAmount(element);
        }

        if (!this.hasAmount) this.result = this.content.split('\n').filter(function(el) {return el.length != 0}).map(data => [data, slider.checked? '1' : this.html.querySelector('#InputCustomAmount').value]);

        console.log("Got this resolved result: ", this.result)

        this.html.querySelector(".multiSend").disabled = false;

        let textToDisplay = this.hasAmount? this.result.join('\n') : this.recipientsNoAmount.join('\n') ;

        this.html.querySelector('textarea[name="recipients"]').value =  textToDisplay.concat((inputType == "insertLineBreak")? "\n" : "");

        let uniqueRes = new Set(this.recipientsNoAmount).size;
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

        if (!file.name.endsWith(".csv")) return ""

        return new Promise(resolve => {
            const fileReader = new FileReader();
            this.hasAmount = false

            fileReader.addEventListener("load", async () => {
                const handlesRaw = fileReader.result;
                console.log(handlesRaw)
                this.result = handlesRaw.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length != 0}).map(data => data.split(','));
                this.recipientsNoAmount = handlesRaw.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length != 0}).map(data => data.split(',')[0])

                console.log(this.result)
                console.log(this.recipientsNoAmount)

                for (let element of this.result) {
                    await this.checkAmount(element);
                }

                if (this.hasAmount) {
                    for (let element of this.result) {
                        element[1] = element[1]? element[1] : '';
                    }
                } else {
                    // dummy input "1" when no amount added
                    this.result = this.result.map(data => [data[0], '']);
                }

                console.log(this.result)
                console.log(this.hasAmount)

                this.sameAmount = true;
                this.currentSame = this.result[0][1]
                for (let element of this.result){
                    await this.isSameAmount(element)
                }

                // let textToDisplay = this.sameAmount? this.recipientsNoAmount.join('\n') : this.result.join('\n');
                let textToDisplay = this.hasAmount? this.result.join('\n') : this.recipientsNoAmount.join('\n');
                this.html.querySelector('#InputCustomAmount').placeholder = this.hasAmount? "Custom" : "0.00";
                this.html.querySelector('#InputCustomAmount').value = this.sameAmount? this.currentSame : "";

                console.log("Is same amount? ", this.sameAmount)
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
        console.log(this.content)

        console.log(this.result)

        // filter non matches, should never actually happen as it block execution beforehand
        this.result = this.result.filter(recipient => this.isMatch(recipient[0]))

        if (this.result.length === 0) {
            this.html.querySelector('#buttonNextSpinner').style.display = 'none';
            this.html.querySelector('#buttonNext').style.display = '';
            return
        }
        let assetType = this.html.querySelector('#Toggle').checked? "erc1155" : "native";
        let token = this.html.querySelector('.assetSelect').dataset.symbol;
        if (assetType === 'native' && token !== 'POL') assetType = 'erc20';
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
        if (assetType === 'erc1155' && assetAddress === ZERO_ADDRESS) return;

        asset = {
            type: assetTypes[assetType],
            assetContractAddress: assetAddress,
            assetId: assetId === "" ? 'undefined' : assetId,
        };

        asset = Object.fromEntries(Object.entries(asset).filter(([k,v]) => v!=='undefined'));

        for (let element of this.result) {
            let elemToPush = await this.prepareRecipients(element)
            await this.sleep(500)
            multiSendArr.push(elemToPush)
        }

        // ToDo: what about messages?
        console.log("invoking event ", multiSendArr)
        this.html.dispatchEvent(Object.assign(new Event('multiSendMoney', {bubbles: true}), {
            multiSendArr,
            token
        }))

    }

    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // for the future, also need library change to accept other strings
    async isMatch(identifier) {
        if (identifier.match(regPh) || identifier.match(regM) || identifier.match(regT)) return true
        if (await defaultWeb3.utils.isAddress(identifier)) return true;
        if (await defaultWeb3ETH.eth.ens.recordExists(identifier)) return true;
        return false
    }

    async prepareRecipients(res) {
        let properAmount = await SendToAnyoneLogic.calculateTokenAmount(asset.assetContractAddress, res[1], asset.type);
        console.log(properAmount)
        let resolved = {}
        try {
            resolved = await this.idriss.resolve(res[0], {'network': 'evm'})
            console.log("resolved: ", resolved)
            res[0] = resolved['Public ETH']? resolved['Public ETH'] : resolved[Object.keys(resolved)[0]]
        } catch {
            if (await defaultWeb3ETH.eth.ens.recordExists(res[0])) res[0] = await defaultWeb3ETH.eth.ens.getAddress(res[0]);
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

    isSameAmount(res) {
        if(res[1] != this.currentSame) this.sameAmount = false;
    }

    handleSlider() {
        let slider = this.html.querySelector('#Toggle');
        this.html.querySelector('.customAssetError').style.display = "none";
        this.html.querySelector('.assetType').textContent = slider.checked? "NFT:" : "Token:";
        this.html.querySelector('#assetHeader').textContent = slider.checked? "NFT" : "Token";
        this.html.querySelector('.nft-mint-wrapper').firstElementChild.style.display = slider.checked ? 'block': 'none';
        this.html.querySelector('.amountSelection').style.display = slider.checked ? 'none' : 'block';


        // reset custom asset data
        this.html.querySelector('.customAddress').value = "";
        this.html.querySelector('.customId').value = "";

        this.content = this.html.querySelector('textarea[name="recipients"]').value;

        this.result = this.content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
        this.recipientsNoAmount = this.content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(',')[0])

        if (!this.hasAmount) {

            this.currentSame = slider.checked? '1': this.html.querySelector('#InputCustomAmount').value;

            if (this.result) this.result = this.result.map(data => [data[0], this.currentSame]);
        }
        console.log(this.result)

        // ToDo: delete, as checking slider already selects the first valid list element?
        // this.modifyAmountInput();
        // this.modifyRecipients();
        this.refreshVisibleAssets();
        console.log(this.result)
    }

    async getTokenBalance(address, type, id="0") {
        console.log(type, id)
        if (address==="custom") return "Input Address"
        let assetContract = type=='ERC20'? await loadToken(defaultWeb3, address): await loadNFT(defaultWeb3, address);
        let tempNewAssetBalance;
        let newAssetBalance;
        try {
            if (id === "0") {
                tempNewAssetBalance = await assetContract.methods.balanceOf(this.selectedAccount).call();
                let newBalanceDecimals = await assetContract.methods.decimals().call();
                if (tempNewAssetBalance != '0') newAssetBalance = parseInt(tempNewAssetBalance)/10**parseInt(newBalanceDecimals)
            } else {
                tempNewAssetBalance = await assetContract.methods.balanceOf(this.selectedAccount, parseInt(id)).call();
                if (tempNewAssetBalance != '0') newAssetBalance = tempNewAssetBalance;
            }
        } catch (e) {
            console.log(e)
            newAssetBalance = '0';
        }
        return newAssetBalance? newAssetBalance + "" : "0"
    }

    async getTokenData(address, type, customId="") {
        if ((type!=='erc20' && !customId) || !address) return false
        try {
            let tokenContract = type==='erc20'? await loadToken(defaultWeb3, address) : await loadNFT(defaultWeb3, address)
            console.log(tokenContract.methods)
            let tempAssetBalance;
            let tempTokenDecimals;
            let tempTokenSymbol;
            let tempTokenName;
            let tempTokenSrc = custom;
            let tempAdjustedBalance = '0';

            try {
                tempAssetBalance = customId? await tokenContract.methods.balanceOf(this.selectedAccount, customId).call() : await tokenContract.methods.balanceOf(this.selectedAccount).call();
                tempTokenDecimals = customId? 0 : await tokenContract.methods.decimals().call();
                if (tempAssetBalance==='0') return false
                if (customId) {
                    let tokenURI = await tokenContract.methods.uri(customId).call();
                    if (tokenURI.startsWith("ipfs://ipfs")) tokenURI = tokenURI.replace("ipfs://ipfs", "https://ipfs.io/ipfs/");
                    if (tokenURI.startsWith("ipfs://")) tokenURI = tokenURI.replace("ipfs://", "https://ipfs.io/ipfs/");
                    try {
                        let uriData;
                        uriData = await fetch(tokenURI).then(async (res) => uriData = await res.json());
                        console.log(uriData)
                        tempTokenName = uriData.name
                        tempTokenSymbol = uriData.name
                        tempTokenSrc = uriData.image
                        if (tempTokenSrc.startsWith("ipfs://ipfs")) tempTokenSrc = tempTokenSrc.replace("ipfs://ipfs", "https://ipfs.io/ipfs/");
                        if (tempTokenSrc.startsWith("ipfs://")) tempTokenSrc = tempTokenSrc.replace("ipfs://", "https://ipfs.io/ipfs/");
                    } catch (e) {
                        console.log("nft data not found: ", e)
                        return false
                    }
                } else {
                    tempTokenName = await tokenContract.methods.name().call();
                    tempTokenSymbol = await tokenContract.methods.symbol().call();
                }
                if (tempAssetBalance != '0') tempAdjustedBalance = (parseInt(tempAssetBalance)/10**parseInt(tempTokenDecimals)) + ""
            } catch (error) {
                console.log(error)
                return false
            }
            return {tempAssetBalance, tempAdjustedBalance, tempTokenDecimals, tempTokenSymbol, tempTokenName, tempTokenSrc}
        } catch {
            return false
        }
    }

    async refreshVisibleAssets() {
        let slider = this.html.querySelector('#Toggle');

        let assets = this.html.querySelectorAll('.assetSelect li')


        let count = 0
        for (let asset of assets) {
            asset.style.display = slider.checked ? (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? '' : 'none') : (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? 'none' : '');
            count = asset.style.display == '' ? count + 1 : count;
        }

        if (count === 0) {
            this.html.querySelector('.assetSelectWrapper').style.display = 'none';
            this.html.querySelector('.errorAsset').style.display = 'block';
        }

        let calculatedBalancesPromises=[]
        for (let asset of assets) {
            calculatedBalancesPromises.push(this.visibleAssetsBalances(asset));
        }

        await Promise.all(calculatedBalancesPromises)

        for (let asset of assets) {
            if (asset.dataset.assettype !== "native" && asset.querySelector(".amountOwned").textContent === "0") asset.style.display = 'none'
        }
        this.gotBalance = true;

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

    async visibleAssetsBalances(_asset) {
        const button = _asset.parentNode.parentNode.querySelector('button');
        let assetBalance = _asset.querySelector(".amountOwned").textContent;
        let newAssetBalance = assetBalance;
        if (!this.gotBalance) {
            console.log(assetBalance, _asset.dataset.symbol)
            if (assetBalance === '0' && _asset.dataset.assettype == "ERC20") {
                newAssetBalance = await this.getTokenBalance(_asset.dataset.address, _asset.dataset.assettype)
            }
            if (assetBalance === '0' && _asset.dataset.assettype == "native") {
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
            // ToDo: add case for ERC1155, call the same function as in ERC20 -> combine with above?
            if (assetBalance === '0' && _asset.dataset.assettype == "ERC1155") {
                newAssetBalance = await this.getTokenBalance(_asset.dataset.address, _asset.dataset.assettype, _asset.dataset.assetid)
            }
        }
        _asset.querySelector(".amountOwned").textContent = newAssetBalance;
        if (button.querySelector('.name').textContent === _asset.dataset.symbol ) button.querySelector(".amountOwned").textContent = newAssetBalance;
    }

    async setCustomAsset() {

        let customAddress = this.html.querySelector('.customAddress').value;
        let customId = this.html.querySelector('.customId').value;
        this.html.querySelector('.customAssetError').style.display = "none";

        let slider = this.html.querySelector('#Toggle');
        let selectedAssetType = slider.checked? "nft" : "erc20";

        let customToken = await this.getTokenData(customAddress, selectedAssetType, customId);

        console.log(customToken)

        if (customToken) {
            let assets = this.html.querySelectorAll('.assetSelect li')
            const customElems = this.html.querySelectorAll('li[data-address="custom"]');
            const customElem = selectedAssetType=="erc20"? customElems[0] : customElems[1]
            let newCustomElem = customElem.cloneNode(true, true);
            newCustomElem.dataset.address = customAddress;
            newCustomElem.dataset.assetid = customId? customId : "undefined";
            newCustomElem.dataset.symbol = customToken.tempTokenSymbol;
            newCustomElem.querySelector('.name').innerHTML = customToken.tempTokenName;
            newCustomElem.querySelector('img').src = customToken.tempTokenSrc;
            newCustomElem.querySelector('.amountOwned').innerHTML = customToken.tempAdjustedBalance;

            newCustomElem.onclick = e => {
                this.liClicked(e, newCustomElem);
            }
            newCustomElem.onmousedown = e => {e.preventDefault()}

            customElem.parentNode.insertBefore(newCustomElem, customElem);

            newCustomElem.click();
        }
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
            let combinedAssets = tokens.concat(ownedAssets)
            combinedAssets.push(customNFT)
            return combinedAssets;
        } else {
            let combinedAssets = tokens.concat(ownedAssets)
            combinedAssets.push(customNFT)
            return combinedAssets.filter(t => {
                return networkFilter.networks?.includes(t.network.toLowerCase());
            })
        }
    }
}

