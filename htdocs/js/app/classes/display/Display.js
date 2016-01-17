define(['Jquery', 'Class'], function($, Class){
	// Private Variables
	var canvas, title, width, height, graphics;

	var Display = Class.extend({
		init: function(_title, _width, _height) {
			title = _title;
			width = _width;
			height = _height;

			createDisplay();
		}
	});

	// Private Method
	function createDisplay() {
		document.title = title;
		var body = document.body;

		var canvas = document.createElement("canvas");
		canvas.style.width = width;
		canvas.style.height = height;

		body.appendChild(canvas);

		graphics = canvas.getContext("2d");
	}

	// Getters
	Display.prototype.getTitle = function() {
		return title;
	};

	Display.prototype.getWidth = function() {
		return width;
	};

	Display.prototype.getHeight = function() {
		return height;
	};

	Display.prototype.getGraphics = function() {
		return graphics;
	};

	return Display;
})