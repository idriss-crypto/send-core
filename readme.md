This library provides you with a web widget, that allows you to get crypto payments.

[Homepage of Idriss](https://idriss.xyz)

How to implement IDriss tipping for your webpage

## Version 1 - easy

You can create a link to IDriss tipping by simply adding this to your webpage:

```html

<a href="https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz&tippingValue=1&network=Polygon&token=MATIC">Pay
    with Idriss</a>
```

Which is a simple link to:
https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz&tippingValue=1&network=Polygon&token=MATIC

Exchange the recipient parameter with your address before adding it.

If you want, you can omit some parameters. A user will then be able to choose the configuration. For example:

https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz

will allow users to choose what token they want to pay in and how much they would like to send.

You can also provide no parameters at all. The user will be asked to input the receiver's IDriss first.

https://www.idriss.xyz/tip

## Version 2 - moderate

You can load this JavaScript library and run some code that will show the payment popup wherever you wish on your website.

In code:

```html

<script src="https://idriss.xyz/static/js/idrissTippingSDK.js"></script>
<button onclick="idrissShowTippingPopup({recipient:'0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9',identifier:'@IDriss_xyz',tippingValue:1,network:'Polygon',token:'MATIC'},event)">
    Pay with idriss
</button>
```

It is recommended to use a link element and javascript combined, so a user can open the tipping page both inside your website, and in a new
tab. Also, it helps in case something goes wrong with javascript loading. Remember to write the same parameters twice.

```html

<script src="https://idriss.xyz/static/js/idrissTippingSDK.js"></script>
<a href="https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz&tippingValue=1&network=Polygon&token=MATIC"
   onclick="idrissShowTippingPopup({recipient:'0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9',identifier:'@IDriss_xyz',tippingValue:1,network:'Polygon',token:'MATIC'},event)">Pay
    with Idriss</a>
```

## Version 3 - advanced

You can place the IDriss widget in any place of your website.

Preferred way of doing this is by webpack and yarn/npm.

Install package

```bash
npm i @idriss-crypto/tipping-core
```

or

```bash
yarn add @idriss-crypto/tipping-core
```

then in javascript

```js

import {IdrissTippingWidget} from "@idriss-crypto/tipping-core";

const widgetConfig = {
    recipient: '0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9',
    identifier: '@IDriss_xyz',
    tippingValue: 1,
    network: 'Polygon',
    token: 'MATIC'
};
const widget = new IdrissTippingWidget(widgetConfig);
document.body.append(widget);

```

Alternate way is to load widget from our CDN

```html

<script src="https://idriss.xyz/static/js/idrissTippingSDK.js"></script>
<script>
    idrissLoadTippingWidget().then(IdrissTippingWidget => {
        const widgetConfig = {
            recipient: '0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9',
            identifier: '@IDriss_xyz',
            tippingValue: 1,
            network: 'Polygon',
            token: 'MATIC'
        };
        const widget = new IdrissTippingWidget(widgetConfig);
        document.body.append(widget);
    };
</script>
```

## License

This project is licensed under [GPLv3](https://github.com/idriss-crypto/send-to-anyone-core/blob/master/LICENSE).

