import template from "./multiSendToAnyone.mpts";
import arrow from "!!url-loader!../img/arrow.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";
import { walletTypeDefault, getCoin } from "../sendToAnyoneUtils";


let hasAmount;
let sameAmount;
let firstAmount;
let multiSendArr;

const assetTypes = {};
assetTypes["native"] = 0;
assetTypes["erc20"] = 1;
assetTypes["erc721"] = 2;
assetTypes["erc1155"] = 3;


export class MultiSendToAnyone {
    constructor(ownedAssets = [], assetFilter = null, selectNFT = false, networkFilter = {"networks":["polygon"]}) {
        ownedAssets = [
            {
                "name": "IDriss Logo",
                "address": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
                "id": "104646746365016723314061203747530081823371947018124724650840385937829649186817",
                "type": "ERC1155",
                "image": "https://i.seadn.io/gae/mLZLriTgIaWR5om8vLydrhESR7M8TzL6atXtZ8TN_wWEQEIW-5MK-9N4ukfelTVsgBUaTtzkkbnKhzLfW9Q0fvaMUlmPv9H4HBIV?w=500&auto=format",
                "network": "Polygon"
            },
            {
                "name": "Spirits Of Eastern Europe #2",
                "address": "0x2953399124f0cbb46d2cbacd8a89cf0599974963",
                "id": "92684618316586457942843142044618663200253618197452727397604755407033069469697",
                "type": "ERC1155",
                "image": "https://i.seadn.io/gae/biwkRon23U60JLJcHRp36_U23arYNwLTr4x-ApN11zsryxBy_ZQ1rZpkittDvYxkoBQm5yLNtr9Nq5OAo6kg9liUvkEEc-9fJwnqDg?w=500&auto=format",
                "network": "Polygon"
            }
        ];

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

        console.log(ownedAssets)

        this.html = create('div', {}, template({assets: ownedAssets, assetType: selectNFT ? "NFT" : "Token", arrow}));

        this.html.querySelector('input[type=checkbox]')?.addEventListener('change', (e) => {
            this.handleSlider();
        })

        this.html.querySelector('.next').addEventListener('click', async () => {
            await this.multiSend();
        })

        this.html.addEventListener('drop', async (e) => {
            console.log("Dropped a file")
            this.html.querySelector('textarea[name="recipients"]').innerHTML = "Processing ...";
            let csvContent = await this.prepareMultiSend(e);
            this.html.querySelector('textarea[name="recipients"]').innerHTML = csvContent;
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
                Object.assign(button.parentNode.dataset, li.dataset);
                li.parentNode.parentNode.classList.remove('isOpen')
                this.html.querySelector(':focus')?.blur()
                this.refreshVisibleAssets()
            }
        })


        this.html.querySelector('.multiSend')?.addEventListener('click', (e) => {

            let content = this.html.querySelector('textarea[name="recipients"]').innerHTML
            console.log(content)
            // if individual is turned on
            const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
            // if individual is turned off
            // const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => [data, this.html.querySelector('#InputCustomAmount').value]);
            console.log(result)
            // potentially also add for pasting (or real-time updating?)
            await result.forEach(function(el) {el[0] = el[0].replace(/\s+/g, '')})
            console.log(result)

        // Add stuff from below
            let assetType = this.html.querySelector('#Toggle').checked? "erc1155" : "token";
            if (assetType === 'token' && token !== 'MATIC') assetType = 'erc20';
            let token = this.html.querySelector('.assetSelect').dataset.symbol;
            let message = this.html.querySelector('.messageBox textarea').value;
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


            let properAmount;
            if (assetType === "erc721" || assetType === "erc1155") properAmount = 1;

            //todo: loop over recipients?
            // forEach(assetType, assetId, assetAddress)
            else properAmount = (assetAmount ?? "").length > 0 ? assetAmount : amount;

            const asset = {
                amount: `${properAmount}`,
                type: assetTypes[assetType],
                assetContractAddress: (assetAddress ?? "").length > 0 ? assetAddress : tokenContractAddr,
                assetId: assetId === "" ? 0 : assetId,
            };

            // ToDo: what about messages?
            this.html.dispatchEvent(Object.assign(new Event('multiSendMoney', {bubbles: true}), {
                recipients,
            }))

            await result.forEach(this.getWalletType(asset))

        });

// ToDo: show/hide elements here?
//        const toggleMessageBox = this.html.querySelector('.toggleMessageBox');
//        const messageBox = this.html.querySelector('.messageBox');
//        if (!showMessageBox)
//            toggleMessageBox.style.display = 'none';
//        else
//            toggleMessageBox.onclick = () => {
//                if (messageBox.classList.contains('isHidden')) {
//                    messageBox.classList.remove('isHidden')
//                    toggleMessageBox.lastChild.textContent = 'No message'
//                } else {
//                    messageBox.classList.add('isHidden')
//                    toggleMessageBox.lastChild.textContent = 'Add a message'
//                    messageBox.querySelector('textarea').value = '';
//                }
//            }
        // this.refreshVisibleAssets();
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

