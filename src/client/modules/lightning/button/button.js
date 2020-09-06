import { LightningElement, api } from 'lwc';

export default class Button extends LightningElement {
    @api variant;
    @api label;
    @api title;
    @api disabled;
    @api iconName;
    @api iconPosition;

    connectedCallback() {
        this.internalClass = 'slds-button';
        if (this.variant) {
            // base is a button without a border, which gives it the look of a plain text link.
            // neutral is the default variant, a plain uncolored button.
            // brand is a blue button, used to draw attention to the primary action on a page.
            // brand-outline is similar to brand but the color is used for the label and border only, not the button color.
            // destructive is a red button used to warn users that its action has a negative effect.
            // destructive-text is similar to destructive but only the label and border are red.
            // inverse uses the background color and light text, useful for dark backgrounds.
            // success is a green button used to indicate a successful action.
            switch (this.variant.toLowerCase()) {
                case 'neutral':
                    this.internalClass += ' slds-button_neutral';
                    break;
                case 'brand':
                    this.internalClass += ' slds-button_brand';
                    break;
                case 'brand-outline':
                    this.internalClass += ' slds-button_outline-brand';
                    break;
                case 'destructive':
                    this.internalClass += ' slds-button_destructive';
                    break;
                case 'destructive-text':
                    this.internalClass += ' slds-button_text-destructive';
                    break;
                case 'inverse':
                    this.internalClass += ' slds-button_inverse';
                    break;
                case 'success':
                    this.internalClass += ' slds-button_success';
                    break;
                case 'base':
                default:
            }
        } else {
            this.internalClass += ' slds-button_neutral';
        }
    }

    get iconOnTheRight() {
        return (
            this.iconName &&
            this.iconPosition &&
            this.iconPosition.toLowerCase() === 'right'
        );
    }

    get iconOnTheLeft() {
        return this.iconName && !this.iconOnTheRight;
    }
}
