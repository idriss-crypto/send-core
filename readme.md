This library provides you with a web widget, that allows you to get crypto payments.

[Homepage of Idriss](https://idriss.xyz)

How to implement Idirss tipping for your webpage

## Version 1 - easy

You can create link to tipping website, for example:

```html

<a href="https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz&tippingValue=1&network=Polygon&token=MATIC">Pay
    with Idriss</a>
```

Which is a simple link to:
https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz&tippingValue=1&network=Polygon&token=MATIC

If you want, you can ommit some parameters, so user will be able to choose it, for example:

https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz

Will allows user to choose what token and how much he want to pay.

You can also provide no parameters, the user will se page, that allows him to type receiver address.

https://www.idriss.xyz/tip

## Version 2 - moderate

You can load our JavaScript library and run some code, that will show payment popup inside your website. For example

```html

<script src="https://idriss.xyz/static/js/idrissTippingSDK.js"></script>
<button onclick="idrissShowTippingPopup({recipient:'0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9',identifier:'@IDriss_xyz',tippingValue:1,network:'Polygon',token:'MATIC'},event)">
    Pay with idriss
</button>
```

We recomend to use both link and javascript combined, so user can open tipping both inside yuour webside and in new
tabs. Also it helps in case somethink goes wrong with javascript loading. Remember to write the same parameters twice.

```html

<script src="https://idriss.xyz/static/js/idrissTippingSDK.js"></script>
<a href="https://www.idriss.xyz/tip?recipient=0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9&identifier=%40IDriss_xyz&tippingValue=1&network=Polygon&token=MATIC"
   onclick="idrissShowTippingPopup({recipient:'0x5ABca791C22E7f99237fCC04639E094Ffa0cCce9',identifier:'@IDriss_xyz',tippingValue:1,network:'Polygon',token:'MATIC'},event)">Pay
    with Idriss</a>
```

## Version 3 - advanced

You can place our widget in any place of website you want.

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