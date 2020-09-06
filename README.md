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

-   [X] Lightning Accordion
-   [X] Lightning Accordion Section
-   [X] Lightning Avatar
-   [X] Lightning Badge
-   [X] Lightning Button
-   [X] Lightning Button Group
-   [X] Lightning Button Icon
-   [X] Lightning Button Icon Stateful
-   [X] Lightning Button Menu
-   [X] Lightning Button Stateful
-   [X] Lightning Card

## List of the componentes peding to be created

-   [ ] Lightning Breadcrumb
-   [ ] Lightning Breadcrumbs


## Contibution

Any contibrution will be awesome, please fork it and send a pull request with your component.

Examples of the componets can be found at https://developer.salesforce.com/docs/component-library/bundle

Remember, the Lightning Web components are base from SLDS, see more at https://www.lightningdesignsystem.com/components/overview

Enjoy it ;) 