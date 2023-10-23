import template from "./sendToAnyoneConnect.mpts";
import eth_logo from "!!url-loader!../img/eth_logo.png"
import zk_logo from "!!url-loader!../img/zksync.ico"
import linea_logo from "!!url-loader!../img/linea.ico"
import mantle_logo from "!!url-loader!../img/mantle.ico"
import base_logo from "!!url-loader!../img/base.svg"
import scroll_logo from "!!url-loader!../img/scroll.svg"
import usdc_logo from "!!url-loader!../img/usdc_logo.png"
import op_logo from "!!url-loader!../img/op.png"
import arrow from "!!url-loader!../img/arrow.svg"
import pen from "!!url-loader!../img/pen.svg"
import close from "!!url-loader!../img/close.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import biannceCoinLogo from "!!url-loader!../img/binance-coin-logo.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";

export class SendToAnyoneConnect {
    constructor(identifier, isIDrissRegistered, showMessageBox = true, tokenFilter = null) {
        let networks = [
            {name: 'Polygon', img: maticTokenIcon, chainId: 137, code: 'Polygon'},
            {name: 'Ethereum', img: eth_logo, chainId: 1, code: 'ETH'},
            {name: 'zkSync Era', img: zk_logo, chainId: 324, code: 'zkSync'},
            {name: 'Linea Mainnet', img: linea_logo, chainId: 59144, code: 'linea'},
            {name: 'Mantle', img: mantle_logo, chainId: 5000, code: 'mantle'},
            {name: 'Optimism', img: op_logo, chainId: 10, code: 'optimism'},
            {name: 'Scroll', img: scroll_logo, chainId: 534352, code: 'scroll'},
            {name: 'Base', img: base_logo, chainId: 8453, code: 'base'},
            {name: 'BNB Chain', img: biannceCoinLogo, chainId: 56, code: 'BSC'}
        ]
        if (tokenFilter) {
            networks = networks.filter(n => tokenFilter[n.code.toLowerCase()])
        }

        this.html = create('div', {}, template({identifier, networks, tokens: this.filterTokens(tokenFilter), eth_logo, usdc_logo, arrow, pen, close}));
        this.html.querySelector('.connectWallet').style.display = 'none';

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
            }
        })
        this.html.querySelector('.send')?.addEventListener('click', (e) => {
            let method = "send";
            let assetType = this.html.querySelector('.assetTypeSelection .isSelected').dataset.value;
            let network = this.html.querySelector('.networkSelect').dataset.network;
            let token = this.html.querySelector('.tokenSelect').dataset.symbol;
            if (assetType === 'native' && !["MATIC", "ETH", "BNB", "MNT"].includes(token)) assetType = 'erc20'
            let message = this.html.querySelector('.messageBox textarea').value;
            let amount = this.html.querySelector('.valueSelection .isSelected input')?.value || this.html.querySelector('.valueSelection .isSelected').dataset.value;
            let assetAddress = this.filterTokens({polygon: [token]})[0]?.address;
            let assetId;
            if (WEBPACK_MODE !== 'production') {
                assetAddress = DEFAULT_TOKEN_CONTRACT_ADDRESS
            }
            if (assetType === 'erc721') assetAddress = "0x0000000000000000000000000000000000000000";
            this.html.dispatchEvent(Object.assign(new Event('connectWallet', {bubbles: true}), {
                method,
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
        this.html.querySelector('.connectWallet')?.addEventListener('click', (e) => {
                let method = "connect";
            this.html.dispatchEvent(Object.assign(new Event('connectWallet', {bubbles: true}), {
                method
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
                const connectButton = this.html.querySelector('.connectWallet');
                const sendButton = this.html.querySelector('.send');
                switch (b.dataset.value) {
                    case 'native':
                        valueSelection.style.display = '';
                        tokenSelect.style.display = '';
                        connectButton.style.display = 'none';
                        sendButton.style.display = '';
                        break;
                    // case 'erc20':
                    //     valueSelection.style.display = 'none';
                    //     tokenSelect.style.display = 'none';
                    //     connectButton.style.display = 'none';
                    //     break;
                    case 'erc721':
                        valueSelection.style.display = 'none';
                        tokenSelect.style.display = 'none';
                        connectButton.style.display = '';
                        sendButton.style.display = 'none';
                        break;
                }
            }
        })
        const toggleMessageBox = this.html.querySelector('.toggleMessageBox');
        const messageBox = this.html.querySelector('.messageBox');
        if (!showMessageBox)
            toggleMessageBox.style.display = 'none';
        else
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
        this.refreshVisibleCoins(isIDrissRegistered);
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
        if (this.html.querySelector('.tokenSelect').dataset.network != network) {
            this.html.querySelector(`.tokenSelect li[data-network="${network}"]`).click();
        }
    }

    filterTokens(tokenFilter) {
        if (!tokenFilter) {
            return tokens;
        } else {
            return tokens.filter(t => {
                return tokenFilter[t.network.toLowerCase()]?.includes(t.symbol);
            })
        }
    }
}