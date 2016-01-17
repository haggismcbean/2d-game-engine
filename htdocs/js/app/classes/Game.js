define(['Class', 'Display', 'ImageLoader'], function(Class, Display, ImageLoader) {
	var _this;
	var isRunning = false;
	var title, width, height, g, display;

	var Game = Class.extend({
		init: function(_title, _width, _height) {
			_this = this;
			title = _title;
			width = _width;
			height = _height;
		}
	})

	function init() {
		display = new Display(title, width, height);
		g = display.getGraphics();
	}

	var img = ImageLoader.loadImage("http://www.clipartlord.com/wp-content/uploads/2013/02/hedgehog.png");

	function tick(_dt) {

	}

	function render() {
		g.clearRect(0, 0, width, height);
		g.drawImage(img, 20, 20);
	}

	Game.prototype.start = function() {
		if (isRunning) {
			return;
		} else {
			isRunning = true;
			this.run();
		}
	}

	Game.prototype.run = function() {
		init();
		var fps = 30;
		var timePerTick = 1000 / fps;
		var delta = 0;
		var now;
		var lastTime = Date.now();
		var timer = 0;
		var ticks = 0;

		function loop() {
			if (!isRunning) {
				return;
			}
			now = Date.now();
			delta = now - lastTime;
			timer += delta;
			lastTime = now;
			
			if (timer >= timePerTick) {
				dt = timer / 1000;
				tick(dt);
				render();
				timer = 0;
			}

			window.requestAnimationFrame(loop);
		}

		loop();
	}

	return Game;
})