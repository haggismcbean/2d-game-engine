define(['Entity'], function(Entity) {
	var DEFAULT_SPEED = 250;
	var DEFAULT_HEALTH = 10;
	var DEFAULT_CREATURE_WIDTH = 64;
	var DEFAULT_CREATURE_HEIGHT = 64;

	var Creature = Entity.extend({
		init: function(_handler, _x, _y, _width, _height) {
			this._super(_handler, _x, _y, _width, _height);
			// Creature Variables
			this.health = DEFAULT_HEALTH;
			this.speed = DEFAULT_SPEED;
			this.xMove = 0;
			this.yMove = 0;
		},
		move: function() {
			this.moveX();
			this.moveY();
		},
		moveX: function() {
			this.x += this.xMove
		},
		moveY: function() {
			this.y += this.yMove
		},
		
		// Getters
		getHealth: function() {
			return this.health;
		},
		getSpeed: function() {
			return this.speed;
		},

		// Setters
		setHealth: function(_health) {
			this.health = _health;
		},
		setSpeed: function(_speed) {
			this.speed = _speed;
		}
	})
	
	return Creature;
})