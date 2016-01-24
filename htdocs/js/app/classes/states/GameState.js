define(['State', 'Player'], function(State, Player) {
	var GameState = State.extend({
		init: function(_handler) {
			// calls the parent's constructor
			this._super(_handler);
			this.player = new Player(_handler, 20, 20);
		},
		tick: function(_dt) {
			this.player.tick(_dt);
		},
		render: function(_g) {
			this.player.render(_g);
		}
	})
	return GameState;
})