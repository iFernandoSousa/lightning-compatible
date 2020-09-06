import { LightningElement, api } from 'lwc';

export default class Card extends LightningElement {
    @api iconName;
    @api title;
    @api variant;

    connectedCallback() {
        this.category = this.iconName ? this.iconName.split(':')[0] : undefined;
        this.icon = this.iconName ? this.iconName.split(':')[1] : undefined;
        this.iconClass = 'slds-icon_container';

        if (this.category && this.icon) {
            this.iconClass += ' slds-icon-' + this.category + '-' + this.icon;
        }
    }
}
