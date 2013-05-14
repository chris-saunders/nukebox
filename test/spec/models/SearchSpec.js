define([
  "models/search"
], function(Search) {

  describe("Model_Search", function() {

    var model,
        haystack = new Backbone.Collection([
          { artist: "foo" }, 
          { artist: "bar" }, 
          { artist: "bar" }
        ]);

    beforeEach(function() {
      model = new Search();
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
      expect(model.get('needle')).toBe('');
      expect(model.get('haystack')).toBe('');
      expect(model.get('result')).toBe('');
    });
      
    it("can search a model for a term and fires a change event", function() {
      var spy = jasmine.createSpy('change:result');
      model = new Search({ haystack: haystack });
      model.on('change:result', spy);
      model.search("bar");
      expect(model.get('result')[0].get('artist'))
        .toBe('bar');
      expect(model.get('result').length).toEqual(2);
      expect(spy).toHaveBeenCalled();
    });

  });

});