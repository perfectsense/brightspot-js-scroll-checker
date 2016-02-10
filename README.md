# brightspot-js-scroll-checker

Responds to a user scrolling on the page by adding/removing classes from the body element.

By default, will add the `bsp-scrolling` class to the body element when the user scrolls past the top of the page and the `bsp-scrolling-bottom` class when a user hits the bottom of the page.

## Installation

It's recommended that this plugin is used inside of ES6 space and using the brightspot-js-grunt task, as demonstrated in the [Brightspot Base](https://github.com/perfectsense/brightspot-base) project
- Pull in via your bower.json. It will be automatically included into your project by brightspot-js-grunt task
- Import in main.js to have it be included in your JS output
- Add in your main.js markup:

		import ScrollChecker from 'bsp-scroll-checker';
		new ScrollChecker();

## Options

		new ScrollChecker({
			offsetTop : 200
		});

*	**bottomMinHeight** - defaults to `768`, the minimum height the window has to be for the classBottom class to be added to the body element
*	**classScrolling** - defaults to `bsp-scrolling`, class added to the body element when the user has scrolled below the top of the page
*	**classBottom** - defaults to `bsp-scrolling-bottom`, class added to the body element when the user has scrolled to the bottom of the page
*	**offsetBottom** - defaults to `0`, specifying a number higher than 0 will cause the classBottom class to be added to the body element when the users scrolls within this many pixels of the bottom of the page
*	**offsetTop** - defaults to `0`, specifying a number higher than 0 will cause the classScrolling class to be added to the body element only after the user has scrolled this many pixels
*	**throttle** - defaults to `100`, milleseconds that the update function should be throttled on scroll events
