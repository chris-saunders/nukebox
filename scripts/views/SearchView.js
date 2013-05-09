define([
	'jquery',
	'lodash',
	'handlebars',
	'backbone',
	'models/search',
	'text!templates/searchtpl.js'
], function($, _, Handlebars, Backbone, Search, SearchTpl) {
	return Backbone.View.extend({
		
		events: {
    		"keyup .needle": "search"
    	},

    	initialize: function() {
    		this.model = new Search({ haystack: this.options.haystack });
		},

		render: function(){
			var template = Handlebars.compile( SearchTpl );
			this.$el.html( template );
			return this;
    	},

    	search: function(ev) {
    		this.model.set({ needle: ev.target.value });
    	}
	});
});
