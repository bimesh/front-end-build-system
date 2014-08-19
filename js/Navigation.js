'use strict';

angular
  .module('sample.navigation', ['sample.config'])

  .controller('HeaderCtrl', function ($scope, CONFIG) {
    $scope.CURRENT_VERSION = CONFIG.CURRENT_VERSION;
    $scope.PROJECT_NAME = CONFIG.PROJECT_NAME;
  })

  .controller('HeaderLoginCtrl', function ($scope, $rootScope, $log) {

    $scope.loginInfo = {
      userName: '',
      password: ''
    };

    $scope.userAuthenticated = false;

    $scope.login = function(loginInfo) {

      //This is NOT the most secure auth system..
      if(loginInfo.password !== 'password') {
        return $rootScope.$broadcast('message:error', {
          message: 'Invalid Password!'
        });
      }

      $scope.userAuthenticated = true;

      $log.warn('HeaderCtrl: user ' + loginInfo.username + ' logged in with password: ' + loginInfo.password);

      /*
      we pass the event an explicit object so the contract is clearly defined.
      We use events to decouple the consumer and the producers in our system.
       */
      $rootScope.$broadcast('user:logged-in', {
        userId: Math.floor((Math.random() * 10) + 1),
        userName: loginInfo.username
      });
    };

    $scope.$on('user:logout', function () {
      $scope.userAuthenticated = false;
      $scope.loginInfo = {
        userName: '',
        password: ''
      };
    });
  });