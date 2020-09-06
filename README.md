# LightningCompatible

The main idea of this project is bring all Lightning Component compatible with Open Lightning Web Components (https://lwc.dev)

Once it's not a standard, it will be a project that will use lightning namespace and SDLS to create more compatible as possible with the current Salesforce LWC. Base componentes cames from the Salesforce repository base-component-recipes on github and adapted to work on Open LWC, you can see the full project at https://github.com/salesforce/base-components-recipes

## How to start?

1. Clone this project
2. On the directory run `npm install`
3. Start simple by running `npm run watch`. This will start the project with a local development server.

The source files are located in the [`src`](./src) folder.
All web components are within the [`src/client/modules`](./src/modules) folder.
The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

## List of the components completed

-   [X] Lightning Accordion (lightning-accordion)
-   [X] Lightning Accordion Section (lightning-acordion-section)
-   [X] Lightning Avatar (lightning-avatar)
-   [X] Lightning Badge (lightning-badge)
-   [X] Lightning Button (lightning-button)
-   [X] Lightning Button Group (lightning-button-group)
-   [X] Lightning Button Icon (lightning-button-icon)
-   [X] Lightning Button Icon Stateful (lightning-button-icon-stateful)
-   [X] Lightning Button Menu (lightning-button-menu)
-   [X] Lightning Button Stateful (lightning-button-stateful)
-   [X] Lightning Card (lightning-card)
-   [X] Lightning Carousel (lightning-carousel)
-   [X] Lightning Carousel Image (lightning-carousel-image)
-   [X] Lightning Checkbox Group (lightning-checkbox-group)
-   ......
-   [X] Lightning Icon (lightning-icon)
-   [X] Lightning Spinner (lightning-spinner)


## List of the componentes peding to be created

-   [ ] Lightning Breadcrumb (lightning-breadcrumb)
-   [ ] Lightning Breadcrumbs (lightning-breadcrumbs)

-   [ ] Lightning Click to Dial (lightning-click-to-dial)
-   [ ] Lightning Combobox (lightning-combobox)
-   [ ] Lightning Datatable (ightning-datatable)
-   [ ] Lightning Dual Listbox (lightning-dual-listbox)
-   [ ] Lightning Dynamic Icon (lightning-dynamic-icon)
-   [ ] Lightning File Upload (lightning-file-upload)
-   [ ] Lightning Formatted Address (lightning-formatted-address)
-   [ ] Lightning Formatted Date Time (lightning-formatted-date-time)
-   ......

## Probably not possible to be compatible
-   [ ] Lightning Emp-api
-   [ ] Lightning Flow Support
-   ......


## Contibution

Any contibrution will be awesome, please fork it and send a pull request with your component.

Examples of the componets can be found at https://developer.salesforce.com/docs/component-library/bundle

Remember, the Lightning Web components are base from SLDS, see more at https://www.lightningdesignsystem.com/components/overview

Enjoy it ;) 