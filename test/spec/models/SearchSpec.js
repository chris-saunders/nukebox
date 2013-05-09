define(["models/search"], function(Search) {

  describe("Model - Search", function() {

    beforeEach(function() {
      this.model = new Search();
    });

    afterEach(function() {
      this.model = null;
    });

    describe("Setup", function() {

      it("can be created with default values for its attributes", function() {
        expect(this.model.get('needle')).toBe('');
        expect(this.model.get('haystack')).toBe('');
        expect(this.model.get('result')).toBe('');
      });  
    
    });

    describe("Manipulation", function() {

      beforeEach(function() {
        var collection = new Backbone.Collection();
        collection.add([{ needle: "foo" }, { needle: "bar" }, { needle: "bar" }]);
        this.model.set({ haystack: collection });
      });
      
      it("can search a model for a term", function() {
        this.model.set({ needle: "bar" });
        expect(this.model.get('result')[0].get('needle'))
          .toBe('bar');
      });

      it("can search a model for a term and receive an array of results", function() {
        this.model.set({ needle: "bar" });
        expect(this.model.get('result').length)
          .toBeGreaterThan(0);
      });

      it("can return a search result", function() {
        this.model.set({ needle: "bar" });
        expect(this.model.get('result').length).toEqual(2);
      });
    
    });

  });

});