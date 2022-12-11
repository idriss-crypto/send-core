import template from "./multiSendToAnyone.mpts";
import arrow from "!!url-loader!../img/arrow.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";

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

        this.html.addEventListener('drop', async (e) => {
            console.log("Dropped a file")
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

//
//        this.html.querySelector('.send')?.addEventListener('click', (e) => {
//            let assetType = this.html.querySelector('.assetTypeSelection .isSelected').dataset.value;
//            let network = this.html.querySelector('.networkSelect').dataset.network;
//            let token = this.html.querySelector('.tokenSelect').dataset.symbol;
//            if (assetType === 'native' && token !== 'MATIC') assetType = 'erc20';
//            let message = this.html.querySelector('.messageBox textarea').value;
//            let amount = this.html.querySelector('.valueSelection .isSelected input')?.value || this.html.querySelector('.valueSelection .isSelected').dataset.value;
//            let assetAddress = this.filterAssets({polygon: [token]})[0]?.address;
//            let assetId = this.html.querySelector('.nftSelect').dataset.assetid;
//            let assetAmount = 1
//            if (WEBPACK_MODE !== 'production') {
//                assetAddress = DEFAULT_TOKEN_CONTRACT_ADDRESS
//            }
//            if (assetType === 'erc721') {
//                assetAddress = this.html.querySelector('.nftSelect').dataset.address;
//                amount = 1;
//                assetType = this.html.querySelector('.nftSelect').dataset.assetType.toLowerCase();
//            }
//            if (assetType === 'erc721' && assetAddress === "0x0000000000000000000000000000000000000000") return;
//            this.html.dispatchEvent(Object.assign(new Event('sendMoney', {bubbles: true}), {
//                identifier,
//                network,
//                assetType,
//                assetAddress,
//                assetId,
//                assetAmount,
//                amount,
//                token,
//                message
//            }))
//        });

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
        //ToDo:  refresh visible assets
    }

    prepareCSVDownload(){console.log('data:text/csv;base64,' + btoa(temp1.value))}

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

            fileReader.addEventListener("load", () => {
                const dataset = fileReader.result;
                console.log(dataset)
                const result = dataset.split('\n').map(data => data.split(','));
                console.log(result)
                textToDisplay = dataset.split('\n').map(data => data.split(',')[0]).join('\n');
                //ToDo: filter non-RegEx strings
                //result.forEach(hasAmount)
                //ToDo: check if same amount holds true, hide amount selection otherwise "Do you want to send an individual amount to everyone, as indicated in your file? If not, choose "same amount" here"
                console.log(textToDisplay)
                resolve(textToDisplay)
            });
            fileReader.readAsText(file);
        });
    }

    hasAmount(res) {
        if (res.length>1) return true
        return false
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