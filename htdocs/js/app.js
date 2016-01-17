requirejs.config({
	"baseUrl": "js",
	"paths": {
		// Libraries
		"Class": "libs/class",
		"Jquery": "libs/jquery",
		// Classes
		"Launcher": "app/classes/Launcher",
		"Display": "app/classes/display/Display",
		"Game": "app/classes/Game"
	}
});

require(['app/main']);