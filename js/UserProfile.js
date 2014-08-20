'use strict';

angular
  .module('sample.userProfile', [])
  .controller('UserProfileCtrl', function ($scope, $rootScope) {

    $scope.$on('user:logged-in', function (evt, data) {
      $scope.userInfo = {
        username: data.username,
        userId: data.userId
      };
    });

    $scope.$on('user:logout', function () {
      $scope.userInfo = null;
    });

    $scope.logout = function () {
      $rootScope.$broadcast('user:logout', {
        userId: $scope.userInfo.userId
      });
    };
  });

