define([
  "views/SearchView",
  "components/table/scripts/views/TableView"
], function(SearchView, CompTableView) {

  describe("View - Search", function() {

    var collection,
        view;

    beforeEach(function() {
      collection = new Backbone.Collection();
      collection.add([{ artist: "foo" }, { artist: "bar" }, { artist: "bar" }]);
      view = new SearchView({ haystack: collection });
    });

    afterEach(function() {
      collection = null;
      view = null;
    });

    it("can render the template", function() {
      expect(view.render()).toEqual(view);
    });

    it("can render table component", function() {
    });

    it("will search given haystack for term on user interaction", function() {
      var keyup = $.Event('keyup');
      keyup.which = 70;

      spyOn(view.model, 'set');

      view.render();
      view.$('.needle').trigger(keyup);

      expect(view.model.set).toHaveBeenCalled();
    });

  });

});