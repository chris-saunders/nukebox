define([
  "models/song"
], function(Song) {

  describe("Model - Song", function() {

    var song;

    beforeEach(function() {
      song = new Song();
    });

    afterEach(function() {
      song = null;
    });


    it("Can be created with default values for its attributes", function() {
      expect(song.get('artist')).toBe('');
      expect(song.get('album')).toBe('');
      expect(song.get('track')).toBe('');
      expect(song.get('url')).toBe('');
    });

    it("Will set passed attributes on the model instance when created", function() {
      var newSong = new Song({ artist: "The Beatles", album: "Let it Be", track: "Let it Be", url: "08.Let%20it%20Be" });
      expect(newSong.get('artist')).toBe("The Beatles");
      expect(newSong.get('album')).toBe("Let it Be");
      expect(newSong.get('track')).toBe("Let it Be");
      expect(newSong.get('url')).toBe("08.Let%20it%20Be");
    });
    
  });

});