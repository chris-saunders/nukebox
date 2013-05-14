define([
  "models/player", 
  "models/song"
], function(Player, Song) {

  describe("Model_Player", function() {

    var model,
        song;

    beforeEach(function() {
      model = new Player();
      song = new Song({ 
        artist: "TestArtist", 
        album: "TestAlbum", 
        track: "TestTrack", 
        url: "TestUrl" 
      });
    });

    afterEach(function() {
      player = song = null;
    });

    it("is defined", function() {
      expect(model).not.toBeUndefined();
    });

    // Duck-typing, although I have my reservations
    it("looks like a BB model", function() {
      expect( _.isFunction(model.get) ).toBe(true);
      expect( _.isFunction(model.set) ).toBe(true);
    });

    it("can add a song model (that is a BB model) via helper method", function() {
      model.loadSong(song);
      expect(model.get('currentSong')).toEqual(song);
      expect( _.isFunction(model.get('currentSong').isValid) ).toBe(true);
    });

    it("fires a custom event when the song is replaced", function() {
      var spy = jasmine.createSpy('change:currentSong');
      model.on('change:currentSong', spy);
      model.loadSong(song);

      expect(spy).toHaveBeenCalled();
    });

    // it("Can contain validation to ensure prospective song url is valid", function() {
    //   var errorCallback = jasmine.createSpy('-error event callback');
      
    //   player.on('invalid', errorCallback);
    //   player.modifyTrack({ url: '12'});

    //   var errorArgs = errorCallback.mostRecentCall.args;

    //   expect(errorArgs).toBeDefined();
    //   expect(errorArgs[0]).toBe(player);
    //   expect(errorArgs[1]).toBe('No song exists with that URL.');
    // });

  });

});