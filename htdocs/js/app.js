requirejs.config({
	"baseUrl": "js",
	"paths": {
		// Libraries
		"Class": "libs/class",
		"Jquery": "libs/jquery",
		// Classes
		"Assets": "app/classes/gfx/Assets",
		"Display": "app/classes/display/Display",
		"Game": "app/classes/Game",
		"GameState": "app/classes/states/GameState",
		"ImageLoader": "app/classes/gfx/ImageLoader",
		"Launcher": "app/classes/Launcher",
		"SpriteSheet": "app/classes/gfx/SpriteSheet",
		"State": "app/classes/states/States"
	}
});

require(['app/main']);