define([
	'jquery',
	'lodash',
	'backbone',
	'models/song'
], function($, _, Backbone, Song) {
	return Backbone.Collection.extend({
		model: Song,
		url: 'scripts/collections/songs.json'
	});
});