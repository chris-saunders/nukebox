define([
	'jquery',
	'lodash',
	'handlebars',
	'backbone',
	'models/search',
	'text!templates/searchtpl.js',
	'components/table/scripts/views/TableView'
], function($, _, Handlebars, Backbone, Search, SearchTpl, CompTableView) {
	return Backbone.View.extend({
		
		events: {
    		"keyup .needle": "search"
    	},

    	initialize: function() {
    		var self = this;
    		this.columnTitles = [{ 
				key: "artist",
				value: "Artist"
			}, {
				key: "album",
				value: "Album"
			}, {
				key: "track",
				value: "Track"
			}];

    		this.model = new Search({ haystack: this.options.haystack });
    		this.compTableView = new CompTableView({
    			model: new Backbone.Model({ columnTitles: self.columnTitles, rows: [{}] })
    		});
		},

		render: function(){
			var template = Handlebars.compile( SearchTpl );
			this.$el.html( template );

			this.$el.append(this.compTableView.el);
			return this;
    	},

    	search: function(ev) {
    		this.model.set({ needle: ev.target.value });
    		this.compTableView.model.set({
    			columnTitles: this.columnTitles,
    			rows: this.model.get('result') ? this.model.get('result') : [{}]
    		});
    	}
	});
});
