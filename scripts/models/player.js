define([
	'jquery',
	'lodash',
	'backbone'
], function($, _, Backbone) {
	return Backbone.Model.extend({

		defaults: {
			"artist": "Artist",
			"album": "Album",
			"track": "Track",
			"url": ""
		},
		
		initialize: function() {
		},

		validate: function(attrs) {
			if (attrs.hasOwnProperty('url') && !attrs.songs.findWhere({ url: attrs.url })) {
				return "No song exists with that URL.";
			}
		}
	});
});
		
		
