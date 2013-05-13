define([
  "models/player", 
  "models/song", 
  "collections/songs"
], function(Player, Song, Songs) {

  describe("Model - Player", function() {

    var player,
        song;

    beforeEach(function() {
      player = new Player();
      song = new Song({ artist: "TestArtist", album: "TestAlbum", track: "TestTrack", url: "TestUrl" });
    });

    afterEach(function() {
      player = song = null;
    });


    it("Will load a player with no values set", function() {
      expect(player.get('artist')).toBe('Artist');
      expect(player.get('album')).toBe('Album');
      expect(player.get('track')).toBe('Track');
      expect(player.get('url')).toBe('');
    });

    it("Can load a song into the player", function() {
      player.set(song.toJSON());

      expect(player.get('artist')).toBe('TestArtist');
      expect(player.get('album')).toBe('TestAlbum');
      expect(player.get('track')).toBe('TestTrack');
      expect(player.get('url')).toBe('TestUrl');
    });

    it("Fires a custom event when the song is replaced", function() {
      var spy = jasmine.createSpy('-change event callback-');
      player.on('change', spy);
      player.set(song.toJSON());

      expect(spy).toHaveBeenCalled();
    });

    it("Can contain validation to ensure prospective song url is valid", function() {
      var songs = new Songs([{ artist: "Dude", album: "Things", track: "Boner", url: "http://localhost/ace.mp3" }]);
      var errorCallback = jasmine.createSpy('-error event callback');
      
      player.on('invalid', errorCallback);
      player.set({songs: songs, url: '12'}, {validate: true});

      var errorArgs = errorCallback.mostRecentCall.args;

      expect(errorArgs).toBeDefined();
      expect(errorArgs[0]).toBe(player);
      expect(errorArgs[1]).toBe('No song exists with that URL.');
    });

  });

});