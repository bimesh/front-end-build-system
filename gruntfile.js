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
      app: {
        src: [
          'gruntfile.js',
          'js/*.js'
        ]
      }
    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['js/**/*.js', 'tests/unit/*.js'],
        tasks: ['jshint:app', 'karma:unit']
      },
      styles: {
        files: ['styles/**/*.less'],
        tasks: ['less:css']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'ERROR'
      }
    },

    less: {
      css: {
        options: {
          strictImports: true
        },
        files: {
          'styles/main.css': 'styles/main.less'
        }
      }
    }
  });

  grunt.registerTask('default', [
    'jshint:app',
    'karma:unit',
    'less:css',
    'watch'
  ]);
};
