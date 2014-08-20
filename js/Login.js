'use strict';

angular
  .module('sample.login', [])
  .controller('LoginCtrl', function ($scope, $rootScope) {
    $scope.userAuthenticated = false;

    $scope.loginInfo = {
      username: '',
      password: ''
    };

    $scope.login = function(loginInfo) {
      if(loginInfo.password !== 'password') {
        return $rootScope.$broadcast('message:error', { message: 'Invalid Password!' });
      }

      $scope.userAuthenticated = true;

      $rootScope.$broadcast('user:logged-in', {
        userId: Math.floor((Math.random() * 10) + 1),
        username: loginInfo.username
      });
    };

    $scope.$on('user:logout', function () {
      $scope.userAuthenticated = false;
      $scope.loginInfo = {
        username: '',
        password: ''
      };
    });
  });