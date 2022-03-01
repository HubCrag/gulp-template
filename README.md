# Gulp - Build

> Used by Gulp 4

## Get Started

To work with this assembly in a new project, clone the entire contents of the repository <br>
`git clone <this repo>`
Then, from the root of the project `npm i`, which will install all the dependencies in package.json.
After that, you can use any of the proposed build commands (the resulting files go to the __app__ folder in the root directory): <br>
`gulp` - is a basic command that runs a development build using browser-sync

`gulp build` - is a production build command for a project. All assets are compressed and optimized for hosting.

`gulp cache` - is a command to run after `gulp build`, if you need to upload new files to hosting without caching.

`gulp backend` - is a command for backend building a project. It is devoid of unnecessary things from the dev build, but not compressed, for the convenience of the backender.

`gulp zip` - the command collects your finished code into a zip archive.

## Folder and file structure

```
├── src/                          # Sources
│   ├── js                        # Scripts
│   │   └── main.js               # Main script
│   │   ├── _vars.js              # file with project variables
│   │   ├── _vendor.js            # file with library connections
│   │   ├── _functions.js         # file with ready-made js functions
│   │   ├── _components.js        # file with component connections
│   │   ├── components            # js components
│   │   ├── vendor                # folder for loading local versions of libraries
│   ├── scss                      # Site styles (sass preprocessor in scss syntax)
│   │   └── main.scss             # Main stylesheet
│   │   └── vendor.scss           # File for including library styles from the vendor folder
│   │   └── _fonts.scss           # File for connecting fonts (you can use a mixin)
│   │   └── _mixins.scss          # File for connecting mixins from the mixins folder
│   │   └── _vars.scss            # File for writing css or scss variables
│   │   └── _settings.scss        # File for writing global styles
│   │   ├── components            # scss components
│   │   ├── mixins                # folder for saving finished scss components
│   │   ├── vendor                # folder for storing local css-style libraries
│   ├── partials                  # folder for storing html parts of the page
│   ├── img                       # folder for storing pictures
│   │   ├── svg                   # special folder for converting svg to sprite
│   ├── resources                 # folder for storing other assets - php, video files, favicon, etc.
│   │   ├── fonts                 # folder to store fonts in woff2 format
│   └── index.html                # Main html file
└── gulpfile.js                   # file with Gulp settings
└── package.json                  # file with build settings and installed packages
└── .editorconfig                 # file with code formatting settings
└── .ecrc                         # editorconfig-checker package settings file (excludes unnecessary folders)
└── .stylelintrc                  # file with stylelint settings
└── README.md                     # assembly documentation
```

