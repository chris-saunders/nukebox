define([
	'jquery',
	'lodash',
	'backbone'
], function($, _, Backbone) {
	return Backbone.Model.extend({

		defaults: {
			needle: "",
			haystack: "",
			result: ""
		},
		
		initialize: function() {
		},

		validate: function(attrs) {
		},

		search: function(needle) {
			this.set({ result: this.get('haystack').where({ artist: needle }) });
		}
	});
});
		
		
