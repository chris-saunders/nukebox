define([
	'jquery',
	'lodash',
	'backbone'
], function($, _, Backbone) {
	return Backbone.Model.extend({

		defaults: {
			"needle": "",
			"haystack": "",
			"result": ""
		},
		
		initialize: function() {
			var self = this;
			this.on('change:needle', function() {
				self.set({ result: self.get('haystack').where({ artist: self.get('needle') }) });
			});
		},

		validate: function(attrs) {
			if (attrs.hasOwnProperty('url') && !attrs.songs.findWhere({ url: attrs.url })) {
				//return "No song exists with that URL.";
			}
		}
	});
});
		
		
