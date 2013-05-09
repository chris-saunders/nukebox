define(["models/player", "models/song", "collections/songs"], function(Player, Song, Songs) {

  describe("Collection - Songs", function() {

    var player,
        song,
        songs;

    beforeEach(function() {
      player = new Player();
      song = new Song({ artist: "TestArtist", album: "TestAlbum", track: "TestTrack", url: "TestUrl" });
      songs = new Songs();
    });

    afterEach(function() {
      player = song = songs = null;
    });

    it("Can add models as objects and arrays", function() {
      expect(songs.length).toBe(0);
      songs.add({ artist: "Test", album: "Test", track: "Test", url: "Test" });
      expect(songs.length).toBe(1);
      songs.add([{ artist: "Test", album: "Test", track: "Test", url: "Test" }]);
      expect(songs.length).toBe(2);
    });

    it("Can have a URL property to define the collection model endpoint", function() {
      expect(songs.url).toBe('scripts/collections/songs.json');
    });

  });

});