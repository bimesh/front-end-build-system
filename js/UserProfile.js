'use strict';

angular
  .module('sample.userProfile', [])

  .controller('UserProfileCtrl', function ($scope, $rootScope, $log) {

    /*
     The user profile controller does not care how the user logs in, only that the user has logged in.
     As long as the contract between the event publisher and subscriber is consistent, this will continue to function.
     We can write unit tests to ensure the contact is not broken on both the publisher and subscriber.
     */
    $scope.$on('user:logged-in', function (evt, data) {
      $log.info('UserProfileCtrl: received [' + evt.name + '] event with ' + JSON.stringify(data));

      $scope.userInfo = {
        userName: data.userName,
        userId: data.userId
      };
    });

    $scope.$on('user:logout', function () {
      $scope.userInfo = null;
    });

    /*
     we pass the event an explicit object so the contract is clearly defined.
     We use events to decouple the consumer and the producers in our system.
     */
    $scope.logout = function () {
      $rootScope.$broadcast('user:logout', {
        userId: $scope.userInfo.userId
      });
    };
  });

