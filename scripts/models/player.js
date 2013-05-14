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
			if (attrs.hasOwnProperty('url') && !attrs.songs.findWhere({ url: attrs.url })) {
				return "No song exists with that URL.";
			}
		},

		loadSong: function(song) {
			this.set({ currentSong: song }, { validate: true });
		}
	});
});
		
		
