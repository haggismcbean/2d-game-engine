requirejs.config({
	"baseUrl": "js",
	"paths": {
		// Libraries
		"Class": "libs/class",
		"Jquery": "libs/jquery",
		// Classes
		"Display": "app/classes/display/Display",
		"Game": "app/classes/Game",
		"ImageLoader": "app/classes/gfx/ImageLoader",
		"Launcher": "app/classes/Launcher"
	}
});

require(['app/main']);