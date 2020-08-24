import { LightningElement, api } from 'lwc';

export default class Card extends LightningElement {
    @api iconName;
    @api title;
    @api variant;

    constructor() {
        super();
        let _sldsPath = '../SLDS/styles/salesforce-lightning-design-system.css';
        const styles = document.createElement('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    connectedCallback() {
        this.category = this.iconName ? this.iconName.split(':')[0] : undefined;
        this.icon = this.iconName ? this.iconName.split(':')[1] : undefined;
        this.iconClass = 'slds-icon_container';

        if (this.category && this.icon) {
            this.iconUrl =
                '../SLDS/icons/' +
                this.category +
                '-sprite/svg/symbols.svg#' +
                this.icon;
            this.iconClass += ' slds-icon-' + this.category + '-' + this.icon;
        }
    }
}
