define([
  "models/player", 
  "models/song", 
  "collections/songs", 
  "views/HomeView"
], function(Player, Song, Songs, HomeView) {

  describe("View - Home", function() {

    var homeView;

    beforeEach(function() {
      $('body').append('<div class="wrapper"></div>');
      homeView = new HomeView({ el: $('.wrapper'), model: new Player() });
    });

    afterEach(function() {
      homeView.remove();
      $('.wrapper').remove();
    });

    it("should be tied to a DOM element when created, based off the property provided", function() {
      expect(homeView.el.tagName.toLowerCase()).toBe('div');
    });

    it("should have a class of 'wrapper'", function() {
      expect(homeView.el).toHaveClass('wrapper');
    });

    it("is backed by a model instance", function() {
      expect(homeView.model).toBeDefined();
      expect(homeView.model.get('artist')).toBe('Artist');
    });

    it("should render the Home Template properly", function() {
      homeView.render();
      expect(homeView.$('h1'))
        .toHaveText('Welcome to Nukebox');
    });

    it("should invoke player properly", function() {
      homeView.render();
      expect(homeView.$('.playerWrapper')).toBeVisible();
    });

    it("should invoke search properly", function() {
      homeView.render();
      expect(homeView.$('.searchWrapper')).toBeVisible();
    });

  });

});