module.exports = function(grunt) {
  grunt.initConfig({
    cool: {
      command: 'phantomjs test/lib/run-jasmine.js http://localhost:8000/test',
      stdout: true
    },
    jasmine: {
      pivotal: {
        src: 'test/src/**/*Src.js',
        options: {
          specs: 'test/spec/*Spec.js',
          helpers: 'test/spec/*Helper.js'
        }
      },
      models: {
        src: 'scripts/models/song.js',
        options: {
          specs: 'test/spec/models/*Spec.js',
          helpers: 'test/spec/models/*Helper.js',
          template: require('grunt-template-jasmine-requirejs'),
          templateOptions: {
            paths: {
              jquery: 'scripts/vendor/jquery/jquery',
              lodash: 'scripts/vendor/lodash/lodash',
              handlebars: 'scripts/vendor/handlebars/handlebars',
              backbone: 'scripts/vendor/backbone/backbone',
              models: 'scripts/models/'
            },
            shim: {
              lodash: {
                deps: [],
                exports: '_'
              },
              handlebars: {
                deps: [],
                exports: 'Handlebars'
              },
              backbone: {
                deps: ['jquery', 'lodash'],
                exports: 'Backbone'
              }
            },
            deps: ['jquery', 'lodash', 'handlebars', 'backbone']
          }
        }
      }
    }
  });


  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['cool']);

}
