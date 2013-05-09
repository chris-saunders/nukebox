define([
  'jquery',
  'lodash',
  'backbone',
  'collections/songs',
  'views/HomeView',
  'components/loader/scripts/views/LoaderView',
], function($, _, Backbone, Songs, HomeView, LoaderView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      '*actions': 'default'
    }
  });
  
  var initialize = function(){

    var appRouter = new AppRouter;

    appRouter.on('route:default', function (actions) {     
      var loaderView = new LoaderView({ 
        model: new Songs(), 
        finished: function(model) { 
          var homeView = new HomeView({ el: $('.wrapper'), haystack: model }).render(); 
        }
      }).render();
      $('body').append(loaderView.el);
    });

    Backbone.history.start({ pushState: true});
  };

  return { 
    initialize: initialize
  };
});
