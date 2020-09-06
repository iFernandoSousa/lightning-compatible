# LightningCompatible

The main idea of this project is bring all Lightning Component compatible with Open Lightning Web Components (https://lwc.dev)

Once it's not standard, it will be a project that will use lightning namespace and SDLS to create more compatible as possible with the current Salesforce LWC.

## How to start?

1. Clone this project
2. On the directory ruin `npm install`
3. Start simple by running `yarn watch` (or `npm run watch`, if you set up the project with `npm`). This will start the project with a local development server.

The source files are located in the [`src`](./src) folder.
All web components are within the [`src/client/modules`](./src/modules) folder.
The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

## List of the components completed

-   [x] Lightning Button
-   [x] Lightning Badge

## List of the componentes that need review

-   [ ] Lightning Card

## List of the componentes peding to be created

-   [ ] Lightning Accordion
-   [ ] Lightning Accordion Section
-   [ ] ...

## Contibution

Any contibrution will be accepted, please fork it and send a pull request with your componente
Examples of the componetes are copied from https://developer.salesforce.com/docs/component-library/bundle/ to app.html
All SLDS are copied from https://www.lightningdesignsystem.com/components/overview

Enjoy
