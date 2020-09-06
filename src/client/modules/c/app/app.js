import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    constructor() {
        super();
        let _sldsPath = '../SLDS/styles/salesforce-lightning-design-system.css';
        const styles = document.createElement('link');
        styles.href = _sldsPath;
        styles.rel = 'stylesheet';
        this.template.appendChild(styles);
    }

    /**
     * Accordion: Sample 1
     */
    activeSectionMessage = '';

    handleToggleSection(event) {
        this.activeSectionMessage = 'Open section name:  ' + event.detail.openSections;
    }

    handleSetActiveSectionC() {
        const accordion = this.template.querySelector('.example-accordion');

        accordion.activeSectionName = 'C';
    }

    /**
     * Accordion: Sample 2
     */
    activeSectionMessage = '';
    isDVisible = false;

    // handleToggleSection(event) {
    //     this.activeSectionMessage =
    //         'Open section name:  ' + event.detail.openSections;
    // }

    handleToggleSectionD() {
        this.isDVisible = !this.isDVisible;
    }

    get isMessageVisible() {
        return this.activeSectionMessage.length > 0;
    }

    /**
     * Accordion: Sample 3
     */
    activeSections = ['A', 'C'];
    activeSectionsMessage = '';

    handleSectionToggle(event) {
        const openSections = event.detail.openSections;

        if (openSections.length === 0) {
            this.activeSectionsMessage = 'All sections are closed';
        } else {
            this.activeSectionsMessage =
                'Open sections: ' + openSections.join(', ');
        }
    }

    /**
     * Button: Basic Buttons
     */
    clickedButtonLabel;

    handleClick(event) {
        this.clickedButtonLabel = event.target.label;
    }

    /**
     * Buttons: buttons with Custom onlick Actions
     */
    toggleIconName = 'utility:preview';
    toggleButtonLabel = 'Hide content';
    @track greekLetter;

    // when the component is first initialized assign an initial value to the `greekLetter` variable
    connectedCallback() {
        this.greekLetter = this.getRandomGreekLetter();
    }

    // Handles click on the 'Show/hide content' button
    handleToggleClick() {
        // retrieve the classList from the specific element
        const contentBlockClasslist = this.template.querySelector(
            '.lgc-id_content-toggle'
        ).classList;
        // toggle the hidden class
        contentBlockClasslist.toggle('slds-hidden');

        // if the current icon-name is `utility:preview` then change it to `utility:hide`
        if (this.toggleIconName === 'utility:preview') {
            this.toggleIconName = 'utility:hide';
            this.toggleButtonLabel = 'Reveal content';
        } else {
            this.toggleIconName = 'utility:preview';
            this.toggleButtonLabel = 'Hide content';
        }
    }

    // Handles click on the 'Random greek letter' button
    handleRandomClick() {
        this.greekLetter = this.getRandomGreekLetter();
    }

    // internal only method of this example component
    // :: this generates a random greek letter string that is inserted into the template
    getRandomGreekLetter() {
        // retrieve a random greek letter from the array
        const letter = this.greek[
            Math.floor(Math.random() * this.greek.length)
        ];

        // create a temporary <textarea> element using the DOMParser
        // :: this allows for the pretty formatting using the HTML character entities such as `&alpha;`
        // :: this allows the browser to automatically convert the string to proper HTML
        const textarea = new DOMParser().parseFromString(
            `<textarea>${letter} [ &${letter}; ]</textarea>`,
            'text/html'
        ).body.firstChild;

        // return the final converted value for output in our component
        return textarea.value;
    }

    // list of greek letter names
    greek = [
        'alpha',
        'theta',
        'tau',
        'beta',
        'vartheta',
        'pi',
        'upsilon',
        'gamma',
        'iota',
        'varpi',
        'phi',
        'delta',
        'kappa',
        'rho',
        'varphi',
        'epsilon',
        'lambda',
        'varrho',
        'chi',
        'varepsilon',
        'mu',
        'sigma',
        'psi',
        'zeta',
        'nu',
        'varsigma',
        'omega',
        'eta',
        'xi',
        'Gamma',
        'Lambda',
        'Sigma',
        'Psi',
        'Delta',
        'Xi',
        'Upsilon',
        'Omega',
        'Theta',
        'Pi',
        'Phi',
    ];

    /**
     * Button-group
     * Sample 1
     */

    buttonStatefulState = false;
    buttonIconStatefulState = false;

    handleButtonStatefulClick() {
        this.buttonStatefulState = !this.buttonStatefulState;
    }

    handleButtonIconStatefulClick() {
        this.buttonIconStatefulState = !this.buttonIconStatefulState;
    }

    /**
     * checkbox-group
     * Basic Checkbox Group
     */
    value = ['option1'];

    get options() {
        return [
            { label: 'Ross', value: 'option1' },
            { label: 'Rachel', value: 'option2' },
        ];
    }

    get selectedValues() {
        return this.value.join(',');
    }

    handleChange(e) {
        this.value = e.detail.value;
    }
}
