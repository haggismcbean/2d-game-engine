requirejs.config({
	"baseUrl": "js",
	"paths": {
		// Libraries
		"Class": "libs/class",
		"Jquery": "libs/jquery",
		// Classes
		"Assets": "app/classes/gfx/Assets",
		"Creature": "app/classes/entities/creatures/Creature",
		"Display": "app/classes/display/Display",
		"Entity": "app/classes/entities/Entity",
		"Game": "app/classes/Game",
		"GameState": "app/classes/states/GameState",
		"Handler": "app/classes/Handler",
		"ImageLoader": "app/classes/gfx/ImageLoader",
		"KeyManager": "app/classes/input/KeyManager",
		"Launcher": "app/classes/Launcher",
		"Player": "app/classes/entities/creatures/Player",
		"SpriteSheet": "app/classes/gfx/SpriteSheet",
		"State": "app/classes/states/State"
	}
});

require(['app/main']);