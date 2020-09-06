import { LightningElement, api } from 'lwc';

export default class PrimitiveIcon extends LightningElement {
    @api iconName;
    @api innerClass;

    connectedCallback() {
        this.category = this.iconName ? this.iconName.split(':')[0] : undefined;
        this.icon = this.iconName ? this.iconName.split(':')[1] : undefined;

        if (this.category && this.icon) {
            this.iconUrl =
                '../SLDS/icons/' +
                this.category +
                '-sprite/svg/symbols.svg#' +
                this.icon;
        }
    }
}
