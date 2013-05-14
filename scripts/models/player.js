define([
	'jquery',
	'lodash',
	'backbone',
	'models/song'
], function($, _, Backbone, Song) {
	return Backbone.Model.extend({

		defaults: {
			currentSong: new Song
		},
		
		initialize: function() {
		},

		validate: function(attrs) {
		},

		loadSong: function(song) {
			this.set({ currentSong: song }, { validate: true });
		}
	});
});
		
		
