define([
  "models/song"
], function(Song) {

  describe("Model_Song", function() {

    var model;

    beforeEach(function() {
      model = new Song();
    });

    afterEach(function() {
      model = null;
    });

    it("is defined", function() {
      expect(model).not.toBeUndefined();
    });

    // Duck-typing, although I have my reservations
    it("looks like a BB model", function() {
      expect( _.isFunction(model.get) ).toBe(true);
      expect( _.isFunction(model.set) ).toBe(true);
    });

    it("can be created with default values for its attributes", function() {
      expect(model.get('artist')).toBe('');
      expect(model.get('album')).toBe('');
      expect(model.get('track')).toBe('');
      expect(model.get('link')).toBe('');
    });

    it("will set passed attributes on the model instance when created", function() {
      model = null;
      model = new Song({ 
        artist: "The Beatles", 
        album: "Let it Be", 
        track: "Let it Be", 
        link: "08.Let%20it%20Be" 
      });
      expect(model.get('artist')).toBe("The Beatles");
      expect(model.get('album')).toBe("Let it Be");
      expect(model.get('track')).toBe("Let it Be");
      expect(model.get('link')).toBe("08.Let%20it%20Be");
    });
    
  });

});