            fileReader.addEventListener("load", () => {
                const handlesRaw = fileReader.result;
                console.log(handlesRaw)
                const result = handlesRaw.split(/(?:\r\n|\n)+/).filter(function(el) {return el.length != 0}).map(data => data.split(','));
                console.log(result)
                //ToDo: filter non-RegEx strings
                result.forEach(this.hasAmount)
                if (hasAmount) result.forEach(this.fixAmount)
                console.log(hasAmount)
                textToDisplay = result.join('\n');
                if (hasAmount) firstAmount = result[0][1]
                result.forEach(this.isSameAmount)
                console.log(sameAmount)
                //ToDo: check if same amount holds true, hide amount selection otherwise "Do you want to send an individual amount to everyone, as indicated in your file? If not, choose "same amount" here"
                console.log(textToDisplay)
                resolve(textToDisplay)
            });
            fileReader.readAsText(file);
        });
    }

    // Delete this function later
    async multiSend(e){

        let content = this.html.querySelector('textarea[name="recipients"]').innerHTML
        console.log(content)
        // if individual is turned on
        const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => data.split(','));
        // if individual is turned off
        // const result = content.split('\n').filter(function(el) {return el.length != 0}).map(data => [data, this.html.querySelector('#InputCustomAmount').value]);
        console.log(result)
        // potentially also add for pasting (or real-time updating?)
        await result.forEach(function(el) {el[0] = el[0].replace(/\s+/g, '')})
        console.log(result)

//        //ToDo: define class names in widget, make sure assets are displayed correctly like in main,
//        // refreshVisibleAssets added with click
//        let assetType = this.html.querySelector('.assetTypeSelection .isSelected').dataset.value;
//        let asset = this.html.querySelector('.assetSelect').dataset.symbol;
//        if (assetType === 'native' && token !== 'MATIC') assetType = 'erc20';
//
//        //ToDo: define filterAssets --> define token?
//        let assetAddress = this.filterAssets({polygon: [token]})[0]?.address;
//        //ToDo: what to do for ERC20 & native
//        let assetId = this.html.querySelector('.assetSelect').dataset.assetid;
//
//
//        // let tokenContractAddr = tokens.filter((x) => x.symbol == token && x.network == network)[0]?.address;
//        // get from json, is this valid here? --> define token and network?
//        const asset = {
//            type: assetTypes[assetType],
//            assetContractAddress: (assetAddress ?? "").length > 0 ? assetAddress : tokenContractAddr,
//            assetId: assetId === "" ? 0 : assetId,
//        };
//
//        await result.forEach(this.getWalletType(asset))
//        console.log(multiSendArr)

    }

    // ToDo: rename to prepArray or so
    async getWalletType(res, asset) {
        let resolved = await this.idriss.resolve(res[0], {'network': 'evm'})
        const walletTag = resolved['Public ETH']? "Public ETH" : Object.keys(resolved)[0]
        const walletType = walletTag
                ? {
                      coin: getCoin(walletTag),
                      network: "evm",
                      walletTag: walletTag,
                  }
                : walletTypeDefault;
        asset.amount = res[1]
        multiSendArr.push({"beneficiary": res[0], "walletType": walletType, "asset": asset})
    }

    hasAmount(res) {
        if (res.length>1) hasAmount = true;
    }

    fixAmount(res) {
        if (res[1] == '') res[1] = 1;
    }

    isSameAmount(res) {
        if(res[1] != firstAmount) sameAmount = false
    }

    handleSlider() {
        console.log("Slider clicked")
        let slider = this.html.querySelector('#Toggle');
        this.html.querySelector('.assetType').innerHTML = slider.checked? "NFT:" : "Token:";
        this.html.querySelector('.nft-mint-wrapper').firstElementChild.style.display = slider.checked ? 'block': 'none';
        this.html.querySelector('.amountSelection').style.display = slider.checked ? 'none' : 'block';
        this.refreshVisibleAssets();
    }

    //ToDo: rewrite refreshVisibleAssets()
    refreshVisibleAssets() {
        console.log("Refresh triggered")
        let slider = this.html.querySelector('#Toggle');

        let assets = this.html.querySelectorAll('.assetSelect li')

        console.log("Assets: ", assets)

        let count = 0
        for (let asset of assets) {
            asset.style.display = slider.checked ? (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? '' : 'none') : (["ERC721", "ERC1155"].includes(asset.dataset.assettype) ? 'none' : '');
            count = asset.style.display == '' ? count + 1 : count;
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