define([ 
  "views/SearchView"
], function(SearchView) {

  describe("View - Search", function() {

    beforeEach(function() {
      var collection = new Backbone.Collection();
      this.model = new Backbone.Model();
      collection.add([{ name: "foo" }, { name: "bar" }, { name: "bar" }]);
      this.model.set({ haystack: collection });
      this.view = new SearchView({ model: this.model });
    });

    it("can render the template", function() {
      expect(this.view.render()).toEqual(this.view);
    });

    it("will search given haystack for term on user interaction", function() {
      var modelChange = jasmine.createSpy('- change event callback -');
      this.model.on('change', modelChange);

      this.view.render();
      var keyup = $.Event('keyup');
      keyup.which = 70;
      this.view.$('input[type=text]').trigger(keyup);
      expect(modelChange).toHaveBeenCalled();
    });

  });

});