## Table of contents
1. [npm scripts](#npm-scripts)
2. [Working with html](#working-with-html)
3. [Working with Css](#working-with-css)
4. [Working with JavaScript](#working-with-javaScript)
5. [Working with fonts](#working-with-fonts)
6. [Working with images](#working-with-images)
7. [Working with other resources](#working-with-other-resources)
8. [Typography](#typography)
9. [Recommended VS Code plugins](#recommended-vs-code-plugins)
10. [Local snippets](#local-snippets)
11. [Ready modules](#ready-modules)
12. [Conclusion](#conclusion)

## npm scripts

You can call gulp scripts via npm. Also in the assembly it is possible to check the code for compliance with the config (editorconfig) and validate html.

`npm run html` - run the html validator, you need to run it if there are html files in the __app__ folder.

`npm run code` - run editorconfig-checker to check if it matches the config file.

## Working with html

Thanks to the __gulp-file-include__ plugin, you can split the html file into different templates, which should be stored in the __partials__ folder. It is convenient to divide the html page into sections.

> To insert html parts into the main file use `@include('partials/filename.html')`

If you want to create a multi-page site - copy __index.html__, rename as you need, and use.

When using the `gulp build`, command, you will get minified html code in one line for all html files.

## Working with CSS

The build uses the __sass__ preprocessor in the __scss__ syntax.

Styles written in __components__, should be included in __main.scss__.
__IMPORTANT:__ Be sure to remove the styles that are written in __main.scss__ for `.page__body`.

To include third-party css files (libraries) - put them in the __vendor__ folder and include them in the ___vendor.scss__ file.

If you want to create your own mixin, do it in the __mixins__ folder, and then include it in the ___mixins.scss__ file.

If you want to use scss variables, include ___vars.scss__ also in main.scss or wherever it is needed, but be sure to remove __:root__.

> To include css files, use the `@import` directive

Two files are created in the resulting __app/css__ folder: <br> __main.css__ - for page styles, <br> __vendor.css__ -  for styles of all libraries used in the project.

When using the `gulp build`, command, you will get minified css code in one line for all css files. 

## Working with JavaScript

Webpack is used to build the JS code.

JS code is better divided into components - small js files that contain their own implementation isolated from each other. Place such files in the __components__ folder, and then import them into the ___components.js__ file.

The __vars.js__ file should store the basic project variables, like finding elements, etc.

There is no need to change anything in the __main.js__ file, it is made simply as a result.

You can connect third-party libraries through npm, for this there is a ___vendor.js__. Import connections there.

If some library is not in npm or you just need to connect something with a local file, put it in the __vendor__ folder and import it in the same way, but with the path to the file.

When using the `gulp build` command, you will get minified js code in one line for all js files.

## Working with fonts

Because the author does not support IE11, the assembly supports only the __woff2__ format (this means that only this format is used in the font connection mixin).

Load the __woff2__ files into the __resources/fonts__, folder and then call the `@font-face` mixin in the ___fonts.scss__ file.

Also, don't forget to write the same fonts in `<link preload>` in html.

## Working with images

Put any images other than the __favicon__ in the __img__ folder.

If you need to make an svg sprite, put the svg files you need for the sprite in the __img/svg__ folder. At the same time, such attributes as fill, stroke, style will be automatically deleted. Other svg files just leave in the __img__ folder.

When using the `gulp build` command, you will get minified images in the resulting __img__ folder.

Support for __webp__ and __avif__ formats is available in the assembly. You can connect them using the `picture` tag. For background, you can use regular __jpg__ or __png__, or use `image-set` where possible.

## Working with other resources 

Any resources (assets) of the project, for which the appropriate folder is not allocated, should be stored in the __resources__ folder. These can be video files, php files (such as a form submission file), favicons, and others.

## Typography

For the correct display of text on the page, a typograph plugin was connected, which will automatically add non-breaking spaces and other characters so that the text is displayed everywhere according to all the rules of the language.

## Recommended plugins for VS Code

I recommend using VS Code, and the assembly implements interaction with this editor. So, when you open a folder with an assembly in VS Code, the editor will offer you previously uninstalled plugins that are suitable for the assembly to work correctly.

The most important one is __projects snippets__, this plugin "turns on" locally written build snippets.

## Local snippets

For convenience and speed of development, local snippets were added (located in the .vscode/snippets folder), which work thanks to the plugin described above. All snippets start with the __h-__ prefix. So far, the snippets contain only html (quick creation of navigation, social networks, the correct picture tag with webp and avif, and so on).

Some snippets are closely related to scss mixins, such as the burger button. The __h-burger__ snippet will create the HTML markup for your burger, and including the __@include burger__ mixin will add styles for it, which is extremely convenient.

A full list of snippets with mixin support will be published later.

## Ready modules 

Ready-made, frequently used modules for various tasks are gradually added to the assembly. The already added functionality will be listed below.

__Attention!__ The _functions.js_ file describes only the connection of all the necessary modules. It is recommended to use all this in separate files. For example, if you need to create a modal window, create a _modal.js_ file in the components folder, include it in the components.js file, and use the connection code in the _modal.js_ file.

### Burger menu

You can very quickly add a working burger to your page, for this you need:

1. In html call `h-burger` snippet
2. Add `data-menu` attribute to your potential menu in html
3. In scss call mixin `burger`

```
.burger { @include burger }
```

4. Go to the js/_functions.js file and uncomment the line with the connection of the burger js file
5. Customize menu display styles for yourself using the `menu--active` class

### modal window

You can very quickly add a working modal window to your page, for this you need:

1. In html, call snippet `h-cragi-btn`. It will create a button for the modal window, your task is only to fill in the `data-cragi-path` attribute
2. Next, call the `h-cragi-modal` snippet. It will create the basic layout of the window. Your task is to make the window according to the layout, fill in the content and be sure to designate the `data-cragi-target` attribute with the same value as the `data-cragi-path`
3. Go to the vendor.scss file and uncomment the line with the connection of the cragi-modal.min.css file
4. Go to the js/_functions.js file and uncomment the line with the import and connection of the `CragiModal` library

### Scroll control

You can disable\enable scrolling on the page (works even on iPhone). For this you need:

1. Go to the js/_functions.js file and uncomment the line with the import functions `disableScroll`, `enableScroll`.
__Important!__. If the page contains blocks with fixed positioning (for example, a header), add the class `fix-block` to it so that this block does not jump when the scroll is turned off.

It is not necessary to use the functions in the __functions__ file, do as you like.

### Tabs

You can very quickly add working tabs to your page, for this you need:

1. In html call snippet `h-tabs`. It will create the markup for the tabs, your task is only to fill in the `data-tabs` attribute
2. For the `.tabs` class, call the `tabs `mixin in scss (or use the library script connection from npm in the `vendor.scss` file)
4. Go to the js/_functions.js file and uncomment the line with the import and connection of the `CragiTabs` library

### Validation and sending data by mail

You can quickly set up validation and sending data to the mail (while working in test mode). How to use it:

1. Create a form with a unique class. Also specify unique classes for input fields.
2. Create an array in which the rules of the <a href="https://github.com/horprogs/Just-validate" target="_blank">just-validate</a> plugin will be passed, for example:
```
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in the name!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Please enter a valid phone number',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill phone!'
      }
    ]
  },
];
```
__IMPORTANT!__.  If your form has a field with a phone number, be sure to add new fields to the rules array: `tel: true, telError: 'Error entering phone number'`.
3. Connect the `validateForms` function, it is located in _functions.js_, passing three parameters there:
3.1. Line with form class
3.2. Array of rules
3.3. If necessary, you can create your own function that will be executed after submission, then it will also need to be passed as an argument to the `validateForms` function.

Code example:
```
import { validateForms } from './functions/validate-forms';
const rules1 = [
  {
    ruleSelector: '.input-name',
    rules: [
      {
        rule: 'minLength',
        value: 3
      },
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill in the name!'
      }
    ]
  },
  {
    ruleSelector: '.input-tel',
    tel: true,
    telError: 'Please enter a valid phone number',
    rules: [
      {
        rule: 'required',
        value: true,
        errorMessage: 'Fill phone!'
      }
    ]
  },
];

const afterForm = () => {
  console.log('Submission has occurred, you can write any actions here');
};

validateForms('.form-1', rules1, afterForm);
```

### Throttle function

To smooth the handling of frequently used events, you can use the ready-made function __throttle__. For this you need:

1. In the right place, import the function __throttle()__
2. Write the function you need, for example __func()__
3. Create a variable to place your function call inside throttle, for example: `let f = throttle(func)`
4. Use this variable as a function in a call, for example: `window.addEventListener('resize', f)`

### Fix fullscreen blocks

It is not uncommon for blocks with a height of 100vh to cause problems in mobile browsers. The ready-made fix-fullheight module will help solve this: 

1. Uncomment the line importing the __fix-fullheight.js__ file
2. Assign a height to the block you need not 100vh, but `var(--vh)`

This function uses the previously mentioned throttle. You can remove it, or change the time inside the __fix-fullheight.js__ file.

### Getting the header height

Sometimes it is required to get the exact height of the header if it is made by absolute or fixed positioning, and for this there is a `getHeaderHeght` function. How to use it:

1. Uncomment the line importing the __header-height.js__ file
2. Use css variable `--header-height` in the place you need

It is not necessary to use the functions in the __functions__ file, do as you like.

### Custom scroll

To implement custom scrolling, the __simplebar.js__ plugin is installed in the assembly. How to use it:

1. Uncomment the line importing the __simplebar__ plugin
2. Add the maximum height to the desired block and the `data-simplebar` attribute

### Viewport definition functions

You can run scripts at a certain width (resize support is not yet implemented) using the ready-made `isMobile()`, `isTablet()`, `isDesktop()` functions. To do this, you just need to include the one you need from the file, and then use the `if` condition inside.

### Tooltips

You can quickly create a working, accessible tooltip, which will also calculate the indentation itself using js. How to use it:

1. In html call snippet `h-tooltip`. It will create a button for the modal, your job is to fill in the `aria-describedby` и `id` attributes.
2. Next, you need to connect tooltips (code in the _functions.js_ file), and instead of el, pass the id or class of the tooltip button, and instead of tooltip, pass the id or class of the tooltip itself.
3. After that, you can style the tooltip however you like.

### Slider

You can quickly create a working swiper slider. How to use it:

1. In html call snippet `h-swiper`. It will create the basic structure of the swiper slider, you need to add your class for the swiper container.
2. Uncomment the line with connecting styles in the _vendor.scss_ file
3. Connect the swiper itself (code in the _functions.js_ file) and use it following the documentation.

### Scroll animations

You can quickly sketch out scroll animations using the plugin. How to use it:

1. Include the AOS.js library code (code in the _functions.js_ file) and initialize it.
2. Using the attributes from the plugin documentation, call certain animations, or write your own.

### Parallax on scroll

You can quickly sketch parallax elements on scroll using the plugin. How to use it:

1. Include the rellax.js library code (code in the _functions.js_ file) and initialize it by passing the class of the element(s).
2. Set this class to the required elements, and use the attributes from the documentation to customize animations.

### Smooth scroll to anchors

You can make smooth scrolling to anchors, which even works in Safari, with a plugin. How to use it:

1. Include the smooth-scroll.js library code (code in the _functions.js_ file) and initialize it by passing the selector of all anchor links.
2. Give all anchor links the `data-scroll` attribute.

### Swipe on mobile devices

You can implement various interactions with the page through swipe on mobile devices using the plugin. How to use it:

1. Include the swiped-events.js library code (code in the _functions.js_ file).
2. Use various events from the plugin library.

## Conclusion

Thanks to everyone who uses the assembly! If you notice any error, please send an issue with a detailed description of the problem, I'll look at everything and try to solve it. Thanks! 