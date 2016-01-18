define(['State', 'Assets'], function(State, Assets) {
	var GameState = State.extend({
		init: function() {
			// calls the parent's constructor
			this._super();
		}
	})


	GameState.prototype.tick = function(_dt) {

	}

	GameState.prototype.render = function(_g) {
		var hero = Assets.getAssets("hero");
		_g.myDrawImage(hero.idle, 10, 15, hero.width, hero.height);
	}

	return GameState;
})