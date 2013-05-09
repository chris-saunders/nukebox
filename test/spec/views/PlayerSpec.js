define([
  "models/player", 
  "models/song", 
  "collections/songs", 
  "views/PlayerView"
], function(Player, Song, Songs, PlayerView) {

  describe("View - Player", function() {

    beforeEach(function() {
      this.model = new Backbone.Model({
        artist: "Artist",
        album: "Album",
        track: "Track",
        url: "http://url.com"
      });

      this.view = new PlayerView({ model: this.model });
    });

    describe("Render", function() {

      it("returns the view object", function() {
        expect(this.view.render()).toEqual(this.view);
      });

      it("can redraw the view with a newly selected song", function() {
        this.view.render();
        this.view.model.set({ artist: "John Lennon", album: "Imagine", track: "Imagine" });
        expect(this.view.$('.artist')).toHaveText('Artist: John Lennon');
      });

    });

    describe("Template", function() {

      beforeEach(function() {
        this.view.render();
      });

      it("should display: artist, album, track", function() {
        expect(this.view.$('.artist')).toHaveText('Artist: Artist');
        expect(this.view.$('.album')).toHaveText('Album: Album');
        expect(this.view.$('.track')).toHaveText('Track: Track');
      });

    });

  });

});