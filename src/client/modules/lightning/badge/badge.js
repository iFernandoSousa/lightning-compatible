import { LightningElement, api } from 'lwc';

export default class Badge extends LightningElement {
    @api iconAlternativeText;
    @api iconName;
    @api iconPosition;
    @api label;

    connectedCallback() {}

    get iconOnTheRight() {
        return (
            this.iconName &&
            this.iconPosition &&
            this.iconPosition.toLowerCase() === 'end'
        );
    }

    get iconOnTheLeft() {
        return this.iconName && !this.iconOnTheRight;
    }
}
