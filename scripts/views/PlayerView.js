define([
	'jquery',
	'lodash',
	'handlebars',
	'backbone',
	'models/player',
	'text!templates/playertpl.js'
], function($, _, Handlebars, Backbone, Player, PlayerTpl) {
	return Backbone.View.extend({

		initialize: function() {
			var self = this;
			this.model = this.options.model || new Player();
			this.model.on('change', function() {
				self.render();
			});
		},

		render: function() {
			var template = Handlebars.compile(PlayerTpl);
			this.$el.html( template(this.model.toJSON()) );
			return this;
		}
		
	});
});
