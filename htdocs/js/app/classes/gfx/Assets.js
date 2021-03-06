define(['Class', 'ImageLoader', 'SpriteSheet'], function(Class, ImageLoader, SpriteSheet) {
	var DEFAULT_WIDTH = 32;
	var DEFAULT_HEIGHT = 32;
	var assets = {};

	var Assets = Class.extend({
		init: function(_name, _path, _width, _height) {
			assets[_name] = this;
			this.name = _name;
			this.path = _path;
			this.width = _width
			this.height = _height;
			this.sheet = new SpriteSheet(ImageLoader.loadImage(this.path));
		}
	})
	
	Assets.DEFAULT_WIDTH = DEFAULT_WIDTH;
	Assets.DEFAULT_HEIGHT = DEFAULT_WIDTH;

	Assets.getAssets = function(_name) {
		return assets[_name];
	}

	var ast = new Assets('player', "res/textures/spritesheet.png", 32, 32);
	ast.idle = ast.sheet.crop(0, 0, 32, 32);

	return Assets;
})