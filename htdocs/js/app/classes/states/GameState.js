define(['State', 'Assets'], function(State, Assets) {
	var GameState = State.extend({
		init: function(_handler) {
			// calls the parent's constructor
			this._super(_handler);
		}
	})

	var x = 0;
	var y = 0;
	GameState.prototype.tick = function(_dt) {
		if (this.handler.getKeyManager().up) {
			y -= 50 * _dt;
		}
		if (this.handler.getKeyManager().down) {
			y += 50 * _dt;
		}
		if (this.handler.getKeyManager().left) {
			x -= 50 * _dt;
		}
		if (this.handler.getKeyManager().right) {
			x += 50 * _dt;
		}
	}

	GameState.prototype.render = function(_g) {
		var hero = Assets.getAssets("hero");
		_g.myDrawImage(hero.idle, x, y, hero.width, hero.height);
	}

	return GameState;
})