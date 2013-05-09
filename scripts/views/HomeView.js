define([
	'jquery',
	'lodash',
	'handlebars',
	'backbone',
	'views/PlayerView',
	'views/SearchView',
	'text!templates/hometpl.js'
], function($, _, Handlebars, Backbone, PlayerView, SearchView, HomeTpl) {
	return Backbone.View.extend({

		initialize: function() {
		},

		render: function() {
			var playerView,
				searchView;

			this.$el.html(Handlebars.compile( HomeTpl ));
			this.$el.find('h1').after('<div class="playerWrapper"></div>');
			playerView = new PlayerView({ el: $('.playerWrapper') }).render();
			
			this.$el.find('.playerWrapper').after('<div class="searchWrapper"></div>');
			searchView = new SearchView({ el: $('.searchWrapper'), haystack: this.options.haystack }).render();
			
			return this;
		}
		
	});
});
