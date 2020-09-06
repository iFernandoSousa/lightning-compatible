import { LightningElement } from 'lwc';

export default class App extends LightningElement {
    constructor() {
        super();
        let _sldsPath = '../SLDS/styles/salesforce-lightning-design-system.css';
        const styles = document.createElement('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    handleClick(event) {
        window.console.log(event);
    }
}
