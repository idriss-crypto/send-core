import {IdrissTippingWidget} from "./idrissTippingWidget";

export function idrissShowTippingPopup(config, e) {
    e.preventDefault();
    document.querySelectorAll('.idrissTipDropdown').forEach(x=>x.remove());
    const dropdown = document.createElement('div');
    const widget = new IdrissTippingWidget(config)
    dropdown.classList.add('idrissTipDropdown')
    dropdown.style.position = 'absolute';
    let rect = e.target.getBoundingClientRect()
    dropdown.style.left = scrollX + rect.left + 'px';
    dropdown.style.top = scrollY + rect.top + rect.height + 'px';
    dropdown.style.zindex = 1000000;
    dropdown.onclick = () => dropdown.classList.add('isClicked')
    dropdown.append(widget);

    widget.addEventListener('close', () => dropdown.remove());
    document.body.append(dropdown)
    return widget;

}