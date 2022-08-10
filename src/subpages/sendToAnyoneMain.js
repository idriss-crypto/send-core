import template from "./sendToAnyoneMain.mpts";
import eth_logo from "!!url-loader!../img/eth_logo.png"
import usdc_logo from "!!url-loader!../img/usdc_logo.png"
import arrow from "!!url-loader!../img/arrow.svg"
import pen from "!!url-loader!../img/pen.svg"
import close from "!!url-loader!../img/close.svg"
import maticTokenIcon from "!!url-loader!../img/matic-token-icon.webp"
import biannceCoinLogo from "!!url-loader!../img/binance-coin-logo.webp"
import {tokens} from "../sendToAnyoneUtils";
import {create} from "fast-creator";

export class SendToAnyoneMain {
    constructor(identifier, isIDrissRegistered, showMessageBox = true) {
        const networks = [
            {name: 'Polygon ', img: maticTokenIcon, chainId: 137, code: 'Polygon'},
        ]
        //TODO: check, but probably only polygon will be used
        // if (isIDrissRegistered === true) {
        //     networks.push({name: 'Ethereum', img: eth_logo, chainId: 1, code: 'ETH'})
        //     networks.push({name: 'BSC', img: biannceCoinLogo, chainId: 56, code: 'BSC'})
        // }

        this.html = create('div', {}, template({identifier, networks, tokens, eth_logo, usdc_logo, arrow, pen, close}));
        this.html.querySelector('.closeButton').onclick = () => this.html.dispatchEvent(Object.assign(new Event('close', {bubbles: true})));
        this.html.querySelector('.assetAddress').style.display = 'none';
        this.html.querySelector('.assetAmount').style.display = 'none';
        this.html.querySelector('.assetId').style.display = 'none';

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
                this.refreshVisibleCoins()
            }
        })
        this.html.querySelector('.send')?.addEventListener('click', (e) => {
            let assetType = this.html.querySelector('.assetTypeSelection .isSelected').dataset.value;
            let network = this.html.querySelector('.networkSelect').dataset.network;
            let token = this.html.querySelector('.tokenSelect').dataset.symbol;
            let message = this.html.querySelector('.messageBox textarea').value;
            let amount = assetType !== 'native' ? 1
                : this.html.querySelector('.valueSelection .isSelected input')?.value || this.html.querySelector('.valueSelection .isSelected').dataset.value;
            let assetAmount = this.html.querySelector('.assetAmount input')?.value
            let assetAddress = this.html.querySelector('.assetAddress input')?.value
            let assetId = this.html.querySelector('.assetId input')?.value
            this.html.dispatchEvent(Object.assign(new Event('sendMoney', {bubbles: true}), {
                identifier,
                network,
                assetType,
                assetAmount,
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
                const assetAddress = this.html.querySelector('.assetAddress');
                const assetAmount = this.html.querySelector('.assetAmount');
                const assetId = this.html.querySelector('.assetId');
                const tokenSelect = this.html.querySelector('.tokenSelectWrapper');
                switch (b.dataset.value) {
                    case 'native':
                        valueSelection.style.display = '';
                        assetAddress.style.display = 'none';
                        assetAmount.style.display = 'none';
                        assetId.style.display = 'none';
                        tokenSelect.style.display = '';
                        break;
                    case 'erc20':
                        valueSelection.style.display = 'none';
                        assetAddress.style.display = '';
                        assetAmount.style.display = '';
                        assetId.style.display = 'none';
                        tokenSelect.style.display = 'none';
                        break;
                    case 'erc721':
                        valueSelection.style.display = 'none';
                        assetAddress.style.display = '';
                        assetAmount.style.display = 'none';
                        assetId.style.display = '';
                        tokenSelect.style.display = 'none';
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
        this.refreshVisibleCoins();
    }

    refreshVisibleCoins() {
        let network = this.html.querySelector('.networkSelect').dataset.network;
        let tokens = this.html.querySelectorAll('.tokenSelect li')
        for (let token of tokens) {
            token.style.display = token.dataset.network == network ? '' : 'none';
        }
        if (this.html.querySelector('.tokenSelect').dataset.network != network) {
            this.html.querySelector(`.tokenSelect li[data-network="${network}"]`).click();
        }
    }
}