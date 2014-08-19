'use strict';

angular
  .module('sample.messaging', [])

  .controller('MessagingCtrl', function ($scope, $log, $timeout) {
    var timeoutPromise = null;

    $scope.$on('message:error', function (evt, data) {

      // Log the event
      $log.info('MessagingCtrl: received [' + evt.name + '] event with ' + JSON.stringify(data));

      // Set the error to scope
      $scope.error = {
        message: data.message
      };

      //do not clear error if currently set to clear
      if(timeoutPromise) {
        $timeout.cancel(timeoutPromise);
      }

      // clear error at specified time
      timeoutPromise = $timeout(function () {
        $scope.error = null;
      }, 1500);

    });
  });

