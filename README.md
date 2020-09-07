# LightningCompatible

The main idea of this project is bring all Lightning Component compatible with Open Lightning Web Components (https://lwc.dev)

Once it's not a standard, it will be a project that will use lightning namespace and SDLS to create more compatible as possible with the current Salesforce LWC. Base components cames from the Salesforce repository base-component-recipes on github and adapted to work on Open LWC, you can see the full project at https://github.com/salesforce/base-components-recipes

## How to start?

1. Clone this project
2. On the directory run `npm install`
3. Start simple by running `npm run watch`. This will start the project with a local development server.

The source files are located in the [`src`](./src) folder.
All web components are within the [`src/client/modules`](./src/modules) folder.
The folder hierarchy also represents the naming structure of the web components. The entry file for the custom Express configuration can be found in the ['src/server'](./src/server) folder.

## List of the components completed (2$)

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
-   [X] Lightning Combobox (lightning-combobox)
-   [X] Lightning Dual Listbox (lightning-dual-listbox)
-   [X] Lightning Dynamic Icon (lightning-dynamic-icon)
-   [X] Lightning Formatted Location (lightning-formatted-location)
-   [X] Lightning Formatted Phone (lightning-formatted-phone)
-   [X] Lightning Formatted Text (lightning-formatted-text)
-   [X] Lightning Formatted URL (lightning-formatted-url)
-   [X] Lightning Icon (lightning-icon)
-   [X] Lightning Menu Item (lightning-menu-item)
-   [X] Lightning Spinner (lightning-spinner)


## List of the components that need be refactor (1)
-   [ ] Lightning Helptex (lightning-helptext)


## List of the components peding to be created (41)

-   [ ] Lightning Breadcrumb (lightning-breadcrumb)
-   [ ] Lightning Breadcrumbs (lightning-breadcrumbs)
-   [ ] Lightning Click to Dial (lightning-click-to-dial)
-   [ ] Lightning Datatable (ightning-datatable)
-   [ ] Lightning File Upload (lightning-file-upload)
-   [ ] Lightning Formatted Address (lightning-formatted-address)
-   [ ] Lightning Formatted Date Time (lightning-formatted-date-time)
-   [ ] Lightning Formatted Email (lightning-formatted-email)
-   [ ] Lightning Formatted Name (lightning-formatted-name)
-   [ ] Lightning Formatted Number (lightning-formatted-number)
-   [ ] Lightning Formatted Rich Text (lightning-formatted-ritch-text)
-   [ ] Lightning Formatted Time (lightning-formatted-time)
-   [ ] Lightning Input (lightning-imput)
-   [ ] Lightning Input Address (lightning-imput-address)
-   [ ] Lightning Input Field (lightning-imput-field)
-   [ ] Lightning Input Location (lightning-imput-location)
-   [ ] Lightning Input Name (lightning-imput-name)
-   [ ] Lightning Layout (lightning-layout)
-   [ ] Lightning Layout Item (lightning-layout-item)
-   [ ] Lightning Input Rich Text (lightning-input-rich-text)
-   [ ] Lightning Output Field (lightning-output-field)
-   [ ] Lightning Pill (lightning-pill)
-   [ ] Lightning Pill Container (lightning-pill-container)
-   [ ] Lightning Progress Bar (lightning-progress-bar)
-   [ ] Lightning Progress Indicator (lightning-progress-indicator)
-   [ ] Lightning Progress Step (lightning-progress-step)
-   [ ] Lightning Progress Ring (lightning-progress-ring)
-   [ ] Lightning Radio Group (lightning-radio-group)
-   [ ] Lightning Relative Date Time (lightning-relative-date-time)
-   [ ] Lightning Slider (lightning-slider)
-   [ ] Lightning Tab (lightning-tab)
-   [ ] Lightning Tabset (lightning-tabset)
-   [ ] Lightning Textarea (lightning-textarea)
-   [ ] Lightning Tile (lightning-tile)
-   [ ] Lightning Tree (lightning-tree)
-   [ ] Lightning Tree Grid (lightning-tree-grid)
-   [ ] Lightning Vertical Navigation (ightning-vertical-navigation)
-   [ ] Lightning Vertical Navigation Section (ightning-vertical-navigation-section)
-   [ ] Lightning Vertical Navigation Item (ightning-vertical-navigation-item)
-   [ ] Lightning Vertical Navigation Item Badge (ightning-vertical-navigation-item)
-   [ ] Lightning Vertical Navigation Item Icon (ightning-vertical-navigation-item-icon)

## Probably it is not possible to be compatible (12)
-   [ ] Lightning Emp-api
-   [ ] Lightning Flow Support
-   [ ] Lightning Map
-   [ ] Lightning Message Service
-   [ ] Lightning Navigation
-   [ ] Lightning Platform Resource Loader
-   [ ] Lightning Platform Show Toast Event
-   [ ] Lightning Record Edit Form
-   [ ] Lightning Record Form
-   [ ] Lightning Record View Form
-   [ ] Lightning Rich Text Toolbar Button (lightning-input-rich-text)
-   [ ] Lightning Rich Text Toolbar Button Group (lightning-rich-text-toolbar-button-group)


## Contibution

Any contibrution will be awesome, please fork it and send a pull request with your component.

Examples of the componets can be found at https://developer.salesforce.com/docs/component-library/bundle

Remember, the Lightning Web components are base from SLDS, see more at https://www.lightningdesignsystem.com/components/overview

Enjoy it ;) 