define([
	'jquery',
	'lodash',
	'backbone'
], function($, _, Backbone) {
	return Backbone.Model.extend({

		defaults: {
			artist: "",
			album: "",
			track: "",
			link: ""
		},
		
		initialize: function() {
		}
	});
});
		
		
