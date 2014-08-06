'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'gruntfile.js',
          'app/js/**/*.js',
          'app/test/**/*.js'
        ]
      }
    },

    watch: {
      scripts: {
        files: [
          'app/js/**/*.js',
          'app/tests/**/*.js'
        ],
        tasks: ['jshint', 'karma:unit'],
        options: {
          spawn: false
        }
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'ERROR'
      }
    }
  });

  grunt.registerTask('default', [
    'jshint',
    'karma:unit',
    'watch'
  ]);
};
