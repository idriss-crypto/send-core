import css from "./tippingStyle.scss";
import {create} from "fast-creator";
import {TippingMain} from "./subpages/tippingMain";
import {TippingAddress} from "./subpages/tippingAddress";

export class IdrissTippingWidget extends HTMLElement {
    constructor() {
        super();
        console.log('ddsd')
        this.attachShadow({mode: 'open'})
        this.shadowRoot.append(create('style', {text: css}));
        this.container = create('section.tipping-popup')
        this.div.shadowRoot.append(this.container);
        this.process();
    }

    async process() {
        if (!this.identifier) {
            this.container.append(new TippingAddress().html);
            await new Promise(res => {
                this.container.addEventListener('next', e => {
                    console.log(e);
                    this.identifier = e.identifier;
                    this.recipient = e.recipient;
                    res()
                })
            });
        }
        this.container.append(new TippingMain(this.identifier).html);
    }
}

customElements.define('idriss-payment-widget', IdrissTippingWidget);