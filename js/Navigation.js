'use strict';

angular
  .module('sample.navigation', ['sample.config'])

  .controller('HeaderCtrl', function ($scope, CONFIG) {
    $scope.CURRENT_VERSION = CONFIG.CURRENT_VERSION;
    $scope.PROJECT_NAME = CONFIG.PROJECT_NAME;
  });

