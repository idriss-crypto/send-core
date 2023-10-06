import template from "./customTwitter.mpts";
import eth_logo from "!!url-loader!../img/eth_logo.png"
import op_logo from "!!url-loader!../img/op.png"
import zk_logo from "!!url-loader!../img/zksync.ico"
import linea_logo from "!!url-loader!../img/linea.ico"
import pgn_logo from "!!url-loader!../img/pgn_logo.png"
import usdc_logo from "!!url-loader!../img/usdc_logo.png"
import arrow from "!!url-loader!../img/arrow.svg"
import pen from "!!url-loader!../img/pen.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import binanceCoinLogo from "!!url-loader!../img/binance-coin-logo.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";


export class CustomTwitter {
    constructor(data) {
        let networks = [
            {name: 'Optimism', img: op_logo, chainId: 10, code: 'optimism'},
            {name: 'PGN', img: pgn_logo, chainId: 424, code: 'pgn'},
            {name: 'Polygon', img: maticTokenIcon, chainId: 137, code: 'Polygon'},
            {name: 'Ethereum', img: eth_logo, chainId: 1, code: 'ETH'},
            {name: 'BNB Chain', img: binanceCoinLogo, chainId: 56, code: 'BSC'},
            {name: 'zkSync Era', img: zk_logo, chainId: 324, code: 'zkSync'},
            {name: 'Linea Mainnet', img: linea_logo, chainId: 59144, code: 'linea'}
        ]

        if (data.tokenFilter && data.tokenFilter.network && Array.isArray(data.tokenFilter.network)) {
            networks = networks.filter(n => data.tokenFilter.network.includes(n.code))
        }

        this.html = create('div', {}, template({
            identifier: data.recipient,
            customHeader: data.customHeader,
            customText: data.customText ?? "",
            buttonValue: data.buttonValue,
            networks,
            tokens: this.filterTokens(data.tokenFilter),
            eth_logo,
            usdc_logo,
            arrow,
            pen,
        }));

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
                this.refreshVisibleCoins(data.recipientAddress)
            }
        })
        this.html.querySelector('.send')?.addEventListener('click', (e) => {
            let identifier = data.recipient;
            let network = this.html.querySelector('.networkSelect').dataset.network;
            let token = this.html.querySelector('.tokenSelect').dataset.symbol;
            let assetType = ["MATIC", "ETH", "BNB"].includes(token)? "native" : "erc20"
            let message = this.html.querySelector('.messageBox textarea').value;
            let input = this.html.querySelector('input').value;
            let amount = this.html.querySelector('.valueSelection .isSelected input')?.value || this.html.querySelector('.valueSelection .isSelected').dataset.value;
            let assetAddress = this.filterTokens({network: [network], token: [token]})[0]?.address;
            // filter based on 'wanted' params
            this.html.dispatchEvent(Object.assign(new Event('customEvent', {bubbles: true}), {
                identifier,
                network,
                assetType,
                assetAddress,
                amount,
                token,
                message,
                input
            }))
        });
        this.html.querySelectorAll('.valueSelection > *').forEach(b => {
            b.onclick = e => {
                this.html.querySelectorAll('.valueSelection  > *').forEach(x => x.classList.remove('isSelected'))
                b.classList.add('isSelected')
                b.querySelector('input')?.focus();
            }
        })
        const toggleMessageBox = this.html.querySelector('.toggleMessageBox');
        const messageBox = this.html.querySelector('.messageBox');
        if (!data.showMessageBox) {
            toggleMessageBox.style.display = 'none';
        }
        else {
            this.html.querySelector('.tokenSelect').style.marginBottom = 0;
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
        const toggleValueSelection = this.html.querySelector('.valueSelection');
        if (!data.showValueSelection) {
            toggleValueSelection.style.display = 'none';
            this.html.querySelector('.valueSelection .isSelected').dataset.value = ""
        }
        const toggleNetworkSelection = this.html.querySelector('.networkSelection');
        if (!data.showNetworkSelection) {
            toggleNetworkSelection.style.display = 'none';
            this.html.querySelector('.networkSelect').dataset.network = "";
        }
        const toggleTokenSelection = this.html.querySelector('.tokenSelection');
        if (!data.showTokenSelection) {
            toggleTokenSelection.style.display = 'none';
            this.html.querySelector('.tokenSelect').dataset.symbol = "";
        }
        const toggleInput = this.html.querySelector('.toggleInput');
        if (!data.showInput) {
            toggleInput.style.display = 'none';
        }
        const toggleText = this.html.querySelector('.toggleText');
        if (!data.customText) {
            toggleText.style.display = 'none';
        }
        this.refreshVisibleCoins(data.recipientAddress);
    }

    refreshVisibleCoins(recipientAddress) {
        let network
        if (recipientAddress) {
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
            if(tokenFilter.token) {
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