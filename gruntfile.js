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
        src: ['js/*.js']
      }
    },

    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['js/**/*.js', 'tests/unit/**/*.js'],
        tasks: ['jshint:app', 'karma:unit']
      },
      styles: {
        files: ['styles/**/*.less'],
        tasks: ['less:css']
      },
      html: {
        files: ['index.html']
      },
      bower: {
        files: ['bower.json'],
        tasks: ['wiredep']
      }
    },

    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true,
        browsers: ['PhantomJS'],
        logLevel: 'WARN'
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
    },

    web_server: {
      options: {
        cors: true,
        port: 3000,
        nevercache: true,
        logRequests: true
      },
      foo: 'bar'
    },

    concurrent: {
      dev: {
        tasks: ['watch', 'web_server'],
        options: {
          logConcurrentOutput: true
        }
      }
    },

    wiredep: {
      app: {
        src: ['index.html']
      }
    }
  });

  grunt.registerTask('default', [
    'wiredep',
    'jshint:app',
    'karma:unit',
    'less:css',
    'concurrent:dev'
  ]);
};
