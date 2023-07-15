import template from "./sendToAnyoneMain.mpts";
import eth_logo from "!!url-loader!../img/eth_logo.png"
import zk_logo from "!!url-loader!../img/zksync.ico"
import linea_logo from "!!url-loader!../img/linea.ico"
import usdc_logo from "!!url-loader!../img/usdc_logo.png"
import arrow from "!!url-loader!../img/arrow.svg"
import pen from "!!url-loader!../img/pen.svg"
import close from "!!url-loader!../img/close.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import binanceCoinLogo from "!!url-loader!../img/binance-coin-logo.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";

export class SendToAnyoneMain {
    constructor(identifier, isIDrissRegistered, ownedNFTs, showMessageBox = true, tokenFilter = null, selectNFT = false) {
        let networks = [
            {name: 'Polygon', img: maticTokenIcon, chainId: 137, code: 'Polygon'},
            {name: 'Ethereum', img: eth_logo, chainId: 1, code: 'ETH'},
            {name: 'BNB Chain', img: binanceCoinLogo, chainId: 56, code: 'BSC'},
            {name: 'zkSync Era', img: zk_logo, chainId: 324, code: 'zkSync'},
            {name: 'Linea Mainnet', img: linea_logo, chainId: 59144, code: 'linea'}
        ]

        if (tokenFilter && tokenFilter.network && Array.isArray(tokenFilter.network)) {
            networks = networks.filter(n => tokenFilter.network.includes(n.code));
        }

        if (ownedNFTs.length==0) {ownedNFTs=[{address: "0x0000000000000000000000000000000000000000", id: "1", image: "https://ipfs.io/ipfs/QmNWMJTqmqrxriJQE7dfndAto48RUpHDLr41HJMZvD3cFD?id=1", name: "No NFTs found"}]}

        this.html = create('div', {}, template({identifier, networks, tokens: this.filterTokens(tokenFilter), ownedNFTs, eth_logo, usdc_logo, arrow, pen, close}));
        if (selectNFT) {
            this.html.querySelector('.assetTypeSelection .isSelected').classList.remove('isSelected');
            this.html.querySelector('.assetTypeSelection').children[1].classList.add('isSelected');
            this.html.querySelector('.tokenSelectWrapper').style.display = 'none';
            this.html.querySelector('.valueSelection').style.display = 'none';
        } else {
            this.html.querySelector('.assetTypeSelection .isSelected').classList.remove('isSelected');
            this.html.querySelector('.assetTypeSelection').firstElementChild.classList.add('isSelected');
            this.html.querySelector('.nftSelectWrapper').style.display = 'none';
        }

        if (!isIDrissRegistered) {
            this.html.querySelector(".networkSelectWrapper").style.display = 'none';
        }

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
                this.refreshVisibleCoins(isIDrissRegistered)
                if (selectNFT) this.refreshVisibleNFTs(isIDrissRegistered)
                if (button.id == "nftButton") {this.html.querySelector(".imagePreview").src = li.querySelector('img').src;}
            }
        })
        this.html.querySelector('.send')?.addEventListener('click', (e) => {
            let assetType = this.html.querySelector('.assetTypeSelection .isSelected').dataset.value;
            let network = this.html.querySelector('.networkSelect').dataset.network;
            let token = this.html.querySelector('.tokenSelect').dataset.symbol;
            if (assetType === 'native' && !["MATIC", "ETH", "BNB"].includes(token)) assetType = 'erc20';
            let message = this.html.querySelector('.messageBox textarea').value;
            let amount = this.html.querySelector('.valueSelection .isSelected input')?.value || this.html.querySelector('.valueSelection .isSelected').dataset.value;
            let assetAddress = this.filterTokens({network: [network], token: [token]})[0]?.address;
            console.log(assetAddress, network)
            let assetId = this.html.querySelector('.nftSelect').dataset.assetid;
            if (WEBPACK_MODE !== 'production') {
                assetAddress = DEFAULT_TOKEN_CONTRACT_ADDRESS
            }
            if (assetType === 'erc721') {
                assetAddress = this.html.querySelector('.nftSelect').dataset.address;
                amount = 1;
                assetType = this.html.querySelector('.nftSelect').dataset.assettype.toLowerCase();
            }
            if (assetType === 'erc721' && assetAddress === "0x0000000000000000000000000000000000000000") return;
            this.html.dispatchEvent(Object.assign(new Event('sendMoney', {bubbles: true}), {
                identifier,
                network,
                assetType,
                assetAddress,
                assetId,
                amount,
                token,
                message
            }))
        });
        this.html.querySelectorAll('.valueSelection > *').forEach(b => {
            b.onclick = e => {
                this.html.querySelectorAll('.valueSelection  > *').forEach(x => x.classList.remove('isSelected'))
                b.classList.add('isSelected')
                b.querySelector('input')?.focus();
            }
        })
        this.html.querySelectorAll('.assetTypeSelection > *').forEach(b => {
            b.onclick = e => {
                this.html.querySelectorAll('.assetTypeSelection  > *').forEach(x => x.classList.remove('isSelected'))
                b.classList.add('isSelected')
                b.querySelector('input')?.focus();

                const valueSelection = this.html.querySelector('.valueSelection');
                const tokenSelect = this.html.querySelector('.tokenSelectWrapper');
                const nftSelectWrapper = this.html.querySelector('.nftSelectWrapper');
                switch (b.dataset.value) {
                    case 'native':
                        valueSelection.style.display = '';
                        tokenSelect.style.display = '';
                        nftSelectWrapper.style.display = 'none';
                        break;
                    // case 'erc20':
                    //     valueSelection.style.display = 'none';
                    //     tokenSelect.style.display = 'none';
                    //     break;
                    case 'erc721':
                        nftSelectWrapper.style.display = '';
                        valueSelection.style.display = 'none';
                        tokenSelect.style.display = 'none';
                        break;
                }
            }
        })
        const toggleMessageBox = this.html.querySelector('.toggleMessageBox');
        const messageBox = this.html.querySelector('.messageBox');
        if (!showMessageBox) {
            toggleMessageBox.style.display = 'none';
        }
        else {
            this.html.querySelector('.tokenSelect').style.marginBottom = 0;
            this.html.querySelector('.nftSelect').style.marginBottom = 0;
            toggleMessageBox.onclick = () => {
                if (messageBox.classList.contains('isHidden')) {
                    messageBox.classList.remove('isHidden')
                    toggleMessageBox.lastChild.textContent = 'No message'
                } else {
                    messageBox.classList.add('isHidden')
                    toggleMessageBox.lastChild.textContent = 'Add a message'
                    messageBox.querySelector('textarea').value = '';
                }
            }
        }
        this.refreshVisibleCoins(isIDrissRegistered);
        if (selectNFT) this.refreshVisibleNFTs(isIDrissRegistered)
    }

    refreshVisibleNFTs(isIDrissRegistered) {
        this.html.querySelector('.nftSelectWrapper').style.display = 'block';
        this.html.querySelector('.errorNFT').style.display = 'none';

        let network
        if (isIDrissRegistered) {
            network = this.html.querySelector('.networkSelect').dataset.network;
        } else {
            network = "Polygon"
        }

        let nfts = this.html.querySelectorAll('.nftSelect li')
        let count = 0
        for (let nft of nfts) {
            nft.style.display = nft.dataset.network == network ? '' : 'none';
            count = nft.style.display == '' ? count + 1 : count;
        }
        if (count === 0) {
            this.html.querySelector('.nftSelectWrapper').style.display = 'none';
            this.html.querySelector('.errorNFT').style.display = 'block';
        }

        if (this.html.querySelector('.nftSelect').dataset.network !== network) {
            if (count>0) this.html.querySelector(`.nftSelect li[data-network="${network}"]`).click();
        }
    }

    refreshVisibleCoins(isIDrissRegistered) {
        let network
        if (isIDrissRegistered) {
            network = this.html.querySelector('.networkSelect').dataset.network;
        } else {
            network = "Polygon"
        }
        let tokens = this.html.querySelectorAll('.tokenSelect li')
        for (let token of tokens) {
            token.style.display = token.dataset.network == network ? '' : 'none';
        }
        if (this.html.querySelector('.tokenSelect').dataset.network !== network) {
            this.html.querySelector(`.tokenSelect li[data-network="${network}"]`).click();
        }
    }

    filterTokens(tokenFilter) {
        if (!tokenFilter || (tokenFilter && Object.keys(tokenFilter).length === 0)) {
            let retToken = tokens.filter(t => t.symbol !== "custom");
            return retToken
        } else {
            if (tokenFilter.token) {
                return tokens.filter(t => t.symbol !== "custom").filter(t => {
                    return tokenFilter.network?.includes(t.network)
                }).filter(t => {
                    return tokenFilter.token?.includes(t.symbol)
                })
            } else {
                return tokens.filter(t => t.symbol !== "custom").filter(t => {
                    return tokenFilter.network?.includes(t.network)
                })
            }
        }
    }
}